import { Frame } from './Frame';
import { PrerollContext } from './PrerollContext';
import { RootLayer } from './RootLayer';

export class LayerTree {
  public rootLayer: RootLayer
  public frameSize
  public devicePixelRatio?: number

  constructor (rootLayer: RootLayer) {
    this.rootLayer = rootLayer
  }

  preroll (
    frame,
    ignoreRasterCache = false
  ) {
    const context = new PrerollContext(
      ignoreRasterCache ? null : frame.rasterCache,
      frame.viewEmbedder
    )

    this.rootLayer.preroll(context, Matrix.identity())
  }

  paint (
    frame: Frame,
    ignoreRasterCache = false
  ): void {

  } 

  flatten () {

  }
}