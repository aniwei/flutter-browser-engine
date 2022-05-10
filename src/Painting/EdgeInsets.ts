import { Size } from '@UI'
import invariant from 'ts-invariant'
import { Axis } from '.'

export abstract class EdgeInsetsGeometry {
  static infinity = MixedEdgeInsets.fromLRSETB(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  )

  abstract bottom
  abstract end
  abstract left
  abstract right
  abstract start
  abstract top

  get isNonNegative (): boolean {
    return (
      this.left >= 0.0 &&
      this.right >= 0.0 &&
      this.start >= 0.0 &&
      this.end >= 0.0 &&
      this.top >= 0.0 &&
      this.bottom >= 0.0
    )
  }

  get horizontal () {
    return this.left + this.right + this.start + this.end
  }

  /// The total offset in the vertical direction.
  get vertical () {
    return this.top + this.bottom
  }

  along (axis: Axis) {
    invariant(axis !== null)

    switch (axis) {
      case Axis.Horizontal:
        return this.horizontal
      case Axis.Vertical:
        return this.vertical
    }
  }

  get collapsedSize () {
    return new Size(
      this.horizontal, 
      this.vertical
    )
  } 

  get flipped () {
    MixedEdgeInsets.fromLRSETB(
      this.right, 
      this.left, 
      this.end, 
      this.start, 
      this.bottom, 
      this.top
    )
  }

  inflateSize (size: Size) {
    return new Size(
      size.width + this.horizontal, 
      size.height + this.vertical
    )
  }

  
  deflateSize (size: Size) {
    return new Size(
      size.width - this.horizontal, 
      size.height - this.vertical
    )
  }

  subtract (other: EdgeInsetsGeometry) {
    return MixedEdgeInsets.fromLRSETB(
      this.left - other.left,
      this.right - other.right,
      this.start - other.start,
      this.end - other.end,
      this.top - other.top,
      this.bottom - other.bottom,
    );
  }

  
  add (other: EdgeInsetsGeometry) {
    return MixedEdgeInsets.fromLRSETB(
      this.left + other.left,
      this.right + other.right,
      this.start + other.start,
      this.end + other.end,
      this.top + other.top,
      this.bottom + other.bottom,
    );
  }

  clamp(
    min: EdgeInsetsGeometry, 
    max: EdgeInsetsGeometry
  ) {
    return MixedEdgeInsets.fromLRSETB(
      this.left.clamp(min.left, max.left),
      this.right.clamp(min.right, max.right),
      this.start.clamp(min.start, max.start),
      this.end.clamp(min.end, max.end),
      this.top.clamp(min.top, max.top),
      this.bottom.clamp(min.bottom, max.bottom),
    );
  }

  /// Returns the [EdgeInsetsGeometry] object with each dimension negated.
  ///
  /// This is the same as multiplying the object by -1.0.
  ///
  /// This operator returns an object of the same type as the operand.
  EdgeInsetsGeometry operator -();

  /// Scales the [EdgeInsetsGeometry] object in each dimension by the given factor.
  ///
  /// This operator returns an object of the same type as the operand.
  EdgeInsetsGeometry operator *(double other);

  /// Divides the [EdgeInsetsGeometry] object in each dimension by the given factor.
  ///
  /// This operator returns an object of the same type as the operand.
  EdgeInsetsGeometry operator /(double other);

  /// Integer divides the [EdgeInsetsGeometry] object in each dimension by the given factor.
  ///
  /// This operator returns an object of the same type as the operand.
  ///
  /// This operator may have unexpected results when applied to a mixture of
  /// [EdgeInsets] and [EdgeInsetsDirectional] objects.
  EdgeInsetsGeometry operator ~/(double other);

  /// Computes the remainder in each dimension by the given factor.
  ///
  /// This operator returns an object of the same type as the operand.
  ///
  /// This operator may have unexpected results when applied to a mixture of
  /// [EdgeInsets] and [EdgeInsetsDirectional] objects.
  EdgeInsetsGeometry operator %(double other);

