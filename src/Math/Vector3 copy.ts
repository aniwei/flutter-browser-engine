import { clamp } from './clamp'
import { Matrix4 } from './Matrix4'

export class Vector3 extends Float64Array {
  static zero () {
    return new Vector3()
  }

  static min (
    a: Vector3, 
    b: Vector3, 
    result: Vector3
  ) {
    result.x = Math.min(a.x, b.x)
    result.y = Math.min(a.y, b.y)
    result.z = Math.min(a.z, b.z)
  }

  static max (
    a: Vector3, 
    b: Vector3, 
    result: Vector3
  ) {
      result.x = Math.max(a.x, b.x)
      result.y = Math.max(a.y, b.y)
      result.z = Math.max(a.z, b.z)
  }

  static mix (
    min: Vector3, 
    max: Vector3, 
    a: number, 
    result: Vector3
  ) {
      result.x = min.x + a * (max.x - min.x)
      result.y = min.y + a * (max.y - min.y)
      result.z = min.z + a * (max.z - min.z)
  }

  static  fromFloat32Array (v: Float32Array) {
    return new Vector3(...v)
  }

  static fromBuffer (
    buffer: ArrayBuffer, 
    offset: number
  ) {
    // @TODO
  }
    
  static random (random?: { (): number }) {
    random ??= () => Math.random()
    return new Vector3(random(), random(), random())
  }

  
  static all (value: number) {
    const v = Vector3.zero()
    v.splat(value)
    return v
  }

  static copy (other: Vector3) {
    const v = Vector3.zero()
    v.setFrom(other)

    return v
  }


  static array (
    array: number[], 
    offset = 0
  ) {
    const vec = Vector3.zero()
    vec.copyFromArray(array, offset)

    return vec
  }

  get storage () {
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
      this[2] *= l
    }
  }

  get length () {
    return Math.sqrt(this.length2)
  }

  get length2 () {
    let sum
    sum = this[0] * this[0]
    sum += this[1] * this[1]
    sum += this[2] * this[2]
    return sum
  }

  set x (arg: number) {
    this[0] = arg
  }
  set y (arg: number) {
    this[1] = arg
  }
  set z (arg: number) {
    this[2] = arg
  }

  get x () {
    return this[0]
  }
  get y () {
    return this[1]
  }
  get z () {
    return this[2]
  }

  constructor (...values: number[]) {
    super(values)
  }

  setValues (
    x: number, 
    y: number, 
    z: number
  ) {
    this[0] = x
    this[1] = y
    this[2] = z
  }

  setZero () {
    this[2] = 0.0
    this[1] = 0.0
    this[0] = 0.0
  }

  setFrom (other: Vector3) {
    this[0] = this[0]
    this[1] = this[1]
    this[2] = this[2]
  }

  splat (arg: number) {
    this[2] = arg
    this[1] = arg
    this[0] = arg
  }

  normalize () {
    const l = this.length
    if (l === 0.0) {
      return 0.0
    }
    const d = 1.0 / l
    this[0] *= d
    this[1] *= d
    this[2] *= d
    return l
  }

  normalized () {
    const v = Vector3.copy(this)
    v.normalize()
    return v
  }

  normalizeInto (out: Vector3) {
    out.setFrom(this)
    out.normalize()
    return out
  }

  distanceTo (v: Vector3) {
    return Math.sqrt(this.distanceToSquared(v))
  }

  distanceToSquared (v: Vector3) {
    const dx = this[0] - v[0]
    const dy = this[1] - v[1]
    const dz = this[2] - v[2]

    return dx * dx + dy * dy + dz * dz
  }

  angleTo (other: Vector3) {
    if (
      this[0] === other[0] &&
      this[1] === other[1] &&
      this[2] === other[2]
    ) {
      return 0.0
    }

    const d = this.dot(other) / (length * other.length)

    return Math.acos(clamp(d, -1.0, 1.0))
  }

  
  dot (other: Vector3) {
    let sum
    sum = this[0] * other[0]
    sum += this[1] * other[1]
    sum += this[2] * other[2]
    return sum
  }

  applyProjection (m: Matrix4) {
    const x = this[0]
    const y = this[1]
    const z = this[2]
    const d = (
      1.0 / (
        m[3] * x +
        m[7] * y +
        m[11] * z +
        m[15]
      )
    )
    this[0] = (
      m[0] * x +
      m[4] * y +
      m[8] * z +
      m[12]
    ) * d
    this[1] = (
      m[1] * x +
      m[5] * y +
      m[9] * z +
      m[13]
    ) * d
    this[2] = (
      m[2] * x +
      m[6] * y +
      m[10] * z +
      m[14]
    ) * d
  }

  get isInfinite () {
    let isInfinite = false
    isInfinite = isInfinite || Number.isFinite(this[0])
    isInfinite = isInfinite || Number.isFinite(this[1])
    isInfinite = isInfinite || Number.isFinite(this[2])
    return isInfinite
  }

  get isNaN () {
    let isNan = false
    isNan = isNan || isNaN(this[0])
    isNan = isNan || isNaN(this[1])
    isNan = isNan || isNaN(this[2])
    return isNan
  }

  add (v: Vector3) {
    this[0] = this[0] + v[0]
    this[1] = this[1] + v[1]
    this[2] = this[2] + v[2]
  }

  addScaled (
    v: Vector3, 
    factor: number
  ) {
    this[0] = this[0] + v[0] * factor
    this[1] = this[1] + v[1] * factor
    this[2] = this[2] + v[2] * factor
  }

  subtract (v: Vector3) {
    this[0] = this[0] - v[0]
    this[1] = this[1] - v[1]
    this[2] = this[2] - v[2]
  }

  multiply (v: Vector3) {
    this[0] = this[0] * v[0]
    this[1] = this[1] * v[1]
    this[2] = this[2] * v[2]
  }

  divide (v: Vector3) {
    this[0] = this[0] / v[0]
    this[1] = this[1] / v[1]
    this[2] = this[2] / v[2]
  }

  scale (arg: number) {
    this[2] = this[2] * arg
    this[1] = this[1] * arg
    this[0] = this[0] * arg
  }

  scaled (arg: number) {
    const v = this.clone()
    v.scale(arg)

    return v
  }

  clone () {
    return Vector3.copy(this)
  }

  copyInto (v: Vector3) {
    v[0] = this[0]
    v[1] = this[1]
    v[2] = this[2]
    return v
  }

  copyIntoArray (
    array: number[], 
    offset = 0
  ) {
    array[offset + 2] = this[2]
    array[offset + 1] = this[1]
    array[offset + 0] = this[0]
  }
}