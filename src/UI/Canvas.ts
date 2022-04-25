import { Offset } from './Offset';
import { Rect } from './Rect';
import { RRect } from './RRect';
import { RSTransform } from './RSTransform';

export enum PointMode {
  points,
  lines,
  polygon,
}

export enum ClipOp {
  difference,
  intersect,
}

export enum PathFillType {
  nonZero,
  evenOdd,
}

export enum PathOperation {
  difference,
  intersect,
  union,
  xor,
  reverseDifference,
}

export interface ICanvas {
  save ()
  saveLayer (
    bounds: Rect | null, 
    paint: Paint
  )
  restore ()
  getSaveCount ()
  translate (
    dx: number, 
    dy: number
  )
  scale (
    sx: number, 
    sy: number
  )
  rotate (radians: number)
  skew (sx: number, sy: number)
  transform (matrix: number[])
  clipRect (
    rect: Rect,
    clipOp: ClipOp, 
    doAntiAlias: boolean
  )
  clipRRect (rrect: RRect, doAntiAlias: boolean)
  clipPath (
    path: Path, 
    doAntiAlias: boolean 
  )
  drawColor(
    color: Color, 
    blendMode: BlendMode
  )
  drawLine (
    p1: Offset, 
    p2: Offset, 
    paint: Paint
  )
  drawPaint (paint: Paint)
  drawRect (
    rect: Rect, 
    paint: Paint
  )
  drawRRect (
    rrect: RRect, 
    paint: Paint
  )
  drawDRRect (
    outer: RRect, 
    inner: RRect, 
    paint: Paint 
  )
  drawOval (
    rect: Rect, 
    paint: Paint
  )
  drawCircle (
    c: Offset, 
    radius: number, 
    paint: Paint
  )
  drawArc (
    rect: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    useCenter: boolean,
    paint: Paint
  )
  drawPath (
    path: Path, 
    paint: Paint
  )
  drawImage (
    image: Image, 
    offset: Offset, 
    paint: Paint
  )
  
  drawImageRect(
    image: Image, 
    src: Rect, 
    dst: Rect, 
    paint: Paint
  )
  
  drawImageNine(
    image: Image, 
    center: Rect, 
    dst: Rect, 
    paint: Paint
  )
  
  drawPicture (picture: Picture)
  
  drawParagraph (
    paragraph: Paragraph, 
    offset: Offset
  )
  
  drawPoints (
    pointMode: PointMode, 
    points: Offset[], 
    paint: Paint
  )
  
  drawRawPoints (
    pointMode: PointMode, 
    points: number[], 
    paint: Paint
  )

  drawVertices (
    vertices: Vertices, 
    blendMode: BlendMode, 
    paint: Paint
  )
  
  drawAtlas (
    atlas: Image,
    transforms: RSTransform[],
    rects: Rect[],
    colors: Color[] | null,
    blendMode: BlendMode | null,
    cullRect: Rect | null,
    paint: Paint,
  )

  drawRawAtlas(
    atlas: Image ,
    rstTransforms: number[],
    rects: number[],
    colors: number[] | null,
    BlendMode? blendMode,
    Rect? cullRect,
    Paint paint,
  )
  
  drawShadow(
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
  );
}