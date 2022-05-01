import { Float64List } from '@Types'
import { Offset, Path, PathFillType, PathOperation, Radius, Rect, RRect } from '@UI'
import { Matrix4 } from '../../VectorMath'
import { SkPath, CanvasKitAPI } from '../CanvasKitAPI'
import { ManagedSkiaObject } from '../SkiaObjectCache'

export class CkPath extends ManagedSkiaObject<SkPath> implements Path {
  static from (path: CkPath) {
    const newPath = new CkPath()
    newPath.fillType = path.fillType
  }

  static fromSkPath (skPath: SkPath, fillType) {
    const path = new CkPath()
    path.rawSkiaObject = skPath
    path.fillType = fillType
    return path
  }

  static combine(
    operation: PathOperation,
    uiPath1: Path,
    uiPath2: Path,
 ) {
   const path1 = uiPath1 as unknown as CkPath
   const path2 = uiPath2 as unknown as CkPath
   const newPath = CanvasKitAPI.CanvasKit.Path.MakeFromOp(
     path1.skiaObject,
     path2.skiaObject,
     CanvasKitAPI.toSkPathOp(operation),
   ) as SkPath
   return CkPath.fromSkPath(newPath, path1._fillType);
 }


  public _fillType: PathFillType = PathFillType.nonZero
  public get fillType () {
    return this._fillType
  }

  public set fillType (newFillType: PathFillType) {
    if (this.fillType == newFillType) {
      return
    }

    this._fillType = newFillType
    this.skiaObject.setFillType(CanvasKitAPI.toSkFillType(newFillType));
  }

  get isEmpty () {
    return this.skiaObject.isEmpty()
  }

  get isResurrectionExpensive () {
    return false
  }

