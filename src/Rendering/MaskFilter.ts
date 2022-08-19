/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { Skia } from '@skia/binding'
import { BlurStyle, MaskFilter as MaskFilterSkiaObject } from '@skia'
import { ManagedSkiaObject } from '@skia/ManagedSkiaObject'


export type MaskFilterOptions = {
  blurStyle: BlurStyle,
  sigma: number
}

export class MaskFilter extends ManagedSkiaObject<MaskFilterSkiaObject> {
  /**
   * @description: 
   * @param {MaskFilterOptions} options
   * @return {MaskFilter}
   */  
  static blur(options: MaskFilterOptions) {
    return new MaskFilter(options)
  }

  public blurStyle: BlurStyle
  public sigma: number

  /**
   * @description: 
   * @param {MaskFilterOptions} options
   * @return {MaskFilter}
   */  
  constructor (options: MaskFilterOptions) {
    const skia = Skia.binding.MaskFilter.MakeBlur(
      options.blurStyle,
      options.sigma,
      true
    )
    super(skia)

    this.blurStyle = options.blurStyle
    this.sigma = options.sigma
  }

  /**
   * @description: 
   * @return {MaskFilterSkiaObject}
   */  
  resurrect (): MaskFilterSkiaObject {
    return Skia.binding.MaskFilter.MakeBlur(
      this.blurStyle,
      this.sigma,
      true
    )
  }

  /**
   * @description: 
   * @return {void}
   */  
  delete () {
    this.skia?.delete();
  }
}
