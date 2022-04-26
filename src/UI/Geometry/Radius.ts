import type { bool, double } from '@Types'

export class Radius {
  static zero = Radius.circular(0)
  static circular (radius: double) {
    return Radius.elliptical(radius, radius)
  }

  static elliptical (x: double, y: double) {
    return new Radius(x, y)
  }

  public x: double
  public y: double

  constructor (x: double, y: double) {
    this.x = x
    this.y = y
  }

  plus (radius: Radius): Radius {
    return Radius.elliptical(this.x + radius.x, this.y + radius.y)
  }

  subtract (radius?: Radius): Radius {
    if (typeof radius === 'undefined') {
      return Radius.elliptical(-this.x, -this.y)
    }

    return Radius.elliptical(this.x - radius.x, this.y - radius.y)
  }

  multiply (radius: Radius): Radius {
    return Radius.elliptical(this.x * radius.x, this.y * radius.y)
  }

  divide (radius: Radius): Radius {
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

  toString () {
    return this.x === this.y ?
      `Radius.circular(${this.x.toFixed(1)})` :
      `Radius.elliptical(${this.x.toFixed(1)})`
  }
}