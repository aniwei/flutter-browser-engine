import CanvasKitInit, { CanvasKitInitOptions, CanvasKit } from 'canvaskit-wasm'

import {
  BlendMode, 
  PaintingStyle,
  StrokeCap, 
  StrokeJoin,
  BlurStyle,
  TileMode,
  Offset,
  Rect,
  Color,
  RRect,
  ClipOp,
  PathFillType,
  PathOperation,
  FilterQuality,
} from '@UI'
import { 
  Float32List, 
  Float64List 
} from '@Types'
import type { 
  SkBlendMode,
  SkPaintStyle,
  SkStrokeCap,
  SkStrokeJoin,
  SkBlurStyle,
  SkFloat32List,
  SkClipOp,
  SkFillType,
  SkPathOp,
  SkFilterMode,
  SkMipmapMode
} from './Skia'

type CanvasKitInitHandle = {
  (options: CanvasKitInitOptions): Promise<CanvasKit>
}

type CanvasKitProxify<T> = {
  [P in keyof T]: T[P]
}

export function Proxify<T> (CanvasKit: CanvasKit): CanvasKitProxify<T> {
  

  return new Proxy(<CanvasKitProxify<T>>(Object.create({
    
  })), {
    get (CanvasKitAPI, key) {
      if (key in CanvasKitAPI) {
        return CanvasKitAPI[key]
      }

      return CanvasKit[key]
    }
  })
}

class CkTransformFilterOptions {
  public filter: SkFilterMode
  public mipmap: SkMipmapMode

  constructor (
    filter,
    mipmap
  ) {
    this.filter = filter
    this.mipmap = mipmap
  }
}

class CkCubicFilterOptions {
  public B: number
  public C: number

  constructor (B, C) {
    this.B = B
    this.C = C
  }
}


export class CanvasKitAPI {
  static SkBlendMode: SkBlendMode[]
  static SkPaintStyle: SkPaintStyle[]
  static SkStrokeCap: SkStrokeCap[]
  static SkStrokeJoin: SkStrokeJoin[]
  static SkBlurStyle: SkBlurStyle[]
  static SkTileMode: SkBlendMode[]
  static SkClipOp: SkClipOp[]
  static SkFillType: SkFillType[]
  static SkPathOp: SkPathOp[]
  static SkFilterOptions: Map<FilterQuality, CkTransformFilterOptions | CkCubicFilterOptions>
  static SkMatrixIndexToMatrix4Index = [
    0, 4, 12, // Row 1
    1, 5, 13, // Row 2
    3, 7, 15, // Row 3
  ]

  static SkSharedSkColor1: SkFloat32List
  
  static CanvasKit: CanvasKit

