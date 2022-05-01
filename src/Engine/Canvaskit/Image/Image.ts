import { StateError } from '@Shared';
import { SkImage } from '@Skia';
import { Image, ImageByteFormat } from '@UI'
import invariant from 'ts-invariant';

export class CkImage implements Image {
  static cloneOf () {

  }

  static ByteData? _encodeImage({
    required SkImage skImage,
    required ui.ImageByteFormat format,
    required SkAlphaType alphaType,
    required SkColorType colorType,
    required ColorSpace colorSpace,
  }) {
    Uint8List? bytes;

    if (format == ui.ImageByteFormat.rawRgba || format == ui.ImageByteFormat.rawStraightRgba) {
      final SkImageInfo imageInfo = SkImageInfo(
        alphaType: alphaType,
        colorType: colorType,
        colorSpace: colorSpace,
        width: skImage.width(),
        height: skImage.height(),
      );
      bytes = skImage.readPixels(0, 0, imageInfo);
    } else {
      bytes = skImage.encodeToBytes(); // defaults to PNG 100%
    }

    return bytes?.buffer.asByteData(0, bytes.length);
  }

  public box: SkiaObjectBox<CkImage, SkImage>
  public videoFrame: VideoFrame | null = null
  public get debugStackTrace (): StackTrace {
    return this.debugStackTrace!
  }
  public debugStackTrace: StackTrace | null = null
  public get skImage () {
    return this.box.skiaObject
  } 
  public get debugDisposed (): never {
    throw new StateError('Image.debugDisposed is only available when asserts are enabled.')
  }

  public disposed = false

  public get width () {
    invariant(this.debugCheckIsNotDisposed())
    return this.skImage.width()
  }

  get height () {
    invariant(this.debugCheckIsNotDisposed())
    return this.skImage.height()
  }

  constructor (skImage: SkImage, videoFrame) {
   
    this.box = new SkiaObjectBox<CkImage, SkImage>(this, skImage)
    if (browserSupportsFinalizationRegistry) {
    } else {
      // If finalizers are not supported we need to be able to resurrect the
      // image if it was temporarily deleted. To do that, we keep the original
      // pixels and ask the SkiaObjectBox to make an image from them when
      // resurrecting.
      //
      // IMPORTANT: the alphaType, colorType, and colorSpace passed to
      // _encodeImage and to canvasKit.MakeImage must be the same. Otherwise
      // Skia will misinterpret the pixels and corrupt the image.
      final ByteData? originalBytes = _encodeImage(
        skImage: skImage,
        format: ui.ImageByteFormat.rawRgba,
        alphaType: canvasKit.AlphaType.Premul,
        colorType: canvasKit.ColorType.RGBA_8888,
        colorSpace: SkColorSpaceSRGB,
      );
      if (originalBytes == null) {
        printWarning('Unable to encode image to bytes. We will not '
            'be able to resurrect it once it has been garbage collected.');
        return;
      }
      final int originalWidth = skImage.width();
      final int originalHeight = skImage.height();
      box = SkiaObjectBox<CkImage, SkImage>.resurrectable(this, skImage, () {
        final SkImage? skImage = canvasKit.MakeImage(
          SkImageInfo(
            alphaType: canvasKit.AlphaType.Premul,
            colorType: canvasKit.ColorType.RGBA_8888,
            colorSpace: SkColorSpaceSRGB,
            width: originalWidth,
            height: originalHeight,
          ),
          originalBytes.buffer.asUint8List(),
          4 * originalWidth,
        );
        if (skImage == null) {
          throw ImageCodecException(
            'Failed to resurrect image from pixels.'
          );
        }
        return skImage;
      });
    }
  }
  
  

  debugCheckIsNotDisposed (): boolean {
    invariant(!this.disposed, 'This image has been disposed.')
    return true
  }

  dispose () {
    invariant(
      !this.disposed,
      'Cannot dispose an image that has already been disposed.',
    )
    this.disposed = true
    this.box.unref(this)
  }

  clone (): CkImage {
    invariant(this._debugCheckIsNotDisposed())
    return CkImage.cloneOf(box)
  }

  isCloneOf (other: Image): boolean {
    invariant(this,_debugCheckIsNotDisposed())
    return other.skImage.isAliasOf(this.skImage)
  }

  debugGetOpenHandleStackTraces (): StackTrace[] | null  {
    return this.box.debugGetStackTraces()
  }

  toByteData ({
    ui.ImageByteFormat format = ui.ImageByteFormat.rawRgba,
  }) {
    invariant(this.debugCheckIsNotDisposed())
    if (this.videoFrame !== null) {
      return this.readPixelsFromVideoFrame(this.videoFrame!, format)
    } else {
      return this.readPixelsFromSkImage(this.format)
    }
  }

  readPixelsFromSkImage (format: ImageByteFormat) {
    final SkAlphaType alphaType = format == ui.ImageByteFormat.rawStraightRgba ? canvasKit.AlphaType.Unpremul : canvasKit.AlphaType.Premul;
    final ByteData? data = _encodeImage(
      skImage: skImage,
      format: format,
      alphaType: alphaType,
      colorType: canvasKit.ColorType.RGBA_8888,
      colorSpace: SkColorSpaceSRGB,
    );
    if (data == null) {
      return Future<ByteData>.error('Failed to encode the image into bytes.');
    } else {
      return Future<ByteData>.value(data);
    }
  }

  toString () {
    invariant(this.debugCheckIsNotDisposed())
    return `[${this.width}\u00D7${this.height}]`
  }
}
