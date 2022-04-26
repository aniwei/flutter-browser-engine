import { double } from '@Types';
import { TransformEngineLayer } from './TransformEngineLayer'

export class OffsetEngineLayer extends TransformEngineLayer {
  constructor (dx: double, dy: double) {
    super(Matrix4.translationValues(dx, dy, 0))
  }
}
