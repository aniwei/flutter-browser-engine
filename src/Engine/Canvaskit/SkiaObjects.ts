import { ManagedSkiaObject } from './ManagedSkiaObject'
import { SkiaObjectCache } from './SkiaObjectCache'
import { SkiaObject } from './SkiaObject'

export class SkiaObjects {
  public resurrectableObjects: ManagedSkiaObject<Object>[] = []
  public maximumCacheSize = 1024
  public expensiveCache = new SkiaObjectCache(this.maximumCacheSize)
  public cachesToResize: SkiaObjectCache[] = []
  public addedCleanupCallback = false
  
  registerCleanupCallback() {
    if (this.addedCleanupCallback) {
      return
    }
    
    EnginePlatformDispatcher.instance.rasterizer!
        .addPostFrameCallback(postFrameCleanUp)

    this.addedCleanupCallback = true
  }

  manageResurrectable(object: ManagedSkiaObject<Object>) {
    this.registerCleanupCallback()
    this.resurrectableObjects.push(object)
  }

  /// Starts managing the lifecycle of a resurrectable object that is expensive.
  ///
  /// Since it's expensive to resurrect, we shouldn't just delete it after every
  /// frame. Instead, add it to a cache and only delete it when the cache fills.
  manageExpensive(SkiaObject<Object> object) {
    registerCleanupCallback();
    expensiveCache.add(object);
  }

  /// Marks that [cache] has overflown its maximum size and show be resized.
  static markCacheForResize (cache: SkiaObjectCache) {
    this.registerCleanupCallback()
    
    if (cachesToResize.contains(cache)) {
      return;
    }
    cachesToResize.add(cache);
  }

  /// Cleans up managed Skia memory.
  static void postFrameCleanUp() {
    if (resurrectableObjects.isEmpty && cachesToResize.isEmpty) {
      return;
    }

    for (int i = 0; i < resurrectableObjects.length; i++) {
      final SkiaObject<Object> object = resurrectableObjects[i];
      object.delete();
      object.didDelete();
    }
    resurrectableObjects.clear();

    for (int i = 0; i < cachesToResize.length; i++) {
      final SkiaObjectCache cache = cachesToResize[i];
      cache.resize();
    }
    cachesToResize.clear();
  }
}
