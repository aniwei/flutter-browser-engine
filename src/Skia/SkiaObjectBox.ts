import { kBrowserSupportsFinalizationRegistry } from '@Platform'
import invariant from 'ts-invariant'
import { ManagedSkiaObject } from './ManagedSkiaObject'
import { SkiaFinalizationRegistry } from './SkiaFinalizationRegistry'
import { RawSkia, SkiaObject } from './SkiaObject'

export class SkiaObjectBox<R, T extends RawSkia<T>> extends SkiaObject<T> {
  public refCount = 1
  public referrers: Set<R> = new Set()
  public isDeletedPermanently = false
  public rawSkia: T | null = null

  public get skia () {
    return this.rawSkia
  }

  public set skia (skia: T | null) {
    this.rawSkia = skia
  }
  
  constructor (referrer: R, value: T) {
    super()
    invariant(kBrowserSupportsFinalizationRegistry)
    this.init(referrer, value)

    SkiaFinalizationRegistry.registry(referrer, value)
  }

  init (referrer: R, value: T) {
    this.skia = value
  }

  ref (referrer: R) {

    invariant(this.refCount > 0)
    invariant(!this.referrers.has(referrer), `Attempted to increment ref count by the same referrer more than once.`)
    
    this.referrers.add(referrer)
    this.refCount += 1
    invariant(this.refCount === this.referrers.size)
  }

  unref (referrer: R) {
    invariant(this.isDeletedPermanently, `Attempted to unref an already deleted Skia object.`)
    invariant(this.referrers.delete(referrer), `Attempted to decrement ref count by the same referrer more than once.`)

    this.refCount -= 1
    invariant(this.refCount === this.referrers.size)

    if (this.refCount === 0) {
      if (this.skia) {
        if (kBrowserSupportsFinalizationRegistry) {
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
    invariant(!kBrowserSupportsFinalizationRegistry)
    this.skia = null
  }
}
