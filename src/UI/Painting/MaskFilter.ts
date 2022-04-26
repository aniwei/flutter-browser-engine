import { BlurStyle } from 'canvaskit-wasm'
import { invariant } from 'ts-invariant'

import { double, bool } from '@Types'

export class MaskFilter {
  static blur (
    style: BlurStyle,
    sigma: double,
  ) {
    const maskFilter = new MaskFilter(style, sigma)
    return maskFilter
  }

  public style: BlurStyle
  public sigma: double

  constructor (style: BlurStyle, sigma: double) {
    invariant (style !== null)
    invariant (sigma !== null)
    
    this.style = style
    this.sigma = sigma
  }

  isEqual (maskFilter: MaskFilter): bool {
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
