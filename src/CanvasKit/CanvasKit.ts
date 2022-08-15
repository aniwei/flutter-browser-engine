/*
 * @Author: Aniwei
 * @Date: 2022-08-15 10:23:44
 */
import { property } from '@helper/property'
import { CanvasKit as ICanvasKit } from 'canvaskit-wasm'

const skia = function () {
  return property(function (this: CanvasKit, v, k) {
    return this.skia
  })
}

export class CanvasKit implements ICanvasKit {
  public skia: ICanvasKit

  constructor (skia) {
    this.skia = skia
  }

  @skia() public Color
  @skia() public Color4f
  @skia() public ColorAsInt
  @skia() public getColorComponents
  @skia() public parseColorString
  @skia() public multiplyByAlpha
  @skia() public computeTonalColors
  @skia() public LTRBRect
  @skia() public XYWHRect
  @skia() public LTRBiRect
  @skia() public XYWHiRect
  @skia() public RRectXY
  @skia() public getShadowLocalBounds
  @skia() public Malloc
  @skia() public MallocGlyphIDs
  @skia() public Free
  @skia() public MakeCanvasSurface
  @skia() public MakeRasterDirectSurface
  @skia() public MakeSWCanvasSurface
  @skia() public MakeWebGLCanvasSurface
  @skia() public MakeSurface
  @skia() public GetWebGLContext
  @skia() public MakeGrContext
  @skia() public MakeOnScreenGLSurface
  @skia() public MakeRenderTarget
  @skia() public MakeLazyImageFromTextureSource
  @skia() public deleteContext
  @skia() public getDecodeCacheLimitBytes
  @skia() public getDecodeCacheUsedBytes
  @skia() public setDecodeCacheLimitBytes
  @skia() public MakeAnimatedImageFromEncoded
  @skia() public MakeCanvas
  @skia() public MakeImage
  @skia() public MakeImageFromEncoded
  @skia() public MakeImageFromCanvasImageSource
  @skia() public MakePicture
  @skia() public MakeVertices
  @skia() public MakeAnimation
  @skia() public MakeManagedAnimation
  @skia() public MakeParticles
  @skia() public ImageData
  @skia() public ParagraphStyle
  @skia() public ContourMeasureIter
  @skia() public Font
  @skia() public Paint
  @skia() public Path
  @skia() public PictureRecorder
  @skia() public TextStyle
  @skia() public ParagraphBuilder
  @skia() public ColorFilter
  @skia() public FontMgr
  @skia() public ImageFilter
  @skia() public MaskFilter
  @skia() public PathEffect
  @skia() public RuntimeEffect
  @skia() public Shader
  @skia() public TextBlob
  @skia() public Typeface
  @skia() public TypefaceFontProvider
  @skia() public ColorMatrix
  @skia() public Matrix
  @skia() public M44
  @skia() public Vector
  @skia() public AlphaType
  @skia() public BlendMode
  @skia() public BlurStyle
  @skia() public ClipOp
  @skia() public ColorType
  @skia() public FillType
  @skia() public FilterMode
  @skia() public FontEdging
  @skia() public FontHinting
  @skia() public GlyphRunFlags
  @skia() public ImageFormat
  @skia() public MipmapMode
  @skia() public PaintStyle
  @skia() public PathOp
  @skia() public PointMode
  @skia() public ColorSpace
  @skia() public StrokeCap
  @skia() public StrokeJoin
  @skia() public TileMode
  @skia() public VertexMode
  @skia() public TRANSPARENT
  @skia() public BLACK
  @skia() public WHITE
  @skia() public RED
  @skia() public GREEN
  @skia() public BLUE
  @skia() public YELLOW
  @skia() public CYAN
  @skia() public MAGENTA
  @skia() public MOVE_VERB
  @skia() public LINE_VERB
  @skia() public QUAD_VERB
  @skia() public CONIC_VERB
  @skia() public CUBIC_VERB
  @skia() public CLOSE_VERB
  @skia() public SaveLayerInitWithPrevious
  @skia() public SaveLayerF16ColorType
  @skia() public ShadowTransparentOccluder
  @skia() public ShadowGeometricOnly
  @skia() public ShadowDirectionalLight
  @skia() public gpu
  @skia() public managed_skottie?
  @skia() public particles?
  @skia() public rt_effect?
  @skia() public skottie?
  @skia() public Affinity
  @skia() public DecorationStyle
  @skia() public FontSlant
  @skia() public FontWeight
  @skia() public FontWidth
  @skia() public PlaceholderAlignment
  @skia() public RectHeightStyle
  @skia() public RectWidthStyle
  @skia() public TextAlign
  @skia() public TextBaseline
  @skia() public TextDirection
  @skia() public TextHeightBehavior
  @skia() public NoDecoration
  @skia() public UnderlineDecoration
  @skia() public OverlineDecoration
  @skia() public LineThroughDecoration
}

export type {
  TonalColorsInput as ITonalColorsInput,
  VertexMode as VertexMode,
  PointMode as PointMode,
  PathOp as PathOp,
  Canvas as ICanvas,
  FilterMode as FilterMode,
} from 'canvaskit-wasm'