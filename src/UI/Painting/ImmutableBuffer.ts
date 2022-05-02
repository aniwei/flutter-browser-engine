import { invariant } from 'ts-invariant'
import { Uint8List } from '@Types'

export class ImmutableBuffer {
  static async fromUint8List (list: Uint8List) {
    const instance = new ImmutableBuffer(list.length)
    instance.list = list
    
    return instance
  }

  public list: Uint8List | null = null
  public length: number

  public get debugDisposed (): boolean {
    let disposed: boolean

    invariant((() => {
      disposed = this.list == null;
      return true
    })())
    
    return disposed
  }

  constructor (length: number) {
    this.length = length
  }

  dispose (): void {
    this.list = null
  }
}
