import invariant from 'ts-invariant'

export class ParagraphConstraints {
  public width: number

  constructor (width) {
    invariant(width != null)
    this.width = width
  }
  

  isEqual (other) {
    return (
      other.width === this.width
    )
  }

  toString () {
    return `ParagraphConstraints(width: ${this.width})`
  }
}
