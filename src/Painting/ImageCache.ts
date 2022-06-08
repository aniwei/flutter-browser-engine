import { invariant } from 'ts-invariant'
import { VoidCallback } from '@Platform'
import { ImageProvider } from './ImageProvider'
import { ImageErrorListener, ImageInfo, ImageStream, ImageStreamCompleter, ImageStreamHandle, ImageStreamListener } from './ImageStream'

const kDefaultSize = 1000
const kDefaultSizeBytes = 100 << 20 // 100 MiB

function property<T> (
  getter: { (v: T, k?: string): T } = function (v, k) { return v as T },
  setter: { (v: T, k: string): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [k, this[k]])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

export abstract class CachedImageBase { 
  public completer: ImageStreamCompleter
  public sizeBytes: number | null
  public handle: ImageStreamHandle | null

  constructor (
    completer: ImageStreamCompleter, 
    sizeBytes?: number | null,
  ) {
    invariant(completer !== null)
    this.completer = completer
    this.sizeBytes = sizeBytes ?? null
    this.handle = completer.keepAlive()
  }

  dispose () {
    invariant(this.handle !== null)
    // @TODO
    // Give any interested parties a chance to listen to the stream before we
    // potentially dispose it.
    // SchedulerBinding.instance!.addPostFrameCallback((Duration timeStamp) {
    //   assert(handle != null);
    //   handle?.dispose();
    //   handle = null;
    // });
  }
}

export class CachedImage extends CachedImageBase {
  constructor (
    completer: ImageStreamCompleter, 
    sizeBytes: number | null
  ) {
    super(completer, sizeBytes)
  }
}

export class PendingImage {
  public completer: ImageStreamCompleter
  public listener: ImageStreamListener

  constructor (
    completer: ImageStreamCompleter,
    listener: ImageStreamListener
  ) {
    this.completer = completer
    this.listener = listener
  }

  removeListener () {
    this.completer.removeListener(this.listener)
  }
}

export class LiveImage extends CachedImageBase {
  public handleRemove: VoidCallback

  constructor (
    completer: ImageStreamCompleter, 
    handleRemove: VoidCallback, 
    sizeBytes?: number | null
  ) {
    super(completer, sizeBytes)
    this.handleRemove = () => {
      handleRemove()
      this.dispose()
    }

    completer.addOnLastListenerRemovedCallback(this.handleRemove)
  }

  dispose () {
    this.completer.removeOnLastListenerRemovedCallback(this.handleRemove)
    super.dispose()
  }

  toString () {
    // describeIdentity(this)
  }
}

export class ImageCache {
  public pendingImages: Map<unknown, PendingImage> = new Map()
  public cache: Map<unknown, CachedImage> = new Map()
  public liveImages: Map<unknown, LiveImage> = new Map()

  public listenedOnce: boolean = false

  @property<number>(function (this) {
    return this.cache.size
  }) public currentSize!: number

  @property<number>(function (this, value) {
    return value
  }, function (this, v, k) {
    invariant(v !== null)
    invariant(v >= 0)
    
    if (v === this.maximumSizeBytes) {
      return
    }
    
    this[k] = v
    if (this.maximumSizeBytes === 0) {
      this.clear()
    }
  }) public maximumSizeBytes!: number
  
  @property<number>(function (this, v) {
    return v
  }) public currentSizeBytes: number = 0

  @property<number>(function (this, value) {
    return value
  }, function (this, v, k) {
    invariant(v !== null)
    invariant(v >= 0)
    
    if (v === this.maximumSize) {
      return
    }
    
    this[k] = v
    if (this.maximumSize === 0) {
      this.clear()
    }
  }) public maximumSize!: number

  get liveImageCount () {
    return this.liveImages.size
  } 

  get pendingImageCount () {
    return this.pendingImages.size
  } 

  constructor () {

  }

  clear () {
    for (const [key, image] of this.cache) {
      image?.dispose()
    }

    this.cache.clear()
    this.pendingImages.clear()
    this.currentSizeBytes = 0
  }

  evict (
    key, 
    includeLive = true
  ): boolean {
    invariant(includeLive !== null)
    
    if (includeLive) {
      const image = this.liveImages.get(key)
      this.liveImages.delete(key)
      image?.dispose()
    }

    const pendingImage = this.pendingImages.get(key)
    this.pendingImages.delete(key)
    if (pendingImage !== null) {
      pendingImage?.removeListener()
      return true
    }
    const image = this.cache.get(key) as CachedImage
    this.cache.delete(key)
    if (image !== null) {
      this.currentSizeBytes -= image?.sizeBytes!
      image.dispose()
      return true
    }
   
    return false
  }

  touch (
    key, 
    image: CachedImage, 
  ) {
    if (
      image.sizeBytes !== null && 
      image.sizeBytes! <= this.maximumSizeBytes && 
      this.maximumSize > 0
    ) {
      this.currentSizeBytes += image.sizeBytes!
      this.cache.set(key, image)
    } else {
      image.dispose()
    }
  }

  trackLiveImage (
    key, 
    completer: ImageStreamCompleter, 
    sizeBytes: number | null
  ) {
    let liveImage

    if (this.liveImages.has(key)) {
      liveImage = this.liveImages.get(key)
    } else {
      liveImage = new LiveImage(completer, () => {
        this.liveImages.delete(key)
      })
    }

    if (liveImage.sizeBytes === null) {
      liveImage.sizeBytes = sizeBytes
    }
  }

  putIfAbsent (
    key, 
    loader: { (): ImageStreamCompleter }, 
    onError: ImageErrorListener | null 
  ): ImageStreamCompleter | null {
    invariant(key !== null)
    invariant(loader !== null)
   
    let result
    result = this.pendingImages.get(key)
    
    if (result) {
      return result.completer
    }
   
    let image = this.cache.get(key) as CachedImage
    this.cache.delete(key)

    if (image !== null) {
      
      this.trackLiveImage(
        key,
        image.completer,
        image.sizeBytes,
      )
      this.cache.set(key, image)
      return image.completer
    }

    let liveImage = this.liveImages.get(key) as LiveImage
    if (liveImage !== null) {
      this.touch(
        key,
        new CachedImage(
          liveImage.completer,
          liveImage.sizeBytes,
        )
      )
      
      return liveImage.completer
    }

    try {
      result = loader() as ImageStreamCompleter
      this.trackLiveImage(key, result, null)
    } catch (error) {
      if (onError !== null) {
        onError(error)
        return null
      } else {
        throw error
      }
    }

    let listenedOnce = false
    let untrackedPendingImage: PendingImage | null

    const listener = (
      info: ImageInfo | null, 
      syncCall: boolean
    ) => {
      let sizeBytes: number | null = null
      if (info !== null) {
        sizeBytes = info.sizeBytes
        info.dispose()
      }

      const image = new CachedImage(
        result!,
        sizeBytes,
      );

      this.trackLiveImage(key, result, sizeBytes)

      // Only touch if the cache was enabled when resolve was initially called.
      if (untrackedPendingImage === null) {
        this.touch(key, image)
      } else {
        image.dispose()
      }

      let pendingImage = untrackedPendingImage ?? this.pendingImages.get(key)
      this.pendingImages.delete(key)
      if (pendingImage !== null) {
        pendingImage?.removeListener()
      }
      
      listenedOnce = true
    }

    const streamListener = new ImageStreamListener(listener)
    if (
      this.maximumSize > 0 && 
      this.maximumSizeBytes > 0
    ) {
      this.pendingImages.set(key, new PendingImage(result, streamListener))
    } else {
      untrackedPendingImage = new PendingImage(result, streamListener)
    }
    
    result.addListener(streamListener)

    return result
  }

  
  statusForKey (key): ImageCacheStatus {
    return new ImageCacheStatus(
      this.pendingImages.has(key),
      this.cache.has(key),
      this.liveImages.has(key),
    );
  }

  
  containsKey (key) {
    return (
      this.pendingImages.get(key) !== null || 
      this.cache.get(key) !== null
    )
  }

  
  clearLiveImages () {
    for (const [key, image] of this.liveImages) {
      image.dispose()
      this.liveImages.delete(key)
    }
  }

  checkCacheSize () {
    const finishArgs = new Map()
    // let checkCacheTask: TimelineTask | null = null
    
    while (
      this.currentSizeBytes > 
      this.maximumSizeBytes || 
      this.cache.size > 
      this.maximumSize
    ) {
      let key = this.cache.keys()[0]
      let image = this.cache.get(key)!
      this.currentSizeBytes -= image.sizeBytes!
      image.dispose()
      this.cache.delete(key)
    }
    
    invariant(this.currentSizeBytes >= 0)
    invariant(this.cache.size <= this.maximumSize)
    invariant(this.currentSizeBytes <= this.maximumSizeBytes)
  }
}

export class ImageCacheStatus {
  public pending: boolean
  public keepAlive: boolean
  public live: boolean

  public get tracked () {
    return this.pending || this.keepAlive || this.live
  }

  public get untracked () {
    return !this.pending && !this.keepAlive && !this.live
  } 

  constructor (
    pending: boolean,
    keepAlive: boolean,
    live: boolean,
  ) {
    invariant(!pending || !keepAlive)

    this.pending = pending
    this.keepAlive = keepAlive
    this.live = live
  }

  isEqual (other: ImageCacheStatus) {
    if (other === this) {
      return true
    }

    return (
      other instanceof ImageCacheStatus &&
      other.pending === this.pending &&
      other.keepAlive === this.keepAlive &&
      other.live === this.live
    )
  }

  
  toString () {
    return ``
  }
}


