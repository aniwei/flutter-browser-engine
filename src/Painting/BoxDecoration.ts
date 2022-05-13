import invariant from 'ts-invariant'
import { CkCanvas, CkPath } from '@CanvasKit'
import { Color, Offset, Rect } from '@UI'
import { BlendMode } from 'canvaskit-wasm'
import { BorderRadiusGeometry } from './BorderRadius'
import { BoxBorder, BoxShape } from './BoxBorder'
import { BoxShadow } from './BoxShadow'
import { EdgeInsetsGeometry } from './EdgeInsets'
import { ImageConfiguration } from './ImageProvider'
import { Decoration } from './Decoration'

export class BoxDecoration extends Decoration {
  public color: Color | null
  public image: DecorationImage | null
  public border: BoxBorder | null
  public borderRadius: BorderRadiusGeometry | null
  public boxShadow: BoxShadow[] | null
  public gradient: Gradient | null
  public backgroundBlendMode: BlendMode | null
  public shape: BoxShape

  public get padding () : EdgeInsetsGeometry | null {
    return this.border ? this.border.dimensions : null
  }

  
  public get isComplex () {
    return this.boxShadow !== null
  } 

  constructor (
    color,
    image,
    border,
    borderRadius,
    boxShadow,
    gradient,
    backgroundBlendMode,
    shape = BoxShape.Rectangle,
  ) {
    super()

    invariant(shape !== null)
    invariant(
      backgroundBlendMode === null || 
      color !== null || 
      gradient !== null,
      `backgroundBlendMode applies to BoxDecoration's background color or gradient, but no color or gradient was provided.`,
    )

    this.color = color
    this.image = image
    this.border = border
    this.borderRadius = borderRadius
    this.boxShadow = boxShadow
    this.gradient = gradient
    this.backgroundBlendMode = backgroundBlendMode
    this.shape = shape
  }

  copyWith(
    color,
    image,
    border,
    borderRadius,
    boxShadow,
    gradient,
    backgroundBlendMode,
    shape,
  ): BoxDecoration  {
    return new BoxDecoration(
      color ?? this.color,
      image ?? this.image,
      border ?? this.border,
      borderRadius ?? this.borderRadius,
      boxShadow ?? this.boxShadow,
      gradient ?? this.gradient,
      backgroundBlendMode ?? this.backgroundBlendMode,
      shape ?? this.shape,
    )
  }

  debugAssertIsValid (): boolean {
    invariant(this.shape !== BoxShape.Circle || this.borderRadius === null)
    return super.debugAssertIsValid()
  }

  getClipPath (
    rect: Rect, 
    textDirection: TextDirection
  ): CkPath {
    switch (this.shape) {
      case BoxShape.Circle:
        const center = rect.center
        const radius = rect.shortestSide / 2.0
        const square = Rect.fromCircle(center, radius)
        const path = CkPath.malloc()
        path.addOval(square)
        return path
      case BoxShape.Rectangle:
        const path = CkPath.malloc()
        if (this.borderRadius !== null) {
          path.addRRect(this.borderRadius.resolve(textDirection).toRRect(rect))
          return path
        }
        path.addRect(rect)
        return path
    }
  }

  scale (factor: number): BoxDecoration {
    return new BoxDecoration(
      Color.lerp(null, this.color, factor),
      this.image, 
      BoxBorder.lerp(null, this.border, factor),
      BorderRadiusGeometry.lerp(null, this.borderRadius, factor),
      BoxShadow.lerpList(null, this.boxShadow, factor),
      this.gradient?.scale(factor),
      this.shape,
    );
  }

  @override
  BoxDecoration? lerpFrom(Decoration? a, double t) {
    if (a == null)
      return scale(t);
    if (a is BoxDecoration)
      return BoxDecoration.lerp(a, this, t);
    return super.lerpFrom(a, t) as BoxDecoration?;
  }

  @override
  BoxDecoration? lerpTo(Decoration? b, double t) {
    if (b == null)
      return scale(1.0 - t);
    if (b is BoxDecoration)
      return BoxDecoration.lerp(this, b, t);
    return super.lerpTo(b, t) as BoxDecoration?;
  }

