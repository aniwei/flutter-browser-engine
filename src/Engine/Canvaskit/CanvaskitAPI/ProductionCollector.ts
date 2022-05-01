import { invariant } from 'ts-invariant'
import { SkiaObjectCollectionError } from './SkiaObjectCollectionError'
import { Collector } from './Collector'

import type { SkDeletable } from './Skia'

export class ProductionCollector implements Collector {
  public skObjectFinalizationRegistry
  public skiaObjectCollectionTimer
  public skiaObjectCollectionQueue: SkDeletable[] = []

  constructor () {
    this.skiaObjectCollectionQueue = []
    this.skObjectFinalizationRegistry = new FinalizationRegistry((deletable: SkDeletable) => {
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
    this.skiaObjectCollectionTimer = setTimeout(() => {
      // Null out the timer so we can schedule a new one next time objects are
      // scheduled for deletion.
      this.skiaObjectCollectionTimer = null
      this.collectSkiaObjectsNow()
    }, 0);
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
        if (firstError == null) {
          firstError = error
          firstStackTrace = firstError.stack
        }
      }
    }
    
    this.skiaObjectCollectionQueue = []

    performance.mark('SkObject collection-end')
    performance.measure('SkObject collection', 'SkObject collection-start', 'SkObject collection-end')

    if (firstError !== null) {
      throw new SkiaObjectCollectionError(firstError, firstStackTrace);
    }
  }
}
