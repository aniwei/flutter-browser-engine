import { CanvasKitAPI } from '@CanvasKitAPI'
import { ManagedSkiaObject } from '../SkiaObjectCache'
import type { 
  SkMaskFilter
} from '@Skia'
import type {
  BlurStyle
} from '@UI'

export class CkMaskFilter extends ManagedSkiaObject<SkMaskFilter> {
  static blur (
    blurStyle: BlurStyle,
    sigma: number
  ) {
    const maskFilter = new CkMaskFilter(blurStyle, sigma)
    return maskFilter
  }

  public blurStyle: BlurStyle
  public sigma: number

  constructor (blurStyle: BlurStyle, sigma: number) {
    super()
    this.blurStyle = blurStyle
    this.sigma = sigma
  }


  createDefault (): SkMaskFilter {
    return this.initSkiaObject()
  }

  resurrect (): SkMaskFilter {
    return this.initSkiaObject()
  } 

  initSkiaObject (): SkMaskFilter  {
    return CanvasKitAPI.CanvasKit.MaskFilter.MakeBlur(
      CanvasKitAPI.toSkBlurStyle(this.blurStyle),
      this.sigma,
      true,
    )
  }

  delete () {
    this.rawSkiaObject?.delete()
  }
}
