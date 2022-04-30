import type { SkColorFilter } from '@Skia'
import { ManagedSkiaObject } from '../../SkiaObjectCache'
import { CkColorFilter } from './CkColorFilter';

export class ManagedSkColorFilter extends ManagedSkiaObject<SkColorFilter> {
  public colorFilter: CkColorFilter

  constructor (ckColorFilter: CkColorFilter) {
    super()

    this.colorFilter = ckColorFilter
  }

  
  createDefault (): SkColorFilter {
    return this.colorFilter.initRawColorFilter()
  }

  resurrect (): SkColorFilter {
    return this.colorFilter.initRawColorFilter()
  }

  delete () {
    this.rawSkiaObject?.delete()
  }

  isEeual (other: ManagedSkColorFilter) {
    return other.colorFilter === this.colorFilter
  }
  
  toString () {
    return this.colorFilter.toString()
  }
}