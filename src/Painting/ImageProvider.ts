import { Size, TextDirection } from '@UI';
import invariant from 'ts-invariant';

typedef _KeyAndErrorHandlerCallback<T> = void Function(T key, ImageErrorListener handleError);

/// Signature used for error handling by [_createErrorHandlerAndKey].
typedef _AsyncKeyErrorHandler<T> = Future<void> Function(T key, Object exception, StackTrace? stack);


export class ImageConfiguration {
  static Empty = new ImageConfiguration()
  public bundle: AssetBundle | null = null
  public devicePixelRatio: double | null = null
  public locale: Locale | null = null
  public textDirection: TextDirection | null = null
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
    textDirection: TextDirection | null,
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


typedef DecoderCallback = Future<ui.Codec> Function(Uint8List bytes, {int? cacheWidth, int? cacheHeight, bool allowUpscaling});


abstract class ImageProvider<T> {
  
  resolve (configuration: ImageConfiguration): ImageStream {
    invariant(configuration !== null)
    final ImageStream stream = createStream(configuration)
    
    _createErrorHandlerAndKey(
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
          stream.setCompleter(ErrorImageCompleter());
        }
        stream.completer!.reportError(
          exception: exception,
          stack: stack,
          context: ErrorDescription('while resolving an image'),
          silent: true, // could be a network error or whatnot
          informationCollector: collector,
        );
      },
    );
    return stream;
  }

  /// Called by [resolve] to create the [ImageStream] it returns.
  ///
  /// Subclasses should override this instead of [resolve] if they need to
  /// return some subclass of [ImageStream]. The stream created here will be
  /// passed to [resolveStreamForKey].
  @protected
  ImageStream createStream(ImageConfiguration configuration) {
    return ImageStream();
  }

  /// Returns the cache location for the key that this [ImageProvider] creates.
  ///
  /// The location may be [ImageCacheStatus.untracked], indicating that this
  /// image provider's key is not available in the [ImageCache].
  ///
  /// The `cache` and `configuration` parameters must not be null. If the
  /// `handleError` parameter is null, errors will be reported to
  /// [FlutterError.onError], and the method will return null.
  ///
  /// A completed return value of null indicates that an error has occurred.
  Future<ImageCacheStatus?> obtainCacheStatus({
    required ImageConfiguration configuration,
    ImageErrorListener? handleError,
  }) {
    assert(configuration != null);
    final Completer<ImageCacheStatus?> completer = Completer<ImageCacheStatus?>();
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

  /// This method is used by both [resolve] and [obtainCacheStatus] to ensure
  /// that errors thrown during key creation are handled whether synchronous or
  /// asynchronous.
  void _createErrorHandlerAndKey(
    ImageConfiguration configuration,
    _KeyAndErrorHandlerCallback<T> successCallback,
    _AsyncKeyErrorHandler<T?> errorCallback,
  ) {
    T? obtainedKey;
    bool didError = false;
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

  /// Called by [resolve] with the key returned by [obtainKey].
  ///
  /// Subclasses should override this method rather than calling [obtainKey] if
  /// they need to use a key directly. The [resolve] method installs appropriate
  /// error handling guards so that errors will bubble up to the right places in
  /// the framework, and passes those guards along to this method via the
  /// [handleError] parameter.
  ///
  /// It is safe for the implementation of this method to call [handleError]
  /// multiple times if multiple errors occur, or if an error is thrown both
  /// synchronously into the current part of the stack and thrown into the
  /// enclosing [Zone].
  ///
  /// The default implementation uses the key to interact with the [ImageCache],
  /// calling [ImageCache.putIfAbsent] and notifying listeners of the [stream].
  /// Implementers that do not call super are expected to correctly use the
  /// [ImageCache].
  @protected
  void resolveStreamForKey(ImageConfiguration configuration, ImageStream stream, T key, ImageErrorListener handleError) {
    // This is an unusual edge case where someone has told us that they found
    // the image we want before getting to this method. We should avoid calling
    // load again, but still update the image cache with LRU information.
    if (stream.completer != null) {
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
    if (completer != null) {
      stream.setCompleter(completer);
    }
  }

  /// Evicts an entry from the image cache.
  ///
  /// Returns a [Future] which indicates whether the value was successfully
  /// removed.
  ///
  /// The [ImageProvider] used does not need to be the same instance that was
  /// passed to an [Image] widget, but it does need to create a key which is
  /// equal to one.
  ///
  /// The [cache] is optional and defaults to the global image cache.
  ///
  /// The [configuration] is optional and defaults to
  /// [ImageConfiguration.empty].
  ///
  /// {@tool snippet}
  ///
  /// The following sample code shows how an image loaded using the [Image]
  /// widget can be evicted using a [NetworkImage] with a matching URL.
  ///
  /// ```dart
  /// class MyWidget extends StatelessWidget {
  ///   const MyWidget({
  ///     Key? key,
  ///     this.url = ' ... ',
  ///   }) : super(key: key);
  ///
  ///   final String url;
  ///
  ///   @override
  ///   Widget build(BuildContext context) {
  ///     return Image.network(url);
  ///   }
  ///
  ///   void evictImage() {
  ///     final NetworkImage provider = NetworkImage(url);
  ///     provider.evict().then<void>((bool success) {
  ///       if (success) {
  ///         debugPrint('removed image!');
  ///       }
  ///     });
  ///   }
  /// }
  /// ```
  /// {@end-tool}
  Future<bool> evict({ ImageCache? cache, ImageConfiguration configuration = ImageConfiguration.empty }) async {
    cache ??= imageCache;
    final T key = await obtainKey(configuration);
    return cache!.evict(key);
  }

  /// Converts an ImageProvider's settings plus an ImageConfiguration to a key
  /// that describes the precise image to load.
  ///
  /// The type of the key is determined by the subclass. It is a value that
  /// unambiguously identifies the image (_including its scale_) that the [load]
  /// method will fetch. Different [ImageProvider]s given the same constructor
  /// arguments and [ImageConfiguration] objects should return keys that are
  /// '==' to each other (possibly by using a class for the key that itself
  /// implements [==]).
  Future<T> obtainKey(ImageConfiguration configuration);

  /// Converts a key into an [ImageStreamCompleter], and begins fetching the
  /// image.
  ///
  /// The [decode] callback provides the logic to obtain the codec for the
  /// image.
  ///
  /// See also:
  ///
  ///  * [ResizeImage], for modifying the key to account for cache dimensions.
  @protected
  ImageStreamCompleter load(T key, DecoderCallback decode);

  @override
  String toString() => '${objectRuntimeType(this, 'ImageConfiguration')}()';
}

/// Key for the image obtained by an [AssetImage] or [ExactAssetImage].
///
/// This is used to identify the precise resource in the [imageCache].
@immutable
class AssetBundleImageKey {
  /// Creates the key for an [AssetImage] or [AssetBundleImageProvider].
  ///
  /// The arguments must not be null.
  const AssetBundleImageKey({
    required this.bundle,
    required this.name,
    required this.scale,
  }) : assert(bundle != null),
       assert(name != null),
       assert(scale != null);

  /// The bundle from which the image will be obtained.
  ///
  /// The image is obtained by calling [AssetBundle.load] on the given [bundle]
  /// using the key given by [name].
  final AssetBundle bundle;

  /// The key to use to obtain the resource from the [bundle]. This is the
  /// argument passed to [AssetBundle.load].
  final String name;

  /// The scale to place in the [ImageInfo] object of the image.
  final double scale;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType)
      return false;
    return other is AssetBundleImageKey
        && other.bundle == bundle
        && other.name == name
        && other.scale == scale;
  }

  @override
  int get hashCode => hashValues(bundle, name, scale);

  @override
  String toString() => '${objectRuntimeType(this, 'AssetBundleImageKey')}(bundle: $bundle, name: "$name", scale: $scale)';
}