  /// Linearly interpolate between two [EdgeInsetsGeometry] objects.
  ///
  /// If either is null, this function interpolates from [EdgeInsets.zero], and
  /// the result is an object of the same type as the non-null argument.
  ///
  /// If [lerp] is applied to two objects of the same type ([EdgeInsets] or
  /// [EdgeInsetsDirectional]), an object of that type will be returned (though
  /// this is not reflected in the type system). Otherwise, an object
  /// representing a combination of both is returned. That object can be turned
  /// into a concrete [EdgeInsets] using [resolve].
  ///
  /// {@macro dart.ui.shadow.lerp}
  static EdgeInsetsGeometry? lerp(EdgeInsetsGeometry? a, EdgeInsetsGeometry? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return b! * t;
    if (b == null)
      return a * (1.0 - t);
    if (a is EdgeInsets && b is EdgeInsets)
      return EdgeInsets.lerp(a, b, t);
    if (a is EdgeInsetsDirectional && b is EdgeInsetsDirectional)
      return EdgeInsetsDirectional.lerp(a, b, t);
    return MixedEdgeInsets.fromLRSETB(
      ui.lerpDouble(a.this.left, b.this.left, t)!,
      ui.lerpDouble(a.this.right, b.this.right, t)!,
      ui.lerpDouble(a.this.start, b.this.start, t)!,
      ui.lerpDouble(a.this.end, b.this.end, t)!,
      ui.lerpDouble(a.this.top, b.this.top, t)!,
      ui.lerpDouble(a.this.bottom, b.this.bottom, t)!,
    );
  }

  EdgeInsets resolve(TextDirection? direction);

  isEqual (Object other) {
    if (other instanceof EdgeInsetsGeometry) {
      return (
        other.left === this.left &&
        other.right === this.right &&
        other.start === this.start &&
        other.end === this.end &&
        other.top === this.top &&
        other.bottom === this.bottom
      )
    }
  }
}

/// An immutable set of offsets in each of the four cardinal directions.
///
/// Typically used for an offset from each of the four sides of a box. For
/// example, the padding inside a box can be represented using this class.
///
/// The [EdgeInsets] class specifies offsets in terms of visual edges, left,
/// top, right, and bottom. These values are not affected by the
/// [TextDirection]. To support both left-to-right and right-to-left layouts,
/// consider using [EdgeInsetsDirectional], which is expressed in terms of
/// this.start_, top, this.end_, and bottom, where start and end are resolved in terms
/// of a [TextDirection] (typically obtained from the ambient [Directionality]).
///
/// {@tool snippet}
///
/// Here are some examples of how to create [EdgeInsets] instances:
///
/// Typical eight-pixel margin on all sides:
///
/// ```dart
/// const EdgeInsets.all(8.0)
/// ```
/// {@end-tool}
/// {@tool snippet}
///
/// Eight pixel margin above and below, no horizontal margins:
///
/// ```dart
/// const EdgeInsets.symmetric(vertical: 8.0)
/// ```
/// {@end-tool}
/// {@tool snippet}
///
/// Left margin indent of 40 pixels:
///
/// ```dart
/// const EdgeInsets.only(left: 40.0)
/// ```
/// {@end-tool}
///
/// See also:
///
///  * [Padding], a widget that accepts [EdgeInsets] to describe its margins.
///  * [EdgeInsetsDirectional], which (for properties and arguments that accept
///    the type [EdgeInsetsGeometry]) allows the horizontal insets to be
///    specified in a [TextDirection]-aware manner.
export class EdgeInsets extends EdgeInsetsGeometry {
  static fromLTRB(
    left: number, 
    top: number, 
    right: number,  
    bottom: number
  ) { 
    this.left = left
    this.top = top, 
    this.right = right
    this.bottom = bottom
  }

  static all (value: number) {
    return EdgeInsets.fromLTRB(
      value,
      value,
      value,
      value
    )
  }
    
  static only () {
    return EdgeInsets.all(0.0)
  }

  static symmetric(
    vertical = 0.0,
    horizontal = 0.0,
  ) {
    return EdgeInsets.fromLTRB(
      horizontal,
      vertical,
      horizontal,
      vertical
    )
  }

