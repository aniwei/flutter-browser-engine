import { ManagedSkiaObject } from '../SkiaObjectCache'
import type { CkColorFilter } from './CkColorFilter'
import type { SkColorFilter } from '@Skia'

export class ManagedSkColorFilter extends ManagedSkiaObject<SkColorFilter> {
  public colorFilter: CkColorFilter

  constructor (ckColorFilter: CkColorFilter) {
    super(ckColorFilter.initRawColorFilter())
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