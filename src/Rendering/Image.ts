import { Skia } from '@skia/binding'
import { IImage } from '@skia'
import { SkiaObjectBox } from '@skia/SkiaObjectBox'

import { ImageByteFormat, VideoFrame } from '@basic/Painting'


export class Image {
 
  /**
   * @description: 
   * @param {SkiaObjectBox<Image, IImage>} box
   * @param {*} IImage
   * @return {Image}
   */  
  static cloneOf (box: SkiaObjectBox<Image, IImage>): Image {
    const image = new Image(box)
    box.ref(image)
    return image
  }

  public get skia () {
    return this.box.skia
  }

  public get width (): number {
    return this.skia!.width()
  }

  public get height (): number {
    return this.skia!.height()
  }

  public box: SkiaObjectBox<Image, IImage>
  public disposed: boolean
  public videoFrame: VideoFrame | null = null
  
  public get skiaImage () {
    return this.box.skia
  }

  /**
   * @description: 
   * @param {SkiaObjectBox<Image, IImage>} box
   * @return {Image}
   */  
  constructor (
    skia: IImage | SkiaObjectBox<Image, IImage>, 
    frame?: VideoFrame
  ) {
    if (skia instanceof SkiaObjectBox) {
      this.box = skia as SkiaObjectBox<Image, IImage >
    } else {
      this.box = new SkiaObjectBox(skia)
    }

    this.disposed = false
    this.videoFrame = frame ?? null
  }
  
  /**
   * @description: 
   * @param {ImageByteFormat} format
   * @return {*}
   */  
  async toByteData (format: ImageByteFormat = ImageByteFormat.RawRGBA) {
    if (this.videoFrame !== null) {
      // return this.readPixelsFromVideoFrame()
    } else {
      return this.readPixelsFromSkiaImage(format)
    }
  }

  /**
   * @description: 
   * @param {ImageByteFormat} format
   * @return {ArrayBuffer | Buffer}
   */
  readPixelsFromSkiaImage (format: ImageByteFormat) {
    const alphaType = ImageByteFormat.RawStraightRGBA 
      ? Skia.binding.AlphaType.Unpremul 
      : Skia.binding.AlphaType.Premul

    let bytes: Uint8Array
    if (
      format === ImageByteFormat.RawRGBA ||
      format === ImageByteFormat.RawStraightRGBA
    ) {
      bytes = this.skia?.readPixels(0, 0, {
        width: this.width,
        height: this.height,
        alphaType,
        colorType: Skia.binding.ColorType.RGBA_8888,
        colorSpace: Skia.binding.ColorSpace.SRGB
      }) as Uint8Array
    } else {
      bytes = this.skia?.encodeToBytes() as Uint8Array
    }

    return bytes.buffer
  }

  /**
   * @description: 
   * @return {void}
   */  
  dispose () {
    this.disposed = true
    this.box.unref(this)
  }

  /**
   * @description: 
   * @return {Image}
   */  
  clone (): Image  {
    return Image.cloneOf(this.box)
  }

  /**
   * @description: 
   * @param {Image} other
   * @return {boolean}
   */  
  isCloneOf (other: Image) {
    return (
      other instanceof Image && 
      other.skia!.isAliasOf(this.skia)
    )
  }

  /**
   * @description: 
   * @return {string}
   */  
  toString (): string {
    return `[${this.width}, ${this.height}]`
  }
}