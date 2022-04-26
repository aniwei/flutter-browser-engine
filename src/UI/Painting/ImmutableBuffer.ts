import { invariant } from 'ts-invariant'
import { Uint8List, int, bool } from '@Types'

export class ImmutableBuffer {
  static async fromUint8List (list: Uint8List) {
    const instance = new ImmutableBuffer(list.length)
    instance.list = list
    
    return instance
  }

  public list: Uint8List | null = null
  public length: int

  public get debugDisposed (): bool {
    let disposed: bool

    invariant((() => {
      disposed = this.list == null;
      return true
    })())
    
    return disposed
  }

  constructor (length: int) {
    this.length = length
  }

  dispose (): void {
    this.list = null
  }
}
