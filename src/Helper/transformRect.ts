import { Matrix4 } from '@math/Matrix4'
import { Rect } from '@internal/Geometry'
import { transformLTRB } from './transformLTRB'


export function transformRect (
  transform: Matrix4, 
  rect: Rect
): Rect {
  const data = new Float32Array([
    rect.left,
    rect.top,
    rect.right,
    rect.bottom
  ])

  transformLTRB(transform, data)
  return Rect.fromLTRB(
    data[0],
    data[1],
    data[2],
    data[3],
  );
}