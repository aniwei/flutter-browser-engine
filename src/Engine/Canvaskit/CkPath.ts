import { Path } from '@UI'
import { Path as SkPath } from 'canvaskit-wasm'
import { ManagedSkiaObject } from './ManagedSkiaObject'

export class CkPath extends ManagedSkiaObject<SkPath> implements Path {
  static from (other: CkPath) {
    const path = new CkPath()
    path.fillType = other.fillType
    
  }

  static fromSkPath (skPath: SkPath, fillType) {
    const path = new CkPath()
    path.fillType = fillType
  }

  public _fillType: PathFillType = nonZero
  public get fillType () {
    return this._fillType
  }

  public set fillType (newFillType: FillType) {
    if (this.fillType == newFillType) {
      return
    }

    this._fillType = newFillType
    
    skiaObject.setFillType(toSkFillType(newFillType));
  }

  
  addArc (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number
  ) {
    const toDegrees = 180.0 / Math.PI
    
    skiaObject.addArc(
      toSkRect(oval),
      startAngle * toDegrees,
      sweepAngle * toDegrees,
    )
  }

  addOval (oval: Rect) {
    skiaObject.addOval(toSkRect(oval), false, 1)
  }

  
  addPath (
    path: Path, 
    offset: Offset, 
    matrix
  ) {
    let skMatrix = []

    if (matrix4 == null) {
      skMatrix = toSkMatrixFromFloat32(
      Matrix4.translationValues(offset.dx, offset.dy, 0.0).storage)
    } else {
      skMatrix = toSkMatrixFromFloat64(matrix4)
      skMatrix[2] += offset.dx
      skMatrix[5] += offset.dy
    }
    final CkPath otherPath = path as CkPath
    skiaObject.addPath(
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
    const encodedPoints = toMallocedSkPoints(points)
    skiaObject.addPoly(encodedPoints.toTypedArray(), close)
    freeFloat32List(encodedPoints)
  }

  addRRect (rrect: RRect) {
    skiaObject.addRRect(
      toSkRRect(rrect),
      false,
    )
  }


  addRect(rect: Rect) {
    skiaObject.addRect(toSkRect(rect));
  }


  arcTo(
    rect: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    forceMoveTo: boolean
  ) {
    const toDegrees = 180.0 / Math.PI;

    skiaObject.arcToOval(
      toSkRect(rect),
      startAngle * toDegrees,
      sweepAngle * toDegrees,
      forceMoveTo,
    );
  }


  arcToPoint(
    arcEnd: Offset,
    { 
      radius = Radius.zero,
      rotation = 0.0,
      largeArc = false,
      clockwise = true
    }
  ) {
    skiaObject.arcToRotated(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEnd.dx,
      arcEnd.dy,
    );
  }


  close() {
    skiaObject.close();
  }


  computeMetrics(forceClosed = false) {
    return CkPathMetrics(this, forceClosed);
  }


  conicTo(x1: number, y1: number, x2: number, y2: number, w: number) {
    skiaObject.conicTo(x1, y1, x2, y2, w)
  }


  bool contains(ui.Offset point) {
    return skiaObject.contains(point.dx, point.dy);
  }


  cubicTo(
      double x1, double y1, double x2, double y2, double x3, double y3) {
    skiaObject.cubicTo(x1, y1, x2, y2, x3, y3);
  }


  extendWithPath(ui.Path path, ui.Offset offset, {Float64List? matrix4}) {
    List<double> skMatrix;
    if (matrix4 == null) {
      skMatrix = toSkMatrixFromFloat32(
          Matrix4.translationValues(offset.dx, offset.dy, 0.0).storage);
    } else {
      skMatrix = toSkMatrixFromFloat64(matrix4);
      skMatrix[2] += offset.dx;
      skMatrix[5] += offset.dy;
    }
    final CkPath otherPath = path as CkPath;
    skiaObject.addPath(
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


  ui.Rect getBounds() => fromSkRect(skiaObject.getBounds());


  lineTo(double x, double y) {
    skiaObject.lineTo(x, y);
  }


  moveTo(double x, double y) {
    skiaObject.moveTo(x, y);
  }


  quadraticBezierTo(double x1, double y1, double x2, double y2) {
    skiaObject.quadTo(x1, y1, x2, y2);
  }


  relativeArcToPoint(ui.Offset arcEndDelta,
      {ui.Radius radius = ui.Radius.zero,
      double rotation = 0.0,
      bool largeArc = false,
      bool clockwise = true}) {
    skiaObject.rArcTo(
      radius.x,
      radius.y,
      rotation,
      !largeArc,
      !clockwise,
      arcEndDelta.dx,
      arcEndDelta.dy,
    );
  }


  relativeConicTo(double x1, double y1, double x2, double y2, double w) {
    skiaObject.rConicTo(x1, y1, x2, y2, w);
  }


  relativeCubicTo(
      double x1, double y1, double x2, double y2, double x3, double y3) {
    skiaObject.rCubicTo(x1, y1, x2, y2, x3, y3);
  }


  relativeLineTo(double dx, double dy) {
    skiaObject.rLineTo(dx, dy);
  }


  relativeMoveTo(double dx, double dy) {
    skiaObject.rMoveTo(dx, dy);
  }


  relativeQuadraticBezierTo(double x1, double y1, double x2, double y2) {
    skiaObject.rQuadTo(x1, y1, x2, y2);
  }


  reset() {
    // Only reset the local field. Skia will reset its internal state via
    // SkPath.reset() below.
    _fillType = ui.PathFillType.nonZero;
    skiaObject.reset();
  }


  CkPath shift(ui.Offset offset) {
    // `SkPath.transform` mutates the existing path, so create a copy and call
    // `transform` on the copy.
    final SkPath shiftedPath = skiaObject.copy();
    shiftedPath.transform(
      1.0, 0.0, offset.dx,
      0.0, 1.0, offset.dy,
      0.0, 0.0, 1.0,
    );
    return CkPath.fromSkPath(shiftedPath, _fillType);
  }

  static CkPath combine(
    ui.PathOperation operation,
    ui.Path uiPath1,
    ui.Path uiPath2,
  ) {
    final CkPath path1 = uiPath1 as CkPath;
    final CkPath path2 = uiPath2 as CkPath;
    final SkPath newPath = canvasKit.Path.MakeFromOp(
      path1.skiaObject,
      path2.skiaObject,
      toSkPathOp(operation),
    );
    return CkPath.fromSkPath(newPath, path1._fillType);
  }


  ui.Path transform(Float64List matrix4) {
    final SkPath newPath = skiaObject.copy();
    final Float32List m = toSkMatrixFromFloat64(matrix4);
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
    );
    return CkPath.fromSkPath(newPath, _fillType);
  }

  String? toSvgString() {
    return skiaObject.toSVGString();
  }

  /// Return `true` if this path contains no segments.
  bool get isEmpty {
    return skiaObject.isEmpty();
  }


  bool get isResurrectionExpensive => true;


  SkPath createDefault() {
    final SkPath path = SkPath();
    path.setFillType(toSkFillType(_fillType));
    return path;
  }

  List<dynamic>? _cachedCommands;


  delete () {
    _cachedCommands = skiaObject.toCmds();
    rawSkiaObject?.delete();
  }


  resurrect (): SkPath  {
    const path: SkPath = canvasKit.Path.MakeFromCmds(_cachedCommands!)
    path.setFillType(toSkFillType(_fillType))
    return path
  }
}
