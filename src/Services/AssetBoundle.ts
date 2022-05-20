import { ByteData, utf8 } from '@Platform'

export abstract class AssetBundle {
  static  utf8decode (data: ByteData) {
    return utf8.decode(new Uint8Array(data.buffer))
  }
  
  abstract load(key: string): Promise<ByteData>

  async loadString (
    key: string, 
    cache: boolean = true 
  ): Promise<String> {
    const data = await this.load(key)
    if (data === null) {
      throw new Error(`Unable to load asset: ${key}`)
    }

    if (data.byteLength < 50 * 1024) {
      return utf8.decode(new Uint8Array(data.buffer))
    }
   
    return compute(_utf8decode, data, debugLabel: 'UTF8 decode for "$key"');
  }

  abstract loadStructuredData<T>(
    key: string,
    parser: { (value: string): Promise<T>  }
  ): Promise<T> 

  evict (key: string): void { }

  clear (): void { }

  toString () {
    return ``
  }
}


export class NetworkAssetBundle extends AssetBundle {
  public baseURI: URI
  public httpClient: HttpClient

  constructor (baseURI: string) {
    super()
    this.baseURI = baseURI
    this.httpClient = new HttpClient()
  }

  URIFromKey (key: string) {
    return this.baseURI.resolve(key)
  } 

  async load (key: string) {
    final HttpClientRequest request = await _httpClient.getUrl(_urlFromKey(key));
    final HttpClientResponse response = await request.close();
    
    if (response.statusCode !== HttpStatus.ok) {
      throw new Error(`Unable to load asset: ${key}`)
    }

    const bytes: Uint8Array = await consolidateHttpClientResponseBytes(response)
    return bytes.buffer.asByteData()
  }

  Future<T> loadStructuredData<T>(String key, Future<T> Function(String value) parser) async {
    assert(key != null);
    assert(parser != null);
    return parser(await loadString(key));
  }

  // TODO(ianh): Once the underlying network logic learns about caching, we
  // should implement evict().

  
  toString () {
    return ``
  }
}


export abstract class CachingAssetBundle extends AssetBundle {
  // TODO(ianh): Replace this with an intelligent cache, see https://github.com/flutter/flutter/issues/3568
  final Map<String, Future<String>> _stringCache = <String, Future<String>>{};
  final Map<String, Future<dynamic>> _structuredDataCache = <String, Future<dynamic>>{};

  Future<String> loadString(String key, { bool cache = true }) {
    if (cache)
      return _stringCache.putIfAbsent(key, () => super.loadString(key));
    return super.loadString(key);
  }

  Future<T> loadStructuredData<T>(String key, Future<T> Function(String value) parser) {
    assert(key != null);
    assert(parser != null);
    if (_structuredDataCache.containsKey(key))
      return _structuredDataCache[key]! as Future<T>;
    Completer<T>? completer;
    Future<T>? result;
    loadString(key, cache: false).then<T>(parser).then<void>((T value) {
      result = SynchronousFuture<T>(value);
      _structuredDataCache[key] = result!;
      if (completer != null) {
        // We already returned from the loadStructuredData function, which means
        // we are in the asynchronous mode. Pass the value to the completer. The
        // completer's future is what we returned.
        completer.complete(value);
      }
    });
    if (result != null) {
      // The code above ran synchronously, and came up with an answer.
      // Return the SynchronousFuture that we created above.
      return result!;
    }
    // The code above hasn't yet run its "then" handler yet. Let's prepare a
    // completer for it to use when it does run.
    completer = Completer<T>();
    _structuredDataCache[key] = completer.future;
    return completer.future;
  }

  evict (key: string): void {
    _stringCache.remove(key);
    _structuredDataCache.remove(key);
  }

  clear (): void {
    _stringCache.clear();
    _structuredDataCache.clear();
  }
}

export class PlatformAssetBundle extends CachingAssetBundle {
  async load (key: string) {
    const encoded: Uint8Array = utf8.encode(Uri(path: Uri.encodeFull(key)).path)
    
    final ByteData? asset = await ServicesBinding.instance!.defaultBinaryMessenger.send('flutter/assets', encoded.buffer.asByteData())
    
    if (asset === null) {
      throw new Error(`Unable to load asset: ${key}`)
    }
    
    return asset
  }
}

export function initRootBundle (): AssetBundle {
  return new PlatformAssetBundle()
}

export const rootBundle = initRootBundle()
