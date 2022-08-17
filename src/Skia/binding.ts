/*
 * @Author: Aniwei
 * @Date: 2022-08-15 10:10:17
 */
import CanvasKitInit, { CanvasKit } from 'canvaskit-wasm'
import type { CanvasKitInitOptions } from 'canvaskit-wasm'
import { FilterQuality } from '@skia'

export type SkiaOptions = {
  devicePixelRatio?: number
}

export class Skia implements CanvasKit {
  static binding: Skia
  /**
   * @description: 
   * @param {string} uri
   * @param {SkiaOptions} options
   * @return {*}
   */
  static init (
    uri: string, 
    options?: SkiaOptions
  ) {

    return (
      (CanvasKitInit as unknown as { (options: CanvasKitInitOptions): Promise<Skia> })({
        locateFile () {
          return uri
        }
      }).then((skia: CanvasKit) => {
        return new Skia(skia, options)
      })
    )
  }

  @binding() public Color
  @binding() public PictureRecorder
  @binding() public Path
  @binding() public Paint 
  @binding() public Shader
  @binding() public AlphaType
  @binding() public ColorType
  @binding() public ColorSpace
  @binding() public ColorFilter
  @binding() public PaintStyle
  @binding() public BlendMode
  @binding() public TileMode
  @binding() public ImageFilter
  @binding() public MaskFilter
  @binding() public FillType 
  @binding() public BlurStyle
  @binding() public StrokeCap
  @binding() public StrokeJoin
  @binding() public ClipOp
  @binding() public MipmapMode
  @binding() public FilterMode
  @binding() public TextDirection
  @binding() public computeTonalColors
  @binding() public MakeVertices 
  @binding() public MakeSurface
  @binding() public Free
  @binding() public Malloc
  @binding() public MakeLazyImageFromTextureSource
  @binding() public MakeAnimatedImageFromEncoded 
  @binding() public MakeOnScreenGLSurface
  @binding() public MakeGrContext
  @binding() public GetWebGLContext
  @binding() public MakeSWCanvasSurface
  @binding() public Color4f
  @binding() public ColorAsInt
  @binding() public getColorComponents
  @binding() public parseColorString
  @binding() public multiplyByAlpha
  @binding() public LTRBRect
  @binding() public XYWHRect
  @binding() public LTRBiRect
  @binding() public XYWHiRect
  @binding() public RRectXY
  @binding() public getShadowLocalBounds
  @binding() public MallocGlyphIDs
  @binding() public MakeCanvasSurface
  @binding() public MakeRasterDirectSurface
  @binding() public MakeWebGLCanvasSurface
  @binding() public MakeRenderTarget
  @binding() public deleteContext
  @binding() public getDecodeCacheLimitBytes
  @binding() public getDecodeCacheUsedBytes
  @binding() public setDecodeCacheLimitBytes
  @binding() public MakeCanvas
  @binding() public MakeImage
  @binding() public MakeImageFromEncoded
  @binding() public MakeImageFromCanvasImageSource
  @binding() public MakePicture
  @binding() public MakeAnimation
  @binding() public MakeManagedAnimation
  @binding() public MakeParticles
  @binding() public ImageData
  @binding() public ParagraphStyle
  @binding() public ContourMeasureIter
  @binding() public Font
  @binding() public TextStyle
  @binding() public ParagraphBuilder
  @binding() public FontMgr
  @binding() public PathEffect
  @binding() public RuntimeEffect
  @binding() public TextBlob
  @binding() public Typeface
  @binding() public TypefaceFontProvider
  @binding() public ColorMatrix
  @binding() public Matrix
  @binding() public M44
  @binding() public Vector
  @binding() public FontEdging
  @binding() public FontHinting
  @binding() public GlyphRunFlags
  @binding() public ImageFormat
  @binding() public PathOp
  @binding() public PointMode
  @binding() public VertexMode
  @binding() public TRANSPARENT
  @binding() public BLACK
  @binding() public WHITE
  @binding() public RED
  @binding() public GREEN
  @binding() public BLUE
  @binding() public YELLOW
  @binding() public CYAN
  @binding() public MAGENTA
  @binding() public MOVE_VERB
  @binding() public LINE_VERB
  @binding() public QUAD_VERB
  @binding() public CONIC_VERB
  @binding() public CUBIC_VERB
  @binding() public CLOSE_VERB
  @binding() public SaveLayerInitWithPrevious
  @binding() public SaveLayerF16ColorType
  @binding() public ShadowTransparentOccluder
  @binding() public ShadowGeometricOnly
  @binding() public ShadowDirectionalLight
  @binding() public gpu
  @binding() public managed_skottie
  @binding() public particles
  @binding() public rt_effect
  @binding() public skottie
  @binding() public Affinity
  @binding() public DecorationStyle
  @binding() public FontSlant
  @binding() public FontWeight
  @binding() public FontWidth
  @binding() public PlaceholderAlignment
  @binding() public RectHeightStyle
  @binding() public RectWidthStyle
  @binding() public TextAlign
  @binding() public TextBaseline
  @binding() public TextHeightBehavior
  @binding() public NoDecoration
  @binding() public UnderlineDecoration
  @binding() public OverlineDecoration
  @binding() public LineThroughDecoration

  public raw: CanvasKit
  public devicePixelRatio: number

  constructor (raw: CanvasKit, options?: SkiaOptions) {
    Skia.binding = this
    
    this.devicePixelRatio = options?.devicePixelRatio ?? 2.0
    this.raw = raw
  }
}

/**
 * @description: 绑定装饰器
 * @return {*}
 */
function binding () {
  return function (
    target,
    key: keyof CanvasKit
  ) {
    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(function (this: Skia) {
          return this.raw[key]
        }, this, [])
      }
    })
  }
}