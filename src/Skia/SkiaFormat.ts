import { Color, Offset, Rect, RRect } from '@UI'
import { Skia } from '@Skia'
import { CubicResampler, FilterOptions, MallocObj } from 'canvaskit-wasm'
import { SkiaFilterQuality } from './Skia'
import invariant from 'ts-invariant'

const kMatrixIndexToMatrix4Index = [
  0, 4, 12, // Row 1
  1, 5, 13, // Row 2
  3, 7, 15, // Row 3
]

const kDefaultSkColorStops = [0, 1]
  
export function toSkiaMatrixFromFloat32 (matrix4: Float32Array) {
  const skMatrix = new Float32Array(9)

  for (let i = 0; i < 9; i++) {
    const index = kMatrixIndexToMatrix4Index[i]

    if (index < matrix4.length) {
      skMatrix[i] = matrix4[index]
    } else {
      skMatrix[i] = 0.0
    }
  }

  return skMatrix
}

export function toSkiaMatrixFromFloat64 (matrix4: Float64Array) {
  const skMatrix = new Float32Array(9)

  for (let i = 0; i < 9; i++) {
    const index = kMatrixIndexToMatrix4Index[i]

    if (index < matrix4.length) {
      skMatrix[i] = matrix4[index]
    } else {
      skMatrix[i] = 0.0
    }
  }

  return skMatrix
}

export function toSkiaPointFromOffset (offset: Offset) {
  const skPoint = new Float32Array([offset.dx, offset.dy])
  return skPoint
}

export function toSkiaFilterQuality (filterQuality: SkiaFilterQuality): CubicResampler | FilterOptions {
  if (filterQuality === SkiaFilterQuality.None) {
    return {
      filter: Skia.FilterMode.Nearest,
      mipmap: Skia.MipmapMode.None
    }
  } else if (filterQuality === SkiaFilterQuality.Low) {
    return {
      filter: Skia.FilterMode.Linear,
      mipmap: Skia.MipmapMode.None
    }
  } else if (filterQuality === SkiaFilterQuality.Medium) {
    return {
      filter: Skia.FilterMode.Linear,
      mipmap: Skia.MipmapMode.Linear
    }
  }  else {
    return {
      B: 1.0 / 3,
      C: 1.0 / 3
    }
  } 
}

export function toSkFilterMode (
  filterQuality: SkiaFilterQuality
) {
  return filterQuality === SkiaFilterQuality.None
      ? Skia.FilterMode.Nearest
      : Skia.FilterMode.Linear
}

export function toSkiaMipmapMode (filterQuality: SkiaFilterQuality) {
  return filterQuality === SkiaFilterQuality.Medium
      ? Skia.MipmapMode.Linear
      : Skia.MipmapMode.None
}

export function toSkiaColorStops (colorStops: number[] | null) {
  if (colorStops === null) {
    return kDefaultSkColorStops
  }

  const len = colorStops.length
  const skColorStops: number[] = []
  for (let i = 0; i < len; i++) {
    skColorStops[i] = colorStops[i]
  }
  return skColorStops
}

export function toSkiaPoint(offset: Offset) {
  const point = new Float32Array(2)
  point[0] = offset.dx
  point[1] = offset.dy
  return point
}

export function toMatrix32 (matrix64: Float64Array) {
  const matrix32: Float32Array  = new Float32Array (16)
  matrix32[15] = matrix64[15]
  matrix32[14] = matrix64[14]
  matrix32[13] = matrix64[13]
  matrix32[12] = matrix64[12]
  matrix32[11] = matrix64[11]
  matrix32[10] = matrix64[10]
  matrix32[9] = matrix64[9]
  matrix32[8] = matrix64[8]
  matrix32[7] = matrix64[7]
  matrix32[6] = matrix64[6]
  matrix32[5] = matrix64[5]
  matrix32[4] = matrix64[4]
  matrix32[3] = matrix64[3]
  matrix32[2] = matrix64[2]
  matrix32[1] = matrix64[1]
  matrix32[0] = matrix64[0]
  return matrix32
}

export function toFlatColors (colors: Color[]) {
  const len = colors.length
  const result = new Uint32Array(len)
  for (let i = 0; i < len; i++) {
    result[i] = colors[i].value
  }
  return result
}

export function matrix4IsValid (matrix4: Float32Array) {
  invariant(matrix4 !== null, 'Matrix4 argument was null.')
  invariant(matrix4.length === 16, 'Matrix4 must have 16 entries.')
  return true
}


export function offsetIsValid (offset: Offset) {
  invariant(offset !== null, 'Offset argument was null.')
  invariant(!isNaN(offset.dx) && !isNaN(offset.dy), 'Offset argument contained a NaN value.')
  return true
}