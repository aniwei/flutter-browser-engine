import { invariant } from 'ts-invariant'
import { SkDeletable } from '@Skia'
import { Collector } from '@CanvasKitAPI'
import { SkiaObject } from './SkiaObject'
import { SkiaObjects } from './SkiaObjects'
import { StackTraceDebugger } from './StackTraceDebugger'
import { StackTrace } from './StackTrace'

type Resurrector<T> = { (): T }

export class SkiaObjectBox<R extends StackTraceDebugger, T> extends SkiaObject<T> { 
  public _refCount: number = 1
  public get refCount () {
    return this._refCount
  }

  public debugReferrers: Set<R> = new Set<R>()

  public rawSkiaObject: T | null = null
  public skDeletable: SkDeletable | null = null
  public resurrector: Resurrector<T> | null = null

  public get skiaObject () {
    return this.rawSkiaObject as T
  }


  public _isDeletedPermanently = false
  public get isDeletedPermanently () {
    return this._isDeletedPermanently
  }

  public get isDeletedTemporarily () {
    return this.rawSkiaObject === null && !this._isDeletedPermanently
  }

  constructor (debugReferrer: R, initialValue: T) {
    super()
    this.resurrector = null
    this.initialize(debugReferrer, initialValue)
    Collector.instance.register(this, this.skDeletable)
  }
      
  static resurrectable<R extends StackTraceDebugger, T> (
    debugReferrer: R, 
    initialValue: T, 
    resurrector
  ) {
    const box = new SkiaObjectBox(debugReferrer, initialValue)
    box.resurrector = resurrector
    SkiaObjects.manageExpensive(this)
  }
  
  initialize (debugReferrer: R, initialValue: T) {
    this.update(initialValue)
    this.debugReferrers.add(debugReferrer)
    
    invariant(this.refCount === this.debugReferrers.size)
  }

  debugGetStackTraces (): StackTrace[] {
    return Array.from(this.debugReferrers)
  }

  update (newSkiaObject: T | null) {
    this.rawSkiaObject = newSkiaObject
    this.skDeletable = newSkiaObject as unknown as SkDeletable
  }

  delete () {
    this.skDeletable?.delete()
  }

  didDelete () {
    this.update(null)
  }

  ref (debugReferrer: R) {
    invariant(
      !this._isDeletedPermanently,
      'Cannot increment ref count on a deleted handle.'
    )
    invariant(this._refCount > 0)
    invariant(
      this.debugReferrers.add(debugReferrer),
      'Attempted to increment ref count by the same referrer more than once.',
    )
    this._refCount += 1
    invariant(this.refCount === this.debugReferrers.size)
  }

  unref (debugReferrer: R) {
    invariant(
      !this._isDeletedPermanently,
      'Attempted to unref an already deleted Skia object.'
    )
    invariant(
      this.debugReferrers.delete(debugReferrer),
      'Attempted to decrement ref count by the same referrer more than once.',
    )
    this._refCount -= 1
    invariant(this.refCount === this.debugReferrers.size)
    
    if (this._refCount === 0) {
      
      if (this.skDeletable !== null) {
        Collector.instance.collect(this.skDeletable!)
      }
      this.rawSkiaObject = null
      this.skDeletable = null
      this.resurrector = null
      this._isDeletedPermanently = true
    }
  }
}
