import type { Image } from '../Painting'

export interface IPicture {
  approximateBytesUsed: number
  toImage (width: number, height: number): Promise<Image> 
  dispose (): void
}

export abstract class Picture implements IPicture {
  abstract approximateBytesUsed: number
  abstract toImage (width: number, height: number): Promise<Image> 
  abstract dispose (): void
}