import invariant from 'ts-invariant'
import { Codec, Size } from '@UI'
import { SkiaTextDirection } from '@Skia'
import { ImageErrorListener, Locale, TargetPlatform } from '@Platform'
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

export class ImageConfiguration {
  static Empty = new ImageConfiguration()
  public bundle: AssetBundle | null = null
  public devicePixelRatio: number | null = null
  public locale: Locale | null = null
  public textDirection: SkiaTextDirection | null = null
  public size: Size | null = null
  public platform: TargetPlatform | null = null
  
  constructor (
    bundle,
    devicePixelRatio,
    locale,
    textDirection,
    size,
    platform,  
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



export abstract class ImageProvider<T> {
  
  resolve (configuration: ImageConfiguration): ImageStream {
    invariant(configuration !== null)
    const stream = this.createStream(configuration)
    
    this.createErrorHandlerAndKey(
      configuration,
      (key: T , errorHandler: ImageErrorListener) => {
        this.resolveStreamForKey(configuration, stream, key, errorHandler);
      },
      async (key: T | null, exception ) => {
        if (stream.completer === null) {
          stream.setCompleter(new ErrorImageCompleter())
        }

        stream.completer!.reportError(
          exception: exception,
          stack: stack,
          context: ErrorDescription('while resolving an image'),
          silent: true, // could be a network error or whatnot
          informationCollector: collector,
        )
      },
    )
    return stream
  }

  createStream (configuration: ImageConfiguration): ImageStream {
    return new ImageStream()
  }

  obtainCacheStatus (
    configuration: ImageConfiguration ,
    handleError: ImageErrorListener | null,
  ): Promise<ImageCacheStatus | null>  {
    invariant(configuration !== null)
    const completer = new Completer<ImageCacheStatus | null>()

    _createErrorHandlerAndKey(
      configuration,
      (T key, ImageErrorListener innerHandleError) {
        completer.complete(PaintingBinding.instance!.imageCache!.statusForKey(key));
      },
      (T? key, Object exception, StackTrace? stack) async {
        if (handleError != null) {
          handleError(exception, stack);
        } else {
          InformationCollector? collector;
          assert(() {
            collector = () => <DiagnosticsNode>[
              DiagnosticsProperty<ImageProvider>('Image provider', this),
              DiagnosticsProperty<ImageConfiguration>('Image configuration', configuration),
              DiagnosticsProperty<T>('Image key', key, defaultValue: null),
            ];
            return true;
          }());
          FlutterError.reportError(FlutterErrorDetails(
            context: ErrorDescription('while checking the cache location of an image'),
            informationCollector: collector,
            exception: exception,
            stack: stack,
          ));
          completer.complete(null);
        }
      },
    );
    return completer.future;
  }

  createErrorHandlerAndKey (
    configuration: ImageConfiguration,
    successCallback: KeyAndErrorHandlerCallback<T>,
    errorCallback: AsyncKeyErrorHandler<T | null> ,
  ) {
    let obtainedKey: T | null
    let  didError = false
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
  ) {
    if (stream.completer !== null) {
      final ImageStreamCompleter? completer = PaintingBinding.instance!.imageCache!.putIfAbsent(
        key,
        () => stream.completer!,
        onError: handleError,
      );
      assert(identical(completer, stream.completer));
      return;
    }
    final ImageStreamCompleter? completer = PaintingBinding.instance!.imageCache!.putIfAbsent(
      key,
      () => load(key, PaintingBinding.instance!.instantiateImageCodec),
      onError: handleError,
    );
    if (completer !== null) {
      stream.setCompleter(completer);
    }
  }

  async evict(
    cache: ImageCache | null, 
    configuration: ImageConfiguration = ImageConfiguration.Empty 
  ): Promise<boolean>  {
    cache ??= imageCache
    final T key = await obtainKey(configuration);
    return cache!.evict(key);
  }

  abstract obtainKey(configuration： ImageConfiguration): Promise<T> 
  abstract load (key: T, decode: DecoderCallback): ImageStreamCompleter 

  toString () {
    return ``
  }
}


class AssetBundleImageKey {
  public bundle: AssetBundle
  public name: String
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
    return (
      other instanceof AssetBundleImageKey &&
      other.bundle === this.bundle &&
      other.name === this.name &&
      other.scale === this.scale
    )
  }

  toString () {
    return ``
  }
}

export abstract class AssetBundleImageProvider extends ImageProvider<AssetBundleImageKey> {
  load (
    key: AssetBundleImageKey, 
    decode: DecoderCallback
  ): ImageStreamCompleter {
   
    return new MultiFrameImageStreamCompleter(
      this.loadAsync(key, decode),
      key.scale,
      key.name,
      collector,
    );
  }

