import { Offset } from './Offset'

export class RRect {
  static fromLTRBXY (
    left: number, 
    top: number, 
    right: number, 
    bottom: number,
    radiusX: number,
    radiusY: number
  ) {

  }

  static fromLTRBR (
    left: number, 
    top: number, 
    right: number, 
    bottom: number,
    radius: number
  ) {

  }

  public left: number
  public top: number
  public right: number
  public bottom: number
  public tlRadiusX: number
  public tlRadiusY: number
  public trRadiusX: number
  public trRadiusY: number
  public brRadiusX: number
  public brRadiusY: number
  public blRadiusX: number
  public blRadiusY: number
  public uniformRadii: boolean

  public get tlRadius () {

  }

  public get trRadius () {
    
  }

  public get blRadius () {

  }

  public get brRadius () {

  }

  public get width () {
    return this.right - this.left
  }

  public get height () {
    return this.bottom - this.top
  }

  constructor (
    left: number,
    top: number,
    right: number,
    bottom: number,
    tlRadiusX: number,
    tlRadiusY: number,
    trRadiusX: number,
    trRadiusY: number,
    brRadiusX: number,
    brRadiusY: number,
    blRadiusX: number,
    blRadiusY: number,
    uniformRadii: boolean
  ) {
    this.left = left 
    this.top = top 
    this.right = right 
    this.bottom = bottom 
    this.tlRadiusX = tlRadiusX 
    this.tlRadiusY = tlRadiusY 
    this.trRadiusX = trRadiusX 
    this.trRadiusY = trRadiusY 
    this.brRadiusX = brRadiusX 
    this.brRadiusY = brRadiusY 
    this.blRadiusX = blRadiusX 
    this.blRadiusY = blRadiusY 
    this.uniformRadii = uniformRadii 
  }

  getMin (
    min: number,
    radiusA: number,
    radiusB: number,
    limit: number
  ) {
    const sum = radiusA + radiusB
    if (sum > limit && sum !== 0) {
      return Math.min(min, limit / sum)
    }

    return min
  } 

  scaleRadii () {
    let scale = 1
    const absWidth = Math.abs(this.width)
    const absHeight = Math.abs(this.height)

    scale = this.getMin(scale, this.blRadiusY, this.tlRadiusY, absHeight)
    scale = this.getMin(scale, this.tlRadiusX, this.trRadiusX, absWidth)
    scale = this.getMin(scale, this.trRadiusY, this.brRadiusY, absHeight)
    scale = this.getMin(scale, this.brRadiusX, this.blRadiusX, absWidth)

    if (scale < 1) {
      return new RRect (
        this.top,
        this.left,
        this.right,
        this.bottom,
        this.tlRadiusX * scalue
      )
    }
  }

  contains (point: Offset) {
    if (
      point.dx < this.left ||
      point.dx >= this.right ||
      point.dy < this.top ||
      point.dy >= this.bottom
    ) {
      return false
    }

     const scaled = this.scaleRadii()

    let x: number
    let y: number
    let radiusX: number
    let radiusY: number
    
    if (point.dx < this.left + scaled.tlRadiusX &&
        point.dy < top + scaled.tlRadiusY) {
      x = point.dx - left - scaled.tlRadiusX;
      y = point.dy - top - scaled.tlRadiusY;
      radiusX = scaled.tlRadiusX;
      radiusY = scaled.tlRadiusY;
    } else if (point.dx > right - scaled.trRadiusX &&
        point.dy < top + scaled.trRadiusY) {
      x = point.dx - right + scaled.trRadiusX;
      y = point.dy - top - scaled.trRadiusY;
      radiusX = scaled.trRadiusX;
      radiusY = scaled.trRadiusY;
    } else if (point.dx > right - scaled.brRadiusX &&
        point.dy > bottom - scaled.brRadiusY) {
      x = point.dx - right + scaled.brRadiusX;
      y = point.dy - bottom + scaled.brRadiusY;
      radiusX = scaled.brRadiusX;
      radiusY = scaled.brRadiusY;
    } else if (point.dx < left + scaled.blRadiusX &&
        point.dy > bottom - scaled.blRadiusY) {
      x = point.dx - left - scaled.blRadiusX;
      y = point.dy - bottom + scaled.blRadiusY;
      radiusX = scaled.blRadiusX;
      radiusY = scaled.blRadiusY;
    } else {
      return true; // inside and not within the rounded corner area
    }

    x = x / radiusX;
    y = y / radiusY;
    // check if the point is outside the unit circle
    if (x * x + y * y > 1.0) return false;

    return true
  }
}