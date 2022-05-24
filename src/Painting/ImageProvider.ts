import invariant from 'ts-invariant'
import { Codec, Size } from '@UI'
import { SkiaTextDirection } from '@Skia'
import { ImageErrorListener, Locale, StringBuffer, TargetPlatform } from '@Platform'
import { AssetBundle } from '@Services'
import { ImageStream } from './ImageStream'

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

export type ImageConfigurationInitOptions = {
  bundle?: AssetBundle | null,
  devicePixelRatio?: number | null,
  locale?: Locale | null,
  textDirection?: SkiaTextDirection | null,
  size?: Size | null,
  platform?: TargetPlatform | null,
}

export class ImageConfiguration {
  static Empty = new ImageConfiguration()
  public bundle: AssetBundle | null = null
  public devicePixelRatio: number | null = null
  public locale: Locale | null = null
  public textDirection: SkiaTextDirection | null = null
  public size: Size | null = null
  public platform: TargetPlatform | null = null
  
  constructor (options?: ImageConfigurationInitOptions) {
    this.bundle = options?.bundle ?? null
    this.devicePixelRatio = options?.devicePixelRatio ?? null
    this.locale = options?.locale ?? null
    this.textDirection = options?.textDirection ?? null
    this.size = options?.size ?? null
    this.platform = options?.platform ?? null
  }

  copyWith(
    bundle: AssetBundle | null,
    devicePixelRatio: number | null,
    locale: Locale | null,
    textDirection: SkiaTextDirection | null,
    size: Size | null,
    platform: TargetPlatform | null,
  ): ImageConfiguration  {
    return new ImageConfiguration({
      bundle: bundle ?? this.bundle,
      devicePixelRatio: devicePixelRatio ?? this.devicePixelRatio,
      locale: locale ?? this.locale,
      textDirection: textDirection ?? this.textDirection,
      size: size ?? this.size,
      platform: platform ?? this.platform,
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
      result.write(`locale: ${locale}`)
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
      result.write(`platform: ${this.platform!.name}`)
      hasArguments = true
    }

    result.write(')')

    return result.toString()
  }
}

export abstract class ImageProvider<T> {
  resolve (configuration: ImageConfiguration) {
    invariant(configuration !== null)

    const stream = createStream(configuration)
    // Load the key (potentially asynchronously), set up an error handling zone,
    // and call resolveStreamForKey.
    createErrorHandlerAndKey(
      configuration,
      (T key, ImageErrorListener errorHandler) {
        resolveStreamForKey(configuration, stream, key, errorHandler);
      },
      (T? key, Object exception, StackTrace? stack) async {
        await null; // wait an event turn in case a listener has been added to the image stream.
        InformationCollector? collector;
        assert(() {
          collector = () => <DiagnosticsNode>[
            DiagnosticsProperty<ImageProvider>('Image provider', this),
            DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration),
            DiagnosticsProperty<T>('Image key', key, defaultValue: null),
          ];
          return true;
        }());
        if (stream.completer == null) {
          stream.setCompleter(_ErrorImageCompleter());
        }
        stream.completer!.reportError(
          exception: exception,
          stack: stack,
          context: ErrorDescription('while resolving an image'),
          silent: true, // could be a network error or whatnot
          informationCollector: collector,
        );
      },
    )

    return stream
  }

  createStream (configuration: ImageConfiguration): ImageStream {
    return new ImageStream()
  }

  createErrorHandlerAndKey (
    configuration: ImageConfiguration ,
    successCallback: KeyAndErrorHandlerCallback<T>,
    errorCallback: AsyncKeyErrorHandler<T | null> ,
  ) {
    let obtainedKey: T | null
    let didError = false

    Future<void> handleError(Object exception, StackTrace? stack) async {
      if (didError) {
        return;
      }
      if (!didError) {
        errorCallback(obtainedKey, exception, stack);
      }
      didError = true;
    }

    // If an error is added to a synchronous completer before a listener has been
    // added, it can throw an error both into the zone and up the stack. Thus, it
    // looks like the error has been caught, but it is in fact also bubbling to the
    // zone. Since we cannot prevent all usage of Completer.sync here, or rather
    // that changing them would be too breaking, we instead hook into the same
    // zone mechanism to intercept the uncaught error and deliver it to the
    // image stream's error handler. Note that these errors may be duplicated,
    // hence the need for the `didError` flag.
    final Zone dangerZone = Zone.current.fork(
      specification: ZoneSpecification(
        handleUncaughtError: (Zone zone, ZoneDelegate delegate, Zone parent, Object error, StackTrace stackTrace) {
          handleError(error, stackTrace);
        },
      ),
    );
    dangerZone.runGuarded(() {
      Future<T> key;
      try {
        key = obtainKey(configuration);
      } catch (error, stackTrace) {
        handleError(error, stackTrace);
        return;
      }
      key.then<void>((T key) {
        obtainedKey = key;
        try {
          successCallback(key, handleError);
        } catch (error, stackTrace) {
          handleError(error, stackTrace);
        }
      }).catchError(handleError);
    });
  }

  resolveStreamForKey (
    configuration: ImageConfiguration, 
    stream: ImageStream, 
    key: T, 
    handleError: ImageErrorListener
  ): void  {
    if (stream.completer !== null) {
      final ImageStreamCompleter? completer = PaintingBinding.instance!.imageCache!.putIfAbsent(
        key,
        () => stream.completer!,
        onError: handleError,
      );
      invariant(completer === stream.completer)
      return
    }

    const completer = PaintingBinding.instance!.imageCache!.putIfAbsent(
      key,
      () => load(key, PaintingBinding.instance!.instantiateImageCodec),
      onError: handleError,
    );
    if (completer !== null) {
      stream.setCompleter(completer)
    }
  }
}


