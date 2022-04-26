import { bool, double } from '@Types'
import { BlendMode, StrokeCap, StrokeJoin, FilterQuality, PaintingStyle } from '.'
import { MaskFilter } from './MaskFilter'
import { ColorFilter } from './ColorFilter'
import { ImageFilter } from './ImageFilter'
import { Shader } from './Shader'
import { Color } from './Color'

export abstract class Paint {
  static factory () {
    // 
  }

  static enableDithering: bool = false

  abstract blendMode: BlendMode
  abstract style: PaintingStyle
  abstract strokeWidth: double
  abstract strokeCap: StrokeCap
  abstract strokeJoin: StrokeJoin
  abstract isAntiAlias: bool
  abstract color: Color
  abstract invertColors: bool
  abstract shader: Shader | null
  abstract maskFilter: MaskFilter | null
  abstract filterQuality: FilterQuality
  abstract colorFilter: ColorFilter
  abstract strokeMiterLimit: double
  abstract imageFilter: ImageFilter | null
}
