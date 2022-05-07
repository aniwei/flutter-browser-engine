import { Skia, SkiaFilterQuality } from '@Skia'
import type { CkImage } from './CkImage'
import type { CkImageFilter, CkManagedSkImageFilterConvertible } from './CkImageFilter'
import type { CkPaint } from './CkPaint'
import type { BlendMode, Canvas, Color, ColorInt, InputIRect, Rect, RRect } from 'canvaskit-wasm'
import type { CkPath } from './CkPath'

export class CkCanvas {
  static kMitchellNetravali_B = 1.0 / 3.0
  static kMitchellNetravali_C = 1.0 / 3.0
  static kNone_ShadowFlag = 0x00
  static kTransparentOccluder_ShadowFlag = 0x01
  static kDirectionalLight_ShadowFlag = 0x04

  static get clipOpIntersect () {
    return Skia.ClipOp.Intersect
  }

  static malloc (skia: Canvas) {
    return new CkCanvas(skia)
  }

  public skia: Canvas

  constructor (skia: Canvas) {
    this.skia = skia
  }

  clear (color: Color) {
    this.skia.clear(color)
  }

  clipPath (
    path: CkPath, 
    doAntiAlias: boolean
  ) {
    this.skia.clipPath(
      path.skia, 
      CkCanvas.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRRect(
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    this.skia.clipRRect(
      rrect,
      CkCanvas.clipOpIntersect,
      doAntiAlias,
    )
  }

  drawArc (
    oval: Rect,
    startAngle: number,
    sweepAngle: number,
    useCenter: boolean,
    paint // 
  ) {
    const toDegree = 180 / Math.PI
    this.skia.drawArc(
      oval,
      startAngle * toDegree,
      sweepAngle * toDegree,
      useCenter,
      paint.skia
    )
  }

  drawAtlasRaw (
    paint: CkPaint,
    atlas,
    rstTransforms: Float32Array,
    rects: Float32Array,
    colors: Uint32Array,
    blendMode: BlendMode
  ) {
    this.skia.drawAtlas(
      atlas.skImage,
      rects,
      rstTransforms,
      paint.skia,
      blendMode,
      colors
    )
  }

  drawCircle (
    offset: Float32Array, // 
    radius: number,
    paint // 
  ) {
    this.skia.drawCircle(
      offset[0],
      offset[1],
      radius,
      paint.skia
    )
  }

  drawColor (
    color: ColorInt, 
    blendMode: BlendMode
  ) {
    this.skia.drawColorInt(
      color,
      blendMode
    )
  }

  drawDRRect ( //
    outer: RRect, 
    inner: RRect, 
    paint: CkPaint
  ) {
    this.skia.drawDRRect(
      outer,
      inner,
      paint.skia,
    )
  }

  drawImage ( // 
    image: CkImage, 
    offset, 
    paint: CkPaint
  ) {
    const filterQuality = paint.filterQuality
    
    if (filterQuality == SkiaFilterQuality.High) {
      this.skia.drawImageCubic(
        image.skia,
        offset.dx,
        offset.dy,
        CkCanvas.kMitchellNetravali_B,
        CkCanvas.kMitchellNetravali_C,
        paint.skia,
      )
    } else {
      this.skia.drawImageOptions(
        image.skia,
        offset.dx,
        offset.dy,
        filterQuality === SkiaFilterQuality.None ?
          Skia.FilterMode.Nearest : Skia.FilterMode.Linear,
        filterQuality === SkiaFilterQuality.Medium ? 
          Skia.MipmapMode.Linear : Skia.MipmapMode.None,
        paint.skia,
      )
    }
  }

  drawImageRect ( // 
    image: CkImage, 
    src: Rect, 
    dst: Rect, 
    paint: CkPaint
  ) {
    const filterQuality = paint.filterQuality
    if (filterQuality == ui.FilterQuality.high) {
      this.skia.drawImageRectCubic(
        image.skia,
        src,
        dst,
        CkCanvas.kMitchellNetravali_B,
        CkCanvas.kMitchellNetravali_C,
        paint.skia,
      )
    } else {
      this.skia.drawImageRectOptions(
        image.skia,
        src,
        dst,
        filterQuality === SkiaFilterQuality.None ?
          Skia.FilterMode.Nearest : Skia.FilterMode.Linear,
        filterQuality === SkiaFilterQuality.Medium ? 
          Skia.MipmapMode.Linear : Skia.MipmapMode.None,
        paint.skia,
      )
    }
  }

  drawImageNine ( // 
    image: CkImage, 
    center: InputIRect, 
    dst: Rect, 
    paint: CkPaint
  ) {
    this.skia.drawImageNine(
      image.skia,
      center,
      dst,
      paint.filterQuality === SkiaFilterQuality.None ?
        Skia.FilterMode.Nearest : Skia.FilterMode.Linear,
      paint.skia,
    )
  }

  drawLine ( // @TODO
    pointA, 
    pointB, 
    paint: CkPaint
  ) {
    this.skia.drawLine(
      pointA.dx,
      pointA.dy,
      pointB.dx,
      pointB.dy,
      paint.skia,
    )
  }

  drawOval ( // 
    rect: Rect, 
    paint: CkPaint
  ) {
    this.skia.drawOval(
      rect,
      paint.skia,
    )
  }

  drawPaint (paint: CkPaint) {
    this.skia.drawPaint(paint.skia)
  }

  drawParagraph (
    paragraph, 
    offset
  ) {
    this.skia.drawParagraph(
      paragraph.skia,
      offset.dx,
      offset.dy,
    )
    paragraph.markUsed()
  }

  drawPath (
    path: CkPath , 
    paint: CkPaint //
  ) {
    this.skia.drawPath(path.skia, paint.skia)
  }

  drawPicture (picture) { // 
    this.skia.drawPicture(picture.skia)
  }

  drawPoints (
    paint: CkPaint, //
    pointMode: BlendMode, 
    points: Float32Array
  ) {
    this.skia.drawPoints(
      pointMode,
      points,
      paint.skia,
    )
  }

  drawRRect (
    rrect: RRect, 
    paint: CkPaint 
  ) {
    this.skia.drawRRect(
      rrect,
      paint.skia,
    )
  }

  drawRect (
    rect: Rect, 
    paint: CkPaint 
  ) {
    this.skia.drawRect(rect, paint.skia)
  }

  drawShadow ( // @TODO
    path: CkPath, 
    color: Color, 
    elevation: number, 
    transparentOccluder: boolean
  ) {
    this.drawSkiaShadow(
      this.skia, 
      path, 
      color, 
      elevation, 
      transparentOccluder,
      Skia.DevicePixelRatio
    )
  }

  drawSkiaShadow (
    skCanvas: Canvas,
    path: CkPath,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
    devicePixelRatio: number,
  ) {
    // 
    const flags = transparentOccluder
      ? CkCanvas.kDirectionalLight_ShadowFlag | CkCanvas.kTransparentOccluder_ShadowFlag
      : CkCanvas.kDirectionalLight_ShadowFlag | CkCanvas.kNone_ShadowFlag

    // const inAmbient =
    //     color.withAlpha((color.alpha * ckShadowAmbientAlpha).round());
    // final ui.Color inSpot = color.withAlpha((color.alpha * ckShadowSpotAlpha).round());

    // const inTonalColors = SkTonalColors(
    //   ambient: makeFreshSkColor(inAmbient),
    //   spot: makeFreshSkColor(inSpot),
    // )

    // const tonalColors = Skia.computeTonalColors(inTonalColors)

    // skCanvas.drawShadow(
    //   path.skia,
    //   Float32List(3)..[2] = devicePixelRatio * elevation,
    //   Float32List(3)
    //     ..[0] = ckShadowLightXOffset
    //     ..[1] = ckShadowLightYOffset
    //     ..[2] = devicePixelRatio * ckShadowLightHeight,
    //   devicePixelRatio * ckShadowLightRadius,
    //   tonalColors.ambient,
    //   tonalColors.spot,
    //   flags,
    // )
  }

  drawVertices  (
    vertices, 
    blendMode: BlendMode, 
    paint: CkPaint // @TODO
  ) {
    this.skia.drawVertices(
      vertices.skia,
      blendMode,
      paint.skia,
    );
  }


  restore () {
    this.skia.restore()
  }

  restoreToCount (count: number) {
    this.skia.restoreToCount(count)
  }

  rotate (radians: number) {
    this.skia.rotate(radians * 180.0 / Math.PI, 0.0, 0.0)
  }

  save () {
    return this.skia.save()
  }

  saveLayer (
    bounds: Rect, 
    paint: CkPaint // @TODO
  ) {
    this.skia.saveLayer(
      paint?.skia,
      bounds,
      null
    );
  }

  saveLayerWithoutBounds (paint: CkPaint) { 
    this.skia.saveLayer(paint?.skia, null, null)
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: CkImageFilter, 
    paint: CkPaint
  ) {
    // TODO
    const convertible: CkManagedSkImageFilterConvertible = filter
    return this.skia.saveLayer(
      paint?.skia,
      bounds,
      convertible.imageFilter.skia,
      0,
    )
  }

  scale (
    sx: number, 
    sy: number
  ) {
    this.skia.scale(sx, sy)
  }

  skew (
    sx: number, 
    sy: number
  ) {
    this.skia.skew(sx, sy)
  }

  transform (matrix4: Float32Array) {
    this.skia.concat(matrix4)
  }

  translate (
    dx: number, 
    dy: number
  ) {
    this.skia.translate(dx, dy)
  }
}