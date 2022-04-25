export class Offset {
  static zero = new Offset(0, 0)
  static infinite = new Offset(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
  static fromDirection (direction: number, distance = 1.0) {
    const offset = new Offset(
      distance * Math.cos(direction),
      distance * Math.sin(direction)
    )

    return offset
  }

  public dx: number
  public dy: number 

  constructor (dx: number, dy: number) {
    this.dx = dx
    this.dy = dy
  }

  public get distance () {
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
  }

  public get distanceSquared () {
    return this.dx * this.dx + this.dy * this.dy
  }

  public get direction () {
    return Math.atan2(this.dy, this.dx)
  }

  scale (scaleX: number, scaleY: number): Offset {
    return new Offset(this.dx * scaleX, this.dy * scaleY)
  }

  translate (translateX: number, translateY: number) {
    return new Offset(this.dx + translateX, this.dy + translateY)
  }

  minus (offset?: Offset) {
    if (typeof offset === 'undefined') {
      return new Offset(-this.dx, -this.dy)
    }

    return new Offset(this.dx - offset.dx, this.dy - offset.dy)
  }

  plus (offset: Offset) {
    return new Offset(this.dx + offset.dx, this.dy + offset.dy)
  }

  isEqual (offset: Offset): boolean {
    return (
      offset.dx === this.dx &&
      offset.dy === this.dy
    )
  }
}