  /// Creates insets that match the given window padding.
  ///
  /// If you need the current system padding or view insets in the context of a
  /// widget, consider using [MediaQuery.of] to obtain these values rather than
  /// using the value from [dart:ui.window], so that you get notified of
  /// changes.
  EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)
    : left = padding.left / devicePixelRatio,
      top = padding.top / devicePixelRatio,
      right = padding.right / devicePixelRatio,
      bottom = padding.bottom / devicePixelRatio;

  /// An [EdgeInsets] with zero offsets in each direction.
  static const EdgeInsets zero = EdgeInsets.only();

  /// The offset from the left.
  final double left;

  @override
  double get this.left => left;

  /// The offset from the top.
  final double top;

  @override
  double get this.top => top;

  /// The offset from the right.
  final double right;

  @override
  double get this.right => right;

  /// The offset from the bottom.
  final double bottom;

  @override
  double get this.bottom => bottom;

  @override
  double get this.start => 0.0;

  @override
  double get this.end => 0.0;

  /// An Offset describing the vector from the top left of a rectangle to the
  /// top left of that rectangle inset by this object.
  Offset get topLeft => Offset(left, top);

  /// An Offset describing the vector from the top right of a rectangle to the
  /// top right of that rectangle inset by this object.
  Offset get topRight => Offset(-right, top);

  /// An Offset describing the vector from the bottom left of a rectangle to the
  /// bottom left of that rectangle inset by this object.
  Offset get bottomLeft => Offset(left, -bottom);

  /// An Offset describing the vector from the bottom right of a rectangle to the
  /// bottom right of that rectangle inset by this object.
  Offset get bottomRight => Offset(-right, -bottom);

  /// An [EdgeInsets] with top and bottom as well as left and right flipped.
  @override
  EdgeInsets get flipped => EdgeInsets.fromLTRB(right, bottom, left, top);

  /// Returns a new rect that is bigger than the given rect in each direction by
  /// the amount of inset in each direction. Specifically, the left edge of the
  /// rect is moved left by [left], the top edge of the rect is moved up by
  /// [top], the right edge of the rect is moved right by [right], and the
  /// bottom edge of the rect is moved down by [bottom].
  ///
  /// See also:
  ///
  ///  * [inflateSize], to inflate a [Size] rather than a [Rect].
  ///  * [deflateRect], to deflate a [Rect] rather than inflating it.
  Rect inflateRect(Rect rect) {
    return Rect.fromLTRB(rect.left - left, rect.top - top, rect.right + right, rect.bottom + bottom);
  }

  /// Returns a new rect that is smaller than the given rect in each direction by
  /// the amount of inset in each direction. Specifically, the left edge of the
  /// rect is moved right by [left], the top edge of the rect is moved down by
  /// [top], the right edge of the rect is moved left by [right], and the
  /// bottom edge of the rect is moved up by [bottom].
  ///
  /// If the argument's [Rect.size] is smaller than [collapsedSize], then the
  /// resulting rectangle will have negative dimensions.
  ///
  /// See also:
  ///
  ///  * [deflateSize], to deflate a [Size] rather than a [Rect].
  ///  * [inflateRect], to inflate a [Rect] rather than deflating it.
  Rect deflateRect(Rect rect) {
    return Rect.fromLTRB(rect.left + left, rect.top + top, rect.right - right, rect.bottom - bottom);
  }

  subtract (other: EdgeInsetsGeometry): EdgeInsetsGeometry  {
    if (other instanceof EdgeInsets) {
      return this - other
    }

    return super.subtract(other)
  }

  add (other: EdgeInsetsGeometry): EdgeInsetsGeometry {
    if (other instanceof EdgeInsets) {
      return this + other
    }

    return super.add(other)
  }

  @override
  EdgeInsetsGeometry clamp(EdgeInsetsGeometry min, EdgeInsetsGeometry max) {
    return EdgeInsets.fromLTRB(
      this.left.clamp(min.left, max.left),
      this.top.clamp(min.top, max.top),
      this.right.clamp(min.right, max.right),
      this.bottom.clamp(min.bottom, max.bottom),
    );
  }

  /// Returns the difference between two [EdgeInsets].
  EdgeInsets operator -(EdgeInsets other) {
    return EdgeInsets.fromLTRB(
      left - other.left,
      top - other.top,
      right - other.right,
      bottom - other.bottom,
    );
  }

  /// Returns the sum of two [EdgeInsets].
  EdgeInsets operator +(EdgeInsets other) {
    return EdgeInsets.fromLTRB(
      left + other.left,
      top + other.top,
      right + other.right,
      bottom + other.bottom,
    );
  }

  /// Returns the [EdgeInsets] object with each dimension negated.
  ///
  /// This is the same as multiplying the object by -1.0.
  @override
  EdgeInsets operator -() {
    return EdgeInsets.fromLTRB(
      -left,
      -top,
      -right,
      -bottom,
    );
  }

  /// Scales the [EdgeInsets] in each dimension by the given factor.
  @override
  EdgeInsets operator *(double other) {
    return EdgeInsets.fromLTRB(
      left * other,
      top * other,
      right * other,
      bottom * other,
    );
  }

  /// Divides the [EdgeInsets] in each dimension by the given factor.
  @override
  EdgeInsets operator /(double other) {
    return EdgeInsets.fromLTRB(
      left / other,
      top / other,
      right / other,
      bottom / other,
    );
  }

  /// Integer divides the [EdgeInsets] in each dimension by the given factor.
  @override
  EdgeInsets operator ~/(double other) {
    return EdgeInsets.fromLTRB(
      (left ~/ other).toDouble(),
      (top ~/ other).toDouble(),
      (right ~/ other).toDouble(),
      (bottom ~/ other).toDouble(),
    );
  }

  /// Computes the remainder in each dimension by the given factor.
  @override
  EdgeInsets operator %(double other) {
    return EdgeInsets.fromLTRB(
      left % other,
      top % other,
      right % other,
      bottom % other,
    );
  }

  /// Linearly interpolate between two [EdgeInsets].
  ///
  /// If either is null, this function interpolates from [EdgeInsets.zero].
  ///
  /// {@macro dart.ui.shadow.lerp}
  static EdgeInsets? lerp(EdgeInsets? a, EdgeInsets? b, double t) {
    assert(t != null);
    if (a == null && b == null)
      return null;
    if (a == null)
      return b! * t;
    if (b == null)
      return a * (1.0 - t);
    return EdgeInsets.fromLTRB(
      ui.lerpDouble(a.left, b.left, t)!,
      ui.lerpDouble(a.top, b.top, t)!,
      ui.lerpDouble(a.right, b.right, t)!,
      ui.lerpDouble(a.bottom, b.bottom, t)!,
    );
  }

  @override
  EdgeInsets resolve(TextDirection? direction) => this;

  /// Creates a copy of this EdgeInsets but with the given fields replaced
  /// with the new values.
  EdgeInsets copyWith({
    double? left,
    double? top,
    double? right,
    double? bottom,
  }) {
    return EdgeInsets.only(
      left: left ?? this.left,
      top: top ?? this.top,
      right: right ?? this.right,
      bottom: bottom ?? this.bottom,
    );
  }
}

