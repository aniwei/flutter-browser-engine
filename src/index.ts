/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { PaintingBinding, PaintingBindingOptions } from '@painting/PaintingBinding'
import { PlatformBinding, PlatformBindingOptions } from '@platform/PlatformBinding'
import { Skia, SkiaOptions } from '@skia/binding'

export type AppOptions = {

} & PlatformBindingOptions & PaintingBindingOptions & SkiaOptions

class ApplicationBinding {
  static async ensureInitialized (options: AppOptions) {
    await PlatformBinding.initInstances(options)
    await PaintingBinding.initInstances(options)
    await Skia.init(
      options.baseURI as string, 
      options
    )
  }
}

export async function runApp (options: AppOptions) {
  await ApplicationBinding.ensureInitialized(options)
}
