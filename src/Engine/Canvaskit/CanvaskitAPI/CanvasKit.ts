import { double } from '@Types'
import { 
  CanvasKit as ICanvasKit,
  ColorIntArray,
  InputFlattenedPointArray,
  TonalColorsInput as SkTonalColors,
  VertexMode,
} from 'canvaskit-wasm'

import { initialization } from '../Initialization'

export class CanvasKit implements ICanvasKit {
  public get BlendMode () {
    return initialization.useCanvasKit().BlendMode
  }
  public get PaintStyle () {
    return initialization.useCanvasKit().PaintStyle
  }
  public get StrokeCap () {
    return initialization.useCanvasKit().StrokeCap
  }
  public get StrokeJoin () {
    return initialization.useCanvasKit().StrokeJoin
  }
  public get BlurStyle () {
    return initialization.useCanvasKit().BlurStyle
  }
  public get TileMode () {
    return initialization.useCanvasKit().TileMode
  }
  public get FilterMode () {
    return initialization.useCanvasKit().FilterMode
  }
  public get MipmapMode () {
    return initialization.useCanvasKit().MipmapMode
  }
  public get FillType () {
    return initialization.useCanvasKit().FillType
  }
  public get AlphaType () {
    return initialization.useCanvasKit().AlphaType
  }
  public get ColorType () {
    return initialization.useCanvasKit().ColorType
  }
  public get PathOp () {
    return initialization.useCanvasKit().PathOp
  }
  public get ClipOp () {
    return initialization.useCanvasKit().ClipOp
  }
  public get PointMode () {
    return initialization.useCanvasKit().PointMode
  }
  public get VertexMode () {
    return initialization.useCanvasKit().VertexMode
  }
  public get RectHeightStyle () {
    return initialization.useCanvasKit().RectHeightStyle
  }
  public get RectWidthStyle () {
    return initialization.useCanvasKit().RectWidthStyle
  }
  public get Affinity () {
    return initialization.useCanvasKit().Affinity
  }
  public get TextAlign () {
    return initialization.useCanvasKit().TextAlign
  }
  public get TextHeightBehavior () {
    return initialization.useCanvasKit().TextHeightBehavior
  }
  public get TextDirection () {
    return initialization.useCanvasKit().TextDirection
  }
  public get FontWeight () {
    return initialization.useCanvasKit().FontWeight
  }
  public get FontSlant () {
    return initialization.useCanvasKit().FontSlant
  }
  public get Shader () {
    return initialization.useCanvasKit().Shader
  }
  public get MaskFilter () {
    return initialization.useCanvasKit().MaskFilter
  }
  public get ColorFilter () {
    return initialization.useCanvasKit().ColorFilter
  }
  public get ImageFilter () {
    return initialization.useCanvasKit().ImageFilter
  }
  public get Path () {
    return initialization.useCanvasKit().Path
  }
  public get ParagraphBuilder () {
    return initialization.useCanvasKit().ParagraphBuilder
  }

  public get NoDecoration () {
    return initialization.useCanvasKit().NoDecoration
  }
  public get UnderlineDecoration () {
    return initialization.useCanvasKit().UnderlineDecoration
  }
  public get OverlineDecoration () {
    return initialization.useCanvasKit().OverlineDecoration
  }
  public get LineThroughDecoration () {
    return initialization.useCanvasKit().LineThroughDecoration
  }

  public get DecorationStyle () {
    return initialization.useCanvasKit().DecorationStyle
  }
  public get TextBaseline () {
    return initialization.useCanvasKit().TextBaseline
  }
  public get PlaceholderAlignment () {
    return initialization.useCanvasKit().PlaceholderAlignment
  }
  public get FontMgr () {
    return initialization.useCanvasKit().FontMgr
  }
  public get TypefaceFontProvider () {
    return initialization.useCanvasKit().TypefaceFontProvider
  }
  public get Typeface () {
    return initialization.useCanvasKit().Typeface
  }

  public get ParagraphStyle () {
    return initialization.useCanvasKit().ParagraphStyle
  }

  public get TextStyle () {
    return initialization.useCanvasKit().TextStyle
  }

  public get MakeAnimatedImageFromEncoded () {
    return initialization.useCanvasKit().MakeAnimatedImageFromEncoded
  }

  public get computeTonalColors () {
    return initialization.useCanvasKit().computeTonalColors
  }

  public get MakeVertices () {
    return initialization.useCanvasKit().MakeVertices
  }

  public get MakeSurface () {
    return initialization.useCanvasKit().MakeSurface
  }

  public get GetWebGLContext () {
    return initialization.useCanvasKit().GetWebGLContext
  }

  public get MakeSWCanvasSurface () {
    return initialization.useCanvasKit().MakeSWCanvasSurface
  }

  public get MakeOnScreenGLSurface () {
    return initialization.useCanvasKit().MakeOnScreenGLSurface
  }

  public get MakeGrContext () {
    return initialization.useCanvasKit().MakeGrContext
  }

  public get MakeImage () {
    return initialization.useCanvasKit().MakeImage
  }

  public get MakeLazyImageFromTextureSource () {
    return initialization.useCanvasKit().MakeLazyImageFromTextureSource
  }
}

export type {
  Surface as SkSurface,
  Image as SkImage,
  GrDirectContext as SkGrContext,
  FontSlant as SkFontSlant,
  FontBlock as SkFontBlock,
  FontWeight as SkFontWeight,
  Affinity as SkAffinity,

} from 'canvaskit-wasm'