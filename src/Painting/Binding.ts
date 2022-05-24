import invariant from 'ts-invariant'


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
    cacheWidth: number | null,
    cacheHeight: number | null,
    allowUpscaling: boolean = false,
  ) {
    invariant(cacheWidth === null || cacheWidth > 0)
    invariant(cacheHeight === null || cacheHeight > 0)
    invariant(allowUpscaling !== null)

    return ui.instantiateImageCodec(
      bytes,
      targetWidth: cacheWidth,
      targetHeight: cacheHeight,
      allowUpscaling: allowUpscaling,
    )
  }

  evict (asset: string) {
    super.evict(asset)
    this.imageCache!.clear()
    this.imageCache!.clearLiveImages()
  }

  handleMemoryPressure () {
    super.handleMemoryPressure()
    this.imageCache?.clear();
  }
}