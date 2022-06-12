import invariant from 'ts-invariant'
import { SkiaObjectBox, SkiaImage, Skia } from '@skia'
import { ImageByteFormat } from './Painting'

export interface IImage {
  width: number
  height: number
  toByteData (format: ImageByteFormat): Promise<any>
  dispose ()
   
  clone (): Image
  isCloneOf (other: Image ): boolean
}

export type VideoFrame = {
  format: string | null
  duration: number | null
  codedWidth: number
  codedHeight: number
  displayWidth: number
  displayHeight: number
  allocationSize (): number
  copyTo (destination: Uint8Array): Promise<VideoFrame>
  close (): void
}

export class Image implements IImage {
  static malloc (skia: SkiaImage, frame?: VideoFrame) {
    const box = new SkiaObjectBox<Image, SkiaImage>(skia)
    const image = new Image(box, frame)
    box.ref(image)

    return image
  }

  static cloneOf (box: SkiaObjectBox<Image, SkiaImage>) {
    const image = new Image(box)
    box.ref(image)
    return image
  }

  public get skia () {
    return this.box.skia
  }

  public get width (): number {
    invariant(!this.debugCheckIsDisposed())
    return this.skia!.width()
  }

  public get height (): number {
    invariant(!this.debugCheckIsDisposed())
    return this.skia!.height()
  }

  public box: SkiaObjectBox<Image, SkiaImage>
  public disposed: boolean
  public videoFrame: VideoFrame | null = null
  public get skiaImage () {
    return this.box.skia
  }

  constructor (box: SkiaObjectBox<Image, SkiaImage>, frame?) {
    this.box = box
    this.disposed = false
    this.videoFrame = frame
  }

  debugCheckIsDisposed () {
    invariant(!this.disposed, `This image has been disposed.`)
    return false
  }
  
  async toByteData (format: ImageByteFormat = ImageByteFormat.RawRGBA) {
    invariant(!this.debugCheckIsDisposed())

    if (this.videoFrame !== null) {
      // return this.readPixelsFromVideoFrame()
    } else {
      return this.readPixelsFromSkiaImage(format)
    }
  }

  readPixelsFromSkiaImage (format: ImageByteFormat) {
    const alphaType = ImageByteFormat.RawStraightRGBA ? 
      Skia.AlphaType.Unpremul : 
      Skia.AlphaType.Premul

    let bytes: Uint8Array

    if (
      format === ImageByteFormat.RawRGBA ||
      format === ImageByteFormat.RawStraightRGBA
    ) {
      bytes = this.skiaImage?.readPixels(0, 0, {
        width: this.width,
        height: this.height,
        alphaType,
        colorType: Skia.ColorType.RGBA_8888,
        colorSpace: Skia.ColorSpace.SRGB
      }) as Uint8Array
    } else {
      bytes = this.skiaImage?.encodeToBytes() as Uint8Array
    }

    return bytes.buffer
  }

  dispose () {
    this.disposed = true
    this.box.unref(this)
  }

  clone (): Image  {
    invariant(!this.debugCheckIsDisposed())
    return Image.cloneOf(this.box)
  }

  isCloneOf (other: Image) {
    invariant(!this.debugCheckIsDisposed())
    return (
      other instanceof Image && 
      other.skia!.isAliasOf(this.skia)
    )
  }

  toString (): string {
    return `[${this.width}, ${this.height}]`
  }
}