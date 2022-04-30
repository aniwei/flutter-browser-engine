import { SkImageFilter } from '@Skia'
import { CkImageFilter } from './CkImageFilter'
import { CkColorFilter } from '../ColorFilter'

export class CkColorFilterImageFilter extends CkImageFilter {
  public colorFilter: CkColorFilter

  public get hashCode () {
    return this.colorFilter.hashCode
  }
  

  constructor (colorFilter: CkColorFilter) {
    super()

    this.colorFilter = colorFilter
  }

  initSkiaObject (): SkImageFilter {
    return this.colorFilter.initRawImageFilter()
  } 

  isEqual (other) {
    if (this.runtimeType !== other.runtimeType) {
      return false
    }

    if (other instanceof CkColorFilterImageFilter) {
      return other.colorFilter === this.colorFilter
    }

    return false
  }

  toString () {
    return this.colorFilter.toString()
  }
}
