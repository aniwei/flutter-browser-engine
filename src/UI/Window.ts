import { LayerScene } from '@rendering/LayerSceneBuilder'
import { PlatformDispatcher } from '@rendering/PlatformDispatcher'

export class Window {
  get devicePixelRatio () {
    return PlatformDispatcher.browserDevicePixelRatio
  }

  public platformDispatcher: PlatformDispatcher

  constructor (
    windowId: number,
    platformDispatcher: PlatformDispatcher
  ) {
    this.platformDispatcher = platformDispatcher
    this.platformDispatcher.windows.set(windowId, this)
  }

  render (scene: LayerScene) {
    this.platformDispatcher.render(scene)
  }
}

export const window = new Window(
  0,
  PlatformDispatcher.instance
)