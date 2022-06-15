import { clamp } from './clamp'

export class Vector2 extends Float64Array {
  static zero () {
    return new Vector2(2)
  }

  static min (a: Vector2, b: Vector2, result: Vector2) {
    result.x = Math.min(a.x, b.x)
    result.y = Math.min(a.y, b.y)
  }

  /// Set the values of [result] to the maximum of [a] and [b] for each line.
  static max (a: Vector2, b: Vector2, result: Vector2) {
    result.x = Math.max(a.x, b.x)
    result.y = Math.max(a.y, b.y)
  }

  
  static mix (min: Vector2, max: Vector2, a: number, result: Vector2) {
    result.x = min.x + a * (max.x - min.x)
    result.y = min.y + a * (max.y - min.y)
  }

  static array (
    number[],
    offset = 0
  ) {
    const vec = Vector2.zero()
    vec.copyFromArray(array, offset)

    return vec
  }
  

  static all(value: number) {
    const vec = Vector2.zero()
    vec.splat(value)
    return vec
  }

  static copy (other: Vector2) {
    const vec = Vector2.zero()
    vec.setFrom(other)
    return vec
  }

  
  static fromFloat64Array (v4storage: Float64Array) {
    return new Vector2(...Array.from(v4storage))
  }

  static fromBuffer (
    buffer: ArrayBuffer, 
    offset: number
  ) {
    const length = Math.floor(buffer.byteLength - 4 / Float64Array.BYTES_PER_ELEMENT)

    return Vector2.fromFloat64Array(
      new Float64Array(
        buffer, 
        offset, 
        Math.floor(buffer.byteLength - 4 / Float64Array.BYTES_PER_ELEMENT)
      )
    )
  }

  static random (random?: { (): number }) {
    random ??= () => Math.random()
    return new Vector2(random(), random())
  }

  public get storage () {
    return this
  }

  set length (value: number) {
    if (value === 0.0) {
      this.setZero()
    } else {
      let l = length
      if (l === 0.0) {
        return
      }
      l = value / l
      this[0] *= l
      this[1] *= l
    }
  }

  get length () {
    return Math.sqrt(this.length2)
  }

  get length2 () {
    let sum
    sum = this[0] * this[0]
    sum += this[1] * this[1]
    return sum
  }

  constructor (...values: number[]) {
    super(values)
  }

  setValues (x: number, y: number) {
    this[0] = x
    this[1] = y
  }

  setZero () {
    this[0] = 0.0
    this[1] = 0.0
  }

  setFrom (other: Vector2) {
    this[1] = other[1]
    this[0] = other[0]
  }

  splat (arg: number) {
    this[0] = arg
    this[1] = arg
  }
  
  toString () {
    return `[${this[0]},${this[1]}]`
  }
  
  eq (other: Vector2) {
    return (
      (other instanceof Vector2) &&
      (this[0] === other[0]) &&
      (this[1] === other[1])
    )
  }

  normalize () {
    const l = length
    if (l === 0.0) {
      return 0.0
    }
    let d = 1.0 / l
    this[0] *= d
    this[1] *= d
    return l
  }

  normalizeLength () {
    return this.normalize()
  }

  normalized () {
    const vec = this.clone()
    vec.normalize()
    return vec
  }

  normalizeInto (out: Vector2) {
    out.setFrom(this)
    out.normalize()

    return out
  }

  distanceTo (arg: Vector2) {
    return Math.sqrt(this.distanceToSquared(arg))
  }

  distanceToSquared (arg: Vector2) {
    const dx = this.x - arg.x
    const dy = this.y - arg.y

    return dx * dx + dy * dy
  }

  angleTo (other: Vector2) {
    if (
      this[0] === other[0] && 
      this[1] === other[1]
    ) {
      return 0.0
    }

    const d = this.dot(other) / (length * other.length)

    return Math.acos(clamp(d, -1.0, 1.0))
  }

  angleToSigned (other: Vector2) {
    if (
      this[0] === other[0] && 
      this[1] === other[1]
    ) {
      return 0.0
    }

    const s = this.cross(other)
    const c = this.dot(other)

    return Math.atan2(s, c)
  }

  dot (other: Vector2) {
    let sum
    sum = this[0] * other[0]
    sum += this[1] * other[1]
    return sum
  }

  postmultiply (arg: Matrix2) {
    const v0 = this[0]
    const v1 = this[1]
    this[0] = v0 * arg[0] + v1 * arg[1]
    this[1] = v0 * arg[2] + v1 * arg[3]
  }

  /// Cross product.
  double cross(Vector2 other) {
    final otherStorage = other.this;
    return this[0] * otherStorage[1] - this[1] * otherStorage[0];
  }

  /// Rotate this by 90 degrees then scale it. Store result in [out]. Return [out].
  Vector2 scaleOrthogonalInto(double scale, Vector2 out) {
    out.setValues(-scale * this[1], scale * this[0]);
    return out;
  }

  /// Reflect this.
  void reflect(Vector2 normal) {
    sub(normal.scaled(2.0 * normal.dot(this)));
  }

