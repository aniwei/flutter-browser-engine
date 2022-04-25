import { LayerSceneBuilder } from '@Engine'

import type {
  EngineLayer,
  OffsetEngineLayer
} from './EngineLayer'

export interface ISceneBuilder {
  pushOffset (
    dx: number,
    dy: number, {
    oldLayer,
  })

  pushTransform (
    matrix,
    oldLayer
  )

  pushClipRect (
    rect,
    clipBehavior
  )

  pushClipRRect (
    rrect,
    clipBehavior,
    oldLayer
  )

  pushClipPath (
    path,
    clipBehavior,
    oldLayer?
  )

  pushOpacity (
    alpha: number,
    offset,
    oldLayer?
  )

  pushColorFilter (
    filter,
    oldLayer
  )

  pushImageFilter (
    filter,
    oldLayer
  )

  pushBackdropFilter (
    filter,
    blendMode,
    oldLayer
  )

  pushPhysicalShape (
    path,
    elevation,
    color,
    shadowColor,
    clipBehavior
  )

  addRetained (
    retainedLayer: EngineLayer
  )

  pop ()

  addPerformanceOverlay (
    enabledOptions,
    bounds
  )

  addPicture (
    offset,
    picture,
    isComplexHint,
    willChangeHint
  )

  addTexture (
    textureId: number,
    offset,
    width,
    height,
    freeze,
    filterQuality
  )

  addPlatformView (
    viewId: number,
    offset,
    width,
    height
  )

  setRasterizerTracingThreshold (
    frameInterval
  )

  setCheckerboardRasterCacheImages (
    checkerboard
  )

  setCheckerboardOffscreenLayers (
    checkerboard
  )

  build ()

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