  async loadAsync (
    key: AssetBundleImageKey, 
    decode: DecoderCallback
  ) {
    let data
    
    try {
      data = await key.bundle.load(key.name)
    } on FlutterError {
      PaintingBinding.instance!.imageCache!.evict(key);
      rethrow;
    }
    if (data == null) {
      PaintingBinding.instance!.imageCache!.evict(key);
      throw new Error('Unable to read data')
    }

    return decode(data.buffer.asUint8List());
  }
}


export class ResizeImageKey {
  public providerCacheKey
  public width: number | null
  public height: number | null

  constructor (
    providerCacheKey,
    width: number,
    height: number,
  ) {
    this.providerCacheKey = providerCacheKey
    this.width = width
    this.height = height
  }

  isEqual (other: ResizeImageKey) {
    
    return (
      other instanceof ResizeImageKey &&
      other.providerCacheKey === this.providerCacheKey &&
      other.width === this.width &&
      other.height === this.height
    )
  }
}

export class ResizeImage extends ImageProvider<ResizeImageKey> {
  static resizeIfNeeded(
    cacheWidth: number | null, 
    cacheHeight: number | null, 
    provider: ImageProvider<Object> 
  ): ImageProvider<Object>  {
    if (cacheWidth !== null || cacheHeight !== null) {
      return new ResizeImage(
        provider, 
        cacheWidth, 
        cacheHeight
      )
    }

    return provider
  }

  public imageProvider: ImageProvider
  public width: number
  public height: inumber
  public allowUpscaling: boolean

  constructor (
    imageProvider: ImageProvider,
    width: number,
    height: number,
    allowUpscaling: boolean
  ) {
    this.imageProvider
    this.width
    this.height
    this.allowUpscaling
  }
  
  load (
    key: ResizeImageKey, 
    decode: DecoderCallback
  ): ImageStreamCompleter {
    Future<ui.Codec> decodeResize(Uint8List bytes, {int? cacheWidth, int? cacheHeight, bool? allowUpscaling}) {
      assert(
        cacheWidth == null && cacheHeight == null && allowUpscaling == null,
        'ResizeImage cannot be composed with another ImageProvider that applies '
        'cacheWidth, cacheHeight, or allowUpscaling.',
      );
      return decode(bytes, cacheWidth: width, cacheHeight: height, allowUpscaling: this.allowUpscaling);
    }
    final ImageStreamCompleter completer = imageProvider.load(key._providerCacheKey, decodeResize);
    if (!kReleaseMode) {
      completer.debugLabel = '${completer.debugLabel} - Resized(${key._width}×${key._height})';
    }
    return completer;
  }

  obtainKey (
    configuration: ImageConfiguration
  ): Promise<ResizeImageKey>  {
    Completer<ResizeImageKey>? completer
    // If the imageProvider.obtainKey future is synchronous, then we will be able to fill in result with
    // a value before completer is initialized below.
    SynchronousFuture<ResizeImageKey>? result;
    imageProvider.obtainKey(configuration).then((Object key) {
      if (completer == null) {
        // This future has completed synchronously (completer was never assigned),
        // so we can directly create the synchronous result to return.
        result = SynchronousFuture<ResizeImageKey>(ResizeImageKey._(key, width, height));
      } else {
        // This future did not synchronously complete.
        completer.complete(ResizeImageKey._(key, width, height));
      }
    })

    if (result !== null) {
      return result!;
    }
    
    completer = Completer<ResizeImageKey>();
    return completer.future
  }
}

export abstract class NetworkImage extends ImageProvider<NetworkImage> {
  url: string
  scale: nmber
  headers: Map<string, string> | null

  constructor (
    url: string,
    scale: number,
    headers: Map<string, string>
  ) {
    super()

    this.url = url
    this.scale = scalle
    this.headers = headers
  }

  abstract load (key: NetworkImage, decode: DecoderCallback): ImageStreamCompleter
}


export class FileImage extends ImageProvider<FileImage> {
  public file: File
  public scale: double

