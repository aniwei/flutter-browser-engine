import { invariant } from 'ts-invariant'
import { ArgumentError } from '@Shared'
import { Float32List, Float64List } from '@Types'

export class Matrix4 {
  static tryInvert (other: Matrix4) {
    const r = Matrix4.zero()
    const determinant = r.copyInverse(other)
    
    if (determinant === 0.0) {
      return null
    }

    return r
  }

  static factory (
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
    arg9: number,
    arg10: number,
    arg11: number,
    arg12: number,
    arg13: number,
    arg14: number,
    arg15: number
  ) {
    const matrix4 = Matrix4.zero()
    matrix4.setValues(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15)

    return matrix4
  }
  
  static zero () {
    const matrix4 = new Matrix4()
    matrix4.m4storage = new Float32List(16)
    return matrix4
  }

  static identity () {
    const matrix4 = new Matrix4()
    const m4storage = new Float32List(16) 
    m4storage[15] = 1.0
    m4storage[0] = 1.0
    m4storage[5] = 1.0
    m4storage[10] = 1.0

    matrix4.m4storage
  
    return matrix4
  }

  static copy(other: Matrix4) {
    const matrix4 = Matrix4.zero()
    matrix4.setFrom(other)
    return matrix4
  }

  static inverted(other: Matrix4) {
    const r = Matrix4.zero()
    const determinant = r.copyInverse(other)
    
    if (determinant === 0.0) {
      throw new ArgumentError('Matrix cannot be inverted')
    }

    return r
  }

  static rotationX (radians: number) {
    const matrix4 = Matrix4.zero()
    matrix4.m4storage[15] = 1.0
    matrix4.setRotationX(radians)
    return matrix4
  }
  
  static rotationY (radians: number) {
    const matrix4 = Matrix4.zero()
    matrix4.m4storage[15] = 1.0
    matrix4.setRotationY(radians)
    return matrix4
  }
    
  static rotationZ(radians: number) {
    const matrix4 = Matrix4.zero()
    matrix4.m4storage[15] = 1.0
    matrix4.setRotationZ(radians)
    return matrix4
  }
    
  static translation (translation: Vector3) {
    const matrix4 = Matrix4.identity()
    matrix4.setTranslation(translation)
    return matrix4
  }

  static translationValues (x: number, y: number, z: number) {
    const matrix4 = Matrix4.identity()
    matrix4.setTranslationRaw(x, y, z)
    return matrix4
  }

  static diagonal3Values(x: number, y: number, z: number) {  
    const matrix4 = Matrix4.zero()
    matrix4.m4storage[15] = 1.0
    matrix4.m4storage[10] = z
    matrix4.m4storage[5] = y
    matrix4.m4storage[0] = x
  }

  static fromFloat32List(m4storage) {
    const matrix4 = new Matrix4()
    matrix4.m4storage = m4storage
    return matrix4
  }

  static fromBuffer(buffer: Buffer, offset: number) {
    const matrix4 = new Matrix4()
    const m4storage = new Float32List(buffer, offset, 16)
    matrix4.m4storage = m4storage

    return matrix4
  }

  
  public dimension = 4
  public m4storage: Float32List = new Float32List()
  public get storage () {
    return this.m4storage
  }


  index (row: number, col: number) {
    return (col * 4) + row
  }

  entry (row: number, col: number) {
    invariant((row >= 0) && (row < this.dimension))
    invariant((col >= 0) && (col < this.dimension))

    return this.m4storage[this.index(row, col)]
  }

  /// Set value at [row], [col] to be [v].
  setEntry (row: number, col: number, v: number) {
    invariant((row >= 0) && (row < this.dimension))
    invariant((col >= 0) && (col < this.dimension))

    this.m4storage[this.index(row, col)] = v
  }


  /// Sets the matrix with specified values.
  setValues(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
    arg9: number,
    arg10: number,
    arg11: number,
    arg12: number,
    arg13: number,
    arg14: number,
    arg15: number
  ) {
    this.m4storage[15] = arg15
    this.m4storage[14] = arg14
    this.m4storage[13] = arg13
    this.m4storage[12] = arg12
    this.m4storage[11] = arg11
    this.m4storage[10] = arg10
    this.m4storage[9] = arg9
    this.m4storage[8] = arg8
    this.m4storage[7] = arg7
    this.m4storage[6] = arg6
    this.m4storage[5] = arg5
    this.m4storage[4] = arg4
    this.m4storage[3] = arg3
    this.m4storage[2] = arg2
    this.m4storage[1] = arg1
    this.m4storage[0] = arg0
  }

