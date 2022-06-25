import { invariant } from 'ts-invariant'
import type { Color, Offset, Radius, Rect, RRect } from '@rendering'
import { ArgumentError } from '@internal'

export function rectIsValid (rect: Rect) {
  invariant(rect !== null, 'Rect argument was null.')
  invariant(
    !(
      Number.isNaN(rect.left) ||
      Number.isNaN(rect.right) ||
      Number.isNaN(rect.top) ||
      Number.isNaN(rect.bottom)
    ),
    'Rect argument contained a NaN value.'
  )
  return true
}

export function rrectIsValid (rrect: RRect) {
  invariant(rrect !== null, 'RRect argument was null.')
  invariant(
    !(
      Number.isNaN(rrect.left) ||
      Number.isNaN(rrect.right) ||
      Number.isNaN(rrect.top) ||
      Number.isNaN(rrect.bottom)
    ),
    'RRect argument contained a NaN value.'
  )

  return true
}

export function offsetIsValid (offset: Offset) {
  invariant(offset !== null, 'Offset argument was null.')
  invariant(
    !Number.isNaN(offset.dx) && !Number.isNaN(offset.dy),
    'Offset argument contained a NaN value.'
  )
  return true
}

export function matrix4IsValid (matrix4: Float32Array) {
  invariant(matrix4 !== null, 'Matrix4 argument was null.')
  invariant(matrix4.length == 16, 'Matrix4 must have 16 entries.')
  return true
}

export function radiusIsValid (radius: Radius) {
  invariant(radius !== null, 'Radius argument was null.')
  invariant(
    !Number.isNaN(radius.x) && 
    !Number.isNaN(radius.y),
    'Radius argument contained a NaN value.'
  )
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