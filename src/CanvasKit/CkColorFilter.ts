import { ManagedSkiaObject, Skia } from '@Skia'
import { CkColorFilterImageFilter } from './CkImageFilter'
import type { ColorFilter, ImageFilter } from 'canvaskit-wasm'

export abstract class CkColorFilter {

  public get imageFilter (): ManagedSkiaObject<ImageFilter> {
    return new CkColorFilterImageFilter({ colorFilter: this })
  }
  
  initRawImageFilter (): ImageFilter  {
    return Skia.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): ColorFilter
}

export type ManagedSkiaColorFilterOptions = {
  ckColorFilter: CkColorFilter
}


export class ManagedSkiaColorFilter<T extends ManagedSkiaColorFilterOptions = ManagedSkiaColorFilterOptions> extends ManagedSkiaObject<ColorFilter, T> {
  public colorFilter!: CkColorFilter

  constructor (options: T) {
    super(options)
  }

  create (options: T) {
    this.colorFilter = options.ckColorFilter
    return this.colorFilter.initRawColorFilter()
  }

  resurrect () {
    return this.colorFilter.initRawColorFilter()
  }

  delete () {
    this.rawSkia?.delete()
  }

  
  isEqual (other: ManagedSkiaColorFilter) {
    if (other instanceof ManagedSkiaColorFilter) {
      return (
        this.colorFilter === other.colorFilter
      )
    }

    return false
  }

  toString () {
    return this.colorFilter.toString()
  }
}
