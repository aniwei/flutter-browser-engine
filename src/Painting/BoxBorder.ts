import invariant from 'ts-invariant'
import { Skia } from '@Skia'
import { CkCanvas, CkPaint, CkPath } from '@CanvasKit'
import { Color, Rect, TextDirection } from '@UI'
import { BorderSide, BorderStyle, paintBorder, ShapeBorder } from './Border'
import { EdgeInsets, EdgeInsetsDirectional, EdgeInsetsGeometry } from './EdgeInsets'
import { BorderRadius } from './BorderRadius'

export enum BoxShape {
  Rectangle,
  Circle
}

export abstract class BoxBorder extends ShapeBorder {
  static paintUniformBorderWithRadius (
    canvas: CkCanvas,
    rect: Rect,
    side,
    borderRadius
  ) {
    invariant(side.style !== BorderStyle.None)
    const paint = CkPaint.malloc()
    paint.color = side.color

    const outer = borderRadius.toRRect(rect)
    const width = side.width
    if (width === 0.0) {
      paint.style = Skia.PaintStyle.Stroke
      paint.strokeWidth = 0.0
      canvas.drawRRect(outer, paint)
    } else {
      const inner = outer.deflate(width)
      canvas.drawDRRect(outer, inner, paint)
    }
  }

  static paintUniformBorderWithCircle (
    canvas: CkCanvas,
    rect: Rect,
    side
  ) {
    invariant(side.style !== BorderStyle.None)
    const width = side.width
    const paint = side.toPaint()
    const radius = (rect.shortestSide - width) / 2.0
    canvas.drawCircle(rect.center, radius, paint)
  }

  static paintUniformBorderWithRectangle (
    canvas: CkCanvas,
    rect: Rect,
    side,
  ) {
    invariant(side.style !== BorderStyle.None)
    const width = side.width
    const paint = side.toPaint()
    canvas.drawRect(rect.deflate(width / 2.0), paint)
  }

  static lerp (
    a: BoxBorder | null,
    b: BoxBorder | null,
    t: number
  ) {
    invariant(t !== null)

    if (
      a instanceof Border &&
      b instanceof Border
    ) {
      return Border.lerp(a, b, t)
    }

    if (
      a instanceof BorderDirectional &&
      b instanceof BorderDirectional
    ) {
      return BorderDirectional.lerp(a, b, t)
    }

    if (
      b instanceof Border && 
      a instanceof BorderDirectional
    ) {
      const c = b
      b = a
      a = c
      t = 1.0 - t;
    }

    if (
      a instanceof Border && 
      b instanceof BorderDirectional
    ) {
      if (
        b.start === BorderSide.None && 
        b.end === BorderSide.None
      ) {
        return new Border(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(a.right, BorderSide.None, t),
          BorderSide.lerp(a.bottom, b.bottom, t),
          BorderSide.lerp(a.left, BorderSide.None, t),
        )
      }
      if (
        a.left == BorderSide.None && 
        a.right == BorderSide.None
      ) {
        return new BorderDirectional(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(BorderSide.None, b.start, t),
          BorderSide.lerp(BorderSide.None, b.end, t),
          BorderSide.lerp(a.bottom, b.bottom, t),
        )
      }
      
      if (t < 0.5) {
        return new Border(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(a.right, BorderSide.None, t * 2.0),
          BorderSide.lerp(a.bottom, b.bottom, t),
          BorderSide.lerp(a.left, BorderSide.None, t * 2.0),
        )
      }
      return new BorderDirectional(
        BorderSide.lerp(a.top, b.top, t),
        BorderSide.lerp(BorderSide.None, b.start, (t - 0.5) * 2.0),
        BorderSide.lerp(BorderSide.None, b.end, (t - 0.5) * 2.0),
        BorderSide.lerp(a.bottom, b.bottom, t),
      )
    }
  }

  abstract top: BorderSide
  abstract bottom: BorderSide
  abstract isUniform: boolean