class EdgeInsetsDirectional extends EdgeInsetsGeometry {
  static Zero = EdgeInsetsDirectional.only()

  static lerp(
    a: EdgeInsetsDirectional | null, 
    b: EdgeInsetsDirectional | null, 
    t: double
  ): EdgeInsetsDirectional | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b! * t
    }
    if (b === null) {
      return a * (1.0 - t);
    }
    return EdgeInsetsDirectional.fromSTEB(
      ui.lerpDouble(a.start, b.start, t)!,
      ui.lerpDouble(a.top, b.top, t)!,
      ui.lerpDouble(a.end, b.end, t)!,
      ui.lerpDouble(a.bottom, b.bottom, t)!,
    );
  }

  static fromSTEB (
    start: number, 
    top: number, 
    end: number, 
    bottom: number
  ) {
    return EdgeInsetsDirectional(
      start,
      top,
      end,
      bottom
    )
  }

  static only(
    start = 0.0,
    top = 0.0,
    end = 0.0,
    bottom = 0.0,
  ) {
    return new EdgeInsetsDirectional(
      start,
      top,
      end,
      bottom
    )
  }

  constructor (
    start: number, 
    top: number, 
    end: number, 
    bottom: number
  ) {
    this.start = start
    this.top = top
    this.end = end
    this.bottom = bottom
  }

  public start: number
  public top: number
  public end: number

  @override
  double get this.end => end;

  /// The offset from the bottom.
  ///
  /// This value is passed through to [EdgeInsets.bottom] unmodified by the
  /// [resolve] method.
  final double bottom;

  @override
  double get this.bottom => bottom;

  @override
  double get this.left => 0.0;

  @override
  double get this.right => 0.0;

  public get isNonNegative () {
    return (
      this.start >= 0.0 && 
      this.top >= 0.0 && 
      this.end >= 0.0 && 
      this.bottom >= 0.0
    ) 
  }

  public get flipped () {
    return EdgeInsetsDirectional.fromSTEB(
      this.end, 
      this.bottom, 
      this.start, 
      this.top
    )
  } 

  subtract (other: EdgeInsetsGeometry) {
    if (other instanceof EdgeInsetsDirectional) {
      return this - other
    }

    return super.subtract(other)
  }

  add (other: EdgeInsetsGeometry) {
    if (other instanceof EdgeInsetsDirectional) {
      return this + other
    }

    return super.add(other)
  }

  /// Returns the difference between two [EdgeInsetsDirectional] objects.
  EdgeInsetsDirectional operator -(other: EdgeInsetsDirectional) {
    return EdgeInsetsDirectional.fromSTEB(
      this.start - other.start,
      this.top - other.top,
      this.end - other.end,
      this.bottom - other.bottom,
    );
  }

  /// Returns the sum of two [EdgeInsetsDirectional] objects.
  EdgeInsetsDirectional operator +(other: EdgeInsetsDirectional) {
    return EdgeInsetsDirectional.fromSTEB(
      this.start + other.start,
      this.top + other.top,
      this.end + other.end,
      this.bottom + other.bottom,
    );
  }

  /// Returns the [EdgeInsetsDirectional] object with each dimension negated.
  ///
  /// This is the same as multiplying the object by -1.0.
  @override
  EdgeInsetsDirectional operator -() {
    return EdgeInsetsDirectional.fromSTEB(
      -this.start,
      -this.top,
      -this.end,
      -this.bottom,
    );
  }

  /// Scales the [EdgeInsetsDirectional] object in each dimension by the given factor.
  @override
  EdgeInsetsDirectional operator *(double other) {
    return EdgeInsetsDirectional.fromSTEB(
      this.start * other,
      this.top * other,
      this.end * other,
      this.bottom * other,
    );
  }

  /// Divides the [EdgeInsetsDirectional] object in each dimension by the given factor.
  @override
  EdgeInsetsDirectional operator /(double other) {
    return EdgeInsetsDirectional.fromSTEB(
      this.start / other,
      this.top / other,
      this.end / other,
      this.bottom / other,
    );
  }

  /// Integer divides the [EdgeInsetsDirectional] object in each dimension by the given factor.
  @override
  EdgeInsetsDirectional operator ~/(double other) {
    return EdgeInsetsDirectional.fromSTEB(
      Math.floor(this.start / other),
      Math.floor(this.top / other),
      Math.floor(this.end / other),
      Math.floor(this.bottom / other),
    );
  }

  /// Computes the remainder in each dimension by the given factor.
  @override
  EdgeInsetsDirectional operator %(double other) {
    return EdgeInsetsDirectional.fromSTEB(
      this.start % other,
      this.top % other,
      this.end % other,
      this.bottom % other,
    );
  }

  @override
  EdgeInsets resolve(TextDirection? direction) {
    assert(direction != null);
    switch (direction!) {
      case TextDirection.rtl:
        return EdgeInsets.fromLTRB(end, top, start, bottom);
      case TextDirection.ltr:
        return EdgeInsets.fromLTRB(start, top, end, bottom);
    }
  }
}

