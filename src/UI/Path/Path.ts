import { UnimplementedError } from '@Shared'
import { invariant } from 'ts-invariant'
import type { Float64List } from '@Types'
import type { PathFillType, PathOperation } from '../Canvas'
import type { Offset, Rect, Radius, RRect }  from '../Geometry'
import type { PathMetrics } from '../PathMetrics'

export abstract class Path {
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

    // if (engine.useCanvasKit) {
    //   return engine.CkPath.combine(operation, path1, path2);
    // }

    throw new UnimplementedError()
  }

  abstract fillType: PathFillType

  abstract moveTo (x: number, y: number)
  abstract relativeMoveTo (dx: number, dy: number)
  abstract lineTo (x: number, y: number)
  abstract relativeLineTo (dx: number, dy: number)
  abstract quadraticBezierTo (x1: number, y1: number, x2: number, y2: number)
  abstract relativeQuadraticBezierTo (x1: number, y1: number, x2: number, y2: number)
  abstract cubicTo (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
  abstract relativeCubicTo (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
  abstract conicTo (x1: number, y1: number, x2: number, y2: number, w: number)
  abstract relativeConicTo (x1: number, y1: number, x2: number, y2: number, w: number)
  abstract arcTo (rect: Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean)
  abstract arcToPoint (
    arcEnd: Offset, 
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean,
  )
  abstract relativeArcToPoint (
    arcEndDelta: Offset, 
    radius: Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean
  )
  abstract addRect (rect: Rect)
  abstract addOval (oval: Rect)
  abstract addArc (oval: Rect, startAngle: number, sweepAngle: number)
  abstract addPolygon (points: Offset[], close: boolean)
  abstract addRRect (rrect: RRect): void
  abstract addPath (path: Path, offset: Offset, matrixß )
  abstract extendWithPath (path: Path, offset: Offset, matrix4)
  abstract close ()
  abstract reset ()
  abstract contains (point: Offset): boolean
  abstract shift (offset: Offset): Path 
  // TODO
  abstract transform (matrix4: Float64List): Path 
  abstract getBounds (): Rect
  abstract computeMetrics (forceClosed: boolean): PathMetrics
}