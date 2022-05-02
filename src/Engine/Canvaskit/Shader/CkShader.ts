import { FilterQuality } from '@UI'
import { ManagedSkiaObject } from '../SkiaObjectCache'
import type { SkShader } from '../CanvasKitAPI'

export abstract class CkShader extends ManagedSkiaObject<SkShader> {
  withQuality (contextualQuality: FilterQuality) {
    return this.skiaObject
  }

  delete (): void {
    this.rawSkiaObject?.delete();
  }
}


