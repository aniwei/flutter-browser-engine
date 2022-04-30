import invariant from 'ts-invariant'
import { Collector } from './Collector'
import { SkiaObjectCollectionError } from './SkiaObjectCollectionError'

import type { SkDeletable } from '@Skia'

export class ProductionCollector extends Collector {
  public skObjectFinalizationRegistry
  public skiaObjectCollectionTimer: null = null
  public skiaObjectCollectionQueue: SkDeletable[] = []

  constructor () {
    super()

    this.skiaObjectCollectionQueue = []
    this.skObjectFinalizationRegistry = new FinalizationRegistry((deletable) => {
      if (!deletable.isDeleted()) {
        this.collect(deletable)
      }
    })
  }

  register (wrapper, deletable: SkDeletable) {
    this.skObjectFinalizationRegistry.register(wrapper, deletable);
  }

  
  collect (deletable: SkDeletable): void {
    invariant(
      !deletable.isDeleted(),
      'Attempted to delete an already deleted Skia object.',
    );
    this.skiaObjectCollectionQueue.push(deletable)
    this.skiaObjectCollectionTimer = Timer(Duration.zero, () => {
      // Null out the timer so we can schedule a new one next time objects are
      // scheduled for deletion.
      this.skiaObjectCollectionTimer = null
      this.collectSkiaObjectsNow()
    });
  }

  collectSkiaObjectsNow () {
    performance.mark('SkObject collection-start')
    const length = this.skiaObjectCollectionQueue.length
    let firstError
    let firstStackTrace

    for (let i = 0; i < length; i++) {
      const deletable: SkDeletable = this.skiaObjectCollectionQueue[i]
      if (deletable.isDeleted()) {
        continue
      }
      
      try {
        deletable.delete();
      } catch (error) {
        // Remember the error, but keep going. If for some reason CanvasKit fails
        // to delete an object we still want to delete other objects and empty
        // out the queue. Otherwise, the queue will never be flushed and keep
        // accumulating objects, a.k.a. memory leak.
        if (firstError == null) {
          firstError = error
          firstStackTrace = firstError.stack
        }
      }
    }
    
    this.skiaObjectCollectionQueue = []

    performance.mark('SkObject collection-end')
    performance.measure('SkObject collection', 'SkObject collection-start', 'SkObject collection-end')

    if (firstError != null) {
      throw new SkiaObjectCollectionError(firstError, firstStackTrace);
    }
  }
}
