import { FillType, Path, PathOp, Rect } from 'canvaskit-wasm'
import { ManagedSkiaObject, Skia } from '@Skia'

export class CkPath extends ManagedSkiaObject<Path> {
  static from (other: CkPath) {
    const path = new CkPath()
    path.fillType = other.fillType
    path.skia = other.skia.copy()

    return path
  }

  static fromPath (skPath: Path, fillType: FillType) {
    const path = new CkPath()
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

  public _fillType!: FillType
  public get fillType () { 
    return this._fillType 
  }
  public set fillType (fillType: FillType) { 
    if (this.fillType !== fillType) {
      this._fillType = fillType
      this.skia.setFillType(fillType)
    }
  }

  public get isEmpty () {
    return this.skia.isEmpty()
  }

  public cachedCommands: Float32Array | null = null

  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  ) {
    const toDegree = 180.0 / Math.PI
    this.skia.addArc(oval, startAngle * toDegree, sweepAngle * toDegree)  
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

  init (skia: Path): Path {
    this.fillType = Skia.FillType.Winding

    return skia
  }

  malloc (): Path {
    this.skia = new Skia.Path()
    return this.skia
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