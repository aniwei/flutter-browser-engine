/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { PaintingBinding, PaintingBindingOptions } from '@painting/PaintingBinding'
import { PlatformBinding, PlatformBindingOptions } from '@platform/PlatformBinding'
import { SkiaBinding, SkiaBindingOptions } from '@skia/SkiaBinding'

export type AppOptions = {

} & PlatformBindingOptions & PaintingBindingOptions & SkiaBindingOptions

class ApplicationBinding {
  static async ensureInitialized (options: AppOptions) {
    await PlatformBinding.initInstances(options)
    await PaintingBinding.initInstances(options)
    await SkiaBinding.initInstances(options)
  }
}

export async function runApp (options: AppOptions) {
  await ApplicationBinding.ensureInitialized(options)
}