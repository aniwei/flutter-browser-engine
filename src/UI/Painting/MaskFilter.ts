import { invariant } from 'ts-invariant'
import { BlurStyle } from '@UI'

export class MaskFilter {
  static blur (
    style: BlurStyle,
    sigma: number,
  ) {
    const maskFilter = new MaskFilter(style, sigma)
    return maskFilter
  }

  public style: BlurStyle
  public sigma: number

  public get webOnlySigma () {
    return this.sigma
  }

  public get webOnlyBlurStyle () {
    return this.style
  }

  constructor (style: BlurStyle, sigma: number) {
    invariant (style !== null)
    invariant (sigma !== null)
    
    this.style = style
    this.sigma = sigma
  }

  isEqual (maskFilter: MaskFilter): boolean {
    if (this === maskFilter) {
      return true
    }

    return (
      this.style === maskFilter.style &&
      this.sigma === maskFilter.sigma
    )
  }

  toString () {
    return `MaskFilter.blur($_style, ${this.sigma.toFixed(1)})`
  }
}
