import invariant from 'ts-invariant'
import { Skia } from '@Skia'
import { CkCanvas, CkPaint, CkPath } from '@CanvasKit'
import { Color, Rect } from '@UI'
import { BorderSide, BorderStyle, ShapeBorder } from './Border'
import { EdgeInsetsGeometry } from './EdgeInsets'

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


export class Border extends BoxBorder {
  static fromBorderSide (side: BorderSide) {
    invariant(side !== null)

    return new Border(
      side,
      side,
      side,
      side
    )
  }

  static symmetric (
    vertical = BorderSide.None,
    horizontal = BorderSide.None,
  ) {
    invariant(vertical !== null && horizontal !== null)
    return new Border(
      vertical,
      horizontal,
      vertical,
      horizontal
    )
  }

  static all (
    color = new Color(0xFF000000),
    width = 1.0,
    style = BorderStyle.Solid
  ) {
    const side = new BorderSide(
      color,
      width,
      style
    )

    return Border.fromBorderSide(side)
  }

  static merge (
    a: Border,
    b: Border
  ) {
    invariant(a !== null)
    invariant(b !== null)
    invariant(BorderSide.canMerge(a.top, b.top))
    invariant(BorderSide.canMerge(a.right, b.right))
    invariant(BorderSide.canMerge(a.bottom, b.bottom))
    invariant(BorderSide.canMerge(a.left, b.left))

    return new Border(
      BorderSide.merge(a.top, b.top),
      BorderSide.merge(a.right, b.right),
      BorderSide.merge(a.bottom, b.bottom),
      BorderSide.merge(a.left, b.left),
    )
  }

  public get dimensions (): EdgeInsetsGeometry {

  }

  public top: BorderSide
  public right: BorderSide
  public bottom: BorderSide
  public left: BorderSide

  constructor (
    top: BorderSide = BorderSide.None,
    right: BorderSide = BorderSide.None,
    bottom: BorderSide = BorderSide.None,
    left: BorderSide = BorderSide.None
  ) {
    super()
    this.top = BorderSide.None
    this.right = BorderSide.None
    this.bottom = BorderSide.None
    this.left = BorderSide.None
  }

  paint (
    canvas: CkCanvas, 
    rect: Rect, 
    textDirection?: any, 
    shape: BoxShape = BoxShape.Rectangle, 
    borderRadius?: any
  ) {
    
  }
}

export function paintBorder (
  canvas: CkCanvas,
  rect: Rect, 
  top: BorderSide = BorderSide.None,
  right: BorderSide = BorderSide.None,
  bottom: BorderSide = BorderSide.None,
  left: BorderSide = BorderSide.None,
) {
  invariant(canvas !== null)
  invariant(rect !== null)
  invariant(top !== null)
  invariant(right !== null)
  invariant(bottom !== null)
  invariant(left !== null)

  const paint = CkPaint.malloc()
  paint.strokeWidth = 0.0

  const path = CkPath.malloc()

  switch (top.style) {
    case BorderStyle.Solid: {
      paint.color = top.color
      path.reset()

      path.moveTo(rect.left, rect.top)
      path.lineTo(rect.right, rect.top)

      if (top.width == 0.0) {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style =  Skia.PaintStyle.Fill
        path.lineTo(rect.right - right.width, rect.top + top.width)
        path.lineTo(rect.left + left.width, rect.top + top.width)
      }
      canvas.drawPath(path, paint)
      break
    }
    case BorderStyle.None:
      break
  }

  switch (right.style) {
    case BorderStyle.Solid: {

      paint.color = right.color
      path.reset()
      path.moveTo(rect.right, rect.top)
      path.lineTo(rect.right, rect.bottom)
      
      if (right.width === 0.0)  {
        paint.style = Skia.PaintStyle.Stroke
      } else {
        paint.style = Skia.PaintStyle.Fill
        path.lineTo(rect.right - right.width, rect.bottom - bottom.width)
        path.lineTo(rect.right - right.width, rect.top + top.width)
      }
      
      canvas.drawPath(path, paint)
      break
    }
    case BorderStyle.None:
      break
  }

  switch (bottom.style) {
    case BorderStyle.solid:
      paint.color = bottom.color;
      path.reset();
      path.moveTo(rect.right, rect.bottom);
      path.lineTo(rect.left, rect.bottom);
      if (bottom.width == 0.0) {
        paint.style = PaintingStyle.stroke;
      } else {
        paint.style = PaintingStyle.fill;
        path.lineTo(rect.left + left.width, rect.bottom - bottom.width);
        path.lineTo(rect.right - right.width, rect.bottom - bottom.width);
      }
      canvas.drawPath(path, paint);
      break;
    case BorderStyle.none:
      break;
  }

  switch (left.style) {
    case BorderStyle.solid:
      paint.color = left.color;
      path.reset();
      path.moveTo(rect.left, rect.bottom);
      path.lineTo(rect.left, rect.top);
      if (left.width == 0.0) {
        paint.style = PaintingStyle.stroke;
      } else {
        paint.style = PaintingStyle.fill;
        path.lineTo(rect.left + left.width, rect.top + top.width);
        path.lineTo(rect.left + left.width, rect.bottom - bottom.width);
      }
      canvas.drawPath(path, paint);
      break;
    case BorderStyle.none:
      break;
  }
}