  /// Sets the entire matrix to the matrix in [arg].
  setFrom (arg: Matrix4) {
    const argStorage = arg.m4storage
    this.m4storage[15] = argStorage[15]
    this.m4storage[14] = argStorage[14]
    this.m4storage[13] = argStorage[13]
    this.m4storage[12] = argStorage[12]
    this.m4storage[11] = argStorage[11]
    this.m4storage[10] = argStorage[10]
    this.m4storage[9] = argStorage[9]
    this.m4storage[8] = argStorage[8]
    this.m4storage[7] = argStorage[7]
    this.m4storage[6] = argStorage[6]
    this.m4storage[5] = argStorage[5]
    this.m4storage[4] = argStorage[4]
    this.m4storage[3] = argStorage[3]
    this.m4storage[2] = argStorage[2]
    this.m4storage[1] = argStorage[1]
    this.m4storage[0] = argStorage[0]
  }

  clone (): Matrix4 {
    return Matrix4.copy(this)
  }

  copyInto (arg: Matrix4): Matrix4 {
    const argStorage = arg.m4storage
    // Start reading from the last element to eliminate range checks
    // in subsequent reads.
    argStorage[15] = this.m4storage[15]
    argStorage[0] = this.m4storage[0]
    argStorage[1] = this.m4storage[1]
    argStorage[2] = this.m4storage[2]
    argStorage[3] = this.m4storage[3]
    argStorage[4] = this.m4storage[4]
    argStorage[5] = this.m4storage[5]
    argStorage[6] = this.m4storage[6]
    argStorage[7] = this.m4storage[7]
    argStorage[8] = this.m4storage[8]
    argStorage[9] = this.m4storage[9]
    argStorage[10] = this.m4storage[10]
    argStorage[11] = this.m4storage[11]
    argStorage[12] = this.m4storage[12]
    argStorage[13] = this.m4storage[13]
    argStorage[14] = this.m4storage[14]
    return arg
  }

  translate (x: number, y = 0.0, z = 0.0) {
    const tw = 1.0
    const t1 = this.m4storage[0] * x + this.m4storage[4] * y + this.m4storage[8] * z + this.m4storage[12] * tw
    const t2 = this.m4storage[1] * x + this.m4storage[5] * y + this.m4storage[9] * z + this.m4storage[13] * tw
    const t3 = this.m4storage[2] * x + this.m4storage[6] * y + this.m4storage[10] * z + this.m4storage[14] * tw
    const t4 = this.m4storage[3] * x + this.m4storage[7] * y + this.m4storage[11] * z + this.m4storage[15] * tw
    this.m4storage[12] = t1
    this.m4storage[13] = t2
    this.m4storage[14] = t3
    this.m4storage[15] = t4
  }

  
  scale (x: number, y: number | null = null, z: number | null = null) {
    const sx = x
    const sy = y ?? x
    const sz = z ?? x;
    const sw = 1.0
    this.m4storage[15] *= sw
    this.m4storage[0] *= sx
    this.m4storage[1] *= sx
    this.m4storage[2] *= sx
    this.m4storage[3] *= sx
    this.m4storage[4] *= sy
    this.m4storage[5] *= sy
    this.m4storage[6] *= sy
    this.m4storage[7] *= sy
    this.m4storage[8] *= sz
    this.m4storage[9] *= sz
    this.m4storage[10] *= sz
    this.m4storage[11] *= sz
    this.m4storage[12] *= sw
    this.m4storage[13] *= sw
    this.m4storage[14] *= sw
  }

  scaled (x: number, y: number | null = null, z: number | null): Matrix4 {
    const matrix4 = this.clone()
    matrix4.scale(x, y, z)
    return matrix4
  }

  setZero () {
    this.m4storage[15] = 0.0
    this.m4storage[0] = 0.0
    this.m4storage[1] = 0.0
    this.m4storage[2] = 0.0
    this.m4storage[3] = 0.0
    this.m4storage[4] = 0.0
    this.m4storage[5] = 0.0
    this.m4storage[6] = 0.0
    this.m4storage[7] = 0.0
    this.m4storage[8] = 0.0
    this.m4storage[9] = 0.0
    this.m4storage[10] = 0.0
    this.m4storage[11] = 0.0
    this.m4storage[12] = 0.0
    this.m4storage[13] = 0.0
    this.m4storage[14] = 0.0
  }

  setIdentity () {
    this.m4storage[15] = 1.0
    this.m4storage[0] = 1.0
    this.m4storage[1] = 0.0
    this.m4storage[2] = 0.0
    this.m4storage[3] = 0.0
    this.m4storage[4] = 0.0
    this.m4storage[5] = 1.0
    this.m4storage[6] = 0.0
    this.m4storage[7] = 0.0
    this.m4storage[8] = 0.0
    this.m4storage[9] = 0.0
    this.m4storage[10] = 1.0
    this.m4storage[11] = 0.0
    this.m4storage[12] = 0.0
    this.m4storage[13] = 0.0
    this.m4storage[14] = 0.0
  }

  transposed (): Matrix4 {
    const matrix4 = this.clone()
    matrix4.transpose()

    return matrix4
  }

