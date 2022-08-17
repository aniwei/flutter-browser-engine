/*
 * @Author: Aniwei
 * @Date: 2022-06-30 10:13:59
 */
import { invariant } from 'ts-invariant'
import { validateColorStops } from '@helper/validators'
import { Skia } from '@skia/binding'
import { Color } from '@internal/Color'
import { Offset } from '@internal/Geometry'

import { GradientConical, GradientLinear, GradientRadial, GradientSweep } from './Shader'
import type { TileMode } from '@skia'

export abstract class Gradient {
  static linear(
    from: Offset,
    to: Offset ,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: TileMode = Skia.binding.TileMode.Clamp,
    matrix4: Float64Array | null = null,
  ) {
    return new GradientLinear({
      from, 
      to, 
      colors, 
      colorStops, 
      tileMode, 
      matrix4
    })
  }

  static radial(
    center: Offset,
    radius: number,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: TileMode = Skia.binding.TileMode.Clamp,
    matrix4: Float64Array | null,
    focal: Offset | null,
    focalRadius: number = 0.0,
  ) {
    validateColorStops(colors, colorStops)
    if (
      focal === null || 
      (focal === center && focalRadius === 0.0)
    ) {
      return new GradientRadial({
        center, 
        radius, 
        colors, 
        colorStops, 
        tileMode, 
        matrix4
      })
    } else {
      invariant(
        center !== Offset.zero ||
        focal !== Offset.zero
      )
      
      return new GradientConical({
        focal, 
        focalRadius, 
        center, 
        radius, 
        colors,
        colorStops, 
        tileMode, 
        matrix4
      })
    }
  }

  static sweep(
    center: Offset,
    colors: Color[], 
    colorStops: number[] | null,
    tileMode: TileMode = Skia.binding.TileMode.Clamp,
    startAngle: number = 0.0,
    endAngle: number = Math.PI * 2,
    matrix4: Float64Array | null,
  ) {
      return new GradientSweep({
        center,
        colors,
        colorStops,
        tileMode,
        startAngle,
        endAngle,
        matrix4
      })    
    }
}
