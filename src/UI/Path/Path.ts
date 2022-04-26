import { UnimplementedError } from '@Shared'
import type { bool, double, Float64List } from '@Types'
import invariant from 'ts-invariant'
import type { PathFillType, PathOperation } from '../Canvas'
import type { Offset, Rect, Radius }  from '../Geometry'

export interface IPath {
  moveTo (x: double, y: double)
  relativeMoveTo (dx: double, dy: double)
  lineTo (x: double, y: double)
  relativeLineTo (dx: double, dy: double)
  quadraticBezierTo (x1: double, y1: double, x2: double, y2: double)
  relativeQuadraticBezierTo (x1: double, y1: double, x2: double, y2: double)
  cubicTo (x1: double, y1: double, x2: double, y2: double, x3: double, y3: double)
  relativeCubicTo (x1: double, y1: double, x2: double, y2: double, x3: double, y3: double)
  conicTo (x1: double, y1: double, x2: double, y2: double, w: double)
  relativeConicTo (x1: double, y1: double, x2: double, y2: double, w: double)
  arcTo (rect: Rect, startAngle: double, sweepAngle: double, forceMoveTo: bool)
  arcToPoint (
    arcEnd: Offset, 
    radius: Radius,
    rotation: double,
    largeArc: bool,
    clockwise: bool,
  )
  relativeArcToPoint (
    arcEndDelta: Offset, 
    radius: Radius,
    rotation: double,
    largeArc: bool,
    clockwise: bool
  )
  addRect (rect: Rect)
  addOval (oval: Rect)
  addArc (oval: Rect, startAngle: double, sweepAngle: double)
  addPolygon (points: Offset[], close: bool)
  addRRect (Rrrect: Rect)
  addPath (path: Path, offset: Offset, matrixß )
  extendWithPath (path: Path, offset: Offset, matrix4)
  close ()
  reset ()
  contains (point: Offset): bool
  shift (offset: Offset): Path 
  // TODO
  transform (matrix): Path 
  getBounds (): Rect
  computeMetrics (forceClosed: bool): PathMetrics 
}

export abstract class Path implements IPath {
  static factory () {

  }

  static from (source: Path) {

  }

  static combine (
    operation: PathOperation, 
    path1: Path, 
    path2: Path 
  ): Path {
    invariant(path1 !== null); 
    invariant(path2 !== null); 

    if (engine.useCanvasKit) {
      return engine.CkPath.combine(operation, path1, path2);
    }

    throw new UnimplementedError()
  }

  abstract fillType: PathFillType

  abstract moveTo (x: double, y: double)
  abstract relativeMoveTo (dx: double, dy: double)
  abstract lineTo (x: double, y: double)
  abstract relativeLineTo (dx: double, dy: double)
  abstract quadraticBezierTo (x1: double, y1: double, x2: double, y2: double)
  abstract relativeQuadraticBezierTo (x1: double, y1: double, x2: double, y2: double)
  abstract cubicTo (x1: double, y1: double, x2: double, y2: double, x3: double, y3: double)
  abstract relativeCubicTo (x1: double, y1: double, x2: double, y2: double, x3: double, y3: double)
  abstract conicTo (x1: double, y1: double, x2: double, y2: double, w: double)
  abstract relativeConicTo (x1: double, y1: double, x2: double, y2: double, w: double)
  abstract arcTo (rect: Rect, startAngle: double, sweepAngle: double, forceMoveTo: bool)
  abstract arcToPoint (
    arcEnd: Offset, 
    radius: Radius,
    rotation: double,
    largeArc: bool,
    clockwise: bool,
  )
  abstract relativeArcToPoint (
    arcEndDelta: Offset, 
    radius: Radius,
    rotation: double,
    largeArc: bool,
    clockwise: bool
  )
  abstract addRect (rect: Rect)
  abstract addOval (oval: Rect)
  abstract addArc (oval: Rect, startAngle: double, sweepAngle: double)
  abstract addPolygon (points: Offset[], close: bool)
  abstract addRRect (Rrrect: Rect)
  abstract addPath (path: Path, offset: Offset, matrixß )
  abstract extendWithPath (path: Path, offset: Offset, matrix4)
  abstract close ()
  abstract reset ()
  abstract contains (point: Offset): bool
  abstract shift (offset: Offset): Path 
  // TODO
  abstract transform (matrix4: Float64List): Path 
  abstract getBounds (): Rect
  abstract computeMetrics (forceClosed: bool): PathMetrics 
}