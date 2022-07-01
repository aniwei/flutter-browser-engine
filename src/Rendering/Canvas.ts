import { invariant } from 'ts-invariant'
import { ArgumentError } from '@internal/ArgumentError'
import { RRect, Rect, Offset  } from '@internal/Geometry'
import { offsetIsValid, rectIsValid, rrectIsValid } from '@helper/validators'
import { Skia, SkiaClipOp, SkiaPointMode, SkiaFilterQuality, SkiaPicture, SkiaPictureRecorder } from '@skia/Skia'
import { toMatrix32, toMallocedSkiaPoints, makeFreshSkColor } from '@skia/SkiaFormat'
import { SkiaShadowFlags } from '@skia/SkiaShadowFlags'

import type { SkiaBlendMode, SkiaCanvas } from '@skia/Skia'
import type { Picture } from './Picture'
import type { PictureRecorder } from './PictureRecorder'
import type { Color } from './Painting'
import type { Image } from './Image'
import type { Paint } from './Paint'
import type { Path } from './Path'
import type { ImageFilter, ManagedSkImageFilterConvertible } from './ImageFilter'
import type { Vertices } from './Vertices'

type Methods<T> = { 
  [K in keyof T as (T[K] extends Function ? K : never)]: T[K] 
}

function command (Command: { new (type, ...rest: unknown[]): PaintCommand } = PaintCommand) {
  return function (
    target: RecordingCanvas,
    key: keyof Methods<Canvas>,
  ) {
    const func = target[key]
    function command (this, ...rest: any[]) {
      Reflect.apply(func, this, rest)

      switch (key) {
        case 'drawArc': {
          break
        }

        default: {
          this.addCommand(new Command(key, ...rest))
          break
        }
      }

    }

    Reflect.defineProperty(target, key, {
      get () { return command }
    })
  }
}

export const kShadowAmbientAlpha = 0.039
export const kShadowSpotAlpha = 0.25
export const kShadowLightRadius = 1.1
export const kShadowLightHeight = 600.0
export const kShadowLightXOffset = 0
export const kShadowLightYOffset = -450
export const kShadowLightXTangent = kShadowLightXOffset / kShadowLightHeight
export const kShadowLightYTangent = kShadowLightYOffset / kShadowLightHeight

export enum PointMode {
  Points,
  Lines,
  Polygon
}

export enum ClipOp {
  Difference,
  Intersect
}

export enum VertexMode {
  Triangles,
  TriangleStrip,
  TriangleFan,
}

export class PaintCommand {
  public command: keyof Methods<Canvas>
  public arguments: unknown[]

  constructor (command: keyof Methods<Canvas>, ...rest: unknown[]) {
    this.command = command
    this.arguments = rest
  }

  apply (canvas: Canvas): void {
    Reflect.apply(canvas[this.command], canvas, this.arguments)
  }

  dispose () {}
}

export class Canvas {
  static kMitchellNetravaliB = 1.0 / 3.0
  static kMitchellNetravaliC = 1.0 / 3.0
  static kNoneShadowFlag = 0x00
  static kTransparentOccluderShadowFlag = 0x01
  static kDirectionalLightShadowFlag = 0x04

  static get clipOpIntersect (): SkiaClipOp {
    return Skia.ClipOp.Intersect
  }

  static fromPictureRecorder (
    recorder: PictureRecorder,
    cullRect?: Rect | null
  ) {
    invariant(recorder !== null)
    if (recorder.isRecording) {
      throw new ArgumentError(`"recorder" must not already be associated with another Canvas.`)
    }

    cullRect ??= Rect.largest
    const canvas = recorder.beginRecording(cullRect)
  
    return Canvas.malloc(canvas.skia)
  }

  static malloc (skia: SkiaCanvas) {
    return new Canvas(skia)
  }

  public skia: SkiaCanvas

  public get pictureSnapshot () {
    return null
  }

  public get saveCount () {
    return this.skia.getSaveCount()
  }

  constructor (skia: SkiaCanvas) {
    this.skia = skia
  }

  getSaveCount () {
    return this.saveCount
  }

  clear (color: Color) {
    this.skia.clear(color)
  }

