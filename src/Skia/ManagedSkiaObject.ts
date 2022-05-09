import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'

export abstract class ManagedSkiaObject <T extends RawSkia<T>, P = unknown> extends SkiaObject<T> {
  rawSkia: T | null = null

  public get skia () {
    return this.rawSkia as T
  }

  public set skia (skia: T) {
    this.rawSkia = skia
  }

  constructor (options?: P, skia?: T) {
    super()
    this.rawSkia = skia ?? this.create(options)

    SkiaFinalizationRegistry.registry(this, this.skia)
  }

  abstract create (options?: P): T
  abstract resurrect (): T

  didDelete () {
    if (this.rawSkia !== null) {
      this.rawSkia = null
    }
  }
}

