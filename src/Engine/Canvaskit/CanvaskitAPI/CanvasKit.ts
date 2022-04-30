import CanvasKitInit, { CanvasKitInitOptions, CanvasKit } from 'canvaskit-wasm'

import type {
  BlendMode, 
  PaintingStyle,
  StrokeCap, 
  StrokeJoin,
  BlurStyle,
  TileMode,
  Offset
} from '@UI'
import type { 
  SkBlendMode,
  SkPaintStyle,
  SkStrokeCap,
  SkStrokeJoin,
  SkBlurStyle
} from '@Skia'
import { Float32List, Float64List } from '@Types'

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


export class CanvasKitAPI {
  static SkBlendMode: SkBlendMode[]
  static SkPaintStyle: SkPaintStyle[]
  static SkStrokeCap: SkStrokeCap[]
  static SkStrokeJoin: SkStrokeJoin[]
  static SkBlurStyle: SkBlurStyle[]
  static SkTileMode: SkBlendMode[]
  static SkMatrixIndexToMatrix4Index = [
    0, 4, 12, // Row 1
    1, 5, 13, // Row 2
    3, 7, 15, // Row 3
  ]
  
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
  static get SkFillType () {
    return CanvasKitAPI.CanvasKit.FillType
  }
  static get SkFilterMode () {
    return CanvasKitAPI.CanvasKit.FilterMode
  }
  static get SkMipmapMode () {
    return CanvasKitAPI.CanvasKit.MipmapMode
  }
  static get SkPathOp () {
    return CanvasKitAPI.CanvasKit.PathOp
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
}
