import { Offset, OffsetEngineLayer, Rect, RRect } from '@UI'
import { FillType } from 'canvaskit-wasm'

const _skMatrixIndexToMatrix4Index = [
  0, 4, 12, 
  1, 5, 13,
  3, 7, 15,
]

const _kDefaultSkColorStops = [
  0, 1
]

const _skFillTypes = [
  // TODO
  0
]

export function toSkFillType (fillType) {
  return _skFillTypes[fillType.index]
}

export function toSkM44FromFloat32 (matrix: number[]): number[] {
  const skMM44: number[] = []
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      skMM44[c * 4 + r] = matrix[r * 4 + c]
    }
  }

  return skMM44
}

export function toSkMatrixFromFloat32 (matrix: number[]) {
  const skMatrix: number[] = []
  for (let i = 0; i < 9; ++i) {
    const matrix4Index = _skMatrixIndexToMatrix4Index[i]
    if (matrix4Index < matrix.length) {
      skMatrix[i] = matrix[matrix4Index]
    } else {
      skMatrix[i] = 0.0
    }
  }
  return skMatrix;
}

export function toSkMatrixFromFloat64 (matrix: number[]) {
  const skMatrix: number[] =[]
  for (let i = 0; i < 9; ++i) {
    const matrix4Index = _skMatrixIndexToMatrix4Index[i]
    if (matrix4Index < matrix.length) {
      skMatrix[i] = matrix[matrix4Index]
    } else {
      skMatrix[i] = 0.0
    }
  }
  return skMatrix
}

export function toSkPoint(offset: Offset) {
  const point: number[] = []
  point[0] = offset.dx
  point[1] = offset.dy
  return point
}

export function toSkColorStops (colorStops?: number[]) {
  if (typeof colorStops === 'undefined') {
    return _kDefaultSkColorStops
  }

  const len = colorStops.length
  const skColorStops: number[] = []

  for (let i = 0; i < len; i++) {
    skColorStops[i] = colorStops[i]
  }

  return skColorStops
}

export function toSkRect (rect: Rect): number[] {
  const skRect: number[] = []

  skRect[0] = rect.left
  skRect[1] = rect.top
  skRect[2] = rect.right
  skRect[3] = rect.bottom

  return skRect
}

export function fromSkRect (skRect: number[]): Rect {
  return Rect.fromLTRB(skRect[0], skRect[1], skRect[2], skRect[3])
}

export function toSkRRect (rrect: RRect): number[] {
  const skRRect: number[] = []
  skRRect[0] = rrect.left; 
  skRRect[1] = rrect.top
  skRRect[2] = rrect.right
  skRRect[3] = rrect.bottom
  skRRect[4] = rrect.tlRadiusX
  skRRect[5] = rrect.tlRadiusY
  skRRect[6] = rrect.trRadiusX
  skRRect[7] = rrect.trRadiusY
  skRRect[8] = rrect.brRadiusX
  skRRect[9] = rrect.brRadiusY
  skRRect[10] = rrect.blRadiusX
  skRRect[11] = rrect.blRadiusY
  return skRRect;
}

export function toOuterSkRect (rrect: RRect): number[] {
  const skRect: number[] = []
  skRect[0] = rrect.left
  skRect[1] = rrect.top
  skRect[2] = rrect.right
  skRect[3] = rrect.bottom
  return skRect
}


export enum SkTextAlignEnum {
  Left,
  Right,
  Center,
  Justify,
  Start,
  End
}

