/*
 * @Author: Aniwei
 * @Date: 2022-08-09 10:04:53
 */
import { invariant } from 'ts-invariant'
import { Canvas } from './Canvas'
import type { SkiaSurface } from '@skia/Skia'

export class Surface {
  static malloc (
    skia: SkiaSurface, 
    glContext: number | null
  ) {
    return new Surface(skia, glContext)
  }

  public surface: SkiaSurface
  public glContext: number | null = null
  public isDisposed: boolean = false

  get canvas () {
    invariant(!this.isDisposed, 'Attempting to use the canvas of a disposed surface')
    return Canvas.malloc(this.surface.getCanvas())
  }

  get context () {
    return this.glContext
  }

  get width () {
    return this.surface.width()
  }

  get height () {
    return this.surface.height()
  } 

  constructor (
    surface: SkiaSurface,
    glContext: number | null
  ) {
    this.surface = surface
    this.glContext = glContext
  }

  flush () {
    this.surface.flush()
  }

  dispose () {
    if (this.isDisposed) {
      return
    }
    this.surface.dispose()
    this.isDisposed = true
  }
}
