import { CanvasKitAPI } from '../CanvasKitAPI'

import type { BlendMode, ClipOp, Color, ImageFilter, Offset, Rect, RRect } from '@UI'
import type { SkCanvas } from '../CanvasKitAPI'
import type { CkPath } from '../Path'
import { CkPaint } from '../Painting'
import { CkImage } from '../Image/CkImage'
import { CkManagedSkImageFilterConvertible } from '../ImageFilter'




const _kMitchellNetravali_B = 1.0 / 3.0
const _kMitchellNetravali_C = 1.0 / 3.0

export class CkCanvas {

  public skCanvas: SkCanvas
  public get saveCount (): number {
    return this.skCanvas.getSaveCount()
  }

  public get pictureSnapshot (): null {
    return null
  }

  constructor (skCanvas: SkCanvas) {
    this.skCanvas = skCanvas
  }

  clear (color: Color): void {
    this.skCanvas.clear(CanvasKitAPI.toSharedSkColor1(color))
  }

  clipPath (
    path: CkPath, 
    doAntiAlias: boolean
  ): void {
    this.skCanvas.clipPath(
      path.skiaObject,
      this.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRRect (
    rrect: RRect,
    doAntiAlias: boolean
  ) {
    this.skCanvas.clipRRect(
     CanvasKitAPI.toSkRRect(rrect),
      this.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRect (
    rect: Rect,
    clipOp: ClipOp,
    doAntiAlias: boolean
  ) {
    this.skCanvas.clipRect(
      CanvasKitAPI.toSkRect(rect),
      CanvasKitAPI.toSkClipOp(clipOp),
      doAntiAlias
    )
  }

  drawArc (
    oval: Rect,
    startAngle: number,
    sweepAngle: number,
    useCenter: boolean,
    paint: CkPaint
  ) {

  }

  drawAtlasRaw (
    paint: CkPaint,
    atlas: CkImage,
    rstTransforms: number[],
    rects: number[],
    colors: number[],
    blendMode: BlendMode,
  ) {}

  drawCircle (
    c: Offset, 
    radius: number, 
    paint: CkPaint
  ) {
    this.skCanvas.drawCircle(
      c.dx,
      c.dy,
      radius,
      paint.skiaObject,
    )
  }

  drawColor (
    color: Color, 
    blendMode: BlendMode
  ) {
    this.skCanvas.drawColorInt(
      color.value,
      CanvasKitAPI.toSkBlendMode(blendMode),
    )
  }

  drawDRRect(
    outer: RRect, 
    inner: RRect, 
    paint: CkPaint
  ) {
    this.skCanvas.drawDRRect(
      CanvasKitAPI.toSkRRect(outer),
      CanvasKitAPI.toSkRRect(inner),
      paint.skiaObject,
    )
  }

  restore () {
    this.skCanvas.restore()
  }

  restoreToCount (count: number) {
    this.skCanvas.restoreToCount(count)
  }

  rotate (radians: number) {
    this.skCanvas.rotate(radians * 180.0 / Math.PI, 0.0, 0.0)
  }

  save (): number {
    return this.skCanvas.save()
  }

  saveLayer (
    bounds: Rect, 
    paint?: CkPaint
  ) {
    this.skCanvas.saveLayer(
      paint?.skiaObject,
      CanvasKitAPI.toSkRect(bounds),
      null
    )
  }

  saveLayerWithoutBounds (paint: CkPaint) {
    this.skCanvas.saveLayer(paint?.skiaObject, null, null);
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter,
    paint?: CkPaint
  ) {
    const convertible = filter as CkManagedSkImageFilterConvertible
    return this.skCanvas.saveLayer(
      paint?.skiaObject,
      CanvasKitAPI.toSkRect(bounds),
      convertible.imageFilter.skiaObject,
      0,
    )
  }

  scale (
    sx: number, 
    sy: number
  ) {
    this.skCanvas.scale(sx, sy)
  }

  skew (
    sx: number, 
    sy: number
  ) {
    this.skCanvas.skew(sx, sy)
  }

  transform (matrix: Float32List) {
    this.skCanvas.concat(CanvasKitAPI.toSkM44FromFloat32(matrix))
  }

  translate (
    dx: number, 
    dy: number
  ) {
    this.skCanvas.translate(dx, dy);
  }
}