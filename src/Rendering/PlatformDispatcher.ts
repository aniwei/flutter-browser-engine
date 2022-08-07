import { Rasterizer } from './Rasterizer'

import type { Window } from '@ui/Window'
import type { LayerScene } from './LayerSceneBuilder'

export class PlatformDispatcher {
  static get instance () {
    return new PlatformDispatcher()
  }

  static get browserDevicePixelRatio () {
    return 1.0
  }

  public rasterizer: Rasterizer
  public windows: Map<string | number, Window> 

  constructor () {
    this.windows = new Map()
    this.rasterizer = new Rasterizer()
  }

  render (scene: LayerScene) {
    this.rasterizer.draw(scene.layerTree)
  }
}