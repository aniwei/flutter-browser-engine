import { Color, Rect, RRect, ClipOp, ImageFilter } from '@UI'
import { CkCanvas } from '../Canvas/CvCanvas'
import { CkPaint } from '../Painting'
import { CkPath } from '../Path'

export class CkNWayCanvas {
  public canvases: CkCanvas[] = []

  addCanvas (canvas: CkCanvas): void {
    this.canvases.push(canvas)
  }

  save (): number {
    let saveCount = 0
    for (let i = 0; i < this.canvases.length; i++) {
      saveCount = this.canvases[i].save()
    }
    return saveCount
  }

  
  saveLayer (bounds: Rect, paint: CkPaint | null = null): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].saveLayer(bounds, paint)
    }
  }

  saveLayerWithFilter (bounds: Rect, filter: ImageFilter, paint?: CkPaint) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].saveLayerWithFilter(bounds, filter, paint)
    }
  }

  restore (): void  {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].restore()
    }
  }

  restoreToCount (count: number): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].restoreToCount(count)
    }
  }

  translate (dx: number, dy: number): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].translate(dx, dy)
    }
  }

  /// Calls [transform] on all canvases.
  transform(matrix: Float32List): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].transform(matrix)
    }
  }

  /// Calls [clear] on all canvases.
  clear ( color: Color): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clear(color)
    }
  }

  /// Calls [clipPath] on all canvases.
  clipPath (path: CkPath, doAntiAlias: boolean): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipPath(path, doAntiAlias)
    }
  }

  /// Calls [clipRect] on all canvases.
  clipRect(rect: Rect, clipOp: ClipOp, doAntiAlias: boolean): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipRect(rect, clipOp, doAntiAlias)
    }
  }

  /// Calls [clipRRect] on all canvases.
  clipRRect(rrect: RRect, doAntiAlias: boolean): void {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipRRect(rrect, doAntiAlias)
    }
  }
}
