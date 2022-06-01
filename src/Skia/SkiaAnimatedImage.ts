import { ManagedSkiaObject } from './ManagedSkiaObject'

export class SkiaAnimatedImageDecoder extends ManagedSkiaObject<SkiaAnimatedImageDecoder> {
  
  resurrect(): SkiaAnimatedImageDecoder {
    return this
  }
}