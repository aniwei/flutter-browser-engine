import { Skia, SkiaClipOp, SkiaFilterQuality } from '@Skia'
import type { SkiaBlendMode, SkiaCanvas } from '@Skia'
import type { RRect, Rect, Offset } from './Geometry'
import type { Color } from './Painting'
import type { Image } from './Image'
import type { ImageFilter, ManagedSkImageFilterConvertible } from './ImageFilter'
import type { Paint } from './Paint'
import type { Path } from './Path'
import { ClipOp } from 'canvaskit-wasm'

export class Canvas {
  static kMitchellNetravali_B = 1.0 / 3.0
  static kMitchellNetravali_C = 1.0 / 3.0
  static kNone_ShadowFlag = 0x00
  static kTransparentOccluder_ShadowFlag = 0x01
  static kDirectionalLight_ShadowFlag = 0x04

  static get clipOpIntersect (): SkiaClipOp {
    return Skia.ClipOp.Intersect
  }

  static malloc (skia: SkiaCanvas) {
    return new Canvas(skia)
  }

  public skia: SkiaCanvas

  constructor (skia: SkiaCanvas) {
    this.skia = skia
  }

  clear (color: Color) {
    this.skia.clear(color)
  }

  clipPath (
    path: Path, 
    doAntiAlias: boolean = true
  ) {
    this.skia.clipPath(
      path.skia, 
      Canvas.clipOpIntersect,
      doAntiAlias
    )
  }

  clipRRect(
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    this.skia.clipRRect(
      rrect,
      Canvas.clipOpIntersect,
      doAntiAlias,
    )
  }

  clipRect (
    rect: Rect, 
    clipOp: ClipOp = Skia.ClipOp.Intersect, 
    doAntiAlias: boolean = true
  ) {
    this.skia.clipRect(
      rect,
      clipOp,
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
    paint: Paint,
    atlas,
    rstTransforms: Float32Array,
    rects: Float32Array,
    colors: Uint32Array,
    blendMode: SkiaBlendMode
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
    color: Color, 
    blendMode: SkiaBlendMode
  ) {
    this.skia.drawColorInt(
      color.value,
      blendMode
    )
  }

  drawDRRect ( //
    outer: RRect, 
    inner: RRect, 
    paint: Paint
  ) {
    this.skia.drawDRRect(
      outer,
      inner,
      paint.skia,
    )
  }

  drawImage ( // 
    image: Image, 
    offset: Offset, 
    paint: Paint
  ) {
    const filterQuality = paint.filterQuality
    
    if (filterQuality == SkiaFilterQuality.High) {
      this.skia.drawImageCubic(
        image.skia,
        offset.dx,
        offset.dy,
        Canvas.kMitchellNetravali_B,
        Canvas.kMitchellNetravali_C,
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
    image: Image, 
    src: Rect, 
    dst: Rect, 
    paint: Paint
  ) {
    const filterQuality = paint.filterQuality
    if (filterQuality == SkiaFilterQuality.High) {
      this.skia.drawImageRectCubic(
        image.skia,
        src,
        dst,
        Canvas.kMitchellNetravali_B,
        Canvas.kMitchellNetravali_C,
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
    image: Image, 
    center: Rect, 
    dist: Rect, 
    paint: Paint
  ) {
    this.skia.drawImageNine(
      image.skia,
      center as unknown as Int32Array,
      dist,
      paint.filterQuality === SkiaFilterQuality.None ?
        Skia.FilterMode.Nearest : Skia.FilterMode.Linear,
      paint.skia,
    )
  }

  drawLine ( // @TODO
    pointA, 
    pointB, 
    paint: Paint
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
    paint: Paint
  ) {
    this.skia.drawOval(
      rect,
      paint.skia,
    )
  }

  drawPaint (paint: Paint) {
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
    path: Path, 
    paint: Paint
  ) {
    this.skia.drawPath(path.skia, paint.skia)
  }

  drawPicture (picture) { 
    this.skia.drawPicture(picture.skia)
  }

  drawPoints (
    paint: Paint,
    pointMode: SkiaBlendMode, 
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
    paint: Paint 
  ) {
    this.skia.drawRRect(
      rrect,
      paint.skia,
    )
  }

  drawRect (
    rect: Rect, 
    paint: Paint 
  ) {
    this.skia.drawRect(rect, paint.skia)
  }

  drawShadow ( // @TODO
    path: Path, 
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
    skCanvas: SkiaCanvas,
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
    devicePixelRatio: number,
  ) {
    const flags = transparentOccluder
      ? Canvas.kDirectionalLight_ShadowFlag | Canvas.kTransparentOccluder_ShadowFlag
      : Canvas.kDirectionalLight_ShadowFlag | Canvas.kNone_ShadowFlag

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
    blendMode: SkiaBlendMode, 
    paint: Paint // @TODO
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
    paint: Paint // @TODO
  ) {
    this.skia.saveLayer(
      paint?.skia,
      bounds,
      null
    );
  }

  saveLayerWithoutBounds (paint: Paint) { 
    this.skia.saveLayer(paint?.skia, null, null)
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter, 
    paint: Paint
  ) {
    // TODO
    const convertible: ManagedSkImageFilterConvertible = filter
    return this.skia.saveLayer(
      paint?.skia,
      bounds,
      convertible.imageFilter.skia,
      0,
    )
  }

  scale (
    sx: number, 
    sy: number = sx
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