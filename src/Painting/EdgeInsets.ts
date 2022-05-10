import invariant from 'ts-invariant'
import { lerpDouble, Offset, Rect, Size, TextDirection } from '@UI'
import { Axis } from '.'
import { clamp } from '@Shared'

export abstract class EdgeInsetsGeometry {
  static infinity = MixedEdgeInsets.fromLRSETB(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  )

  static lerp(
    a: EdgeInsetsGeometry | null, 
    b: EdgeInsetsGeometry| null, 
    t: number
  ): EdgeInsetsGeometry | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }
    if (a === null) {
      return b! * t
    }

    if (b === null) {
      return a * (1.0 - t)
    }

    if (
      a instanceof EdgeInsets && 
      b instanceof EdgeInsets
    ) {
      return EdgeInsets.lerp(a, b, t)
    }

    if (
      a instanceof EdgeInsetsDirectional && 
      b instanceof EdgeInsetsDirectional
    ) {
      return EdgeInsetsDirectional.lerp(a, b, t)
    }

    return MixedEdgeInsets.fromLRSETB(
      lerpDouble(a.left, b.left, t)!,
      lerpDouble(a.right, b.right, t)!,
      lerpDouble(a.start, b.start, t)!,
      lerpDouble(a.end, b.end, t)!,
      lerpDouble(a.top, b.top, t)!,
      lerpDouble(a.bottom, b.bottom, t)!,
    );
  }

  abstract bottom: number
  abstract end: number
  abstract left: number
  abstract right: number
  abstract start: number
  abstract top: number

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
    return MixedEdgeInsets.fromLRSETB(
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
      clamp(this.left, min.left, max.left),
      clamp(this.right, min.right, max.right),
      clamp(this.start, min.start, max.start),
      clamp(this.end, min.end, max.end),
      clamp(this.top, min.top, max.top),
      clamp(this.bottom, min.bottom, max.bottom),
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

  abstract resolve (direction: TextDirection): EdgeInsets

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

export class EdgeInsets extends EdgeInsetsGeometry {
  static fromWindowPadding (
    padding, 
    devicePixelRatio
  ) {
    return EdgeInsets.fromLTRB(
      padding.left / devicePixelRatio,
      padding.top / devicePixelRatio,
      padding.right / devicePixelRatio,
      padding.bottom / devicePixelRatio
    )
  }

  static Zero = EdgeInsets.only()
  static fromLTRB(
    left: number, 
    top: number, 
    right: number,  
    bottom: number
  ) { 
    return new EdgeInsets(
      left
      top, 
      right
      bottom
    )
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

  constructor (
    left: number, 
    top: number, 
    right: number,  
    bottom: number
  ) {
    super()
    this.left = left 
    this.top = top
    this.right = right
    this.bottom = bottom
  }

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

  
  get topLeft () {
    return new Offset(this.left, this.top)
  } 
  get topRight () {
    return new Offset(-this.right, this.top)
  } 
  get bottomLeft () {
    return new Offset(this.left, -this.bottom)
  } 
  get bottomRight () {
    return new Offset(-this.right, -this.bottom)
  } 

  get flipped () {
    return EdgeInsets.fromLTRB(this.right, this.bottom, this.left, this.top)
  } 

  inflateRect (rect: Rect) {
    return Rect.fromLTRB(
      rect.left - this.left, 
      rect.top - this.top, 
      rect.right + this.right, 
      rect.bottom + this.bottom
    )
  }

  deflateRect (rect: Rect) {
    return Rect.fromLTRB(
      rect.left + this.left, 
      rect.top + this.top, 
      rect.right - this.right, 
      rect.bottom - this.bottom
    )
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

  clamp (
    min: EdgeInsetsGeometry, 
    max: EdgeInsetsGeometry
  ) {
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
      case TextDirection.Rtl:
        return EdgeInsets.fromLTRB(end, top, start, bottom);
      case TextDirection.Ltr:
        return EdgeInsets.fromLTRB(start, top, end, bottom);
    }
  }
}

export class MixedEdgeInsets extends EdgeInsetsGeometry {
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

  constructor (
    left: number,
    right: number,
    start: number,
    end: number,
    top: number,
    bottom: number
  ) {
    super()
    this.left = left
    this.right = right
    this.start = start
    this.end = end
    this.top = top
    this.bottom = bottom
  }

    
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

  subtract (other?) {
    if (other === undefined) {
      return MixedEdgeInsets.fromLRSETB(
        -this.left,
        -this.right,
        -this.start,
        -this.end,
        -this.top,
        -this.bottom,
      )
    }

    return MixedEdgeInsets.fromLRSETB(
      this.left - other,
      this.right - other,
      this.start - other,
      this.end - other,
      this.top - other,
      this.bottom - other,
    )
  }

  multiply (other: number ) {
    return MixedEdgeInsets.fromLRSETB(
      this.left * other,
      this.right * other,
      this.start * other,
      this.end * other,
      this.top * other,
      this.bottom * other,
    );
  }

  divide (other: number) {
    return MixedEdgeInsets.fromLRSETB(
      this.left / other,
      this.right / other,
      this.start / other,
      this.end / other,
      this.top / other,
      this.bottom / other,
    );
  }

  mod (other: number) {
    return MixedEdgeInsets.fromLRSETB(
      this.left % other,
      this.right % other,
      this.start % other,
      this.end % other,
      this.top % other,
      this.bottom % other
    )
  }

  resolve (
    direction: TextDirection | null
  ): EdgeInsets {
    invariant(direction !== null)
    switch (direction) {
      case TextDirection.Rtl:
        return EdgeInsets.fromLTRB(
          this.end + this.left,
          this.top, 
          this.start + this.right, 
          this.bottom
        )
      case TextDirection.Ltr:
        return EdgeInsets.fromLTRB(
          this.start + this.left, 
          this.top, 
          this.end + this.right, 
          this.bottom
        )
    }
  }
}
