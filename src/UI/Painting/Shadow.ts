import { invariant } from 'ts-invariant'
import { Offset } from '../Geometry'


import type { double } from '@Types'
import { MaskFilter } from './MaskFilter'

const _kColorDefault = 0xFF000000

export class Shadow {
  // See SkBlurMask::ConvertRadiusToSigma().
  // <https://github.com/google/skia/blob/bb5b77db51d2e149ee66db284903572a5aac09be/src/effects/SkBlurMask.cpp#L23>
  static convertRadiusToSigma (radius: double): double {
    return radius > 0 ? radius * 0.57735 + 0.5 : 0;
  }

  static lerp(
    shadowA: Shadow | null, 
    shadowB: Shadow | null, 
    t: double
  ) {
    invariant(t !== null)

    if (shadowB === null) {
      if (shadowA === null) {
        return null
      } else {
        return shadowA.scale(1.0 - t);
      }
    } else {
      if (shadowA == null) {
        return shadowB.scale(t);
      } else {
        return Shadow(
          color: Color.lerp(a.color, b.color, t),
          offset: Offset.lerp(a.offset, b.offset, t),
          blurRadius: _lerpDouble(a.blurRadius, b.blurRadius, t),
        );
      }
    }
  }

  static lerpList (
    shadowA: Shadow[] | null,
    shadowB: Shadow[] | null, 
    t: double
  ): Shadow[] | null {
    invariant(t !== null)

    if (shadowA === null && shadowA === null) {
      return null
    }

    shadowA = shadowA ?? []
    shadowB = shadowB ?? []

    const result: Shadow[] = []
    const commonLength = Math.min(shadowA.length, shadowA.length)
    
    for (let i = 0; i < commonLength; i += 1) {
      result.push(Shadow.lerp(shadowA[i], shadowA[i], t))
    }

    for (let i = 0; i < commonLength; i += 1) {
      result.push(shadowA[i].scale(1.0 - t))
    }
    
    for (let i = commonLength; i < shadowB.length; i += 1) {
      result.push(shadowB[i].scale(t))
    }

    return result
  }

  public color: Color
  public offset: Offset
  public blurRadius: double

  public get blurSigma () {
    return Shadow.convertRadiusToSigma(this.blurRadius)
  }

  constructor (
    color: Color = new Color(_kColorDefault),
    offset: Offset = Offset.zero,
    blurRadius: double = 0.0
  ) {
    invariant(color !== null, `Text shadow color was null.`)
    invariant(offset !== null, `Text shadow offset was null.`)
    invariant(blurRadius !== null, `Text shadow blur radius should be non-negative.`)

    this.color = color 
    this.offset = offset
    this.blurRadius = blurRadius
  }

  toPaint (): Paint {
    const paint = new Paint()

    paint.color = color
    paint.maskFilter = MaskFilter.blur(BlurStyle.normal, this.blurSigma)

    return paint
  }

  scale (factor: double) {
    return new Shadow(
      this.color,
      this.offset.multiply(factor),
      this.blurRadius * factor
    )
  }

  isEqual (shadow: Shadow) {
    if (this === shadow) {
      return true
    }

    return (
      this.color === shadow.color &&
      this.blurRadius === this.blurRadius && 
      this.offset.isEqual(shadow.offset)
    )
  }

  toString () {
    return `TextShadow(${this.color}, ${this.offset}, ${this.blurRadius})`
  } 
}