  /// Linearly interpolate between two box decorations.
  ///
  /// Interpolates each parameter of the box decoration separately.
  ///
  /// The [shape] is not interpolated. To interpolate the shape, consider using
  /// a [ShapeDecoration] with different border shapes.
  ///
  /// If both values are null, this returns null. Otherwise, it returns a
  /// non-null value. If one of the values is null, then the result is obtained
  /// by applying [scale] to the other value. If neither value is null and `t ==
  /// 0.0`, then `a` is returned unmodified; if `t == 1.0` then `b` is returned
  /// unmodified. Otherwise, the values are computed by interpolating the
  /// properties appropriately.
  ///
  /// {@macro dart.ui.shadow.lerp}
  ///
  /// See also:
  ///
  ///  * [Decoration.lerp], which can interpolate between any two types of
  ///    [Decoration]s, not just [BoxDecoration]s.
  ///  * [lerpFrom] and [lerpTo], which are used to implement [Decoration.lerp]
  ///    and which use [BoxDecoration.lerp] when interpolating two
  ///    [BoxDecoration]s or a [BoxDecoration] to or from null.
  static BoxDecoration? lerp(BoxDecoration? a, BoxDecoration? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return b!.scale(t);
    if (b == null)
      return a.scale(1.0 - t);
    if (t == 0.0)
      return a;
    if (t == 1.0)
      return b;
    return BoxDecoration(
      color: Color.lerp(a.color, b.color, t),
      image: t < 0.5 ? a.image : b.image, // TODO(ianh): cross-fade the image
      border: BoxBorder.lerp(a.border, b.border, t),
      borderRadius: BorderRadiusGeometry.lerp(a.borderRadius, b.borderRadius, t),
      boxShadow: BoxShadow.lerpList(a.boxShadow, b.boxShadow, t),
      gradient: Gradient.lerp(a.gradient, b.gradient, t),
      shape: t < 0.5 ? a.shape : b.shape,
    );
  }

  isEqual (other: BoxDecoration) {
    if (other === this) {
      return this
    }
    
    return (
      other instanceof BoxDecoration &&
      other.color?.isEqual(this.color) &&
      other.image === this.image &&
      other.border === this.border &&
      other.borderRadius === this.borderRadius &&
      listEquals<BoxShadow>(other.boxShadow, this.boxShadow) &&
      other.gradient == this.gradient &&
      other.shape == this.shape
    )
  }

  debugFillProperties (properties: DiagnosticPropertiesBuilder) {
    super.debugFillProperties(properties)
    properties.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.whitespace
    properties.emptyBodyDescription = '<no decorations specified>';

    properties.add(ColorProperty('color', color, defaultValue: null));
    properties.add(DiagnosticsProperty<DecorationImage>('image', image, defaultValue: null));
    properties.add(DiagnosticsProperty<BoxBorder>('border', border, defaultValue: null));
    properties.add(DiagnosticsProperty<BorderRadiusGeometry>('borderRadius', borderRadius, defaultValue: null));
    properties.add(IterableProperty<BoxShadow>('boxShadow', boxShadow, defaultValue: null, style: DiagnosticsTreeStyle.whitespace));
    properties.add(DiagnosticsProperty<Gradient>('gradient', gradient, defaultValue: null));
    properties.add(EnumProperty<BoxShape>('shape', shape, defaultValue: BoxShape.rectangle));
  }

  hitTest (
    size: Size, 
    position: Offset , 
    textDirection: TextDirection
  ): boolean {
    invariant(this.shape !== null)
    invariant((Offset.Zero & size).contains(position))

    switch (this.shape) {
      case BoxShape.Rectangle:
        if (this.borderRadius !== null) {
          const bounds = this.borderRadius!.resolve(textDirection).toRRect(Offset.Zero & size)
          return bounds.contains(position)
        }
        return true
      case BoxShape.Circle:
        const center = size.center(Offset.Zero)
        const distance = (position - center).distance
        return distance <= Math.min(size.width, size.height) / 2.0
    }
  }