  transpose () {
    let temp
    temp = this.m4storage[4]
    this.m4storage[4] = this.m4storage[1]
    this.m4storage[1] = temp
    temp = this.m4storage[8]
    this.m4storage[8] = this.m4storage[2]
    this.m4storage[2] = temp
    temp = this.m4storage[12]
    this.m4storage[12] = this.m4storage[3]
    this.m4storage[3] = temp
    temp = this.m4storage[9]
    this.m4storage[9] = this.m4storage[6]
    this.m4storage[6] = temp
    temp = this.m4storage[13]
    this.m4storage[13] = this.m4storage[7]
    this.m4storage[7] = temp
    temp = this.m4storage[14]
    this.m4storage[14] = this.m4storage[11]
    this.m4storage[11] = temp
  }

  determinant() {
    const m = this.m4storage
    const det2_01_01 = m[0] * m[5] - m[1] * m[4]
    const det2_01_02 = m[0] * m[6] - m[2] * m[4]
    const det2_01_03 = m[0] * m[7] - m[3] * m[4]
    const det2_01_12 = m[1] * m[6] - m[2] * m[5]
    const det2_01_13 = m[1] * m[7] - m[3] * m[5]
    const det2_01_23 = m[2] * m[7] - m[3] * m[6]
    const det3_201_012 = m[8] * det2_01_12 - m[9] * det2_01_02 + m[10] * det2_01_01
    const det3_201_013 = m[8] * det2_01_13 - m[9] * det2_01_03 + m[11] * det2_01_01
    const det3_201_023 = m[8] * det2_01_23 - m[10] * det2_01_03 + m[11] * det2_01_02
    const det3_201_123 = m[9] * det2_01_23 - m[10] * det2_01_13 + m[11] * det2_01_12

    return -det3_201_123 * m[12] + det3_201_023 * m[13] - det3_201_013 * m[14] + det3_201_012 * m[15];
  }

  perspectiveTransform (arg: Vector3): Vector3 {
    const argStorage = arg._v3storage

    const x = (this.m4storage[0] * argStorage[0]) + (this.m4storage[4] * argStorage[1]) + (this.m4storage[8] * argStorage[2]) + this.m4storage[12]
    const y = (this.m4storage[1] * argStorage[0]) + (this.m4storage[5] * argStorage[1]) + (this.m4storage[9] * argStorage[2]) + this.m4storage[13]
    const z = (this.m4storage[2] * argStorage[0]) + (this.m4storage[6] * argStorage[1]) + (this.m4storage[10] * argStorage[2]) + this.m4storage[14]
    const w = 1.0 / ((this.m4storage[3] * argStorage[0]) + (this.m4storage[7] * argStorage[1]) + (this.m4storage[11] * argStorage[2]) + this.m4storage[15])
    argStorage[0] = x * w
    argStorage[1] = y * w
    argStorage[2] = z * w
    return arg
  }

  isIdentity (): boolean {
    return (
      this.m4storage[0] == 1.0 && // col 1
      this.m4storage[1] == 0.0 &&
      this.m4storage[2] == 0.0 &&
      this.m4storage[3] == 0.0 &&
      this.m4storage[4] == 0.0 && // col 2
      this.m4storage[5] == 1.0 &&
      this.m4storage[6] == 0.0 &&
      this.m4storage[7] == 0.0 &&
      this.m4storage[8] == 0.0 && // col 3
      this.m4storage[9] == 0.0 &&
      this.m4storage[10] == 1.0 &&
      this.m4storage[11] == 0.0 &&
      this.m4storage[12] == 0.0 && // col 4
      this.m4storage[13] == 0.0 &&
      this.m4storage[14] == 0.0 &&
      this.m4storage[15] == 1.0
    )
  }
      

  /// Whether transform is identity or simple translation using m[12,13,14].
  ///
  /// We check for [15] first since that will eliminate bounds checks for rest.
  isIdentityOrTranslation (): boolean {
    return (
      this.m4storage[15] == 1.0 &&
      this.m4storage[0] == 1.0 && // col 1
      this.m4storage[1] == 0.0 &&
      this.m4storage[2] == 0.0 &&
      this.m4storage[3] == 0.0 &&
      this.m4storage[4] == 0.0 && // col 2
      this.m4storage[5] == 1.0 &&
      this.m4storage[6] == 0.0 &&
      this.m4storage[7] == 0.0 &&
      this.m4storage[8] == 0.0 && // col 3
      this.m4storage[9] == 0.0 &&
      this.m4storage[10] == 1.0 &&
      this.m4storage[11] == 0.0
    )
  }

  /// Returns the translation vector from this homogeneous transformation matrix.
  getTranslation (): Vector3 {
    const z = this.m4storage[14]
    const y = this.m4storage[13]
    const x = this.m4storage[12]
    return new Vector3(x, y, z)
  }

