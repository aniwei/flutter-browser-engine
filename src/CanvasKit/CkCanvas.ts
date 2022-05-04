import { Skia } from '@Skia'
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

  public skiaCanvas: Canvas

  constructor (skiaCanvas: Canvas) {
    this.skiaCanvas = skiaCanvas
  }

  clear (color: Color) {
    this.skiaCanvas.clear(color)
  }

  clipPath (
    path: CkPath, 
    doAntiAlias: boolean
  ) {
    this.skiaCanvas.clipPath(
      path.skia, 
      CkCanvas.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRRect(
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    this.skiaCanvas.clipRRect(
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
    paint // @TODO
  ) {
    const toDegree = 180 / Math.PI
    this.skiaCanvas.drawArc(
      oval,
      startAngle * toDegree,
      sweepAngle * toDegree,
      useCenter,
      paint.skia
    )
  }

  drawAtlasRaw (
    paint,
    atlas,
    rstTransforms: Float32Array,
    rects: Float32Array,
    colors: Uint32Array,
    blendMode: BlendMode
  ) {
    this.skiaCanvas.drawAtlas(
      atlas.skImage,
      rects,
      rstTransforms,
      paint.skia,
      blendMode,
      colors
    )
  }

  drawCircle (
    offset, // @TODO
    radius: number,
    paint // @TODO
  ) {
    this.skiaCanvas.drawCircle(
      offset.dx,
      offset.dy,
      radius,
      paint.skia
    )
  }

  drawColor (
    color: ColorInt, 
    blendMode: BlendMode
  ) {
    this.skiaCanvas.drawColorInt(
      color,
      blendMode
    )
  }

  drawDRRect ( //@TODO
    outer: RRect, 
    inner: RRect, 
    paint
  ) {
    this.skiaCanvas.drawDRRect(
      outer,
      inner,
      paint.skiaObject,
    )
  }

  drawImage ( // @TODO
    image, 
    offset, 
    paint
  ) {
    const filterQuality = paint.filterQuality
    
    if (filterQuality == ui.FilterQuality.high) {
      this.skiaCanvas.drawImageCubic(
        image.skImage,
        offset.dx,
        offset.dy,
        CkCanvas.kMitchellNetravali_B,
        CkCanvas.kMitchellNetravali_C,
        paint.skiaObject,
      )
    } else {
      this.skiaCanvas.drawImageOptions(
        image.skImage,
        offset.dx,
        offset.dy,
        filterQuality,
        filterQuality,
        paint.skia,
      )
    }
  }

  drawImageRect ( // @TODO
    image, 
    src: Rect, 
    dst: Rect, 
    paint
  ) {
    const filterQuality = paint.filterQuality
    if (filterQuality == ui.FilterQuality.high) {
      this.skiaCanvas.drawImageRectCubic(
        image.skImage,
        src,
        dst,
        CkCanvas.kMitchellNetravali_B,
        CkCanvas.kMitchellNetravali_C,
        paint.skia,
      )
    } else {
      this.skiaCanvas.drawImageRectOptions(
        image.skImage,
        src,
        dst,
        filterQuality,
        filterQuality,
        paint.skia,
      )
    }
  }

  drawImageNine ( // @TODO
    image, 
    center: InputIRect, 
    dst: Rect, 
    paint
  ) {
    this.skiaCanvas.drawImageNine(
      image.skImage,
      center,
      dst,
      paint.filterQuality,
      paint.skia,
    )
  }

  drawLine ( // @TODO
    pointA, 
    pointB, 
    paint
  ) {
    this.skiaCanvas.drawLine(
      pointA.dx,
      pointA.dy,
      pointB.dx,
      pointB.dy,
      paint.skia,
    )
  }

  drawOval ( // @TODO
    rect: Rect, 
    paint
  ) {
    this.skiaCanvas.drawOval(
      rect,
      paint.skiaObject,
    )
  }

  drawPaint (paint) {
    this.skiaCanvas.drawPaint(paint.skia)
  }

  drawParagraph (
    paragraph, 
    offset
  ) {
    this.skiaCanvas.drawParagraph(
      paragraph.skia,
      offset.dx,
      offset.dy,
    )
    paragraph.markUsed()
  }

  drawPath (
    path: CkPath , 
    paint //@TODO
  ) {
    this.skiaCanvas.drawPath(path.skia, paint.skia)
  }

  drawPicture (picture) { // @TODO
    this.skiaCanvas.drawPicture(picture.skia)
  }

  drawPoints (
    paint, //@TODO
    pointMode: BlendMode, 
    points: Float32Array
  ) {
    this.skiaCanvas.drawPoints(
      pointMode,
      points,
      paint.skia,
    )
  }

  drawRRect (
    rrect: RRect, 
    paint //@TODO
  ) {
    this.skiaCanvas.drawRRect(
      rrect,
      paint.skia,
    )
  }

  drawRect (
    rect: Rect, 
    paint //@TODO
  ) {
    this.skiaCanvas.drawRect(rect, paint.skia)
  }

  drawShadow ( // @TODO
    path: CkPath, 
    color: Color, 
    elevation: number, 
    transparentOccluder: boolean
  ) {
    this.drawSkiaShadow(
      this.skiaCanvas, 
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
    paint // @TODO
  ) {
    this.skiaCanvas.drawVertices(
      vertices.skia,
      blendMode,
      paint.skia,
    );
  }


  restore () {
    this.skiaCanvas.restore()
  }

  restoreToCount (count: number) {
    this.skiaCanvas.restoreToCount(count)
  }

  rotate (radians: number) {
    this.skiaCanvas.rotate(radians * 180.0 / Math.PI, 0.0, 0.0)
  }

  save () {
    return this.skiaCanvas.save()
  }

  saveLayer (
    bounds: Rect, 
    paint // @TODO
  ) {
    this.skiaCanvas.saveLayer(
      paint?.skia,
      bounds,
      null
    );
  }

  saveLayerWithoutBounds (paint) { // @TODO
    this.skiaCanvas.saveLayer(paint?.skia, null, null)
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter, //@TODO
    paint //@TODO
  ) {
    // TODO
    // final CkManagedSkImageFilterConvertible convertible =
    //     filter as CkManagedSkImageFilterConvertible;
    // return this.skiaCanvas.saveLayer(
    //   paint?.skiaObject,
    //   toSkRect(bounds),
    //   convertible.imageFilter.skiaObject,
    //   0,
    // );
  }

  scale (
    sx: number, 
    sy: number
  ) {
    this.skiaCanvas.scale(sx, sy)
  }

  skew (
    sx: number, 
    sy: number
  ) {
    this.skiaCanvas.skew(sx, sy)
  }

  transform (matrix4: Float32Array) {
    this.skiaCanvas.concat(matrix4)
  }

  translate (
    dx: number, 
    dy: number
  ) {
    this.skiaCanvas.translate(dx, dy)
  }
}