export class Radius {
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
}