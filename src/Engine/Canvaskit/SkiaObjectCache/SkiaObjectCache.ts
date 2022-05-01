import { SkiaObject } from './SkiaObject'
import { SkiaObjects } from './SkiaObjects'

export class SkiaObjectCache {
  public maximumSize: number
  public itemQueue: SkiaObject<Object>[]
  public itemMap: Map<SkiaObject<Object>, SkiaObject<Object>>


  public get length () {
    return this.itemQueue.length
  }


  constructor (maximumSize) {
    this.maximumSize = maximumSize
    this.itemQueue = []
    this.itemMap = new Map()
  }
  
  debugContains (object: SkiaObject<Object>): boolean {
    return this.itemMap.has(object)
  }

  
  add (object: SkiaObject<Object>): void {
    this.itemQueue.unshift(object)
    this.itemMap.set(object, this.itemQueue[0])

    if (this.itemQueue.length > this.maximumSize) {
      SkiaObjects.markCacheForResize(this)
    }
  }

  markUsed (object: SkiaObject<Object>) {
    const item = this.itemMap.get(object)

    if (item && this.itemQueue.includes(item)) {
      const index = this.itemQueue.indexOf(item)
      if (index > -1) {
        this.itemQueue.splice(index, 1)
      }
    }
    
    this.itemQueue.unshift(object)
    this.itemMap.set(object, this.itemQueue[0])
  }

  resize (): void {
    const itemsToDelete = Math.floor(this.maximumSize / 2)
    for (let i = 0; i < itemsToDelete; i++) {
      const oldObject = this.itemQueue.pop()
      if (oldObject) {
        this.itemMap.delete(oldObject)
        oldObject.delete()
        oldObject.didDelete()
      }
    }
  }
}
