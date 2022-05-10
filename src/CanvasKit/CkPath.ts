import { FillType, Path, PathOp, Rect } from 'canvaskit-wasm'
import { ManagedSkiaObject, Skia } from '@Skia'
import { setter } from '@Shared' 

export class CkPath extends ManagedSkiaObject<Path> {
  static from (other: CkPath) {
    const path = CkPath.malloc()
    path.fillType = other.fillType
    path.skia = other.skia.copy()

    return path
  }

  static fromPath (skPath: Path, fillType: FillType) {
    const path = CkPath.malloc()
    path.fillType = fillType
    path.skia = skPath
    return path
  }

  static combine (
    operation: PathOp,
    pathA: CkPath,
    pathB: CkPath
  ) {
    const path = Skia.Path.MakeFromOp(
      pathA.skia,
      pathB.skia,
      operation
    ) as Path

    return CkPath.fromPath(path, pathA.fillType)
  }

  static malloc (): CkPath {
    return new CkPath(new Skia.Path())
  }

  @setter(function (this, value) {
    if (this.fillType !== value) {
      this.skia.setFillType(value)
      this._fillType = value
    }
  }) public fillType = Skia.FillType.Winding

  public get isEmpty () {
    return this.skia.isEmpty()
  }

  public cachedCommands: Float32Array | null = null

  constructor (skia: Path) {
    super(skia)
    this.fillType = Skia.FillType.Winding
  }

  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  ) {
    const toDegree = 180.0 / Math.PI
    this.skia.addArc(oval, startAngle * toDegree, sweepAngle * toDegree)  
  }

  addOval (oval: Rect) {
    this.skia.addOval(oval, false, 1)
  }

  addPath (
    path,
    offset: Float32Array,
    matrix4
  ) {

  }

  moveTo (x: number, y: number) {
    this.skia.moveTo(x, y)
  }

  lineTo (x: number, y: number) {
    this.skia.lineTo(x, y)
  }

  reset () {
    this.fillType = Skia.FillType.Winding
    this.skia.reset()
  }

  close () {
    this.skia.close()
  }

  transform (matrix: Float64Array): CkPath {
    const path = this.skia.copy()
    path.transform(
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8],
    )

    return CkPath.fromPath(path, this.fillType)
  }

  delete () {
    this.cachedCommands = this.skia?.toCmds()
    super.delete()
  }

  resurrect (): Path {
    const path = Skia.MakeFromCmds(this.cachedCommands as Float32Array)
    path?.setFillType(this.fillType)
    return path as Path
  }

  toSvgString (): string {
    return this.skia.toSVGString()
  }
}
