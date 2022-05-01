import { Offset } from '../Geometry/Offset'
import { Rect } from '../Geometry/Rect'
import { RRect } from '../Geometry/RRect'
import { Paint } from '../Paint'
import { RSTransform } from '../RSTransform'
import type { double, Float64List, int } from '@Types'
import { ClipOp, PointMode } from '.'
import { Path } from '../Path'
import { BlendMode, Color, Image } from '../Painting'
import { Picture } from './Picture'
import { Paragraph } from '../Text'
import { Vertices } from './Vertices'
import { PictureRecorder } from './PictureRecorder'

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
    blendMode: BlendMode | null,
    cullRect: Rect | null,
    paint: Paint ,
  )
  
  drawShadow(
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
  );
}

export abstract class Canvas {
  static factory (
    recorder: PictureRecorder,
    cullRect?: Rect
  ) {

  }

  abstract save (): void
  abstract saveLayer(bounds: Rect | null, paint: Paint): void
  abstract restore (): void
  abstract getSaveCount(): int
  abstract translate (dx: double, dy: double): void
  abstract scale (dx: double, dy?: double): void
  abstract rotate (radians: double): void
  abstract skew (sx: double, sy: double): void
  abstract transform(matrix4: Float64List): void
}