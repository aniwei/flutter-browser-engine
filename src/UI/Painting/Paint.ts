import { CkPaint } from '@CanvasKit'
import { BlendMode, StrokeCap, StrokeJoin, FilterQuality, PaintingStyle } from '.'
import { MaskFilter } from './MaskFilter'
import { ColorFilter } from './ColorFilter'
import { ImageFilter } from './ImageFilter'
import { Shader } from './Shader'
import { Color } from './Color'

export interface IPaint {
  blendMode: BlendMode
  style: PaintingStyle
  strokeWidth: number
  strokeCap: StrokeCap
  strokeJoin: StrokeJoin
  isAntiAlias: boolean
  color: Color
  invertColors: boolean
  shader: Shader | null
  maskFilter: MaskFilter | null
  filterQuality: FilterQuality
  colorFilter: ColorFilter | null
  strokeMiterLimit: number
  imageFilter: ImageFilter | null
}

export abstract class Paint implements IPaint {
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
  abstract shader: Shader | null
  abstract maskFilter: MaskFilter | null
  abstract filterQuality: FilterQuality
  abstract colorFilter: ColorFilter
  abstract strokeMiterLimit: number
  abstract imageFilter: ImageFilter | null
}
