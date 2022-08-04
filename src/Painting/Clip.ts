/*
 * @Author: Aniwei
 * @Date: 2022-07-04 12:10:21
 */
import invariant from 'ts-invariant'
import { Rect, RRect } from '@internal/Geometry'
import { Canvas } from '@rendering/Canvas'
import { Paint } from '@rendering/Paint'
import { Path } from '@rendering/Path'
import { Skia } from '@skia/Skia'
import { Clip } from '@basic/Painting'

import type { VoidCallback } from '@basic/Platform'

export abstract class ClipContext {
  abstract canvas: Canvas | null

  clipAndPaint (
    canvasClipCall: { (doAntiAlias: boolean): void },
    clipBehavior: Clip, 
    bounds: Rect, 
    painter: VoidCallback
  ) {
    invariant(canvasClipCall !== null)
    this.canvas?.save()
    switch (clipBehavior) {
      case Clip.None:
        break
      case Clip.HardEdge:
        canvasClipCall(false)
        break
      case Clip.AntiAlias:
        canvasClipCall(true)
        break
      case Clip.AntiAliasWithSaveLayer:
        canvasClipCall(true)
        this.canvas?.saveLayer(bounds, Paint.malloc())
        break
    }
    painter()
    if (clipBehavior === Clip.AntiAliasWithSaveLayer) {
      this.canvas?.restore()
    }
    this.canvas?.restore()
  }

  
  clipPathAndPaint (
    path: Path, 
    clipBehavior: Clip, 
    bounds: Rect, 
    painter: VoidCallback 
  ) {
    this.clipAndPaint(
      (doAntiAlias: boolean) => this.canvas?.clipPath(path, doAntiAlias), 
      clipBehavior, 
      bounds, 
      painter
    )
  }

  clipRRectAndPaint (
    rrect: RRect, 
    clipBehavior: Clip, 
    bounds: Rect, 
    painter: VoidCallback
  ) {
    this.clipAndPaint(
      (doAntiAlias: boolean) => this.canvas?.clipRRect(rrect, doAntiAlias), 
      clipBehavior, 
      bounds, 
      painter
    )
  }

  clipRectAndPaint (
    rect: Rect, 
    clipBehavior: Clip, 
    bounds: Rect, 
    painter: VoidCallback
  ) {
    this.clipAndPaint(
      (doAntiAlias: boolean) => this.canvas?.clipRect(rect, Skia.ClipOp.Intersect, doAntiAlias), 
      clipBehavior, 
      bounds, 
      painter
    )
  }
}
