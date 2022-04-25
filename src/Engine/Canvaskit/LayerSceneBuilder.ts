import { UnimplementedError } from '@Shared';
import { ISceneBuilder, Offset, Rect } from '@UI';
import { ContainerLayer } from './ContainerLayer';
import { RootLayer } from './RootLayer';



export class LayerSceneBuilder implements ISceneBuilder {
  public rootLayer: RootLayer
  public currentLayer: ContainerLayer

  constructor (rootLayer: RootLayer) {
    this.rootLayer = rootLayer
    this.currentLayer = rootLayer
  }

  addPerformanceOverlay (
    enabledOptions: number,
    bounds: Rect
  ) {
    throw new UnimplementedError()
  }

  addPicture (
    offset: Offset,
    isComplexHint = false,
    willChangeHint = false
  ) {
    const layer = new PictureLayer(picture, offset, isComplexHint, willChangeHint)
    this.currentLayer.add(layer)
  }
}