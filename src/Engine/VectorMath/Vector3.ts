import { clamp } from '@Shared'
import { Float32List } from '@Types'
import { Matrix4 } from './Matrix4'

export class Vector3 {
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

  static zero() {
    const vector3 = new Vector3()
    vector3.v3storage = new Float32List(3)

    return vector3
  }

  static all (value: number) {
    const vector3 = Vector3.zero()
    vector3.splat(value)
    return vector3
  }
  
  static copy (other: Vector3) {
    const vector3 = Vector3.zero()
    vector3.setFrom(other)
    return vector3
  }

  static fromFloat32List (v3storage: Float32List) {
    const vector3 = new Vector3()
    vector3.v3storage = v3storage
    return v3storage
  }

  static fromBuffer(buffer: Buffer, offset: number) {
    const v3storage = new Float32List(buffer, offset, 3)
    const vector3 = new Vector3()
    vector3.v3storage = v3storage
    return vector3
  }

  static random () {
    return new Vector3(Math.random(), Math.random(), Math.random());
  }

  public v3storage: Float32List = new Float32List(3)
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

  set length(value: number) {
    if (value === 0.0) {
      this.setZero()
    } else {
      let l = length;
      if (l === 0.0) {
        return
      }
      l = value / l
      this.v3storage[0] *= l
      this.v3storage[1] *= l
      this.v3storage[2] *= l
    }
  }

  public get length () {
    return Math.sqrt(this.length2)
  }

  public get length2 () {
    let sum
    sum = this.v3storage[0] * this.v3storage[0]
    sum += this.v3storage[1] * this.v3storage[1]
    sum += this.v3storage[2] * this.v3storage[2]
    return sum
  }

  get isInfinite (): boolean {
    let isInfinite = false
    isInfinite = isInfinite || !Number.isFinite(this.v3storage[0])
    isInfinite = isInfinite || !Number.isFinite(this.v3storage[1])
    isInfinite = isInfinite || !Number.isFinite(this.v3storage[2])
    return isInfinite;
  }

  /// True if any component is NaN.
  get isNaN (): boolean {
    let isNan = false
    isNan = isNan || Number.isNaN(this.v3storage[0])
    isNan = isNan || Number.isNaN(this.v3storage[1])
    isNan = isNan || Number.isNaN(this.v3storage[2])
    return isNan
  }

  constructor (x?: number, y?: number, z?: number) {
    if (x !== undefined) {
      this.x = x
    }

    if (y !== undefined) {
      this.y = y
    } 

    if (z !== undefined) {
      this.z = z
    }
  }

  /// Set the values of the vector.
  setValues (x: number, y: number, z: number) {
    this.v3storage[0] = x
    this.v3storage[1] = y
    this.v3storage[2] = z
  }

  
  setZero () {
    this.v3storage[2] = 0.0
    this.v3storage[1] = 0.0
    this.v3storage[0] = 0.0
  }

  
  setFrom (other: Vector3) {
    const otherStorage = other.v3storage
    this.v3storage[0] = otherStorage[0]
    this.v3storage[1] = otherStorage[1]
    this.v3storage[2] = otherStorage[2]
  }

  splat (arg: number) {
    this.v3storage[2] = arg
    this.v3storage[1] = arg
    this.v3storage[0] = arg
  }
  
  normalize (): number {
    const l = this.length
    if (l === 0.0) {
      return 0.0
    }

    const d = 1.0 / l
    this.v3storage[0] *= d
    this.v3storage[1] *= d
    this.v3storage[2] *= d
    return l
  }

  
  normalized (): Vector3  {
    const vector3 = Vector3.copy(this)
    vector3.normalize()

    return vector3
  }

  normalizeInto (out: Vector3): Vector3 {
    out.setFrom(this)
    out.normalize()
    return out
  }

  distanceTo (arg: Vector3): number {
    return Math.sqrt(this.distanceToSquared(arg))
  }

  distanceToSquared(arg: Vector3) {
    const argStorage = arg.v3storage
    const dx = this.v3storage[0] - argStorage[0]
    const dy = this.v3storage[1] - argStorage[1]
    const dz = this.v3storage[2] - argStorage[2]

    return dx * dx + dy * dy + dz * dz
  }

