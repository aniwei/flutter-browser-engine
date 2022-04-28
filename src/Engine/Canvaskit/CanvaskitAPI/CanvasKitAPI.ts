import { Float32List } from '@Types'
import { CanvasKit } from './CanvasKit'

import type { Color, Rect } from '@UI'
import type { int } from '@Types'
import type { InputColor, MallocObj } from 'canvaskit-wasm'


import type { SkFloat32List } from './Skia'

export class CanvasKitAPI {
  static get sharedSkColor1 () {
    return CanvasKit.Malloc(Float32Array, 4)
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
} 

export * from './Skia'
export * from './CanvasKit'