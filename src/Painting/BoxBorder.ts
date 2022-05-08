import { CkCanvas, CkPaint } from '@CanvasKit'
import { Rect } from '@UI'
import invariant from 'ts-invariant'
import { BorderStyle, ShapeBorder } from './Border'

export enum BoxShape {
  Rectangle,
  Circle
}

export abstract class BoxBorder extends ShapeBorder {
  static paintUniformBorderWithRadius (
    canvas: CkCanvas,
    rect: Rect,
    side,
    borderRadius
  ) {
    invariant(side.style !== BorderStyle.None)
    const paint = CkPaint.malloc()
    paint.color = side.color
    

  }

  static paintUniformBorderWithCircle (
    canvas: CkCanvas,
    rect: Rect,
    side,
    borderRadius
  ) {

  }

  static paintUniformBorderWithRectangle (
    canvas: CkCanvas,
    rect: Rect,
    side,
  ) {
    invariant(side.style !== BorderStyle.None)
    const paint = side.toPaint()

    canvas.drawRect(rect.deflate(side.width / 2), paint)
  }

  abstract paint (
    canvas: CkCanvas,
    rect: Rect, 
    textDirection?,
    shape?: BoxShape,
    borderRadius?
  )
}