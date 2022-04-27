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
} from './Compositing/EngineLayer'
import { Offset } from './Offset'
import { Rect } from './Rect'
import { Scene } from './Compositing/Scene'

export interface ISceneBuilder {
  pushOffset (
    dx: number,
    dy: number, {
    oldLayer,
  }): OffsetEngineLayer

  pushTransform (
    matrix,
    oldLayer
  ): TransformEngineLayer

  pushClipRect (
    rect,
    clipBehavior
  ): ClipRectEngineLayer

  pushClipRRect (
    rrect,
    clipBehavior,
    oldLayer
  ): ClipRRectEngineLayer

  pushClipPath (
    path,
    clipBehavior,
    oldLayer?
  ): ClipPathEngineLayer

  pushOpacity (
    alpha: number,
    offset,
    oldLayer?
  ): OpacityEngineLayer

  pushColorFilter (
    filter,
    oldLayer
  ): ColorFilterEngineLayer

  pushImageFilter (
    filter,
    oldLayer
  ): ImageFilterEngineLayer

  pushBackdropFilter (
    filter,
    blendMode,
    oldLayer
  ): BackdropFilterEngineLayer

  pushShaderMask (
    shader,
    maskRect: Rect,
    oldLayer: ShaderMaskEngineLayer,
    filterQuality
  ): ShaderMaskEngineLayer

  pushPhysicalShape (
    path,
    elevation,
    color,
    shadowColor,
    clipBehavior
  ): PhysicalShapeEngineLayer

  addRetained (retainedLayer: EngineLayer)
  pop ()
  addPerformanceOverlay (
    enabledOptions: number,
    bounds: Rect
  )

  addPicture (
    offset: Offset,
    picture,
    isComplexHint: boolean,
    willChangeHint: boolean
  )

  addTexture (
    textureId: number,
    offset: Offset,
    width: number,
    height: number,
    freeze: boolean,
    filterQuality
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
    width,
    height,
    insetTop,
    insetRight,
    insetBottom,
    insetLeft,
    focusable  
  )
}

export class SceneBuilder extends LayerSceneBuilder {
  
}