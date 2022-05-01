import { SkiaObject } from './SkiaObject'
import { ManagedSkiaObject } from './ManagedSkiaObject'
import { SkiaObjectCache } from './SkiaObjectCache'

const maximumCacheSize = 1024

export class SkiaObjects {
  static resurrectableObjects: ManagedSkiaObject<Object>[] = []
  static expensiveCache = new SkiaObjectCache(maximumCacheSize)
  static cachesToResize: SkiaObjectCache[] = []
  static addedCleanupCallback = false

  
  static registerCleanupCallback() {
    if (this.addedCleanupCallback) {
      return
    }
    
    EnginePlatformDispatcher.instance.rasterizer!.addPostFrameCallback(this.postFrameCleanUp)
    
    this.addedCleanupCallback = true
  }

  static manageResurrectable (object: ManagedSkiaObject<Object>) {
    this.registerCleanupCallback()
    this.resurrectableObjects.push(object)
  }

  static manageExpensive (object: SkiaObject<Object>): void {
    this.registerCleanupCallback()
    this.expensiveCache.add(object)
  }

  static markCacheForResize (cache: SkiaObjectCache): void {
    this.registerCleanupCallback()

    if (this.cachesToResize.includes(cache)) {
      return
    }
    this.cachesToResize.push(cache)
  }

  static postFrameCleanUp (): void {
    if (
      this.resurrectableObjects.length === 0 && 
      this.cachesToResize.length === 0
    ) {
      return
    }

    for (let i = 0; i < this.resurrectableObjects.length; i++) {
      const object: SkiaObject<Object> = this.resurrectableObjects[i]
      object.delete()
      object.didDelete()
    }
    this.resurrectableObjects = []

    for (let i = 0; i < this.cachesToResize.length; i++) {
      const cache: SkiaObjectCache = this.cachesToResize[i]
      cache.resize()
    }

    this.cachesToResize = []
  }
}
