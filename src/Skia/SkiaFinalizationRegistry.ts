import invariant from 'ts-invariant'

export class SkiaFinalizationRegistry {
  static skiaFinalizationRegistry
  static registry (wrapper, skia) {
    const skiaFinalizationRegistry = this.skiaFinalizationRegistry || (
      this.skiaFinalizationRegistry = new SkiaFinalizationRegistry()
    )

    skiaFinalizationRegistry.register(wrapper, skia)
  }

  public finalizationRegistry: FinalizationRegistry

  constructor () {
    this.finalizationRegistry = new FinalizationRegistry((skia: SkDeletable) => {
      if (!skia.isDeleted()) {
        this.collect(skia)
      }
    })
  }

  register (wrapper: SkiaObject, deletable: SkDeletable) {

  }

  collect (deletable: SkDeletable) {
    invariant(
      !deletable.isDeleted(),
      'Attempted to delete an already deleted Skia object.',
    )


  }
}