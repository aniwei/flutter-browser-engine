import { CanvasKitAPI, SkImageFilter, SkColorFilter } from '@Skia'
import { ManagedSkiaObject } from '../../ManagedSkiaObject'


export abstract class CkColorFilter {
  public get imageFilter (): ManagedSkiaObject<SkImageFilter> {
    return new CkColorFilterImageFilter(this)
  }

  initRawImageFilter (): SkImageFilter {
    return CanvasKitAPI.CanvasKit.ImageFilter.MakeColorFilter(this.initRawColorFilter(), null)
  }

  abstract initRawColorFilter (): SkColorFilter
}
