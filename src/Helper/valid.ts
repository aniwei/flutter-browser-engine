import { invariant } from 'ts-invariant'
import { ArgumentError } from '@internal/ArgumentError'

import type { Offset } from '@internal/Geometry'
import type { Color } from '@internal/Color'

/*
 * @Author: Aniwei
 * @Date: 2022-08-17 15:13:52
 */
export function matrix4IsValid (matrix4: Float64Array) {
  invariant(matrix4 !== null, 'Matrix4 argument was null.')
  invariant(matrix4.length === 16, 'Matrix4 must have 16 entries.')
  return true
}


export function offsetIsValid (offset: Offset) {
  invariant(offset !== null, 'Offset argument was null.')
  invariant(!isNaN(offset.dx) && !isNaN(offset.dy), 'Offset argument contained a NaN value.')
  return true
}

export function validateColorStops (
  colors: Color[], 
  colorStops?: number[] | null,
) {
  if (colorStops === null) {
    if (colors.length !== 2) {
      throw new ArgumentError(`"colors" must have length 2 if "colorStops" is omitted.`)
    }
  } else {
    if (colors.length !== colorStops?.length) {
      throw new ArgumentError('"colors" and "colorStops" arguments must have equal length.')
    }
  }
}