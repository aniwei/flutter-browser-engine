import { invariant } from 'ts-invariant'
import { RawSkia, SkiaObject } from './SkiaObject'

export class SkiaFinalizationRegistry<T extends RawSkia<T>> {
  static skiaFinalizationRegistry
  static registry (wrapper, skia) {
    const skiaFinalizationRegistry = this.skiaFinalizationRegistry || (
      this.skiaFinalizationRegistry = new SkiaFinalizationRegistry()
    )

    skiaFinalizationRegistry.register(wrapper, skia)
  }

  static collect (skia) {
    if (this.skiaFinalizationRegistry) {
      this.skiaFinalizationRegistry.collect(skia)
    }
  }

  public finalizationRegistry: FinalizationRegistry<T>
  public skiaObjectCollectionQueue: T[] = []
  public skiaObjectCollectionTimer

  constructor () {
    this.finalizationRegistry = new FinalizationRegistry((skia: T) => {
      if (!skia.isDeleted()) {
        this.collect(skia)
      }
    })
  }

  register (wrapper: SkiaObject<T>, deletable: T) {
    this.finalizationRegistry.register(wrapper, deletable)
  }

  collect (deletable: T) {
    invariant(
      !deletable.isDeleted(),
      'Attempted to delete an already deleted Skia object.',
    )

    this.skiaObjectCollectionQueue.push(deletable)
    this.skiaObjectCollectionTimer = setImmediate(() => {
      this.skiaObjectCollectionTimer = null

      performance.mark('SkiaObject.Collection.Start')
      const length = this.skiaObjectCollectionQueue.length
      let firstError
      
      for (let i = 0; i < length; i++) {
        const deletable = this.skiaObjectCollectionQueue[i]
        if (deletable.isDeleted()) {
          continue
        }

        try {
          deletable.delete()
        } catch (error: any) {
          firstError = error
        }
      }

      this.skiaObjectCollectionQueue = []
      performance.mark(`SkiaObject.Collection.End`)

      if (firstError) {
        throw firstError
      }
    })
  }
}