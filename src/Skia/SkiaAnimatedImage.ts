import invariant from 'ts-invariant'
import { Image } from '@UI'
import { Skia } from './Skia'
import { ManagedSkiaObject } from './ManagedSkiaObject'
import { SkiaAnimatedImage } from './Skia'

export type SkiaAnimatedImageDecoderDecodeOptions = {
  bytes: Uint8Array,
  src: string
} 

export class AnimatedImageFrameInfo {
  public duration
  public image: Image

  constructor (duration, image) {
    this.duration = duration
    this.image = image
  }
}
 
export class SkiaAnimatedImageDecoder extends ManagedSkiaObject<SkiaAnimatedImage> {
  static decodeFromBytes (
    bytes: Uint8Array, 
    src: string
  ) {
    const skia = Skia.MakeAnimatedImageFromEncoded(bytes)

    if (skia === null) {
      throw new Error(`Failed to decode image data.\nImage source: ${src}`)
    }

    return new SkiaAnimatedImageDecoder(
      skia,
      bytes,
      src
    )
  }

  public frameCount = 0
  public repetitionCount = -1
  public currentFrameIndex = 0
  
  public bytes: Uint8Array
  public src: string
  public disposed = false

  constructor (
    skia: SkiaAnimatedImage,
    bytes: Uint8Array,
    src: string
  ) {
    super(skia)

    this.bytes = bytes
    this.src = src
  }

  async getNextFrame () {
    const skia = this.skia

    const currentFrame = new AnimatedImageFrameInfo(
      skia.currentFrameDuration(),
      new Image(skia.makeImageAtCurrentFrame()!)
    )

    skia.decodeNextFrame()
    this.currentFrameIndex = (this.currentFrameIndex + 1) % this.frameCount

    return currentFrame
  }

  resurrect (): SkiaAnimatedImage {
    const image = Skia.MakeAnimatedImageFromEncoded(this.bytes)

    if (image === null) {
      throw new Error(`Failed to decode image data.\nImage source: ${this.src}`)
    }

    this.frameCount = image.getFrameCount()
    this.repetitionCount = image.getRepetitionCount()

    for (let i = 0; i < this.currentFrameIndex; i++) {
      image.decodeNextFrame()
    }

    return image
  }

  dispose () {
    invariant(!this.dispose, `Cannot dispose a codec that has already been disposed.`)
    this.disposed = true

    this.delete()
  }
}