  clipPath (
    path: Path, 
    doAntiAlias: boolean = true
  ) {
    invariant(path !== null)
    invariant(doAntiAlias !== null)
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
    invariant(rrectIsValid(rrect))
    invariant(doAntiAlias !== null)

    this.skia.clipRRect(
      rrect,
      Canvas.clipOpIntersect,
      doAntiAlias,
    )
  }

  clipRect (
    rect: Rect, 
    clipOp: SkiaClipOp = Skia.ClipOp.Intersect, 
    doAntiAlias: boolean = true
  ) {
    invariant(clipOp !== null)
    invariant(doAntiAlias !== null)

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
    invariant(color !== null)
    invariant(blendMode !== null)
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
    invariant(rrectIsValid(outer))
    invariant(rrectIsValid(inner))
    invariant(paint !== null)
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
    invariant(image !== null)
    invariant(offsetIsValid(offset))
    invariant(paint !== null)

    const filterQuality = paint.filterQuality
    
    if (filterQuality == SkiaFilterQuality.High) {
      this.skia.drawImageCubic(
        image.skia,
        offset.dx,
        offset.dy,
        Canvas.kMitchellNetravaliB,
        Canvas.kMitchellNetravaliC,
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
    invariant(image !== null)
    invariant(rectIsValid(src))
    invariant(rectIsValid(dst))
    invariant(paint !== null)

    const filterQuality = paint.filterQuality
    if (filterQuality == SkiaFilterQuality.High) {
      this.skia.drawImageRectCubic(
        image.skia,
        src,
        dst,
        Canvas.kMitchellNetravaliB,
        Canvas.kMitchellNetravaliC,
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

  drawImageNine (
    image: Image, 
    center: Rect, 
    dist: Rect, 
    paint: Paint
  ) {
    invariant(image !== null)
    invariant(rectIsValid(center))
    invariant(rectIsValid(dist))
    invariant(paint !== null)

    this.skia.drawImageNine(
      image.skia,
      center as unknown as Int32Array,
      dist,
      paint.filterQuality === SkiaFilterQuality.None 
        ? Skia.FilterMode.Nearest 
        : Skia.FilterMode.Linear,
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
    paragraph, // @TODO
    offset: Offset
  ) {
    invariant(paragraph !== null)
    invariant(offsetIsValid(offset))
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

  drawPicture (picture: Picture) { 
    invariant(picture !== null)
    this.skia.drawPicture(picture.skia)
  }

  drawPoints (
    paint: Paint,
    pointMode: SkiaPointMode, 
    points: Offset[]
  ) {
    invariant(pointMode !== null)
    invariant(points !== null)
    invariant(paint !== null)
    const skiaPoints = toMallocedSkiaPoints(points)

    this.skia.drawPoints(
      pointMode,
      skiaPoints,
      paint.skia,
    )

    Skia.Free(skiaPoints)
  }

  drawRawPoints(
    pointMode: SkiaPointMode, 
    points: Float32Array, 
    paint: Paint
  ) {
    invariant(pointMode !== null)
    invariant(points !== null)
    invariant(paint !== null)
    
    if (points.length % 2 !== 0) {
      throw new ArgumentError('"points" must have an even number of values.')
    }
    this.skia.drawPoints(
      pointMode,
      points,
      paint.skia,
    );
  }

  drawRRect (
    rrect: RRect, 
    paint: Paint 
  ) {
    invariant(rrectIsValid(rrect))
    invariant(paint !== null)
    this.skia.drawRRect(
      rrect,
      paint.skia,
    )
  }

  drawRect (
    rect: Rect, 
    paint: Paint 
  ) {
    invariant(rectIsValid(rect))
    invariant(paint !== null)
    this.skia.drawRect(rect, paint.skia)
  }

  drawShadow (
    path: Path, 
    color: Color, 
    elevation: number, 
    transparentOccluder: boolean
  ) {
    invariant(path !== null)
    invariant(color !== null)
    invariant(transparentOccluder !== null)

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
    skiaCanvas: SkiaCanvas,
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
    devicePixelRatio: number,
  ) {
    const flags = transparentOccluder
      ? SkiaShadowFlags.kTransparentOccluderShadowFlag
      : SkiaShadowFlags.kDefaultShadowFlags

    const inAmbient = color.withAlpha(Math.round((color.alpha * kShadowAmbientAlpha)))
    const inSpot = color.withAlpha(Math.round((color.alpha * kShadowSpotAlpha)))

    const inTonalColors = {
      ambient: makeFreshSkColor(inAmbient),
      spot: makeFreshSkColor(inSpot),
    }

    const tonalColors = Skia.computeTonalColors(inTonalColors)
    const zPlaneParams = new Float32Array(3)
    zPlaneParams[2] = devicePixelRatio * elevation

    const lightPos = new Float32Array(3)
    lightPos[0] = kShadowLightXOffset
    lightPos[1] = kShadowLightYOffset
    lightPos[2] = devicePixelRatio * kShadowLightHeight,


    skiaCanvas.drawShadow(
      path.skia,
      zPlaneParams,
      lightPos,
      devicePixelRatio * kShadowLightRadius,
      tonalColors.ambient,
      tonalColors.spot,
      flags,
    )
  }

  drawVertices  (
    vertices: Vertices, 
    blendMode: SkiaBlendMode, 
    paint: Paint
  ) {
    invariant(vertices !== null)
    invariant(paint !== null)
    invariant(blendMode !== null)

    this.skia.drawVertices(
      vertices.skia,
      blendMode,
      paint.skia,
    )
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
    bounds: Rect | null, 
    paint: Paint
  ) {
    invariant(paint !== null)

    if (bounds === null) {
      this.skia.saveLayer(paint?.skia, null, null)
    } else {
      this.skia.saveLayer(
        paint?.skia,
        bounds,
        null
      )
    }
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

  transform (matrix4: Float64Array) {
    invariant(matrix4 !== null)

    if (matrix4.length !== 16) {
      throw new ArgumentError(`"matrix4" must have 16 entries.`)
    }

    this.skia.concat(toMatrix32(matrix4))
  }

  translate (
    dx: number, 
    dy: number
  ) {
    this.skia.translate(dx, dy)
  }
}

export class RecordingCanvas extends Canvas {
  public snapshot: PictureSnapshot

  constructor (
    canvas: SkiaCanvas, 
    bounds: Rect
  ) {
    super(canvas)

    this.snapshot = new PictureSnapshot(bounds)
  }

  addCommand (command: PaintCommand) {
    this.snapshot.add(command)
  }

  @command(PaintCommand) clear
  @command(PaintCommand) clipPath
  @command(PaintCommand) clipRRect
  @command(PaintCommand) clipRect
  @command(PaintCommand) drawArc
  @command(PaintCommand) drawAtlasRaw
  @command(PaintCommand) drawCircle
  @command(PaintCommand) drawColor
  @command(PaintCommand) drawDRRect
  @command(PaintCommand) drawImage
  @command(PaintCommand) drawImageRect
  @command(PaintCommand) drawImageNine
  @command(PaintCommand) drawLine
  @command(PaintCommand) drawOval
  @command(PaintCommand) drawPaint
  @command(PaintCommand) drawParagraph
  @command(PaintCommand) drawPath
  @command(PaintCommand) drawPicture
  @command(PaintCommand) drawPoints
  @command(PaintCommand) drawRRect
  @command(PaintCommand) drawRect
  @command(PaintCommand) drawShadow
  @command(PaintCommand) drawVertices
  @command(PaintCommand) restore
  @command(PaintCommand) restoreToCount
  @command(PaintCommand) rotate
  @command(PaintCommand) save
  @command(PaintCommand) saveLayer
  @command(PaintCommand) saveLayerWithFilter
  @command(PaintCommand) scale
  @command(PaintCommand) skew
  @command(PaintCommand) transform
  @command(PaintCommand) translate
}

export class PictureSnapshot {
  public bounds: Rect
  public commands: PaintCommand[] = []

  constructor (bounds: Rect) {
    this.bounds = bounds
  }

  add (command: PaintCommand) {
    this.commands.push(command)
  }

  toPicture () {
    const recorder: SkiaPictureRecorder = new Skia.PictureRecorder()
    const canvas: Canvas = Canvas.malloc(recorder.beginRecording(this.bounds))
    
    for (const command of this.commands) {
      command.apply(canvas)
    }

    const picture: SkiaPicture = recorder.finishRecordingAsPicture()
    recorder.delete()

    return picture
  }

  dispose() {
    for (const command of this.commands) {
      command.dispose()
    }
  }
}