import { Rect } from '@UI'
import { double, Float32List } from '@Types'
import { Matrix4 } from '../VectorMath'

export function listEquals <T>(listA: T[], listB: T[]) {
  if (listA === null) {
    return listB === null
  }

  if (listB === null || listA.length !== listB.length) {
    return false
  }

  for (let index = 0; index < listA.length; index += 1) {
    if (listA[index] !== listB[index]) {
      return false
    }
  }

  return true
}


const tempRectData = new Float32List(4)
export function transformRect (transform: Matrix4, rect: Rect): Rect {
  tempRectData[0] = rect.left;
  tempRectData[1] = rect.top;
  tempRectData[2] = rect.right;
  tempRectData[3] = rect.bottom;
  
  transformLTRB(transform, tempRectData)

  return Rect.fromLTRB(
    tempRectData[0],
    tempRectData[1],
    tempRectData[2],
    tempRectData[3],
  );
}

const tempPointData = new Float32List(16)
const tempPointMatrix = Matrix4.fromFloat32List(tempPointData)

export function transformLTRB (transform: Matrix4, ltrb: Float32List) {
  tempPointData[0] = ltrb[0]
  tempPointData[4] = ltrb[1]
  tempPointData[8] = 0
  tempPointData[12] = 1

  // Row 1: top-right
  tempPointData[1] = ltrb[2]
  tempPointData[5] = ltrb[1]
  tempPointData[9] = 0
  tempPointData[13] = 1

  // Row 2: bottom-left
  tempPointData[2] = ltrb[0]
  tempPointData[6] = ltrb[3]
  tempPointData[10] = 0
  tempPointData[14] = 1

  // Row 3: bottom-right
  tempPointData[3] = ltrb[2]
  tempPointData[7] = ltrb[3]
  tempPointData[11] = 0
  tempPointData[15] = 1

  tempPointMatrix.multiplyTranspose(transform)

  // Handle non-homogenous matrices.
  let w: double = transform[15]
  if (w === 0.0) {
    w = 1.0
  }

  ltrb[0] = Math.min(Math.min(Math.min(tempPointData[0], tempPointData[1]), tempPointData[2]), tempPointData[3]) / w
  ltrb[1] = Math.min(Math.min(Math.min(tempPointData[4], tempPointData[5]), tempPointData[6]), tempPointData[7]) / w
  ltrb[2] = Math.max(Math.max(Math.max(tempPointData[0], tempPointData[1]), tempPointData[2]), tempPointData[3]) / w
  ltrb[3] = Math.max(Math.max(Math.max(tempPointData[4], tempPointData[5]), tempPointData[6]), tempPointData[7]) / w
}
