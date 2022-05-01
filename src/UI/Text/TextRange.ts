import invariant from "ts-invariant";

export class TextRange {
  static collapsed (offset: number) {
    const text = new TextRange(offset, offset)
    return text
  }

  static empty = new TextRange(-1, -1)

  public start: number
  public end: number

  public get isValid () {
    return this.start >= 0 && this.end >= 0
  }
  public get isCollapsed () {
    return this.start === this.end
  }
  public get isNormalized () {
    return this.end >= this.start
  }

  constructor(
    start,
    end,
  ) {
    invariant(start >= -1)
    invariant(end >= -1)
  
    this.start = start
    this.end = end
  }  
  
  textBefore (text: string): string {
    invariant(this.isNormalized)
    return text.substring(0, this.start)
  }

  textAfter (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.end)
  }

  textInside (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.start, this.end)
  }

  isEqual (other) {
    if (this === other) {
      return true
    }

    return (
      other.start === this.start && 
      other.end === this.end
    )
  }

  toString () {
    return `TextRange(start: ${this.start}, end: ${this.end})`
  }
}
