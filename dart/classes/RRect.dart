class RRect {
  const RRect.fromLTRBXY(
    double left,
    double top,
    double right,
    double bottom,
    double radiusX,
    double radiusY,
  ) : this._raw(
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          tlRadiusX: radiusX,
          tlRadiusY: radiusY,
          trRadiusX: radiusX,
          trRadiusY: radiusY,
          blRadiusX: radiusX,
          blRadiusY: radiusY,
          brRadiusX: radiusX,
          brRadiusY: radiusY,
          uniformRadii: radiusX == radiusY,
        );

  RRect.fromLTRBR(
    double left,
    double top,
    double right,
    double bottom,
    Radius radius,
  ) : this._raw(
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          tlRadiusX: radius.x,
          tlRadiusY: radius.y,
          trRadiusX: radius.x,
          trRadiusY: radius.y,
          blRadiusX: radius.x,
          blRadiusY: radius.y,
          brRadiusX: radius.x,
          brRadiusY: radius.y,
          uniformRadii: radius.x == radius.y,
        );

  RRect.fromRectXY(Rect rect, double radiusX, double radiusY)
      : this._raw(
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
          tlRadiusX: radiusX,
          tlRadiusY: radiusY,
          trRadiusX: radiusX,
          trRadiusY: radiusY,
          blRadiusX: radiusX,
          blRadiusY: radiusY,
          brRadiusX: radiusX,
          brRadiusY: radiusY,
          uniformRadii: radiusX == radiusY,
        );

  RRect.fromRectAndRadius(Rect rect, Radius radius)
      : this._raw(
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
          tlRadiusX: radius.x,
          tlRadiusY: radius.y,
          trRadiusX: radius.x,
          trRadiusY: radius.y,
          blRadiusX: radius.x,
          blRadiusY: radius.y,
          brRadiusX: radius.x,
          brRadiusY: radius.y,
          uniformRadii: radius.x == radius.y,
        );

  RRect.fromLTRBAndCorners(
    double left,
    double top,
    double right,
    double bottom, {
    Radius topLeft = Radius.zero,
    Radius topRight = Radius.zero,
    Radius bottomRight = Radius.zero,
    Radius bottomLeft = Radius.zero,
  }) : this._raw(
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          tlRadiusX: topLeft.x,
          tlRadiusY: topLeft.y,
          trRadiusX: topRight.x,
          trRadiusY: topRight.y,
          blRadiusX: bottomLeft.x,
          blRadiusY: bottomLeft.y,
          brRadiusX: bottomRight.x,
          brRadiusY: bottomRight.y,
          uniformRadii: topLeft.x == topLeft.y &&
              topLeft.x == topRight.x &&
              topLeft.x == topRight.y &&
              topLeft.x == bottomLeft.x &&
              topLeft.x == bottomLeft.y &&
              topLeft.x == bottomRight.x &&
              topLeft.x == bottomRight.y,
        );

  RRect.fromRectAndCorners(
    Rect rect, {
    Radius topLeft = Radius.zero,
    Radius topRight = Radius.zero,
    Radius bottomRight = Radius.zero,
    Radius bottomLeft = Radius.zero,
  }) : this._raw(
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
          tlRadiusX: topLeft.x,
          tlRadiusY: topLeft.y,
          trRadiusX: topRight.x,
          trRadiusY: topRight.y,
          blRadiusX: bottomLeft.x,
          blRadiusY: bottomLeft.y,
          brRadiusX: bottomRight.x,
          brRadiusY: bottomRight.y,
          uniformRadii: topLeft.x == topLeft.y &&
              topLeft.x == topRight.x &&
              topLeft.x == topRight.y &&
              topLeft.x == bottomLeft.x &&
              topLeft.x == bottomLeft.y &&
              topLeft.x == bottomRight.x &&
              topLeft.x == bottomRight.y,
        );

  const RRect._raw({
    this.left = 0.0,
    this.top = 0.0,
    this.right = 0.0,
    this.bottom = 0.0,
    this.tlRadiusX = 0.0,
    this.tlRadiusY = 0.0,
    this.trRadiusX = 0.0,
    this.trRadiusY = 0.0,
    this.brRadiusX = 0.0,
    this.brRadiusY = 0.0,
    this.blRadiusX = 0.0,
    this.blRadiusY = 0.0,
    bool uniformRadii = false,
  })  : assert(left != null), // ignore: unnecessary_null_comparison
        assert(top != null), // ignore: unnecessary_null_comparison
        assert(right != null), // ignore: unnecessary_null_comparison
        assert(bottom != null), // ignore: unnecessary_null_comparison
        assert(tlRadiusX != null), // ignore: unnecessary_null_comparison
        assert(tlRadiusY != null), // ignore: unnecessary_null_comparison
        assert(trRadiusX != null), // ignore: unnecessary_null_comparison
        assert(trRadiusY != null), // ignore: unnecessary_null_comparison
        assert(brRadiusX != null), // ignore: unnecessary_null_comparison
        assert(brRadiusY != null), // ignore: unnecessary_null_comparison
        assert(blRadiusX != null), // ignore: unnecessary_null_comparison
        assert(blRadiusY != null), // ignore: unnecessary_null_comparison
        webOnlyUniformRadii = uniformRadii;

  final double left;
  final double top;
  final double right;
  final double bottom;
  final double tlRadiusX;
  final double tlRadiusY;
  Radius get tlRadius => Radius.elliptical(tlRadiusX, tlRadiusY);
  final double trRadiusX;
  final double trRadiusY;
  Radius get trRadius => Radius.elliptical(trRadiusX, trRadiusY);
  final double brRadiusX;
  final double brRadiusY;
  Radius get brRadius => Radius.elliptical(brRadiusX, brRadiusY);
  final double blRadiusX;
  final double blRadiusY;
  // webOnly
  final bool webOnlyUniformRadii;
  Radius get blRadius => Radius.elliptical(blRadiusX, blRadiusY);
  static const RRect zero = RRect._raw();

  RRect shift(Offset offset) {
    return RRect._raw(
      left: left + offset.dx,
      top: top + offset.dy,
      right: right + offset.dx,
      bottom: bottom + offset.dy,
      tlRadiusX: tlRadiusX,
      tlRadiusY: tlRadiusY,
      trRadiusX: trRadiusX,
      trRadiusY: trRadiusY,
      blRadiusX: blRadiusX,
      blRadiusY: blRadiusY,
      brRadiusX: brRadiusX,
      brRadiusY: brRadiusY,
    );
  }

  RRect inflate(double delta) {
    return RRect._raw(
      left: left - delta,
      top: top - delta,
      right: right + delta,
      bottom: bottom + delta,
      tlRadiusX: tlRadiusX + delta,
      tlRadiusY: tlRadiusY + delta,
      trRadiusX: trRadiusX + delta,
      trRadiusY: trRadiusY + delta,
      blRadiusX: blRadiusX + delta,
      blRadiusY: blRadiusY + delta,
      brRadiusX: brRadiusX + delta,
      brRadiusY: brRadiusY + delta,
    );
  }

  RRect deflate(double delta) => inflate(-delta);
  double get width => right - left;
  double get height => bottom - top;
  Rect get outerRect => Rect.fromLTRB(left, top, right, bottom);
  Rect get safeInnerRect {
    const double kInsetFactor = 0.29289321881; // 1-cos(pi/4)

    final double leftRadius = math.max(blRadiusX, tlRadiusX);
    final double topRadius = math.max(tlRadiusY, trRadiusY);
    final double rightRadius = math.max(trRadiusX, brRadiusX);
    final double bottomRadius = math.max(brRadiusY, blRadiusY);

    return Rect.fromLTRB(
        left + leftRadius * kInsetFactor,
        top + topRadius * kInsetFactor,
        right - rightRadius * kInsetFactor,
        bottom - bottomRadius * kInsetFactor);
  }

  Rect get middleRect {
    final double leftRadius = math.max(blRadiusX, tlRadiusX);
    final double topRadius = math.max(tlRadiusY, trRadiusY);
    final double rightRadius = math.max(trRadiusX, brRadiusX);
    final double bottomRadius = math.max(brRadiusY, blRadiusY);
    return Rect.fromLTRB(left + leftRadius, top + topRadius,
        right - rightRadius, bottom - bottomRadius);
  }

  Rect get wideMiddleRect {
    final double topRadius = math.max(tlRadiusY, trRadiusY);
    final double bottomRadius = math.max(brRadiusY, blRadiusY);
    return Rect.fromLTRB(left, top + topRadius, right, bottom - bottomRadius);
  }

  Rect get tallMiddleRect {
    final double leftRadius = math.max(blRadiusX, tlRadiusX);
    final double rightRadius = math.max(trRadiusX, brRadiusX);
    return Rect.fromLTRB(left + leftRadius, top, right - rightRadius, bottom);
  }

  bool get isEmpty => left >= right || top >= bottom;
  bool get isFinite =>
      left.isFinite && top.isFinite && right.isFinite && bottom.isFinite;
  bool get isRect {
    return (tlRadiusX == 0.0 || tlRadiusY == 0.0) &&
        (trRadiusX == 0.0 || trRadiusY == 0.0) &&
        (blRadiusX == 0.0 || blRadiusY == 0.0) &&
        (brRadiusX == 0.0 || brRadiusY == 0.0);
  }

  bool get isStadium {
    return tlRadius == trRadius &&
        trRadius == brRadius &&
        brRadius == blRadius &&
        (width <= 2.0 * tlRadiusX || height <= 2.0 * tlRadiusY);
  }

  bool get isEllipse {
    return tlRadius == trRadius &&
        trRadius == brRadius &&
        brRadius == blRadius &&
        width <= 2.0 * tlRadiusX &&
        height <= 2.0 * tlRadiusY;
  }

  bool get isCircle => width == height && isEllipse;
  double get shortestSide => math.min(width.abs(), height.abs());
  double get longestSide => math.max(width.abs(), height.abs());
  bool get hasNaN =>
      left.isNaN ||
      top.isNaN ||
      right.isNaN ||
      bottom.isNaN ||
      trRadiusX.isNaN ||
      trRadiusY.isNaN ||
      tlRadiusX.isNaN ||
      tlRadiusY.isNaN ||
      brRadiusX.isNaN ||
      brRadiusY.isNaN ||
      blRadiusX.isNaN ||
      blRadiusY.isNaN;
  Offset get center => Offset(left + width / 2.0, top + height / 2.0);

  // Returns the minimum between min and scale to which radius1 and radius2
  // should be scaled with in order not to exceed the limit.
  double _getMin(double min, double radius1, double radius2, double limit) {
    final double sum = radius1 + radius2;
    if (sum > limit && sum != 0.0) return math.min(min, limit / sum);
    return min;
  }

  RRect scaleRadii() {
    double scale = 1.0;
    final double absWidth = width.abs();
    final double absHeight = height.abs();
    scale = _getMin(scale, blRadiusY, tlRadiusY, absHeight);
    scale = _getMin(scale, tlRadiusX, trRadiusX, absWidth);
    scale = _getMin(scale, trRadiusY, brRadiusY, absHeight);
    scale = _getMin(scale, brRadiusX, blRadiusX, absWidth);

    if (scale < 1.0) {
      return RRect._raw(
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        tlRadiusX: tlRadiusX * scale,
        tlRadiusY: tlRadiusY * scale,
        trRadiusX: trRadiusX * scale,
        trRadiusY: trRadiusY * scale,
        blRadiusX: blRadiusX * scale,
        blRadiusY: blRadiusY * scale,
        brRadiusX: brRadiusX * scale,
        brRadiusY: brRadiusY * scale,
      );
    }

    return RRect._raw(
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      tlRadiusX: tlRadiusX,
      tlRadiusY: tlRadiusY,
      trRadiusX: trRadiusX,
      trRadiusY: trRadiusY,
      blRadiusX: blRadiusX,
      blRadiusY: blRadiusY,
      brRadiusX: brRadiusX,
      brRadiusY: brRadiusY,
    );
  }

  bool contains(Offset point) {
    if (point.dx < left ||
        point.dx >= right ||
        point.dy < top ||
        point.dy >= bottom) return false; // outside bounding box

    final RRect scaled = scaleRadii();

    double x;
    double y;
    double radiusX;
    double radiusY;
    // check whether point is in one of the rounded corner areas
    // x, y -> translate to ellipse center
    if (point.dx < left + scaled.tlRadiusX &&
        point.dy < top + scaled.tlRadiusY) {
      x = point.dx - left - scaled.tlRadiusX;
      y = point.dy - top - scaled.tlRadiusY;
      radiusX = scaled.tlRadiusX;
      radiusY = scaled.tlRadiusY;
    } else if (point.dx > right - scaled.trRadiusX &&
        point.dy < top + scaled.trRadiusY) {
      x = point.dx - right + scaled.trRadiusX;
      y = point.dy - top - scaled.trRadiusY;
      radiusX = scaled.trRadiusX;
      radiusY = scaled.trRadiusY;
    } else if (point.dx > right - scaled.brRadiusX &&
        point.dy > bottom - scaled.brRadiusY) {
      x = point.dx - right + scaled.brRadiusX;
      y = point.dy - bottom + scaled.brRadiusY;
      radiusX = scaled.brRadiusX;
      radiusY = scaled.brRadiusY;
    } else if (point.dx < left + scaled.blRadiusX &&
        point.dy > bottom - scaled.blRadiusY) {
      x = point.dx - left - scaled.blRadiusX;
      y = point.dy - bottom + scaled.blRadiusY;
      radiusX = scaled.blRadiusX;
      radiusY = scaled.blRadiusY;
    } else {
      return true; // inside and not within the rounded corner area
    }

    x = x / radiusX;
    y = y / radiusY;
    // check if the point is outside the unit circle
    if (x * x + y * y > 1.0) return false;
    return true;
  }

  static RRect? lerp(RRect? a, RRect? b, double t) {
    assert(t != null); // ignore: unnecessary_null_comparison
    if (b == null) {
      if (a == null) {
        return null;
      } else {
        final double k = 1.0 - t;
        return RRect._raw(
          left: a.left * k,
          top: a.top * k,
          right: a.right * k,
          bottom: a.bottom * k,
          tlRadiusX: a.tlRadiusX * k,
          tlRadiusY: a.tlRadiusY * k,
          trRadiusX: a.trRadiusX * k,
          trRadiusY: a.trRadiusY * k,
          brRadiusX: a.brRadiusX * k,
          brRadiusY: a.brRadiusY * k,
          blRadiusX: a.blRadiusX * k,
          blRadiusY: a.blRadiusY * k,
        );
      }
    } else {
      if (a == null) {
        return RRect._raw(
          left: b.left * t,
          top: b.top * t,
          right: b.right * t,
          bottom: b.bottom * t,
          tlRadiusX: b.tlRadiusX * t,
          tlRadiusY: b.tlRadiusY * t,
          trRadiusX: b.trRadiusX * t,
          trRadiusY: b.trRadiusY * t,
          brRadiusX: b.brRadiusX * t,
          brRadiusY: b.brRadiusY * t,
          blRadiusX: b.blRadiusX * t,
          blRadiusY: b.blRadiusY * t,
        );
      } else {
        return RRect._raw(
          left: _lerpDouble(a.left, b.left, t),
          top: _lerpDouble(a.top, b.top, t),
          right: _lerpDouble(a.right, b.right, t),
          bottom: _lerpDouble(a.bottom, b.bottom, t),
          tlRadiusX: _lerpDouble(a.tlRadiusX, b.tlRadiusX, t),
          tlRadiusY: _lerpDouble(a.tlRadiusY, b.tlRadiusY, t),
          trRadiusX: _lerpDouble(a.trRadiusX, b.trRadiusX, t),
          trRadiusY: _lerpDouble(a.trRadiusY, b.trRadiusY, t),
          brRadiusX: _lerpDouble(a.brRadiusX, b.brRadiusX, t),
          brRadiusY: _lerpDouble(a.brRadiusY, b.brRadiusY, t),
          blRadiusX: _lerpDouble(a.blRadiusX, b.blRadiusX, t),
          blRadiusY: _lerpDouble(a.blRadiusY, b.blRadiusY, t),
        );
      }
    }
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (runtimeType != other.runtimeType) return false;
    return other is RRect &&
        other.left == left &&
        other.top == top &&
        other.right == right &&
        other.bottom == bottom &&
        other.tlRadiusX == tlRadiusX &&
        other.tlRadiusY == tlRadiusY &&
        other.trRadiusX == trRadiusX &&
        other.trRadiusY == trRadiusY &&
        other.blRadiusX == blRadiusX &&
        other.blRadiusY == blRadiusY &&
        other.brRadiusX == brRadiusX &&
        other.brRadiusY == brRadiusY;
  }

  @override
  int get hashCode => hashValues(left, top, right, bottom, tlRadiusX, tlRadiusY,
      trRadiusX, trRadiusY, blRadiusX, blRadiusY, brRadiusX, brRadiusY);

  @override
  String toString() {
    final String rect = '${left.toStringAsFixed(1)}, '
        '${top.toStringAsFixed(1)}, '
        '${right.toStringAsFixed(1)}, '
        '${bottom.toStringAsFixed(1)}';
    if (tlRadius == trRadius && trRadius == brRadius && brRadius == blRadius) {
      if (tlRadius.x == tlRadius.y)
        return 'RRect.fromLTRBR($rect, ${tlRadius.x.toStringAsFixed(1)})';
      return 'RRect.fromLTRBXY($rect, ${tlRadius.x.toStringAsFixed(1)}, ${tlRadius.y.toStringAsFixed(1)})';
    }
    return 'RRect.fromLTRBAndCorners('
        '$rect, '
        'topLeft: $tlRadius, '
        'topRight: $trRadius, '
        'bottomRight: $brRadius, '
        'bottomLeft: $blRadius'
        ')';
  }
}
// Modeled after Skia's SkRSXform.
