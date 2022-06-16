import { clamp } from './clamp'
import { Matrix2 } from './Matrix2'
import { Vector3 } from './Vector3'
import { Vector4 } from './Vector4'

export class Vector2 extends Float64Array {
  static zero () {
    return new Vector2()
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

  get r () {
    return this.x
  }
  get g () {
    return this.y
  }
  get s () {
    return this.x
  }
  get t () {
    return this.y
  }
  get x () {
    return this[0]
  }
  get y () {
    return this[1]
  }
  get rr () {
    return this.xx
  }
  get rg () {
    return this.xy
  }
  get gr () {
    return this.yx
  }
  get gg () {
    return this.yy
  }
  get rrr () {
    return this.xxx
  }
  get rrg () {
    return this.xxy
  }
  get rgr () {
    return this.xyx
  }
  get rgg () {
    return this.xyy
  }
  get grr () {
    return this.yxx
  }
  get grg () {
    return this.yxy
  }
  get ggr () {
    return this.yyx
  }
  get ggg () {
    return this.yyy
  }
  get rrrr () {
    return this.xxxx
  }
  get rrrg () {
    return this.xxxy
  }
  get rrgr () {
    return this.xxyx
  }
  get rrgg () {
    return this.xxyy
  }
  get rgrr () {
    return this.xyxx
  }
  get rgrg () {
    return this.xyxy
  }
  get rggr () {
    return this.xyyx
  }
  get rggg () {
    return this.xyyy
  }
  get grrr () {
    return this.yxxx
  }
  get grrg () {
    return this.yxxy
  }
  get grgr () {
    return this.yxyx
  }
  get grgg () {
    return this.yxyy
  }
  get ggrr () {
    return this.yyxx
  }
  get ggrg () {
    return this.yyxy
  }
  get gggr () {
    return this.yyyx
  }
  get gggg () {
    return this.yyyy
  }
  get ss () {
    return this.xx
  }
  get st () {
    return this.xy
  }
  get ts () {
    return this.yx
  }
  get tt () {
    return this.yy
  }
  get sss () {
    return this.xxx
  }
  get sst () {
    return this.xxy
  }
  get sts () {
    return this.xyx
  }
  get stt () {
    return this.xyy
  }
  get tss () {
    return this.yxx
  }
  get tst () {
    return this.yxy
  }
  get tts () {
    return this.yyx
  }
  get ttt () {
    return this.yyy
  }
  get ssss () {
    return this.xxxx
  }
  get ssst () {
    return this.xxxy
  }
  get ssts () {
    return this.xxyx
  }
  get sstt () {
    return this.xxyy
  }
  get stss () {
    return this.xyxx
  }
  get stst () {
    return this.xyxy
  }
  get stts () {
    return this.xyyx
  }
  get sttt () {
    return this.xyyy
  }
  get tsss () {
    return this.yxxx
  }
  get tsst () {
    return this.yxxy
  }
  get tsts () {
    return this.yxyx
  }
  get tstt () {
    return this.yxyy
  }
  get ttss () {
    return this.yyxx
  }
  get ttst () {
    return this.yyxy
  }
  get ttts () {
    return this.yyyx
  }
  get tttt () {
    return this.yyyy
  }

  get xx () {
    return new Vector2(this[0], this[0])
  }
  get xy () {
    return new Vector2(this[0], this[1])
  }
  get yx () {
    return new Vector2(this[1], this[0])
  }
  get yy () {
    return new Vector2(this[1], this[1])
  }
  get xxx () {
    return new Vector3(this[0], this[0], this[0])
  }
  get xxy () {
    return new Vector3(this[0], this[0], this[1])
  }
  get xyx () {
    return new Vector3(this[0], this[1], this[0])
  }
  get xyy () {
    return new Vector3(this[0], this[1], this[1])
  }
  get yxx () {
    return new Vector3(this[1], this[0], this[0])
  }
  get yxy () {
    return new Vector3(this[1], this[0], this[1])
  }
  get yyx () {
    return new Vector3(this[1], this[1], this[0])
  }
  get yyy () {
    return new Vector3(this[1], this[1], this[1])
  }

  set xy (arg: Vector2) {
    this[0] = arg[0]
    this[1] = arg[1]
  }

  set yx (arg: Vector2) {
    this[1] = arg[0]
    this[0] = arg[1]
  }

  set r (arg: number) {
    this.x = arg
  }
  set g (arg: number) {
    this.y = arg
  }
  set s (arg: number) {
    this.x = arg
  }
  set t (arg: number) {
    this.y = arg
  }
  set x (arg: number) {
    this[0] = arg
  }
  set y (arg: number) {
    this[1] = arg
  }
  set rg (arg: Vector2) {
     this.xy = arg
  }
  set gr (arg: Vector2) {
     this.yx = arg
  }
  set st (arg: Vector2) {
     this.xy = arg
  }
  set ts (arg: Vector2) {
     this.yx = arg
  }


  get xxxx () {
  	return new Vector4(this[0], this[0], this[0], this[0])
	}
  get xxxy () {
  	return new Vector4(this[0], this[0], this[0], this[1])
	}
  get xxyx () {
  	return new Vector4(this[0], this[0], this[1], this[0])
	}
  get xxyy () {
  	return new Vector4(this[0], this[0], this[1], this[1])
	}
  get xyxx () {
  	return new Vector4(this[0], this[1], this[0], this[0])
	}
  get xyxy () {
  	return new Vector4(this[0], this[1], this[0], this[1])
	}
  get xyyx () {
  	return new Vector4(this[0], this[1], this[1], this[0])
	}
  get xyyy () {
  	return new Vector4(this[0], this[1], this[1], this[1])
	}
  get yxxx () {
  	return new Vector4(this[1], this[0], this[0], this[0])
	}
  get yxxy () {
  	return new Vector4(this[1], this[0], this[0], this[1])
	}
  get yxyx () {
  	return new Vector4(this[1], this[0], this[1], this[0])
	}
  get yxyy () {
  	return new Vector4(this[1], this[0], this[1], this[1])
	}
  get yyxx () {
  	return new Vector4(this[1], this[1], this[0], this[0])
	}
  get yyxy () {
  	return new Vector4(this[1], this[1], this[0], this[1])
	}
  get yyyx () {
  	return new Vector4(this[1], this[1], this[1], this[0])
	}
  get yyyy () {
  	return new Vector4(this[1], this[1], this[1], this[1])
	}

  get isInfinite () {
    let isInfinite = false
    isInfinite = isInfinite || !Number.isFinite(this[0])
    isInfinite = isInfinite || !Number.isFinite(this[1])
    return isInfinite
  }

  get isNaN () {
    var isNan = false
    isNan = isNan || Number.isNaN(this[0])
    isNan = isNan || Number.isNaN(this[1])
    return isNan
  }


  constructor (...values: number[]) {
    super(2)

    this.setValues(values[0], values[1])
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

  
  cross (other: Vector2) {
    return this[0] * other[1] - this[1] * other[0]
  }

  scaleOrthogonalInto (
    scale: number, 
    out: Vector2
  ) {
    out.setValues(-scale * this[1], scale * this[0])
    return out
  }

  reflect (normal: Vector2) {
    this.subtract(normal.scaled(2.0 * normal.dot(this)))
  }

  reflected (normal: Vector2) {
    const vec = this.clone()
    vec.reflect(normal)
    return vec
  }

  relativeError (correct: Vector2) {
    const correctNorm = correct.length
     // @TODO
    const diffNorm = (this - correct).length
    return diffNorm / correctNorm
  }

  absoluteError (correct: Vector2) {
    // @TODO
    (this - correct).length
  }


  add (arg: Vector2 ) {
    this[0] = this[0] + arg[0]
    this[1] = this[1] + arg[1]
  }

  addScaled (
    arg: Vector2, 
    factor: number
  ) {
    this[0] = this[0] + arg[0] * factor
    this[1] = this[1] + arg[1] * factor
  }

  substract (arg: Vector2) {
    this[0] = this[0] - arg[0]
    this[1] = this[1] - arg[1]
  }

  multiply (arg: Vector2) {
    this[0] = this[0] * arg[0]
    this[1] = this[1] * arg[1]
  }

  divide (arg: Vector2) {
    this[0] = this[0] / arg[0]
    this[1] = this[1] / arg[1]
  }

  scale (arg: number) {
    this[1] = this[1] * arg
    this[0] = this[0] * arg
  }

  scaled (arg: number) {
    const vec = this.clone()
    vec.scale(arg)
    return vec
  }

  negate () {
    this[1] = -this[1]
    this[0] = -this[0]
  }

  absolute () {
    this[1] = Math.abs(this[1])
    this[0] = Math.abs(this[0])
  }

  clamp (
    min: Vector2,
    max:  Vector2
  ) {
    this[0] = clamp(this[0], min[0], max[0])
    this[1] = clamp(this[1], min[1], max[1])
  }

  clampScalar (min: number, max: number) {
    this[0] = clamp(this[0], min, max)
    this[1] = clamp(this[1], min, max)
  }

  floor () {
    this[0] = Math.floor(this[0])
    this[1] = Math.floor(this[1])
  }

  ceil () {
    this[0] = Math.ceil(this[0])
    this[1] = Math.ceil(this[1])
  }

  round () {
    this[0] = Math.round(this[0])
    this[1] = Math.round(this[1])
  }

  roundToZero() {
    this[0] = this[0] < 0.0
      ? Math.ceil(this[0])
      : Math.floor(this[0])
    this[1] = this[1] < 0.0
      ? Math.ceil(this[1])
      : Math.floor(this[1])
  }


  clone () {
    return Vector2.copy(this)
  }

  copyInto(arg: Vector2 ) {
    final arg = arg.this
    arg[1] = this[1]
    arg[0] = this[0]
    return arg
  }

  copyIntoArray (
    array: number[], 
    offset = 0
  ) {
    array[offset + 1] = this[1]
    array[offset + 0] = this[0]
  }

  copyFromArray (
    array: number[], 
    offset = 0
  ) {
    this[1] = array[offset + 1]
    this[0] = array[offset + 0]
  }  
}