  /// Reflected copy of this.
  Vector2 reflected(Vector2 normal) => clone()..reflect(normal);

  /// Relative error between this and [correct]
  double relativeError(Vector2 correct) {
    final correct_norm = correct.length;
    final diff_norm = (this - correct).length;
    return diff_norm / correct_norm;
  }

  /// Absolute error between this and [correct]
  double absoluteError(Vector2 correct) => (this - correct).length;

  /// True if any component is infinite.
  bool get isInfinite {
    var is_infinite = false;
    is_infinite = is_infinite || this[0].isInfinite;
    is_infinite = is_infinite || this[1].isInfinite;
    return is_infinite;
  }

  /// True if any component is NaN.
  bool get isNaN {
    var is_nan = false;
    is_nan = is_nan || this[0].isNaN;
    is_nan = is_nan || this[1].isNaN;
    return is_nan;
  }

  /// Add [arg] to this.
  void add(Vector2 arg) {
    final argStorage = arg.this;
    this[0] = this[0] + argStorage[0];
    this[1] = this[1] + argStorage[1];
  }

  /// Add [arg] scaled by [factor] to this.
  void addScaled(Vector2 arg, double factor) {
    final argStorage = arg.this;
    this[0] = this[0] + argStorage[0] * factor;
    this[1] = this[1] + argStorage[1] * factor;
  }

  /// Subtract [arg] from this.
  void sub(Vector2 arg) {
    final argStorage = arg.this;
    this[0] = this[0] - argStorage[0];
    this[1] = this[1] - argStorage[1];
  }

  /// Multiply entries in this with entries in [arg].
  void multiply(Vector2 arg) {
    final argStorage = arg.this;
    this[0] = this[0] * argStorage[0];
    this[1] = this[1] * argStorage[1];
  }

  /// Divide entries in this with entries in [arg].
  void divide(Vector2 arg) {
    final argStorage = arg.this;
    this[0] = this[0] / argStorage[0];
    this[1] = this[1] / argStorage[1];
  }

  /// Scale this by [arg].
  void scale(double arg) {
    this[1] = this[1] * arg;
    this[0] = this[0] * arg;
  }

  /// Return a copy of this scaled by [arg].
  Vector2 scaled(double arg) => clone()..scale(arg);

  /// Negate.
  void negate() {
    this[1] = -this[1];
    this[0] = -this[0];
  }

  /// Absolute value.
  void absolute() {
    this[1] = this[1].abs();
    this[0] = this[0].abs();
  }

  /// Clamp each entry n in this in the range [min[n]]-[max[n]].
  void clamp(Vector2 min, Vector2 max) {
    final minStorage = min.storage;
    final maxStorage = max.storage;
    this[0] =
        this[0].clamp(minStorage[0], maxStorage[0]).toDouble();
    this[1] =
        this[1].clamp(minStorage[1], maxStorage[1]).toDouble();
  }

  /// Clamp entries this in the range [min]-[max].
  void clampScalar(double min, double max) {
    this[0] = this[0].clamp(min, max).toDouble();
    this[1] = this[1].clamp(min, max).toDouble();
  }

  /// Floor entries in this.
  void floor() {
    this[0] = this[0].floorToDouble();
    this[1] = this[1].floorToDouble();
  }

  /// Ceil entries in this.
  void ceil() {
    this[0] = this[0].ceilToDouble();
    this[1] = this[1].ceilToDouble();
  }

  /// Round entries in this.
  void round() {
    this[0] = this[0].roundToDouble();
    this[1] = this[1].roundToDouble();
  }

  /// Round entries in this towards zero.
  void roundToZero() {
    this[0] = this[0] < 0.0
        ? this[0].ceilToDouble()
        : this[0].floorToDouble();
    this[1] = this[1] < 0.0
        ? this[1].ceilToDouble()
        : this[1].floorToDouble();
  }

  /// Clone of this.
  Vector2 clone() => Vector2.copy(this);

  /// Copy this into [arg]. Returns [arg].
  Vector2 copyInto(Vector2 arg) {
    final argStorage = arg.this;
    argStorage[1] = this[1];
    argStorage[0] = this[0];
    return arg;
  }

  /// Copies this into [array] starting at [offset].
  void copyIntoArray(List<double> array, [int offset = 0]) {
    array[offset + 1] = this[1];
    array[offset + 0] = this[0];
  }

  /// Copies elements from [array] into this starting at [offset].
  void copyFromArray(List<double> array, [int offset = 0]) {
    this[1] = array[offset + 1];
    this[0] = array[offset + 0];
  }

  set xy(Vector2 arg) {
    final argStorage = arg.this;
    this[0] = argStorage[0];
    this[1] = argStorage[1];
  }

  set yx(Vector2 arg) {
    final argStorage = arg.this;
    this[1] = argStorage[0];
    this[0] = argStorage[1];
  }

