import invariant from 'ts-invariant'
import { listEquals } from '@Math'
import { VoidCallback } from '@Platform'
import { Skia, SkiaBlendMode, SkiaTextDirection } from '@Skia'
import { Canvas, Path, Color, Offset, Rect, Size, Paint } from '@UI'
import { BorderRadiusGeometry } from './BorderRadius'
import { BoxBorder, BoxShape } from './BoxBorder'
import { BoxShadow } from './BoxShadow'
import { EdgeInsetsGeometry } from './EdgeInsets'
import { ImageConfiguration } from './ImageProvider'
import { BoxPainter, Decoration } from './Decoration'
import { Gradient } from './Gradient'

export type BoxDecorationInitOptions = {
  color?: Color | null,
  image?: null,
  border?: BoxBorder | null
  borderRadius?: BorderRadiusGeometry | null
  boxShadow?: BoxShadow[] | null
  gradient?: Gradient | null
  backgroundBlendMode?: SkiaBlendMode | null
  shape?: BoxShape | null
}

export type BoxDecorationCopyOptions = BoxDecorationInitOptions

export class BoxDecoration extends Decoration {
  static lerp (
    a: BoxDecoration | null, 
    b: BoxDecoration | null, 
    t: number
  ): BoxDecoration | null {
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
    if (t === 0.0) {
      return a
    }
    if (t === 1.0) {
      return b
    }
    return new BoxDecoration({
      color: Color.lerp(a.color, b.color, t),
      image: t < 0.5 ? a.image : b.image, // TODO(ianh): cross-fade the image
      border: BoxBorder.lerp(a.border, b.border, t),
      borderRadius: BorderRadiusGeometry.lerp(a.borderRadius, b.borderRadius, t),
      boxShadow: BoxShadow.lerpList(a.boxShadow!, b.boxShadow!, t),
      shape: t < 0.5 ? a.shape : b.shape,
    })
  }


  public color: Color | null
  public image // @TODO
  public border: BoxBorder | null
  public borderRadius: BorderRadiusGeometry | null
  public boxShadow: BoxShadow[] | null
  public gradient: Gradient | null
  public backgroundBlendMode: SkiaBlendMode | null
  public shape: BoxShape | null

  public get padding () : EdgeInsetsGeometry | null {
    return this.border ? this.border.dimensions : null
  }

  public get isComplex () {
    return this.boxShadow !== null
  } 

  constructor (options: BoxDecorationInitOptions = {}) {
    super()
    options.color = options.color ?? null
    options.image = options.image ?? null
    options.border = options.image ?? null
    options.borderRadius = options.borderRadius ?? null
    options.boxShadow = options.boxShadow ?? null
    options.gradient = options.gradient ?? null
    options.backgroundBlendMode = options.backgroundBlendMode ?? null
    options.shape = options.shape ?? BoxShape.Rectangle,

    invariant(options.shape !== null)
    invariant(
      options.backgroundBlendMode === null || 
      options.color !== null || 
      options.gradient !== null,
      `backgroundBlendMode applies to BoxDecoration's background color or gradient, but no color or gradient was provided.`,
    )

    this.color = options.color
    // @TODO
    this.image = options.image
    this.border = options.border
    this.borderRadius = options.borderRadius
    this.boxShadow = options.boxShadow
    this.gradient = options.gradient
    this.backgroundBlendMode = options.backgroundBlendMode
    this.shape = options.shape
  }

  copyWith (options: BoxDecorationCopyOptions): BoxDecoration  {
    return new BoxDecoration({
      color: options.color ?? this.color,
      image: options.image ?? this.image,
      border: options.border ?? this.border,
      borderRadius: options.borderRadius ?? this.borderRadius,
      boxShadow: options.boxShadow ?? this.boxShadow,
      gradient: options.gradient ?? this.gradient,
      backgroundBlendMode: options.backgroundBlendMode ?? this.backgroundBlendMode,
      shape: options.shape ?? this.shape,
    })
  }

