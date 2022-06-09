import { invariant } from 'ts-invariant'
import { Codec, FrameInfo, Image } from '@UI'
import { VoidCallback } from '@Platform'

export type ImageListener = { (image: ImageInfo, synchronousCall: boolean): void } 
export type ImageChunkListener = { (event: ImageChunkEvent): void }
export type ImageErrorListener = { (exception): void }

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
        return Reflect.apply(getter, this, [this[k], k])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

export class ImageInfo {
  public image: Image 
  public scale: number 
  public debugLabel: string | null
  
  public get sizeBytes () {
    return this.image.height * this.image.width * 4
  } 

  constructor (
    image: Image,
    scale: number = 1.0,
    debugLabel: string | null
  ) {
    invariant(image !== null)
    invariant(scale !== null)

    this.image = image
    this.scale = scale
    this.debugLabel = debugLabel
  }
  
  clone (): ImageInfo {
    return new ImageInfo(
      this.image.clone(),
      this.scale,
      this.debugLabel,
    )
  }

  
  isCloneOf (other: ImageInfo): boolean {
    return (
      other.image.isCloneOf(this.image) &&
      other.scale === this.scale &&
      other.debugLabel === this.debugLabel
    )
  }

  dispose () {
    this.image.dispose()
  }

  toString () {
    return ``
  }

  isEqual (other: ImageInfo) {
    if (other === this) {
      return true
    }
    return (
      other instanceof ImageInfo &&
      other.image === this.image &&
      other.scale === this.scale &&
      other.debugLabel === this.debugLabel
    )
  }
}

export class ImageChunkEvent {
  public cumulativeBytesLoaded: number
  public expectedTotalBytes: number | null

  constructor (
    cumulativeBytesLoaded: number,
    expectedTotalBytes: number | null
  ) {
    invariant(cumulativeBytesLoaded >= 0)
    invariant(expectedTotalBytes === null || expectedTotalBytes >= 0)

    this.cumulativeBytesLoaded = cumulativeBytesLoaded
    this.expectedTotalBytes = expectedTotalBytes
  }
}

export class ImageStreamListener {
  public onImage: ImageListener
  public onChunk: ImageChunkListener | null
  public onError: ImageErrorListener | null
  
  constructor (
    onImage: ImageListener,
    onChunk?: ImageChunkListener | null,
    onError?: ImageErrorListener | null,
  ) {
    invariant(onImage !== null)

    this.onImage = onImage
    this.onChunk = onChunk ?? null
    this.onError = onError ?? null
  }

  isEqual (other: ImageStreamListener) {
    if (other === this) {
      return true
    }

    return (
      other instanceof ImageStreamListener &&
      other.onImage === this.onImage &&
      other.onChunk === this.onChunk &&
      other.onError === this.onError
    )
  }
}

export class ImageStream {
  public listeners: ImageStreamListener[] | null = null
  public get key () {
    return this.completer ?? this
  }

  @property<ImageStreamCompleter | null>(function (this, v) {
    return v
  }, function (this, v, k) {
    invariant(v === null)
    this[k] = v
    if (this.listeners !== null && v !== null) {
      
      const initialListeners = this.listeners
      initialListeners.forEach((v as ImageStreamCompleter).addListener)
        
      this.listeners = null
    }
  }) public completer: ImageStreamCompleter | null = null

  addListener (listener: ImageStreamListener) {
    if (this.completer !== null) {
      return this.completer.addListener(listener)
    }
    
    this.listeners ??= []
    this.listeners.push(listener)
  }

  removeListener (listener: ImageStreamListener) {
    if (this.completer !== null) {
      return this.completer.removeListener(listener)
    }
    invariant(this.listeners !== null)

    for (let i = 0; i < this.listeners.length; i += 1) {
      if (this.listeners[i] === listener) {
        this.listeners!.splice(i, 1)
        break
      }
    }
  }
}


export class ImageStreamHandle {
  public completer: ImageStreamCompleter | null = null

  constructor (completer: ImageStreamCompleter) {
    this.completer = completer
    this.completer.keepAliveHandles += 1
  }
  
  dispose () {
    invariant(this.completer !== null)
    invariant(this.completer!.keepAliveHandles > 0)
    invariant(!this.completer!.disposed)

    this.completer!.keepAliveHandles -= 1
    this.completer!.dispose()
    this.completer = null
  }
}

export abstract class ImageStreamCompleter {
  public listeners: ImageStreamListener[] = []
  public debugLabel: string | null = null
  public currentImage: ImageInfo | null = null
  
  public get hasListeners () {
    return this.listeners.length > 0
  }

  public disposed = false
  public keepAliveHandles: number = 0
  public hadAtLeastOneListener: boolean = false
  public onLastListenerRemovedCallbacks: VoidCallback[] = []

  addListener (listener: ImageStreamListener) {
    this.checkIsDisposed()
    this.hadAtLeastOneListener = true
    this.listeners.push(listener)

    if (this.currentImage !== null) {
      try {
        listener.onImage(this.currentImage!.clone(), true)
      } catch (error) {
        if (listener.onError !== null) {
          listener.onError(error)
        } else {
          throw error
        }
      }
    }
  }

  removeListener (listener: ImageStreamListener) {
    this.checkIsDisposed()

    for (let i = 0; i < this.listeners.length; i += 1) {
      if (this.listeners[i] === listener) {
        this.listeners.splice(i, 1)
        break
      }
    }

    if (this.listeners.length === 0) {
      const callbacks: VoidCallback[] = this.onLastListenerRemovedCallbacks
      for (const callback of callbacks) {
        callback()
      }
      this.onLastListenerRemovedCallbacks = []
      this.dispose()
    }
  }
  
