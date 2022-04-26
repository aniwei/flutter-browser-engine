import { ArgumentError, UnimplementedError } from '@Shared';
import { Float64List, double } from '@Types'
import { FilterQuality } from '.'

export class ImageFilter {
  static blur (
    sigmaX: double = 0,
    sigmaY: double = 0,
    tileMode: TileMode
  ) {
    // 
  }

  static matrix (
    matrix4: Float64List,
    filterQuality?: FilterQuality
  ) {
    if (matrix4.length !== 16) {
      throw new ArgumentError('"matrix4" must have 16 entries.')
    }


  }

  // TODO(ferhat): add implementation and remove the "ignore".
  // ignore: avoid_unused_constructor_parameters
  static compose (
    outer: ImageFilter,
    inner: ImageFilter
  ) {
    throw new UnimplementedError('ImageFilter.compose not implemented for web platform.')
  }
}
