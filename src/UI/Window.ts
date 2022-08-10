/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:04:53
 */
import { LayerScene } from '@rendering/LayerSceneBuilder'
import { PlatformDispatcher, ViewConfiguration } from '@platform/PlatformDispatcher'
import { Size } from '@internal/Geometry'
import { property } from '@helper/property'
import { OperatingSystem } from '@basic/Platform'

export type WindowPaddingOptions = {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export class WindowPadding {
  static zero = new WindowPadding()

  public left: number 
  public top: number 
  public right: number 
  public bottom: number 

  constructor (options: WindowPaddingOptions = {}) {
    this.left = options.left ?? 0.0
    this.top = options.top ?? 0.0
    this.right = options.right ?? 0.0
    this.bottom = options.bottom ?? 0.0
  }

  toString () {
    return `WindowPadding(left: ${this.left}, top: ${this.top}, right: ${this.right}, bottom: ${this.bottom})`
  }
}

export class Window {
  @property(function (this) {
    return PlatformDispatcher.devicePixelRatio
  }) public devicePixelRatio!: number

  @property(function (this) {
    return PlatformDispatcher.viewpoint
  }) public viewpoint!: number | null

  @property(function (this) {
    return PlatformDispatcher.system
  }) public system!: OperatingSystem

  @property(function (this) {
    return PlatformDispatcher.innerWidth
  }) public width!: number

  @property(function (this) {
    return PlatformDispatcher.innerHeight
  }) public height!: number

  @property(function (this, physicalSize: Size) {
    if (physicalSize) {
      return physicalSize
    }

    return this.physicalSize = this.computePhysicalSize()
  }) public physicalSize!: Size

  public platformDispatcher: PlatformDispatcher

  constructor (
    windowId: number,
    platformDispatcher: PlatformDispatcher
  ) {
    this.platformDispatcher = platformDispatcher
    this.platformDispatcher.windows.set(windowId, this)
    this.platformDispatcher.configurations.set(windowId, new ViewConfiguration({
      window: this
    }))
  }

  computePhysicalSize () {
    let override = false

    if (!override) {
      const windowInnerWidth: number = this.width * this.devicePixelRatio
      const windowInnerHeight: number = this.height * this.devicePixelRatio

      return new Size(
        windowInnerWidth,
        windowInnerHeight,
      )
    }
  }

  render (scene: LayerScene) {
    this.platformDispatcher.render(scene)
  }
}


export const window = new Window(
  0,
  PlatformDispatcher.instance
)