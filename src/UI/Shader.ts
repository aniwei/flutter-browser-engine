import { ManagedSkiaObject, SkiaFilterQuality, SkiaShader } from '@Skia'


export abstract class Shader extends ManagedSkiaObject<SkiaShader> {
  withQuality (contextualQuality: SkiaFilterQuality) {
    return this.skia
  }

  delete () {
    this.rawSkia?.delete();
  }
}