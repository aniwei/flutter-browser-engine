import { Rect, RRect } from '@UI'
import { PictureRecorder } from 'canvaskit-wasm'

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

export class SkPictureRecorder {
  
}