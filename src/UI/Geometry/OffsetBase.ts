import { invariant } from 'ts-invariant'
import type { double } from '@Types';

export abstract class OffsetBase {
  public dx: double
  public dy: double

  constructor (dx: double, dy: double) {
    invariant(dx !== null)
    invariant(dy !== null)

    this.dx = dx
    this.dy = dy
  }
}
