/*
 * @Author: Aniwei
 * @Date: 2022-08-16 17:20:55
 */
import { Skia } from '@skia/binding'
import { FilterQuality } from '@skia'
import type { Offset } from '@internal/Geometry'
import type { Color } from '@internal/Color'

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
  const sk = Skia.binding.Malloc(Float32Array, points.length * 2)
  
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

export function toSkiaPoint(offset: Offset) {
  const point = new Float32Array(2)
  point[0] = offset.dx
  point[1] = offset.dy

  return point
}

export function toFlatColors (colors: Color[]) {
  const len = colors.length
  const result = new Uint32Array(len)
  for (let i = 0; i < len; i++) {
    result[i] = colors[i].value
  }
  return result
}


const kDefaultSkColorStops = [0, 1]

/**
 * @description: 
 * @param {number} colorStops
 * @return {*}
 */
export function toSkiaColorStops (colorStops: number[] | null) {
  if (colorStops === null) {
    return kDefaultSkColorStops
  }

  const len = colorStops.length
  const sk: number[] = []
  for (let i = 0; i < len; i++) {
    sk[i] = colorStops[i]
  }
  return sk
}

export function toSkiaFilterMode (filterQuality: FilterQuality) {
  return filterQuality === FilterQuality.None
      ? Skia.binding.FilterMode.Nearest
      : Skia.binding.FilterMode.Linear
}

export function toSkiaMipmapMode (filterQuality: FilterQuality) {
  return filterQuality === FilterQuality.Medium
      ? Skia.binding.MipmapMode.Linear
      : Skia.binding.MipmapMode.None
}

export function makeFreshSkiaColor (color: Color): Float32Array {
  const result = new Float32Array(4)
  result[0] = color.red / 255.0
  result[1] = color.green / 255.0
  result[2] = color.blue / 255.0
  result[3] = color.alpha / 255.0
  return result
}

/**
 * @description: 
 * @param {Float64Array} matrix64
 * @return {*}
 */
export function toMatrix32 (matrix64: Float64Array) {
  const matrix32: Float32Array  = new Float32Array(16)
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

/**
 * @description: 
 * @param {Offset} points
 * @return {*}
 */
export function toFlatSkiaPoints (points: Offset[]) {
  const length = points.length
  const result = new Float32Array(length * 2)
  for (let i = 0; i < length; i++) {
    result[2 * i] = points[i].dx
    result[2 * i + 1] = points[i].dy
  }
  return result
}

/**
 * @description: 
 * @param {number} ints
 * @return {*}
 */
export function toUint16Array (ints: number[]) {
  const length = ints.length
  const result = new Uint16Array(length)
  for (let i = 0; i < length; i++) {
    result[i] = ints[i]
  }
  return result
}