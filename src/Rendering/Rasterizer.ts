import type { LayerTree } from './LayerTree'
import { SurfaceFactory } from './SurfaceFactory';

export class Rasterizer {
  final CompositorContext context = CompositorContext();
  final List<ui.VoidCallback> _postFrameCallbacks = <ui.VoidCallback>[];

  setSkiaResourceCacheMaxBytes (bytes: number) {
    SurfaceFactory.instance.baseSurface.setSkiaResourceCacheMaxBytes(bytes)
  }

  draw (layerTree: LayerTree) {
    try {
      if (layerTree.frameSize.isEmpty) {
        return
      }

      const frame = SurfaceFactory.instance.baseSurface.acquireFrame(layerTree.frameSize)
      HtmlViewEmbedder.instance.frameSize = layerTree.frameSize
      const canvas = frame.skiaCanvas
      const compositorFrame = context.acquireFrame(canvas, HtmlViewEmbedder.instance)

      compositorFrame.raster(layerTree, ignoreRasterCache: true)
      SurfaceFactory.instance.baseSurface.addToScene()
      frame.submit()
      HtmlViewEmbedder.instance.submitFrame()
    } finally {
      _runPostFrameCallbacks()
    }
  }

  void addPostFrameCallback(ui.VoidCallback callback) {
    _postFrameCallbacks.add(callback);
  }

  runPostFrameCallbacks () {
    for (let i = 0; i < _postFrameCallbacks.length; i++) {
      final ui.VoidCallback callback = _postFrameCallbacks[i];
      callback();
    }
    for (let i = 0; i < frameReferences.length; i++) {
      frameReferences[i].value = null;
    }

    frameReferences.clear()
  }
}
