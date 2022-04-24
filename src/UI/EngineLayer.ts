export class EngineLayer {
  dispose (): void {}
}

export class TransformEngineLayer extends EngineLayer {}
export class OffsetEngineLayer extends EngineLayer {}
export class ClipRectEngineLayer extends EngineLayer {}
export class ClipRRectEngineLayer extends EngineLayer {}
export class ClipPathEngineLayer extends EngineLayer {}
export class OpacityEngineLayer extends EngineLayer {}
export class ColorFilterEngineLayer extends EngineLayer {}
export class ImageFilterEngineLayer extends EngineLayer {}
export class BackdropFilterEngineLayer extends EngineLayer {}
export class ShaderMaskEngineLayer extends EngineLayer {}
export class PhysicalShapeEngineLayer extends EngineLayer {}