  rotate (axis: Vector3, angle: number) {
    const len = axis.length
    const axisStorage = axis._v3storage
    const x = axisStorage[0] / len
    const y = axisStorage[1] / len
    const z = axisStorage[2] / len
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const C = 1.0 - c
    const m11 = x * x * C + c
    const m12 = x * y * C - z * s
    const m13 = x * z * C + y * s
    const m21 = y * x * C + z * s
    const m22 = y * y * C + c
    const m23 = y * z * C - x * s
    const m31 = z * x * C - y * s
    const m32 = z * y * C + x * s
    const m33 = z * z * C + c
    const t1 = this.m4storage[0] * m11 + this.m4storage[4] * m21 + this.m4storage[8] * m31
    const t2 = this.m4storage[1] * m11 + this.m4storage[5] * m21 + this.m4storage[9] * m31
    const t3 = this.m4storage[2] * m11 + this.m4storage[6] * m21 + this.m4storage[10] * m31
    const t4 = this.m4storage[3] * m11 + this.m4storage[7] * m21 + this.m4storage[11] * m31
    const t5 = this.m4storage[0] * m12 + this.m4storage[4] * m22 + this.m4storage[8] * m32
    const t6 = this.m4storage[1] * m12 + this.m4storage[5] * m22 + this.m4storage[9] * m32
    const t7 = this.m4storage[2] * m12 + this.m4storage[6] * m22 + this.m4storage[10] * m32
    const t8 = this.m4storage[3] * m12 + this.m4storage[7] * m22 + this.m4storage[11] * m32
    const t9 = this.m4storage[0] * m13 + this.m4storage[4] * m23 + this.m4storage[8] * m33
    const t10 = this.m4storage[1] * m13 + this.m4storage[5] * m23 + this.m4storage[9] * m33
    const t11 = this.m4storage[2] * m13 + this.m4storage[6] * m23 + this.m4storage[10] * m33
    const t12 = this.m4storage[3] * m13 + this.m4storage[7] * m23 + this.m4storage[11] * m33
    this.m4storage[0] = t1
    this.m4storage[1] = t2
    this.m4storage[2] = t3
    this.m4storage[3] = t4
    this.m4storage[4] = t5
    this.m4storage[5] = t6
    this.m4storage[6] = t7
    this.m4storage[7] = t8
    this.m4storage[8] = t9
    this.m4storage[9] = t10
    this.m4storage[10] = t11
    this.m4storage[11] = t12
  }

