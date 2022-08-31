/*
 * @Author: Aniwei
 * @Date: 2022-08-15 10:10:17
 */
import CanvasKitInit from 'canvaskit-wasm'

import type { AffinityEnumValues, AlphaTypeEnumValues, AnimatedImage, BlendModeEnumValues, BlurStyleEnumValues, CanvasKit, ClipOpEnumValues, ColorFilterFactory, ColorIntArray, ColorMatrixHelpers, ColorSpace, ColorSpaceEnumValues, ColorTypeEnumValues, ContourMeasureIterConstructor, DecorationStyleEnumValues, DefaultConstructor, EmbindEnumEntity, EmulatedCanvas2D, FillTypeEnumValues, FilterModeEnumValues, FontConstructor, FontEdgingEnumValues, FontHintingEnumValues, FontMgrFactory, FontSlantEnumValues, FontWeightEnumValues, FontWidthEnumValues, GlyphRunFlagValues, GrDirectContext, Image, ImageDataConstructor, ImageFilterFactory, ImageFormatEnumValues, ImageInfo, InputFlattenedPointArray, InputMatrix, InputRect, InputVector3, MallocObj, ManagedSkottieAnimation, MaskFilterFactory, Matrix3x3Helpers, Matrix4x4Helpers, MipmapModeEnumValues, Paint, PaintStyleEnumValues, ParagraphBuilderFactory, ParagraphStyleConstructor, PartialImageInfo, Particles, Path, PathConstructorAndFactory, PathEffectFactory, PathOpEnumValues, PictureRecorder, PlaceholderAlignmentEnumValues, PointModeEnumValues, RectHeightStyleEnumValues, RectWidthStyleEnumValues, RuntimeEffectFactory, ShaderFactory, SkottieAnimation, SkPicture, SoundMap, StrokeCapEnumValues, StrokeJoinEnumValues, Surface, TextAlignEnumValues, TextBaselineEnumValues, TextBlobFactory, TextDirectionEnumValues, TextHeightBehaviorEnumValues, TextStyleConstructor, TextureSource, TileModeEnumValues, TonalColorsInput, TonalColorsOutput, TypedArrayConstructor, TypefaceFactory, TypefaceFontProviderFactory, VectorHelpers, VertexModeEnumValues, Vertices, WebGLOptions } from 'canvaskit-wasm'
import type { CanvasKitInitOptions } from 'canvaskit-wasm'
import { AbstractFonts, Fonts } from './Fonts'

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

  public get ImageData (): ImageDataConstructor {
    return this.raw.ImageData
  }

  public get ParagraphStyle (): ParagraphStyleConstructor {
    return this.raw.ParagraphStyle
  }

  public get ContourMeasureIter (): ContourMeasureIterConstructor {
    return this.raw.ContourMeasureIter
  }

  public get Font (): FontConstructor {
    return this.raw.Font
  }

  public get Paint (): DefaultConstructor<Paint> {
    return this.raw.Paint
  }

  public get Path (): PathConstructorAndFactory {
    return this.raw.Path
  }

  public get PictureRecorder (): DefaultConstructor<PictureRecorder> {
    return this.raw.PictureRecorder
  }

  public get TextStyle (): TextStyleConstructor {
    return this.raw.TextStyle
  }

  public get ParagraphBuilder (): ParagraphBuilderFactory {
    return this.raw.ParagraphBuilder
  }

  public get ColorFilter (): ColorFilterFactory {
    return this.raw.ColorFilter
  }

  public get FontMgr (): FontMgrFactory {
    return this.raw.FontMgr
  }

  public get ImageFilter (): ImageFilterFactory {
    return this.raw.ImageFilter
  }

  public get MaskFilter (): MaskFilterFactory {
    return this.raw.MaskFilter
  }

  public get PathEffect (): PathEffectFactory {
    return this.raw.PathEffect
  }

  public get RuntimeEffect (): RuntimeEffectFactory {
    return this.raw.RuntimeEffect
  }

  public get Shader (): ShaderFactory {
    return this.raw.Shader
  }

  public get TextBlob (): TextBlobFactory {
    return this.raw.TextBlob
  }

  public get Typeface (): TypefaceFactory {
    return this.raw.Typeface
  }

  public get TypefaceFontProvider (): TypefaceFontProviderFactory {
    return this.raw.TypefaceFontProvider
  }

  public get ColorMatrix (): ColorMatrixHelpers {
    return this.raw.ColorMatrix
  }

  public get Matrix (): Matrix3x3Helpers {
    return this.raw.Matrix
  }

  public get M44 (): Matrix4x4Helpers {
    return this.raw.M44
  }

  public get Vector (): VectorHelpers {
    return this.raw.Vector
  }

  public get AlphaType (): AlphaTypeEnumValues {
    return this.raw.AlphaType
  }

  public get BlendMode (): BlendModeEnumValues {
    return this.raw.BlendMode
  }

  public get BlurStyle (): BlurStyleEnumValues {
    return this.raw.BlurStyle
  }

  public get ClipOp (): ClipOpEnumValues {
    return this.raw.ClipOp
  }

  public get ColorType (): ColorTypeEnumValues {
    return this.raw.ColorType
  }

  public get FillType (): FillTypeEnumValues {
    return this.raw.FillType
  }

  public get FilterMode (): FilterModeEnumValues {
    return this.raw.FilterMode
  }

  public get FontEdging (): FontEdgingEnumValues {
    return this.raw.FontEdging
  }

  public get FontHinting (): FontHintingEnumValues {
    return this.raw.FontHinting
  }

  public get GlyphRunFlags (): GlyphRunFlagValues {
    return this.raw.GlyphRunFlags
  }

  public get ImageFormat (): ImageFormatEnumValues {
    return this.raw.ImageFormat
  }

  public get MipmapMode (): MipmapModeEnumValues {
    return this.raw.MipmapMode
  }

  public get PaintStyle (): PaintStyleEnumValues {
    return this.raw.PaintStyle
  }

  public get PathOp (): PathOpEnumValues {
    return this.raw.PathOp
  }

  public get PointMode (): PointModeEnumValues {
    return this.raw.PointMode
  }

  public get ColorSpace (): ColorSpaceEnumValues {
    return this.raw.ColorSpace
  }

  public get StrokeCap (): StrokeCapEnumValues {
    return this.raw.StrokeCap
  }

  public get StrokeJoin (): StrokeJoinEnumValues {
    return this.raw.StrokeJoin
  }

  public get TileMode (): TileModeEnumValues {
    return this.raw.TileMode
  }

  public get VertexMode (): VertexModeEnumValues {
    return this.raw.VertexMode
  }

  public get TRANSPARENT (): Float32Array {
    return this.raw.TRANSPARENT
  }

  public get BLACK (): Float32Array {
    return this.raw.BLACK
  }

  public get WHITE (): Float32Array {
    return this.raw.WHITE
  }

  public get RED (): Float32Array {
    return this.raw.RED
  }

  public get GREEN (): Float32Array {
    return this.raw.GREEN
  }

  public get BLUE (): Float32Array {
    return this.raw.BLUE
  }

  public get YELLOW (): Float32Array {
    return this.raw.YELLOW
  }

  public get CYAN (): Float32Array {
    return this.raw.CYAN
  }

  public get MAGENTA (): Float32Array {
    return this.raw.MAGENTA
  }

  public get MOVE_VERB (): number {
    return this.raw.MOVE_VERB
  }

  public get LINE_VERB (): number {
    return this.raw.LINE_VERB
  }

  public get QUAD_VERB (): number {
    return this.raw.QUAD_VERB
  }

  public get CONIC_VERB (): number {
    return this.raw.CONIC_VERB
  }

  public get CUBIC_VERB (): number {
    return this.raw.CUBIC_VERB
  }

  public get CLOSE_VERB (): number {
    return this.raw.CLOSE_VERB
  }

  public get SaveLayerInitWithPrevious (): number {
    return this.raw.SaveLayerInitWithPrevious
  }

  public get SaveLayerF16ColorType (): number {
    return this.raw.SaveLayerF16ColorType
  }

  public get ShadowTransparentOccluder (): number {
    return this.raw.ShadowTransparentOccluder
  }

  public get ShadowGeometricOnly (): number {
    return this.raw.ShadowGeometricOnly
  }

  public get ShadowDirectionalLight (): number {
    return this.raw.ShadowDirectionalLight
  }

  public get gpu (): boolean | undefined {
    return this.raw.gpu
  }

  public get managed_skottie (): boolean | undefined {
    return this.raw.managed_skottie
  }

  public get particles (): boolean | undefined {
    return this.raw.particles
  }

  public get rt_effect (): boolean | undefined {
    return this.raw.rt_effect
  }

  public get skottie (): boolean | undefined {
    return this.raw.skottie
  }

  public get Affinity (): AffinityEnumValues {
    return this.raw.Affinity
  }

  public get DecorationStyle (): DecorationStyleEnumValues {
    return this.raw.DecorationStyle
  }

  public get FontSlant (): FontSlantEnumValues {
    return this.raw.FontSlant
  }

  public get FontWeight (): FontWeightEnumValues {
    return this.raw.FontWeight
  }

  public get FontWidth (): FontWidthEnumValues {
    return this.raw.FontWidth
  }

  public get PlaceholderAlignment (): PlaceholderAlignmentEnumValues {
    return this.raw.PlaceholderAlignment
  }

  public get RectHeightStyle (): RectHeightStyleEnumValues {
    return this.raw.RectHeightStyle
  }

  public get RectWidthStyle (): RectWidthStyleEnumValues {
    return this.raw.RectWidthStyle
  }

  public get TextAlign (): TextAlignEnumValues {
    return this.raw.TextAlign
  }

  public get TextBaseline (): TextBaselineEnumValues {
    return this.raw.TextBaseline
  }

  public get TextDirection (): TextDirectionEnumValues {
    return this.raw.TextDirection
  }

  public get TextHeightBehavior (): TextHeightBehaviorEnumValues {
    return this.raw.TextHeightBehavior
  }

  public get NoDecoration (): number {
    return this.raw.NoDecoration
  }

  public get UnderlineDecoration (): number {
    return this.raw.UnderlineDecoration
  }

  public get OverlineDecoration (): number {
    return this.raw.OverlineDecoration
  }

  public get LineThroughDecoration (): number {
    return this.raw.LineThroughDecoration
  }
  
  // === fontCollection
  public get fontCollection () {
    return this._fontCollection ?? (this._fontCollection = new Fonts())
  }
  private _fontCollection: AbstractFonts | null = null

  public raw: CanvasKit
  public devicePixelRatio: number

  constructor (raw: CanvasKit, options?: SkiaOptions) {
    Skia.binding = this
    
    this.raw = raw
    this.devicePixelRatio = options?.devicePixelRatio ?? 2.0
  }
  /**
   * @description: 
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @param {number} a
   * @return {*}
   */  
  Color (r: number, g: number, b: number, a?: number | undefined): Float32Array {
    return this.raw.Color(r, g, b, a)
  }
  
  /**
   * @description: 
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @param {number} a
   * @return {*}
   */
  Color4f (r: number, g: number, b: number, a?: number | undefined): Float32Array {
    return this.raw.Color4f(r, g, b, a)
  }
  
  /**
   * @description: 
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @param {number} a
   * @return {*}
   */
  ColorAsInt (r: number, g: number, b: number, a?: number | undefined): number {
    return this.raw.ColorAsInt(r, g, b, a)
  }
  /**
   * @description: 
   * @param {Float32Array} c
   * @return {*}
   */  
  getColorComponents (c: Float32Array): number[] {
    return this.raw.getColorComponents(c)
  }
  /**
   * @description: 
   * @param {string} color
   * @param {Record} colorMap
   * @param {*} Float32Array
   * @return {*}
   */  
  parseColorString (color: string, colorMap?: Record<string, Float32Array> | undefined): Float32Array {
    return this.raw.parseColorString(color, colorMap)
  }

  /**
   * @description: 
   * @param {Float32Array} c
   * @param {number} alpha
   * @return {*}
   */  
  multiplyByAlpha (c: Float32Array, alpha: number): Float32Array {
    return this.raw.multiplyByAlpha(c, alpha)
  }

  /**
   * @description: 
   * @param {TonalColorsInput} colors
   * @return {*}
   */  
  computeTonalColors (colors: TonalColorsInput): TonalColorsOutput {
    return this.raw.computeTonalColors(colors)
  }

  /**
   * @description: 
   * @param {number} left
   * @param {number} top
   * @param {number} right
   * @param {number} bottom
   * @return {*}
   */  
  LTRBRect (left: number, top: number, right: number, bottom: number): Float32Array {
    return this.raw.LTRBRect(left, top, right, bottom)
  }
  /**
   * @description: 
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @return {*}
   */  
  XYWHRect (x: number, y: number, width: number, height: number): Float32Array {
    return this.raw.XYWHRect(x, y, width, height)
  }

  /**
   * @description: 
   * @param {number} left
   * @param {number} top
   * @param {number} right
   * @param {number} bottom
   * @return {*}
   */  
  LTRBiRect (left: number, top: number, right: number, bottom: number): Int32Array {
    return this.LTRBiRect(left, top, right, bottom)
  }

  /**
   * @description: 
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @return {*}
   */  
  XYWHiRect(x: number, y: number, width: number, height: number): Int32Array {
    return this.XYWHiRect(x, y, width, height)
  }
  /**
   * @description: 
   * @param {InputRect} rect
   * @param {number} rx
   * @param {number} ry
   * @return {*}
   */  
  RRectXY (rect: InputRect, rx: number, ry: number): Float32Array {
    return this.raw.RRectXY(rect, rx, ry)
  }
  /**
   * @description: 
   * @param {InputMatrix} ctm
   * @param {Path} path
   * @param {InputVector3} zPlaneParams
   * @param {InputVector3} lightPos
   * @param {number} lightRadius
   * @param {number} flags
   * @param {Float32Array} dstRect
   * @return {*}
   */  
  getShadowLocalBounds (ctm: InputMatrix, path: Path, zPlaneParams: InputVector3, lightPos: InputVector3, lightRadius: number, flags: number, dstRect?: Float32Array | undefined): Float32Array | null {
    return this.raw.getShadowLocalBounds(ctm, path, zPlaneParams, lightPos, lightRadius, flags, dstRect)
  }

  /**
   * @description: 
   * @param {TypedArrayConstructor} typedArray
   * @param {number} len
   * @return {*}
   */  
  Malloc (typedArray: TypedArrayConstructor, length: number): MallocObj {
    return this.raw.Malloc(typedArray, length)
  }

  /**
   * @description: 
   * @param {number} len
   * @return {*}
   */  
  MallocGlyphIDs (length: number): MallocObj {
    return this.raw.MallocGlyphIDs(length)
  }

  /**
   * @description: 
   * @param {MallocObj} m
   * @return {*}
   */  
  Free (m: MallocObj): void {
    return this.raw.Free(m)
  }

  /**
   * @description: 
   * @param {string} canvas
   * @return {*}
   */  
  MakeCanvasSurface (canvas: string | HTMLCanvasElement): Surface | null {
    return this.raw.MakeCanvasSurface(canvas)
  }

  /**
   * @description: 
   * @param {ImageInfo} ii
   * @param {MallocObj} pixels
   * @param {number} bytesPerRow
   * @return {*}
   */  
  MakeRasterDirectSurface (ii: ImageInfo, pixels: MallocObj, bytesPerRow: number): Surface | null {
    return this.raw.MakeRasterDirectSurface(ii, pixels, bytesPerRow)
  }

  /**
   * @description: 
   * @param {string} canvas
   * @return {*}
   */  
  MakeSWCanvasSurface (canvas: string | HTMLCanvasElement): Surface | null {
    return this.raw.MakeSWCanvasSurface(canvas)
  }

  /**
   * @description: 
   * @param {string} canvas
   * @param {ColorSpace} colorSpace
   * @param {WebGLOptions} opts
   * @return {*}
   */  
  MakeWebGLCanvasSurface (canvas: string | HTMLCanvasElement, colorSpace?: ColorSpace | undefined, opts?: WebGLOptions | undefined): Surface | null {
    return this.raw.MakeWebGLCanvasSurface(canvas, colorSpace, opts)
  }

  /**
   * @description: 
   * @param {number} width
   * @param {number} height
   * @return {*}
   */  
  MakeSurface (width: number, height: number): Surface | null {
    return this.raw.MakeSurface(width, height)
  }

  /**
   * @description: 
   * @param {HTMLCanvasElement} canvas
   * @param {WebGLOptions} opts
   * @return {*}
   */  
  GetWebGLContext (canvas: HTMLCanvasElement, opts?: WebGLOptions | undefined): number {
    return this.raw.GetWebGLContext(canvas, opts)
  }

  /**
   * @description: 
   * @param {number} ctx
   * @return {*}
   */  
  MakeGrContext (ctx: number): GrDirectContext | null {
    return this.raw.MakeGrContext(ctx)
  }

  /**
   * @description: 
   * @param {GrDirectContext} ctx
   * @param {number} width
   * @param {number} height
   * @param {ColorSpace} colorSpace
   * @return {*}
   */  
  MakeOnScreenGLSurface (ctx: GrDirectContext, width: number, height: number, colorSpace: ColorSpace): Surface | null {
    return this.raw.MakeOnScreenGLSurface(ctx, width, height, colorSpace)
  }
  
  /**
   * @description: 
   * @return {*}
   */  
  MakeRenderTarget (ctx: GrDirectContext, width: number, height: number): Surface | null
  MakeRenderTarget (ctx: GrDirectContext, info: ImageInfo): Surface | null
  MakeRenderTarget (ctx: GrDirectContext, width: unknown, height?: unknown): Surface | null {
    if (height === undefined) {
      return this.raw.MakeRenderTarget(ctx, width as ImageInfo)
    } else {
      return this.raw.MakeRenderTarget(ctx, width as number, height as number)
    }
  }

  /**
   * @description: 
   * @param {TextureSource} src
   * @param {ImageInfo} info
   * @return {*}
   */  
  MakeLazyImageFromTextureSource (src: TextureSource, info?: ImageInfo | PartialImageInfo | undefined): Image {
    return this.raw.MakeLazyImageFromTextureSource(src, info)
  }

  /**
   * @description: 
   * @param {number} ctx
   * @return {*}
   */  
  deleteContext (ctx: number): void {
    return this.raw.deleteContext(ctx)
  }
  /**
   * @description: 
   * @return {*}
   */  
  getDecodeCacheLimitBytes (): number {
    return this.raw.getDecodeCacheLimitBytes()
  }

  /**
   * @description: 
   * @return {*}
   */  
  getDecodeCacheUsedBytes (): number {
    return this.raw.getDecodeCacheUsedBytes()
  }

  setDecodeCacheLimitBytes (size: number): void {
    return this.raw.setDecodeCacheLimitBytes(size)
  }

  /**
   * @description: 
   * @param {ArrayBuffer} bytes
   * @return {*}
   */  
  MakeAnimatedImageFromEncoded (bytes: ArrayBuffer | Uint8Array): AnimatedImage | null {
    return this.raw.MakeAnimatedImageFromEncoded(bytes)
  }

  /**
   * @description: 
   * @param {number} width
   * @param {number} height
   * @return {*}
   */  
  MakeCanvas (width: number, height: number): EmulatedCanvas2D {
    return this.raw.MakeCanvas(width, height)
  }

  /**
   * @description: 
   * @param {ImageInfo} info
   * @param {number} bytes
   * @param {number} bytesPerRow
   * @return {*}
   */  
  MakeImage (info: ImageInfo, bytes: number[] | Uint8Array | Uint8ClampedArray, bytesPerRow: number): Image | null {
    return this.raw.MakeImage(info, bytes, bytesPerRow)
  }

  /**
   * @description: 
   * @param {ArrayBuffer} bytes
   * @return {*}
   */  
  MakeImageFromEncoded (bytes: ArrayBuffer | Uint8Array): Image | null {
    return this.raw.MakeImageFromEncoded(bytes)
  }

  /**
   * @description: 
   * @param {CanvasImageSource} src
   * @return {*}
   */  
  MakeImageFromCanvasImageSource (src: CanvasImageSource): Image {
    return this.raw.MakeImageFromCanvasImageSource(src)
  }

  /**
   * @description: 
   * @param {ArrayBuffer} bytes
   * @return {*}
   */  
  MakePicture (bytes: ArrayBuffer | Uint8Array): SkPicture | null {
    return this.raw.MakePicture(bytes)
  }

  /**
   * @description: 
   * @param {EmbindEnumEntity} mode
   * @param {InputFlattenedPointArray} positions
   * @param {InputFlattenedPointArray} textureCoordinates
   * @param {Float32Array} colors
   * @param {number} indices
   * @param {boolean} isVolatile
   * @return {*}
   */  
  MakeVertices (mode: EmbindEnumEntity, positions: InputFlattenedPointArray, textureCoordinates?: InputFlattenedPointArray | null | undefined, colors?: Float32Array | ColorIntArray | null | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined): Vertices {
    return this.raw.MakeVertices(mode, positions, textureCoordinates)
  }

  /**
   * @description: 
   * @param {string} json
   * @return {*}
   */  
  MakeAnimation(json: string): SkottieAnimation {
    return this.raw.MakeAnimation(json)
  }
  /**
   * @description: 
   * @param {string} json
   * @param {Record} assets
   * @param {*} ArrayBuffer
   * @param {string} filterPrefix
   * @param {SoundMap} soundMap
   * @return {*}
   */  
  MakeManagedAnimation (json: string, assets?: Record<string, ArrayBuffer> | undefined, filterPrefix?: string | undefined, soundMap?: SoundMap | undefined): ManagedSkottieAnimation {
    return this.raw.MakeManagedAnimation(json, assets)
  }

  /**
   * @description: 
   * @param {string} json
   * @param {Record} assets
   * @param {*} ArrayBuffer
   * @return {*}
   */  
  MakeParticles (json: string, assets?: Record<string, ArrayBuffer> | undefined): Particles {
    return this.raw.MakeParticles(json, assets)
  }
}
