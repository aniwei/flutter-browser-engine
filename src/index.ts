/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { PaintingBinding } from '@painting/PaintingBinding'

class ApplicationBinding {
  static ensureInitialized () {
    PaintingBinding.initInstances()
  }
}

export function runApp () {
  ApplicationBinding.ensureInitialized()
}