  keepAlive (): ImageStreamHandle {
    this.checkIsDisposed()
    return new ImageStreamHandle(this)
  }

  dispose () {
    if (
      !this.hadAtLeastOneListener || 
      this.disposed || 
      this.listeners.length > 0 || 
      this.keepAliveHandles !== 0
    ) {
      return
    }

    this.currentImage?.dispose()
    this.currentImage = null
    this.disposed = true
  }

  checkIsDisposed () {
    if (this.disposed) {
      throw new Error(`Stream has been disposed.`)
    }
  }

  addOnLastListenerRemovedCallback (callback: VoidCallback) {
    invariant(callback !== null)
    this.checkIsDisposed()
    this.onLastListenerRemovedCallbacks.push(callback)
  }

  removeOnLastListenerRemovedCallback (callback: VoidCallback) {
    invariant(callback !== null)
    this.checkIsDisposed()
    const index = this.onLastListenerRemovedCallbacks.indexOf(callback)
    if (index > -1) {
      this.onLastListenerRemovedCallbacks.splice(index, 1)
    }
  }

  setImage (image: ImageInfo) {
    this.checkIsDisposed()
    this.currentImage?.dispose()
    this.currentImage = image

    if (this.listeners.length === 0) {
      return
    }
    
    const localListeners = Array.from(this.listeners)
    for (const listener of localListeners) {
      try {
        listener.onImage(image.clone(), false)
      } catch (exception) {
        throw exception
      }
    }
  }
  
  onImageChunkEvent (event: ImageChunkEvent) {
    this.checkIsDisposed()
    if (this.hasListeners) {
      
      const localListeners = this.listeners.map<ImageChunkListener | null>((listener: ImageStreamListener) => listener.onChunk)
         
      for (const listener of localListeners) {
        listener!(event)
      }
    }
  }
}

export class OneFrameImageCompleter extends ImageStreamCompleter {
  constructor (image: Promise<ImageInfo>) {
    invariant(image !== null)

    super()

    image.then(() => {

    }).catch(error => {

    })
  }
}

export class MultiFrameImageCompleter extends ImageStreamCompleter {
  public scale: number
  public codec: Codec | null = null
  public nextFrame: FrameInfo | null = null
  public shownTimestamp!: number
  public frameDuration!: number
  public framesEmitted = 0
  public frameCallbackScheduled: boolean = false
  public timer

  constructor (
    codec: Promise<Codec>,
    scale: number,
    debugLabel: string | null
  ) {
    super()
    invariant(codec !== null)
    
    this.scale = scale 
    this.debugLabel = debugLabel
    
    codec.then(this.handleCodecReady).catch(error => {
      debugger
    })
  }

  handleCodecReady = (codec) => {
    this.codec = codec
    invariant(this.codec !== null)

    if (this.hasListeners) {
      this.decodeNextFrameAndSchedule()
    }
  }

  handleAppFrame = (timestamp: number) => {
    this.frameCallbackScheduled = false
    if (!this.hasListeners) {
      return
    }

    invariant(this.nextFrame !== null)

    if (
      this.isFirstFrame() || 
      this.hasFrameDurationPassed(timestamp)
    ) {
      this.emitFrame(new ImageInfo(
        this.nextFrame!.image.clone(),
        this.scale,
        this.debugLabel,
      ))
      this.shownTimestamp = timestamp
      this.frameDuration = this.nextFrame!.duration
      this.nextFrame!.image.dispose()
      this.nextFrame = null
      
      const completedCycles = Math.floor(this.framesEmitted / this.codec!.frameCount)
      if (
        this.codec!.repetitionCount == -1 || 
        completedCycles <= this.codec!.repetitionCount
      ) {
        this.decodeNextFrameAndSchedule()
      }
      return
    }
    const delay = this.frameDuration! - (timestamp - this.shownTimestamp)
    // this.timer = Timer(delay * timeDilation, () {
    //   this.scheduleAppFrame()
    // });
  }

  isFirstFrame (): boolean {
    return this.frameDuration === null
  }

  hasFrameDurationPassed (timestamp: number): boolean {
    return timestamp - this.shownTimestamp >= this.frameDuration!
  }

  async decodeNextFrameAndSchedule () {
    this.nextFrame?.image.dispose()
    this.nextFrame = null
    try {
      this.nextFrame = await this.codec!.getNextFrame()
    } catch (exception) {
      // 
      return
    }
    if (this.codec!.frameCount === 1) {
      if (!this.hasListeners) {
        return
      }
      
      this.emitFrame(new ImageInfo(
        this.nextFrame!.image.clone(),
        this.scale,
        this.debugLabel,
      ))
      this.nextFrame!.image.dispose()
      this.nextFrame = null
      return
    }

    this.scheduleAppFrame()
  }

  scheduleAppFrame () {
    if (this.frameCallbackScheduled) {
      return
    }
    this.frameCallbackScheduled = true
    // SchedulerBinding.instance!.scheduleFrameCallback(this.handleAppFrame)
  }

  emitFrame (imageInfo: ImageInfo) {
    this.setImage(imageInfo)
    this.framesEmitted += 1
  }

  addListener (listener: ImageStreamListener) {
    if (
      !this.hasListeners && 
      this.codec !== null && 
      (
        this.currentImage === null || 
        this.codec!.frameCount > 1
      )
    )
    this.decodeNextFrameAndSchedule()
    super.addListener(listener)
  }

  removeListener (listener: ImageStreamListener) {
    super.removeListener(listener)
    if (!this.hasListeners) {
      this.timer?.cancel()
      this.timer = null
    }
  }

  dispose () {
    super.dispose()
    if (this.disposed) {
      // @TODO
    }
  }
}
