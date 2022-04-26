import { Rect } from '@UI'
import type { double } from '@Types'

export function transformRect (transform: Matrix4, rect: Rect): Rect {
  const tempRectData: Float32List = []
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

export function transformLTRB (transform: Matrix4, ltrb: Float32List) {
  // Construct a matrix where each row represents a vector pointing at
  // one of the four corners of the (left, top, right, bottom) rectangle.
  // Using the row-major order allows us to multiply the matrix in-place
  // by the transposed current transformation matrix. The vector_math
  // library has a convenience function `multiplyTranspose` that performs
  // the multiplication without copying. This way we compute the positions
  // of all four points in a single matrix-by-matrix multiplication at the
  // cost of one `Matrix4` instance and one `Float32List` instance.
  //
  // The rejected alternative was to use `Vector3` for each point and
  // multiply by the current transform. However, that would cost us four
  // `Vector3` instances, four `Float32List` instances, and four
  // matrix-by-vector multiplications.
  //
  // `Float32List` initializes the array with zeros, so we do not have to
  // fill in every single element.

  // Row 0: top-left
  const tempPointData: Float32List = []
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

  const tempPointMatrix = []
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
