import invariant from 'ts-invariant'
import { lerpInt } from './Lerp'
import { clampInt } from 'src/Shared/Util'
import { clamp } from '@Shared'

export function scaleAlpha (
  a: Color, 
  factor: number
) {
  return a.withAlpha(clampInt(Math.round((a.alpha * factor)), 0, 255))
}

export class Color {
  static fromARGB (
    a: number,
    r: number,
    g: number,
    b: number
  ) {
    const value = (
      ((a & 0xff) << 24) |
      ((r & 0xff) << 16) |
      ((g & 0xff) << 8) |
        ((b & 0xff) << 0)
      ) & 0xFFFFFFFF

    return new Color(value)
  }

  static fromRGBO (
    r: number,
    g: number,
    b: number,
    o: number
  ) {
    const value = (
      (((o * 0xff / 1) & 0xff) << 24) |
      ((r & 0xff) << 16) |
      ((g & 0xff) << 8) |
      ((b & 0xff) << 0)
    ) & 0xFFFFFFFF

    return new Color(value)
  }

  static alphaBlend (
    foreground: Color, 
    background: Color
  ) {
    const alpha = foreground.alpha;
    
    if (alpha === 0x00) {
      return background
    }

    const invAlpha = 0xff - alpha
    let backAlpha = background.alpha

    if (backAlpha == 0xff) {
      return Color.fromARGB(
        0xff,
        Math.floor((alpha * foreground.red + invAlpha * background.red) / 0xff),
        Math.floor((alpha * foreground.green + invAlpha * background.green) / 0xff),
        Math.floor((alpha * foreground.blue + invAlpha * background.blue) / 0xff),
      )
    } else {
      // General case
      backAlpha = Math.floor((backAlpha * invAlpha) / 0xff)
      const outAlpha = alpha + backAlpha
      invariant(outAlpha !== 0x00)
      return Color.fromARGB(
        outAlpha,
        Math.floor((foreground.red * alpha + background.red * backAlpha) / outAlpha),
        Math.floor((foreground.green * alpha + background.green * backAlpha) / outAlpha),
        Math.floor((foreground.blue * alpha + background.blue * backAlpha) / outAlpha),
      );
    }
  }

  // See <https://www.w3.org/TR/WCAG20/#relativeluminancedef>
  static linearizeColorComponent (component: number) {
    if (component <= 0.03928) {
      return component / 12.92
    }
    return Math.pow((component + 0.055) / 1.055, 2.4)
  }

  static getAlphaFromOpacity (opacity: number) {
    invariant(opacity !== null)

    return Math.round((clamp(opacity, 0.0, 1.0) * 255))
  }
  
  public get alpha () {
    return (0xFF000000 & this.value) >> 24
  }
  public get opacity () {
    return this.alpha / 0xFF
  }
  public get red () {
    return (0x00ff0000 & this.value) >> 16;
  }
  public get green () {
    return (0x0000ff00 & this.value) >> 8;
  }
  public get blue () {
    return (0x000000ff & this.value) >> 0;
  }

  public value: number

  constructor (value: number) {
    this.value = value & 0xffffffff
  }

  withAlpha (a: number) {
    return Color.fromARGB(a, this.red, this.green, this.blue)
  }

  withOpacity (opacity: number) {
    return this.withAlpha(Math.round((255.0 * opacity)))
  }

  withRed (r: number) {
    return Color.fromARGB(this.alpha, r, this.green, this.blue)
  }

  withGreen (g: number) {
    return Color.fromARGB(this.alpha, this.red, g, this.blue)
  }

  withBlue (b: number) {
    return Color.fromARGB(this.alpha, this.red, this.green, b)
  }

  computeLuminance () {
    // See <https://www.w3.org/TR/WCAG20/#relativeluminancedef>
    const R = Color.linearizeColorComponent(this.red / 0xFF)
    const G = Color.linearizeColorComponent(this.green / 0xFF)
    const B = Color.linearizeColorComponent(this.blue / 0xFF)
    return 0.2126 * R + 0.7152 * G + 0.0722 * B
  }

  static lerp(
    a: Color | null, 
    b: Color | null, 
    t: number
  ) {
    invariant(t !== null); // ignore: unnecessary_null_comparison
    if (b === null) {
      if (a === null) {
        return null
      } else {
        return scaleAlpha(a, 1.0 - t)
      }
    } else {
      if (a === null) {
        return scaleAlpha(b, t)
      } else {
        return Color.fromARGB(
          clampInt(Math.floor(lerpInt(a.alpha, b.alpha, t)), 0, 255),
          clampInt(Math.floor(lerpInt(a.red, b.red, t)), 0, 255),
          clampInt(Math.floor(lerpInt(a.green, b.green, t)), 0, 255),
          clampInt(Math.floor(lerpInt(a.blue, b.blue, t)), 0, 255),
        );
      }
    }
  }


  isEqual (other: Color) {
    if (other === this) {
      return true
    }
    
    if (other instanceof Color) {
      return this.value = other.value
    }
    return false
  }

  toString () {
    return `Color(${this.value})`
  }
}