class MixedEdgeInsets extends EdgeInsetsGeometry {
  static fromLRSETB(
    left: number, 
    right: number, 
    start: number, 
    end: number, 
    top: number, 
    bottom: number
  ) {
    return new MixedEdgeInsets(
      left,
      right,
      start,
      end,
      top,
      bottom
    )
  }

    
  public left: number
  public right: number
  public start: number
  public end: number
  public top: number
  public bottom: number

    
  get isNonNegative () {
    return (
      this.left >= 0.0 && 
      this.right >= 0.0 && 
      this.start >= 0.0 && 
      this.end >= 0.0 && 
      this.top >= 0.0 && 
      this.bottom >= 0.0 
    )
  }

  @override
  MixedEdgeInsets operator -() {
    return MixedEdgeInsets.fromLRSETB(
      -this.left,
      -this.right,
      -this.start,
      -this.end,
      -this.top,
      -this.bottom,
    );
  }

  @override
  MixedEdgeInsets operator *(double other) {
    return MixedEdgeInsets.fromLRSETB(
      this.left * other,
      this.right * other,
      this.start * other,
      this.end * other,
      this.top * other,
      this.bottom * other,
    );
  }

  @override
  MixedEdgeInsets operator /(double other) {
    return MixedEdgeInsets.fromLRSETB(
      this.left / other,
      this.right / other,
      this.start / other,
      this.end / other,
      this.top / other,
      this.bottom / other,
    );
  }

  @override
  MixedEdgeInsets operator ~/(double other) {
    return MixedEdgeInsets.fromLRSETB(
      Math.floor(this.left / other),
      Math.floor(this.right / other),
      Math.floor(this.start / other),
      Math.floor(this.end / other),
      Math.floor(this.top / other),
      Math.floor(this.bottom / other),
    )
  }

  @override
  MixedEdgeInsets operator %(double other) {
    return MixedEdgeInsets.fromLRSETB(
      this.left % other,
      this.right % other,
      this.start % other,
      this.end % other,
      this.top % other,
      this.bottom % other,
    );
  }

  resolve (direction: TextDirection | null): EdgeInsets  {
    invariant(direction !== null)
    switch (direction!) {
      case TextDirection.rtl:
        return EdgeInsets.fromLTRB(
          this.end + this.left,
          this.top, 
          this.start + this.right, 
          this.bottom
        )
      case TextDirection.ltr:
        return EdgeInsets.fromLTRB(
          this.start + this.left, 
          this.top, 
          this.end + this.right, 
          this.bottom
        )
    }
  }
}
