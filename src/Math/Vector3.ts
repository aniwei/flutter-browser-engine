import { clamp } from '@helper'
import { Matrix3 } from './Matrix3'
import { Matrix4 } from './Matrix4'
import { Vector2 } from './Vector2'
import { Vector4 } from './Vector4'
import { Quaternion } from './Quaternion'

export class Vector3 extends Float64Array {
  static zero () {
    return new Vector3(3)
  }

  get storage () {
    return this
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


  
  static array (
    array: number[],
    offset = 0
  ) {
    const vec = Vector3.zero()
    vec.copyFromArray(array, offset)
    return vec
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

  static fromFloat64Array (v3: Float64Array) {
    return new Vector3(v3)
  }

  static fromBuffer (
    buffer: ArrayBuffer, 
    offset: number
  ) {
    // @TODO
  }

  static random (random?: { (): number }) {
    random ??= () => Math.random()
    return new Vector3([random(), random(), random()])
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

  get isInfinite () {
    let isInfinite = false
    isInfinite = isInfinite || Number.isFinite(this[0])
    isInfinite = isInfinite || Number.isFinite(this[1])
    isInfinite = isInfinite || Number.isFinite(this[2])
    return isInfinite
  }

  get isNaN () {
    let isNaN = false
    isNaN = isNaN || Number.isNaN(this[0])
    isNaN = isNaN || Number.isNaN(this[1])
    isNaN = isNaN || Number.isNaN(this[2])
    return isNaN
  }

  set xy (arg: Vector2) {
    this[0] = arg[0]
    this[1] = arg[1]
  }

  set xz (arg: Vector2) {
    this[0] = arg[0]
    this[2] = arg[1]
  }

  set yx (arg: Vector2) {
    this[1] = arg[0]
    this[0] = arg[1]
  }

  set yz (arg: Vector2) {
    this[1] = arg[0]
    this[2] = arg[1]
  }

  set zx (arg: Vector2) {
    this[2] = arg[0]
    this[0] = arg[1]
  }

  set zy (arg: Vector2) {
    this[2] = arg[0]
    this[1] = arg[1]
  }

  set xyz (arg: Vector3) {
    this[0] = arg[0]
    this[1] = arg[1]
    this[2] = arg[2]
  }

  set xzy (arg: Vector3) {
    this[0] = arg[0]
    this[2] = arg[1]
    this[1] = arg[2]
  }

  set yxz (arg: Vector3) {
    this[1] = arg[0]
    this[0] = arg[1]
    this[2] = arg[2]
  }

  set yzx (arg: Vector3) {
    this[1] = arg[0]
    this[2] = arg[1]
    this[0] = arg[2]
  }

  set zxy (arg: Vector3) {
    this[2] = arg[0]
    this[0] = arg[1]
    this[1] = arg[2]
  }

  set zyx (arg: Vector3) {
    this[2] = arg[0]
    this[1] = arg[1]
    this[0] = arg[2]
  }

  set r (arg: number) {
    this.x = arg
  } 
  set g (arg: number) {
    this.y = arg
  } 
  set b (arg: number) {
    this.z = arg
  } 
  set s (arg: number) {
    this.x = arg
  } 
  set t (arg: number) {
    this.y = arg
  } 
  set p (arg: number) {
    this.z = arg
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

  get r () {
    return this.x
  }
  get g () {
    return this.y
  }
  get b () {
    return this.z
  }
  get s () {
    return this.x
  }
  get t () {
    return this.y
  }
  get p () {
    return this.z
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
  get rr () {
    return this.xx
  }
  get rg () {
    return this.xy
  }
  get rb () {
    return this.xz
  }
  get gr () {
    return this.yx
  }
  get gg () {
    return this.yy
  }
  get gb () {
    return this.yz
  }
  get br () {
    return this.zx
  }
  get bg () {
    return this.zy
  }
  get bb () {
    return this.zz
  }
  get rrr () {
    return this.xxx
  }
  get rrg () {
    return this.xxy
  }
  get rrb () {
    return this.xxz
  }
  get rgr () {
    return this.xzx
  }
  get rgg () {
    return this.xyy
  }
  get rgb () {
    return this.xyz
  }
  get rbr () {
    return this.xzx
  }
  get rbg () {
    return this.xzy
  }
  get rbb () {
    return this.xzz
  }
  get grr () {
    return this.yxx
  }
  get grg () {
    return this.yxy
  }
  get grb () {
    return this.yxz
  }
  get ggr () {
    return this.yyx
  }
  get ggg () {
    return this.yyy
  }
  get ggb () {
    return this.yyz
  }
  get gbr () {
    return this.yxz
  }
  get gbg () {
    return this.yzy
  }
  get gbb () {
    return this.yzz
  }
  get brr () {
    return this.zxx
  }
  get brg () {
    return this.zxy
  }
  get brb () {
    return this.zxz
  }
  get bgr () {
    return this.zyx
  }
  get bgg () {
    return this.zyy
  }
  get bgb () {
    return this.zyz
  }
  get bbr () {
    return this.zzx
  }
  get bbg () {
    return this.zzy
  }
  get bbb () {
    return this.zzz
  }
  get rrrr () {
    return this.xxxx
  }
  get rrrg () {
    return this.xxxy
  }
  get rrrb () {
    return this.xxxz
  }
  get rrgr () {
    return this.xxyx
  }
  get rrgg () {
    return this.xxyy
  }
  get rrgb () {
    return this.xxyz
  }
  get rrbr () {
    return this.xxzx
  }
  get rrbg () {
    return this.xxzy
  }
  get rrbb () {
    return this.xxzz
  }
  get rgrr () {
    return this.xyxx
  }
  get rgrg () {
    return this.xyxy
  }
  get rgrb () {
    return this.xyxz
  }
  get rggr () {
    return this.xyyx
  }
  get rggg () {
    return this.xyyy
  }
  get rggb () {
    return this.xyyz
  }
  get rgbr () {
    return this.xyzx
  }
  get rgbg () {
    return this.xyzy
  }
  get rgbb () {
    return this.xyzz
  }
  get rbrr () {
    return this.xzxx
  }
  get rbrg () {
    return this.xzxy
  }
  get rbrb () {
    return this.xzxz
  }
  get rbgr () {
    return this.xzyx
  }
  get rbgg () {
    return this.xzyy
  }
  get rbgb () {
    return this.xzyz
  }
  get rbbr () {
    return this.xzzx
  }
  get rbbg () {
    return this.xzzy
  }
  get rbbb () {
    return this.xzzz
  }
  get grrr () {
    return this.yxxx
  }
  get grrg () {
    return this.yxxy
  }
  get grrb () {
    return this.yxxz
  }
  get grgr () {
    return this.yxyx
  }
  get grgg () {
    return this.yxyy
  }
  get grgb () {
    return this.yxyz
  }
  get grbr () {
    return this.yxzx
  }
  get grbg () {
    return this.yxzy
  }
  get grbb () {
    return this.yxzz
  }
  get ggrr () {
    return this.yyxx
  }
  get ggrg () {
    return this.yyxy
  }
  get ggrb () {
    return this.yyxz
  }
  get gggr () {
    return this.yyyx
  }
  get gggg () {
    return this.yyyy
  }
  get gggb () {
    return this.yyyz
  }
  get ggbr () {
    return this.yyzx
  }
  get ggbg () {
    return this.yyzy
  }
  get ggbb () {
    return this.yyzz
  }
  get gbrr () {
    return this.yzxx
  }
  get gbrg () {
    return this.yzxy
  }
  get gbrb () {
    return this.yzxz
  }
  get gbgr () {
    return this.yzyx
  }
  get gbgg () {
    return this.yzyy
  }
  get gbgb () {
    return this.yzyz
  }
  get gbbr () {
    return this.yzzx
  }
  get gbbg () {
    return this.yzzy
  }
  get gbbb () {
    return this.yzzz
  }
  get brrr () {
    return this.zxxx
  }
  get brrg () {
    return this.zxxy
  }
  get brrb () {
    return this.zxxz
  }
  get brgr () {
    return this.zxyx
  }
  get brgg () {
    return this.zxyy
  }
  get brgb () {
    return this.zxyz
  }
  get brbr () {
    return this.zxzx
  }
  get brbg () {
    return this.zxzy
  }
  get brbb () {
    return this.zxzz
  }
  get bgrr () {
    return this.zyxx
  }
  get bgrg () {
    return this.zyxy
  }
  get bgrb () {
    return this.zyxz
  }
  get bggr () {
    return this.zyyx
  }
  get bggg () {
    return this.zyyy
  }
  get bggb () {
    return this.zyyz
  }
  get bgbr () {
    return this.zyzx
  }
  get bgbg () {
    return this.zyzy
  }
  get bgbb () {
    return this.zyzz
  }
  get bbrr () {
    return this.zzxx
  }
  get bbrg () {
    return this.zzxy
  }
  get bbrb () {
    return this.zzxz
  }
  get bbgr () {
    return this.zzyx
  }
  get bbgg () {
    return this.zzyy
  }
  get bbgb () {
    return this.zzyz
  }
  get bbbr () {
    return this.zzzx
  }
  get bbbg () {
    return this.zzzy
  }
  get bbbb () {
    return this.zzzz
  }
  get ss () {
    return this.xx
  }
  get st () {
    return this.xy
  }
  get sp () {
    return this.xz
  }
  get ts () {
    return this.yx
  }
  get tt () {
    return this.yy
  }
  get tp () {
    return this.yz
  }
  get ps () {
    return this.zx
  }
  get pt () {
    return this.zy
  }
  get pp () {
    return this.zz
  }
  get sss () {
    return this.xxx
  }
  get sst () {
    return this.xxy
  }
  get ssp () {
    return this.xxz
  }
  get sts () {
    return this.xyx
  }
  get stt () {
    return this.xyy
  }
  get stp () {
    return this.xyz
  }
  get sps () {
    return this.xzx
  }
  get spt () {
    return this.xzy
  }
  get spp () {
    return this.xzz
  }
  get tss () {
    return this.yxx
  }
  get tst () {
    return this.yxy
  }
  get tsp () {
    return this.yxz
  }
  get tts () {
    return this.yyx
  }
  get ttt () {
    return this.yyy
  }
  get ttp () {
    return this.yyz
  }
  get tps () {
    return this.yzx
  }
  get tpt () {
    return this.yzy
  }
  get tpp () {
    return this.yzz
  }
  get pss () {
    return this.zxx
  }
  get pst () {
    return this.zxy
  }
  get psp () {
    return this.zxz
  }
  get pts () {
    return this.zyx
  }
  get ptt () {
    return this.zyy
  }
  get ptp () {
    return this.zyz
  }
  get pps () {
    return this.zzx
  }
  get ppt () {
    return this.zzy
  }
  get ppp () {
    return this.zzz
  }
  get ssss () {
    return this.xxxx
  }
  get ssst () {
    return this.xxxy
  }
  get sssp () {
    return this.xxxz
  }
  get ssts () {
    return this.xxyx
  }
  get sstt () {
    return this.xxyy
  }
  get sstp () {
    return this.xxyz
  }
  get ssps () {
    return this.xxzx
  }
  get sspt () {
    return this.xxzy
  }
  get sspp () {
    return this.xxzz
  }
  get stss () {
    return this.xyxx
  }
  get stst () {
    return this.xyxy
  }
  get stsp () {
    return this.xyxz
  }
  get stts () {
    return this.xyyx
  }
  get sttt () {
    return this.xyyy
  }
  get sttp () {
    return this.xyyz
  }
  get stps () {
    return this.xyzx
  }
  get stpt () {
    return this.xyzy
  }
  get stpp () {
    return this.xyzz
  }
  get spss () {
    return this.xzxx
  }
  get spst () {
    return this.xzxy
  }
  get spsp () {
    return this.xzxz
  }
  get spts () {
    return this.xzyx
  }
  get sptt () {
    return this.xzyy
  }
  get sptp () {
    return this.xzyz
  }
  get spps () {
    return this.xzzx
  }
  get sppt () {
    return this.xzzy
  }
  get sppp () {
    return this.xzzz
  }
  get tsss () {
    return this.yxxx
  }
  get tsst () {
    return this.yxxy
  }
  get tssp () {
    return this.yxxz
  }
  get tsts () {
    return this.yxyx
  }
  get tstt () {
    return this.yxyy
  }
  get tstp () {
    return this.yxyz
  }
  get tsps () {
    return this.yxzx
  }
  get tspt () {
    return this.yxzy
  }
  get tspp () {
    return this.yxzz
  }
  get ttss () {
    return this.yyxx
  }
  get ttst () {
    return this.yyxy
  }
  get ttsp () {
    return this.yyxz
  }
  get ttts () {
    return this.yyyx
  }
  get tttt () {
    return this.yyyy
  }
  get tttp () {
    return this.yyyz
  }
  get ttps () {
    return this.yyzx
  }
  get ttpt () {
    return this.yyzy
  }
  get ttpp () {
    return this.yyzz
  }
  get tpss () {
    return this.yzxx
  }
  get tpst () {
    return this.yzxy
  }
  get tpsp () {
    return this.yzxz
  }
  get tpts () {
    return this.yzyx
  }
  get tptt () {
    return this.yzyy
  }
  get tptp () {
    return this.yzyz
  }
  get tpps () {
    return this.yzzx
  }
  get tppt () {
    return this.yzzy
  }
  get tppp () {
    return this.yzzz
  }
  get psss () {
    return this.zxxx
  }
  get psst () {
    return this.zxxy
  }
  get pssp () {
    return this.zxxz
  }
  get psts () {
    return this.zxyx
  }
  get pstt () {
    return this.zxyy
  }
  get pstp () {
    return this.zxyz
  }
  get psps () {
    return this.zxzx
  }
  get pspt () {
    return this.zxzy
  }
  get pspp () {
    return this.zxzz
  }
  get ptss () {
    return this.zyxx
  }
  get ptst () {
    return this.zyxy
  }
  get ptsp () {
    return this.zyxz
  }
  get ptts () {
    return this.zyyx
  }
  get pttt () {
    return this.zyyy
  }
  get pttp () {
    return this.zyyz
  }
  get ptps () {
    return this.zyzx
  }
  get ptpt () {
    return this.zyzy
  }
  get ptpp () {
    return this.zyzz
  }
  get ppss () {
    return this.zzxx
  }
  get ppst () {
    return this.zzxy
  }
  get ppsp () {
    return this.zzxz
  }
  get ppts () {
    return this.zzyx
  }
  get pptt () {
    return this.zzyy
  }
  get pptp () {
    return this.zzyz
  }
  get ppps () {
    return this.zzzx
  }
  get pppt () {
    return this.zzzy
  }
  get pppp () {
    return this.zzzz
  }
  set rg (arg: Vector2) {
    this.xy = arg
  }
  set rb (arg: Vector2) {
    this.xz = arg
  }
  set gr (arg: Vector2) {
    this.yx = arg
  }
  set gb (arg: Vector2) {
    this.yz = arg
  }
  set br (arg: Vector2) {
    this.zx = arg
  }
  set bg (arg: Vector2) {
    this.zy = arg
  }
  set rgb (arg: Vector3) {
    this.xyz = arg
  }
  set rbg (arg: Vector3) {
    this.xzy = arg
  }
  set grb (arg: Vector3) {
    this.yxz = arg
  }
  set gbr (arg: Vector3) {
    this.yzx = arg
  }
  set brg (arg: Vector3) {
    this.zxy = arg
  }
  set bgr (arg: Vector3) {
    this.zyx = arg
  }
  set st (arg: Vector2) {
    this.xy = arg
  }
  set sp (arg: Vector2) {
    this.xz = arg
  }
  set ts (arg: Vector2) {
    this.yx = arg
  }
  set tp (arg: Vector2) {
    this.yz = arg
  }
  set ps (arg: Vector2) {
    this.zx = arg
  }
  set pt (arg: Vector2) {
    this.zy = arg
  }
  set stp (arg: Vector3) {
    this.xyz = arg
  }
  set spt (arg: Vector3) {
    this.xzy = arg
  }
  set tsp (arg: Vector3) {
    this.yxz = arg
  }
  set tps (arg: Vector3) {
    this.yzx = arg
  }
  set pst (arg: Vector3) {
    this.zxy = arg
  }
  set pts (arg: Vector3) {
    this.zyx = arg
  }

  get xx () {
    return new Vector2([this[0], this[0]])
  }
  get xy () {
    return new Vector2([this[0], this[1]])
  }
  get xz () {
    return new Vector2([this[0], this[2]])
  }
  get yx () {
    return new Vector2([this[1], this[0]])
  }
  get yy () {
    return new Vector2([this[1], this[1]])
  }
  get yz () {
    return new Vector2([this[1], this[2]])
  }
  get zx () {
    return new Vector2([this[2], this[0]])
  }
  get zy () {
    return new Vector2([this[2], this[1]])
  }
  get zz () {
    return new Vector2([this[2], this[2]])
  }
  get xxx () {
    return new Vector3([this[0], this[0], this[0]])
  }
  get xxy () {
    return new Vector3([this[0], this[0], this[1]])
  }
  get xxz () {
    return new Vector3([this[0], this[0], this[2]])
  }
  get xyx () {
    return new Vector3([this[0], this[1], this[0]])
  }
  get xyy () {
    return new Vector3([this[0], this[1], this[1]])
  }
  get xyz () {
    return new Vector3([this[0], this[1], this[2]])
  }
  get xzx () {
    return new Vector3([this[0], this[2], this[0]])
  }
  get xzy () {
    return new Vector3([this[0], this[2], this[1]])
  }
  get xzz () {
    return new Vector3([this[0], this[2], this[2]])
  }
  get yxx () {
    return new Vector3([this[1], this[0], this[0]])
  }
  get yxy () {
    return new Vector3([this[1], this[0], this[1]])
  }
  get yxz () {
    return new Vector3([this[1], this[0], this[2]])
  }
  get yyx () {
    return new Vector3([this[1], this[1], this[0]])
  }
  get yyy () {
    return new Vector3([this[1], this[1], this[1]])
  }
  get yyz () {
    return new Vector3([this[1], this[1], this[2]])
  }
  get yzx () {
    return new Vector3([this[1], this[2], this[0]])
  }
  get yzy () {
    return new Vector3([this[1], this[2], this[1]])
  }
  get yzz () {
    return new Vector3([this[1], this[2], this[2]])
  }
  get zxx () {
    return new Vector3([this[2], this[0], this[0]])
  }
  get zxy () {
    return new Vector3([this[2], this[0], this[1]])
  }
  get zxz () {
    return new Vector3([this[2], this[0], this[2]])
  }
  get zyx () {
    return new Vector3([this[2], this[1], this[0]])
  }
  get zyy () {
    return new Vector3([this[2], this[1], this[1]])
  }
  get zyz () {
    return new Vector3([this[2], this[1], this[2]])
  }
  get zzx () {
    return new Vector3([this[2], this[2], this[0]])
  }
  get zzy () {
    return new Vector3([this[2], this[2], this[1]])
  }
  get zzz () {
    return new Vector3([this[2], this[2], this[2]])
  }
  get xxxx () {
    return new Vector4([this[0], this[0], this[0], this[0]])
  }
  get xxxy () {
    return new Vector4([this[0], this[0], this[0], this[1]])
  }
  get xxxz () {
    return new Vector4([this[0], this[0], this[0], this[2]])
  }
  get xxyx () {
    return new Vector4([this[0], this[0], this[1], this[0]])
  }
  get xxyy () {
    return new Vector4([this[0], this[0], this[1], this[1]])
  }
  get xxyz () {
    return new Vector4([this[0], this[0], this[1], this[2]])
  }
  get xxzx () {
    return new Vector4([this[0], this[0], this[2], this[0]])
  }
  get xxzy () {
    return new Vector4([this[0], this[0], this[2], this[1]])
  }
  get xxzz () {
    return new Vector4([this[0], this[0], this[2], this[2]])
  }
  get xyxx () {
    return new Vector4([this[0], this[1], this[0], this[0]])
  }
  get xyxy () {
    return new Vector4([this[0], this[1], this[0], this[1]])
  }
  get xyxz () {
    return new Vector4([this[0], this[1], this[0], this[2]])
  }
  get xyyx () {
    return new Vector4([this[0], this[1], this[1], this[0]])
  }
  get xyyy () {
    return new Vector4([this[0], this[1], this[1], this[1]])
  }
  get xyyz () {
    return new Vector4([this[0], this[1], this[1], this[2]])
  }
  get xyzx () {
    return new Vector4([this[0], this[1], this[2], this[0]])
  }
  get xyzy () {
    return new Vector4([this[0], this[1], this[2], this[1]])
  }
  get xyzz () {
    return new Vector4([this[0], this[1], this[2], this[2]])
  }
  get xzxx () {
    return new Vector4([this[0], this[2], this[0], this[0]])
  }
  get xzxy () {
    return new Vector4([this[0], this[2], this[0], this[1]])
  }
  get xzxz () {
    return new Vector4([this[0], this[2], this[0], this[2]])
  }
  get xzyx () {
    return new Vector4([this[0], this[2], this[1], this[0]])
  }
  get xzyy () {
    return new Vector4([this[0], this[2], this[1], this[1]])
  }
  get xzyz () {
    return new Vector4([this[0], this[2], this[1], this[2]])
  }
  get xzzx () {
    return new Vector4([this[0], this[2], this[2], this[0]])
  }
  get xzzy () {
    return new Vector4([this[0], this[2], this[2], this[1]])
  }
  get xzzz () {
    return new Vector4([this[0], this[2], this[2], this[2]])
  }
  get yxxx () {
    return new Vector4([this[1], this[0], this[0], this[0]])
  }
  get yxxy () {
    return new Vector4([this[1], this[0], this[0], this[1]])
  }
  get yxxz () {
    return new Vector4([this[1], this[0], this[0], this[2]])
  }
  get yxyx () {
    return new Vector4([this[1], this[0], this[1], this[0]])
  }
  get yxyy () {
    return new Vector4([this[1], this[0], this[1], this[1]])
  }
  get yxyz () {
    return new Vector4([this[1], this[0], this[1], this[2]])
  }
  get yxzx () {
    return new Vector4([this[1], this[0], this[2], this[0]])
  }
  get yxzy () {
    return new Vector4([this[1], this[0], this[2], this[1]])
  }
  get yxzz () {
    return new Vector4([this[1], this[0], this[2], this[2]])
  }
  get yyxx () {
    return new Vector4([this[1], this[1], this[0], this[0]])
  }
  get yyxy () {
    return new Vector4([this[1], this[1], this[0], this[1]])
  }
  get yyxz () {
    return new Vector4([this[1], this[1], this[0], this[2]])
  }
  get yyyx () {
    return new Vector4([this[1], this[1], this[1], this[0]])
  }
  get yyyy () {
    return new Vector4([this[1], this[1], this[1], this[1]])
  }
  get yyyz () {
    return new Vector4([this[1], this[1], this[1], this[2]])
  }
  get yyzx () {
    return new Vector4([this[1], this[1], this[2], this[0]])
  }
  get yyzy () {
    return new Vector4([this[1], this[1], this[2], this[1]])
  }
  get yyzz () {
    return new Vector4([this[1], this[1], this[2], this[2]])
  }
  get yzxx () {
    return new Vector4([this[1], this[2], this[0], this[0]])
  }
  get yzxy () {
    return new Vector4([this[1], this[2], this[0], this[1]])
  }
  get yzxz () {
    return new Vector4([this[1], this[2], this[0], this[2]])
  }
  get yzyx () {
    return new Vector4([this[1], this[2], this[1], this[0]])
  }
  get yzyy () {
    return new Vector4([this[1], this[2], this[1], this[1]])
  }
  get yzyz () {
    return new Vector4([this[1], this[2], this[1], this[2]])
  }
  get yzzx () {
    return new Vector4([this[1], this[2], this[2], this[0]])
  }
  get yzzy () {
    return new Vector4([this[1], this[2], this[2], this[1]])
  }
  get yzzz () {
    return new Vector4([this[1], this[2], this[2], this[2]])
  }
  get zxxx () {
    return new Vector4([this[2], this[0], this[0], this[0]])
  }
  get zxxy () {
    return new Vector4([this[2], this[0], this[0], this[1]])
  }
  get zxxz () {
    return new Vector4([this[2], this[0], this[0], this[2]])
  }
  get zxyx () {
    return new Vector4([this[2], this[0], this[1], this[0]])
  }
  get zxyy () {
    return new Vector4([this[2], this[0], this[1], this[1]])
  }
  get zxyz () {
    return new Vector4([this[2], this[0], this[1], this[2]])
  }
  get zxzx () {
    return new Vector4([this[2], this[0], this[2], this[0]])
  }
  get zxzy () {
    return new Vector4([this[2], this[0], this[2], this[1]])
  }
  get zxzz () {
    return new Vector4([this[2], this[0], this[2], this[2]])
  }
  get zyxx () {
    return new Vector4([this[2], this[1], this[0], this[0]])
  }
  get zyxy () {
    return new Vector4([this[2], this[1], this[0], this[1]])
  }
  get zyxz () {
    return new Vector4([this[2], this[1], this[0], this[2]])
  }
  get zyyx () {
    return new Vector4([this[2], this[1], this[1], this[0]])
  }
  get zyyy () {
    return new Vector4([this[2], this[1], this[1], this[1]])
  }
  get zyyz () {
    return new Vector4([this[2], this[1], this[1], this[2]])
  }
  get zyzx () {
    return new Vector4([this[2], this[1], this[2], this[0]])
  }
  get zyzy () {
    return new Vector4([this[2], this[1], this[2], this[1]])
  }
  get zyzz () {
    return new Vector4([this[2], this[1], this[2], this[2]])
  }
  get zzxx () {
    return new Vector4([this[2], this[2], this[0], this[0]])
  }
  get zzxy () {
    return new Vector4([this[2], this[2], this[0], this[1]])
  }
  get zzxz () {
    return new Vector4([this[2], this[2], this[0], this[2]])
  }
  get zzyx () {
    return new Vector4([this[2], this[2], this[1], this[0]])
  }
  get zzyy () {
    return new Vector4([this[2], this[2], this[1], this[1]])
  }
  get zzyz () {
    return new Vector4([this[2], this[2], this[1], this[2]])
  }
  get zzzx () {
    return new Vector4([this[2], this[2], this[2], this[0]])
  }
  get zzzy () {
    return new Vector4([this[2], this[2], this[2], this[1]])
  }
  get zzzz () {
    return new Vector4([this[2], this[2], this[2], this[2]])
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
    this[0] = other[0]
    this[1] = other[1]
    this[2] = other[2]
  }

  splat (arg: number) {
    this[2] = arg
    this[1] = arg
    this[0] = arg
  }


  toString () {
    return `[${this.storage[0]},${this.storage[1]},${this.storage[2]}]`
  }

  
  eq (other: Vector3) {
    return (
      (other instanceof Vector3) &&
      (this[0] === other[0]) &&
      (this[1] === other[1]) &&
      (this[2] === other[2])
    )
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

  normalizeLength () {
    return this.normalize()
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

  angleToSigned (
    other: Vector3, 
    normal: Vector3
  ) {
    const angle = this.angleTo(other)
    const c = this.cross(other)
    const d = c.dot(normal)

    return d < 0.0 ? -angle : angle
  }

  dot (other: Vector3) {
    let sum
    sum = this[0] * other[0]
    sum += this[1] * other[1]
    sum += this[2] * other[2]
    return sum
  }

  
  postmultiply (arg: Matrix3) {
    const v0 = this[0]
    const v1 = this[1]
    const v2 = this[2]

    this[0] = v0 * arg[0] + v1 * arg[1] + v2 * arg[2]
    this[1] = v0 * arg[3] + v1 * arg[4] + v2 * arg[5]
    this[2] = v0 * arg[6] + v1 * arg[7] + v2 * arg[8]
  }

  cross (other: Vector3) {
    const x = this[0]
    const y = this[1]
    const z = this[2]
    const ox = other[0]
    const oy = other[1]
    const oz = other[2]
    return new Vector3([
      y * oz - z * oy, 
      z * ox - x * oz, 
      x * oy - y * ox
    ])
  }

  crossInto (
    other: Vector3, 
    out: Vector3
  ) {
    const x = this[0]
    const y = this[1]
    const z = this[2]
    const ox = other[0]
    const oy = other[1]
    const oz = other[2]
    out[0] = y * oz - z * oy
    out[1] = z * ox - x * oz
    out[2] = x * oy - y * ox
    return out
  }

  reflect (normal: Vector3) {
    this.substract(normal.scaled(2.0 * normal.dot(this)))
  }

  reflected (normal: Vector3) {
    const vec = this.clone()
    vec.reflect(normal)
    return vec
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

  applyAxisAngle (
    axis: Vector3, 
    angle: number
  ) {
    this.applyQuaternion(Quaternion.axisAngle(axis, angle))
  }

  applyQuaternion (arg: Quaternion) {
    const v0 = this[0]
    const v1 = this[1]
    const v2 = this[2]
    const qx = arg[0]
    const qy = arg[1]
    const qz = arg[2]
    const qw = arg[3]
    const ix = qw * v0 + qy * v2 - qz * v1
    const iy = qw * v1 + qz * v0 - qx * v2
    const iz = qw * v2 + qx * v1 - qy * v0
    const iw = -qx * v0 - qy * v1 - qz * v2
    this[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
    this[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
    this[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
  }

  applyMatrix3 (arg: Matrix3) {
    const v0 = this[0]
    const v1 = this[1]
    const v2 = this[2]
    this[0] = arg[0] * v0 + arg[3] * v1 + arg[6] * v2
    this[1] = arg[1] * v0 + arg[4] * v1 + arg[7] * v2
    this[2] = arg[2] * v0 + arg[5] * v1 + arg[8] * v2
  }

  applyMatrix4 (arg: Matrix4) {
    const v0 = this[0]
    const v1 = this[1]
    const v2 = this[2]
    this[0] = arg[0] * v0 + arg[4] * v1 + arg[8] * v2 + arg[12]
    this[1] = arg[1] * v0 + arg[5] * v1 + arg[9] * v2 + arg[13]
    this[2] = arg[2] * v0 + arg[6] * v1 + arg[10] * v2 + arg[14]
  }

  relativeError (correct: Vector3) {
    const correctNorm = correct.length
    const diff = this.clone()
    diff.substract(correct)
    const diffNorm = diff.length
    return diffNorm / correctNorm
  }

  absoluteError (correct: Vector3) {
    const diff = this.clone()
    diff.substract(correct)
    return diff.length
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

  substract (v: Vector3) {
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

  negate () {
    this[2] = -this[2]
    this[1] = -this[1]
    this[0] = -this[0]
  }

  absolute () {
    this[0] = Math.abs(this[0])
    this[1] = Math.abs(this[1])
    this[2] = Math.abs(this[2])
  }

  clamp (
    min: Vector3, 
    max: Vector3
  ) {
    this[0] = clamp(this[0], min[0], max[0])
    this[1] = clamp(this[1], min[1], max[1])
    this[2] = clamp(this[2], min[2], max[2])
  }

  clampScalar (
    min: number, 
    max: number
  ) {
    this[0] = clamp(this[0], min, max)
    this[1] = clamp(this[1], min, max)
    this[2] = clamp(this[2], min, max)
  }

  floor () {
    this[0] = Math.floor(this[0])
    this[1] = Math.floor(this[1])
    this[2] = Math.floor(this[2])
  }

  ceil () {
    this[0] = Math.ceil(this[0])
    this[1] = Math.ceil(this[1])
    this[2] = Math.ceil(this[2])
  }

  round () {
    this[0] = Math.round(this[0])
    this[1] = Math.round(this[1])
    this[2] = Math.round(this[2])
  }

  roundToZero () {
    this[0] = this[0] < 0.0
        ? Math.ceil(this[0])
        : Math.floor(this[0])
    this[1] = this[1] < 0.0
        ? Math.ceil(this[1])
        : Math.floor(this[1])
    this[2] = this[2] < 0.0
        ? Math.ceil(this[2])
        : Math.floor(this[2])
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

  copyFromArray (
    array: number[], 
    offset = 0
  ) {
    this[2] = array[offset + 2]
    this[1] = array[offset + 1]
    this[0] = array[offset + 0]
  }
}
