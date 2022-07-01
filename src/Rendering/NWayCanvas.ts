import { SkiaClipOp } from '@skia/Skia'
import { Rect, RRect } from '@internal/Geometry'
import { Path } from './Path'
import { Paint } from './Paint'
import { Canvas } from './Canvas'
import { Color } from './Painting'
import { ImageFilter } from './ImageFilter'

export class NWayCanvas extends Array<Canvas> {

  addCanvas (canvas: Canvas) {
    this.push(canvas)
  }

  save (): number {
    let saveCount = 0
    for (let i = 0; i < this.length; i++) {
      saveCount = this[i].save()
    }

    return saveCount
  }

  saveLayer (
    bounds: Rect, 
    paint?: Paint | null
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].saveLayer(bounds, paint as Paint)
    }
  }

  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter,
    paint?: Paint | null
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].saveLayerWithFilter(bounds, filter, paint as Paint)
    }
  }

  restore () {
    for (let i = 0; i < this.length; i++) {
      this[i].restore()
    }
  }

  restoreToCount (count: number) {
    for (let i = 0; i < this.length; i++) {
      this[i].restoreToCount(count)
    }
  }

  translate (
    dx: number, 
    dy: number
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].translate(dx, dy)
    }
  }

  transform (matrix: Float64Array) {
    for (let i = 0; i < this.length; i++) {
      this[i].transform(matrix)
    }
  }

  /// Calls [clear] on all canvases.
  clear (color: Color) {
    for (let i = 0; i < this.length; i++) {
      this[i].clear(color)
    }
  }

  clipPath (
    path: Path, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipPath(path, doAntiAlias)
    }
  }

  clipRect (
    rect: Rect, 
    clipOp: SkiaClipOp,
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipRect(rect, clipOp, doAntiAlias)
    }
  }

  clipRRect (
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipRRect(rrect, doAntiAlias)
    }
  }
}
