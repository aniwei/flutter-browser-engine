import { SkImageFilter } from '@Skia';
import { Float64List } from '@Types';
import { FilterQuality } from '@UI';
import { CanvasKitAPI } from '../CanvasKitAPI/CanvasKit';
import { CkImageFilter } from './CkImageFilter'

export class CkMatrixImageFilter extends CkImageFilter {
  public matrix: Float64List 
  public filterQuality: FilterQuality

  constructor (matrix: Float64List, filterQuality: FilterQuality) {
    super()

    this.matrix = matrix
    this.filterQuality = filterQuality
  }
  


  initSkiaObject (): SkImageFilter {
    return CanvasKitAPI.CanvasKit.ImageFilter.MakeMatrixTransform(
      toSkMatrixFromFloat64(this.matrix),
      toSkFilterOptions(this.filterQuality),
      null,
    );
  }

  isEqual (other) {
    return (
      other.matrix === this.matrix &&
      other.filterQuality === this.filterQuality
    )
  }

  
  toString () {
    return `ImageFilter.matrix(${this.matrix}, ${this.filterQuality})`
  }
}
