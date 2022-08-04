import { invariant } from 'ts-invariant'
import { Rect } from '@internal/Geometry'
import { Color } from '@internal/Color'
import { Canvas } from '@rendering/Canvas'
import { Path } from '@rendering/Path'
import { Paint } from '@rendering/Paint'
import { listEquals } from '@helper/listEquals'
import { lerpDouble } from '@helper/lerp'
import { Skia, SkiaTextDirection } from '@skia/Skia'
import { EdgeInsets, EdgeInsetsDirectional, EdgeInsetsGeometry } from './EdgeInsets'
import { BorderRadius } from './BorderRadius'

export enum BoxShape {
  Rectangle,
  Circle
}

export enum BorderStyle {
  None,
  Solid
}

export class BorderSide {
  static none = new BorderSide(
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
      return BorderSide.none
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
      return BorderSide.none
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

  toPaint (): Paint {
    const paint = Paint.malloc()

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

  eq (other: BorderSide) {
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
    textDirection: SkiaTextDirection | null
  ): Path
  
  abstract getInnerPath(
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Path 
  
  abstract paint (
    canvas: Canvas, 
    rect: Rect, 
    textDirection: SkiaTextDirection | null,
    BoxShape: BoxShape | null,
    borderRadius: BorderRadius | null
  ): void

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
  /**
   * @description: 
   * @param {ShapeBorder} a
   * @param {ShapeBorder} b
   * @param {number} t
   * @return {*}
   */
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
    }, EdgeInsets.zero)
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
    textDirection: SkiaTextDirection | null
  ) {
    for (let index = 0; index < this.borders.length - 1; index += 1) {
      rect = this.borders[index].dimensions.resolve(textDirection as SkiaTextDirection).deflateRect(rect)
    }
    
    return this.borders[this.borders.length - 1].getInnerPath(rect, textDirection)
  }

  getOuterPath (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ) {
    return this.borders[0].getOuterPath(rect, textDirection)
  }

  paint (
    canvas: Canvas, 
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ) {
    for (const border of this.borders) {
      border.paint(canvas, rect, textDirection, null, null)
      rect = border.dimensions.resolve(textDirection as SkiaTextDirection).deflateRect(rect)
    }
  }

  eq (other: ShapeBorder) {
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

export abstract class BoxBorder extends ShapeBorder {
  static paintUniformBorderWithRadius (
    canvas: Canvas,
    rect: Rect,
    side,
    borderRadius
  ) {
    invariant(side.style !== BorderStyle.None)
    const paint = Paint.malloc()
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
    canvas: Canvas,
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
    canvas: Canvas,
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
  ): BoxBorder | null {
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
        b.start === BorderSide.none && 
        b.end === BorderSide.none
      ) {
        return new Border(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(a.right, BorderSide.none, t),
          BorderSide.lerp(a.bottom, b.bottom, t),
          BorderSide.lerp(a.left, BorderSide.none, t),
        )
      }
      if (
        a.left == BorderSide.none && 
        a.right == BorderSide.none
      ) {
        return new BorderDirectional(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(BorderSide.none, b.start, t),
          BorderSide.lerp(BorderSide.none, b.end, t),
          BorderSide.lerp(a.bottom, b.bottom, t),
        )
      }
      
      if (t < 0.5) {
        return new Border(
          BorderSide.lerp(a.top, b.top, t),
          BorderSide.lerp(a.right, BorderSide.none, t * 2.0),
          BorderSide.lerp(a.bottom, b.bottom, t),
          BorderSide.lerp(a.left, BorderSide.none, t * 2.0),
        )
      }
      return new BorderDirectional(
        BorderSide.lerp(a.top, b.top, t),
        BorderSide.lerp(BorderSide.none, b.start, (t - 0.5) * 2.0),
        BorderSide.lerp(BorderSide.none, b.end, (t - 0.5) * 2.0),
        BorderSide.lerp(a.bottom, b.bottom, t),
      )
    }

    throw new Error(`BoxBorder.lerp can only interpolate Border and BorderDirectional classes.`)
  }

  abstract top: BorderSide
  abstract bottom: BorderSide
  abstract isUniform: boolean

