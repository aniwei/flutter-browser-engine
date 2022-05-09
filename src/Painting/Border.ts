import { CkCanvas, CkPaint, CkPath } from '@CanvasKit'
import { Rect } from '@UI'
import { Skia } from '@Skia'
import { ColorInt } from 'canvaskit-wasm'
import { Paint } from './Paint'

export enum BorderStyle {
  None,
  Solid
}

export abstract class ShapeBorder {
  public dimensions
  
  abstract scale (t: number)

  abstract getOuterPath(
    rect: Rect, 
    textDirection?
  ): CkPath
  
  abstract getInnerPath(
    rect: Rect, 
    textDirection
  ): CkPath 
  
  abstract paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection
  )

  
  toString () {
    return `[Painting ShapeBorder]`
  }
}


export class BorderSide implements Paint {
  static None = new BorderSide(0, BorderStyle.None)

  public width: number = 1.0
  public style: BorderStyle
  public color: ColorInt

  constructor (
    width: number,
    style: BorderStyle,
    color?: Color,
  ) {
    this.width = width
    this.style = style
    this.color = color
  }

  toPaint (): Paint {
    switch (this.style) {
      case BorderStyle.Solid: {
        const paint = CkPaint.malloc()
        paint.color = this.color
        paint.strokeWidth = this.width
        paint.style = Skia.PaintStyle.Stroke

        break
      }

      case BorderStyle.None: {
        break
      }
    }
  }
}