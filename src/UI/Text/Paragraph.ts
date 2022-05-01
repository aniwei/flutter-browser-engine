import { BoxHeightStyle, BoxWidthStyle } from "."
import { Offset } from "../Geometry"
import { LineMetrics } from "./LineMetrics"
import { ParagraphConstraints } from "./ParagraphConstraints"
import { TextBox } from "./TextBox"
import { TextPosition } from "./TextPosition"
import { TextRange } from "./TextRange"

export abstract class Paragraph {
  abstract width: number
  abstract height: number
  abstract longestLine: number
  abstract minIntrinsicWidth: number
  abstract maxIntrinsicWidth: number
  abstract alphabeticBaseline: number
  abstract ideographicBaseline: number
  abstract didExceedMaxLines: boolean
  abstract layout (constraints: ParagraphConstraints): void 
  abstract getBoxesForRange (
    start: number, 
    end: number,
    boxHeightStyle: BoxHeightStyle.tight,
    boxWidthStyle: BoxWidthStyle.tight
  ): TextBox[]

  abstract getPositionForOffset (offset: Offset): TextPosition
  abstract getWordBoundary (position: TextPosition): TextRange
  abstract getLineBoundary (position: TextPosition): TextRange
  abstract getBoxesForPlaceholders (): TextBox[]
  abstract computeLineMetrics (): LineMetrics[]
}