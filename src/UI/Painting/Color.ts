import { clamp } from '@Shared';
import { invariant } from 'ts-invariant'
import { scaleAlpha } from '.'

export class Color {
  // See <https://www.w3.org/TR/WCAG20/#relativeluminancedef>
  static _linearizeColorComponent (component: number) {
    if (component <= 0.03928) {
      return component / 12.92;
    }
    return Math.pow((component + 0.055) / 1.055, 2.4)
  }

  static getAlphaFromOpacity (opacity: number) {
    invariant(opacity !== null)
    
    return Math.round(clamp(opacity, 0.0, 1.0) * 255)
  }

  static lerp (
    a: Color | null, 
    b: Color | null, 
    t: number
  ) {
    invariant(t !== null)

    if (b === null) {
      if (a === null) {
        return null
      } else {
        return scaleAlpha(a, 1.0 - t);
      }
    } else {
      if (a === null) {
        return scaleAlpha(b, t);
      } else {
        // return Color.fromARGB(
        //   clamp(_lerpInt(a.alpha, b.alpha, t).toInt(), 0, 255),
        //   clamp(_lerpInt(a.red, b.red, t).toInt(), 0, 255),
        //   clamp(_lerpInt(a.green, b.green, t).toInt(), 0, 255),
        //   clamp(_lerpInt(a.blue, b.blue, t).toInt(), 0, 255),
        // );
      }
    }
  }

  alphaBlend (
    foreground: Color, 
    background: Color
  ) {
    const alpha = foreground.alpha;
    if (alpha === 0x00) {
      // Foreground completely transparent.
      return background;
    }

    const invAlpha = 0xff - alpha
    let backAlpha = background.alpha

    if (backAlpha === 0xff) {
      // Opaque background case
      return Color.fromARGB(
        0xff,
        Math.floor((alpha * foreground.red + invAlpha * background.red) / 0xff),
        Math.floor((alpha * foreground.green + invAlpha * background.green) / 0xff),
        Math.floor((alpha * foreground.blue + invAlpha * background.blue) / 0xff),
      );
    } else {
      // General case
      backAlpha = Math.floor((backAlpha * invAlpha) / 0xff)
      const outAlpha = alpha + backAlpha;
      
      invariant(outAlpha !== 0x00)

      return Color.fromARGB(
        outAlpha,
        Math.floor((foreground.red * alpha + background.red * backAlpha) / outAlpha),
        Math.floor((foreground.green * alpha + background.green * backAlpha) / outAlpha),
        Math.floor((foreground.blue * alpha + background.blue * backAlpha) / outAlpha),
      );
    }
  }

  static fromARGB (a: number, r: number, g: number, b: number) {
    const value = (
      (((a & 0xff) << 24) |
      ((r & 0xff) << 16) |
      ((g & 0xff) << 8) |
      ((b & 0xff) << 0)) & 
      0xFFFFFFFF
    )

    const color = new Color(value)
    return color
  }

  static fromRGBO (r: number, g: number, b: number, opacity: number) {
    const value = (
      (((Math.floor(opacity * 0xff / 1) & 0xff) << 24) |
      ((r & 0xff) << 16) |
      ((g & 0xff) << 8) |
      ((b & 0xff) << 0)) &
      0xFFFFFFFF
    )

    const color = new Color(value)
    return color
  }

  public value: number = 0
  public get alpha () {
    return (0xff000000 & this.value) >> 24
  }

  public get red () {
    return (0x00ff0000 & this.value) >> 16
  }

  public get green () {
    return (0x0000ff00 & this.value) >> 8
  }

  public get blue () {
    return (0x000000ff & this.value) >> 0
  }

  public get opacity () {
    return this.alpha / 0xff
  }

  constructor (value?: number) {
    if (typeof value === 'number') {
      this.value = value & 0xFFFFFFFF
    }
  }

  withAlpha(a: number) {
    return Color.fromARGB(a, this.red, this.green, this.blue)
  }

  withOpacity (opacity: number) {
    invariant(opacity >= 0 && opacity <= 1)
    return this.withAlpha(Math.round(255.0 * opacity))
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
    const R = Color._linearizeColorComponent(this.red / 0xFF);
    const G = Color._linearizeColorComponent(this.green / 0xFF);
    const B = Color._linearizeColorComponent(this.blue / 0xFF);
    
    return 0.2126 * R + 0.7152 * G + 0.0722 * B
  }

  isEqual (color: Color) {
    if (color === this) {
      return true
    }

    return this.value === color.value
  }
  
  toString() {
    return ``
  }
}
