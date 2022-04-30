import { Float32List } from "@Types"

export class Vector3 {
  public v3storage: Float32List
  public get x () {
    return this.v3storage[0]
  }
  public set x (x) {
    this.v3storage[0] = x
  } 
  public get y () {
    return this.v3storage[1]
  }
  public set y (y) {
    this.v3storage[1] = y
  } 
  public get z () {
    return this.v3storage[2]
  }
  public set z (z) {
    this.v3storage[2] = z
  } 

  /// The components of the vector.
  public get storage (): Float32List {
    return this.v3storage
  }

  static min(a: Vector3, b: Vector3, result: Vector3): void {
    result.x = Math.min(a.x, b.x)
    result.y = Math.min(a.y, b.y)
    result.z = Math.min(a.z, b.z)
  }

  static max(a: Vector3, b: Vector3, result: Vector3): void {
    result.x = Math.max(a.x, b.x)
    result.y = Math.max(a.y, b.y)
    result.z = Math.max(a.z, b.z)
  }

  /// Interpolate between [min] and [max] with the amount of [a] using a linear
  /// interpolation and store the values in [result].
  static mix(min: Vector3, max: Vector3, a: number, result: Vector3): void {
    result.x = min.x + a * (max.x - min.x)
    result.y = min.y + a * (max.y - min.y)
    result.z = min.z + a * (max.z - min.z)
  }

  static factory (x: number, y: number, z: number) {
    const vector3 = Vector3.zero()
    vector3.setValues(x, y, z)

    return vector3
  }

  static zero() {
    const vector3 = new Vector3()
    vector3.v3storage = new Float32List(3)

    return vector3
  }

  /// Splat [value] into all lanes of the vector.
  factory Vector3.all(double value) => Vector3.zero()..splat(value);

  /// Copy of [other].
  factory Vector3.copy(Vector3 other) => Vector3.zero()..setFrom(other);

  /// Constructs Vector3 with given Float32List as [storage].
  Vector3.fromFloat32List(this.v3storage);

  /// Constructs Vector3 with a [storage] that views given [buffer] starting at
  /// [offset]. [offset] has to be multiple of [Float32List.bytesPerElement].
  Vector3.fromBuffer(ByteBuffer buffer, int offset)
      : v3storage = Float32List.view(buffer, offset, 3);

  /// Generate random vector in the range (0, 0, 0) to (1, 1, 1). You can
  /// optionally pass your own random number generator.
  factory Vector3.random([math.Random? rng]) {
    rng ??= math.Random();
    return Vector3(rng.nextDouble(), rng.nextDouble(), rng.nextDouble());
  }

  /// Set the values of the vector.
  setValues (x: number, y: number, z: number) {
    this.v3storage[0] = x
    this.v3storage[1] = y
    this.v3storage[2] = z
  }

  /// Zero vector.
  void setZero() {
    v3storage[2] = 0.0;
    v3storage[1] = 0.0;
    v3storage[0] = 0.0;
  }

  /// Set the values by copying them from [other].
  void setFrom(Vector3 other) {
    Float32List otherStorage = other.v3storage;
    v3storage[0] = otherStorage[0];
    v3storage[1] = otherStorage[1];
    v3storage[2] = otherStorage[2];
  }

  /// Splat [arg] into all lanes of the vector.
  void splat(double arg) {
    v3storage[2] = arg;
    v3storage[1] = arg;
    v3storage[0] = arg;
  }

  /// Access the component of the vector at the index [i].
  double operator [](int i) => v3storage[i];

