/*
 * @Author: Aniwei
 * @Date: 2022-08-16 16:33:07
 */
export * from 'canvaskit-wasm'

export enum FilterQuality {
  None,
  Low,
  Medium,
  High,
}

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
  Surface as ISurface
} from 'canvaskit-wasm'