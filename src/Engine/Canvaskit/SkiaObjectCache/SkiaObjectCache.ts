import { SkiaObject } from '../SkiaObject'
import { SkiaObjects } from './SkiaObjects'

export class SkiaObjectCache {
  public maximumSize: number
  public itemQueue: DoubleLinkedQueue<SkiaObject<Object>>
  public itemMap: Map<SkiaObject<Object>, DoubleLinkedQueueEntry<SkiaObject<Object>>>


  public get length () {
    return this.itemQueue.length
  }


  constructor (maximumSize) {
    this.maximumSize = maximumSize
    this.itemQueue = new DoubleLinkedQueue<SkiaObject<Object>()
    this.itemMap = new Map()
  }
  
  debugContains (object: SkiaObject<Object>): boolean {
    return this.itemMap.has(object)
  }

  
  add (object: SkiaObject<Object>): void {
    this.itemQueue.addFirst(object)
    this.itemMap.set(object, this.itemQueue.firstEntry())

    if (this.itemQueue.length > this.maximumSize) {
      SkiaObjects.markCacheForResize(this)
    }
  }

  markUsed (object: SkiaObject<Object>) {
    const item: DoubleLinkedQueueEntry<SkiaObject<Object>> | null = this.itemMap.get(object)
    item?.remove()
    
    this.itemQueue.addFirst(object)
    this.itemMap.set(object, this.itemQueue.firstEntry())
  }

  resize (): void {
    const itemsToDelete = Math.floor(this.maximumSize / 2)
    for (let i = 0; i < itemsToDelete; i++) {
      const oldObject: SkiaObject<Object> = this.itemQueue.removeLast()
      this.itemMap.delete(oldObject)
      oldObject.delete()
      oldObject.didDelete()
    }
  }
}
