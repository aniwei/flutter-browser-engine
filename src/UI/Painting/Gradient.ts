import { Offset } from '../Geometry'
import { Shader } from './Shader'
import { Color } from './Color'
import type { double, Float64List } from '@Types'

export abstract class Gradient extends Shader {
  static linear (
    from: Offset,
    to: Offset,
    color: Color[],
    colorStops: double[],
    tileMode: TileMode,
    matrix4: Float64List
  ) {

  }

  static radial (
    center: Offset,
    radius: double,
    colors: Color[]
  ) {

  }

  static sweep (

  ) {

  }
}