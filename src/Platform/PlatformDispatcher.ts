/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:04:53
 */
import { Rasterizer } from '@rendering/Rasterizer'

import { configuration } from './configuration'

import type { Window } from '@ui/Window'
import type { LayerScene } from '@rendering/LayerSceneBuilder'
import type { VoidCallback } from '@basic/Platform'

export class PlatformDispatcher {
  static get instance () {
    return new PlatformDispatcher()
  }

  static get devicePixelRatio () {
    return configuration.devicePixelRatio
  }

  public rasterizer: Rasterizer
  public windows: Map<string | number, Window> 

  public onMetricsChanged: VoidCallback | null = null

  constructor () {
    this.windows = new Map()
    this.rasterizer = new Rasterizer()
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