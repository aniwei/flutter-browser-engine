import { CanvasKitAPI } from '../CanvasKitAPI'

import type { bool, int, Float32List } from '@Types'
import type { Color, Rect, RRect, ClipOp } from '@UI'
import type { SkCanvas } from '../CanvasKitAPI'

const { 
  toSkRRect, 
  toSkRect, 
  toSkClipOp,
  toSkM44FromFloat32
} = CanvasKitAPI


export class CkCanvas {
  static _kMitchellNetravali_B = 1.0 / 3.0
  static _kMitchellNetravali_C = 1.0 / 3.0

  public skCanvas: SkCanvas
  public get saveCount (): int {
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
    doAntiAlias: bool
  ): void {
    this.skCanvas.clipPath(
      path.skiaObject,
      this.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRRect (
    rect: Rect,
    clipOp: ClipOp,
    doAntiAlias: boolean
  ) {
    this.skCanvas.clipRRect(
      toSkRRect(rect),
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
      toSkRect(rect),
      toSkClipOp(clipOp),
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
      toSkBlendMode(blendMode),
    )
  }

  drawDRRect(
    outer: RRect, 
    inner: RRect, 
    paint: CkPaint
  ) {
    this.skCanvas.drawDRRect(
      toSkRRect(outer),
      toSkRRect(inner),
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
      toSkRect(bounds),
      null,
      null,
    )
  }

  saveLayerWithoutBounds (paint: CkPaint) {
    this.skCanvas.saveLayer(paint?.skiaObject, null, null, null);
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter,
    paint?: CkPaint
  ) {
    const convertible = filter as CkManagedSkImageFilterConvertible
    return this.skCanvas.saveLayer(
      paint?.skiaObject,
      toSkRect(bounds),
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
    this.skCanvas.concat(toSkM44FromFloat32(matrix))
  }

  translate (
    dx: number, 
    dy: number
  ) {
    this.skCanvas.translate(dx, dy);
  }
}