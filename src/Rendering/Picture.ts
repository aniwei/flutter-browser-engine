/*
 * @Author: Aniwei
 * @Date: 2022-07-04 12:10:21
 */
import { invariant } from 'ts-invariant'
import { Rect } from '@internal/Geometry'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'
import { kSupportsFinalizationRegistry } from '@platform/Platform'
import { Skia } from '@skia/binding'

import { Image } from './Image'
import { PictureSnapshot } from './Canvas'

import type { IImage, IPicture, ISurface } from '@skia'


export type PictureOptions = {
  picture: IPicture,
  cullRect: Rect | null,
  snapshot: PictureSnapshot | null
}
export class Picture extends ManagedSkiaObject<IPicture> {
  public isResurrectionExpensive: boolean = true
  public approximateBytesUsed: number = 0
  public isDisposed: boolean = false
  public cullRect: Rect | null = null
  public snapshot: PictureSnapshot | null = null

  /**
   * @description: 
   * @param {PictureOptions} options
   * @return {*}
   */  
  constructor (options: PictureOptions) {    
    invariant(
      kSupportsFinalizationRegistry && 
      options.snapshot === null || 
      options.snapshot !== null,
      'If the browser does not support FinalizationRegistry (WeakRef), then we must have a picture snapshot to be able to resurrect it.',
    )

    const skia = options.snapshot!.toPicture()
    super(skia)

    this.cullRect = options.cullRect
    this.snapshot = options.snapshot
  }

  /**
   * @description: 
   * @return {void}
   */  
  dispose () {
    invariant(!this.isDisposed, 'Object has been disposed.')
    
    this.isDisposed = true
    this.snapshot?.dispose()
    
    this.delete()
  }

  /**
   * @description: 
   * @param {number} width
   * @param {number} height
   * @return {Image}
   */
  toImage (
    width: number, 
    height: number
  ): Image {
    invariant(!this.isDisposed)
    const surface: ISurface = Skia.binding.MakeSurface(width, height) as ISurface
    const canvas = surface.getCanvas()
    canvas.drawPicture(this.skia!)
    
    const skImage: IImage = surface.makeImageSnapshot()
    surface.dispose()
    return new Image(skImage)
  }

  /**
   * @description: 
   * @return {IPicture}
   */  
  resurrect () {
    invariant(!this.isDisposed)
    return this.snapshot!.toPicture()
  }

  /**
   * @description: 
   * @return {void}
   */  
  delete () {
    if (!this.isDisposed) {
      super.delete()
    }
  }
}