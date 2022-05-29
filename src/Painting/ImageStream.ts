import invariant from 'ts-invariant'
import { Image } from '@UI'
import { VoidCallback } from '@Platform'
import { EventEmitter } from 'events'

export type ImageListener = { (image: ImageInfo, synchronousCall: boolean): void } 
export type ImageChunkListener = { (event: ImageChunkEvent): void }
export type ImageErrorListener = { (exception): void }

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

export class ImageStreamListener {
  public onImage: ImageListener
  public onChunk: ImageChunkListener | null
  public onError: ImageErrorListener | null
  
  constructor (
    onImage: ImageListener,
    onChunk: ImageChunkListener | null,
    onError: ImageErrorListener | null,
  ) {
    invariant(onImage !== null)

    this.onImage = onImage
    this.onChunk = onChunk
    this.onError = onError
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

export class ImageStream extends EventEmitter {  
   

  setCompleter (value: ImageStreamCompleter) {
    invariant(this.completer === null)
    this.completer = value
    if (this.listeners !== null) {
      const initialListeners: ImageStreamListener[] = this.listeners
      this.listeners = null
      initialListeners.forEach(this.completer!.addListener)
    }
  }
}

export class ImageStreamCompleterHandle {
  constructor (completer: ImageStreamCompleter) {
    this.completer = completer
    this.completer.keepAliveHandles += 1
  }

  public completer: ImageStreamCompleter | null = null
  
  dispose () {
    invariant(this.completer !== null);
    invariant(this.completer!.keepAliveHandles > 0);
    invariant(!this.completer!.disposed);

    this.completer!.keepAliveHandles -= 1
    this.completer!.maybeDispose();
    this.completer = null
  }
}

abstract class ImageStreamCompleter {
  public listeners: ImageStreamListener[] = []
  public currentImage: ImageInfo | null = null
  
  public get hasListeners () {
    return this.listeners.length > 0
  }

  public hadAtLeastOneListener: boolean = false
  public keepAliveHandles: number = 0
  public disposed = false
  public onLastListenerRemovedCallbacks: VoidCallback[] = []

  addListener (listener: ImageStreamListener) {
    this.checkDisposed()
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

  
  keepAlive (): ImageStreamCompleterHandle {
    this.checkDisposed()
    return new ImageStreamCompleterHandle(this)
  }

  removeListener (listener: ImageStreamListener) {
    this.checkDisposed()

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
      this.maybeDispose()
    }
  }

  maybeDispose () {
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

  checkDisposed () {
    if (this.disposed) {
      throw new Error(
        `Stream has been disposed.`
      )
    }
  }

  addOnLastListenerRemovedCallback (callback: VoidCallback) {
    invariant(callback !== null)
    this.checkDisposed()
    this.onLastListenerRemovedCallbacks.push(callback)
  }

  removeOnLastListenerRemovedCallback (callback: VoidCallback) {
    invariant(callback !== null)
    this.checkDisposed()
    const index = this.onLastListenerRemovedCallbacks.findIndex(callback)
    this.onLastListenerRemovedCallbacks.splice(index, 1)
  }

  setImage (image: ImageInfo) {
    this.checkDisposed()
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
  
  reportImageChunkEvent (event: ImageChunkEvent) {
    this.checkDisposed()
    if (this.hasListeners) {
      
      const localListeners = this.listeners.map<ImageChunkListener | null>((listener: ImageStreamListener) => listener.onChunk)
         
      for (const listener of localListeners) {
        listener!(event)
      }
    }
  }
}



export class OneFrameImageStreamCompleter extends ImageStreamCompleter {
  constructor (
    image: Promise<ImageInfo>,
    informationCollector : InformationCollector | null
  ) {
    invariant(image !== null)

    super()

    image.then(() => {

    }).catch(error => {

    })
  }
}



export class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
  public chunkSubscription: StreamSubscription<ImageChunkEvent> | null
  public codec
  public scale: number
  public informationCollector: InformationCollector | null
  public nextFrame: FrameInfo
  public shownTimestamp: Duration
  public frameDuration: Duration
  public framesEmitted = 0
  public timer
  public frameCallbackScheduled: boolean = false

  constructor (
    codec: Future<ui.Codec>,
    scale: number,
    debugLabel: string | null,
    chunkEvents: Stream<ImageChunkEvent> | null,
    informationCollector: InformationCollector | null,
  ) {
    super()
    invariant(codec !== null)
    
    this.informationCollector = informationCollector
       _scale = scale {
    this.debugLabel = debugLabel;
    codec.then<void>(_handleCodecReady, onError: (Object error, StackTrace stack) {
      reportError(
        context: ErrorDescription('resolving an image codec'),
        exception: error,
        stack: stack,
        informationCollector: informationCollector,
        silent: true,
      );
    });
    if (chunkEvents != null) {
      _chunkSubscription = chunkEvents.listen(reportImageChunkEvent,
        onError: (Object error, StackTrace stack) {
          reportError(
            context: ErrorDescription('loading an image'),
            exception: error,
            stack: stack,
            informationCollector: informationCollector,
            silent: true,
          );
        },
      );
    }
  }

  handleCodecReady (ui.Codec codec) {
    _codec = codec;
    
    invariant(_codec !== null)

    if (this.hasListeners) {
      this.decodeNextFrameAndSchedule()
    }
  }

  handleAppFrame (timestamp: number) {
    this.frameCallbackScheduled = false
    if (!this.hasListeners) {
      return
    }

    invariant(_nextFrame !== null)

    if (_isFirstFrame() || _hasFrameDurationPassed(timestamp)) {
      _emitFrame(ImageInfo(
        image: _nextFrame!.image.clone(),
        scale: _scale,
        debugLabel: debugLabel,
      ));
      _shownTimestamp = timestamp;
      _frameDuration = _nextFrame!.duration;
      _nextFrame!.image.dispose();
      _nextFrame = null;
      final int completedCycles = _framesEmitted ~/ _codec!.frameCount;
      if (_codec!.repetitionCount == -1 || completedCycles <= _codec!.repetitionCount) {
        _decodeNextFrameAndSchedule();
      }
      return;
    }
    final Duration delay = _frameDuration! - (timestamp - _shownTimestamp);
    _timer = Timer(delay * timeDilation, () {
      _scheduleAppFrame();
    });
  }

  isFirstFrame (): boolean {
    return this.frameDuration == =null
  }

  hasFrameDurationPassed (timestamp: number): boolean {
    return timestamp - _shownTimestamp >= _frameDuration!
  }

  Future<void> _decodeNextFrameAndSchedule() async {
    // This will be null if we gave it away. If not, it's still ours and it
    // must be disposed of.
    _nextFrame?.image.dispose();
    _nextFrame = null;
    try {
      _nextFrame = await _codec!.getNextFrame();
    } catch (exception, stack) {
      reportError(
        context: ErrorDescription('resolving an image frame'),
        exception: exception,
        stack: stack,
        informationCollector: _informationCollector,
        silent: true,
      );
      return;
    }
    if (_codec!.frameCount == 1) {
      // ImageStreamCompleter listeners removed while waiting for next frame to
      // be decoded.
      // There's no reason to emit the frame without active listeners.
      if (!hasListeners) {
        return;
      }
      // This is not an animated image, just return it and don't schedule more
      // frames.
      _emitFrame(ImageInfo(
        image: _nextFrame!.image.clone(),
        scale: _scale,
        debugLabel: debugLabel,
      ));
      _nextFrame!.image.dispose();
      _nextFrame = null;
      return;
    }
    _scheduleAppFrame();
  }

  _scheduleAppFrame() {
    if (_frameCallbackScheduled) {
      return;
    }
    _frameCallbackScheduled = true;
    SchedulerBinding.instance!.scheduleFrameCallback(_handleAppFrame);
  }

  emitFrame (imageInfo: ImageInfo) {
    setImage(imageInfo)
    _framesEmitted += 1
  }

  addListener (listener: ImageStreamListener) {
    if (!hasListeners && _codec != null && (_currentImage == null || _codec!.frameCount > 1))
      _decodeNextFrameAndSchedule();
    super.addListener(listener);
  }

  removeListener (listener: ImageStreamListener) {
    super.removeListener(listener)
    if (!this.hasListeners) {
      this._timer?.cancel()
      this._timer = null
    }
  }

  maybeDispose () {
    super.maybeDispose()
    if (this.disposed) {
      _chunkSubscription?.onData(null);
      _chunkSubscription?.cancel();
      _chunkSubscription = null;
    }
  }
}
