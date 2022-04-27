import path from 'path'
import { invariant } from 'ts-invariant'
import CanvasKitInit, { CanvasKitInitOptions, CanvasKit as ICanvasKit } from 'canvaskit-wasm'


type CanvasKitInitFunction = {
  (options: CanvasKitInitOptions): Promise<ICanvasKit>
}

export class CanvasKit {
  static canvasKit: ICanvasKit
  static CanvasKitInit () {
    return (CanvasKitInit as unknown as CanvasKitInitFunction)({
      locateFile: (uri: string) => {
        return path.resolve(__dirname, uri)
      }
    }).then((canvasKit: ICanvasKit) => {
      CanvasKit.canvasKit = canvasKit
      return canvasKit
    })
  }

  static get ImageData () {
    return CanvasKit.canvasKit.ImageData
  }
  static get ParagraphStyle () {
    return CanvasKit.canvasKit.ParagraphStyle
  }
  static get ContourMeasureIter () {
    return CanvasKit.canvasKit.ContourMeasureIter
  }
  static get Font () {
    return CanvasKit.canvasKit.Font
  }
  static get Paint () {
    return CanvasKit.canvasKit.Paint
  }
  static get Path () {
    return CanvasKit.canvasKit.Path
  }
  static get PictureRecorder () {
    return CanvasKit.canvasKit.PictureRecorder
  }
  static get TextStyle () {
    return CanvasKit.canvasKit.TextStyle
  }
  static get ParagraphBuilder () {
    return CanvasKit.canvasKit.ParagraphBuilder
  }
  static get ColorFilter () {
    return CanvasKit.canvasKit.ColorFilter
  }
  static get FontMgr () {
    return CanvasKit.canvasKit.FontMgr
  }
  static get ImageFilter () {
    return CanvasKit.canvasKit.ImageFilter
  }
  static get MaskFilter () {
    return CanvasKit.canvasKit.MaskFilter
  }
  static get PathEffect () {
    return CanvasKit.canvasKit.PathEffect
  }
  static get RuntimeEffect () {
    return CanvasKit.canvasKit.RuntimeEffect
  }
  static get Shader () {
    return CanvasKit.canvasKit.Shader
  }
  static get TextBlob () {
    return CanvasKit.canvasKit.TextBlob
  }
  static get Typeface () {
    return CanvasKit.canvasKit.Typeface
  }
  static get TypefaceFontProvider () {
    return CanvasKit.canvasKit.TypefaceFontProvider
  }
  static get ColorMatrix () {
    return CanvasKit.canvasKit.ColorMatrix
  }
  static get Matrix () {
    return CanvasKit.canvasKit.Matrix
  }
  static get M44 () {
    return CanvasKit.canvasKit.M44
  }
  static get Vector () {
    return CanvasKit.canvasKit.Vector
  }
  static get AlphaType () {
    return CanvasKit.canvasKit.AlphaType
  }
  static get BlendMode () {
    return CanvasKit.canvasKit.BlendMode
  }
  static get BlurStyle () {
    return CanvasKit.canvasKit.BlurStyle
  }
  static get ClipOp () {
    return CanvasKit.canvasKit.ClipOp
  }
  static get ColorType () {
    return CanvasKit.canvasKit.ColorType
  }
  static get FillType () {
    return CanvasKit.canvasKit.FillType
  }
  static get FilterMode () {
    return CanvasKit.canvasKit.FilterMode
  }
  static get FontEdging () {
    return CanvasKit.canvasKit.FontEdging
  }
  static get FontHinting () {
    return CanvasKit.canvasKit.FontHinting
  }
  static get GlyphRunFlags () {
    return CanvasKit.canvasKit.GlyphRunFlags
  }
  static get ImageFormat () {
    return CanvasKit.canvasKit.ImageFormat
  }
  static get MipmapMode () {
    return CanvasKit.canvasKit.MipmapMode
  }
  static get PaintStyle () {
    return CanvasKit.canvasKit.PaintStyle
  }
  static get PathOp () {
    return CanvasKit.canvasKit.PathOp
  }
  static get PointMode () {
    return CanvasKit.canvasKit.PointMode
  }
  static get ColorSpace () {
    return CanvasKit.canvasKit.ColorSpace
  }
  static get StrokeCap () {
    return CanvasKit.canvasKit.StrokeCap
  }
  static get StrokeJoin () {
    return CanvasKit.canvasKit.StrokeJoin
  }
  static get TileMode () {
    return CanvasKit.canvasKit.TileMode
  }
  static get VertexMode () {
    return CanvasKit.canvasKit.VertexMode
  }
  static get TRANSPARENT () {
    return CanvasKit.canvasKit.TRANSPARENT
  }
  static get BLACK () {
    return CanvasKit.canvasKit.BLACK
  }
  static get WHITE () {
    return CanvasKit.canvasKit.WHITE
  }
  static get RED () {
    return CanvasKit.canvasKit.RED
  }
  static get GREEN () {
    return CanvasKit.canvasKit.GREEN
  }
  static get BLUE () {
    return CanvasKit.canvasKit.BLUE
  }
  static get YELLOW () {
    return CanvasKit.canvasKit.YELLOW
  }
  static get CYAN () {
    return CanvasKit.canvasKit.CYAN
  }
  static get MAGENTA () {
    return CanvasKit.canvasKit.MAGENTA
  }
  static get MOVE_VERB () {
    return CanvasKit.canvasKit.MOVE_VERB
  }
  static get LINE_VERB () {
    return CanvasKit.canvasKit.LINE_VERB
  }
  static get QUAD_VERB () {
    return CanvasKit.canvasKit.QUAD_VERB
  }
  static get CONIC_VERB () {
    return CanvasKit.canvasKit.CONIC_VERB
  }
  static get CUBIC_VERB () {
    return CanvasKit.canvasKit.CUBIC_VERB
  }
  static get CLOSE_VERB () {
    return CanvasKit.canvasKit.CLOSE_VERB
  }
  static get SaveLayerInitWithPrevious () {
    return CanvasKit.canvasKit.SaveLayerInitWithPrevious
  }
  static get SaveLayerF16ColorType () {
    return CanvasKit.canvasKit.SaveLayerF16ColorType
  }
  static get ShadowTransparentOccluder () {
    return CanvasKit.canvasKit.ShadowTransparentOccluder
  }
  static get ShadowGeometricOnly () {
    return CanvasKit.canvasKit.ShadowGeometricOnly
  }
  static get ShadowDirectionalLight () {
    return CanvasKit.canvasKit.ShadowDirectionalLight
  }
  static get gpu () {
    return CanvasKit.canvasKit.gpu
  }
  static get managed_skottie () {
    return CanvasKit.canvasKit.managed_skottie
  }
  static get particles () {
    return CanvasKit.canvasKit.particles
  }
  static get rt_effect () {
    return CanvasKit.canvasKit.rt_effect
  }
  static get skottie () {
    return CanvasKit.canvasKit.skottie
  }
  static get Affinity () {
    return CanvasKit.canvasKit.Affinity
  }
  static get DecorationStyle () {
    return CanvasKit.canvasKit.DecorationStyle
  }
  static get FontSlant () {
    return CanvasKit.canvasKit.FontSlant
  }
  static get FontWeight () {
    return CanvasKit.canvasKit.FontWeight
  }
  static get FontWidth () {
    return CanvasKit.canvasKit.FontWidth
  }
  static get PlaceholderAlignment () {
    return CanvasKit.canvasKit.PlaceholderAlignment
  }
  static get RectHeightStyle () {
    return CanvasKit.canvasKit.RectHeightStyle
  }
  static get RectWidthStyle () {
    return CanvasKit.canvasKit.RectWidthStyle
  }
  static get TextAlign () {
    return CanvasKit.canvasKit.TextAlign
  }
  static get TextBaseline () {
    return CanvasKit.canvasKit.TextBaseline
  }
  static get TextDirection () {
    return CanvasKit.canvasKit.TextDirection
  }
  static get TextHeightBehavior () {
    return CanvasKit.canvasKit.TextHeightBehavior
  }
  static get NoDecoration () {
    return CanvasKit.canvasKit.NoDecoration
  }
  static get UnderlineDecoration () {
    return CanvasKit.canvasKit.UnderlineDecoration
  }
  static get OverlineDecoration () {
    return CanvasKit.canvasKit.OverlineDecoration
  }
  static get LineThroughDecoration () {
    return CanvasKit.canvasKit.LineThroughDecoration
  }
  static get Color () {
    return CanvasKit.canvasKit.Color
  }
  static get Color4f () {
    return CanvasKit.canvasKit.Color4f
  }
  static get ColorAsInt () {
    return CanvasKit.canvasKit.ColorAsInt
  }
  static get getColorComponents () {
    return CanvasKit.canvasKit.getColorComponents
  }
  static get parseColorString () {
    return CanvasKit.canvasKit.parseColorString
  }
  static get multiplyByAlpha () {
    return CanvasKit.canvasKit.multiplyByAlpha
  }
  static get computeTonalColors () {
    return CanvasKit.canvasKit.computeTonalColors
  }
  static get LTRBRect () {
    return CanvasKit.canvasKit.LTRBRect
  }
  static get XYWHRect () {
    return CanvasKit.canvasKit.XYWHRect
  }
  static get LTRBiRect () {
    return CanvasKit.canvasKit.LTRBiRect
  }
  static get XYWHiRect () {
    return CanvasKit.canvasKit.XYWHiRect
  }
  static get RRectXY () {
    return CanvasKit.canvasKit.RRectXY
  }
  static get getShadowLocalBounds () {
    return CanvasKit.canvasKit.getShadowLocalBounds
  }
  static get Malloc () {
    return CanvasKit.canvasKit.Malloc
  }
  static get MallocGlyphIDs () {
    return CanvasKit.canvasKit.MallocGlyphIDs
  }
  static get Free () {
    return CanvasKit.canvasKit.Free
  }
  static get MakeCanvasSurface () {
    return CanvasKit.canvasKit.MakeCanvasSurface
  }
  static get MakeRasterDirectSurface () {
    return CanvasKit.canvasKit.MakeRasterDirectSurface
  }
  static get MakeSWCanvasSurface () {
    return CanvasKit.canvasKit.MakeSWCanvasSurface
  }
  static get MakeWebGLCanvasSurface () {
    return CanvasKit.canvasKit.MakeWebGLCanvasSurface
  }
  static get MakeSurface () {
    return CanvasKit.canvasKit.MakeSurface
  }
  static get GetWebGLContext () {
    return CanvasKit.canvasKit.GetWebGLContext
  }
  static get MakeGrContext () {
    return CanvasKit.canvasKit.MakeGrContext
  }
  static get MakeOnScreenGLSurface () {
    return CanvasKit.canvasKit.MakeOnScreenGLSurface
  }
  static get MakeRenderTarget () {
    return CanvasKit.canvasKit.MakeRenderTarget
  }
  static get MakeLazyImageFromTextureSource () {
    return CanvasKit.canvasKit.MakeLazyImageFromTextureSource
  }
  static get deleteContext () {
    return CanvasKit.canvasKit.deleteContext
  }
  static get getDecodeCacheLimitBytes () {
    return CanvasKit.canvasKit.getDecodeCacheLimitBytes
  }
  static get getDecodeCacheUsedBytes () {
    return CanvasKit.canvasKit.getDecodeCacheUsedBytes
  }
  static get setDecodeCacheLimitBytes () {
    return CanvasKit.canvasKit.setDecodeCacheLimitBytes
  }
  static get MakeAnimatedImageFromEncoded () {
    return CanvasKit.canvasKit.MakeAnimatedImageFromEncoded
  }
  static get MakeCanvas () {
    return CanvasKit.canvasKit.MakeCanvas
  }
  static get MakeImage () {
    return CanvasKit.canvasKit.MakeImage
  }
  static get MakeImageFromEncoded () {
    return CanvasKit.canvasKit.MakeImageFromEncoded
  }
  static get MakeImageFromCanvasImageSource () {
    return CanvasKit.canvasKit.MakeImageFromCanvasImageSource
  }
  static get MakePicture () {
    return CanvasKit.canvasKit.MakePicture
  }
  static get MakeVertices () {
    return CanvasKit.canvasKit.MakeVertices
  }
  static get MakeAnimation () {
    return CanvasKit.canvasKit.MakeAnimation
  }
  static get MakeManagedAnimation () {
    return CanvasKit.canvasKit.MakeManagedAnimation
  }
  static get MakeParticles () {
    return CanvasKit.canvasKit.MakeParticles
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