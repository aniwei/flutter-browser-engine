import invariant from 'ts-invariant'
import { Skia, SkiaFilterQuality } from '@Skia'
import { Canvas, Color, ColorFilter, Image, Offset, Paint, Path, Rect, Size } from '@UI'
import { VoidCallback } from '@Platform'
import { Alignment, AlignmentGeometry } from './Alignment'
import { applyBoxFit, BoxFit } from './BoxFit'
import { ImageConfiguration, ImageProvider } from './ImageProvider'
import { ImageErrorListener, ImageInfo, ImageStream, ImageStreamListener } from './ImageStream'

export enum ImageRepeat {
  Repeat,
  RepeatX,
  RepeatY,
  NoRepeat,
}

export class DecorationImage {
  public image: ImageProvider<unknown>
  public onError: ImageErrorListener | null
  public colorFilter: ColorFilter | null
  public fit: BoxFit | null
  public alignment: AlignmentGeometry
  public centerSlice: Rect | null
  public repeat: ImageRepeat
  public matchTextDirection: boolean
  public scale: number
  public opacity: number
  public filterQuality: SkiaFilterQuality
  public invertColors: boolean
  public isAntiAlias: boolean
  
  constructor(
    image: ImageProvider<unknown>,
    onError?: ImageErrorListener | null,
    colorFilter?: ColorFilter | null,
    fit?: BoxFit | null,
    alignment: AlignmentGeometry = Alignment.center,
    centerSlice?: Rect | null,
    repeat = ImageRepeat.NoRepeat,
    matchTextDirection: boolean = false,
    scale: number = 1.0,
    opacity: number = 1.0,
    filterQuality: SkiaFilterQuality = SkiaFilterQuality.Low,
    invertColors: boolean = false,
    isAntiAlias: boolean = false,
  ) {
    invariant(alignment !== null)
    invariant(repeat !== null)
    invariant(matchTextDirection !== null)
    invariant(scale !== null)


    onError = onError ?? null
    colorFilter = colorFilter ?? null
    fit = fit ?? null
    centerSlice = centerSlice ?? null

    this.image = image
    this.onError = onError
    this.colorFilter = colorFilter
    this.fit = fit
    this.alignment = alignment
    this.centerSlice = centerSlice
    this.repeat = repeat
    this.matchTextDirection = matchTextDirection
    this.scale = scale
    this.opacity = opacity
    this.filterQuality = filterQuality
    this.invertColors = invertColors
    this.isAntiAlias = isAntiAlias
  }
       
  createPainter (onChanged: VoidCallback): DecorationImagePainter  {
    invariant(onChanged !== null)
    return new DecorationImagePainter(this, onChanged)
  }

  isEqual (other: DecorationImage) {
    if (other === this) {
      return true
    }

    return (
      other instanceof DecorationImage &&
      other.image === this.image &&
      other.colorFilter === this.colorFilter &&
      other.fit === this.fit &&
      other.alignment === this.alignment &&
      other.centerSlice === this.centerSlice &&
      other.repeat === this.repeat &&
      other.matchTextDirection === this.matchTextDirection &&
      other.scale === this.scale &&
      other.opacity === this.opacity &&
      other.filterQuality === this.filterQuality &&
      other.invertColors === this.invertColors &&
      other.isAntiAlias === this.isAntiAlias
    )
  }
}

export class DecorationImagePainter {
  public details: DecorationImage
  public onChanged: VoidCallback

  public imageStream: ImageStream | null = null
  public image: ImageInfo | null = null

  constructor (
    details: DecorationImage,
    onChanged: VoidCallback
  ) {
    invariant(details !== null)

    this.details = details
    this.onChanged = onChanged
  }
  
