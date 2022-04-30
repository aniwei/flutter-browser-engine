import { FilterQuality } from '@UI'
import { ManagedSkiaObject } from '../../ManagedSkiaObject'
import { SkShader } from '../Skia'

export abstract class CkShader extends ManagedSkiaObject<SkShader> {
  withQuality (contextualQuality: FilterQuality) {
    return this.skiaObject
  }

  delete (): void {
    this.rawSkiaObject?.delete();
  }
}


