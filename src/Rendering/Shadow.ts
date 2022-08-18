import { invariant } from 'ts-invariant'
import { Color } from '@internal/Color'
import { Offset } from '@internal/Geometry'
import { MaskFilter } from './MaskFilter'
import { Paint } from './Paint'
import { Skia } from '@skia/binding'
import { lerpDouble } from '@helper/lerp'

const kColorDefault: number = 0xFF000000

export type ShadowOptions = {
  color: Color
  offset: Offset,
  blurRadius: number
}

export class Shadow {

  static convertRadiusToSigma (radius: number) {
    return radius > 0 ? radius * 0.57735 + 0.5 : 0
  }

  static lerp (
    a: Shadow | null = null, 
    b: Shadow | null = null, 
    t: number
  ): Shadow | null {
    a ??= null
    b ??= null
    invariant(t !== null)
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return a.scale(1.0 - t)
      }
    } else {
      if (a === null) {
        return b.scale(t)
      } else {
        return new Shadow({
          color: Color.lerp(a.color, b.color, t)!,
          offset: Offset.lerp(a.offset, b.offset, t)!,
          blurRadius: lerpDouble(a.blurRadius, b.blurRadius, t),
        })
      }
    }
  }

  static lerpList (
    a: Shadow[] | null = null, 
    b: Shadow[] | null = null, 
    t: number
  ): Shadow[] | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    a ??= []
    b ??= []
    const result: Shadow[] = []
    const commonLength = Math.min(a.length, b.length)
    for (let i = 0; i < commonLength; i += 1) {
      result.push(Shadow.lerp(a[i], b[i], t)!)
    }
    for (let i = commonLength; i < a.length; i += 1) {
      result.push(a[i].scale(1.0 - t))
    }
    for (let i = commonLength; i < b.length; i += 1) {
      result.push(b[i].scale(t));
    }
    return result
  }

  get blurSigma () {
    return Shadow.convertRadiusToSigma(this.blurRadius)
  }

  public color: Color
  public offset: Offset
  public blurRadius: number

  constructor(options: ShadowOptions) {
    invariant(options.color !== null, 'Text shadow color was null.')
    invariant(options.offset !== null, 'Text shadow offset was null.')
    invariant(options.blurRadius >= 0.0, 'Text shadow blur radius should be non-negative.')

    this.color = options.color ?? new Color(kColorDefault)
    this.offset = options.offset ?? Offset.zero
    this.blurRadius = options.blurRadius ?? 0.0
  }
  
  toPaint (): Paint {
    const paint = new Paint()
    
    paint.color = this.color
    paint.maskFilter = MaskFilter.blur({
      blurStyle: Skia.binding.BlurStyle.Normal, 
      sigma: this.blurSigma
    })

    return paint
  }

  scale (factor: number): Shadow {
    return new Shadow({
      color: this.color,
      offset: this.offset.multiply(factor),
      blurRadius: this.blurRadius * factor,
    })
  }

  eq (other: Shadow) {
    if (this === other) {
      return true
    }
    return (
      other instanceof Shadow &&
      other.color === this.color &&
      other.offset === this.offset &&
      other.blurRadius === this.blurRadius
    )
  }

  toString () {
    return `Shadow(${this.color}, ${this.offset}, ${this.blurRadius})`
  }
}
