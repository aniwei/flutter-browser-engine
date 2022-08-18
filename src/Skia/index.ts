/*
 * @Author: Aniwei
 * @Date: 2022-08-16 16:33:07
 */
import { EmbindObject } from 'canvaskit-wasm'
export * from 'canvaskit-wasm'

export const kShadowFlags = {
  kNoneShadowFlag: 0x00,
  kTransparentOccluderShadowFlag: 0x01,
  kDirectionalLightShadowFlag: 0x04,
  get kDefaultShadowFlags () {
    return this.kDirectionalLightShadowFlag | this.kNoneShadowFlag
  },
  get kTransparentOccluderShadowFlags () {
    return  this.kDirectionalLightShadowFlag | this.kTransparentOccluderShadowFlag
  }
}




export enum FilterQuality {
  None,
  Low,
  Medium,
  High,
}

export interface IColorFilter extends EmbindObject<IColorFilter> { }

export type {
  Canvas as ICanvas,
  Image as IImage,
  AnimatedImage as IAnimatedImage,
  ImageFilter as IImageFilter,
  MaskFilter as iMaskFilter,
  Paint as IPaint,
  Path as IPath,
  Shader as IShader,
  Camera as ICamera,
  Vertices as IVertices,
  SkPicture as IPicture,
  Surface as SkiaSurface,
  PictureRecorder as IPictureRecorder,
  GrDirectContext as IGrDirectContext,
  WebGLOptions as IWebGLOptions,
  ParagraphStyle as IParagraphStyle,
  StrutStyle as IStrutStyle,
  FontStyle as IFontStyle,
  TextStyle as ITextStyle,
  Surface as ISurface,
  ParagraphBuilder as IParagraphBuilder,
  Paragraph as IParagraph,
  LineMetrics as ILineMetrics,
  TextShadow as ITextShadow,
  TextFontFeatures as ITextFontFeatures,
  PositionWithAffinity as IPositionWithAffinity,
  
} from 'canvaskit-wasm'