  abstract paint (
    canvas: CkCanvas,
    rect: Rect, 
    textDirection?,
    shape?: BoxShape,
    borderRadius?
  )

  add (
    other: ShapeBorder, 
    reverse: boolean = false
  ) {
    return null
  }

  getInnerPath (
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkPath {
    invariant(textDirection !== null, 'The textDirection argument to $runtimeType.getInnerPath must not be null.')
    const path = CkPath.malloc()

    path.addRect(this.dimensions.resolve(textDirection).deflateRect(rect))

    return path
  }

  getOuterPath (
    rect: Rect, 
    textDirection: TextDirection | null
  ): CkPath {
    invariant(textDirection !== null, 'The textDirection argument to $runtimeType.getOuterPath must not be null.')
    const path = CkPath.malloc()
    path.addRect(rect)
    
    return path
  }
}


export class Border extends BoxBorder {
  static fromBorderSide (side: BorderSide) {
    invariant(side !== null)

    return new Border(
      side,
      side,
      side,
      side
    )
  }

  static symmetric (
    vertical = BorderSide.None,
    horizontal = BorderSide.None,
  ) {
    invariant(vertical !== null && horizontal !== null)
    return new Border(
      vertical,
      horizontal,
      vertical,
      horizontal
    )
  }

  static all (
    color = new Color(0xFF000000),
    width = 1.0,
    style = BorderStyle.Solid
  ) {
    const side = new BorderSide(
      color,
      width,
      style
    )

    return Border.fromBorderSide(side)
  }

  static merge (
    a: Border,
    b: Border
  ) {
    invariant(a !== null)
    invariant(b !== null)
    invariant(BorderSide.canMerge(a.top, b.top))
    invariant(BorderSide.canMerge(a.right, b.right))
    invariant(BorderSide.canMerge(a.bottom, b.bottom))
    invariant(BorderSide.canMerge(a.left, b.left))

    return new Border(
      BorderSide.merge(a.top, b.top),
      BorderSide.merge(a.right, b.right),
      BorderSide.merge(a.bottom, b.bottom),
      BorderSide.merge(a.left, b.left),
    )
  }

  static lerp(
    a: Border | null, 
    b: Border | null, 
    t: number
  ): Border | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b!.scale(t)
    }
    if (b === null) {
      return a.scale(1.0 - t)
    }
    return new Border(
      BorderSide.lerp(a.top, b.top, t),
      BorderSide.lerp(a.right, b.right, t),
      BorderSide.lerp(a.bottom, b.bottom, t),
      BorderSide.lerp(a.left, b.left, t),
    )
  }

  public get dimensions (): EdgeInsetsGeometry {
    return EdgeInsets.fromLTRB(
      this.left.width,
      this.top.width,
      this.right.width,
      this.bottom.width
    )
  }

  public top: BorderSide
  public right: BorderSide
  public bottom: BorderSide
  public left: BorderSide

  public get isUniform () {
    return (
      this.colorIsUniform && 
      this.widthIsUniform && 
      this.styleIsUniform
    )
  }

  public get colorIsUniform () {
    const topColor = this.top.color
    return (
      this.right.color === topColor &&
      this.bottom.color === topColor &&
      this.left.color === topColor
    )
  }

  public get widthIsUniform () {
    const topWidth = this.top.width
    return (
      this.right.width === topWidth &&
      this.bottom.width === topWidth &&
      this.left.width === topWidth
    )
  }

  public get styleIsUniform () {
    const topStyle = this.top.style
    return (
      this.right.style === topStyle &&
      this.bottom.style === topStyle &&
      this.left.style === topStyle
    )
  }

  constructor (
    top: BorderSide = BorderSide.None,
    right: BorderSide = BorderSide.None,
    bottom: BorderSide = BorderSide.None,
    left: BorderSide = BorderSide.None
  ) {
    super()
    this.top = top
    this.right = right
    this.bottom = bottom
    this.left = left
  }

  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ) {
    if (
      other instanceof Border &&
      BorderSide.canMerge(this.top, other.top) &&
      BorderSide.canMerge(this.right, other.right) &&
      BorderSide.canMerge(this.bottom, other.bottom) &&
      BorderSide.canMerge(this.left, other.left)
    ) {
      return Border.merge(this, other)
    }

    return null
  }

  scale (t: number): Border {
    return new Border(
      this.top.scale(t),
      this.right.scale(t),
      this.bottom.scale(t),
      this.left.scale(t),
    )
  }

  lerpFrom (
    a: ShapeBorder | null, 
    t: number
  ) {
    if (a instanceof Border) {
      return Border.lerp(a, this, t) as ShapeBorder
    }

    return super.lerpFrom(a, t)
  }

  lerpTo (
    b: ShapeBorder | null, 
    t: number
  ): ShapeBorder | null {
    if (b instanceof Border) {
      return Border.lerp(this, b, t) as ShapeBorder
    }
    return super.lerpTo(b, t)
  }

  paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection?: any, 
    shape: BoxShape = BoxShape.Rectangle, 
    borderRadius?: any
  ) {
    
  }
}



