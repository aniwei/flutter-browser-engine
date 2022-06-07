import { invariant } from 'ts-invariant'
import { VoidCallback } from '@Platform'
import { ImageProvider } from './ImageProvider'
import { ImageErrorListener, ImageStream, ImageStreamHandle, ImageStreamListener } from './ImageStream'

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

abstract class CachedImageBase { 
  public stream: ImageStream
  public sizeBytes: number | null
  public handle: ImageStreamHandle | null

  constructor (
    stream: ImageStream, 
    sizeBytes?: number | null,
  ) {
    invariant(stream !== null)
    this.stream = stream
    this.sizeBytes = sizeBytes ?? null
    this.handle = stream.keepAlive()
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

class CachedImage extends CachedImageBase {
  constructor (
    stream: ImageStream, 
    sizeBytes: number | null
  ) {
    super(stream, sizeBytes)
  }
}

class PendingImage {
  public stream: ImageStream
  public listener: ImageStreamListener

  constructor (
    stream: ImageStream,
    listener: ImageStreamListener
  ) {
    this.stream = stream
    this.listener = listener
  }

  removeListener () {
    this.stream.removeListener(this.listener)
  }
}

class LiveImage extends CachedImageBase {
  public handleRemove: VoidCallback

  constructor (
    stream: ImageStream, 
    handleRemove: VoidCallback, 
    sizeBytes?: number | null
  ) {
    super(stream, sizeBytes)
    this.handleRemove = () => {
      handleRemove()
      this.dispose()
    }

    stream.addOnLastListenerRemovedCallback(this.handleRemove)
  }

  dispose () {
    this.stream.removeOnLastListenerRemovedCallback(this.handleRemove)
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

  @property(function (this) {
    return this.cache.size
  }) public currentSize!: number

  @property(function (this, value) {
    return value
  }, function (this, v, k) {
    invariant(v !== null)
    invariant(v as number >= 0)
    
    if (v === this.maximumSizeBytes) {
      return
    }
    
    this[k] = v
    if (this.maximumSizeBytes === 0) {
      this.clear()
    }
  }) public maximumSizeBytes!: number
  
  @property(function (this, v) {
    return v
  }) public currentSizeBytes: number = 0

  @property(function (this, value) {
    return value
  }, function (this, v, k) {
    invariant(v !== null)
    invariant(v as number >= 0)
    
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
    const image = this.cache.get(key)
    this.cache.delete(key)
    if (image !== null) {
      
      this.currentSizeBytes -= image?.sizeBytes
      image?.dispose()
      return true
    }
   
    return false
  }

  touch (
    key: T, 
    image: CachedImage, 
    timelineTask: TimelineTask | null
  ) {
    invariant(timelineTask != null)
    if (
      image.sizeBytes !== null && 
      image.sizeBytes! <= this.maximumSizeBytes && 
      this.maximumSize > 0
    ) {
      this.currentSizeBytes += image.sizeBytes!
      this.cache.set(key, image)
      _checkCacheSize(timelineTask)
    } else {
      image.dispose()
    }
  }

  trackLiveImage (
    key, 
    stream: ImageStream, 
    sizeBytes: number | null
  ) {
    let liveImage

    if (this.liveImages.has(key)) {
      liveImage = this.liveImages.get(key)
    } else {
      liveImage = new LiveImage(stream, () => {
        this.liveImages.delete(key)
      })
    }

    if (liveImage.sizeBytes === null) {
      liveImage.sizeBytes = sizeBytes
    }
  }

  putIfAbsent (
    key, 
    loader: ImageStream, 
    onError: ImageErrorListener | null 
  ): ImageStream | null {
    invariant(key !== null)
    invariant(loader !== null)
    let timelineTask
    let listenerTask
   
    let result = this.pendingImages.get(key)
    
    if (result) {
      return result.stream
    }
   
    let image = this.cache.get(key) as CachedImage
    this.cache.delete(key)

    if (image !== null) {
      
      this.trackLiveImage(
        key,
        image.stream,
        image.sizeBytes,
      )
      this.cache.set(key, image)
      return image.stream
    }

    let liveImage = this.liveImages.get(key) as LiveImage
    if (liveImage !== null) {
      this.touch(
        key,
        new CachedImage(
          liveImage.stream,
          liveImage.sizeBytes,
        ),
        timelineTask,
      )
      
      return liveImage.stream
    }

    try {
      result = loader() as ImageStream
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
        this.touch(key, image, listenerTask)
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

    final ImageStreamListener streamListener = new ImageStreamListener(listener)
    if (maximumSize > 0 && maximumSizeBytes > 0) {
      this.pendingImages.set(key, new PendingImage(result, streamListener))
    } else {
      untrackedPendingImage = _PendingImage(result, streamListener);
    }
    // Listener is removed in [_PendingImage.removeListener].
    result.addListener(streamListener);

    return result;
  }

  
  statusForKey (key: T): ImageCacheStatus {
    return ImageCacheStatus._(
      pending: pendingImages.containsKey(key),
      keepAlive: cache.containsKey(key),
      live: liveImages.containsKey(key),
    );
  }

  
  containsKey (key: T) {
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

  checkCacheSize (timelineTask: TimelineTask | null) {
    const finishArgs = new Map()
    let checkCacheTask: TimelineTask | null = null
    
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


