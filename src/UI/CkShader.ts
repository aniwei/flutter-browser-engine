import { ManagedSkiaObject, SkiaFilterQuality } from '@Skia'
import { Shader } from 'canvaskit-wasm'


export abstract class CkShader extends ManagedSkiaObject<Shader> {
  withQuality (contextualQuality: SkiaFilterQuality) {
    return this.skia
  }

  delete () {
    this.rawSkia?.delete();
  }
}