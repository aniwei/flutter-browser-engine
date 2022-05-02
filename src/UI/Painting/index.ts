import { invariant } from 'ts-invariant'
import { ArgumentError, clamp } from '@Shared'
import { Offset } from '../Geometry'

import type { Float64List } from '@Types'
import type { Color } from './Color'

export function offsetIsValid (offset: Offset) {
  invariant(offset !== null, 'Offset argument was null.')
  invariant(!Number.isNaN(offset.dx) && !Number.isNaN(offset.dy), 'Offset argument contained a NaN value.')
  
  return true
}

export function matrix4IsValid (matrix4: Float64List) {
  invariant(matrix4 !== null, 'Matrix4 argument was null.')
  invariant(matrix4.length === 16, 'Matrix4 must have 16 entries.')
  return true
}

export function validateColorStops (
  colors: Color[], 
  colorStops: number[] | null
) {
  if (colorStops === null) {
    if (colors.length !== 2) {
      throw new ArgumentError('"colors" must have length 2 if "colorStops" is omitted.')
    }
  } else {
    if (colors.length !== colorStops.length) {
      throw new ArgumentError('"colors" and "colorStops" arguments must have equal length.')
    }
  }
}

export function scaleAlpha(
  a: Color, 
  factor: number
): Color {
  return a.withAlpha(clamp(Math.round(a.alpha * factor), 0, 255))
}

export enum BlurStyle {
  // These mirror SkBlurStyle and must be kept in sync.
  normal,
  solid,
  outer,
  inner,
}

export enum StrokeCap {
  butt,
  round,
  square,
}

export enum StrokeJoin {
  miter,
  round,
  bevel,
}

export enum PaintingStyle {
  fill,
  stroke,
}

export enum BlendMode {
  // This list comes from Skia's SkXfermode.h and the values (order) should be
  // kept in sync.
  // See: https://skia.org/user/api/skpaint#SkXfermode
  clear,
  src,
  dst,
  srcOver,
  dstOver,
  srcIn,
  dstIn,
  srcOut,
  dstOut,
  srcATop,
  dstATop,
  xor,
  plus,
  modulate,

  // Following blend modes are defined in the CSS Compositing standard.
  screen, // The last coeff mode.
  overlay,
  darken,
  lighten,
  colorDodge,
  colorBurn,
  hardLight,
  softLight,
  difference,
  exclusion,
  multiply, // The last separable mode.
  hue,
  saturation,
  color,
  luminosity,
}

export enum Clip {
  none,
  hardEdge,
  antiAlias,
  antiAliasWithSaveLayer,
}

export enum FilterQuality {
  none,
  low,
  medium,
  high,
}

export enum ImageByteFormat {
  rawRgba,
  rawStraightRgba,
  rawUnmodified,
  png,
}

export enum PixelFormat {
  rgba8888,
  bgra8888,
}

export * from './Image'
export * from './Color'
export * from './Paint'
export * from './Shader'
// export * from './Shadow'
export * from './Gradient'
export * from './MaskFilter'
export * from './ColorFilter'
export * from './ImageShader'
export * from './ImageFilter'
export * from './ImmutableBuffer'