import { CkCanvas, CkPath } from '@CanvasKit';
import { Color, Offset, Rect, TextDirection } from '@UI';
import { BlendMode } from 'canvaskit-wasm';
import invariant from 'ts-invariant';
import { BorderRadiusGeometry } from './BorderRadius';
import { BoxBorder, BoxShape } from './BoxBorder';
import { BoxShadow } from './BoxShadow';
import { ImageConfiguration } from './ImageProvider';

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

/// An object that paints a [BoxDecoration] into a canvas.
class BoxDecorationPainter extends BoxPainter {
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

  void _paintBox(Canvas canvas, Rect rect, Paint paint, TextDirection? textDirection) {
    switch (_decoration.shape) {
      case BoxShape.circle:
        assert(_decoration.borderRadius == null);
        final Offset center = rect.center;
        final double radius = rect.shortestSide / 2.0;
        canvas.drawCircle(center, radius, paint);
        break;
      case BoxShape.rectangle:
        if (_decoration.borderRadius == null) {
          canvas.drawRect(rect, paint);
        } else {
          canvas.drawRRect(_decoration.borderRadius!.resolve(textDirection).toRRect(rect), paint);
        }
        break;
    }
  }

  void _paintShadows(Canvas canvas, Rect rect, TextDirection? textDirection) {
    if (_decoration.boxShadow == null)
      return;
    for (final BoxShadow boxShadow in _decoration.boxShadow!) {
      final Paint paint = boxShadow.toPaint();
      final Rect bounds = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius);
      _paintBox(canvas, bounds, paint, textDirection);
    }
  }

  void _paintBackgroundColor(Canvas canvas, Rect rect, TextDirection? textDirection) {
    if (_decoration.color != null || _decoration.gradient != null)
      _paintBox(canvas, rect, _getBackgroundPaint(rect, textDirection), textDirection);
  }

  DecorationImagePainter? _imagePainter;
  void _paintBackgroundImage(Canvas canvas, Rect rect, ImageConfiguration configuration) {
    if (_decoration.image == null)
      return;
    _imagePainter ??= _decoration.image!.createPainter(onChanged!);
    Path? clipPath;
    switch (_decoration.shape) {
      case BoxShape.circle:
        assert(_decoration.borderRadius == null);
        final Offset center = rect.center;
        final double radius = rect.shortestSide / 2.0;
        final Rect square = Rect.fromCircle(center: center, radius: radius);
        clipPath = Path()..addOval(square);
        break;
      case BoxShape.rectangle:
        if (_decoration.borderRadius != null)
          clipPath = Path()..addRRect(_decoration.borderRadius!.resolve(configuration.textDirection).toRRect(rect));
        break;
    }
    _imagePainter!.paint(canvas, rect, clipPath, configuration);
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
