export abstract class ManagedSkiaObject <T> extends SkiaObject<T> {
  rawSkia: T | null = null

  public get skia () {
    return this.rawSkia as T
  }

  constructor (skia?: T) {
    super()
    skia = skia ?? this.create()
    this.rawSkia = skia

    //
  }

  abstract resurrect (): T
  abstract create (): T
}