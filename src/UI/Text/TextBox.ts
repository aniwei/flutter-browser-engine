import { TextDirection } from '.'
import { Rect } from '../Geometry'

export class TextBox {
  static fromLTRBD (
    left,
    top,
    right,
    bottom,
    direction,
  ) {
    return new TextBox(left, top, right, bottom, direction)
  }

  public left: number
  public top: number
  public right: number
  public bottom: number
  public direction: TextDirection

  public get start () {
    return (this.direction === TextDirection.ltr) ? 
      this.left : this.right
  }

  public get end () {
    return (this.direction == TextDirection.ltr) ?
       this.right : this.left
  }
  
  constructor (
    left,
    top,
    right,
    bottom,
    direction,
  ) {
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
    this.direction = direction
  }
  
  
  toRect (): Rect {
    return Rect.fromLTRB(this.left, this.top, this.right, this.bottom)
  } 
  
  isEqual (other) {
    
    return (
      other.left === this.left &&
      other.top === this.top &&
      other.right === this.right &&
      other.bottom === this.bottom &&
      other.direction === this.direction
    )
  }

  toString () {
    return `TextBox.fromLTRBD(${this.left.toFixed(1)}, ${this.top.toFixed(1)}, ${this.right.toFixed(1)}, ${this.bottom.toFixed(1)}, ${this.direction})`
  }
}
