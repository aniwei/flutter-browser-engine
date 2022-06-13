import { Matrix4 } from '@math'

export function transformLTRB (
  transform: Matrix4, 
  ltrb: Float32Array
) {
  const point = new Float32Array(16)
  // Row 0: top-left
  point[0] = ltrb[0]
  point[4] = ltrb[1]
  point[8] = 0
  point[12] = 1

  // Row 1: top-right
  point[1] = ltrb[2]
  point[5] = ltrb[1]
  point[9] = 0
  point[13] = 1

  // Row 2: bottom-left
  point[2] = ltrb[0]
  point[6] = ltrb[3]
  point[10] = 0
  point[14] = 1

  // Row 3: bottom-right
  point[3] = ltrb[2]
  point[7] = ltrb[3]
  point[11] = 0
  point[15] = 1

  const mat = Matrix4.fromFloat32Array(point)
  mat.multiplyTranspose(transform)

  let w = transform[15]
  if (w === 0.0) {
    w = 1.0
  }

  ltrb[0] = Math.min(
    Math.min(Math.min(point[0], point[1]), point[2]),
    point[3]
  ) / w
  ltrb[1] = Math.min(
    Math.min(Math.min(point[4], point[5]), point[6]),
    point[7]
  ) / w
  ltrb[2] = Math.max(
    Math.max(Math.max(point[0], point[1]), point[2]),
    point[3]
  ) / w
  ltrb[3] = Math.max(
    Math.max(Math.max(point[4], point[5]), point[6]),
    point[7]
  ) / w
}