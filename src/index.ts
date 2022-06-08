import { PaintingBinding } from '@Painting'

class ApplicationBinding {
  static ensureInitialized () {
    PaintingBinding.initInstances()
  }
}

export function runApp () {
  ApplicationBinding.ensureInitialized()
}