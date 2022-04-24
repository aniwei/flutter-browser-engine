export class EngineLayer {
  dispose (): void {}
}

export abstract class TransformEngineLayer extends EngineLayer {}

export abstract class OffsetEngineLayer extends EngineLayer {}

export abstract class ClipRectEngineLayer extends EngineLayer {}

export abstract class ClipRRectEngineLayer extends EngineLayer {}

export abstract class ClipPathEngineLayer extends EngineLayer {}

export abstract class OpacityEngineLayer extends EngineLayer {}

export abstract class ColorFilterEngineLayer extends EngineLayer {}

export abstract class ImageFilterEngineLayer extends EngineLayer {}

export abstract class BackdropFilterEngineLayer extends EngineLayer {}

export abstract class ShaderMaskEngineLayer extends EngineLayer {}

export abstract class PhysicalShapeEngineLayer extends EngineLayer {}