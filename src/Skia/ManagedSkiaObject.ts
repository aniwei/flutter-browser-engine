import { UnimplementedError } from '@Platform'
import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'



export abstract class ManagedSkiaObject <T extends RawSkia<T>> extends SkiaObject<T> {
  static malloc (options) { 
    throw new UnimplementedError()
  }

  public get skia () {
    return this.rawSkia as T
  }

  public set skia (skia: T) {
    this.rawSkia = skia
  }

  rawSkia: T | null = null

  constructor (skia: T) {
    super()
    this.rawSkia = skia
    SkiaFinalizationRegistry.registry(this, this.skia)
  }

  abstract resurrect (): T
  
  didDelete () {
    if (this.rawSkia !== null) {
      this.rawSkia = null
    }
  }
  
  delete () {
    this.rawSkia?.delete()
  }
}

