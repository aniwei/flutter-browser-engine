import { Offset } from '../Geometry'
import { Shader } from './Shader'
import { Color } from './Color'
import type { Float64List } from '@Types'
import type { TileMode } from '@UI'

export abstract class Gradient extends Shader {
  static linear (
    from: Offset,
    to: Offset,
    color: Color[],
    colorStops: number[],
    tileMode: TileMode,
    matrix4: Float64List
  ) {

  }

  static radial (
    center: Offset,
    radius: number,
    colors: Color[]
  ) {

  }

  static sweep (

  ) {

  }
}