  debugAssertIsValid (): boolean {
    invariant(this.shape !== BoxShape.Circle || this.borderRadius === null)
    return super.debugAssertIsValid()
  }

  getClipPath (
    rect: Rect, 
    textDirection: SkiaTextDirection
  ): Path {
    const path = Path.malloc()
    switch (this.shape) {
      case BoxShape.Circle: {
        const center = rect.center
        const radius = rect.shortestSide / 2.0
        const square = Rect.fromCircle(center, radius)
        path.addOval(square)
        break
      }
      case BoxShape.Rectangle: {
        if (this.borderRadius !== null) {
          path.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect))
          return path
        }
        path.addRect(rect)
        break
      }
    }

    return path
  }

  scale (factor: number): BoxDecoration {
    return new BoxDecoration({
      color: Color.lerp(null, this.color, factor),
      image: this.image, 
      border: BoxBorder.lerp(null, this.border, factor),
      borderRadius: BorderRadiusGeometry.lerp(null, this.borderRadius, factor),
      boxShadow: BoxShadow.lerpList(null, this.boxShadow!, factor),
      gradient: this.gradient?.scale(factor),
      shape: this.shape,
    })
  }

  lerpFrom (
    a: Decoration | null, 
    t: number
  ): BoxDecoration | null {
    if (a === null) {
      return this.scale(t)
    }

    if (a instanceof BoxDecoration) {
      return BoxDecoration.lerp(a, this, t)
    }

    return super.lerpFrom(a, t) as BoxDecoration
  }

  lerpTo (
    b: Decoration | null, 
    t: number
  ): BoxDecoration | null {
    if (b === null) {
      return this.scale(1.0 - t)
    }

    if (b instanceof BoxDecoration) {
      return BoxDecoration.lerp(this, b, t)
    }

    return super.lerpTo(b, t) as BoxDecoration
  }

  isEqual (other: BoxDecoration) {
    if (other === this) {
      return this
    }
    
    return (
      other instanceof BoxDecoration &&
      other.color?.isEqual(this.color!) &&
      other.image === this.image &&
      other.border === this.border &&
      other.borderRadius?.isEqual(this.borderRadius) &&
      listEquals<BoxShadow>(other.boxShadow, this.boxShadow) &&
      other.gradient == this.gradient &&
      other.shape == this.shape
    )
  }

  hitTest (
    size: Size, 
    position: Offset , 
    textDirection: SkiaTextDirection
  ): boolean {
    invariant(this.shape !== null)
    invariant((Offset.Zero.and(size)).contains(position))

    switch (this.shape) {
      case BoxShape.Rectangle: {
        if (this.borderRadius !== null) {
          const bounds = this.borderRadius!.resolve(textDirection).toRRect(Offset.Zero.and(size))
          return bounds.contains(position)
        }
        return true
      }
      case BoxShape.Circle: {
        const center = size.center(Offset.Zero)
        const distance = position.subtract(center).distance
        return distance <= Math.min(size.width, size.height) / 2.0
      }
    }
  }

  createBoxPainter (onChanged: VoidCallback | null): BoxPainter  {
    invariant(onChanged !== null || this.image === null)
    return new BoxDecorationPainter(this, onChanged)
  }
}

export class BoxDecorationPainter extends BoxPainter {
  public decoration: BoxDecoration
  public cachedBackgroundPaint: Paint | null = null
  public rectForCachedBackgroundPaint: Rect | null = null
  // public imagePainter: DecorationImagePainter | null = null

  constructor (
    dectoration,
    onChanged,
  ) {
    super(onChanged)
    this.decoration = dectoration
  }
  
