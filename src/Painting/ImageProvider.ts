import invariant from 'ts-invariant'
import { Codec, Size } from '@UI'
import { SkiaTextDirection } from '@Skia'
import { ImageErrorListener, Locale, TargetPlatform } from '@Platform'
import { AssetBundle } from '@Services'

type KeyAndErrorHandlerCallback<T> = { (key: T, handleError: ImageErrorListener): void }
type AsyncKeyErrorHandler<T> = { (key: T, exception): Promise<void> }
type DecoderCallback = {
  (
    bytes: Uint8Array, 
    cacheWidth: number | null,
    cacheHeight: number | null,
    allowUpscaling: boolean
  ): Promise<Codec>
}

export class ImageConfiguration {
  static Empty = new ImageConfiguration(
    null,
    null,
    null,
    null,
    null,
    null,
  )
  public bundle: AssetBundle | null = null
  public devicePixelRatio: number | null = null
  public locale: Locale | null = null
  public textDirection: SkiaTextDirection | null = null
  public size: Size | null = null
  public platform: TargetPlatform | null = null
  
  constructor (
    bundle: AssetBundle | null,
    devicePixelRatio: number | null,
    locale: Locale | null,
    textDirection: SkiaTextDirection | null,
    size: Size | null,
    platform: TargetPlatform | null,  
  ) {
    this.bundle = bundle
    this.devicePixelRatio = devicePixelRatio
    this.locale = locale
    this.textDirection = textDirection
    this.size = size
    this.platform = platform
  }

  copyWith(
    bundle: AssetBundle | null,
    devicePixelRatio: number | null,
    locale: Locale | null,
    textDirection: SkiaTextDirection | null,
    size: Size | null,
    platform: TargetPlatform | null,
  ): ImageConfiguration  {
    return new ImageConfiguration(
      bundle ?? this.bundle,
      devicePixelRatio ?? this.devicePixelRatio,
      locale ?? this.locale,
      textDirection ?? this.textDirection,
      size ?? this.size,
      platform ?? this.platform,
    );
  }

  isEqual (other) {
    if (this === other) {
      return true
    }
    return (
      other instanceof ImageConfiguration &&
      other.bundle == this.bundle &&
      other.devicePixelRatio == this.devicePixelRatio &&
      other.locale == this.locale &&
      other.textDirection == this.textDirection &&
      other.size == this.size &&
      other.platform == this.platform
    )
  }
  
  toString () {
    
  }
}


