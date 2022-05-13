import { Color, Offset } from '@UI'
import { Skia } from '@Skia'
import { MallocObj } from 'canvaskit-wasm'
import { SkiaFilterQuality } from './Skia'

const kMatrixIndexToMatrix4Index = [
  0, 4, 12, // Row 1
  1, 5, 13, // Row 2
  3, 7, 15, // Row 3
]

let kSkiaSharedColor: MallocObj | null = null

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

export function toSkiaSharedColor (color: Color) {
  kSkiaSharedColor = kSkiaSharedColor || Skia.Malloc(Float32Array, 4)
  const data = kSkiaSharedColor.toTypedArray()

  data[0] = color.red / 255.0
  data[1] = color.green / 255.0
  data[2] = color.blue / 255.0
  data[3] = color.alpha / 255.0

  return data
}