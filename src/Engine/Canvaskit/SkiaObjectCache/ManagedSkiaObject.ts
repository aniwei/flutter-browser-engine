import { SkDeletable } from '../CanvasKitAPI'
import { Collector } from '../CanvasKitAPI/Collector'
import { SkiaObject } from './SkiaObject'
import { SkiaObjects } from './SkiaObjects'

export abstract class ManagedSkiaObject<T extends Object> extends SkiaObject<T> {
  public rawSkiaObject: T | null = null
  public get isResurrectionExpensive () {
    return false
  }
  public get skiaObject (): T {
    return this.rawSkiaObject ?? this.doResurrect()
  }

  constructor (instance: T | null = null) {
    super()
    const defaultObject = instance ?? this.createDefault()

    this.rawSkiaObject = defaultObject as SkDeletable
    Collector.instance.register(this, defaultObject);
  }
 
  doResurrect (): T  {
    this.rawSkiaObject = this.resurrect()
    if (this.isResurrectionExpensive) {
      SkiaObjects.manageExpensive(this);
    } else {
      SkiaObjects.manageResurrectable(this);
    }
    return this.skiaObject
  }

  didDelete () {
    if (this.rawSkiaObject === null) {
      return
    }

    this.rawSkiaObject = null
  }

  
  abstract createDefault (): T
  abstract resurrect(): T
}
