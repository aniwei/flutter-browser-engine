import invariant from 'ts-invariant'
import { TextAffinity } from '.'

export class TextPosition {
  public offset: number
  public affinity: TextAffinity
  constructor(
    offset,
    affinity = TextAffinity.downstream,
  ) {
    invariant(offset != null), 
    invariant(affinity != null)

    this.offset = offset
    this.affinity = affinity
  }

  isEqual (other) {
    return (
      other.offset === this.offset &&
      other.affinity === this.affinity
    )
  }

  toString () {
    return `(offset: ${this.offset}, affinity: ${this.affinity})`
  }
}
