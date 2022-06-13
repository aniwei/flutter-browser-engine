import { Skia, SkiaClipOp, SkiaFilterQuality, SkiaPicture, SkiaPictureRecorder, toSkiaM44FromFloat32 } from '@skia'
import type { SkiaBlendMode, SkiaCanvas } from '@skia'
import type { RRect, Rect, Offset } from './Geometry'
import type { Color } from './Painting'
import type { Image } from './Image'
import type { ImageFilter, ManagedSkImageFilterConvertible } from './ImageFilter'
import type { Paint } from './Paint'
import type { Path } from './Path'

type Functions<T> = { 
  [K in keyof T as (T[K] extends Function ? K : never)]: T[K] 
}

type Commands<T> = { 
  [K in keyof Functions<T> as Capitalize<string & K>]: () => T[K]
}

function command (PaintCommand: { new (...rest: unknown[]): PaintCommand }) {
  return function (
    target: RecordingCanvas,
    key: keyof Functions<Canvas>,
  ) {
    const func = target[key]
    function command (this, ...rest: any[]) {
      Reflect.apply(func, this, rest)
      this.addCommand(new PaintCommand(...rest))
    }

    Reflect.defineProperty(target, key, {
      get () {
        return command
      }
    })
  }
}

function type (command: Commands<Canvas>) {
  return function (
    target: RecordingCanvas,
    key: keyof Functions<Canvas>,
  ) {
    const func = target[key]
    function command (this, ...rest: any[]) {
      Reflect.apply(func, this, rest)
      this.addCommand(new PaintCommand(...rest))
    }

    Reflect.defineProperty(target, key, {
      get () {
        return command
      }
    })
  }
}

export abstract class PaintCommand {
  abstract public type: string
  public arguments: unknown[]

  constructor (...rest: unknown[]) {
    this.arguments = rest
  }

  apply (canvas: Canvas): void {
    Reflect.apply(canvas[this.type], canvas, this.arguments)
  }

  dispose () {}
}

@type(clear)
export class ClearCommand extends PaintCommand { }
@type()
export class SaveCommand extends PaintCommand { }
@type()
export class RestoreCommand extends PaintCommand { }
export class RestoreToCountCommand extends PaintCommand { }
export class TranslateCommand extends PaintCommand { }
export class ScaleCommand extends PaintCommand { }

export class RotateCommand extends PaintCommand {
  public radians: number

  constructor (radians: number) {
    super()

    this.radians = radians
  }

  apply (canvas: Canvas) {
    canvas.rotate(this.radians * 180.0 / Math.PI, 0.0, 0.0)
  }
}

export class TransformCommand extends PaintCommand {
  public matrix4: Float32Array

  constructor (matrix4: Float32Array) {
    super()

    this.matrix4 = matrix4
  }

  apply (canvas: Canvas) {
    canvas.concat(toSkiaM44FromFloat32(this.matrix4))
  }
}

export class SkewCommand extends PaintCommand {
  public sx: number
  public sy: number

  constructor (
    sx: number, 
    sy: number
  ) {
    super()
    this.sx = sx
    this.sy = sy
  }
  
  apply (canvas: Canvas) {
    canvas.skew(this.sx, this.sy)
  }
}

export class ClipRectCommand extends PaintCommand {
  public rect: Rect
  public clipOp: SkiaClipOp
  public doAntiAlias: boolean

  constructor (
    rect: Rect, 
    clipOp: SkiaClipOp, 
    doAntiAlias: boolean
  ) {
    super()

    this.rect = rect
    this.clipOp = clipOp
    this.doAntiAlias = doAntiAlias
  }

  
  apply (canvas: Canvas) {
    canvas.clipRect(
      this.rect,
      this.clipOp,
      this.doAntiAlias,
    )
  }
}

export class DrawArcCommand extends PaintCommand {
  public oval: Rect
  public startAngle: number
  public sweepAngle: number
  public useCenter: boolean
  public paint: Paint

  constructor (
    oval: Rect, 
    startAngle: number, 
    sweepAngle: number, 
    useCenter: boolean, 
    paint:Paint ,
  ) {
    super()

    this.oval = oval
    this.startAngle = startAngle
    this.sweepAngle = sweepAngle
    this.useCenter = useCenter
    this.paint = paint
  }
  
  apply (canvas: Canvas) {
    const toDegrees = 180 / Math.PI
    canvas.drawArc(
      this.oval,
      this.startAngle * toDegrees,
      this.sweepAngle * toDegrees,
      this.useCenter,
      this.paint.skia,
    );
  }
}

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
    clipOp: SkiaClipOp = Skia.ClipOp.Intersect, 
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

  @command(ClearCommand) clear
  @command(ClipPathCommand) clipPath
  @command(ClipRRectCommand) clipRRect
  @command()
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
    const canvas: Canvas = recorder.beginRecording(this.bounds)
    
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