/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import invariant from 'ts-invariant'
import { kSupportsFinalizationRegistry } from '@platform/Platform'
import { ManagedSkiaFinalizationRegistry, SkiaObject } from './ManagedSkiaObject'

export class SkiaObjectBox<R, T extends SkiaObject<T>> {
  public refCount = 0
  public referrers: Set<R> = new Set()
  public isDeletedPermanently = false
  public raw: T | null = null

  public get skia (): T {
    return this.raw as T
  }

  public set skia (skia: T | null) {
    this.raw = skia
  }
  
  constructor (skia: T) {
    this.skia = skia
    invariant(kSupportsFinalizationRegistry)
    ManagedSkiaFinalizationRegistry.registry(this, skia)
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
          ManagedSkiaFinalizationRegistry.cleanup(this.skia)
        } else {
          this.delete
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