  abstract paint (
    canvas: Canvas,
    rect: Rect, 
    textDirection: SkiaTextDirection | null,
    shape: BoxShape | null,
    borderRadius: BorderRadius | null
  ): void

  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ): ShapeBorder | null {
    return null
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {SkiaTextDirection} textDirection
   * @return {Path}
   */
  getInnerPath (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Path {
    invariant(textDirection !== null, 'The textDirection argument to $runtimeType.getInnerPath must not be null.')
    const path = Path.malloc()

    path.addRect(this.dimensions.resolve(textDirection).deflateRect(rect))

    return path
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {SkiaTextDirection} textDirection
   * @return {Path}
   */
  getOuterPath (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Path {
    invariant(textDirection !== null, 'The textDirection argument to $runtimeType.getOuterPath must not be null.')
    const path = Path.malloc()
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
    vertical = BorderSide.none,
    horizontal = BorderSide.none,
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
    top: BorderSide = BorderSide.none,
    right: BorderSide = BorderSide.none,
    bottom: BorderSide = BorderSide.none,
    left: BorderSide = BorderSide.none
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
    canvas: Canvas, 
    rect: Rect, 
    textDirection: SkiaTextDirection | null, 
    shape: BoxShape | null = BoxShape.Rectangle, 
    borderRadius: BorderRadius | null
  ) {
    if (this.isUniform) {
      switch (this.top.style) {
        case BorderStyle.None: {
          return 
        }

        case BorderStyle.Solid: {
          switch (shape) {
            case BoxShape.Circle: {
              invariant(borderRadius === null, `A borderRadius can only be given for rectangular boxes.`)
              Border.paintUniformBorderWithCircle(
                canvas,
                rect,
                this.top
              )
              break
            }

            case BoxShape.Rectangle: {
              if (borderRadius === null) {
                Border.paintUniformBorderWithRectangle(
                  canvas,
                  rect,
                  this.top
                ) 
              } else {
                Border.paintUniformBorderWithRadius(
                  canvas,
                  rect,
                  this.top,
                  borderRadius
                )  
              }
              
              break
            }
          }
          return
        }
      }
    }

    invariant((() => {
      if (borderRadius !== null) {
        throw new Error(`A borderRadius can only be given for a uniform Border.`)
      }

      return true
    })())

    invariant((() => {
      if (shape !== BoxShape.Rectangle) {
        throw new Error(`A Border can only be drawn as a circle if it is uniform`)
      }

      return true
    })())

    paintBorder(
      canvas,
      rect,
      this.top,
      this.right,
      this.bottom,
      this.left
    )
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
    top = BorderSide.none,
    start = BorderSide.none,
    end = BorderSide.none,
    bottom = BorderSide.none,
  ) {
    super()

    this.top = top 
    this.start = start 
    this.end = end 
    this.bottom = bottom 
  } 

  /**
   * @description: 
   * @param {ShapeBorder} other
   * @param {boolean} reversed
   * @return {*}
   */
  add (
    other: ShapeBorder, 
    reversed: boolean = false
  ): BoxBorder | null {
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
        !this.start.eq(BorderSide.none)|| 
        !this.end.eq(BorderSide.none)
      ) {
        if (
          !typedOther.left.eq(BorderSide.none)||
          !typedOther.right.eq(BorderSide.none)
        ) {
          return null
        }
        invariant(typedOther.left.eq(BorderSide.none))
        invariant(typedOther.right.eq(BorderSide.none))
        
        return new BorderDirectional(
          BorderSide.merge(typedOther.top, this.top),
          this.start,
          this.end,
          BorderSide.merge(typedOther.bottom, this.bottom),
        ) as BorderDirectional
      }
      invariant(this.start.eq(BorderSide.none))
      invariant(this.end.eq(BorderSide.none))

      return new Border(
        BorderSide.merge(typedOther.top, this.top),
        typedOther.right,
        BorderSide.merge(typedOther.bottom, this.bottom),
        typedOther.left,
      )
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

  /**
   * @description: 
   * @param {Canvas} canvas
   * @param {Rect} rect
   * @param {SkiaTextDirection} textDirection
   * @param {BoxShape} shape
   * @param {BorderRadius} borderRadius
   * @return {*}
   */
  paint (
    canvas: Canvas,
    rect: Rect,
    textDirection: SkiaTextDirection | null,
    shape: BoxShape | null = BoxShape.Rectangle,
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
      case Skia.TextDirection.RTL:
        left = this.end
        right = this.start
        break
      case Skia.TextDirection.LTR:
      default: 
        left = this.start
        right = this.end
        break
    }

    paintBorder(
      canvas, 
      rect,
      this.top, 
      right, 
      this.bottom, 
      left
    )
  }

  eq (other: BorderDirectional) {
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
    return `[Painting BorderDirectional]`
  }
}



/**
 * @description: 描绘边框
 * @param {Canvas} canvas
 * @param {Rect} rect
 * @param {BorderSide} top
 * @param {BorderSide} right
 * @param {BorderSide} bottom
 * @param {BorderSide} left
 * @return {void}
 */
 export function paintBorder (
  canvas: Canvas,
  rect: Rect, 
  top: BorderSide = BorderSide.none,
  right: BorderSide = BorderSide.none,
  bottom: BorderSide = BorderSide.none,
  left: BorderSide = BorderSide.none,
): void {
  invariant(canvas !== null)
  invariant(rect !== null)
  invariant(top !== null)
  invariant(right !== null)
  invariant(bottom !== null)
  invariant(left !== null)

  const paint = Paint.malloc()
  paint.strokeWidth = 0.0

  const path = Path.malloc()

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