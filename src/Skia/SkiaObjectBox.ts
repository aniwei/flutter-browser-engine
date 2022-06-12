import invariant from 'ts-invariant'
import { kSupportsFinalizationRegistry } from '@platform'
import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'

export class SkiaObjectBox<R, T extends RawSkia<T>> extends SkiaObject<T> {
  public refCount = 0
  public referrers: Set<R> = new Set()
  public isDeletedPermanently = false
  public rawSkia: T | null = null

  public get skia (): T {
    return this.rawSkia as T
  }

  public set skia (skia: T | null) {
    this.rawSkia = skia
  }
  
  constructor (skia: T) {
    super()
    this.skia = skia
    invariant(kSupportsFinalizationRegistry)
    SkiaFinalizationRegistry.registry(this, skia)
  }
  
  ref (referrer: R) {
    invariant(!this.referrers.has(referrer), `Attempted to increment ref count by the same referrer more than once.`)    
    
    this.referrers.add(referrer)
    this.refCount += 1
    invariant(this.refCount === this.referrers.size)
  }

  unref (referrer: R) {
    invariant(!this.isDeletedPermanently, `Attempted to unref an already deleted Skia object.`)
    invariant(this.referrers.delete(referrer), `Attempted to decrement ref count by the same referrer more than once.`)

    this.refCount -= 1
    invariant(this.refCount === this.referrers.size)

    if (this.refCount === 0) {
      if (this.skia) {
        if (kSupportsFinalizationRegistry) {
          SkiaFinalizationRegistry.collect(this.skia)
        } else {
          this.delete
          this.didDelete()
        }
      }

      this.skia = null
      this.isDeletedPermanently = true
    }
  }

  delete() {
    this.skia?.delete()
  }

  didDelete() {
    invariant(!kSupportsFinalizationRegistry)
    this.skia = null
  }
}
