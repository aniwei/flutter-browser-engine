import { ImageFilter } from '@UI'
import { SkImageFilter } from '@Skia'
import { ManagedSkiaObject } from '../SkiaObjectCache'

export abstract class CkManagedSkImageFilterConvertible implements ImageFilter {
  abstract imageFilter: ManagedSkiaObject<SkImageFilter>
}