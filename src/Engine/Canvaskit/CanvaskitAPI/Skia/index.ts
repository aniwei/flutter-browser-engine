import { 
  Path,
  Paint,
  Image,
  Shader,
  Canvas,
  Surface,
  TextStyle,
  BlendMode,
  MallocObj,
  PaintStyle,
  FontWeight,
  ParagraphStyle,
  GrDirectContext,
  StrokeCap,
  StrokeJoin,
  ImageFilter,
  MaskFilter,
  BlurStyle,
  EmbindObject
} from 'canvaskit-wasm'

export type SkPath = Path
export type SkPaint = Paint
export type SkImage = Image
export type SkCanvas = Canvas
export type SkShader = Shader
export type SkBlendMode = BlendMode
export type SkSuface = Surface
export type SkTextStyle = TextStyle
export type SkStrokeCap = StrokeCap
export type SkPaintStyle = PaintStyle
export type SkStrokeJoin = StrokeJoin
export type SkFontWeight = FontWeight
export type SkFloat32List = MallocObj
export type SkGrContext = GrDirectContext
export type SkParagraphStyle = ParagraphStyle
export type SkImageFilter = ImageFilter
export type SkMaskFilter = MaskFilter
export type SkBlurStyle = BlurStyle
export type SkDeletable = EmbindObject<SkPath | SkPaint>
