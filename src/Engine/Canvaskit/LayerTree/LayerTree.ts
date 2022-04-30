import { Color, Picture, Rect, Size } from '@UI';
import { RootLayer, PrerollContext } from '../Layer'
import { Matrix4 } from '../../VectorMath'
import { PaintContext } from '../Layer/PaintContext';
import { Frame } from './Frame';
import { CkNWayCanvas } from '../NWayCanvas';

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

  paint (frame: Frame, ignoreRasterCache = false) {
    const internalNodesCanvas = new CkNWayCanvas()
    internalNodesCanvas.addCanvas(frame.canvas)
    const overlayCanvases = frame.viewEmbedder!.getOverlayCanvases()
    
    for (let i = 0; i < overlayCanvases.length; i++) {
      internalNodesCanvas.addCanvas(overlayCanvases[i])
    }

    
    internalNodesCanvas.clear(new Color(0x00000000))
    const context = new PaintContext(
      internalNodesCanvas,
      frame.canvas,
      ignoreRasterCache ? null : frame.rasterCache,
      frame.viewEmbedder,
    )
    if (this.rootLayer.needsPainting) {
      this.rootLayer.paint(context)
    }
  }

  flatten (): Picture {
    const recorder = CkPictureRecorder()
    const canvas = recorder.beginRecording(Rect.largest)
    const prerollContext = new PrerollContext(null, null)
    this.rootLayer.preroll(prerollContext, Matrix4.identity())

    const internalNodesCanvas = new CkNWayCanvas()
    internalNodesCanvas.addCanvas(canvas)
    
    const paintContext = new PaintContext(internalNodesCanvas, canvas, null, null)
    
    if (this.rootLayer.needsPainting) {
      this.rootLayer.paint(paintContext)
    }

    return recorder.endRecording()
  }
}
