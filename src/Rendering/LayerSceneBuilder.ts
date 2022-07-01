import { invariant } from 'ts-invariant'
import { Matrix4 } from '@math/Matrix4'
import { UnimplementedError } from '@internal/UnimplementedError'
import { Offset, Rect, RRect } from '@internal/Geometry'
import { Skia, SkiaBlendMode, SkiaFilterQuality } from '@skia/Skia'
import { Path } from './Path'
import { Image } from './Image'
import { Picture } from './Picture'
import { Shader } from './Shader'
import { Color, Clip } from './Painting'
import { ColorFilter } from './ColorFilter'
import { LayerTree } from './LayerTree'
import { ImageFilter } from './ImageFilter'
import { BackdropFilterEngineLayer, ClipPathEngineLayer, ClipRectEngineLayer, ClipRRectEngineLayer, ColorFilterEngineLayer, ContainerLayer, EngineLayer, ImageFilterEngineLayer, Layer, OffsetEngineLayer, OpacityEngineLayer, PhysicalShapeEngineLayer, PictureLayer, RootLayer, ShaderMaskEngineLayer, TransformEngineLayer, } from './Layer'


export class LayerScene {
  public layerTree: LayerTree

  constructor (rootLayer: RootLayer) {
    this.layerTree = new LayerTree(rootLayer)
  }

  toImage (
    width: number, 
    height: number
  ): Image {
    const picture = this.layerTree.flatten()
    return picture.toImage(width, height)
  }

  dispose () {}
}

export class LayerSceneBuilder {
  public rootLayer: RootLayer
  public currentLayer!: ContainerLayer

  constructor () {
    this.rootLayer = new RootLayer()
    this.currentLayer = this.rootLayer
  }


  addPerformanceOverlay (
    enabledOptions: number, 
    bounds: Rect
  ) {
    throw new UnimplementedError()
  }

  addPicture (
    offset: Offset,
    picture: Picture, 
    isComplexHnumber: boolean = false,
    willChangeHnumber: boolean = false,
  ) {
    this.currentLayer.add(
      new PictureLayer(
        picture as Picture, 
        offset, 
        isComplexHnumber,
        willChangeHnumber
      )
    )
  }
  
  addRetained (retainedLayer: EngineLayer) {
    this.currentLayer.add(retainedLayer as Layer)
  }

  addTexture (
    textureId: number,
    offset: Offset = Offset.zero,
    width: number = 0.0,
    height: number = 0.0,
    freeze: boolean = false,
    filterQuality: SkiaFilterQuality = SkiaFilterQuality.Low,
  ) {
    // TODO(hterkelsen): implement addTexture, b/128315641
  }

  build (): LayerScene {
    return new LayerScene(this.rootLayer)
  }

  pop () {
    if (this.currentLayer === this.rootLayer) {
      return
    }

    this.currentLayer = this.currentLayer.parent as ContainerLayer
  }

  
  pushBackdropFilter (
    filter: ImageFilter,
    blendMode: SkiaBlendMode = Skia.BlendMode.SrcOver,
    oldLayer?: EngineLayer | null,
  ): BackdropFilterEngineLayer {
    return this.pushLayer<BackdropFilterEngineLayer>(
      new BackdropFilterEngineLayer(
        filter,
        blendMode,
      )
    )
  }

  
  pushClipPath(
    path: Path,
    clipBehavior: Clip = Clip.AntiAlias,
    oldLayer?: EngineLayer | null,
  ): ClipPathEngineLayer {
    return this.pushLayer<ClipPathEngineLayer>(
      new ClipPathEngineLayer(path as Path, clipBehavior)
    )
  }

  
  pushClipRRect (
    rrect: RRect,
    clipBehavior: Clip,
    oldLayer?: EngineLayer | null,
  ): ClipRRectEngineLayer  {
    return this.pushLayer<ClipRRectEngineLayer>(
      new ClipRRectEngineLayer(rrect, clipBehavior)
    )
  }

  
  pushClipRect (
    rect: Rect ,
    clipBehavior: Clip = Clip.AntiAlias,
    oldLayer?: EngineLayer | null,
  ): ClipRectEngineLayer {
    return this.pushLayer<ClipRectEngineLayer>(
      new ClipRectEngineLayer(rect, clipBehavior)
    )
  }

  
  pushColorFilter (
    filter: ColorFilter,
    oldLayer?: ColorFilterEngineLayer | null,
  ): ColorFilterEngineLayer {
    invariant(filter !== null)
    return this.pushLayer<ColorFilterEngineLayer>(
      new ColorFilterEngineLayer(filter)
    )
  }

  
  pushImageFilter (
    filter: ImageFilter,
    oldLayer?: ImageFilterEngineLayer | null,
  ): ImageFilterEngineLayer  {
    invariant(filter !== null)
    return this.pushLayer<ImageFilterEngineLayer>(
      new ImageFilterEngineLayer(filter)
    )
  }

  
  pushOffset (
    dx: number,
    dy: number, 
    oldLayer?: EngineLayer | null,
  ): OffsetEngineLayer {
    return this.pushLayer<OffsetEngineLayer>(
      new OffsetEngineLayer(dx, dy)
    )
  }

  
  pushOpacity (
    alpha: number,
    offset: Offset = Offset.zero,
    oldLayer?: EngineLayer | null,
  ): OpacityEngineLayer  {
    return this.pushLayer<OpacityEngineLayer>(new OpacityEngineLayer(alpha, offset))
  }

  pushPhysicalShape (
    path: Path ,
    elevation: number,
    color: Color,
    shadowColor: Color,
    clipBehavior: Clip  = Clip.None,
    oldLayer?: EngineLayer | null,
  ): PhysicalShapeEngineLayer {
    return this.pushLayer<PhysicalShapeEngineLayer>(
      new PhysicalShapeEngineLayer(
        elevation,
        color,
        shadowColor,
        path as Path,
        clipBehavior,
      )
    )
  }

  
  pushShaderMask (
    shader: Shader,
    maskRect: Rect,
    blendMode: SkiaBlendMode,
    oldLayer?: EngineLayer | null,
    filterQuality: SkiaFilterQuality = SkiaFilterQuality.Low,
  ): ShaderMaskEngineLayer {
    return this.pushLayer<ShaderMaskEngineLayer>(
      new ShaderMaskEngineLayer(shader, maskRect, blendMode, filterQuality)
    )
  }

  pushTransform (
    matrix4: Float64Array,
    oldLayer?: EngineLayer | null,
  ): TransformEngineLayer  {
    const matrix = Matrix4.fromFloat64Array(matrix4)
    return this.pushLayer<TransformEngineLayer>(
      new TransformEngineLayer(matrix)
    )
  }

  
  setCheckerboardOffscreenLayers (checkerboard: boolean) {
    // TODO(hterkelsen): implement setCheckerboardOffscreenLayers
  }

  
  setCheckerboardRasterCacheImages (checkerboard: boolean) {
    // TODO(hterkelsen): implement setCheckerboardRasterCacheImages
  }

  
  setRasterizerTracingThreshold (frameInterval: number) {
    // TODO(hterkelsen): implement setRasterizerTracingThreshold
  }

  pushLayer<T extends ContainerLayer>(layer: T): T  {
    this.currentLayer.add(layer)
    this.currentLayer = layer
    return layer
  }
  
  setProperties (
    width: number,
    height: number,
    insetTop: number,
    insetRight: number,
    insetBottom: number,
    insetLeft: number,
    focusable: boolean,
  ) {
    throw new UnimplementedError()
  }
}
