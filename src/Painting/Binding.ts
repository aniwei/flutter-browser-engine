import invariant from 'ts-invariant'
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
}