  createBoxPainter (onChanged: VoidCallback?): BoxPainter  {
    invariant(onChanged !== null || this.image === null)
    return BoxDecorationPainter(this, onChanged)
  }
}

export class BoxDecorationPainter extends BoxPainter {
  BoxDecorationPainter(this._decoration, VoidCallback? onChanged)
    : assert(_decoration != null),
      super(onChanged);

  final BoxDecoration _decoration;

  Paint? _cachedBackgroundPaint;
  Rect? _rectForCachedBackgroundPaint;
  Paint _getBackgroundPaint(Rect rect, TextDirection? textDirection) {
    assert(rect != null);
    assert(_decoration.gradient != null || _rectForCachedBackgroundPaint == null);

    if (_cachedBackgroundPaint == null ||
        (_decoration.gradient != null && _rectForCachedBackgroundPaint != rect)) {
      final Paint paint = Paint();
      if (_decoration.backgroundBlendMode != null)
        paint.blendMode = _decoration.backgroundBlendMode!;
      if (_decoration.color != null)
        paint.color = _decoration.color!;
      if (_decoration.gradient != null) {
        paint.shader = _decoration.gradient!.createShader(rect, textDirection: textDirection);
        _rectForCachedBackgroundPaint = rect;
      }
      _cachedBackgroundPaint = paint;
    }

    return _cachedBackgroundPaint!;
  }

  paintBox (
    canvas: CkCanvas, 
    rect: Rect , 
    paint: CkPaint, 
    textDirection: TextDirection
  ) {
    switch (this.decoration.shape) {
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
    textDirection: TextDirection | null
  ) {
    if (this.decoration.boxShadow === null) {
      return
    }

    for (const boxShadow of this.decoration.boxShadow!) {
      const paint = boxShadow.toPaint()
      const bounds = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius)
      this.paintBox(canvas, bounds, paint, textDirection)
    }
  }

  paintBackgroundColor (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection: TextDirection | null
  ) {
    if (
      this.decoration.color !== null || 
      this._decoration.gradient !=- null
    ) {
      this.paintBox(canvas, rect, this.getBackgroundPaint(rect, textDirection), textDirection)
    }
  }

  DecorationImagePainter? _imagePainter;
  paintBackgroundImage (
    canvas: CkCanvas, 
    rect: Rect, 
    configuration: ImageConfiguration
  ) {
    if (this.decoration.image == null) {
      return
    }
    this.imagePainter ??= this.decoration.image!.createPainter(this.onChanged!)
    let clipPath: Path | null
    switch (this.decoration.shape) {
      case BoxShape.Circle: {
        invariant(this.decoration.borderRadius === null)
        const center = rect.center
        const radius = rect.shortestSide / 2.0
        const square = Rect.fromCircle(center, radius)
        clipPath = CkPath.malloc()
        clipPath.addOval(square)
        break
      }

      case BoxShape.Cectangle: {
        if (this.decoration.borderRadius !== null) {
          clipPath = Path().malloc()
          clipPath.addRRect(this.decoration.borderRadius!.resolve(configuration.textDirection).toRRect(rect))
        }
        break
      }
    }
    
    this.imagePainter!.paint(canvas, rect, clipPath, configuration)
  }

  dispose () {
    this._imagePainter?.dispose()
    super.dispose()
  }

  paint (
    canvas: CkCanvas, 
    offset: Offset, 
    configuration: ImageConfiguration
  ) {
    invariant(configuration !== null)
    invariant(configuration.size !== null)
    final Rect rect = offset & configuration.size!;
    final TextDirection? textDirection = configuration.textDirection;
    _paintShadows(canvas, rect, textDirection);
    _paintBackgroundColor(canvas, rect, textDirection);
    _paintBackgroundImage(canvas, rect, configuration);
    _decoration.border?.paint(
      canvas,
      rect,
      shape: _decoration.shape,
      borderRadius: _decoration.borderRadius?.resolve(textDirection),
      textDirection: configuration.textDirection,
    );
  }

  toString () {
    return 'BoxPainter for $_decoration';
  }
}
