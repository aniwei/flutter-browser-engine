import { Matrix4 } from '@math'
import { Canvas } from './Canvas'
import { Rect, Size } from './Geometry'
import { PaintContext, PrerollContext, RootLayer } from './Layer'
import { NWayCanvas } from './NWayCanvas'
import { Color } from './Painting'
import { Picture } from './Picture'
import { RasterCache } from './RasterCache'

export class LayerTree {
  public rootLayer: RootLayer
  public frameSize!: Size
  public devicePixelRatio!: number

  constructor (rootLayer: RootLayer) {
    this.rootLayer = rootLayer
  }

  
  preroll (
    frame: Frame, 
    ignoreRasterCache = false
  ) {
    const context: PrerollContext = new PrerollContext(
      ignoreRasterCache ? null : frame.rasterCache,
    )
    this.rootLayer.preroll(context, Matrix4.identity())
  }

  paint (
    frame: Frame, 
    ignoreRasterCache: boolean = false
  ) {
    const internalNodesCanvas: NWayCanvas = new NWayCanvas()
    internalNodesCanvas.addCanvas(frame.canvas)
    
    internalNodesCanvas.clear(new Color(0x00000000))
    const context: PaintContext = new PaintContext(
      internalNodesCanvas,
      frame.canvas,
      ignoreRasterCache ? null : frame.rasterCache,
    )
    
    if (this.rootLayer.needsPainting) {
      this.rootLayer.paint(context)
    }
  }


  flatten (): Picture {
    const recorder = new PictureRecorder()
    const canvas: Canvas = recorder.beginRecording(Rect.largest)
    const prerollContext: PrerollContext = new PrerollContext(null)
    
    this.rootLayer.preroll(prerollContext, Matrix4.identity())

    const internalNodesCanvas: NWayCanvas = new NWayCanvas()
    internalNodesCanvas.addCanvas(canvas)
    const paintContext: PaintContext = new PaintContext(internalNodesCanvas, canvas, null, null)
    if (this.rootLayer.needsPainting) {
      this.rootLayer.paint(paintContext)
    }
    return recorder.endRecording()
  }
}

export class Frame {
  public canvas: Canvas
  public rasterCache: RasterCache | null

  constructor (
    canvas: Canvas, 
    rasterCache: RasterCache | null
  ) {
    this.canvas = canvas
    this.rasterCache = rasterCache
  }

  raster (
    layerTree: LayerTree, 
    ignoreRasterCache: boolean = false
  ): boolean {
    layerTree.preroll(this, ignoreRasterCache)
    layerTree.paint(this, ignoreRasterCache)
   
    return true;
  }
}

export class CompositorContext {
  public rasterCache: RasterCache | null = null

  acquireFrame (canvas: Canvas): Frame {
    return new Frame(canvas, this.rasterCache)
  }
}
