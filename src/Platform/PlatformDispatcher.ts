/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:04:53
 */
import { Rasterizer } from '@rendering/Rasterizer'
import { Rect } from '@internal/Geometry'
import { Window, WindowPadding } from '@ui/Window'

import { PlatformBinding } from './PlatformBinding'

import type { LayerScene } from '@rendering/LayerSceneBuilder'
import type { OperatingSystem, Viewpoint, VoidCallback } from '@basic/Platform'
import { property } from '@helper/property'

export type DisplayFeatureOptions = {
  bounds: Rect
  type: DisplayFeatureType
  state: DisplayFeatureState
}

export class DisplayFeature {
  public bounds: Rect
  public type: DisplayFeatureType
  public state: DisplayFeatureState

  constructor (options: DisplayFeatureOptions) {
    this.bounds = options.bounds
    this.type = options.type
    this.state = options.state
  }
  eq (other: DisplayFeature): boolean {
    if (this === other) {
      return true
    }

    return (
      other instanceof DisplayFeature &&
      other.bounds.eq(this.bounds) &&
      other.type === this.type &&
      other.state === this.state
    )
  }

  toString () {
    return `DisplayFeature(rect: ${this.bounds}, type: ${this.type}, state: ${this.state})`
  }
}

enum DisplayFeatureType {
  unknown,
  fold,
  hinge,
  cutout,
}

enum DisplayFeatureState {
  unknown,
  postureFlat,
  postureHalfOpened,
  postureFlipped,
}

export class PlatformDispatcher {
  static get instance () {
    return new PlatformDispatcher()
  }

  static get devicePixelRatio (): number {
    return PlatformBinding.instance?.configuration.devicePixelRatio as number
  }

  static get viewpoint (): Viewpoint {
    return PlatformBinding.instance?.configuration.viewpoint as Viewpoint
  }

  static get innerWidth (): number {
    return PlatformBinding.instance?.configuration.width as number
  }

  static get innerHeight (): number {
    return PlatformBinding.instance?.configuration.width as number
  }

  static get system (): OperatingSystem {
    return PlatformBinding.instance?.configuration.system as OperatingSystem
  }

  @property(function (this, rasterizer: Rasterizer) {
    return rasterizer ?? (this.rasterizer = new Rasterizer())
  }) public rasterizer!: Rasterizer
  
  public windows: Map<string | number, Window> 
  public configurations: Map<string | number, ViewConfiguration>  

  public onMetricsChanged: VoidCallback | null = null

  constructor () {
    this.windows = new Map()
    this.configurations = new Map()
  }

  invoke (callback: VoidCallback | null): void {
    if (callback === null) {

    }
  }

  invokeOnMetricsChanged (): void {
    if (this.onMetricsChanged !== null) {
      this.invoke(this.onMetricsChanged)
    }
  }

  render (scene: LayerScene) {
    this.rasterizer.draw(scene.layerTree)
  }
}

export type ViewConfigurationOptions = {
  window: Window,
  devicePixelRatio?: number,
  geometry?: Rect,
  visible?: boolean,
  viewInsets?: WindowPadding,
  viewPadding?: WindowPadding,
  systemGestureInsets?: WindowPadding,
  padding?: WindowPadding,
  // TODO
  // gestureSettings: GestureSettings,
  displayFeatures?: DisplayFeature,
}

export class ViewConfiguration {
  public window: Window | null = null
  public devicePixelRatio: number
  public geometry: Rect
  public visible: boolean
  public viewInsets: WindowPadding
  public viewPadding: WindowPadding
  public systemGestureInsets: WindowPadding
  public padding: WindowPadding
  // TODO
  // public gestureSettings: GestureSettings
  public displayFeatures

  constructor(options: ViewConfigurationOptions) {
    this.window = options.window
    this.devicePixelRatio = options.devicePixelRatio ?? 1.0
    this.geometry = options.geometry ?? Rect.zero
    this.visible = options.visible ?? false
    this.viewInsets = options.viewInsets ?? WindowPadding.zero
    this.viewPadding = options.viewPadding ?? WindowPadding.zero
    this.systemGestureInsets = options.systemGestureInsets ?? WindowPadding.zero
    this.padding = options.padding ?? WindowPadding.zero
    // TODO
    // this.gestureSettings = options.gestureSettings ?? new GestureSettings
    this.displayFeatures = options.displayFeatures ?? []
  }

  copyWith (options: ViewConfigurationOptions): ViewConfiguration {
    return new ViewConfiguration({
      window: options.window ?? this.window,
      devicePixelRatio: options.devicePixelRatio ?? this.devicePixelRatio,
      geometry: options.geometry ?? this.geometry,
      visible: options.visible ?? this.visible,
      viewInsets: options.viewInsets ?? this.viewInsets,
      viewPadding: options.viewPadding ?? this.viewPadding,
      systemGestureInsets: options.systemGestureInsets ?? this.systemGestureInsets,
      padding: options.padding ?? this.padding,
      // TODO
      // gestureSettings: gestureSettings ?? this.gestureSettings,
      displayFeatures: options.displayFeatures ?? this.displayFeatures,
    })
  }
}