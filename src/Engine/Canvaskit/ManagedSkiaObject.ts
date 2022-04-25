import { UnimplementedError } from '@Shared'
import { SkiaObject } from './SkiaObject'

export class ManagedSkiaObject <T> extends SkiaObject<T> {
  public rawSkiaObject: T | null = null

  public get isResurrectionExpensive () {
    return false
  }

  constructor (instance: T) {
    super(instance)

    const rawSkiaObject = instance ?? this.createDefault()
    this.rawSkiaObject = rawSkiaObject as T
  }

  createDefault () {
    throw new UnimplementedError()
  }

  resurrect () {
    throw new UnimplementedError()
  }

  didDelete (): void {

  }
}