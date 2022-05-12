import { invariant } from 'ts-invariant'
import { TextDirection } from 'canvaskit-wasm'
import { CkCanvas, CkPaint, CkPath } from '@CanvasKit'
import { Color, Rect } from '@UI'
import { Skia } from '@Skia'
import { lerpDouble, listEquals } from '@Math'
import { Paint } from './Paint'
import { EdgeInsets, EdgeInsetsGeometry } from './EdgeInsets'

export enum BorderStyle {
  None,
  Solid
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

    const aIsNone = a.style === BorderStyle.None && a.width === 0.0
    const bIsNone = b.style === BorderStyle.None && b.width === 0.0

    if (aIsNone && bIsNone) {
      return BorderSide.None
    }
    if (aIsNone) {
      return b
    }
    if (bIsNone) {
      return a
    }
    
    invariant(a.color === b.color)
    invariant(a.style === b.style)

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

    let colorA: Color
    let colorB: Color

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
    invariant(color !== null)
    invariant(width !== null)
    invariant(width >= 0.0)
    invariant(style !== null)

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
        paint.color = new Color(0x00000000)
        paint.strokeWidth = 0.0
        paint.style = Skia.PaintStyle.Stroke
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

export abstract class ShapeBorder {
  static lerp(
    a: ShapeBorder | null, 
    b: ShapeBorder | null, 
    t: number
  ): ShapeBorder | null {
    invariant(t !== null)

    let result: ShapeBorder | null = null

    if (b !== null) {
      result = b.lerpFrom(a, t)
    }
    if (result === null && a !== null) {
      result = a.lerpTo(b, t)
    }

    return result ?? (t < 0.5 ? a : b)
  }


  abstract dimensions: EdgeInsetsGeometry
  
  abstract getOuterPath(
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkPath
  
  abstract getInnerPath(
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkPath 
  
  abstract paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection: TextDirection | null
  )

  abstract scale (t: number)

  // @sTODO
  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ): ShapeBorder | null {
    return null
  }

  lerpFrom (a: ShapeBorder | null, t: number) {
    if (a === null) {
      return this.scale(t)
    }

    return null
  }

  lerpTo (b: ShapeBorder | null, t: number) {
    if (b === null) {
      return this.scale(1.0 - t)
    }

    return null
  }
  
  toString () {
    return `[Painting ShapeBorder]`
  }
}

export abstract class OutlinedBorder extends ShapeBorder {
  public side: BorderSide

  constructor (side: BorderSide) {
    super()

    invariant(side !== null)
    this.side = side
  }
   
  abstract copyWith (side: BorderSide | null): OutlinedBorder
}

export class CompoundBorder extends ShapeBorder {
  static lerp(
    a: ShapeBorder | null, 
    b: ShapeBorder | null, 
    t: number
  ) {
    invariant(t !== null)
    invariant(a instanceof CompoundBorder || b instanceof CompoundBorder)
    
    const aList: (ShapeBorder | null)[] = a instanceof CompoundBorder ? a.borders : [a]
    const bList: (ShapeBorder | null)[] = b instanceof CompoundBorder ? b.borders : [b]

    const results: ShapeBorder[] = []

    const length = Math.max(aList.length, bList.length)

    for (let index = 0; index < length; index += 1) {
      const localA = index < aList.length ? aList[index] : null
      const localB = index < bList.length ? bList[index] : null

      if (localA !== null && localB !== null) {
        const localResult = localA.lerpTo(localB, t) ?? localB.lerpFrom(localA, t)
        if (localResult !== null) {
          results.push(localResult)
          continue
        }
      }
      
      if (localB !== null) {
        results.push(localB.scale(t))
      }
      if (localA !== null) {
        results.push(localA.scale(1.0 - t))
      }
    }
    return new CompoundBorder(results)
  }

  public borders: ShapeBorder[]

  get dimensions () : EdgeInsetsGeometry {
    return this.borders.reduce((
      previousValue: EdgeInsetsGeometry, 
      border: ShapeBorder
    ) => {
      return previousValue.add(border.dimensions);
    }, EdgeInsets.Zero)
  }


  constructor (borders: ShapeBorder[]) {
    super()

    invariant(borders !== null)
    invariant(borders.length >= 2)
    invariant(!borders.every((border: ShapeBorder) => border instanceof CompoundBorder))

    this.borders = borders
  }
  
  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ) {
    if (!(other instanceof CompoundBorder)) {
      const ours = reversed ? 
        this.borders[this.borders.length - 1] : 
        this.borders[0]

      const merged = ours.add(other, reversed) ?? other.add(ours, !reversed)
      
      if (merged !== null) {
        const result: ShapeBorder[] = [...this.borders]
        result[reversed ? result.length - 1 : 0] = merged
        return new CompoundBorder(result)
      }
    }

    const mergedBorders: ShapeBorder[] = [ 
      ...(reversed ? this.borders : []),
      ...(other instanceof CompoundBorder ? other.borders : [other]),
      ...(reversed ? [] : this.borders),
    ] 

    return new CompoundBorder(mergedBorders)
  }

