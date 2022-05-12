import invariant from 'ts-invariant'
import { CkCanvas, CkPath } from '@CanvasKit'
import { Skia } from '@Skia'
import { Offset, Rect, Size } from '@UI'
import { ColorFilter, TextDirection } from 'canvaskit-wasm'
import { Alignment, AlignmentGeometry } from './Alignment'

export enum ImageRepeat {
  Repeat,
  RepeatX,
  RepeatY,
  NoRepeat,
}

export class DecorationImage {
  public image: ImageProvider
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
    image,
    onError,
    colorFilter,
    fit,
    alignment = Alignment.center,
    centerSlice,
    repeat = ImageRepeat.NoRepeat,
    matchTextDirection = false,
    scale = 1.0,
    opacity = 1.0,
    filterQuality = SkiaFilterQuality.Low,
    invertColors = false,
    isAntiAlias = false,
  ) {
    invariant(alignment !== null)
    invariant(repeat !== null)
    invariant(matchTextDirection !== null)
    invariant(scale !== null)

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
    return DecorationImagePainter._(this, onChanged);
  }

  isEqual (other: DecorationImage) {
    if (other === this) {
      return true
    }

    return (
      other instanceof DecorationImage &&
      other.image == this.image &&
      other.colorFilter == this.colorFilter &&
      other.fit == this.fit &&
      other.alignment == this.alignment &&
      other.centerSlice == this.centerSlice &&
      other.repeat == this.repeat &&
      other.matchTextDirection == this.matchTextDirection &&
      other.scale == this.scale &&
      other.opacity == this.opacity &&
      other.filterQuality == this.filterQuality &&
      other.invertColors == this.invertColors &&
      other.isAntiAlias == this.isAntiAlias
    )
  }
}

class DecorationImagePainter {
  public details: DecorationImage
  public onChanged: VoidCallback

  public imageStream: ImageStream | null
  public image: ImageInfo | null

  constructor (
    details: DecorationImage,
    onChanged: VoidCallback
  ) {
    invariant(details !== null)
    this.details = details
    this.onChanged = onChanged
  }
  
