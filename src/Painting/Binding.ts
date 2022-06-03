import { invariant } from 'ts-invariant'
import { Codec, instantiateImageCodec } from '@UI'
import { ImageCache } from './ImageCache'


export class PaintingBinding {
  static instance: PaintingBinding | null = null

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
    ) as Codec)
  }
}