import { ManagedSkiaObject, Skia, SkiaPath, SkiaFillType, SkiaPathOp } from '@Skia'
import { setter } from '@Shared' 
import { Offset, Rect } from './Geometry'

export class Path extends ManagedSkiaObject<SkiaPath> {
  static from (other: Path) {
    const path = Path.malloc()
    path.fillType = other.fillType
    path.skia = other.skia.copy()

    return path
  }

  static fromPath (skPath: SkiaPath, fillType: SkiaFillType) {
    const path = Path.malloc()
    path.fillType = fillType
    path.skia = skPath
    return path
  }

  static combine (
    operation: SkiaPathOp,
    pathA: Path,
    pathB: Path
  ) {
    const path = Skia.Path.MakeFromOp(
      pathA.skia,
      pathB.skia,
      operation
    ) as SkiaPath

    return Path.fromPath(path, pathA.fillType)
  }

  static malloc (): Path {
    return new Path(new Skia.Path())
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

  constructor (skia: SkiaPath) {
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
    path: SkiaPath,
    offset: Offset,
    matrix4
  ) {

  }

  addRect (
    rect: Rect
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

  transform (matrix: Float64Array): Path {
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

    return Path.fromPath(path, this.fillType)
  }

  delete () {
    this.cachedCommands = this.skia?.toCmds()
    super.delete()
  }

  resurrect (): SkiaPath {
    const path = Skia.MakeFromCmds(this.cachedCommands as Float32Array)
    path?.setFillType(this.fillType)
    return path as SkiaPath
  }

  toSvgString (): string {
    return this.skia.toSVGString()
  }
}