  static CanvasKitInit (uri: string): Promise<CanvasKitProxify<CanvasKit>> {
    return (CanvasKitInit as unknown as CanvasKitInitHandle)({
      locateFile: () => {
        return uri
      }
    }).then((CanvasKit: CanvasKit) => {
      return Proxify<CanvasKit>(CanvasKit)
    }).then(CanvasKit => {
      CanvasKitAPI.CanvasKit = CanvasKit
      CanvasKitAPI.SkBlendMode = [
        CanvasKit.BlendMode.Clear,
        CanvasKit.BlendMode.Src,
        CanvasKit.BlendMode.Dst,
        CanvasKit.BlendMode.SrcOver,
        CanvasKit.BlendMode.DstOver,
        CanvasKit.BlendMode.SrcIn,
        CanvasKit.BlendMode.DstIn,
        CanvasKit.BlendMode.SrcOut,
        CanvasKit.BlendMode.DstOut,
        CanvasKit.BlendMode.SrcATop,
        CanvasKit.BlendMode.DstATop,
        CanvasKit.BlendMode.Xor,
        CanvasKit.BlendMode.Plus,
        CanvasKit.BlendMode.Modulate,
        CanvasKit.BlendMode.Screen,
        CanvasKit.BlendMode.Overlay,
        CanvasKit.BlendMode.Darken,
        CanvasKit.BlendMode.Lighten,
        CanvasKit.BlendMode.ColorDodge,
        CanvasKit.BlendMode.ColorBurn,
        CanvasKit.BlendMode.HardLight,
        CanvasKit.BlendMode.SoftLight,
        CanvasKit.BlendMode.Difference,
        CanvasKit.BlendMode.Exclusion,
        CanvasKit.BlendMode.Multiply,
        CanvasKit.BlendMode.Hue,
        CanvasKit.BlendMode.Saturation,
        CanvasKit.BlendMode.Color,
        CanvasKit.BlendMode.Luminosity,
      ]
      CanvasKitAPI.SkPaintStyle = [
        CanvasKit.PaintStyle.Fill,
        CanvasKit.PaintStyle.Stroke,
      ]
      CanvasKitAPI.SkStrokeCap = [
        CanvasKit.StrokeCap.Butt,
        CanvasKit.StrokeCap.Round,
        CanvasKit.StrokeCap.Square,
      ]
      CanvasKitAPI.SkStrokeJoin = [
        CanvasKit.StrokeJoin.Miter,
        CanvasKit.StrokeJoin.Round,
        CanvasKit.StrokeJoin.Bevel,
      ]
      CanvasKitAPI.SkBlurStyle = [
        CanvasKit.BlurStyle.Normal,
        CanvasKit.BlurStyle.Solid,
        CanvasKit.BlurStyle.Outer,
        CanvasKit.BlurStyle.Inner,
      ]
      CanvasKitAPI.SkTileMode = [
        CanvasKit.TileMode.Clamp,
        CanvasKit.TileMode.Repeat,
        CanvasKit.TileMode.Mirror,
        CanvasKit.TileMode.Decal,
      ]
      CanvasKitAPI.SkClipOp = [
        CanvasKit.ClipOp.Difference,
        CanvasKit.ClipOp.Intersect,
      ]
      CanvasKitAPI.SkFillType = [
        CanvasKit.FillType.Winding,
        CanvasKit.FillType.EvenOdd,
      ]
      CanvasKitAPI.SkPathOp = [
        CanvasKit.PathOp.Difference,
        CanvasKit.PathOp.Intersect,
        CanvasKit.PathOp.Union,
        CanvasKit.PathOp.XOR,
        CanvasKit.PathOp.ReverseDifference,
      ]
      CanvasKitAPI.SkSharedSkColor1 = CanvasKit.Malloc(Float32Array, 4)

      CanvasKitAPI.SkFilterOptions = new Map()
      CanvasKitAPI.SkFilterOptions.set(
        FilterQuality.none, 
        new CkTransformFilterOptions(
          CanvasKit.FilterMode.Nearest,
          CanvasKit.MipmapMode.None
        )
      )
      CanvasKitAPI.SkFilterOptions.set(
        FilterQuality.low, 
        new CkTransformFilterOptions(
          CanvasKit.FilterMode.Linear,
          CanvasKit.MipmapMode.None
        )
      )
      CanvasKitAPI.SkFilterOptions.set(
        FilterQuality.medium, 
        new CkTransformFilterOptions(
          CanvasKit.FilterMode.Linear,
          CanvasKit.MipmapMode.Linear
        )
      )
      CanvasKitAPI.SkFilterOptions.set(
        FilterQuality.high, 
        new CkCubicFilterOptions(
          1.0 / 3,
          1.0 / 3
        )
      )

      return CanvasKit
    })
  }

  static get SkParagraphStyle () {
    return CanvasKitAPI.CanvasKit.ParagraphStyle
  }
  static get SkContourMeasureIter () {
    return CanvasKitAPI.CanvasKit.ContourMeasureIter
  }
  static get SkFont () {
    return CanvasKitAPI.CanvasKit.Font
  }
  static get SkPaint () {
    return CanvasKitAPI.CanvasKit.Paint
  }
  static get SkPath () {
    return CanvasKitAPI.CanvasKit.Path
  }
  static get SkPictureRecorder () {
    return CanvasKitAPI.CanvasKit.PictureRecorder
  }
  static get SkTextStyle () {
    return CanvasKitAPI.CanvasKit.TextStyle
  }
  static get SkParagraphBuilder () {
    return CanvasKitAPI.CanvasKit.ParagraphBuilder
  }
  static get SkColorFilter () {
    return CanvasKitAPI.CanvasKit.ColorFilter
  }
  static get SkFontMgr () {
    return CanvasKitAPI.CanvasKit.FontMgr
  }
  static get SkImageFilter () {
    return CanvasKitAPI.CanvasKit.ImageFilter
  }
  static get SkMaskFilter () {
    return CanvasKitAPI.CanvasKit.MaskFilter
  }
  static get SkShader () {
    return CanvasKitAPI.CanvasKit.Shader
  }    
  static get SkTypeface () {
    return CanvasKitAPI.CanvasKit.Typeface
  }
  static get SkAlphaType () {
    return CanvasKitAPI.CanvasKit.AlphaType
  }
  static get SkColorType () {
    return CanvasKitAPI.CanvasKit.ColorType
  }
  static get SkFilterMode () {
    return CanvasKitAPI.CanvasKit.FilterMode
  }
  static get SkMipmapMode () {
    return CanvasKitAPI.CanvasKit.MipmapMode
  }
  static toSkRRect (rrect: RRect) {
    const skRRect = new Float32List(12)
    skRRect[0] = rrect.left
    skRRect[1] = rrect.top
    skRRect[2] = rrect.right
    skRRect[3] = rrect.bottom
    skRRect[4] = rrect.tlRadiusX
    skRRect[5] = rrect.tlRadiusY
    skRRect[6] = rrect.trRadiusX
    skRRect[7] = rrect.trRadiusY
    skRRect[8] = rrect.brRadiusX
    skRRect[9] = rrect.brRadiusY
    skRRect[10] = rrect.blRadiusX
    skRRect[11] = rrect.blRadiusY
    return skRRect
  }