  paint (
    canvas: Canvas, 
    rect: Rect, 
    clipPath: Path | null, 
    configuration: ImageConfiguration
  ) {
    invariant(canvas !== null)
    invariant(rect !== null)
    invariant(configuration !== null)

    let flipHorizontally = false
    if (this.details.matchTextDirection) {
      if (configuration.textDirection === Skia.TextDirection.RTL) {
        flipHorizontally = true
      }
    }

    const newImageStream = this.details.image.resolve(configuration)

    if (newImageStream.key !== this.imageStream?.key) {
      const listener = new ImageStreamListener(
        this.handleImage,
        this.details.onError,
      )
      this.imageStream?.removeListener(listener)
      this.imageStream = newImageStream
      this.imageStream!.addListener(listener)
    }

    if (this.image === null) {
      return
    }

    if (clipPath !== null) {
      canvas.save()
      canvas.clipPath(clipPath)
    }

    paintImage(
      canvas,
      rect,
      this.image!.image,
      this.image!.debugLabel,
      this.details.scale * this.image!.scale,
      this.details.opacity,
      this.details.colorFilter,
      this.details.fit,
      this.details.alignment.resolve(configuration.textDirection),
      this.details.centerSlice,
      this.details.repeat,
      flipHorizontally,
      this.details.invertColors,
      this.details.filterQuality,
      this.details.isAntiAlias,
    )

    if (clipPath !== null) {
      canvas.restore()
    }
  }

  handleImage(
    value: ImageInfo, 
    synchronousCall: boolean
  ) {
    if (this.image === value) {
      return
    }

    if (this.image !== null && this.image!.isCloneOf(value)) {
      value.dispose()
      return
    }

    this.image?.dispose()
    this.image = value
    invariant(this.onChanged !== null)

    if (!synchronousCall) {
      this.onChanged()
    }
  }

  dispose () {
    this.imageStream?.removeListener(new ImageStreamListener(
      this.handleImage,
      this.details.onError,
    ))
    this.image?.dispose()
    this.image = null
  }

  toString () {
    return ``
  }
}