  constructor (
    file: File,
    scale: number = 1.0
  ) {
    invariant(file !== null)
    invariant(scale !== null)
    this.file = file
    this.scale = scale
  }
  
  obtainKey (configuration: ImageConfiguration): Promise<FileImage>  {
    return SynchronousFuture<FileImage>(this)
  }

  @override
  load (
    key: FileImage, 
    decode: DecoderCallback
  ): ImageStreamCompleter {
    return new MultiFrameImageStreamCompleter(
      this.loadAsync(key, decode),
      key.scale,
      key.file.path,
      () => <DiagnosticsNode>[
        ErrorDescription('Path: ${file.path}'),
      ],
    );
  }

  async loadAsync (
    key: FileImage, 
    decode: DecoderCallback
  ) {
    invariant(key === this)
    const bytes: Uint8Array = await file.readAsBytes()

    if (bytes.lengthInBytes == 0) {
      PaintingBinding.instance!.imageCache!.evict(key)
      throw new Error(`${this.file} is empty and cannot be loaded as an image.`)
    }

    return decode(bytes)
  }

  isEqual (other: FileImage) {
    return (
      other instanceof FileImage &&
      other.file.path === file.path &&
      other.scale === scale
    )
  }

  toString () {
    return ``
  }
}

/// Decodes the given [Uint8List] buffer as an image, associating it with the
/// given scale.
///
/// The provided [bytes] buffer should not be changed after it is provided
/// to a [MemoryImage]. To provide an [ImageStream] that represents an image
/// that changes over time, consider creating a new subclass of [ImageProvider]
/// whose [load] method returns a subclass of [ImageStreamCompleter] that can
/// handle providing multiple images.
///
/// See also:
///
///  * [Image.memory] for a shorthand of an [Image] widget backed by [MemoryImage].
class MemoryImage extends ImageProvider<MemoryImage> {
  public bytes: Uint8Array
  public scale: number
  
  constructor (
    bytes: Uint8Array,
    scale: number = 1.0
  ) {
    this.bytes = bytes
    this.scale = scale
  }

  obtainKey (configuration: ImageConfiguration): Promise<MemoryImage> {
    return SynchronousFuture<MemoryImage>(this)
  }

  load (
    key: MemoryImage, 
    decode: DecoderCallback
  ): ImageStreamCompleter {
    return MultiFrameImageStreamCompleter(
      _loadAsync(key, decode),
      key.scale,
      'MemoryImage(${describeIdentity(key.bytes)})',
    );
  }

  loadAsync (
    key: MemoryImage, 
    decode: DecoderCallback
  ) {
    invariant(key === this)
    return decode(bytes)
  }

  isEqual (other) {
    if (other === this) {
      return true
    }

    return (
      other instanceof MemoryImage &&
      other.bytes == bytes &&
      other.scale == scale
    )
  }

  toString () {
    return ``
  }
}

export class ExactAssetImage extends AssetBundleImageProvider {
  public assetName
  public scale
  public bundle
  public package

  get keyName () {
    return this.package == null ? assetName : `packages/${this.package}/${this.assetName}`
  } 

  constructor (
    assetName, 
    scale = 1.0,
    bundle,
    package,
  ) {
    this.assetName = assetName 
    this.scale = scale
    this.bundle = bundle
    this.package = package
  }

  obtainKey (configuration: ImageConfiguration): Promise<AssetBundleImageKey> {
    return SynchronousFuture<AssetBundleImageKey>(AssetBundleImageKey(
      bundle ?? configuration.bundle ?? rootBundle,
      keyName,
      scale,
    ))
  }

  isEqual (other) {
    if (this === other) {
      return false
    }
    return (
      other instanceof ExactAssetImage &&
      other.keyName == keyName &&
      other.scale == scale &&
      other.bundle == bundle
    )
  }

  toString () {}
}

export class ErrorImageCompleter extends ImageStreamCompleter { }

export class NetworkImageLoadException implements Exception {
  public statusCode: number
  public message: string
  public uri: URI

  constructor (
    statusCode: number,
    uri: URI
  ) {
    invariant(uri !== null)
    invariant(statusCode !== null)
    this.statusCode = statusCode
    this.uri = uri
    this.message = `HTTP request failed, statusCode: ${this.statusCode}, ${this.uri}`
  }

  toString () {
    return this.message
  }
}
