import invariant from 'ts-invariant'
import { lerpDouble } from '@Math'
import { Skia, SkiaBlurStyle } from '@Skia'
import { Color, MaskFilter, Offset, Paint } from '@UI'



export interface IShadow {
  color: Color
  offset: Offset
  blurRadius: number
  blurSigma: number
  toPaint
  scale
}


export class Shadow implements IShadow {
  static kColorDefault = 0xFF000000

  static convertRadiusToSigma (radius: number): number {
    return radius > 0 ? radius * 0.57735 + 0.5 : 0
  }

  static lerp (
    a: Shadow | null, 
    b: Shadow | null, 
    t: number
  ): Shadow | null {
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
        return new Shadow(
          Color.lerp(a.color, b.color, t)!,
          Offset.lerp(a.offset, b.offset, t)!,
          lerpDouble(a.blurRadius, b.blurRadius, t),
        )
      }
    }
  }

  static lerpList(
    a: Shadow[] | null, 
    b: Shadow[] | null, 
    t: number
  ): Shadow[] | null {
    invariant(t != null)
    if (a === null && b === null) {
      return null
    }

    a ??= []
    b ??= []
    const result: Shadow[] =[]
    const commonLength = Math.min(a.length, b.length)
    
    for (let i = 0; i < commonLength; i += 1) {
      result.push(Shadow.lerp(a[i], b[i], t)!)
    }

    for (let i = commonLength; i < a.length; i += 1) {
      result.push(a[i].scale(1.0 - t));
    }

    for (let i = commonLength; i < b.length; i += 1) {
      result.push(b[i].scale(t));
    }

    return result
  }

  public color: Color
  public offset: Offset
  public blurRadius: number

  public get blurSigma () {
    return Shadow.convertRadiusToSigma(this.blurRadius)
  } 

  constructor (
    color: Color = new Color(Shadow.kColorDefault),
    offset: Offset = Offset.zero,
    blurRadius: number = 0.0,
  ) {
    invariant(color !== null, `Text shadow color was null.`)
    invariant(offset !== null, `Text shadow shadow was null.`)
    invariant(blurRadius >= 0.0, `Text shadow blur radius should be non-negative.`)
    
    this.color = color
    this.offset = offset
    this.blurRadius = blurRadius
  }

  toPaint (): Paint {
    const paint = Paint.malloc()
    paint.color = this.color
    paint.maskFilter = MaskFilter.blur({
      blurStyle: Skia.BlurStyle.Normal, 
      sigma: this.blurSigma
    })

    return paint
  }

  scale (factor: number): Shadow  {
    return new Shadow(
      this.color,
      this.offset.multiply(factor),
      this.blurRadius * factor,
    );
  }

  isEqual (other: Shadow) {
    if (this === other) {
      return true
    }

    return (
      other instanceof Shadow &&
      other.color == this.color &&
      other.offset == this.offset &&
      other.blurRadius == this.blurRadius
    )
  }

  toString () {
    return `TextShadow(${this.color}, ${this.offset}, ${this.blurRadius})`
  }
}


export class BoxShadow extends Shadow {
  static lerp(
    a: BoxShadow | null, 
    b: BoxShadow | null, 
    t: number
  ): BoxShadow | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.scale(t)
    }
    if (b === null) {
      return a.scale(1.0 - t);
    }

    return new BoxShadow(
      Color.lerp(a.color, b.color, t)!,
      Offset.lerp(a.offset, b.offset, t)!,
      lerpDouble(a.blurRadius, b.blurRadius, t)!,
      lerpDouble(a.spreadRadius, b.spreadRadius, t)!,
      a.blurStyle === Skia.BlurStyle.Normal ? b.blurStyle : a.blurStyle,
    )
  }  
  
  static lerpList (
    a: BoxShadow[] | null, 
    b: BoxShadow[],
    t: number
  ):  BoxShadow[] | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    a ??= []
    b ??= []
    const commonLength = Math.min(a.length, b.length)

    return []
  }

  public spreadRadius: number
  public blurStyle: SkiaBlurStyle

  constructor (
    color: Color = new Color(0xFF000000),
    offset: Offset = Offset.zero,
    blurRadius: number = 0.0,
    spreadRadius: number = 0.0,
    blurStyle: SkiaBlurStyle = Skia.BlurStyle.Normal,
  ) {
    super(
      color, 
      offset, 
      blurRadius
    )

    this.spreadRadius = spreadRadius
    this.blurStyle = blurStyle
  }

  toPaint (): Paint {
    const result = Paint.malloc()
    result.color = this.color
    result.maskFilter = MaskFilter.blur({
      blurStyle: this.blurStyle, 
      sigma: this.blurSigma
    })
    
    return result
  }

  
  scale (factor: number) {
    return new BoxShadow(
      this.color,
      this.offset.multiply(factor),
      this.blurRadius * factor,
      this.spreadRadius * factor,
      this.blurStyle,
    )
  }

  isEqual (other: BoxShadow) {
    if (other === this) {
      return true
    }

    return (
      other instanceof BoxShadow && 
      other.color === this.color && 
      other.offset === this.offset && 
      other.blurRadius === this.blurRadius && 
      other.spreadRadius === this.spreadRadius && 
      other.blurStyle === this.blurStyle
    )
  }

  toString () {
    return `BoxShadow(${this.color}, ${this.offset}, ${this.blurRadius}, ${this.spreadRadius}, ${this.blurStyle})`
  } 
}
