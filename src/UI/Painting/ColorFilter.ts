import { BlendMode } from '.';
import { Color } from './Color'
import type { double } from '@Types';

export abstract class ColorFilter {
  static mode (
    color: Color,
    blendMode: BlendMode
  ) {}

  static matrix (matrix: double[]) {}
     
  static linearToSrgbGamma () {}
  static srgbToLinearGamma () {}
}