import { ArgumentError, UnimplementedError } from '@Shared'
import { Float64List } from '@Types'
import { CkImageFilter } from '@CanvasKit'
import { TileMode } from '@UI'
import { FilterQuality } from '.'

export class ImageFilter {
  static blur (
    sigmaX: number = 0.0,
    sigmaY: number = 0.0,
    tileMode: TileMode = TileMode.clamp
  ) {
    return CkImageFilter.blur(
      sigmaX,
      sigmaY,
      tileMode
    )
  }

  static matrix (
    matrix4: Float64List,
    filterQuality: FilterQuality = FilterQuality.low
  ) {
    if (matrix4.length !== 16) {
      throw new ArgumentError('"matrix4" must have 16 entries.')
    }

    return CkImageFilter.matrix(
      matrix4, 
      filterQuality
    )
  }

  static compose (
    outer: ImageFilter,
    inner: ImageFilter
  ) {
    throw new UnimplementedError('ImageFilter.compose not implemented for web platform.')
  }
}