  scale (t: number) {
    return new CompoundBorder(
      this.borders.map((border: ShapeBorder) => border.scale(t))
    )
  }

  lerpFrom (
    a: ShapeBorder | null, 
    t: number
  ) {
    return CompoundBorder.lerp(
      a, 
      this, 
      t
    )
  }

  lerpTo (
    b: ShapeBorder | null, 
    t: number
  ) {
    return CompoundBorder.lerp(
      this, 
      b, 
      t
    )
  }

  getInnerPath (
    rect: Rect, 
    textDirection: TextDirection | null
  ) {
    for (let index = 0; index < this.borders.length - 1; index += 1) {
      rect = this.borders[index].dimensions.resolve(textDirection as TextDirection).deflateRect(rect)
    }
    
    return this.borders[this.borders.length - 1].getInnerPath(rect, textDirection)
  }

  getOuterPath (
    rect: Rect, 
    textDirection: TextDirection | null
  ) {
    return this.borders[0].getOuterPath(rect, textDirection)
  }

  paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection: TextDirection | null
  ) {
    for (const border of this.borders) {
      border.paint(canvas, rect, textDirection)
      rect = border.dimensions.resolve(textDirection as TextDirection).deflateRect(rect)
    }
  }

  isEqual (other: ShapeBorder) {
    if (other === this) {
      return true
    }
    
    return (
      other instanceof CompoundBorder && 
      listEquals<ShapeBorder>(other.borders, this.borders)
    )
  }

  toString () {
    return ``
  }
}


export function paintBorder (
  canvas: CkCanvas,
  rect: Rect, 
  top: BorderSide = BorderSide.None,
  right: BorderSide = BorderSide.None,
  bottom: BorderSide = BorderSide.None,
  left: BorderSide = BorderSide.None,
) {
  invariant(canvas !== null)
  invariant(rect !== null)
  invariant(top !== null)
  invariant(right !== null)
  invariant(bottom !== null)
  invariant(left !== null)

  const paint = CkPaint.malloc()
  paint.strokeWidth = 0.0

  const path = CkPath.malloc()

  switch (top.style) {
    case BorderStyle.Solid: {
      paint.color = top.color
      path.reset()

      path.moveTo(rect.left, rect.top)
      path.lineTo(rect.right, rect.top)

      if (top.width == 0.0) {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style =  Skia.PaintStyle.Fill
        path.lineTo(rect.right - right.width, rect.top + top.width)
        path.lineTo(rect.left + left.width, rect.top + top.width)
      }
      canvas.drawPath(path, paint)
      break
    }
    case BorderStyle.None:
      break
  }

  switch (right.style) {
    case BorderStyle.Solid: {

      paint.color = right.color
      path.reset()
      path.moveTo(rect.right, rect.top)
      path.lineTo(rect.right, rect.bottom)
      
      if (right.width === 0.0)  {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style = Skia.PaintStyle.Fill
        path.lineTo(rect.right - right.width, rect.bottom - bottom.width)
        path.lineTo(rect.right - right.width, rect.top + top.width)
      }
      
      canvas.drawPath(path, paint)
      break
    }
    case BorderStyle.None:
      break
  }

  switch (bottom.style) {
    case BorderStyle.Solid:
      paint.color = bottom.color
      path.reset()
      path.moveTo(rect.right, rect.bottom)
      path.lineTo(rect.left, rect.bottom)
      if (bottom.width == 0.0) {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style = Skia.PaintStyle.Fill
        path.lineTo(rect.left + left.width, rect.bottom - bottom.width)
        path.lineTo(rect.right - right.width, rect.bottom - bottom.width)
      }
      canvas.drawPath(path, paint)
      break
    case BorderStyle.None:
      break
  }

  switch (left.style) {
    case BorderStyle.Solid:
      paint.color = left.color
      path.reset()
      path.moveTo(rect.left, rect.bottom)
      path.lineTo(rect.left, rect.top)
      if (left.width == 0.0) {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style = Skia.PaintStyle.Fill
        path.lineTo(rect.left + left.width, rect.top + top.width)
        path.lineTo(rect.left + left.width, rect.bottom - bottom.width)
      }
      canvas.drawPath(path, paint)
      break
    case BorderStyle.None:
      break
  }
}