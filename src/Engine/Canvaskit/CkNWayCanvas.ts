import { Rect, RRect } from '@UI';
import { CkCanvas } from './CkCanvas'

export class CkNWayCanvas {
  public canvases: CkCanvas[] = []
  
  addCanvas (canvas: CkCanvas) {
    this.canvases.push(canvas)
  }

  save (): number {
    let saveCount = 0;
    for (let i = 0; i < this.canvases.length; i++) {
      saveCount = this.canvases[i].save()
    }
    return saveCount
  }

  saveLayer (
    bounds: Rect, 
    paint?: CkPaint
  ) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].saveLayer(bounds, paint);
    }
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter,
    paint?: CkPaint
  ) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].saveLayerWithFilter(bounds, filter, paint)
    }
  }

  
  restore() {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].restore()
    }
  }

  restoreToCount (count: number) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].restoreToCount(count);
    }
  }

  translate (dx: number, dy: number) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].translate(dx, dy);
    }
  }

  transform (matrix) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].transform(matrix);
    }
  }

  clear (color: Color) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clear(color);
    }
  }

  clipPath (path: CkPath, doAntiAlias: boolean) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipPath(path, doAntiAlias);
    }
  }

  clipRect (
    rect: Rect, 
    clipOp: ClipOp, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipRect(rect, clipOp, doAntiAlias);
    }
  }

  
  clipRRect (
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.canvases.length; i++) {
      this.canvases[i].clipRRect(rrect, doAntiAlias);
    }
  }
}
