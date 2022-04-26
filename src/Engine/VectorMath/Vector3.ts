export class Vector3 {
  final Float32List _v3storage;

  /// The components of the vector.
  Float32List get storage => _v3storage;

  /// Set the values of [result] to the minimum of [a] and [b] for each line.
  static void min(Vector3 a, Vector3 b, Vector3 result) {
    result
      ..x = math.min(a.x, b.x)
      ..y = math.min(a.y, b.y)
      ..z = math.min(a.z, b.z);
  }

  /// Set the values of [result] to the maximum of [a] and [b] for each line.
  static void max(Vector3 a, Vector3 b, Vector3 result) {
    result
      ..x = math.max(a.x, b.x)
      ..y = math.max(a.y, b.y)
      ..z = math.max(a.z, b.z);
  }

  /// Interpolate between [min] and [max] with the amount of [a] using a linear
  /// interpolation and store the values in [result].
  static void mix(Vector3 min, Vector3 max, double a, Vector3 result) {
    result
      ..x = min.x + a * (max.x - min.x)
      ..y = min.y + a * (max.y - min.y)
      ..z = min.z + a * (max.z - min.z);
  }

  /// Construct a new vector with the specified values.
  factory Vector3(double x, double y, double z) =>
      Vector3.zero()..setValues(x, y, z);

  /// Zero vector.
  Vector3.zero() : _v3storage = Float32List(3);

  /// Splat [value] into all lanes of the vector.
  factory Vector3.all(double value) => Vector3.zero()..splat(value);

  /// Copy of [other].
  factory Vector3.copy(Vector3 other) => Vector3.zero()..setFrom(other);

  /// Constructs Vector3 with given Float32List as [storage].
  Vector3.fromFloat32List(this._v3storage);

  /// Constructs Vector3 with a [storage] that views given [buffer] starting at
  /// [offset]. [offset] has to be multiple of [Float32List.bytesPerElement].
  Vector3.fromBuffer(ByteBuffer buffer, int offset)
      : _v3storage = Float32List.view(buffer, offset, 3);

  /// Generate random vector in the range (0, 0, 0) to (1, 1, 1). You can
  /// optionally pass your own random number generator.
  factory Vector3.random([math.Random? rng]) {
    rng ??= math.Random();
    return Vector3(rng.nextDouble(), rng.nextDouble(), rng.nextDouble());
  }

  /// Set the values of the vector.
  void setValues(double x, double y, double z) {
    _v3storage[0] = x;
    _v3storage[1] = y;
    _v3storage[2] = z;
  }

  /// Zero vector.
  void setZero() {
    _v3storage[2] = 0.0;
    _v3storage[1] = 0.0;
    _v3storage[0] = 0.0;
  }

  /// Set the values by copying them from [other].
  void setFrom(Vector3 other) {
    final Float32List otherStorage = other._v3storage;
    _v3storage[0] = otherStorage[0];
    _v3storage[1] = otherStorage[1];
    _v3storage[2] = otherStorage[2];
  }

  /// Splat [arg] into all lanes of the vector.
  void splat(double arg) {
    _v3storage[2] = arg;
    _v3storage[1] = arg;
    _v3storage[0] = arg;
  }

  /// Access the component of the vector at the index [i].
  double operator [](int i) => _v3storage[i];

  /// Set the component of the vector at the index [i].
  void operator []=(int i, double v) {
    _v3storage[i] = v;
  }

  /// Set the length of the vector. A negative [value] will change the vectors
  /// orientation and a [value] of zero will set the vector to zero.
  set length(double value) {
    if (value == 0.0) {
      setZero();
    } else {
      double l = length;
      if (l == 0.0) {
        return;
      }
      l = value / l;
      _v3storage[0] *= l;
      _v3storage[1] *= l;
      _v3storage[2] *= l;
    }
  }

  /// Length.
  double get length => math.sqrt(length2);

  /// Length squared.
  double get length2 {
    double sum;
    sum = _v3storage[0] * _v3storage[0];
    sum += _v3storage[1] * _v3storage[1];
    sum += _v3storage[2] * _v3storage[2];
    return sum;
  }

  /// Normalizes [this].
  double normalize() {
    final double l = length;
    if (l == 0.0) {
      return 0.0;
    }
    final double d = 1.0 / l;
    _v3storage[0] *= d;
    _v3storage[1] *= d;
    _v3storage[2] *= d;
    return l;
  }

  /// Normalizes copy of [this].
  Vector3 normalized() => Vector3.copy(this)..normalize();

  /// Normalize vector into [out].
  Vector3 normalizeInto(Vector3 out) {
    out
      ..setFrom(this)
      ..normalize();
    return out;
  }

  /// Distance from [this] to [arg]
  double distanceTo(Vector3 arg) => math.sqrt(distanceToSquared(arg));

  /// Squared distance from [this] to [arg]
  double distanceToSquared(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    final double dx = _v3storage[0] - argStorage[0];
    final double dy = _v3storage[1] - argStorage[1];
    final double dz = _v3storage[2] - argStorage[2];

    return dx * dx + dy * dy + dz * dz;
  }

  /// Returns the angle between [this] vector and [other] in radians.
  double angleTo(Vector3 other) {
    final Float32List otherStorage = other._v3storage;
    if (_v3storage[0] == otherStorage[0] &&
        _v3storage[1] == otherStorage[1] &&
        _v3storage[2] == otherStorage[2]) {
      return 0.0;
    }

    final double d = dot(other) / (length * other.length);

    return math.acos(d.clamp(-1.0, 1.0));
  }

  /// Inner product.
  double dot(Vector3 other) {
    final Float32List otherStorage = other._v3storage;
    double sum;
    sum = _v3storage[0] * otherStorage[0];
    sum += _v3storage[1] * otherStorage[1];
    sum += _v3storage[2] * otherStorage[2];
    return sum;
  }

  /// Projects [this] using the projection matrix [arg]
  void applyProjection(Matrix4 arg) {
    final Float32List argStorage = arg.storage;
    final double x = _v3storage[0];
    final double y = _v3storage[1];
    final double z = _v3storage[2];
    final double d = 1.0 /
        (argStorage[3] * x +
            argStorage[7] * y +
            argStorage[11] * z +
            argStorage[15]);
    _v3storage[0] = (argStorage[0] * x +
            argStorage[4] * y +
            argStorage[8] * z +
            argStorage[12]) *
        d;
    _v3storage[1] = (argStorage[1] * x +
            argStorage[5] * y +
            argStorage[9] * z +
            argStorage[13]) *
        d;
    _v3storage[2] = (argStorage[2] * x +
            argStorage[6] * y +
            argStorage[10] * z +
            argStorage[14]) *
        d;
  }

  /// True if any component is infinite.
  bool get isInfinite {
    bool isInfinite = false;
    isInfinite = isInfinite || _v3storage[0].isInfinite;
    isInfinite = isInfinite || _v3storage[1].isInfinite;
    isInfinite = isInfinite || _v3storage[2].isInfinite;
    return isInfinite;
  }

  /// True if any component is NaN.
  bool get isNaN {
    bool isNan = false;
    isNan = isNan || _v3storage[0].isNaN;
    isNan = isNan || _v3storage[1].isNaN;
    isNan = isNan || _v3storage[2].isNaN;
    return isNan;
  }

  /// Add [arg] to [this].
  void add(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    _v3storage[0] = _v3storage[0] + argStorage[0];
    _v3storage[1] = _v3storage[1] + argStorage[1];
    _v3storage[2] = _v3storage[2] + argStorage[2];
  }

  /// Add [arg] scaled by [factor] to [this].
  void addScaled(Vector3 arg, double factor) {
    final Float32List argStorage = arg._v3storage;
    _v3storage[0] = _v3storage[0] + argStorage[0] * factor;
    _v3storage[1] = _v3storage[1] + argStorage[1] * factor;
    _v3storage[2] = _v3storage[2] + argStorage[2] * factor;
  }

  /// Subtract [arg] from [this].
  void sub(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    _v3storage[0] = _v3storage[0] - argStorage[0];
    _v3storage[1] = _v3storage[1] - argStorage[1];
    _v3storage[2] = _v3storage[2] - argStorage[2];
  }

  /// Multiply entries in [this] with entries in [arg].
  void multiply(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    _v3storage[0] = _v3storage[0] * argStorage[0];
    _v3storage[1] = _v3storage[1] * argStorage[1];
    _v3storage[2] = _v3storage[2] * argStorage[2];
  }

  /// Divide entries in [this] with entries in [arg].
  void divide(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    _v3storage[0] = _v3storage[0] / argStorage[0];
    _v3storage[1] = _v3storage[1] / argStorage[1];
    _v3storage[2] = _v3storage[2] / argStorage[2];
  }

  /// Scale [this].
  void scale(double arg) {
    _v3storage[2] = _v3storage[2] * arg;
    _v3storage[1] = _v3storage[1] * arg;
    _v3storage[0] = _v3storage[0] * arg;
  }

  /// Create a copy of [this] and scale it by [arg].
  Vector3 scaled(double arg) => clone()..scale(arg);

  /// Clone of [this].
  Vector3 clone() => Vector3.copy(this);

  /// Copy [this] into [arg].
  Vector3 copyInto(Vector3 arg) {
    final Float32List argStorage = arg._v3storage;
    argStorage[0] = _v3storage[0];
    argStorage[1] = _v3storage[1];
    argStorage[2] = _v3storage[2];
    return arg;
  }

  /// Copies [this] into [array] starting at [offset].
  void copyIntoArray(List<double> array, [int offset = 0]) {
    array[offset + 2] = _v3storage[2];
    array[offset + 1] = _v3storage[1];
    array[offset + 0] = _v3storage[0];
  }

  set x(double arg) => _v3storage[0] = arg;
  set y(double arg) => _v3storage[1] = arg;
  set z(double arg) => _v3storage[2] = arg;

  double get x => _v3storage[0];
  double get y => _v3storage[1];
  double get z => _v3storage[2];
}
