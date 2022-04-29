import { Float32List } from '@Types'
import { CanvasKit } from './CanvasKit'



import type { BlendMode, Color, Rect, RRect, ClipOp, StrokeCap, StrokeJoin, PaintingStyle } from '@UI'
import type { int } from '@Types'
import type { MallocObj } from 'canvaskit-wasm'
import type { SkFloat32List } from './Skia'



export class CanvasKitAPI {
  static async CanvasKitAPIInit (uri: string) {
    await CanvasKit.CanvasKitInit(uri)

    CanvasKitAPI.sharedSkColor1 = this.mallocFloat32List(4)
  }

  static mallocFloat32List (size: int): SkFloat32List {
    return CanvasKit.Malloc(Float32Array, size)
  }

  static freeFloat32List (m: MallocObj) {
    CanvasKit.Free(m)
  }

  static populateSkColor (skColor: SkFloat32List, color: Color) {
    const array: Float32List = skColor.toTypedArray() as Float32List
    array[0] = color.red / 255.0
    array[1] = color.green / 255.0
    array[2] = color.blue / 255.0
    array[3] = color.alpha / 255.0
    
    return array as Float32List
  }

  static toSharedSkColor1 (color: Color) {
    return this.populateSkColor(CanvasKitAPI.sharedSkColor1, color);
  }

  static toSkRect (rect: Rect) {
    const skRect: Float32List = new Float32List()
    skRect[0] = rect.left
    skRect[1] = rect.top
    skRect[2] = rect.right
    skRect[3] = rect.bottom

    return skRect
  }

  static toSkRRect (rrect: RRect) {
    const skRRect: Float32List = new Float32List(12)
    skRRect[0] = rrect.left
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
    return skRRect
  }

  static toSkClipOp (clipOp: ClipOp) {
    return CanvasKit.ClipOp[clipOp]
  }

  static toSkM44FromFloat32 (matrix4: Float32List) {
    const skM44: Float32List = new Float32List(16)

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        skM44[c * 4 + r] = matrix4[r * 4 + c]
      }
    }

    return skM44
  }

  static toSkBlendMode (blendMode: BlendMode) {
    return CanvasKit.BlendMode[blendMode]
  }

  static toSkPaintStyle (paintStyle: PaintingStyle) {
    return CanvasKit.PaintStyle[paintStyle]
  }

  static toSkStrokeCap (strokeCap: StrokeCap) {
    return CanvasKit.StrokeCap[strokeCap]
  }

  static toSkStrokeJoin (strokeJoin: StrokeJoin) {
    return CanvasKit.StrokeJoin[strokeJoin]
  }
} 

export const toSkRect = CanvasKitAPI.toSkRect
export const toSkRRect = CanvasKitAPI.toSkRRect
export const toSkBlendMode = CanvasKitAPI.toSkBlendMode
export const toSkPaintStyle = CanvasKitAPI.toSkPaintStyle

export * from './Skia'
export * from './CanvasKit'