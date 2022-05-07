import { invariant } from 'ts-invariant'
import { CanvasKitAPI } from '../CanvasKitAPI/CanvasKit'
import { CkColorFilter } from './CkColorFilter'
import { ManagedSkColorFilter } from './ManagedSkColorFilter'

export class CkComposeColorFilter extends CkColorFilter {
  public outer: ManagedSkColorFilter 
  public inner: ManagedSkColorFilter

  constructor (outer, inner) {
    super()
    this.outer = outer
    this.inner = inner
  }
  
  initRawColorFilter (): SkColorFilter {
    invariant(this.outer)

    return CanvasKitAPI.CanvasKit.ColorFilter.MakeCompose(
      this.outer?.skiaObject, 
      this.inner.skiaObject
    )
  }

  isEqual (other) {
    return (
      other.outer === this.outer &&
      other.inner === this.inner
    )
  }


 toString () {
    return `ColorFilter.compose(${this.outer}, ${this.inner})`
 }
}
