import { invariant } from 'ts-invariant'
import { Skia } from '@skia/binding'
import { IAnimatedImage } from '@skia'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { ImageCodecError } from '@internal/ImageCodecError'
import { Image } from './Image'

import type { Codec, FrameInfo } from '@basic/Painting'


export type AnimatedImageInitOptions = {
  bytes: Uint8Array,
  src: string
}

export class AnimatedImage extends ManagedSkiaObject<IAnimatedImage> implements Codec {
  /**
   * @description: 
   * @param {Uint8Array} bytes
   * @param {string} src
   * @return {AnimatedImage}
   */
  static decodeFromBytes (
    bytes: Uint8Array, 
    src: string
  ) {
    return AnimatedImage.malloc({
      bytes,
      src
    })
  }

  static malloc(options: AnimatedImageInitOptions): AnimatedImage {
    const skia = Skia.binding.MakeAnimatedImageFromEncoded(options.bytes)

    if (skia === null) {
      throw new ImageCodecError(`Failed to decode image data.\nImage source: ${options.src},`)
    }

    const image = new AnimatedImage(
      skia,
      options.bytes,
      options.src
    )

    image.frameCount = skia.getFrameCount()
    image.repetitionCount = skia.getRepetitionCount()

    for (let i = 0; i < image.currentFrameIndex; i++) {
      skia.decodeNextFrame()
    }

    return image
  }

  public frameCount = 0
  public repetitionCount = -1
  public currentFrameIndex = 0
  
  public src: string
  public bytes: Uint8Array
  public disposed = false

  constructor (
    skia: IAnimatedImage,
    bytes: Uint8Array,
    src: string
  ) {
    super(skia)

    this.bytes = bytes
    this.src = src
  }

  async getNextFrame () {
    const skia = this.skia!

    const currentFrame: FrameInfo = {
      duration: skia.currentFrameDuration(),
      image: new Image(skia!.makeImageAtCurrentFrame()!)
    }
    
    skia.decodeNextFrame()
    this.currentFrameIndex = (this.currentFrameIndex + 1) % this.frameCount

    return currentFrame
  }

  resurrect (): IAnimatedImage {
    const image = Skia.binding.MakeAnimatedImageFromEncoded(this.bytes)

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