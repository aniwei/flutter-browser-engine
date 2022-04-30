import { Size } from '@UI';
import { RootLayer, PrerollContext } from '../Layer'
import { Matrix4 } from '../../VectorMath'

export class LayerTree {
  public rootLayer: RootLayer
  public frameSize: Size = window.physicalSize
  public devicePixelRatio: number | null = null

  constructor (rootLayer: RootLayer) {
    this.rootLayer = rootLayer
  }
  
  preroll (frame: Frame, ignoreRasterCache: boolean = false): void {
    const context = new PrerollContext(
      ignoreRasterCache ? null : frame.rasterCache,
      frame.viewEmbedder,
    );
    this.rootLayer.preroll(context, Matrix4.identity());
  }

  /// Paints the layer tree into the given [frame].
  ///
  /// If [ignoreRasterCache] is `true`, then the raster cache will
  /// not be used.
  void paint(Frame frame, {bool ignoreRasterCache = false}) {
    final CkNWayCanvas internalNodesCanvas = CkNWayCanvas();
    internalNodesCanvas.addCanvas(frame.canvas);
    final List<CkCanvas> overlayCanvases =
        frame.viewEmbedder!.getOverlayCanvases();
    for (int i = 0; i < overlayCanvases.length; i++) {
      internalNodesCanvas.addCanvas(overlayCanvases[i]);
    }
    // Clear the canvases before painting
    internalNodesCanvas.clear(const ui.Color(0x00000000));
    final PaintContext context = PaintContext(
      internalNodesCanvas,
      frame.canvas,
      ignoreRasterCache ? null : frame.rasterCache,
      frame.viewEmbedder,
    );
    if (rootLayer.needsPainting) {
      rootLayer.paint(context);
    }
  }

  /// Flattens the tree into a single [ui.Picture].
  ///
  /// This picture does not contain any platform views.
  ui.Picture flatten() {
    final CkPictureRecorder recorder = CkPictureRecorder();
    final CkCanvas canvas = recorder.beginRecording(ui.Rect.largest);
    final PrerollContext prerollContext = PrerollContext(null, null);
    rootLayer.preroll(prerollContext, Matrix4.identity());

    final CkNWayCanvas internalNodesCanvas = CkNWayCanvas();
    internalNodesCanvas.addCanvas(canvas);
    final PaintContext paintContext =
        PaintContext(internalNodesCanvas, canvas, null, null);
    if (rootLayer.needsPainting) {
      rootLayer.paint(paintContext);
    }
    return recorder.endRecording();
  }
}
