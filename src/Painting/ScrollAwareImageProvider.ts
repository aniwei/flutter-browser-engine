import invariant from 'ts-invariant';
import { PaintingBinding } from './Binding';
import { DecoderCallback, ImageConfiguration, ImageProvider } from './ImageProvider';
import { ImageErrorListener, ImageStream, ImageStreamCompleter } from './ImageStream';

export class ScrollAwareImageProvider<T> extends ImageProvider<T> {
  
  public context
  public provider: ImageProvider<T>
  
  constructor (
    context,
    provider: ImageProvider<T>,
  ) {
    invariant(context !== null)
    invariant(provider !== null)
    super()

    this.provider = provider
  }
  

  
  resolveStreamForKey (
    configuration: ImageConfiguration,
    stream: ImageStream,
    key: T,
    onError: ImageErrorListener,
  ) {
    if (
      stream.completer !== null || 
      PaintingBinding.instance!.imageCache!.containsKey(key)
    ) {
      this.provider.resolveStreamForKey(configuration, stream, key, onError)
      return;
    }
    
    if (this.context.context == null) {
      return
    }
   
    // @TODO
    // if (Scrollable.recommendDeferredLoadingForContext(context.context!)) {
    //   SchedulerBinding.instance!.scheduleFrameCallback((_) {
    //     scheduleMicrotask(() => resolveStreamForKey(configuration, stream, key, handleError));
    //   });
    //   return;
    // }
    
    this.provider.resolveStreamForKey(configuration, stream, key, onError);
  }

  load (
    key: T, 
    decode: DecoderCallback
  ): ImageStreamCompleter {
    return this.provider.load(key, decode)
  }

  obtainKey (configuration: ImageConfiguration): Promise<T> {
    return this.provider.obtainKey(configuration)
  } 
}
