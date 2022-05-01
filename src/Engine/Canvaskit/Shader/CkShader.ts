import { FilterQuality } from '@UI'
import { ManagedSkiaObject } from 'src/Engine/Canvasj'
import type { SkShader } from 'src/Engine/Canvasj/CanvasKitAPI/Skia'

export abstract class CkShader extends ManagedSkiaObject<SkShader> {
  withQuality (contextualQuality: FilterQuality) {
    return this.skiaObject
  }

  delete (): void {
    this.rawSkiaObject?.delete();
  }
}