  public cachedCommands: Float32Array | null = null

  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  ) {
    const toDegrees = 180.0 / Math.PI
    
    this.skiaObject.addArc(
      CanvasKitAPI.toSkRect(oval),
      startAngle * toDegrees,
      sweepAngle * toDegrees,
    )
  }

  addOval (oval: Rect) {
    this.skiaObject.addOval(CanvasKitAPI.toSkRect(oval), false, 1)
  }

  
  addPath (
    path: Path, 
    offset: Offset, 
    matrix4: Float64List | null = null
  ) {
    let skMatrix: Float32List

    if (matrix4 === null) {
      skMatrix = CanvasKitAPI.toSkMatrixFromFloat32(Matrix4.translationValues(offset.dx, offset.dy, 0.0).storage)
    } else {
      skMatrix = CanvasKitAPI.toSkMatrixFromFloat64(matrix4)
      skMatrix[2] += offset.dx
      skMatrix[5] += offset.dy
    }
    const otherPath = path as unknown as CkPath
    this.skiaObject.addPath(
      otherPath.skiaObject,
      skMatrix[0],
      skMatrix[1],
      skMatrix[2],
      skMatrix[3],
      skMatrix[4],
      skMatrix[5],
      skMatrix[6],
      skMatrix[7],
      skMatrix[8],
      false,
    )
  }

  addPolygon(
    points: Offset[], 
    close: boolean
  ) {
    (points != null); 
    const encodedPoints = CanvasKitAPI.toMallocedSkPoints(points)
    this.skiaObject.addPoly(encodedPoints.toTypedArray(), close)
    CanvasKitAPI.freeFloat32List(encodedPoints)
  }

  addRRect (rrect: RRect): void {
    this.skiaObject.addRRect(
      CanvasKitAPI.toSkRRect(rrect),
      false,
    )
  }


  addRect(rect: Rect) {
    this.skiaObject.addRect(CanvasKitAPI.toSkRect(rect));
  }


  arcTo(
    rect: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    forceMoveTo: boolean
  ) {
    const toDegrees = 180.0 / Math.PI;

    this.skiaObject.arcToOval(
      CanvasKitAPI.toSkRect(rect),
      startAngle * toDegrees,
      sweepAngle * toDegrees,
      forceMoveTo,
    );
  }


  arcToPoint(
    arcEnd: Offset,
    radius = Radius.zero,
    rotation = 0.0,
    largeArc = false,
    clockwise = true
  ) {
    this.skiaObject.arcToRotated(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEnd.dx,
      arcEnd.dy,
    )
  }


  close() {
    this.skiaObject.close()
  }

  computeMetrics(forceClosed = false) {
    return new CkPathMetrics(this, forceClosed)
  }

  conicTo(x1: number, y1: number, x2: number, y2: number, w: number) {
    this.skiaObject.conicTo(x1, y1, x2, y2, w)
  }


  contains (point: Offset): boolean {
    return this.skiaObject.contains(point.dx, point.dy)
  }


  cubicTo(
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    x3: number, 
    y3: number
  ) {
    this.skiaObject.cubicTo(x1, y1, x2, y2, x3, y3)
  }


  extendWithPath (
    path: Path,  
    offset: Offset, 
    matrix4: Float64List | null 
  ) {
    let skMatrix: Float32List
    if (matrix4 == null) {
      skMatrix = CanvasKitAPI.toSkMatrixFromFloat32(
          Matrix4.translationValues(offset.dx, offset.dy, 0.0).storage);
    } else {
      skMatrix = CanvasKitAPI.toSkMatrixFromFloat64(matrix4);
      skMatrix[2] += offset.dx;
      skMatrix[5] += offset.dy;
    }
    const otherPath = path as unknown as CkPath
    this.skiaObject.addPath(
      otherPath.skiaObject,
      skMatrix[0],
      skMatrix[1],
      skMatrix[2],
      skMatrix[3],
      skMatrix[4],
      skMatrix[5],
      skMatrix[6],
      skMatrix[7],
      skMatrix[8],
      true,
    );
  }


  getBounds () {
    return CanvasKitAPI.fromSkRect(this.skiaObject.getBounds())
  }

  lineTo(x: number, y: number) {
    this.skiaObject.lineTo(x, y)
  }

  moveTo(x: number, y: number) {
    this.skiaObject.moveTo(x, y);
  }

  quadraticBezierTo(x1: number, y1: number, x2: number, y2: number) {
    this.skiaObject.quadTo(x1, y1, x2, y2);
  }


  relativeArcToPoint ( 
    arcEndDelta,
    radius = Radius.zero,
    rotation: number = 0.0,
    largeArc = false,
    clockwise = true
  ) {
    this.skiaObject.rArcTo(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEndDelta.dx,
      arcEndDelta.dy,
    )
  }

  relativeConicTo(
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    w: number
  ) {
    this.skiaObject.rConicTo(x1, y1, x2, y2, w);
  }

  relativeCubicTo(
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number, 
    x3: number, 
    y3: number
  ) {
    this.skiaObject.rCubicTo(x1, y1, x2, y2, x3, y3)
  }

  relativeLineTo(dx: number, dy: number) {
    this.skiaObject.rLineTo(dx, dy)
  }

  relativeMoveTo(dx: number, dy: number) {
    this.skiaObject.rMoveTo(dx, dy)
  }

  relativeQuadraticBezierTo (
    x1: number, 
    y1: number, 
    x2: number, 
    y2: number
  ) {
    this.skiaObject.rQuadTo(x1, y1, x2, y2)
  }


  reset () {
    this._fillType = PathFillType.nonZero
    this.skiaObject.reset();
  }

  shift (offset: Offset): CkPath {
    const shiftedPath = this.skiaObject.copy()
    
    shiftedPath.transform(
      1.0, 0.0, offset.dx,
      0.0, 1.0, offset.dy,
      0.0, 0.0, 1.0,
    )
    
    return CkPath.fromSkPath(shiftedPath, this._fillType)
  }

  transform (matrix4: Float64List) {
    const newPath = this.skiaObject.copy();
    const m = CanvasKitAPI.toSkMatrixFromFloat64(matrix4)
    newPath.transform(
      m[0],
      m[1],
      m[2],
      m[3],
      m[4],
      m[5],
      m[6],
      m[7],
      m[8],
    )
    return CkPath.fromSkPath(newPath, this._fillType)
  }

  toSvgString (): string {
    return this.skiaObject.toSVGString()
  }

  createDefault (): SkPath {
    const path: SkPath = new CanvasKitAPI.CanvasKit.Path()
    path.setFillType(CanvasKitAPI.toSkFillType(this._fillType));
    return path;
  }

  delete () {
    this.cachedCommands = this.skiaObject.toCmds()
    this.rawSkiaObject?.delete()
  }


  resurrect (): SkPath  {
    const path: SkPath = CanvasKitAPI.CanvasKit.Path.MakeFromCmds(this.cachedCommands!) as SkPath
    path.setFillType(CanvasKitAPI.toSkFillType(this._fillType))
    return path
  }
}
