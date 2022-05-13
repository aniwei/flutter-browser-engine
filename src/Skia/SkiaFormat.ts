import { Color, Offset } from '@UI'
import { Skia } from '@Skia'
import { SkiaFilterQuality } from './Skia'

const SkiaMatrixIndexToMatrix4Index = [
  0, 4, 12, // Row 1
  1, 5, 13, // Row 2
  3, 7, 15, // Row 3
]

export function toSkiaMatrixFromFloat32 (matrix4: Float32Array) {
  const skMatrix = new Float32Array(9)

  for (let i = 0; i < 9; i++) {
    const index = SkiaMatrixIndexToMatrix4Index[i]

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
    const index = SkiaMatrixIndexToMatrix4Index[i]

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

export function toSkiaFilterQuality (filterQuality: SkiaFilterQuality) {
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
  }  else if (filterQuality === SkiaFilterQuality.High) {
    return {
      B: 1.0 / 3,
      C: 1.0 / 3
    }
  } 
}

export function toSkiaColor (color: Color) {
  return color.value
}