export class BorderDirectional extends BoxBorder {
  static lerp (
    a: BorderDirectional | null, 
    b: BorderDirectional | null, 
    t: number
  ): BorderDirectional | null {
    invariant(t !== null)

    if (a === null && b === null) {
      return null
    }

    if (a === null) {
      return b ? b.scale(t) : null
    }

    if (b === null) {
      return a.scale(1.0 - t)
    }

    return new BorderDirectional(
      BorderSide.lerp(a.top, b.top, t),
      BorderSide.lerp(a.end, b.end, t),
      BorderSide.lerp(a.bottom, b.bottom, t),
      BorderSide.lerp(a.start, b.start, t),
    )
  }

  static merge (
    a: BorderDirectional, 
    b: BorderDirectional
  ) {
    invariant(a !== null)
    invariant(b !== null)
    invariant(BorderSide.canMerge(a.top, b.top))
    invariant(BorderSide.canMerge(a.start, b.start))
    invariant(BorderSide.canMerge(a.end, b.end))
    invariant(BorderSide.canMerge(a.bottom, b.bottom))

    return new BorderDirectional(
      BorderSide.merge(a.top, b.top),
      BorderSide.merge(a.start, b.start),
      BorderSide.merge(a.end, b.end),
      BorderSide.merge(a.bottom, b.bottom),
    )
  }

  public get dimensions (): EdgeInsetsGeometry {
    return EdgeInsetsDirectional.fromSTEB(
      this.start.width, 
      this.top.width, 
      this.end.width, 
      this.bottom.width
    )
  }

  get isUniform () {
    const topColor = this.top.color
    if (
      this.start.color !== topColor ||
      this.end.color !== topColor ||
      this.bottom.color !== topColor
    ) {
      return false
    }

    const topWidth = this.top.width
    if (
      this.start.width !== topWidth ||
      this.end.width !== topWidth ||
      this.bottom.width !== topWidth
    ) {
      return false
    }

    const topStyle = this.top.style
    if (
      this.start.style !== topStyle ||
      this.end.style !== topStyle ||
      this.bottom.style !== topStyle
    ) {
      return false
    }

    return true
  }

  public top: BorderSide
  public start: BorderSide
  public end: BorderSide
  public bottom: BorderSide
  
