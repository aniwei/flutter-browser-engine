import { SkImageFilter } from '@Skia'
import { FilterQuality, TileMode } from '@UI'
import { ManagedSkiaObject } from '../SkiaObjectCache'
import { CkColorFilter } from '../ColorFilter'
import { CkBlurImageFilter } from './CkBlurImageFilter'
import { CkColorFilterImageFilter } from './CkColorFilterImageFilter'
import { CkMatrixImageFilter } from './CkMatrixImageFilter'
import type { Float64List } from '@Types'

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