  /// Set the component of the vector at the index [i].
  void operator []=(int i, double v) {
    v3storage[i] = v;
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
      v3storage[0] *= l;
      v3storage[1] *= l;
      v3storage[2] *= l;
    }
  }

  /// Length.
  double get length => math.sqrt(length2);

  /// Length squared.
  double get length2 {
    double sum;
    sum = v3storage[0] * v3storage[0];
    sum += v3storage[1] * v3storage[1];
    sum += v3storage[2] * v3storage[2];
    return sum;
  }

  /// Normalizes [this].
  double normalize() {
    double l = length;
    if (l == 0.0) {
      return 0.0;
    }
    double d = 1.0 / l;
    v3storage[0] *= d;
    v3storage[1] *= d;
    v3storage[2] *= d;
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
    Float32List argStorage = arg.v3storage;
    double dx = v3storage[0] - argStorage[0];
    double dy = v3storage[1] - argStorage[1];
    double dz = v3storage[2] - argStorage[2];

    return dx * dx + dy * dy + dz * dz;
  }

  /// Returns the angle between [this] vector and [other] in radians.
  double angleTo(Vector3 other) {
    Float32List otherStorage = other.v3storage;
    if (v3storage[0] == otherStorage[0] &&
        v3storage[1] == otherStorage[1] &&
        v3storage[2] == otherStorage[2]) {
      return 0.0;
    }

    double d = dot(other) / (length * other.length);

    return math.acos(d.clamp(-1.0, 1.0));
  }

  /// Inner product.
  double dot(Vector3 other) {
    Float32List otherStorage = other.v3storage;
    double sum;
    sum = v3storage[0] * otherStorage[0];
    sum += v3storage[1] * otherStorage[1];
    sum += v3storage[2] * otherStorage[2];
    return sum;
  }

  /// Projects [this] using the projection matrix [arg]
  void applyProjection(Matrix4 arg) {
    Float32List argStorage = arg.storage;
    double x = v3storage[0];
    double y = v3storage[1];
    double z = v3storage[2];
    double d = 1.0 /
        (argStorage[3] * x +
            argStorage[7] * y +
            argStorage[11] * z +
            argStorage[15]);
    v3storage[0] = (argStorage[0] * x +
            argStorage[4] * y +
            argStorage[8] * z +
            argStorage[12]) *
        d;
    v3storage[1] = (argStorage[1] * x +
            argStorage[5] * y +
            argStorage[9] * z +
            argStorage[13]) *
        d;
    v3storage[2] = (argStorage[2] * x +
            argStorage[6] * y +
            argStorage[10] * z +
            argStorage[14]) *
        d;
  }

  /// True if any component is infinite.
  bool get isInfinite {
    bool isInfinite = false;
    isInfinite = isInfinite || v3storage[0].isInfinite;
    isInfinite = isInfinite || v3storage[1].isInfinite;
    isInfinite = isInfinite || v3storage[2].isInfinite;
    return isInfinite;
  }

  /// True if any component is NaN.
  bool get isNaN {
    bool isNan = false;
    isNan = isNan || v3storage[0].isNaN;
    isNan = isNan || v3storage[1].isNaN;
    isNan = isNan || v3storage[2].isNaN;
    return isNan;
  }

  /// Add [arg] to [this].
  void add(Vector3 arg) {
    Float32List argStorage = arg.v3storage;
    v3storage[0] = v3storage[0] + argStorage[0];
    v3storage[1] = v3storage[1] + argStorage[1];
    v3storage[2] = v3storage[2] + argStorage[2];
  }

  /// Add [arg] scaled by [factor] to [this].
  void addScaled(Vector3 arg, double factor) {
    Float32List argStorage = arg.v3storage;
    v3storage[0] = v3storage[0] + argStorage[0] * factor;
    v3storage[1] = v3storage[1] + argStorage[1] * factor;
    v3storage[2] = v3storage[2] + argStorage[2] * factor;
  }

  /// Subtract [arg] from [this].
  void sub(Vector3 arg) {
    Float32List argStorage = arg.v3storage;
    v3storage[0] = v3storage[0] - argStorage[0];
    v3storage[1] = v3storage[1] - argStorage[1];
    v3storage[2] = v3storage[2] - argStorage[2];
  }

  /// Multiply entries in [this] with entries in [arg].
  void multiply(Vector3 arg) {
    Float32List argStorage = arg.v3storage;
    v3storage[0] = v3storage[0] * argStorage[0];
    v3storage[1] = v3storage[1] * argStorage[1];
    v3storage[2] = v3storage[2] * argStorage[2];
  }

  /// Divide entries in [this] with entries in [arg].
  void divide(Vector3 arg) {
    Float32List argStorage = arg.v3storage;
    v3storage[0] = v3storage[0] / argStorage[0];
    v3storage[1] = v3storage[1] / argStorage[1];
    v3storage[2] = v3storage[2] / argStorage[2];
  }

  /// Scale [this].
  void scale(double arg) {
    v3storage[2] = v3storage[2] * arg;
    v3storage[1] = v3storage[1] * arg;
    v3storage[0] = v3storage[0] * arg;
  }

  /// Create a copy of [this] and scale it by [arg].
  Vector3 scaled(double arg) => clone()..scale(arg);

  /// Clone of [this].
  Vector3 clone() => Vector3.copy(this);

  /// Copy [this] into [arg].
  Vector3 copyInto(Vector3 arg) {
    Float32List argStorage = arg.v3storage;
    argStorage[0] = v3storage[0];
    argStorage[1] = v3storage[1];
    argStorage[2] = v3storage[2];
    return arg;
  }

  /// Copies [this] into [array] starting at [offset].
  void copyIntoArray(List<double> array, [int offset = 0]) {
    array[offset + 2] = v3storage[2];
    array[offset + 1] = v3storage[1];
    array[offset + 0] = v3storage[0];
  }

  set x(double arg) => v3storage[0] = arg;
  set y(double arg) => v3storage[1] = arg;
  set z(double arg) => v3storage[2] = arg;

}
