import { invariant } from 'ts-invariant'
import { validateColorStops } from '@helper'
import { Skia, SkiaTileMode, toMatrix32 } from '@skia'
import { Offset } from '@internal'
import { Color } from './Painting'
import { GradientConical, GradientLinear, GradientRadial, GradientSweep } from './Shader'


export abstract class Gradient {
  static linear(
    from: Offset,
    to: Offset ,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: SkiaTileMode = Skia.TileMode.Clamp,
    matrix4: Float64Array | null = null,
  ) {
    const matrix = matrix4 === null ? null : toMatrix32(matrix4)

    return GradientLinear.malloc({
      from, 
      to, 
      colors, 
      colorStops, 
      tileMode, 
      matrix4: matrix
    })
  }

  static radial(
    center: Offset,
    radius: number,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: SkiaTileMode = Skia.TileMode.Clamp,
    matrix4: Float64Array | null,
    focal: Offset | null,
    focalRadius: number = 0.0,
  ) {
    validateColorStops(colors, colorStops)
    // If focal is null or focal radius is null, this should be treated as a regular radial gradient
    // If focal == center and the focal radius is 0.0, it's still a regular radial gradient
    const matrix32 = matrix4 !== null ? toMatrix32(matrix4) : null
    if (
      focal === null || 
      (focal === center && focalRadius === 0.0)
    ) {
      return GradientRadial.malloc({
        center, 
        radius, 
        colors, 
        colorStops, 
        tileMode, 
        matrix4: matrix32
      })
    } else {
      invariant(
        center !== Offset.zero ||
        focal !== Offset.zero
      )
      
      return GradientConical.malloc({
        focal, 
        focalRadius, 
        center, 
        radius, 
        colors,
        colorStops, 
        tileMode, 
        matrix4: matrix32
      })
    }
  }

  static sweep(
    center: Offset,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: SkiaTileMode = Skia.TileMode.Clamp,
    startAngle: number = 0.0,
    endAngle: number = Math.PI * 2,
    matrix4: Float64Array | null,
  ) {
      return GradientSweep.malloc({
        center,
        colors,
        colorStops,
        tileMode,
        startAngle,
        endAngle,
        matrix4: matrix4 !== null ? toMatrix32(matrix4) : null
      })    
    }
}
