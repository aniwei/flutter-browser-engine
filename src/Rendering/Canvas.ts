import { invariant } from 'ts-invariant'
import { Skia } from '@skia/binding'
import { ArgumentError } from '@internal/ArgumentError'
import { RRect, Rect, Offset  } from '@internal/Geometry'
import { FilterQuality, kShadowFlags } from '@skia'
import { offsetIsValid, rectIsValid, rrectIsValid } from '@helper/validators'
import { makeFreshSkiaColor, toMallocedSkiaPoints, toMatrix32 } from '@helper/skia'

import type { Color } from '@internal/Color'
import type { ICanvas, ClipOp, PointMode, IPicture, IPictureRecorder,BlendMode  } from '@skia'
import type { Picture } from './Picture'
import type { Image } from './Image'
import type { Paint } from './Paint'
import type { Path } from './Path'
import type { Vertices } from './Vertices'
import type { PictureRecorder } from './PictureRecorder'
import type { ImageFilter, ManagedSkiaImageFilterConvertible } from './ImageFilter'


type Methods<T> = { 
  [K in keyof T as (T[K] extends Function ? K : never)]: T[K] 
}

const kMitchellNetravaliB = 1.0 / 3.0
const kMitchellNetravaliC = 1.0 / 3.0

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
  static get clipOpIntersect (): ClipOp {
    return Skia.binding.ClipOp.Intersect
  }

  /**
   * @description: 
   * @param {PictureRecorder} recorder
   * @param {Rect} cullRect
   * @return {*}
   */
  static fromPictureRecorder (
    recorder: PictureRecorder,
    cullRect: Rect = Rect.largest
  ) {
    invariant(recorder !== null)
    if (recorder.isRecording) {
      throw new ArgumentError(`"recorder" must not already be associated with another Canvas.`)
    }

    const canvas = recorder.beginRecording(cullRect)
    return new Canvas(canvas.skia)
  }


  public get pictureSnapshot () {
    return null
  }

  public get saveCount () {
    return this.skia.getSaveCount()
  }


  public skia: ICanvas
  
  /**
   * @description: 
   * @param {ICanvas} skia
   * @return {Canvas}
   */  
  constructor (skia: ICanvas) {
    this.skia = skia
  }

  /**
   * @description: 
   * @return {number}
   */  
  getSaveCount () {
    return this.saveCount
  }

  /**
   * @description: 
   * @param {Path} path
   * @param {boolean} doAntiAlias
   * @return {*}
   */
  clipPath (
    path: Path, 
    doAntiAlias: boolean = true
  ) {
    invariant(path !== null)
    invariant(doAntiAlias !== null)
    this.skia.clipPath(
      path.skia!, 
      Canvas.clipOpIntersect,
      doAntiAlias
    )
  }

  /**
   * @description: 
   * @param {RRect} rrect
   * @param {boolean} doAntiAlias
   * @return {void}
   */
  clipRRect (
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

  /**
   * @description: 
   * @param {Rect} rect
   * @param {ClipOp} clipOp
   * @param {boolean} doAntiAlias
   * @return {void}
   */
  clipRect (
    rect: Rect, 
    clipOp: ClipOp = Skia.binding.ClipOp.Intersect, 
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
    blendMode: BlendMode
  ) {
    this.skia.drawAtlas(
      atlas.skImage,
      rects,
      rstTransforms,
      paint.skia!,
      blendMode,
      colors
    )
  }

  
  /**
   * @description: 
   * @param {Float32Array} offset
   * @param {number} radius
   * @param {*} paint
   * @return {*}
   */
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
    blendMode: BlendMode
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
      paint.skia!,
    )
  }

  /**
   * @description: 
   * @param {Image} image
   * @param {Offset} offset
   * @param {Paint} paint
   * @return {*}
   */
  drawImage ( // 
    image: Image, 
    offset: Offset, 
    paint: Paint
  ) {
    invariant(image !== null)
    invariant(offsetIsValid(offset))
    invariant(paint !== null)

    const filterQuality = paint.filterQuality
    
    if (filterQuality === FilterQuality.High) {
      this.skia.drawImageCubic(
        image.skia,
        offset.dx,
        offset.dy,
        kMitchellNetravaliB,
        kMitchellNetravaliC,
        paint.skia,
      )
    } else {
      this.skia.drawImageOptions(
        image.skia,
        offset.dx,
        offset.dy,
        filterQuality === FilterQuality.None 
          ? Skia.binding.FilterMode.Nearest 
          : Skia.binding.FilterMode.Linear,
        filterQuality === FilterQuality.Medium 
          ? Skia.binding.MipmapMode.Linear 
          : Skia.binding.MipmapMode.None,
        paint.skia,
      )
    }
  }

  /**
   * @description: 
   * @param {Image} image
   * @param {Rect} src
   * @param {Rect} dst
   * @param {Paint} paint
   * @return {*}
   */
  drawImageRect (
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
    if (filterQuality === FilterQuality.High) {
      this.skia.drawImageRectCubic(
        image.skia,
        src,
        dst,
        kMitchellNetravaliB,
        kMitchellNetravaliC,
        paint.skia,
      )
    } else {
      this.skia.drawImageRectOptions(
        image.skia,
        src,
        dst,
        filterQuality === FilterQuality.None 
          ? Skia.binding.FilterMode.Nearest 
          : Skia.binding.FilterMode.Linear,
        filterQuality === FilterQuality.Medium 
          ? Skia.binding.MipmapMode.Linear 
          : Skia.binding.MipmapMode.None,
        paint.skia,
      )
    }
  }

  /**
   * @description: 
   * @param {Image} image
   * @param {Rect} center
   * @param {Rect} dist
   * @param {Paint} paint
   * @return {*}
   */
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
      paint.filterQuality === FilterQuality.None 
        ? Skia.binding.FilterMode.Nearest 
        : Skia.binding.FilterMode.Linear,
      paint.skia,
    )
  }

  /**
   * @description: 
   * @param {*} pointA
   * @param {*} pointB
   * @param {Paint} paint
   * @return {*}
   */
  drawLine (
    pointA, 
    pointB, 
    paint: Paint
  ) {
    this.skia.drawLine(
      pointA.dx,
      pointA.dy,
      pointB.dx,
      pointB.dy,
      paint.skia!,
    )
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {Paint} paint
   * @return {*}
   */
  drawOval ( 
    rect: Rect, 
    paint: Paint
  ) {
    this.skia.drawOval(
      rect,
      paint.skia!,
    )
  }

  /**
   * @description: 
   * @param {Paint} paint
   * @return {*}
   */
  drawPaint (paint: Paint) {
    this.skia.drawPaint(paint.skia!)
  }

  /**
   * @description: 
   * @param {*} paragraph
   * @param {Offset} offset
   * @return {*}
   */
  drawParagraph (
    paragraph, // TODO
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

  /**
   * @description: 
   * @param {Path} path
   * @param {Paint} paint
   * @return {*}
   */
  drawPath (
    path: Path, 
    paint: Paint
  ) {
    this.skia.drawPath(path.skia!, paint.skia!)
  }

  /**
   * @description: 
   * @param {Picture} picture
   * @return {*}
   */
  drawPicture (picture: Picture) { 
    invariant(picture !== null)
    this.skia.drawPicture(picture.skia!)
  }

  /**
   * @description: 
   * @param {Paint} paint
   * @param {PointMode} pointMode
   * @param {Offset} points
   * @return {*}
   */
  drawPoints (
    paint: Paint,
    pointMode: PointMode, 
    points: Offset[]
  ) {
    invariant(pointMode !== null)
    invariant(points !== null)
    invariant(paint !== null)
    const sk = toMallocedSkiaPoints(points)

    this.skia.drawPoints(
      pointMode,
      sk,
      paint.skia!,
    )

    Skia.binding.Free(sk)
  }

  /**
   * @description: 
   * @param {PointMode} pointMode
   * @param {Float32Array} points
   * @param {Paint} paint
   * @return {*}
   */
  drawRawPoints(
    pointMode: PointMode, 
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
      paint.skia!,
    );
  }

  /**
   * @description: 
   * @param {RRect} rrect
   * @param {Paint} paint
   * @return {*}
   */
  drawRRect (
    rrect: RRect, 
    paint: Paint 
  ) {
    invariant(rrectIsValid(rrect))
    invariant(paint !== null)
    this.skia.drawRRect(
      rrect,
      paint.skia!,
    )
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {Paint} paint
   * @return {*}
   */
  drawRect (
    rect: Rect, 
    paint: Paint 
  ) {
    invariant(rectIsValid(rect))
    invariant(paint !== null)
    this.skia.drawRect(rect, paint.skia!)
  }

  /**
   * @description: 
   * @param {Path} path
   * @param {Color} color
   * @param {number} elevation
   * @param {boolean} transparentOccluder
   * @return {*}
   */
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
      Skia.binding.devicePixelRatio
    )
  }

  /**
   * @description: 
   * @param {ICanvas} skiaCanvas
   * @param {Path} path
   * @param {Color} color
   * @param {number} elevation
   * @param {boolean} transparentOccluder
   * @param {number} devicePixelRatio
   * @return {*}
   */
  drawSkiaShadow (
    skiaCanvas: ICanvas,
    path: Path,
    color: Color,
    elevation: number,
    transparentOccluder: boolean,
    devicePixelRatio: number,
  ) {
    const flags = transparentOccluder
      ? kShadowFlags.kTransparentOccluderShadowFlag
      : kShadowFlags.kDefaultShadowFlags

    const inAmbient = color.withAlpha(Math.round((color.alpha * kShadowAmbientAlpha)))
    const inSpot = color.withAlpha(Math.round((color.alpha * kShadowSpotAlpha)))

    const inTonalColors = {
      ambient: makeFreshSkiaColor(inAmbient),
      spot: makeFreshSkiaColor(inSpot),
    }

    const tonalColors = Skia.binding.computeTonalColors(inTonalColors)
    const zPlaneParams = new Float32Array(3)
    zPlaneParams[2] = devicePixelRatio * elevation

    const lightPos = new Float32Array(3)
    lightPos[0] = kShadowLightXOffset
    lightPos[1] = kShadowLightYOffset
    lightPos[2] = devicePixelRatio * kShadowLightHeight,


    skiaCanvas.drawShadow(
      path.skia!,
      zPlaneParams,
      lightPos,
      devicePixelRatio * kShadowLightRadius,
      tonalColors.ambient,
      tonalColors.spot,
      flags,
    )
  }

  /**
   * @description: 
   * @param {Vertices} vertices
   * @param {BlendMode} blendMode
   * @param {Paint} paint
   * @return {*}
   */
  drawVertices  (
    vertices: Vertices, 
    blendMode: BlendMode, 
    paint: Paint
  ) {
    invariant(vertices !== null)
    invariant(paint !== null)
    invariant(blendMode !== null)

    this.skia.drawVertices(
      vertices.skia!,
      blendMode,
      paint.skia!,
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

  clear (color: Color) {
    this.skia.clear(color)
  }

  /**
   * @description: 
   * @param {Rect} bounds
   * @param {Paint} paint
   * @return {*}
   */
  saveLayer (
    bounds: Rect | null, 
    paint: Paint
  ) {
    invariant(paint !== null)

    if (bounds === null) {
      this.skia.saveLayer(paint?.skia!, null, null)
    } else {
      this.skia.saveLayer(
        paint?.skia!,
        bounds,
        null
      )
    }
  }

  /**
   * @description: 
   * @param {Rect} bounds
   * @param {ImageFilter} filter
   * @param {Paint} paint
   * @return {*}
   */
  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter, 
    paint: Paint
  ) {
    // TODO
    const convertible: ManagedSkiaImageFilterConvertible = filter
    return this.skia.saveLayer(
      paint?.skia!,
      bounds,
      convertible.imageFilter.skia,
      0,
    )
  }

  /**
   * @description: 
   * @param {number} sx
   * @param {number} sy
   * @return {*}
   */
  scale (
    sx: number, 
    sy: number = sx
  ) {
    this.skia.scale(sx, sy)
  }

  /**
   * @description: 
   * @param {number} sx
   * @param {number} sy
   * @return {*}
   */
  skew (
    sx: number, 
    sy: number
  ) {
    this.skia.skew(sx, sy)
  }

  /**
   * @description: 
   * @param {Float64Array} matrix4
   * @return {*}
   */
  transform (matrix4: Float64Array) {
    invariant(matrix4 !== null)

    if (matrix4.length !== 16) {
      throw new ArgumentError(`"matrix4" must have 16 entries.`)
    }

    this.skia.concat(toMatrix32(matrix4))
  }

  /**
   * @description: 
   * @return {*}
   */
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
    canvas: ICanvas, 
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
    const recorder: IPictureRecorder = new Skia.binding.PictureRecorder()
    const canvas: Canvas = new Canvas(recorder.beginRecording(this.bounds))
    
    for (const command of this.commands) {
      command.apply(canvas)
    }

    const picture: IPicture = recorder.finishRecordingAsPicture()
    recorder.delete()

    return picture
  }

  dispose() {
    for (const command of this.commands) {
      command.dispose()
    }
  }
}