/*
 * @Author: Aniwei
 * @Date: 2022-08-12 11:09:40
 */
import { PlatformBinding } from '@platform/PlatformBinding'
import { Skia, SkiaOptions } from './Skia'

export type SkiaBindingOptions = {
  
} & SkiaOptions

export class SkiaBinding {
  static instance: SkiaBinding | null = null
  static async initInstances (options: SkiaBindingOptions) {
    const binding = new SkiaBinding(options)
    await binding.malloc(PlatformBinding.instance?.configuration.baseURI as string, options)
  }

  constructor (options: SkiaBindingOptions) {
    SkiaBinding.instance = this
  }

  async malloc (uri: string, options: SkiaOptions) {
    await Skia.malloc(uri, options)
  }
}