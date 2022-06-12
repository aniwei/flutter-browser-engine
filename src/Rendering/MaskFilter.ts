import { Skia, ManagedSkiaObject, SkiaBlurStyle, SkiaMaskFilter } from '@skia'


export type MaskFilterOptions = {
  blurStyle: SkiaBlurStyle,
  sigma: number
}

export class MaskFilter extends ManagedSkiaObject<SkiaMaskFilter> {
  static blur(options: MaskFilterOptions) {
    return new MaskFilter(Skia.MaskFilter.MakeBlur(
      options.blurStyle,
      options.sigma,
      true
    ), options)
  }

  public blurStyle: SkiaBlurStyle
  public sigma: number

  constructor (
    skia: SkiaMaskFilter,
    options: MaskFilterOptions,
  ) {
    super(skia)

    this.blurStyle = options.blurStyle
    this.sigma = options.sigma
  }

  resurrect (): SkiaMaskFilter {
    return Skia.MaskFilter.MakeBlur(
      this.blurStyle,
      this.sigma,
      true
    )
  }

  delete () {
    this.skia?.delete();
  }
}
