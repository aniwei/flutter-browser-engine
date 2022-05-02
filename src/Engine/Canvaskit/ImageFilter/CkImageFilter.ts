import { ManagedSkiaObject } from '../SkiaObjectCache'
import { CkBlurImageFilter } from './CkBlurImageFilter'
import { CkColorFilterImageFilter } from './CkColorFilterImageFilter'
import { CkMatrixImageFilter } from './CkMatrixImageFilter'
import type { SkImageFilter } from '@Skia'
import type { FilterQuality, TileMode } from '@UI'
import type { Float64List } from '@Types'
import type { CkColorFilter } from '../ColorFilter'

export abstract class CkImageFilter extends ManagedSkiaObject<SkImageFilter> {
  static blur (
    sigmaX: number,
    sigmaY: number,
    tileMode: TileMode 
  ) {
    return new CkBlurImageFilter(sigmaX, sigmaY, tileMode)
  }

  static color(
    colorFilter: CkColorFilter
  ) {
    return new CkColorFilterImageFilter(colorFilter)
  }
  static matrix(
    matrix: Float64List,
    filterQuality: FilterQuality 
  ) {
    return new CkMatrixImageFilter(matrix, filterQuality)
  }


  public get imageFilter (): ManagedSkiaObject<SkImageFilter> {
    return this
  }

  abstract initSkiaObject (): SkImageFilter

  createDefault (): SkImageFilter  {
    return this.initSkiaObject()
  }

  resurrect () {
    return this.initSkiaObject()
  }

  delete () {
    this.rawSkiaObject?.delete()
  }
}