import { LayerSceneBuilder } from '@Engine'

import type {
  BackdropFilterEngineLayer,
  ClipPathEngineLayer,
  ClipRectEngineLayer,
  ClipRRectEngineLayer,
  ColorFilterEngineLayer,
  EngineLayer,
  ImageFilterEngineLayer,
  OffsetEngineLayer,
  OpacityEngineLayer,
  PhysicalShapeEngineLayer,
  ShaderMaskEngineLayer,
  TransformEngineLayer
} from './EngineLayer'
import type { BlendMode, Clip, Color, ColorFilter, FilterQuality, ImageFilter, Shader } from '../Painting'
import type { Offset, Rect, RRect } from '../Geometry'
import type { Path } from '../Path'
import type { Float64List } from '@Types'
import type { Picture } from '../Canvas'

export interface IScene {
  toImage (width: number, height: number)
  dispose (): void
}

export abstract class Scene implements IScene {
  abstract toImage (width: number, height:  number)
  abstract dispose (): void 
}

export interface ISceneBuilder {
  pushOffset (
    dx: number,
    dy: number, 
    oldLayer: OffsetEngineLayer | null,
  ): OffsetEngineLayer

  pushTransform (
    matrix: Float64List,
    oldLayer: TransformEngineLayer | null
  ): TransformEngineLayer

  pushClipRect (
    rect: Rect,
    clipBehavior: Clip,
    oldLayer: ClipRectEngineLayer | null,
  ): ClipRectEngineLayer

  pushClipRRect (
    rrect: RRect,
    clipBehavior: Clip,
    oldLayer: ClipRRectEngineLayer | null
  ): ClipRRectEngineLayer

  pushClipPath (
    path: Path,
    clipBehavior: Clip,
    oldLayer: ClipPathEngineLayer | null
  ): ClipPathEngineLayer

  pushOpacity (
    alpha: number,
    offset: Offset,
    oldLayer: OpacityEngineLayer | null
  ): OpacityEngineLayer

  pushColorFilter (
    filter: ColorFilter,
    oldLayer: ColorFilterEngineLayer | null
  ): ColorFilterEngineLayer

  pushImageFilter (
    filter: ImageFilter,
    oldLayer: ImageFilterEngineLayer | null
  ): ImageFilterEngineLayer

  pushBackdropFilter (
    filter: ImageFilter,
    blendMode: BlendMode,
    oldLayer: BackdropFilterEngineLayer | null
  ): BackdropFilterEngineLayer

  pushShaderMask (
    shader: Shader,
    maskRect: Rect,
    oldLayer: ShaderMaskEngineLayer | null,
    filterQuality: FilterQuality
  ): ShaderMaskEngineLayer

  pushPhysicalShape (
    path: Path,
    elevation: number,
    color: Color,
    shadowColor: Color | null,
    clipBehavior: Clip,
    oldLayer: PhysicalShapeEngineLayer | null
  ): PhysicalShapeEngineLayer

  addRetained (retainedLayer: EngineLayer): void
  pop (): void

  addPerformanceOverlay (
    enabledOptions: number,
    bounds: Rect
  )

  addPicture (
    offset: Offset,
    picture: Picture,
    isComplexHnumber: boolean,
    willChangeHnumber: boolean
  )

  addTexture (
    textureId: number,
    offset: Offset,
    width: number,
    height: number,
    freeze: boolean,
    filterQuality: FilterQuality
  )

  addPlatformView (
    viewId: number,
    offset: Offset,
    width: number,
    height: number
  )

  setRasterizerTracingThreshold (frameInterval: number)
  setCheckerboardRasterCacheImages (checkerboard: boolean)
  setCheckerboardOffscreenLayers (checkerboard: boolean)
  build (): Scene
  setProperties (
    width: number,
    height: number,
    insetTop: number,
    insetRight: number,
    insetBottom: number,
    insetLeft: number,
    focusable: boolean  
  )
}

// TODO
export abstract class SceneBuilder implements ISceneBuilder {
  static factory () {
    return new LayerSceneBuilder()
  }

  abstract pushOffset (
    dx: number,
    dy: number, 
    oldLayer: OffsetEngineLayer | null,
  ): OffsetEngineLayer

  abstract pushTransform (
    matrix: Float64List,
    oldLayer: TransformEngineLayer | null
  ): TransformEngineLayer

  abstract pushClipRect (
    rect: Rect,
    clipBehavior: Clip,
    oldLayer: ClipRectEngineLayer | null,
  ): ClipRectEngineLayer

  abstract pushClipRRect (
    rrect: RRect,
    clipBehavior: Clip,
    oldLayer: ClipRRectEngineLayer | null
  ): ClipRRectEngineLayer

  abstract pushClipPath (
    path: Path,
    clipBehavior: Clip,
    oldLayer: ClipPathEngineLayer | null
  ): ClipPathEngineLayer

  abstract pushOpacity (
    alpha: number,
    offset: Offset,
    oldLayer: OpacityEngineLayer | null
  ): OpacityEngineLayer

  abstract pushColorFilter (
    filter: ColorFilter,
    oldLayer: ColorFilterEngineLayer | null
  ): ColorFilterEngineLayer

  abstract pushImageFilter (
    filter: ImageFilter,
    oldLayer: ImageFilterEngineLayer | null
  ): ImageFilterEngineLayer

  abstract pushBackdropFilter (
    filter: ImageFilter,
    blendMode: BlendMode,
    oldLayer: BackdropFilterEngineLayer | null
  ): BackdropFilterEngineLayer

  abstract pushShaderMask (
    shader: Shader,
    maskRect: Rect,
    oldLayer: ShaderMaskEngineLayer | null,
    filterQuality: FilterQuality
  ): ShaderMaskEngineLayer

  abstract pushPhysicalShape (
    path: Path,
    elevation: number,
    color: Color,
    shadowColor: Color | null,
    clipBehavior: Clip,
    oldLayer: PhysicalShapeEngineLayer | null
  ): PhysicalShapeEngineLayer

  abstract addRetained (retainedLayer: EngineLayer): void
  abstract pop (): void

  abstract addPerformanceOverlay (
    enabledOptions: number,
    bounds: Rect
  )

  abstract addPicture (
    offset: Offset,
    picture: Picture,
    isComplexHnumber: boolean,
    willChangeHnumber: boolean
  )

  abstract addTexture (
    textureId: number,
    offset: Offset,
    width: number,
    height: number,
    freeze: boolean,
    filterQuality: FilterQuality
  )

  abstract addPlatformView (
    viewId: number,
    offset: Offset,
    width: number,
    height: number
  )

  abstract setRasterizerTracingThreshold (frameInterval: number)
  abstract setCheckerboardRasterCacheImages (checkerboard: boolean)
  abstract setCheckerboardOffscreenLayers (checkerboard: boolean)
  abstract build (): Scene
  abstract setProperties (
    width: number,
    height: number,
    insetTop: number,
    insetRight: number,
    insetBottom: number,
    insetLeft: number,
    focusable: boolean  
  )
}