  paint (
    canvas: CkCanvas, 
    rect: Rect, 
    clipPath: CkPath | null, 
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
      this.details.colorFilter,
      this.details.fit,
      this.details.alignment.resolve(configuration.textDirection),
      this.details.centerSlice,
      this.details.repeat,
      flipHorizontally,
      this.details.opacity,
      this.details.filterQuality,
      this.details.invertColors,
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


Map<String, ImageSizeInfo> _pendingImageSizeInfo = <String, ImageSizeInfo>{};
Set<ImageSizeInfo> _lastFrameImageSizeInfo = <ImageSizeInfo>{};


export function paintImage(
  canvas: CkCanvas,
  rect: Rect,
  image: CkImage,
  debugImageLabel: string | null,
  scale: number = 1.0,
  opacity: number = 1.0,
  colorFilter: ColorFilter | null,
  fit: BoxFit | null,
  alignment: Alignment = Alignment.center,
  centerSlice: Rect | null,
  repeat: ImageRepeat = ImageRepeat.NoRepeat,
  flipHorizontally: boolean = false,
  invertColors: boolean = false,
  filterQuality: SkiaFilterQuality = SkiaFilterQuality.Low,
  isAntiAlias: boolean = false,
) {
  invariant(canvas !== null)
  invariant(image !== null)
  invariant(alignment !== null)
  invariant(repeat !== null)
  invariant(flipHorizontally !== null)
  invariant(isAntiAlias !== null)
  invariant(image.debugGetOpenHandleStackTraces()?.isNotEmpty ?? true)

  if (rect.isEmpty) {
    return
  }
  let outputSize = rect.size
  let inputSize = new Size(image.width, image.height)
  let sliceBorder: Offset | null  
  if (centerSlice !== null) {
    sliceBorder = inputSize / scale - centerSlice.size as Offset
    outputSize = outputSize - sliceBorder as Size
    inputSize = inputSize - sliceBorder * scale as Size
  }

  fit ??= centerSlice == null ? BoxFit.scaleDown : BoxFit.fill
  invariant(centerSlice === null || (fit !== BoxFit.none && fit !== BoxFit.cover))

  const fittedSizes = applyBoxFit(fit, inputSize / scale, outputSize);
  const sourceSize = fittedSizes.source * scale;
  const destinationSize = fittedSizes.destination
  
  if (centerSlice !== null) {
    outputSize += sliceBorder!;
    destinationSize += sliceBorder;
    // We don't have the ability to draw a subset of the image at the same time
    // as we apply a nine-patch stretch.
    assert(sourceSize == inputSize, 'centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.');
  }

  if (repeat != ImageRepeat.noRepeat && destinationSize == outputSize) {
    // There's no need to repeat the image because we're exactly filling the
    // output rect with the image.
    repeat = ImageRepeat.noRepeat;
  }
  final Paint paint = Paint()..isAntiAlias = isAntiAlias;
  if (colorFilter != null)
    paint.colorFilter = colorFilter;
  paint.color = Color.fromRGBO(0, 0, 0, opacity);
  paint.filterQuality = filterQuality;
  paint.invertColors = invertColors;
  final double halfWidthDelta = (outputSize.width - destinationSize.width) / 2.0;
  final double halfHeightDelta = (outputSize.height - destinationSize.height) / 2.0;
  final double dx = halfWidthDelta + (flipHorizontally ? -alignment.x : alignment.x) * halfWidthDelta;
  final double dy = halfHeightDelta + alignment.y * halfHeightDelta;
  final Offset destinationPosition = rect.topLeft.translate(dx, dy);
  final Rect destinationRect = destinationPosition & destinationSize;

  // Set to true if we added a saveLayer to the canvas to invert/flip the image.
  bool invertedCanvas = false;
  // Output size and destination rect are fully calculated.
  if (!kReleaseMode) {
    final ImageSizeInfo sizeInfo = ImageSizeInfo(
      // Some ImageProvider implementations may not have given this.
      source: debugImageLabel ?? '<Unknown Image(${image.width}×${image.height})>',
      imageSize: Size(image.width.toDouble(), image.height.toDouble()),
      // It's ok to use this instead of a MediaQuery because if this changes,
      // whatever is aware of the MediaQuery will be repainting the image anyway.
      displaySize: outputSize * PaintingBinding.instance!.window.devicePixelRatio,
    );
    assert(() {
      if (debugInvertOversizedImages &&
          sizeInfo.decodedSizeInBytes > sizeInfo.displaySizeInBytes + debugImageOverheadAllowance) {
        final int overheadInKilobytes = (sizeInfo.decodedSizeInBytes - sizeInfo.displaySizeInBytes) ~/ 1024;
        final int outputWidth = sizeInfo.displaySize.width.toInt();
        final int outputHeight = sizeInfo.displaySize.height.toInt();
        FlutterError.reportError(FlutterErrorDetails(
          exception: 'Image $debugImageLabel has a display size of '
            '$outputWidth×$outputHeight but a decode size of '
            '${image.width}×${image.height}, which uses an additional '
            '${overheadInKilobytes}KB.\n\n'
            'Consider resizing the asset ahead of time, supplying a cacheWidth '
            'parameter of $outputWidth, a cacheHeight parameter of '
            '$outputHeight, or using a ResizeImage.',
          library: 'painting library',
          context: ErrorDescription('while painting an image'),
        ));
        // Invert the colors of the canvas.
        canvas.saveLayer(
          destinationRect,
          Paint()..colorFilter = const ColorFilter.matrix(<double>[
            -1,  0,  0, 0, 255,
             0, -1,  0, 0, 255,
             0,  0, -1, 0, 255,
             0,  0,  0, 1,   0,
          ]),
        );
        // Flip the canvas vertically.
        final double dy = -(rect.top + rect.height / 2.0);
        canvas.translate(0.0, -dy);
        canvas.scale(1.0, -1.0);
        canvas.translate(0.0, dy);
        invertedCanvas = true;
      }
      return true;
    }());
    // Avoid emitting events that are the same as those emitted in the last frame.
    if (!_lastFrameImageSizeInfo.contains(sizeInfo)) {
      final ImageSizeInfo? existingSizeInfo = _pendingImageSizeInfo[sizeInfo.source];
      if (existingSizeInfo == null || existingSizeInfo.displaySizeInBytes < sizeInfo.displaySizeInBytes) {
        _pendingImageSizeInfo[sizeInfo.source!] = sizeInfo;
      }
      debugOnPaintImage?.call(sizeInfo);
      SchedulerBinding.instance!.addPostFrameCallback((Duration timeStamp) {
        _lastFrameImageSizeInfo = _pendingImageSizeInfo.values.toSet();
        if (_pendingImageSizeInfo.isEmpty) {
          return;
        }
        developer.postEvent(
          'Flutter.ImageSizesForFrame',
          <String, Object>{
            for (ImageSizeInfo imageSizeInfo in _pendingImageSizeInfo.values)
              imageSizeInfo.source!: imageSizeInfo.toJson(),
          },
        );
        _pendingImageSizeInfo = <String, ImageSizeInfo>{};
      });
    }
  }

  final bool needSave = centerSlice != null || repeat != ImageRepeat.noRepeat || flipHorizontally;
  if (needSave)
    canvas.save();
  if (repeat != ImageRepeat.noRepeat)
    canvas.clipRect(rect);
  if (flipHorizontally) {
    final double dx = -(rect.left + rect.width / 2.0);
    canvas.translate(-dx, 0.0);
    canvas.scale(-1.0, 1.0);
    canvas.translate(dx, 0.0);
  }
  if (centerSlice == null) {
    final Rect sourceRect = alignment.inscribe(
      sourceSize, Offset.zero & inputSize,
    );
    if (repeat == ImageRepeat.noRepeat) {
      canvas.drawImageRect(image, sourceRect, destinationRect, paint);
    } else {
      for (final Rect tileRect in _generateImageTileRects(rect, destinationRect, repeat))
        canvas.drawImageRect(image, sourceRect, tileRect, paint);
    }
  } else {
    canvas.scale(1 / scale);
    if (repeat == ImageRepeat.noRepeat) {
      canvas.drawImageNine(image, _scaleRect(centerSlice, scale), _scaleRect(destinationRect, scale), paint);
    } else {
      for (final Rect tileRect in _generateImageTileRects(rect, destinationRect, repeat))
        canvas.drawImageNine(image, _scaleRect(centerSlice, scale), _scaleRect(tileRect, scale), paint);
    }
  }
  if (needSave)
    canvas.restore();

  if (invertedCanvas) {
    canvas.restore();
  }
}

Iterable<Rect> _generateImageTileRects(Rect outputRect, Rect fundamentalRect, ImageRepeat repeat) {
  int startX = 0;
  int startY = 0;
  int stopX = 0;
  int stopY = 0;
  final double strideX = fundamentalRect.width;
  final double strideY = fundamentalRect.height;

  if (repeat == ImageRepeat.repeat || repeat == ImageRepeat.repeatX) {
    startX = ((outputRect.left - fundamentalRect.left) / strideX).floor();
    stopX = ((outputRect.right - fundamentalRect.right) / strideX).ceil();
  }

  if (repeat == ImageRepeat.repeat || repeat == ImageRepeat.repeatY) {
    startY = ((outputRect.top - fundamentalRect.top) / strideY).floor();
    stopY = ((outputRect.bottom - fundamentalRect.bottom) / strideY).ceil();
  }

  return <Rect>[
    for (int i = startX; i <= stopX; ++i)
      for (int j = startY; j <= stopY; ++j)
        fundamentalRect.shift(Offset(i * strideX, j * strideY)),
  ];
}

Rect _scaleRect(Rect rect, double scale) => Rect.fromLTRB(rect.left * scale, rect.top * scale, rect.right * scale, rect.bottom * scale);
