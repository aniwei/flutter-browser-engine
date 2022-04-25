export class Size {
  static zero = new Size(0, 0)
  static infinite = new Size(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)

  static copy (source: Size) {
    return new Size(source.width, source.height)
  }

  static fromWidth (width: number) {
    return new Size(width, Number.POSITIVE_INFINITY)
  }

  static fromHeight (height: number) {
    return new Size(height, Number.POSITIVE_INFINITY)
  }

  public width: number
  public height: number

  public get aspectRatio () {
    if (this.height !== 0) {
      return this.width / this.height
    } else if (this.width > 0) {
      return Number.POSITIVE_INFINITY
    } else if (this.width < 0) {
      return Number.NEGATIVE_INFINITY
    }
    
    return 0.0
  }

  constructor (width: number, height: number) {
    this.width = width
    this.height = height
  }


}