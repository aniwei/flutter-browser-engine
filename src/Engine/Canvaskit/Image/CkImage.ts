import { invariant } from 'ts-invariant'
import { StateError } from '@Shared'
import { SkImage, SkAlphaType, SkColorType, ColorSpace } from '@Skia'
import { Uint8List, VideoFrame } from '@Types'
import { Image, ImageByteFormat } from '@UI'
import { CanvasKitAPI } from '@CanvasKitAPI';
import { SkiaObjectBox } from '../SkiaObjectCache'
import { StackTrace } from '../SkiaObjectCache/StackTrace'
import { readPixelsFromVideoFrame } from '../ImageWebCodecs'



export class CkImage implements Image {
  static cloneOf (box) {
   
  }

  static encodeImage (
    skImage: SkImage,
    format: ImageByteFormat,
    alphaType: SkAlphaType,
    colorType: SkColorType,
    colorSpace: ColorSpace
  ) {
    let bytes: Uint8List

    if (
      format === ImageByteFormat.rawRgba || 
      format === ImageByteFormat.rawStraightRgba
    ) {
      bytes = skImage.readPixels(0, 0, {
        alphaType,
        colorType,
        colorSpace,
        width: skImage.width(),
        height: skImage.height(),
      }) as Uint8List
    } else {
      bytes = skImage.encodeToBytes() as Uint8List
    }

    return bytes?.buffer.asByteData(0, bytes.length)
  }

  public box: SkiaObjectBox<CkImage, SkImage>
  public videoFrame: VideoFrame | null = null
  
  public _debugStackTrace: StackTrace | null = null
  public get debugStackTrace (): StackTrace {
    return this.debugStackTrace!
  }

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
    this._debugStackTrace = StackTrace.current
    this.box = new SkiaObjectBox<CkImage, SkImage>(this, skImage)
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

  clone (): Image {
    invariant(this.debugCheckIsNotDisposed())
    return CkImage.cloneOf(this.box) as unknown as Image
  }

  isCloneOf (other: Image): boolean {
    invariant(this.debugCheckIsNotDisposed())
    return (other as unknown as CkImage).skImage.isAliasOf(this.skImage)
  }

  debugGetOpenHandleStackTraces (): StackTrace[] | null  {
    return this.box.debugGetStackTraces()
  }

  toByteData (format: ImageByteFormat = ImageByteFormat.rawRgba) {
    invariant(this.debugCheckIsNotDisposed())
    if (this.videoFrame !== null) {
      return readPixelsFromVideoFrame(this.videoFrame!, format)
    } else {
      return this.readPixelsFromSkImage(format)
    }
  }

  readPixelsFromSkImage (format: ImageByteFormat): Promise<ByteData> {
    const alphaType = format === ImageByteFormat.rawStraightRgba ? 
      CanvasKitAPI.CanvasKit.AlphaType.Unpremul : 
      CanvasKitAPI.CanvasKit.AlphaType.Premul

    const data: ByteData = CkImage.encodeImage(
      this.skImage,
      format,
      alphaType,
      CanvasKitAPI.CanvasKit.ColorType.RGBA_8888,
      CanvasKitAPI.CanvasKit.ColorSpace.SRGB,
    );
    if (data === null) {
      new Error('Failed to encode the image into bytes.')
    } else {
      return data
    }
  }

  toString () {
    invariant(this.debugCheckIsNotDisposed())
    return `[${this.width}\u00D7${this.height}]`
  }
}