/// A subclass of [ImageProvider] that knows about [AssetBundle]s.
///
/// This factors out the common logic of [AssetBundle]-based [ImageProvider]
/// classes, simplifying what subclasses must implement to just [obtainKey].
abstract class AssetBundleImageProvider extends ImageProvider<AssetBundleImageKey> {
  /// Abstract const constructor. This constructor enables subclasses to provide
  /// const constructors so that they can be used in const expressions.
  const AssetBundleImageProvider();

  /// Converts a key into an [ImageStreamCompleter], and begins fetching the
  /// image.
  @override
  ImageStreamCompleter load(AssetBundleImageKey key, DecoderCallback decode) {
    InformationCollector? collector;
    assert(() {
      collector = () => <DiagnosticsNode>[
        DiagnosticsProperty<ImageProvider>('Image provider', this),
        DiagnosticsProperty<AssetBundleImageKey>('Image key', key),
      ];
      return true;
    }());
    return MultiFrameImageStreamCompleter(
      codec: _loadAsync(key, decode),
      scale: key.scale,
      debugLabel: key.name,
      informationCollector: collector,
    );
  }

  /// Fetches the image from the asset bundle, decodes it, and returns a
  /// corresponding [ImageInfo] object.
  ///
  /// This function is used by [load].
  @protected
  Future<ui.Codec> _loadAsync(AssetBundleImageKey key, DecoderCallback decode) async {
    ByteData? data;
    // Hot reload/restart could change whether an asset bundle or key in a
    // bundle are available, or if it is a network backed bundle.
    try {
      data = await key.bundle.load(key.name);
    } on FlutterError {
      PaintingBinding.instance!.imageCache!.evict(key);
      rethrow;
    }
    if (data == null) {
      PaintingBinding.instance!.imageCache!.evict(key);
      throw StateError('Unable to read data');
    }
    return decode(data.buffer.asUint8List());
  }
}

