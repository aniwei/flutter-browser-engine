/*
 * @Author: Aniwei
 * @Date: 2022-08-16 17:20:55
 */
import { Skia } from '@skia/binding'
import { FilterQuality } from '@skia'
import type { Offset } from '@internal/Geometry'

// 矩阵对应索引
const kMatrixIndexToMatrix4Index = [
  0, 4, 12, // Row 1
  1, 5, 13, // Row 2
  3, 7, 15, // Row 3
]

export function toSkiaFilterQuality (filterQuality: FilterQuality) {
   if (filterQuality === FilterQuality.None) {
    return {
      filter: Skia.binding.FilterMode.Nearest,
      mipmap: Skia.binding.MipmapMode.None
    }
  } else if (filterQuality === FilterQuality.Low) {
    return {
      filter: Skia.binding.FilterMode.Linear,
      mipmap: Skia.binding.MipmapMode.None
    }
  } else if (filterQuality === FilterQuality.Medium) {
    return {
      filter: Skia.binding.FilterMode.Linear,
      mipmap: Skia.binding.MipmapMode.Linear
    }
  } else if (filterQuality === FilterQuality.High) {
    return {
      B: 1.0 / 3,
      C: 1.0 / 3
    }
  } 
}

export function toMallocedSkiaPoints (points: Offset[]) {
  const sk = Skia.Malloc(Float32Array, points.length * 2)
  
  const list = sk.toTypedArray()
  for (let i = 0; i < points.length; i++) {
    list[2 * i] = points[i].dx
    list[2 * i + 1] = points[i].dy
  }

  return sk
}

export function toSkiaMatrix (matrix4: Float64Array) {
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