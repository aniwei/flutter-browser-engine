import { ManagedSkiaObject, Skia, SkiaPath, SkiaFillType, SkiaPathOp } from '@Skia'
import { setter } from '@Shared' 
import { Offset, Radius, Rect, RRect } from './Geometry'

export interface IPath {
  fillType: SkiaFillType
  moveTo (
    x: number, 
    y: number
  )
  relativeMoveTo (
    dx: number, 
    dy: number
  )
  lineTo (
    x: number, 
    y: number
  )
  relativeLineTo (
    dx: number, 
    dy: number
  )
  quadraticBezierTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
  )
  relativeQuadraticBezierTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
  )
  cubicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    x3: number, 
    y3: number
  )
  relativeCubicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    x3: number, 
    y3: number
  )
  conicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    w: number
  )
  relativeConicTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    w: number
  )
  arcTo (
    rect: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    forceMoveTo: boolean
  )
  arcToPoint (
    arcEnd: Offset,
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean,
  )
  relativeArcToPoint(
    arcEndDelta: Offset,
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean,
  )
  addRect (rect: Rect)
  addOval (oval: Rect)
  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  )
  addPolygon (
    points: Offset[], 
    close: boolean
  )
  addRRect (rrect: RRect)
  addPath (
    path: Path, 
    offset: Offset, 
    matrix4: Float64Array | null
  )
  extendWithPath (
    path: Path, 
    offset: Offset, 
    matrix4: Float64Array | null
  )
  close ()
  reset ()
  contains (point: Offset ): boolean
  shift (offset: Offset): Path
  transform (matrix4: Float64Array): Path
  getBounds (): Rect
  computeMetrics (forceClosed: boolean)
}

export class Path extends ManagedSkiaObject<SkiaPath> implements IPath {
  static from (other: Path) {
    const path = Path.malloc()
    path.fillType = other.fillType
    path.skia = other.skia.copy()

    return path
  }

  static fromSkiaPath (skPath: SkiaPath, fillType: SkiaFillType) {
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

    return Path.fromSkiaPath(path, pathA.fillType)
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
  relativeMoveTo(dx: number, dy: number) {
    throw new Error('Method not implemented.')
  }
  relativeLineTo(dx: number, dy: number) {
    throw new Error('Method not implemented.')
  }
  quadraticBezierTo(x1: number, y1: number, x2: number, y2: number) {
    throw new Error('Method not implemented.')
  }
  relativeQuadraticBezierTo(x1: number, y1: number, x2: number, y2: number) {
    throw new Error('Method not implemented.')
  }
  cubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    throw new Error('Method not implemented.')
  }
  relativeCubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    throw new Error('Method not implemented.')
  }
  conicTo(x1: number, y1: number, x2: number, y2: number, w: number) {
    throw new Error('Method not implemented.')
  }
  relativeConicTo(x1: number, y1: number, x2: number, y2: number, w: number) {
    throw new Error('Method not implemented.')
  }
  arcTo(rect: Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean) {
    throw new Error('Method not implemented.')
  }
  arcToPoint(arcEnd: Offset, radius: Radius, rotation: number, largeArc: boolean, clockwise: boolean) {
    throw new Error('Method not implemented.')
  }
  relativeArcToPoint(arcEndDelta: Offset, radius: Radius, rotation: number, largeArc: boolean, clockwise: boolean) {
    throw new Error('Method not implemented.')
  }
  addPolygon(points: Offset[], close: boolean) {
    throw new Error('Method not implemented.')
  }
  addRRect(rrect: RRect) {
    throw new Error('Method not implemented.')
  }
  extendWithPath(path: Path, offset: Offset, matrix4: Float64Array | null) {
    throw new Error('Method not implemented.')
  }
  contains(point: Offset): boolean {
    throw new Error('Method not implemented.')
  }
  shift(offset: Offset): Path {
    throw new Error('Method not implemented.')
  }
  getBounds(): Rect {
    throw new Error('Method not implemented.')
  }
  computeMetrics(forceClosed: boolean) {
    throw new Error('Method not implemented.')
  }

  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  ) {
    const toDegree = 180.0 / Math.PI
    this.skia.addArc(
      oval, 
      startAngle * toDegree, 
      sweepAngle * toDegree
    )  
  }

  addOval (oval: Rect) {
    this.skia.addOval(
      oval, 
      false, 
      1
    )
  }

  addPath (
    path: Path,
    offset: Offset,
    matrix4: Float64Array | null
  ) {
    let matrix
    if (matrix4 === null) {

    } else {

    }

    this.skia.addPath(
      path.skia,
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8],
      false,
    )
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

    return Path.fromSkiaPath(path, this.fillType)
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
