import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'

export abstract class ManagedSkiaObject <T extends RawSkia<T>, P = unknown> extends SkiaObject<T> {
  static malloc () {}
  static init () {}

  public get skia () {
    return this.rawSkia as T
  }

  public set skia (skia: T) {
    this.rawSkia = skia
  }

  rawSkia: T | null = null

  constructor (options?: P, skia?: T) {
    super()
    this.rawSkia = skia ?? this.init(
      this.malloc(options),
      options, 
    )
    
    SkiaFinalizationRegistry.registry(this, this.skia)
  }

  abstract malloc (options?: P): T
  abstract resurrect (): T
  
  init (skia: T, options?: P): T {
    return skia
  }

  didDelete () {
    this.rawSkia = null
  }
  
  delete () {
    this.skia?.delete()
  }
}