  angleTo (other: Vector3) {
    const otherStorage = other.v3storage
    if (
      this.v3storage[0] == otherStorage[0] &&
      this.v3storage[1] == otherStorage[1] &&
      this.v3storage[2] == otherStorage[2]
    ) {
      return 0.0
    }

    const d = this.dot(other) / (length * other.length)

    return Math.acos(clamp(d, -1.0, 1.0))
  }

  dot (other: Vector3) {
    const otherStorage = other.v3storage
    let sum
    sum = this.v3storage[0] * otherStorage[0]
    sum += this.v3storage[1] * otherStorage[1]
    sum += this.v3storage[2] * otherStorage[2]
    return sum
  }

  applyProjection (arg: Matrix4): void {
    const argStorage = arg.storage
    const x = this.v3storage[0]
    const y = this.v3storage[1]
    const z = this.v3storage[2]
    const d = 1.0 / (
      argStorage[3] * x +
      argStorage[7] * y +
      argStorage[11] * z +
      argStorage[15]
    )
    this.v3storage[0] = (
      argStorage[0] * x +
      argStorage[4] * y +
      argStorage[8] * z +
      argStorage[12]
    ) * d
    this.v3storage[1] = (
      argStorage[1] * x +
      argStorage[5] * y +
      argStorage[9] * z +
      argStorage[13]
    ) * d
    this.v3storage[2] = (
      argStorage[2] * x +
      argStorage[6] * y +
      argStorage[10] * z +
      argStorage[14]
    ) * d
  }

  /// Add [arg] to [this].
  add (arg: Vector3): void {
    const argStorage = arg.v3storage
    this.v3storage[0] = this.v3storage[0] + argStorage[0]
    this.v3storage[1] = this.v3storage[1] + argStorage[1]
    this.v3storage[2] = this.v3storage[2] + argStorage[2]
  }

  /// Add [arg] scaled by [factor] to [this].
  addScaled(arg: Vector3, factor: number): void {
    const argStorage = arg.v3storage
    this.v3storage[0] = this.v3storage[0] + argStorage[0] * factor
    this.v3storage[1] = this.v3storage[1] + argStorage[1] * factor
    this.v3storage[2] = this.v3storage[2] + argStorage[2] * factor
  }

  sub(arg: Vector3): void {
    const argStorage = arg.v3storage
    this.v3storage[0] = this.v3storage[0] - argStorage[0]
    this.v3storage[1] = this.v3storage[1] - argStorage[1]
    this.v3storage[2] = this.v3storage[2] - argStorage[2]
  }

  /// Multiply entries in [this] with entries in [arg].
  multiply(arg: Vector3): void {
    const argStorage = arg.v3storage
    this.v3storage[0] = this.v3storage[0] * argStorage[0]
    this.v3storage[1] = this.v3storage[1] * argStorage[1]
    this.v3storage[2] = this.v3storage[2] * argStorage[2]
  }

  /// Divide entries in [this] with entries in [arg].
  divide (arg: Vector3): void {
    const argStorage = arg.v3storage
    this.v3storage[0] = this.v3storage[0] / argStorage[0]
    this.v3storage[1] = this.v3storage[1] / argStorage[1]
    this.v3storage[2] = this.v3storage[2] / argStorage[2]
  }

  scale (arg: number): void {
    this.v3storage[2] = this.v3storage[2] * arg
    this.v3storage[1] = this.v3storage[1] * arg
    this.v3storage[0] = this.v3storage[0] * arg
  }

  scaled (arg: number) {
    const vector3 = this.clone()
    vector3.scale(arg)
    return vector3
  }

  clone() { 
    return Vector3.copy(this)
  }

  /// Copy [this] into [arg].
  copyInto (arg: Vector3) {
    const argStorage = arg.v3storage
    argStorage[0] = this.v3storage[0]
    argStorage[1] = this.v3storage[1]
    argStorage[2] = this.v3storage[2]
    return arg
  }

  /// Copies [this] into [array] starting at [offset].
  copyIntoArray (array: number[], offset: number = 0) {
    array[offset + 2] = this.v3storage[2]
    array[offset + 1] = this.v3storage[1]
    array[offset + 0] = this.v3storage[0]
  }
}
