import { UnimplementedError } from '@Shared'
import { Clip, Color, EngineLayer, FilterQuality, ISceneBuilder, Offset, OffsetEngineLayer, OpacityEngineLayer, Path, Rect, Scene, Shader } from '@UI'
import { BackdropFilterEngineLayer, ImageFilterEngineLayer, OffsetEngineLayer, OpacityEngineLayer, PhysicalShapeEngineLayer, ShaderMaskEngineLayer, TransformEngineLayer } from '../Layer'
import { ContainerLayer } from './ContainerLayer'
import { RootLayer } from './RootLayer'
import { LayerScene } from './LayerScene'

import type { bool, double, Float64List, int } from '@Types'
import { ImageFilter } from 'src/UI/Painting/ImageFilter'

export class LayerSceneBuilder implements ISceneBuilder {
  public rootLayer: RootLayer
  public currentLayer: ContainerLayer

  constructor (rootLayer: RootLayer = new RootLayer()) {
    this.rootLayer = rootLayer
    this.currentLayer = rootLayer
  }

  addPerformanceOverlay (
    enabledOptions: number,
    bounds: Rect
  ) {
    throw new UnimplementedError()
  }

  addPicture (
    offset: Offset,
    isComplexHint = false,
    willChangeHint = false
  ) {
    const layer = new PictureLayer(picture, offset, isComplexHint, willChangeHint)
    this.currentLayer.add(layer)
  }


  addRetained (retainedLayer: EngineLayer): void {
    this.currentLayer.add(retainedLayer)
  }

  addTexture (
    textureId: double, 
    offset: Offset = Offset.zero, 
    width: double = 0.0,
    height: double = 0.0, 
    freeze: bool = false, 
    filterQuality: FilterQuality = FilterQuality.low
  ) {
    // TODO
  }

  addPlatformView (
    viewId: double, 
    offset: Offset, 
    width: double, 
    height: double
  ) {
    this.currentLayer.add(PlatformViewLayer(viewId, offset, width ,height))
  }

  build (): Scene {
    return new LayerScene(this.rootLayer)
  }

  pop (): void {
    if (this.currentLayer === this.rootLayer) {
      return
    }

    this.currentLayer = this.currentLayer.parent
  }

  pushBackdropFilter (
    filter: any, 
    blendMode: any, 
    oldLayer: BackdropFilterEngineLayer | null
  ): BackdropFilterEngineLayer {
    return this.pushLayer<BackdropFilterEngineLayer>()
  }

  pushImageFilter(
    filter: ImageFilter, 
    oldLayer: ImageFilterEngineLayer | null
  ): ImageFilterEngineLayer {
    return this.pushLayer<ImageFilterEngineLayer>()  
  }

  pushOffset(
    dx: double, 
    dy: double, 
    oldLayer: OffsetEngineLayer | null
  ): OffsetEngineLayer {
    return this.pushLayer<OffsetEngineLayer>()  
  }

  pushOpacity(
    alpha: double, 
    offset: Offset, 
    oldLayer: OpacityEngineLayer | null
  ): OpacityEngineLayer {
    return this.pushLayer<OpacityEngineLayer>()
  }

  pushPhysicalShape(
    path: Path, 
    elevation: double, 
    color: Color, 
    shadowColor: Color | null, 
    clipBehavior: Clip, 
    oldLayer: PhysicalShapeEngineLayer | null
  ): PhysicalShapeEngineLayer {
    return this.pushLayer<PhysicalShapeEngineLayer>()  
  }

  pushShaderMask(
    shader: Shader, 
    maskRect: Rect, 
    oldLayer: ShaderMaskEngineLayer | null, 
    filterQuality: FilterQuality
  ): ShaderMaskEngineLayer {
    return this.pushLayer<ShaderMaskEngineLayer>()  
  }

  pushTransform(
    matrix4: Float64List, 
    oldLayer: TransformEngineLayer | null
  ): TransformEngineLayer {
    // TODO
    const matrix = Matrix4.fromFloat32List(toMatrix32(matrix4));
    return this.pushLayer<TransformEngineLayer>(new TransformEngineLayer(matrix))
  }

  setCheckerboardOffscreenLayers (checkerboard: bool) {
    // TODO
  }

  setCheckerboardRasterCacheImages (checkerboard: bool) {
    // TODO
  }

  setRasterizerTracingThreshold (frameInterval: int) {
    // TODO
  } 

  pushLayer <T extends ContainerLayer>(layer: T) {
    this.currentLayer.add(layer)
    this.currentLayer = layer
    return layer
  }

  setProperties (
    width: double, 
    height: double, 
    insetTop: double, 
    insetRight: double, 
    insetBottom: double, 
    insetLeft: double, 
    focusable: bool
  ) {
    throw new UnimplementedError()
  }
}