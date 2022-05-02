import { invariant } from 'ts-invariant'

export abstract class OffsetBase {
  public dx: number
  public dy: number

  constructor (dx: number, dy: number) {
    invariant(dx !== null)
    invariant(dy !== null)

    this.dx = dx
    this.dy = dy
  }
}
