import { UnimplementedError } from '@Shared'

export interface ISkiaObject <T extends Object> {
  skiaObject: T
  delete (): void
  didDelete (): void 
}

export class SkiaObject<T> implements ISkiaObject<T> {
  public skiaObject: T

  constructor (skiaObject: T) {
    this.skiaObject = skiaObject
  }

  delete(): void {
    throw new UnimplementedError()
  }

  didDelete(): void {
    throw new UnimplementedError()
  }
}