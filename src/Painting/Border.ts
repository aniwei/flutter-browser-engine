import { CkCanvas, CkPaint, CkPath } from '@CanvasKit'
import { Color, lerpDouble, Rect } from '@UI'
import { Skia } from '@Skia'
import { Paint } from './Paint'
import invariant from 'ts-invariant'

export enum BorderStyle {
  None,
  Solid
}

export abstract class ShapeBorder {
  public dimensions
  
  abstract scale (t: number)

  abstract getOuterPath(
    rect: Rect, 
    textDirection?
  ): CkPath
  
  abstract getInnerPath(
    rect: Rect, 
    textDirection
  ): CkPath 
  
  abstract paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection
  )

  
  toString () {
    return `[Painting ShapeBorder]`
  }
}


export class BorderSide implements Paint {
  static None = new BorderSide(
    new Color(0xFF000000), 
    0, 
    BorderStyle.None
  )

  static merge (
    a: BorderSide,
    b: BorderSide
  ) {
    invariant(a !== null)
    invariant(b !== null)

    return new BorderSide(
      a.color,
      a.width + b.width,
      a.style
    )
  }

  static canMerge (
    a: BorderSide,
    b: BorderSide
  ) {
    invariant(a !== null)
    invariant(b !== null)

    if (
      (a.style === BorderStyle.None && a.width === 0.0) ||
      (b.style == BorderStyle.None && b.width === 0.0)
    ) {
      return true
    }
     
    return (
      a.style == b.style && 
      a.color == b.color
    )
  }

  static lerp (
    a: BorderSide, 
    b: BorderSide, 
    t: number
  ) {
    invariant(a !== null)
    invariant(b !== null)
    invariant(t !== null)

    if (t === 0.0) {
      return a
    }
      
    if (t === 1.0) {
      return b
    }

    const width = lerpDouble(a.width, b.width, t)
    if (width < 0.0) {
      return BorderSide.None
    }
    
    if (a.style === b.style) {
      return new BorderSide(
        Color.lerp(a.color, b.color, t)!,
        width,
        a.style,
      )
    }

    let colorA, colorB

    switch (a.style) {
      case BorderStyle.Solid:
        colorA = a.color
        break
      case BorderStyle.None:
        colorA = a.color.withAlpha(0x00)
        break
    }

    switch (b.style) {
      case BorderStyle.Solid:
        colorB = b.color
        break
      case BorderStyle.None:
        colorB = b.color.withAlpha(0x00)
        break
    }

    return new BorderSide(
      Color.lerp(colorA, colorB, t)!,
      width,
    )
  }

  public width: number = 1.0
  public style: BorderStyle
  public color: Color

  constructor (
    color: Color = new Color(0xFF000000),
    width: number = 1.0,
    style: BorderStyle = BorderStyle.Solid,
  ) {
    this.width = width
    this.style = style
    this.color = color
  }

  copyWith (
    color: Color | null,
    width: number | null,
    style: BorderStyle | null
  ) {
    invariant(width === null || width >= 0)
    return new BorderSide(
      color ?? this.color,
      width ?? this.width,
      style ?? this.style
    )
  }

  scale (t: number) {
    invariant(t !== null)
    return new BorderSide(
      this.color,
      Math.max(0, this.width * t),
      t > 0 ? this.style : BorderStyle.None
    )
  }

  toPaint (): CkPaint {
    const paint = CkPaint.malloc()
    switch (this.style) {
      case BorderStyle.Solid: {
        paint.color = this.color
        paint.strokeWidth = this.width
        paint.style = Skia.PaintStyle.Stroke
        
        break
      }

      case BorderStyle.None: {
        break
      }
    }

    return paint
  }

  isEqual (other: BorderSide) {
    if (this === other) {
      return true
    }

    if (other instanceof BorderSide) {
      return (
        other.color === this.color &&
        other.width === this.width &&
        other.style === this.style
      )
    }
    
    return false
  }

  toString () {
    return `BorderSide(${this.color}, ${this.width}, ${this.style})`
  }
}