  static toSkRect (rect: Rect): Float32List {
    const skRect = new Float32List(4)
    skRect[0] = rect.left
    skRect[1] = rect.top
    skRect[2] = rect.right
    skRect[3] = rect.bottom
    return skRect
  }

  static toSkClipOp (clipOp: ClipOp) {
    return CanvasKitAPI.SkClipOp[clipOp]
  }

  static toSkBlendMode = (blendMode: BlendMode) => {
    return CanvasKitAPI.SkBlendMode[blendMode]
  }

  static toSkPaintStyle (paintStyle: PaintingStyle) {
    return CanvasKitAPI.SkPaintStyle[paintStyle]
  }

  static toSkStrokeCap (strokeCap: StrokeCap) {
    return CanvasKitAPI.SkStrokeCap[strokeCap]
  }

  static toSkStrokeJoin (strokeJoin: StrokeJoin) {
    return CanvasKitAPI.SkStrokeJoin[strokeJoin]
  }

  static toSkBlurStyle (blurStyle: BlurStyle) {
    return CanvasKitAPI.SkBlurStyle[blurStyle]
  }

  static toSkTileMode (mode: TileMode) {
    return CanvasKitAPI.SkTileMode[mode]
  }

  static toSkPoint (offset: Offset) {
    const point: Float32List = new Float32List(2)
    point[0] = offset.dx
    point[1] = offset.dy
    return point
  }

  static toSkMatrixFromFloat64 (matrix4: Float64List) {
    const skMatrix: Float32List = new Float32List(9)
    for (let i = 0; i < 9; ++i) {
      const matrix4Index = CanvasKitAPI.SkMatrixIndexToMatrix4Index[i]
      if (matrix4Index < matrix4.length) {
        skMatrix[i] = matrix4[matrix4Index]
      } else {
        skMatrix[i] = 0.0
      }
    }
    return skMatrix
  }

  static populateSkColor (skColor: SkFloat32List, color: Color) {
    const array = skColor.toTypedArray()
    array[0] = color.red / 255.0;
    array[1] = color.green / 255.0;
    array[2] = color.blue / 255.0;
    array[3] = color.alpha / 255.0;
    return array as Float32List
  }

  static toSharedSkColor1 (color: Color): Float32List {
    return CanvasKitAPI.populateSkColor(
      CanvasKitAPI.SkSharedSkColor1, 
      color
    )
  }

  static toSkM44FromFloat32 (matrix4: Float32List) {
    const skM44 = new Float32List(16)
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        skM44[c * 4 + r] = matrix4[r * 4 + c]
      }
    }
    return skM44
  }

  static toSkFillType (fillType: PathFillType) {
    return CanvasKitAPI.SkFillType[fillType]
  }

  static toSkMatrixFromFloat32 (matrix4: Float32List) {
    const skMatrix = new Float32List(9)
    for (let i = 0; i < 9; ++i) {
      const matrix4Index = CanvasKitAPI.SkMatrixIndexToMatrix4Index[i]
      if (matrix4Index < matrix4.length)
        skMatrix[i] = matrix4[matrix4Index]
      else
        skMatrix[i] = 0.0
    }
    return skMatrix
  }

  static toMallocedSkPoints (points: Offset[]) {
    const len = points.length
    const skPoints = CanvasKitAPI.CanvasKit.Malloc(Float32Array, len * 2);
    const list = skPoints.toTypedArray()
    for (let i = 0; i < len; i++) {
      list[2 * i] = points[i].dx
      list[2 * i + 1] = points[i].dy
    }
    return skPoints
  }

  static freeFloat32List (mallocObj) {
    CanvasKitAPI.CanvasKit.Free(mallocObj)
  }

  static fromSkRect (skRect: Float32List) {
    return Rect.fromLTRB(skRect[0], skRect[1], skRect[2], skRect[3])
  }

  static toSkPathOp (pathOp: PathOperation) {
    return CanvasKitAPI.SkPathOp[pathOp]
  }

  static toSkFilterOptions (filterQuality: FilterQuality) {
    return CanvasKitAPI.SkFilterOptions.get(filterQuality)
  }
}
