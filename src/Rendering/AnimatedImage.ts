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

console.log(ManagedSkiaObject)
debugger
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
    return new AnimatedImage({
      bytes,
      src
    })
  }

  public frameCount: number = 0
  public repetitionCountt: number = -1
  public currentFrameIndex: number = 0
  
  public src: string
  public bytes: Uint8Array
  public disposed = false

  /**
   * @description: 
   * @param {AnimatedImageInitOptions} options
   * @return {AnimatedImage}
   */  
  constructor (options: AnimatedImageInitOptions) {
    const skia = Skia.binding.MakeAnimatedImageFromEncoded(options.bytes)

    if (skia === null) {
      throw new ImageCodecError(`Failed to decode image data.\nImage source: ${options.src},`)
    }

    super(skia)

    this.frameCount = skia.getFrameCount()
    this.repetitionCount = skia.getRepetitionCount()

    for (let i = 0; i < this.currentFrameIndex; i++) {
      skia.decodeNextFrame()
    }

    this.bytes = options.bytes
    this.src = options.src
  }
  repetitionCount: number

  /**
   * @description: 
   * @return {Promise<FrameInfo>}
   */
  async getNextFrame () {
    const skia = this.skia!

    const currentFrame: FrameInfo = {
      duration: skia.currentFrameDuration(),
      image: new Image(skia.makeImageAtCurrentFrame()!)
    }
    
    skia.decodeNextFrame()
    this.currentFrameIndex = (this.currentFrameIndex + 1) % this.frameCount

    return currentFrame
  }

  /**
   * @description: 
   * @return {*}
   */  
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

  /**
   * @description: 
   * @return {*}
   */  
  dispose () {
    invariant(!this.dispose, `Cannot dispose a codec that has already been disposed.`)
    this.disposed = true

    this.delete()
  }
}