  rotateZ(angle: number) {
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)
    const t1 = this.m4storage[0] * cosAngle + this.m4storage[4] * sinAngle
    const t2 = this.m4storage[1] * cosAngle + this.m4storage[5] * sinAngle
    const t3 = this.m4storage[2] * cosAngle + this.m4storage[6] * sinAngle
    const t4 = this.m4storage[3] * cosAngle + this.m4storage[7] * sinAngle
    const t5 = this.m4storage[0] * -sinAngle + this.m4storage[4] * cosAngle
    const t6 = this.m4storage[1] * -sinAngle + this.m4storage[5] * cosAngle
    const t7 = this.m4storage[2] * -sinAngle + this.m4storage[6] * cosAngle
    const t8 = this.m4storage[3] * -sinAngle + this.m4storage[7] * cosAngle
    this.m4storage[0] = t1
    this.m4storage[1] = t2
    this.m4storage[2] = t3
    this.m4storage[3] = t4
    this.m4storage[4] = t5
    this.m4storage[5] = t6
    this.m4storage[6] = t7
    this.m4storage[7] = t8
  }

  /// Sets the translation vector in this homogeneous transformation matrix.
  setTranslation (t: Vector3) {
    const tStorage = t._v3storage
    const z = tStorage[2]
    const y = tStorage[1]
    const x = tStorage[0]
    this.m4storage[14] = z
    this.m4storage[13] = y
    this.m4storage[12] = x
  }

  /// Sets the translation vector in this homogeneous transformation matrix.
  setTranslationRaw(x: number, y: number, z: number) {
    this.m4storage[14] = z
    this.m4storage[13] = y
    this.m4storage[12] = x
  }

  /// Transposes just the upper 3x3 rotation matrix.
  transposeRotation() {
    let temp
    temp = this.m4storage[1]
    this.m4storage[1] = this.m4storage[4]
    this.m4storage[4] = temp
    temp = this.m4storage[2]
    this.m4storage[2] = this.m4storage[8]
    this.m4storage[8] = temp
    temp = this.m4storage[4]
    this.m4storage[4] = this.m4storage[1]
    this.m4storage[1] = temp
    temp = this.m4storage[6]
    this.m4storage[6] = this.m4storage[9]
    this.m4storage[9] = temp
    temp = this.m4storage[8]
    this.m4storage[8] = this.m4storage[2]
    this.m4storage[2] = temp
    temp = this.m4storage[9]
    this.m4storage[9] = this.m4storage[6]
    this.m4storage[6] = temp
  }

  /// Invert [this].
  invert () {
    return this.copyInverse(this)
  }

  /// Set this matrix to be the inverse of [arg]
  copyInverse (arg: Matrix4) {
    const argStorage = arg.m4storage
    const a00 = argStorage[0]
    const a01 = argStorage[1]
    const a02 = argStorage[2]
    const a03 = argStorage[3]
    const a10 = argStorage[4]
    const a11 = argStorage[5]
    const a12 = argStorage[6]
    const a13 = argStorage[7]
    const a20 = argStorage[8]
    const a21 = argStorage[9]
    const a22 = argStorage[10]
    const a23 = argStorage[11]
    const a30 = argStorage[12]
    const a31 = argStorage[13]
    const a32 = argStorage[14]
    const a33 = argStorage[15]
    const b00 = a00 * a11 - a01 * a10
    const b01 = a00 * a12 - a02 * a10
    const b02 = a00 * a13 - a03 * a10
    const b03 = a01 * a12 - a02 * a11
    const b04 = a01 * a13 - a03 * a11
    const b05 = a02 * a13 - a03 * a12
    const b06 = a20 * a31 - a21 * a30
    const b07 = a20 * a32 - a22 * a30
    const b08 = a20 * a33 - a23 * a30
    const b09 = a21 * a32 - a22 * a31
    const b10 = a21 * a33 - a23 * a31
    const b11 = a22 * a33 - a23 * a32
    const det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
    if (det === 0.0) {
      this.setFrom(arg)
      return 0.0
    }
    const invDet = 1.0 / det
    this.m4storage[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet
    this.m4storage[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet
    this.m4storage[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet
    this.m4storage[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet
    this.m4storage[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet
    this.m4storage[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet
    this.m4storage[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet
    this.m4storage[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet
    this.m4storage[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet
    this.m4storage[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet
    this.m4storage[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet
    this.m4storage[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet
    this.m4storage[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet
    this.m4storage[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet
    this.m4storage[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet
    this.m4storage[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet
    return det
  }

  invertRotation (): number {
    const det = this.determinant()
    if (det === 0.0) {
      return 0.0
    }

    const invDet = 1.0 / det
    let ix
    let iy
    let iz
    let jx
    let jy
    let jz
    let kx
    let ky
    let kz
    ix = invDet * (this.m4storage[5] * this.m4storage[10] - this.m4storage[6] * this.m4storage[9])
    iy = invDet * (this.m4storage[2] * this.m4storage[9] - this.m4storage[1] * this.m4storage[10])
    iz = invDet * (this.m4storage[1] * this.m4storage[6] - this.m4storage[2] * this.m4storage[5])
    jx = invDet * (this.m4storage[6] * this.m4storage[8] - this.m4storage[4] * this.m4storage[10])
    jy = invDet * (this.m4storage[0] * this.m4storage[10] - this.m4storage[2] * this.m4storage[8])
    jz = invDet * (this.m4storage[2] * this.m4storage[4] - this.m4storage[0] * this.m4storage[6])
    kx = invDet * (this.m4storage[4] * this.m4storage[9] - this.m4storage[5] * this.m4storage[8])
    ky = invDet * (this.m4storage[1] * this.m4storage[8] - this.m4storage[0] * this.m4storage[9])
    kz = invDet * (this.m4storage[0] * this.m4storage[5] - this.m4storage[1] * this.m4storage[4])
    this.m4storage[0] = ix
    this.m4storage[1] = iy
    this.m4storage[2] = iz
    this.m4storage[4] = jx
    this.m4storage[5] = jy
    this.m4storage[6] = jz
    this.m4storage[8] = kx
    this.m4storage[9] = ky
    this.m4storage[10] = kz
    return det
  }

  /// Sets the upper 3x3 to a rotation of [radians] around X
  setRotationX (radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this.m4storage[0] = 1.0
    this.m4storage[1] = 0.0
    this.m4storage[2] = 0.0
    this.m4storage[4] = 0.0
    this.m4storage[5] = c
    this.m4storage[6] = s
    this.m4storage[8] = 0.0
    this.m4storage[9] = -s
    this.m4storage[10] = c
    this.m4storage[3] = 0.0
    this.m4storage[7] = 0.0
    this.m4storage[11] = 0.0
  }

  setRotationY (radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this.m4storage[0] = c
    this.m4storage[1] = 0.0
    this.m4storage[2] = -s
    this.m4storage[4] = 0.0
    this.m4storage[5] = 1.0
    this.m4storage[6] = 0.0
    this.m4storage[8] = s
    this.m4storage[9] = 0.0
    this.m4storage[10] = c
    this.m4storage[3] = 0.0
    this.m4storage[7] = 0.0
    this.m4storage[11] = 0.0
  }

  setRotationZ(radians: number) {
    const c = Math.cos(radians)
    const s = Math.sin(radians)
    this.m4storage[0] = c
    this.m4storage[1] = s
    this.m4storage[2] = 0.0
    this.m4storage[4] = -s
    this.m4storage[5] = c
    this.m4storage[6] = 0.0
    this.m4storage[8] = 0.0
    this.m4storage[9] = 0.0
    this.m4storage[10] = 1.0
    this.m4storage[3] = 0.0
    this.m4storage[7] = 0.0
    this.m4storage[11] = 0.0
  }

  /// Multiply [this] by [arg].
  multiply (arg: Matrix4) {
    const m33 = this.m4storage[15]
    const m00 = this.m4storage[0]
    const m01 = this.m4storage[4]
    const m02 = this.m4storage[8]
    const m03 = this.m4storage[12]
    const m10 = this.m4storage[1]
    const m11 = this.m4storage[5]
    const m12 = this.m4storage[9]
    const m13 = this.m4storage[13]
    const m20 = this.m4storage[2]
    const m21 = this.m4storage[6]
    const m22 = this.m4storage[10]
    const m23 = this.m4storage[14]
    const m30 = this.m4storage[3]
    const m31 = this.m4storage[7]
    const m32 = this.m4storage[11]
    const argStorage = arg.m4storage
    const n33 = argStorage[15]
    const n00 = argStorage[0]
    const n01 = argStorage[4]
    const n02 = argStorage[8]
    const n03 = argStorage[12]
    const n10 = argStorage[1]
    const n11 = argStorage[5]
    const n12 = argStorage[9]
    const n13 = argStorage[13]
    const n20 = argStorage[2]
    const n21 = argStorage[6]
    const n22 = argStorage[10]
    const n23 = argStorage[14]
    const n30 = argStorage[3]
    const n31 = argStorage[7]
    const n32 = argStorage[11]
    this.m4storage[0] = (m00 * n00) + (m01 * n10) + (m02 * n20) + (m03 * n30)
    this.m4storage[4] = (m00 * n01) + (m01 * n11) + (m02 * n21) + (m03 * n31)
    this.m4storage[8] = (m00 * n02) + (m01 * n12) + (m02 * n22) + (m03 * n32)
    this.m4storage[12] = (m00 * n03) + (m01 * n13) + (m02 * n23) + (m03 * n33)
    this.m4storage[1] = (m10 * n00) + (m11 * n10) + (m12 * n20) + (m13 * n30)
    this.m4storage[5] = (m10 * n01) + (m11 * n11) + (m12 * n21) + (m13 * n31)
    this.m4storage[9] = (m10 * n02) + (m11 * n12) + (m12 * n22) + (m13 * n32)
    this.m4storage[13] = (m10 * n03) + (m11 * n13) + (m12 * n23) + (m13 * n33)
    this.m4storage[2] = (m20 * n00) + (m21 * n10) + (m22 * n20) + (m23 * n30)
    this.m4storage[6] = (m20 * n01) + (m21 * n11) + (m22 * n21) + (m23 * n31)
    this.m4storage[10] = (m20 * n02) + (m21 * n12) + (m22 * n22) + (m23 * n32)
    this.m4storage[14] = (m20 * n03) + (m21 * n13) + (m22 * n23) + (m23 * n33)
    this.m4storage[3] = (m30 * n00) + (m31 * n10) + (m32 * n20) + (m33 * n30)
    this.m4storage[7] = (m30 * n01) + (m31 * n11) + (m32 * n21) + (m33 * n31)
    this.m4storage[11] = (m30 * n02) + (m31 * n12) + (m32 * n22) + (m33 * n32)
    this.m4storage[15] = (m30 * n03) + (m31 * n13) + (m32 * n23) + (m33 * n33)
  }

  multiplied (arg: Matrix4) {
    const matrix4 = this.clone()
    matrix4.multiply(arg)
    return matrix4
  }

  transposeMultiply (arg: Matrix4) {
    const m33 = this.m4storage[15]
    const m00 = this.m4storage[0]
    const m01 = this.m4storage[1]
    const m02 = this.m4storage[2]
    const m03 = this.m4storage[3]
    const m10 = this.m4storage[4]
    const m11 = this.m4storage[5]
    const m12 = this.m4storage[6]
    const m13 = this.m4storage[7]
    const m20 = this.m4storage[8]
    const m21 = this.m4storage[9]
    const m22 = this.m4storage[10]
    const m23 = this.m4storage[11]
    const m30 = this.m4storage[12]
    const m31 = this.m4storage[13]
    const m32 = this.m4storage[14]

    const argStorage = arg.m4storage
    this.m4storage[0] = (m00 * argStorage[0]) +
        (m01 * argStorage[1]) +
        (m02 * argStorage[2]) +
        (m03 * argStorage[3]);
    this.m4storage[4] = (m00 * argStorage[4]) +
        (m01 * argStorage[5]) +
        (m02 * argStorage[6]) +
        (m03 * argStorage[7]);
    this.m4storage[8] = (m00 * argStorage[8]) +
        (m01 * argStorage[9]) +
        (m02 * argStorage[10]) +
        (m03 * argStorage[11]);
    this.m4storage[12] = (m00 * argStorage[12]) +
        (m01 * argStorage[13]) +
        (m02 * argStorage[14]) +
        (m03 * argStorage[15]);
    this.m4storage[1] = (m10 * argStorage[0]) +
        (m11 * argStorage[1]) +
        (m12 * argStorage[2]) +
        (m13 * argStorage[3]);
    this.m4storage[5] = (m10 * argStorage[4]) +
        (m11 * argStorage[5]) +
        (m12 * argStorage[6]) +
        (m13 * argStorage[7]);
    this.m4storage[9] = (m10 * argStorage[8]) +
        (m11 * argStorage[9]) +
        (m12 * argStorage[10]) +
        (m13 * argStorage[11]);
    this.m4storage[13] = (m10 * argStorage[12]) +
        (m11 * argStorage[13]) +
        (m12 * argStorage[14]) +
        (m13 * argStorage[15]);
    this.m4storage[2] = (m20 * argStorage[0]) +
        (m21 * argStorage[1]) +
        (m22 * argStorage[2]) +
        (m23 * argStorage[3]);
    this.m4storage[6] = (m20 * argStorage[4]) +
        (m21 * argStorage[5]) +
        (m22 * argStorage[6]) +
        (m23 * argStorage[7]);
    this.m4storage[10] = (m20 * argStorage[8]) +
        (m21 * argStorage[9]) +
        (m22 * argStorage[10]) +
        (m23 * argStorage[11]);
    this.m4storage[14] = (m20 * argStorage[12]) +
        (m21 * argStorage[13]) +
        (m22 * argStorage[14]) +
        (m23 * argStorage[15]);
    this.m4storage[3] = (m30 * argStorage[0]) +
        (m31 * argStorage[1]) +
        (m32 * argStorage[2]) +
        (m33 * argStorage[3]);
    this.m4storage[7] = (m30 * argStorage[4]) +
        (m31 * argStorage[5]) +
        (m32 * argStorage[6]) +
        (m33 * argStorage[7]);
    this.m4storage[11] = (m30 * argStorage[8]) +
        (m31 * argStorage[9]) +
        (m32 * argStorage[10]) +
        (m33 * argStorage[11]);
    this.m4storage[15] = (m30 * argStorage[12]) +
        (m31 * argStorage[13]) +
        (m32 * argStorage[14]) +
        (m33 * argStorage[15]);
  }

  /// Multiply [this] with a transposed [arg].
  multiplyTranspose (arg: Matrix4) {
    const m00 = this.m4storage[0]
    const m01 = this.m4storage[4]
    const m02 = this.m4storage[8]
    const m03 = this.m4storage[12]
    const m10 = this.m4storage[1]
    const m11 = this.m4storage[5]
    const m12 = this.m4storage[9]
    const m13 = this.m4storage[13]
    const m20 = this.m4storage[2]
    const m21 = this.m4storage[6]
    const m22 = this.m4storage[10]
    const m23 = this.m4storage[14]
    const m30 = this.m4storage[3]
    const m31 = this.m4storage[7]
    const m32 = this.m4storage[11]
    const m33 = this.m4storage[15]
    const argStorage = arg.m4storage
    this.m4storage[0] = (m00 * argStorage[0]) +
        (m01 * argStorage[4]) +
        (m02 * argStorage[8]) +
        (m03 * argStorage[12]);
    this.m4storage[4] = (m00 * argStorage[1]) +
        (m01 * argStorage[5]) +
        (m02 * argStorage[9]) +
        (m03 * argStorage[13]);
    this.m4storage[8] = (m00 * argStorage[2]) +
        (m01 * argStorage[6]) +
        (m02 * argStorage[10]) +
        (m03 * argStorage[14]);
    this.m4storage[12] = (m00 * argStorage[3]) +
        (m01 * argStorage[7]) +
        (m02 * argStorage[11]) +
        (m03 * argStorage[15]);
    this.m4storage[1] = (m10 * argStorage[0]) +
        (m11 * argStorage[4]) +
        (m12 * argStorage[8]) +
        (m13 * argStorage[12]);
    this.m4storage[5] = (m10 * argStorage[1]) +
        (m11 * argStorage[5]) +
        (m12 * argStorage[9]) +
        (m13 * argStorage[13]);
    this.m4storage[9] = (m10 * argStorage[2]) +
        (m11 * argStorage[6]) +
        (m12 * argStorage[10]) +
        (m13 * argStorage[14]);
    this.m4storage[13] = (m10 * argStorage[3]) +
        (m11 * argStorage[7]) +
        (m12 * argStorage[11]) +
        (m13 * argStorage[15]);
    this.m4storage[2] = (m20 * argStorage[0]) +
        (m21 * argStorage[4]) +
        (m22 * argStorage[8]) +
        (m23 * argStorage[12]);
    this.m4storage[6] = (m20 * argStorage[1]) +
        (m21 * argStorage[5]) +
        (m22 * argStorage[9]) +
        (m23 * argStorage[13]);
    this.m4storage[10] = (m20 * argStorage[2]) +
        (m21 * argStorage[6]) +
        (m22 * argStorage[10]) +
        (m23 * argStorage[14]);
    this.m4storage[14] = (m20 * argStorage[3]) +
        (m21 * argStorage[7]) +
        (m22 * argStorage[11]) +
        (m23 * argStorage[15]);
    this.m4storage[3] = (m30 * argStorage[0]) +
        (m31 * argStorage[4]) +
        (m32 * argStorage[8]) +
        (m33 * argStorage[12]);
    this.m4storage[7] = (m30 * argStorage[1]) +
        (m31 * argStorage[5]) +
        (m32 * argStorage[9]) +
        (m33 * argStorage[13]);
    this.m4storage[11] = (m30 * argStorage[2]) +
        (m31 * argStorage[6]) +
        (m32 * argStorage[10]) +
        (m33 * argStorage[14]);
    this.m4storage[15] = (m30 * argStorage[3]) +
        (m31 * argStorage[7]) +
        (m32 * argStorage[11]) +
        (m33 * argStorage[15]);
  }

  
  rotate3 (arg: Vector3): Vector3 {
    const argStorage = arg._v3storage;
    const x = (this.m4storage[0] * argStorage[0]) +
        (this.m4storage[4] * argStorage[1]) +
        (this.m4storage[8] * argStorage[2]);
    const y = (this.m4storage[1] * argStorage[0]) +
        (this.m4storage[5] * argStorage[1]) +
        (this.m4storage[9] * argStorage[2]);
    const z = (this.m4storage[2] * argStorage[0]) +
        (this.m4storage[6] * argStorage[1]) +
        (this.m4storage[10] * argStorage[2])
    argStorage[0] = x
    argStorage[1] = y
    argStorage[2] = z
    return arg
  }

  /// Rotate a copy of [arg] of type [Vector3] using the rotation defined by
  /// [this]. If a [out] parameter is supplied, the copy is stored in [out].
  rotated3 (arg: Vector3 , out: Vector3 | null = null) {
    if (out === null) {
      out = Vector3.copy(arg)
    } else {
      out.setFrom(arg)
    }

    return this.rotate3(out)
  }

  transform3 (vector: Float32List) {
    const x = (this.m4storage[0] * vector[0]) +
        (this.m4storage[4] * vector[1]) +
        (this.m4storage[8] * vector[2]) +
        this.m4storage[12];
    const y = (this.m4storage[1] * vector[0]) +
        (this.m4storage[5] * vector[1]) +
        (this.m4storage[9] * vector[2]) +
        this.m4storage[13];
    const z = (this.m4storage[2] * vector[0]) +
        (this.m4storage[6] * vector[1]) +
        (this.m4storage[10] * vector[2]) +
        this.m4storage[14]
    vector[0] = x
    vector[1] = y
    vector[2] = z
  }

  transform2 (vector: Float32List) {
    const x = vector[0]
    const y = vector[1]
    vector[0] = (this.m4storage[0] * x) +
        (this.m4storage[4] * y) +
        this.m4storage[12]
    vector[1] = (this.m4storage[1] * x) +
        (this.m4storage[5] * y) +
        this.m4storage[13]
  }

  /// Copies [this] into [array] starting at [offset].
  copyIntoArray(array: number[], offset: number = 0) {
    const i = offset
    array[i + 15] = this.m4storage[15]
    array[i + 14] = this.m4storage[14]
    array[i + 13] = this.m4storage[13]
    array[i + 12] = this.m4storage[12]
    array[i + 11] = this.m4storage[11]
    array[i + 10] = this.m4storage[10]
    array[i + 9] = this.m4storage[9]
    array[i + 8] = this.m4storage[8]
    array[i + 7] = this.m4storage[7]
    array[i + 6] = this.m4storage[6]
    array[i + 5] = this.m4storage[5]
    array[i + 4] = this.m4storage[4]
    array[i + 3] = this.m4storage[3]
    array[i + 2] = this.m4storage[2]
    array[i + 1] = this.m4storage[1]
    array[i + 0] = this.m4storage[0]
  }

  /// Copies elements from [array] into [this] starting at [offset].
  copyFromArray(array: number[], offset: number = 0) {
    const i = offset
    this.m4storage[15] = array[i + 15]
    this.m4storage[14] = array[i + 14]
    this.m4storage[13] = array[i + 13]
    this.m4storage[12] = array[i + 12]
    this.m4storage[11] = array[i + 11]
    this.m4storage[10] = array[i + 10]
    this.m4storage[9] = array[i + 9]
    this.m4storage[8] = array[i + 8]
    this.m4storage[7] = array[i + 7]
    this.m4storage[6] = array[i + 6]
    this.m4storage[5] = array[i + 5]
    this.m4storage[4] = array[i + 4]
    this.m4storage[3] = array[i + 3]
    this.m4storage[2] = array[i + 2]
    this.m4storage[1] = array[i + 1]
    this.m4storage[0] = array[i + 0]
  }

  /// Converts this matrix to a [Float64List].
  ///
  /// Generally we try to stick with 32-bit floats inside the engine code
  /// because it's faster (see [toMatrix32]). However, this method is handy
  /// in tests that use the public `dart:ui` surface.
  ///
  /// This method is not optimized, but also is not meant to be fast, only
  /// convenient.
  toFloat64 (): Float64List {
    return Float64List.from(this.m4storage)
  }

  toString () {
    return `Matrix4(${this.m4storage})`
  }
}
