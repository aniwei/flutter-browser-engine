import { CkPaint } from '@CanvasKit'
import { BlendMode, StrokeCap, StrokeJoin, FilterQuality, PaintingStyle } from '.'
import { MaskFilter } from './MaskFilter'
import { ColorFilter } from './ColorFilter'
import { ImageFilter } from './ImageFilter'
import { Shader } from './Shader'
import { Color } from './Color'


export abstract class Paint {
  static factory () {
    return new CkPaint()
  }

  static enableDithering: boolean = false

  abstract blendMode: BlendMode
  abstract style: PaintingStyle
  abstract strokeWidth: number
  abstract strokeCap: StrokeCap
  abstract strokeJoin: StrokeJoin
  abstract isAntiAlias: boolean
  abstract color: Color
  abstract invertColors: boolean
  abstract filterQuality: FilterQuality
  abstract strokeMiterLimit: number
  abstract shader: Shader | null
  abstract maskFilter: MaskFilter | null
  abstract colorFilter: ColorFilter | null
  abstract imageFilter: ImageFilter | null
}
