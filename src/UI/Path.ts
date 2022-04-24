import * as UI from '@UI'

export interface IPath {
  moveTo (x: number, y: number)
  relativeMoveTo (dx: number, dy: number)
  lineTo (x: number, y: number)
  relativeLineTo (dx: number, dy: number)
  quadraticBezierTo (x1: number, y1: number, x2: number, y2: number)
  relativeQuadraticBezierTo (x1: number, y1: number, x2: number, y2: number)
  cubicTo (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
  relativeCubicTo (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
  conicTo (x1: number, y1: number, x2: number, y2: number, w: number)
  relativeConicTo (x1: number, y1: number, x2: number, y2: number, w: number)
  arcTo (rect: UI.Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean)
  arcToPoint (
    arcEnd: UI.Offset, 
    radius: UI.Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean,
  )
  relativeArcToPoint (
    arcEndDelta: UI.Offset, 
    radius: UI.Radius,
    rotation: number,
    largeArc: boolean,
    clockwise: boolean
  )
  addRect (rect: UI.Rect)
  addOval (oval: UI.Rect)
  addArc (oval: UI.Rect, startAngle: number, sweepAngle: number)
  addPolygon (points: UI.Offset[], close: boolean)
  addRRect (Rrrect: UI.Rect)
  addPath (path: UI.Path, offset: UI.Offset, matrixß )
  extendWithPath (path: UI.Path, offset: UI.Offset, matrix4)
  close ()
  reset ()
  contains (point: UI.Offset): boolean
  shift (offset: UI.Offset): UI.Path 
  // TODO
  transform (matrix): UI.Path 

  computeMetrics (forceClosed: boolean = false): UI.PathMetrics 
}