/// Key used internally by [ResizeImage].
///
/// This is used to identify the precise resource in the [imageCache].
@immutable
class ResizeImageKey {
  // Private constructor so nobody from the outside can poison the image cache
  // with this key. It's only accessible to [ResizeImage] internally.
  const ResizeImageKey._(this._providerCacheKey, this._width, this._height);

  final Object _providerCacheKey;
  final int? _width;
  final int? _height;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType)
      return false;
    return other is ResizeImageKey
        && other._providerCacheKey == _providerCacheKey
        && other._width == _width
        && other._height == _height;
  }

  @override
  int get hashCode => hashValues(_providerCacheKey, _width, _height);
}

/// Instructs Flutter to decode the image at the specified dimensions
/// instead of at its native size.
///
/// This allows finer control of the size of the image in [ImageCache] and is
/// generally used to reduce the memory footprint of [ImageCache].
///
/// The decoded image may still be displayed at sizes other than the
/// cached size provided here.
export class ResizeImage extends ImageProvider<ResizeImageKey> {
  static resizeIfNeeded(
    cacheWidth: number | null, 
    cacheHeight: number | null, 
    provider: ImageProvider<Object> 
  ): ImageProvider<Object>  {
    if (cacheWidth != null || cacheHeight != null) {
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
    imageProvider
    width
    height
    allowUpscaling
  ) {
    this.imageProvider
    this.width
    this.height
    this.allowUpscaling
  }
  
  load(
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

  obtainKey (configuration: ImageConfiguration): Promise<ResizeImageKey>  {
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
    });
    if (result != null) {
      return result!;
    }
    // If the code reaches here, it means the imageProvider.obtainKey was not
    // completed sync, so we initialize the completer for completion later.
    completer = Completer<ResizeImageKey>();
    return completer.future;
  }
}

abstract class NetworkImage extends ImageProvider<NetworkImage> {
  const factory NetworkImage(String url, { double scale, Map<String, String>? headers }) = network_image.NetworkImage;

  abstract url: string
  abstract scale: nmber
  abstract headers: Map<string, string> | null
  abstract load (key: NetworkImage, decode: DecoderCallback): ImageStreamCompleter
}


class FileImage extends ImageProvider<FileImage> {
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
  ImageStreamCompleter load(FileImage key, DecoderCallback decode) {
    return MultiFrameImageStreamCompleter(
      codec: _loadAsync(key, decode),
      scale: key.scale,
      debugLabel: key.file.path,
      informationCollector: () => <DiagnosticsNode>[
        ErrorDescription('Path: ${file.path}'),
      ],
    );
  }

  Future<ui.Codec> _loadAsync(FileImage key, DecoderCallback decode) async {
    assert(key == this);

    final Uint8List bytes = await file.readAsBytes();

    if (bytes.lengthInBytes == 0) {
      // The file may become available later.
      PaintingBinding.instance!.imageCache!.evict(key);
      throw StateError('$file is empty and cannot be loaded as an image.');
    }

    return decode(bytes);
  }

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType)
      return false;
    return other is FileImage
        && other.file.path == file.path
        && other.scale == scale;
  }

  @override
  int get hashCode => hashValues(file.path, scale);

  @override
  String toString() => '${objectRuntimeType(this, 'FileImage')}("${file.path}", scale: $scale)';
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

  Future<ui.Codec> loadAsync(key: MemoryImage, decode: DecoderCallback) {
    assert(key == this);

    return decode(bytes);
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

  toString () {}
}

class ExactAssetImage extends AssetBundleImageProvider {

  public assetName
  public scale
  public bundle
  public package

  String get keyName => package == null ? assetName : 'packages/$package/$assetName';

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

// A completer used when resolving an image fails sync.
class ErrorImageCompleter extends ImageStreamCompleter { }

/// The exception thrown when the HTTP request to load a network image fails.
class NetworkImageLoadException implements Exception {
  NetworkImageLoadException({required this.statusCode, required this.uri})
      : assert(uri != null),
        assert(statusCode != null),
        _message = 'HTTP request failed, statusCode: $statusCode, $uri';

  /// The HTTP status code from the server.
  final int statusCode;

  /// A human-readable error message.
  final String _message;

  /// Resolved URL of the requested image.
  final Uri uri;

  @override
  String toString() => _message;
}