  getBackgroundPaint (
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ): Paint {
    invariant(rect !== null)
    invariant(
      this.decoration!.gradient !== null || 
      this.rectForCachedBackgroundPaint === null
    )

    if (
      this.cachedBackgroundPaint === null ||
      (
        this.decoration.gradient !== null && 
        this.rectForCachedBackgroundPaint !== rect
      )
    ) {
      const paint = Paint.malloc()
      if (this.decoration.backgroundBlendMode !== null) {
        paint.blendMode = this.decoration!.backgroundBlendMode!
      }

      if (this.decoration.color !== null) {
        paint.color = this.decoration!.color!
      }
      if (this.decoration.gradient !== null) {
        paint.shader = this.decoration!.gradient!.createShader(
          rect, 
          textDirection
        )
        this.rectForCachedBackgroundPaint = rect
      }
      this.cachedBackgroundPaint = paint
    }

    return this.cachedBackgroundPaint!
  }

  paintBox (
    canvas: Canvas, 
    rect: Rect , 
    paint: Paint, 
    textDirection: SkiaTextDirection
  ) {
    switch (this.decoration!.shape) {
      case BoxShape.Circle: {
        invariant(this.decoration.borderRadius === null)

        const center = rect.center
        const radius = rect.shortestSide / 2.0
        canvas.drawCircle(center, radius, paint)
        break
      }
      case BoxShape.Rectangle: {
        if (this.decoration.borderRadius === null) {
          canvas.drawRect(rect, paint)
        } else {
          canvas.drawRRect(this.decoration.borderRadius!.resolve(textDirection).toRRect(rect), paint)
        }
        break
      }
    }
  }

  paintShadows (
    canvas: Canvas , 
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ) {
    if (this.decoration.boxShadow === null) {
      return
    }

    for (const boxShadow of this.decoration.boxShadow!) {
      const paint = boxShadow.toPaint()
      const bounds = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius)
      this.paintBox(canvas, bounds, paint, textDirection!)
    }
  }

  paintBackgroundColor (
    canvas: Canvas, 
    rect: Rect, 
    textDirection: SkiaTextDirection | null
  ) {
    if (
      this.decoration.color !== null || 
      this.decoration.gradient !== null
    ) {
      this.paintBox(canvas, rect, this.getBackgroundPaint(rect, textDirection), textDirection!)
    }
  }

  // @TODO
  // paintBackgroundImage (
  //   canvas: Canvas, 
  //   rect: Rect, 
  //   configuration: ImageConfiguration
  // ) {
  //   if (this.decoration.image == null) {
  //     return
  //   }
  //   this.imagePainter ??= this.decoration.image!.createPainter(this.onChanged!)
  //   let clipPath: Path | null
  //   switch (this.decoration.shape) {
  //     case BoxShape.Circle: {
  //       invariant(this.decoration.borderRadius === null)
  //       const center = rect.center
  //       const radius = rect.shortestSide / 2.0
  //       const square = Rect.fromCircle(center, radius)
  //       clipPath = Path.malloc()
  //       clipPath.addOval(square)
  //       break
  //     }

  //     case BoxShape.Rectangle: {
  //       if (this.decoration.borderRadius !== null) {
  //         clipPath = Path.malloc()
  //         clipPath.addRRect(this.decoration.borderRadius!.resolve(configuration.textDirection).toRRect(rect))
  //       }
  //       break
  //     }
  //   }
    
  //   this.imagePainter!.paint(canvas, rect, clipPath!, configuration)
  // }

  // dispose () {
  //   this.imagePainter?.dispose()
  //   super.dispose()
  // }

  paint (
    canvas: Canvas, 
    offset: Offset, 
    configuration: ImageConfiguration
  ) {
    invariant(configuration !== null)
    invariant(configuration.size !== null)

    const rect = offset.and(configuration.size)
    const textDirection = configuration.textDirection
    
    this.paintShadows(canvas, rect, textDirection)
    this.paintBackgroundColor(canvas, rect, textDirection)
    // this.paintBackgroundImage(canvas, rect, configuration)
    
    this.decoration.border?.paint(
      canvas,
      rect,
      configuration.textDirection,
      this.decoration.shape,
      this.decoration.borderRadius?.resolve(textDirection)!,
    )
  }

  toString () {
    return `BoxPainter for ${this.decoration}`
  }
}
