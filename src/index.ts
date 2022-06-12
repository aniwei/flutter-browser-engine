import { PaintingBinding } from '@painting'

class ApplicationBinding {
  static ensureInitialized () {
    PaintingBinding.initInstances()
  }
}

export function runApp () {
  ApplicationBinding.ensureInitialized()
}