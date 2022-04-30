import { SkImageFilter } from '@Skia'
import { CkImageFilter } from './CkImageFilter'
import { CkColorFilter } from '../ColorFilter'

export class CkColorFilterImageFilter extends CkImageFilter {
  public colorFilter: CkColorFilter  

  constructor (colorFilter: CkColorFilter) {
    super()

    this.colorFilter = colorFilter
  }

  initSkiaObject (): SkImageFilter {
    return this.colorFilter.initRawImageFilter()
  } 

  isEqual (other) {
    return other.colorFilter === this.colorFilter
  }

  toString () {
    return this.colorFilter.toString()
  }
}
