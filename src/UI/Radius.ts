export class Radius {
  static zero = Radius.circular(0)
  static circular (radius: number) {
    return Radius.elliptical(radius, radius)
  }

  static elliptical (x: number, y: number) {
    return new Radius(x, y)
  }

  public x: number
  public y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  minus (radius?: Radius) {
    if (typeof radius === 'undefined') {
      return Radius.elliptical(-this.x, -this.y)
    }

    return Radius.elliptical(this.x - radius.x, this.y - radius.y)
  }

  plus (radius: Radius) {
    return Radius.elliptical(this.x + radius.x, this.y + radius.y)
  }

  multiply (radius: Radius) {
    return Radius.elliptical(this.x * radius.x, this.y * radius.y)
  }

  divide (radius: Radius) {
    return Radius.elliptical(this.x / radius.x, this.y / radius.y)
  }

  isEqual (radius: Radius) {
    if (radius === this) {
      return true
    }

    return (
      radius.x === this.x &&
      radius.y === this.y
    )
  }
}