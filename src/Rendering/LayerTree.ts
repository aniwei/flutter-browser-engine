import { Matrix4 } from '@math/Matrix4'
import { Color } from '@internal/Color'
import { Rect, Size } from '@internal/Geometry'
import { NWayCanvas } from './NWayCanvas'
import { RasterCache } from './RasterCache'
import { PaintContext, PrerollContext, RootLayer } from './Layer'
import { PictureRecorder } from './PictureRecorder'
import { window } from '@ui/Window'

import type { Picture } from './Picture'
import type { Canvas } from './Canvas'

export class LayerTree {
  public rootLayer: RootLayer
  public frameSize: Size = window.physicalSize
  public devicePixelRatio: number | null = null

  /**
   * @description: 
   * @param {RootLayer} rootLayer
   * @return {*}
   */  
  constructor (rootLayer: RootLayer) {
    this.rootLayer = rootLayer
  }
  
  
  /**
   * @description: 
   * @param {Frame} frame
   * @param {boolean} ignoreRasterCache
   * @return {void}
   */
  preroll (
    frame: Frame, 
    ignoreRasterCache: boolean = false
  ) {
    const context: PrerollContext = new PrerollContext(
      ignoreRasterCache 
      ? null 
      : frame.rasterCache
    )

    this.rootLayer.preroll(context, Matrix4.identity())
  }

  /**
   * @description: 
   * @param {Frame} frame
   * @param {boolean} ignoreRasterCache
   * @return {void}
   */
  paint (
    frame: Frame, 
    ignoreRasterCache: boolean = false
  ): void {
    // TODO
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


  /**
   * @description: 
   * @return {Picture}
   */
  flatten (): Picture {
    const recorder = new PictureRecorder()
    const canvas: Canvas = recorder.beginRecording(Rect.largest)
    const prerollContext: PrerollContext = new PrerollContext(null)
    
    this.rootLayer.preroll(prerollContext, Matrix4.identity())

    const internalNodesCanvas: NWayCanvas = new NWayCanvas()
    internalNodesCanvas.addCanvas(canvas)
    const paintContext: PaintContext = new PaintContext(
      internalNodesCanvas, 
      canvas, 
      null
    )
    if (this.rootLayer.needsPainting) {
      this.rootLayer.paint(paintContext)
    }
    return recorder.endRecording()
  }
}

export class Frame {
  public canvas: Canvas
  public rasterCache: RasterCache | null

  
  /**
   * @description: 
   * @param {Canvas} canvas
   * @param {RasterCache} rasterCache
   * @return {Frame}
   */
  constructor (
    canvas: Canvas, 
    rasterCache: RasterCache | null
  ) {
    this.canvas = canvas
    this.rasterCache = rasterCache
  }

  
  /**
   * @description: 
   * @param {LayerTree} layerTree
   * @param {boolean} ignoreRasterCache
   * @return {boolean}
   */
  raster (
    layerTree: LayerTree, 
    ignoreRasterCache: boolean = false
  ): boolean {
    layerTree.preroll(this, ignoreRasterCache)
    layerTree.paint(this, ignoreRasterCache)
   
    return true
  }
}

export class CompositorContext {
  public rasterCache: RasterCache | null = null

  /**
   * @description: 
   * @param {Canvas} canvas
   * @return {Frame}
   */  
  acquireFrame (canvas: Canvas): Frame {
    return new Frame(canvas, this.rasterCache)
  }
}
