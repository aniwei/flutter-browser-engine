import { ManagedSkiaObject } from './ManagedSkiaObject'
import type { RawSkia } from './SkiaObject'

export class SkiaObjectBox<T extends RawSkia<T>> extends ManagedSkiaObject<T> {
  resurrect(): T {
    throw new Error('Method not implemented.');
  }
}