export function paintImage(
  canvas: Canvas,
  rect: Rect,
  image: Image,
  debugImageLabel?: string | null,
  scale: number = 1.0,
  opacity: number = 1.0,
  colorFilter?: ColorFilter | null,
  fit?: BoxFit | null,
  alignment: Alignment = Alignment.center,
  centerSlice?: Rect | null,
  repeat: ImageRepeat = ImageRepeat.NoRepeat,
  flipHorizontally: boolean = false,
  invertColors: boolean = false,
  filterQuality: SkiaFilterQuality = SkiaFilterQuality.Low,
  isAntiAlias: boolean = false,
) {
  debugImageLabel = debugImageLabel ?? null
  colorFilter = colorFilter ?? null
  centerSlice = centerSlice ?? null
  fit = fit ?? null

  invariant(canvas !== null)
  invariant(image !== null)
  invariant(alignment !== null)
  invariant(repeat !== null)
  invariant(flipHorizontally !== null)
  invariant(isAntiAlias !== null)

  if (rect.isEmpty) {
    return
  }

  let outputSize = rect.size
  let inputSize = new Size(image.width, image.height)
  let sliceBorder: Size | null  

  if (centerSlice !== null) {
    sliceBorder = inputSize.divide(scale).subtract(centerSlice.size)
    outputSize = outputSize.subtract(sliceBorder)
    inputSize = inputSize.subtract(sliceBorder.multiply(scale))
  }

  fit ??= centerSlice == null ? BoxFit.ScaleDown : BoxFit.Fill
  
  invariant(
    centerSlice === null || 
    (
      fit !== BoxFit.None && 
      fit !== BoxFit.Cover
    )
  )

  const fittedSizes = applyBoxFit(fit, inputSize.divide(scale), outputSize)
  const sourceSize = fittedSizes.source.multiply(scale)
  let destinationSize = fittedSizes.destination
  
  if (centerSlice !== null) {
    outputSize = outputSize.add(sliceBorder!)
    destinationSize = destinationSize.add(sliceBorder!)
   
    invariant(sourceSize.isEqual(inputSize), 'centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.')
  }

  if (
    repeat !== ImageRepeat.NoRepeat && 
    destinationSize.isEqual(outputSize)
  ) {
    repeat = ImageRepeat.NoRepeat
  }
  
  const paint = Paint.malloc()
  paint.isAntiAlias = isAntiAlias

  if (colorFilter !== null) {
    paint.colorFilter = colorFilter
  }

  paint.color = Color.fromRGBO(0, 0, 0, opacity)
  paint.filterQuality = filterQuality
  paint.invertColors = invertColors
  const halfWidthDelta = (outputSize.width - destinationSize.width) / 2.0;
  const halfHeightDelta = (outputSize.height - destinationSize.height) / 2.0;
  const dx = halfWidthDelta + (flipHorizontally ? -alignment.x : alignment.x) * halfWidthDelta;
  const dy = halfHeightDelta + alignment.y * halfHeightDelta;
  const destinationPosition: Offset = rect.topLeft.translate(dx, dy)
  const destinationRect: Rect = destinationPosition.and(destinationSize)

  const invertedCanvas = false
  
  const needSave = (
    centerSlice !== null || 
    repeat !== ImageRepeat.NoRepeat || 
    flipHorizontally
  )

  if (needSave) {
    canvas.save()
  }
  
  if (repeat !== ImageRepeat.NoRepeat) {
    canvas.clipRect(rect)
  }

  if (flipHorizontally) {
    const dx = -(rect.left + rect.width / 2.0)
    canvas.translate(-dx, 0.0)
    canvas.scale(-1.0, 1.0)
    canvas.translate(dx, 0.0)
  }

  if (centerSlice === null) {
    const sourceRect = alignment.inscribe(
      sourceSize, Offset.zero.and(inputSize),
    )

    if (repeat === ImageRepeat.NoRepeat) {
      canvas.drawImageRect(image, sourceRect, destinationRect, paint)
    } else {
      for (const tileRect of generateImageTileRects(rect, destinationRect, repeat)) {
        canvas.drawImageRect(image, sourceRect, tileRect, paint)
      }
    }
  } else {
    canvas.scale(1 / scale, 1)
    if (repeat === ImageRepeat.NoRepeat) {
      canvas.drawImageNine(
        image, 
        scaleRect(centerSlice, scale), 
        scaleRect(destinationRect, scale), 
        paint
      )
    } else {
      for (const tileRect of generateImageTileRects(rect, destinationRect, repeat)) {
        canvas.drawImageNine(
          image, 
          scaleRect(centerSlice, scale), 
          scaleRect(tileRect, scale), 
          paint
        )
      }
    }
  }

  if (needSave) {
    canvas.restore()
  }

  if (invertedCanvas) {
    canvas.restore()
  }
}

export function generateImageTileRects (
  outputRect: Rect, 
  fundamentalRect: Rect, 
  repeat: ImageRepeat
): Rect[] {
  let startX = 0
  let startY = 0
  let stopX = 0
  let stopY = 0
  const strideX = fundamentalRect.width
  const strideY = fundamentalRect.height

  if (
    repeat == ImageRepeat.Repeat || 
    repeat == ImageRepeat.RepeatX
  ) {
    startX = Math.floor(((outputRect.left - fundamentalRect.left) / strideX))
    stopX = Math.ceil(((outputRect.right - fundamentalRect.right) / strideX))
  }

  if (
    repeat == ImageRepeat.Repeat || 
    repeat == ImageRepeat.RepeatY
  ) {
    startY = Math.floor(((outputRect.top - fundamentalRect.top) / strideY))
    stopY = Math.ceil(((outputRect.bottom - fundamentalRect.bottom) / strideY))
  }

  const rects: Rect[] = []

  for (let i = startX; i <= stopX; ++i) {
    for (let j = startY; j <= stopY; ++j) {
      fundamentalRect.shift(new Offset(i * strideX, j * strideY))
    }
  }

  return rects
}

function scaleRect(
  rect: Rect, 
  scale: number
): Rect {
  return Rect.fromLTRB(
    rect.left * scale, 
    rect.top * scale, 
    rect.right * scale, 
    rect.bottom * scale
  )
}
