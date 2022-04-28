import { ImageFilter } from '@UI'
import { SkImageFilter } from '../CanvasKitAPI'

export abstract class CkManagedSkImageFilterConvertible implements ImageFilter {
  abstract imageFilter: ManagedSkiaObject<SkImageFilter>
}