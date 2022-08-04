/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { instantiateImageCodec } from '@rendering/ImageCodec'
import { invariant } from 'ts-invariant'
import { ImageCache } from './ImageCache'

import type { Codec } from '@basic/Painting'


export class PaintingBinding {
  static instance: PaintingBinding | null = null
  static initInstances () {
    new PaintingBinding()
  }

  public imageCache: ImageCache

  constructor () {
    PaintingBinding.instance = this

    this.imageCache = this.createImageCache()
  }

  createImageCache (): ImageCache {
    return new ImageCache()
  }

  instantiateImageCodec (
    bytes: Uint8Array,
    cacheWidth?: number | null,
    cacheHeight?: number | null,
    allowUpscaling: boolean = false,
  ): Promise<Codec>  {
    invariant(cacheWidth === null || cacheWidth as number > 0)
    invariant(cacheHeight === null || cacheHeight as number > 0)
    invariant(allowUpscaling !== null)

    return Promise.resolve(instantiateImageCodec(
      bytes,
      cacheWidth,
      cacheHeight,
      allowUpscaling,
    ) as unknown as Codec)
  }
}