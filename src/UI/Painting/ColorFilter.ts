import { BlendMode } from '.';
import { Color } from './Color'

export abstract class ColorFilter {
  static mode (
    color: Color,
    blendMode: BlendMode
  ) {}

  static matrix (matrix: number[]) {}
     
  static linearToSrgbGamma () {}
  static srgbToLinearGamma () {}
}