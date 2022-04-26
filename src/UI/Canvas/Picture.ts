import type { int } from '@Types'
import type { Image } from '../Painting'

export abstract class Picture {
  abstract approximateBytesUsed: int
  abstract toImage(width: int, height: int): Promise<Image> 
  abstract dispose(): void
}