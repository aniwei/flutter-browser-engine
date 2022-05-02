import { SkImageFilter, SkColorFilter } from '@Skia'
import { CanvasKitAPI } from '../CanvasKitAPI'
import { CkColorFilterImageFilter } from '../ImageFilter'
import type { ManagedSkiaObject } from '../SkiaObjectCache'


export abstract class CkColorFilter {
  public get imageFilter (): ManagedSkiaObject<SkImageFilter> {
    return new CkColorFilterImageFilter(this)
  }

  initRawImageFilter (): SkImageFilter {
    return CanvasKitAPI.CanvasKit.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): SkColorFilter
}