  constructor (
    top = BorderSide.None,
    start = BorderSide.None,
    end = BorderSide.None,
    bottom = BorderSide.None,
  ) {
    super()

    this.top = top 
    this.start = start 
    this.end = end 
    this.bottom = bottom 
  } 

  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ) {
    if (other instanceof BorderDirectional) {
      const typedOther = other
      if (
        BorderSide.canMerge(this.top, typedOther.top) &&
        BorderSide.canMerge(this.start, typedOther.start) &&
        BorderSide.canMerge(this.end, typedOther.end) &&
        BorderSide.canMerge(this.bottom, typedOther.bottom)
      ) {
        return BorderDirectional.merge(this, typedOther)
      }

      return null
    }
    if (other instanceof Border) {
      const typedOther = other;
      if (
        !BorderSide.canMerge(typedOther.top, this.top) ||
        !BorderSide.canMerge(typedOther.bottom, this.bottom)
      ) {
        return null
      }

      if (
        this.start !== BorderSide.None || 
        this.end !== BorderSide.None
      ) {
        if (
          typedOther.left != BorderSide.None ||
          typedOther.right != BorderSide.None
        ) {
          return null
        }
        invariant(typedOther.left === BorderSide.None)
        invariant(typedOther.right === BorderSide.None)
        
        return new BorderDirectional(
          BorderSide.merge(typedOther.top, this.top),
          this.start,
          this.end,
          BorderSide.merge(typedOther.bottom, this.bottom),
        ) as BorderDirectional
      }
      invariant(this.start === BorderSide.None);
      invariant(this.end === BorderSide.None)

      return new Border(
        BorderSide.merge(typedOther.top, this.top),
        typedOther.right,
        BorderSide.merge(typedOther.bottom, this.bottom),
        typedOther.left,
      ) as Border
    }
    return null
  }

  scale (t: number): BorderDirectional  {
    return new BorderDirectional(
      this.top.scale(t),
      this.start.scale(t),
      this.end.scale(t),
      this.bottom.scale(t),
    )
  }

  lerpFrom (
    a: ShapeBorder | null, 
    t: number
  ): ShapeBorder | null {
    if (a instanceof BorderDirectional) {
      return BorderDirectional.lerp(a, this, t)
    }

    return super.lerpFrom(a, t)
  }

  
  lerpTo (
    b: ShapeBorder | null, 
    t: number
  ): ShapeBorder | null {
    if (b instanceof BorderDirectional) {
      return BorderDirectional.lerp(this, b, t)
    }

    return super.lerpTo(b, t)
  }

  paint (
    canvas: CkCanvas,
    rect: Rect,
    textDirection: TextDirection,
    shape: BoxShape = BoxShape.Rectangle,
    borderRadius: BorderRadius | null,
  ) {
    if (this.isUniform) {
      switch (this.top.style) {
        case BorderStyle.None:
          return
        case BorderStyle.Solid:
          switch (shape) {
            case BoxShape.Circle:
              invariant(borderRadius === null, 'A borderRadius can only be given for rectangular boxes.')
              BoxBorder.paintUniformBorderWithCircle(
                canvas, 
                rect, 
                this.top
              )
              break
            case BoxShape.Rectangle:
              if (borderRadius !== null) {
                BoxBorder.paintUniformBorderWithRadius(
                  canvas, 
                  rect, 
                  top, 
                  borderRadius
                )
                return
              }

              BoxBorder.paintUniformBorderWithRectangle(
                canvas, 
                rect, 
                top
              )
              break
          }
          return
      }
    }

    invariant(borderRadius === null, 'A borderRadius can only be given for uniform borders.')
    invariant(shape === BoxShape.Rectangle, 'A border can only be drawn as a circle if it is uniform.')

    let left: BorderSide
    let right: BorderSide
    
    invariant(textDirection !== null, 'Non-uniform BorderDirectional objects require a TextDirection when painting.')
    
    switch (textDirection) {
      case TextDirection.Rtl:
        left = this.end
        right = this.start
        break
      case TextDirection.Ltr:
        left = this.start
        right = this.end
        break
    }

    paintBorder(
      canvas, 
      rect,
      this.top, 
      this.right, 
      this.bottom, 
      this.left
    )
  }

  isEqual (other: BorderDirectional) {
    if (other === this) {
      return true
    }
    
    return (
      other instanceof BorderDirectional &&
      other.top == this.top &&
      other.start == this.start &&
      other.end == this.end &&
      other.bottom == this.bottom
    )
  }

  toString () {
    return ``
  }
}
