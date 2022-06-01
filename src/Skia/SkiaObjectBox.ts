import { kBrowserSupportsFinalizationRegistry } from '@Platform'
import invariant from 'ts-invariant'
import { ManagedSkiaObject } from './ManagedSkiaObject'
import { RawSkia, SkiaObject } from './SkiaObject'

export class SkiaObjectBox<R, T> extends SkiaObject<T> {
  constructor (referrer: R, value: T) {
    invariant(kBrowserSupportsFinalizationRegistry)
    this.init(referrer, value)

    
  }

  init (referrer: R, value: T) {
    this.update(value)
  }

  ref () {

  }

  unref () {
    
  }
}
