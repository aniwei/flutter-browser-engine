import { ImageFilter } from '@UI'
import { SkImageFilter } from '..'
import { ManagedSkiaObject } from '../../ManagedSkiaObject'

export abstract class CkManagedSkImageFilterConvertible implements ImageFilter {
  abstract imageFilter: ManagedSkiaObject<SkImageFilter>
}