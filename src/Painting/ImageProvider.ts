import invariant from 'ts-invariant'
import { Codec, Size } from '@UI'
import { SkiaTextDirection } from '@Skia'
import { Locale, StringBuffer, TargetPlatform } from '@Platform'
import { AssetBundle } from '@Services'
import { ImageErrorListener, ImageStream } from './ImageStream'
import { PaintingBinding } from './Binding'
import { ImageCacheStatus } from './ImageCache'

export type KeyAndErrorHandlerCallback<T> = { (key: T, handleError: ImageErrorListener): void }
export type AsyncKeyErrorHandler<T> = { (key: T, exception): Promise<void> }
export type DecoderCallback = {
  (
    bytes: Uint8Array, 
    cacheWidth?: number | null,
    cacheHeight?: number | null,
    allowUpscaling?: boolean
  ): Promise<Codec>
}

export type ImageConfigurationInitOptions = {
  bundle?: AssetBundle | null,
  devicePixelRatio?: number | null,
  locale?: Locale | null,
  textDirection?: SkiaTextDirection | null,
  size?: Size | null,
  platform?: TargetPlatform | null,
}

export type ImageConfigurationCopyOptions = ImageConfigurationInitOptions

export class ImageConfiguration {
  static Empty = new ImageConfiguration()
  public bundle: AssetBundle | null = null
  public devicePixelRatio: number | null = null
  public locale: Locale | null = null
  public textDirection: SkiaTextDirection | null = null
  public size: Size | null = null
  public platform: TargetPlatform | null = null
  
  constructor (options: ImageConfigurationInitOptions = {}) {
    options.bundle = options.bundle ?? null
    options.devicePixelRatio = options.devicePixelRatio ?? null
    options.locale = options.locale ?? null
    options.textDirection = options.textDirection ?? null
    options.size = options.size ?? null
    options.platform = options.platform ?? null

    this.bundle = options.bundle
    this.devicePixelRatio = options.devicePixelRatio
    this.locale = options.locale
    this.textDirection = options.textDirection
    this.size = options.size
    this.platform = options.platform
  }

  copyWith (options: ImageConfigurationInitOptions): ImageConfiguration  {
    return new ImageConfiguration({
      bundle: options.bundle ?? this.bundle,
      devicePixelRatio: options.devicePixelRatio ?? this.devicePixelRatio,
      locale: options.locale ?? this.locale,
      textDirection: options.textDirection ?? this.textDirection,
      size: options.size ?? this.size,
      platform: options.platform ?? this.platform,
    })
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
    const result = new StringBuffer()

    result.write('ImageConfiguration(');
    let hasArguments = false
    
    if (this.bundle !== null) {
      result.write(`bundle: ${this.bundle}`)
      hasArguments = true
    }
    
    if (devicePixelRatio !== null) {
      if (hasArguments) {
        result.write(', ')
      }
      result.write(`devicePixelRatio: ${this.devicePixelRatio!.toFixed(1)}`);
      hasArguments = true
    }

    if (this.locale !== null) {
      if (hasArguments) {
        result.write(', ')
      }
      result.write(`locale: ${this.locale}`)
      hasArguments = true
    }
    if (this.textDirection !== null) {
      if (hasArguments) {
        result.write(', ')
      }
      result.write(`textDirection: ${this.textDirection}`)
      hasArguments = true
    }
    if (this.size !== null) {
      if (hasArguments) {
        result.write(', ')
      }
      result.write(`size: ${this.size}`)
      hasArguments = true
    }
    if (this.platform !== null) {
      if (hasArguments) {
        result.write(', ')
      }
      // @TODO
      result.write(`platform: ${this.platform!}`)
      hasArguments = true
    }

    result.write(')')

    return result.toString()
  }
}

export abstract class ImageProvider<T> {
  abstract obtainedKey (configuration: ImageConfiguration): Promise<T>
  abstract load (key: T, decode: DecoderCallback)

  resolve (configuration: ImageConfiguration) {
    invariant(configuration !== null)

    const stream = this.createStream(configuration)

    this.createErrorHandlerAndKey(configuration, (key: T, onError: ImageErrorListener) => {
      this.resolveStreamForKey(configuration, stream, key, onError)
    }, async (key: T | null, exception) => {
         
    })

    return stream
  }

  createStream (configuration: ImageConfiguration): ImageStream {
    return new ImageStream()
  }

  obtainCacheStatus (
    configuration: ImageConfiguration,
    onError: ImageErrorListener,
  ): Promise<ImageCacheStatus | null>  {
    invariant(configuration !== null)
    
    return new Promise((resolve, reject) => {
      this.createErrorHandlerAndKey(
        configuration,
        (key: T) => {
          resolve(PaintingBinding.instance!.imageCache!.statusForKey(key))
        },
        async (key: T | null, exception) => {
          if (onError !== null) {
            onError(exception)
          } else {
            reject(exception)
          }
        },
      )
    })
    
  }

  createErrorHandlerAndKey (
    configuration: ImageConfiguration ,
    success: KeyAndErrorHandlerCallback<T>,
    error: AsyncKeyErrorHandler<T | null> ,
  ) {
    let obtainedKey: T | null
    let didError = false

    const onError = async exception => {
      if (didError) {
        return
      }

      if (!didError) {
        error(obtainedKey, exception)
      }
      didError = true
    }

    try {
      const key = this.obtainedKey(configuration)

      key.then<void>((key: T) => {
        obtainedKey = key
        try {
          success(key, onError)
        } catch (error) {
          onError(error)
        }
      }).catch(onError)
    } catch (error) {
      onError(error)
    }
  }

  resolveStreamForKey (
    configuration: ImageConfiguration, 
    stream: ImageStream, 
    key: T, 
    onError: ImageErrorListener
  ): void  {

    if (stream.completer !== null) {
      const completer = PaintingBinding.instance!.imageCache!.putIfAbsent(key, () => stream.completer!, onError,)
      invariant(completer === stream.completer)
      return
    }

    const completer = PaintingBinding.instance!.imageCache!.putIfAbsent<T>(key, () => {
      return this.load(key, PaintingBinding.instance!.instantiateImageCodec)
    }, onError)
    
    if (completer !== null) {
      stream.setCompleter(completer)
    }
  }
}


export class AssetBundleImageKey {
  public bundle: AssetBundle
  public name: string
  public scale: number

  constructor(
    bundle: AssetBundle,
    name: string,
    scale: number,
  ) {
    invariant(bundle !== null)
    invariant(name !== null)
    invariant(scale !== null)

    this.bundle = bundle
    this.name = name
    this.scale = scale
  }

  isEqual (other: AssetBundleImageKey) {
    if (other === this) {
      return true
    }
    return (
      other instanceof AssetBundleImageKey &&
      other.bundle === this.bundle &&
      other.name === this.name &&
      other.scale === this.scale
    )
  }

  toString () {
    return ''
  }
}