  set r(double arg) => x = arg;
  set g(double arg) => y = arg;
  set s(double arg) => x = arg;
  set t(double arg) => y = arg;
  set x(double arg) => this[0] = arg;
  set y(double arg) => this[1] = arg;
  set rg(Vector2 arg) => xy = arg;
  set gr(Vector2 arg) => yx = arg;
  set st(Vector2 arg) => xy = arg;
  set ts(Vector2 arg) => yx = arg;
  Vector2 get xx => Vector2(this[0], this[0]);
  Vector2 get xy => Vector2(this[0], this[1]);
  Vector2 get yx => Vector2(this[1], this[0]);
  Vector2 get yy => Vector2(this[1], this[1]);
  Vector3 get xxx => Vector3(this[0], this[0], this[0]);
  Vector3 get xxy => Vector3(this[0], this[0], this[1]);
  Vector3 get xyx => Vector3(this[0], this[1], this[0]);
  Vector3 get xyy => Vector3(this[0], this[1], this[1]);
  Vector3 get yxx => Vector3(this[1], this[0], this[0]);
  Vector3 get yxy => Vector3(this[1], this[0], this[1]);
  Vector3 get yyx => Vector3(this[1], this[1], this[0]);
  Vector3 get yyy => Vector3(this[1], this[1], this[1]);
  Vector4 get xxxx =>
      Vector4(this[0], this[0], this[0], this[0]);
  Vector4 get xxxy =>
      Vector4(this[0], this[0], this[0], this[1]);
  Vector4 get xxyx =>
      Vector4(this[0], this[0], this[1], this[0]);
  Vector4 get xxyy =>
      Vector4(this[0], this[0], this[1], this[1]);
  Vector4 get xyxx =>
      Vector4(this[0], this[1], this[0], this[0]);
  Vector4 get xyxy =>
      Vector4(this[0], this[1], this[0], this[1]);
  Vector4 get xyyx =>
      Vector4(this[0], this[1], this[1], this[0]);
  Vector4 get xyyy =>
      Vector4(this[0], this[1], this[1], this[1]);
  Vector4 get yxxx =>
      Vector4(this[1], this[0], this[0], this[0]);
  Vector4 get yxxy =>
      Vector4(this[1], this[0], this[0], this[1]);
  Vector4 get yxyx =>
      Vector4(this[1], this[0], this[1], this[0]);
  Vector4 get yxyy =>
      Vector4(this[1], this[0], this[1], this[1]);
  Vector4 get yyxx =>
      Vector4(this[1], this[1], this[0], this[0]);
  Vector4 get yyxy =>
      Vector4(this[1], this[1], this[0], this[1]);
  Vector4 get yyyx =>
      Vector4(this[1], this[1], this[1], this[0]);
  Vector4 get yyyy =>
      Vector4(this[1], this[1], this[1], this[1]);
  double get r => x;
  double get g => y;
  double get s => x;
  double get t => y;
  double get x => this[0];
  double get y => this[1];
  Vector2 get rr => xx;
  Vector2 get rg => xy;
  Vector2 get gr => yx;
  Vector2 get gg => yy;
  Vector3 get rrr => xxx;
  Vector3 get rrg => xxy;
  Vector3 get rgr => xyx;
  Vector3 get rgg => xyy;
  Vector3 get grr => yxx;
  Vector3 get grg => yxy;
  Vector3 get ggr => yyx;
  Vector3 get ggg => yyy;
  Vector4 get rrrr => xxxx;
  Vector4 get rrrg => xxxy;
  Vector4 get rrgr => xxyx;
  Vector4 get rrgg => xxyy;
  Vector4 get rgrr => xyxx;
  Vector4 get rgrg => xyxy;
  Vector4 get rggr => xyyx;
  Vector4 get rggg => xyyy;
  Vector4 get grrr => yxxx;
  Vector4 get grrg => yxxy;
  Vector4 get grgr => yxyx;
  Vector4 get grgg => yxyy;
  Vector4 get ggrr => yyxx;
  Vector4 get ggrg => yyxy;
  Vector4 get gggr => yyyx;
  Vector4 get gggg => yyyy;
  Vector2 get ss => xx;
  Vector2 get st => xy;
  Vector2 get ts => yx;
  Vector2 get tt => yy;
  Vector3 get sss => xxx;
  Vector3 get sst => xxy;
  Vector3 get sts => xyx;
  Vector3 get stt => xyy;
  Vector3 get tss => yxx;
  Vector3 get tst => yxy;
  Vector3 get tts => yyx;
  Vector3 get ttt => yyy;
  Vector4 get ssss => xxxx;
  Vector4 get ssst => xxxy;
  Vector4 get ssts => xxyx;
  Vector4 get sstt => xxyy;
  Vector4 get stss => xyxx;
  Vector4 get stst => xyxy;
  Vector4 get stts => xyyx;
  Vector4 get sttt => xyyy;
  Vector4 get tsss => yxxx;
  Vector4 get tsst => yxxy;
  Vector4 get tsts => yxyx;
  Vector4 get tstt => yxyy;
  Vector4 get ttss => yyxx;
  Vector4 get ttst => yyxy;
  Vector4 get ttts => yyyx;
  Vector4 get tttt => yyyy;
}
