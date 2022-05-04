import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'

export abstract class ManagedSkiaObject <T extends RawSkia<T>> extends SkiaObject<T> {
  rawSkia: T | null = null

  public get skia () {
    return this.rawSkia as T
  }

  public set skia (skia: T) {
    this.rawSkia = skia
  }

  constructor (skia?: T) {
    super()
    skia = skia ?? this.create()
    this.rawSkia = skia

    SkiaFinalizationRegistry.registry(this, skia)
  }

  abstract resurrect (): T
  abstract create (): T

  didDelete () {
    this.rawSkia = null
  }
}

