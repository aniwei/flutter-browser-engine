/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:04:53
 */
import { List } from '@internal/List';
import { CompositorContext, LayerTree } from './LayerTree'
import { SurfaceFactory } from '@platform/SurfaceFactory'

import type { VoidCallback } from '@basic/Platform'

export class Rasterizer {
  public context: CompositorContext = new CompositorContext()
  public postFrameCallbacks: List<VoidCallback> = new List()

  setSkiaResourceCacheMaxBytes (bytes: number) {
    SurfaceFactory.instance.baseSurface.setSkiaResourceCacheMaxBytes(bytes)
  }

  draw (layerTree: LayerTree) {
    try {
      if (layerTree.frameSize.isEmpty) {
        return
      }

      const frame = SurfaceFactory.instance.baseSurface.acquireFrame(layerTree.frameSize)
      const canvas = frame.canvas
      const compositorFrame = this.context.acquireFrame(canvas)
      compositorFrame.raster(layerTree, true)
      SurfaceFactory.instance.baseSurface.addToScene()
      frame.submit()
    } finally {
      this.runPostFrameCallbacks()
    }
  }

  addPostFrameCallback (callback: VoidCallback) {
    this.postFrameCallbacks.add(callback)
  }

  runPostFrameCallbacks () {
    for (let i = 0; i < this.postFrameCallbacks.length; i++) {
      const callback = this.postFrameCallbacks[i]
      callback()
    }

    // TODO
    // for (let i = 0; i < this.frameReferences.length; i++) {
    //   this.frameReferences[i].value = null
    // }
    // this.frameReferences.clear()
  }
}
