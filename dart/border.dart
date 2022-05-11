class BorderDirectional extends BoxBorder {
  /// Creates a border.
  ///
  /// The [start] and [end] sides represent the horizontal sides; the start side
  /// is on the leading edge given the reading direction, and the end side is on
  /// the trailing edge. They are resolved during [paint].
  ///
  /// All the sides of the border default to [BorderSide.none].
  ///
  /// The arguments must not be null.
  const BorderDirectional({
    this.top = BorderSide.none,
    this.start = BorderSide.none,
    this.end = BorderSide.none,
    this.bottom = BorderSide.none,
  })  : assert(top != null),
        assert(start != null),
        assert(end != null),
        assert(bottom != null);

  /// Creates a [BorderDirectional] that represents the addition of the two
  /// given [BorderDirectional]s.
  ///
  /// It is only valid to call this if [BorderSide.canMerge] returns true for
  /// the pairwise combination of each side on both [BorderDirectional]s.
  ///
  /// The arguments must not be null.
  static BorderDirectional merge(BorderDirectional a, BorderDirectional b) {
    assert(a != null);
    assert(b != null);
    assert(BorderSide.canMerge(a.top, b.top));
    assert(BorderSide.canMerge(a.start, b.start));
    assert(BorderSide.canMerge(a.end, b.end));
    assert(BorderSide.canMerge(a.bottom, b.bottom));
    return BorderDirectional(
      top: BorderSide.merge(a.top, b.top),
      start: BorderSide.merge(a.start, b.start),
      end: BorderSide.merge(a.end, b.end),
      bottom: BorderSide.merge(a.bottom, b.bottom),
    );
  }

  @override
  final BorderSide top;

  /// The start side of this border.
  ///
  /// This is the side on the left in left-to-right text and on the right in
  /// right-to-left text.
  ///
  /// See also:
  ///
  ///  * [TextDirection], which is used to describe the reading direction.
  final BorderSide start;

  /// The end side of this border.
  ///
  /// This is the side on the right in left-to-right text and on the left in
  /// right-to-left text.
  ///
  /// See also:
  ///
  ///  * [TextDirection], which is used to describe the reading direction.
  final BorderSide end;

  @override
  final BorderSide bottom;

  @override
  EdgeInsetsGeometry get dimensions {
    return EdgeInsetsDirectional.fromSTEB(
        start.width, top.width, end.width, bottom.width);
  }

  @override
  bool get isUniform {
    final Color topColor = top.color;
    if (start.color != topColor ||
        end.color != topColor ||
        bottom.color != topColor) return false;

    final double topWidth = top.width;
    if (start.width != topWidth ||
        end.width != topWidth ||
        bottom.width != topWidth) return false;

    final BorderStyle topStyle = top.style;
    if (start.style != topStyle ||
        end.style != topStyle ||
        bottom.style != topStyle) return false;

    return true;
  }

  @override
  BoxBorder? add(ShapeBorder other, {bool reversed = false}) {
    if (other is BorderDirectional) {
      final BorderDirectional typedOther = other;
      if (BorderSide.canMerge(top, typedOther.top) &&
          BorderSide.canMerge(start, typedOther.start) &&
          BorderSide.canMerge(end, typedOther.end) &&
          BorderSide.canMerge(bottom, typedOther.bottom)) {
        return BorderDirectional.merge(this, typedOther);
      }
      return null;
    }
    if (other is Border) {
      final Border typedOther = other;
      if (!BorderSide.canMerge(typedOther.top, top) ||
          !BorderSide.canMerge(typedOther.bottom, bottom)) return null;
      if (start != BorderSide.none || end != BorderSide.none) {
        if (typedOther.left != BorderSide.none ||
            typedOther.right != BorderSide.none) return null;
        assert(typedOther.left == BorderSide.none);
        assert(typedOther.right == BorderSide.none);
        return BorderDirectional(
          top: BorderSide.merge(typedOther.top, top),
          start: start,
          end: end,
          bottom: BorderSide.merge(typedOther.bottom, bottom),
        );
      }
      assert(start == BorderSide.none);
      assert(end == BorderSide.none);
      return Border(
        top: BorderSide.merge(typedOther.top, top),
        right: typedOther.right,
        bottom: BorderSide.merge(typedOther.bottom, bottom),
        left: typedOther.left,
      );
    }
    return null;
  }

  @override
  BorderDirectional scale(double t) {
    return BorderDirectional(
      top: top.scale(t),
      start: start.scale(t),
      end: end.scale(t),
      bottom: bottom.scale(t),
    );
  }

  @override
  ShapeBorder? lerpFrom(ShapeBorder? a, double t) {
    if (a is BorderDirectional) return BorderDirectional.lerp(a, this, t);
    return super.lerpFrom(a, t);
  }

  @override
  ShapeBorder? lerpTo(ShapeBorder? b, double t) {
    if (b is BorderDirectional) return BorderDirectional.lerp(this, b, t);
    return super.lerpTo(b, t);
  }

  /// Linearly interpolate between two borders.
  ///
  /// If a border is null, it is treated as having four [BorderSide.none]
  /// borders.
  ///
  /// {@macro dart.ui.shadow.lerp}
  static BorderDirectional? lerp(
      BorderDirectional? a, BorderDirectional? b, double t) {
    assert(t != null);
    if (a == null && b == null) return null;
    if (a == null) return b!.scale(t);
    if (b == null) return a.scale(1.0 - t);
    return BorderDirectional(
      top: BorderSide.lerp(a.top, b.top, t),
      end: BorderSide.lerp(a.end, b.end, t),
      bottom: BorderSide.lerp(a.bottom, b.bottom, t),
      start: BorderSide.lerp(a.start, b.start, t),
    );
  }

  /// Paints the border within the given [Rect] on the given [Canvas].
  ///
  /// Uniform borders are more efficient to paint than more complex borders.
  ///
  /// You can provide a [BoxShape] to draw the border on. If the `shape` in
  /// [BoxShape.circle], there is the requirement that the border [isUniform].
  ///
  /// If you specify a rectangular box shape ([BoxShape.rectangle]), then you
  /// may specify a [BorderRadius]. If a `borderRadius` is specified, there is
  /// the requirement that the border [isUniform].
  ///
  /// The [getInnerPath] and [getOuterPath] methods do not know about the
  /// `shape` and `borderRadius` arguments.
  ///
  /// The `textDirection` argument is used to determine which of [start] and
  /// [end] map to the left and right. For [TextDirection.ltr], the [start] is
  /// the left and the [end] is the right; for [TextDirection.rtl], it is the
  /// reverse.
  ///
  /// See also:
  ///
  ///  * [paintBorder], which is used if the border is not uniform.
  @override
  void paint(
    Canvas canvas,
    Rect rect, {
    TextDirection? textDirection,
    BoxShape shape = BoxShape.rectangle,
    BorderRadius? borderRadius,
  }) {
    if (isUniform) {
      switch (top.style) {
        case BorderStyle.none:
          return;
        case BorderStyle.solid:
          switch (shape) {
            case BoxShape.circle:
              assert(borderRadius == null,
                  'A borderRadius can only be given for rectangular boxes.');
              BoxBorder._paintUniformBorderWithCircle(canvas, rect, top);
              break;
            case BoxShape.rectangle:
              if (borderRadius != null) {
                BoxBorder._paintUniformBorderWithRadius(
                    canvas, rect, top, borderRadius);
                return;
              }
              BoxBorder._paintUniformBorderWithRectangle(canvas, rect, top);
              break;
          }
          return;
      }
    }

    assert(borderRadius == null,
        'A borderRadius can only be given for uniform borders.');
    assert(shape == BoxShape.rectangle,
        'A border can only be drawn as a circle if it is uniform.');

    BorderSide left, right;
    assert(textDirection != null,
        'Non-uniform BorderDirectional objects require a TextDirection when painting.');
    switch (textDirection!) {
      case TextDirection.rtl:
        left = end;
        right = start;
        break;
      case TextDirection.ltr:
        left = start;
        right = end;
        break;
    }
    paintBorder(canvas, rect,
        top: top, left: left, bottom: bottom, right: right);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other.runtimeType != runtimeType) return false;
    return other is BorderDirectional &&
        other.top == top &&
        other.start == start &&
        other.end == end &&
        other.bottom == bottom;
  }

  @override
  int get hashCode => hashValues(top, start, end, bottom);

  @override
  String toString() {
    final List<String> arguments = <String>[
      if (top != BorderSide.none) 'top: $top',
      if (start != BorderSide.none) 'start: $start',
      if (end != BorderSide.none) 'end: $end',
      if (bottom != BorderSide.none) 'bottom: $bottom',
    ];
    return '${objectRuntimeType(this, 'BorderDirectional')}(${arguments.join(", ")})';
  }
}