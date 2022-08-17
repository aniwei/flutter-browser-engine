import { ClipOp } from '@skia'
import { Color } from '@internal/Color'
import { Rect, RRect } from '@internal/Geometry'

import type { Path } from './Path'
import type { Paint } from './Paint'
import type { Canvas } from './Canvas'
import type { ImageFilter } from './ImageFilter'

export class NWayCanvas extends Array<Canvas> {
  /**
   * @description: 
   * @param {Canvas} canvas
   * @return {*}
   */
  addCanvas (canvas: Canvas) {
    this.push(canvas)
  }

  /**
   * @description: 
   * @return {number}
   */
  save (): number {
    return this.reduce((count, canvas) => (count + canvas.save()), 0)
  }

  /**
   * @description: 
   * @param {Rect} bounds
   * @param {Paint} paint
   * @return {*}
   */
  saveLayer (
    bounds: Rect, 
    paint?: Paint | null
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].saveLayer(bounds, paint as Paint)
    }
  }

  /**
   * @description: 
   * @param {Rect} bounds
   * @param {ImageFilter} filter
   * @param {Paint} paint
   * @return {*}
   */
  saveLayerWithFilter (
    bounds: Rect, 
    filter: ImageFilter,
    paint?: Paint | null
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].saveLayerWithFilter(bounds, filter, paint as Paint)
    }
  }

  /**
   * @description: 
   * @param {*} for
   * @return {*}
   */
  restore () {
    for (let i = 0; i < this.length; i++) {
      this[i].restore()
    }
  }

  /**
   * @description: 
   * @param {number} count
   * @return {*}
   */
  restoreToCount (count: number) {
    for (let i = 0; i < this.length; i++) {
      this[i].restoreToCount(count)
    }
  }

  /**
   * @description: 
   * @param {number} dx
   * @param {number} dy
   * @return {*}
   */
  translate (
    dx: number, 
    dy: number
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].translate(dx, dy)
    }
  }

  /**
   * @description: 
   * @param {Float64Array} matrix
   * @return {*}
   */
  transform (matrix: Float64Array) {
    for (let i = 0; i < this.length; i++) {
      this[i].transform(matrix)
    }
  }

  /**
   * @description: 
   * @param {Color} color
   * @return {*}
   */
  clear (color: Color) {
    for (let i = 0; i < this.length; i++) {
      this[i].clear(color)
    }
  }

  /**
   * @description: 
   * @param {Path} path
   * @param {boolean} doAntiAlias
   * @return {*}
   */
  clipPath (
    path: Path, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipPath(path, doAntiAlias)
    }
  }

  /**
   * @description: 
   * @param {Rect} rect
   * @param {ClipOp} clipOp
   * @param {boolean} doAntiAlias
   * @return {*}
   */
  clipRect (
    rect: Rect, 
    clipOp: ClipOp,
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipRect(rect, clipOp, doAntiAlias)
    }
  }

  /**
   * @description: 
   * @param {RRect} rrect
   * @param {boolean} doAntiAlias
   * @return {*}
   */
  clipRRect (
    rrect: RRect, 
    doAntiAlias: boolean
  ) {
    for (let i = 0; i < this.length; i++) {
      this[i].clipRRect(rrect, doAntiAlias)
    }
  }
}
