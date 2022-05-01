import { Path, Rect, RRect } from '@UI'
import { Matrix4 } from '../../VectorMath'
import { MutatorType } from '.'

export class Mutator {
  static clipRect(rect: Rect) {
    const mutator = new Mutator(
      MutatorType.clipRect,
      rect,
      null,
      null,
      null,
      null,
    )
    
    return mutator
  }
  static clipRRect (rrect: RRect) {
    const mutator = new Mutator(
      MutatorType.clipRRect,
      null,
      rrect,
      null,
      null,
      null,
    )
    
    return mutator
  }

  static clipPath (path: Path) {
    const mutator = new Mutator(
      MutatorType.clipPath,
      null,
      null,
      path,
      null,
      null,
    )
    
    return mutator
  }

  static transform(matrix: Matrix4) {
    const mutator = new Mutator(
      MutatorType.transform,
      null,
      null,
      null,
      matrix,
      null,
    )
    
    return mutator
  }

  static opacity (alpha: number) {
    const mutator = new Mutator(
      MutatorType.opacity,
      null,
      null,
      null,
      null,
      alpha
    )
    
    return mutator
  }

  public type: MutatorType
  public rect: Rect | null = null
  public rrect: RRect | null = null
  public path: Path | null = null
  public matrix: Matrix4 | null = null
  public alpha: number | null = null

  public get isClipType () {
    return (
      this.type === MutatorType.clipRect ||
      this.type === MutatorType.clipRRect ||
      this.type === MutatorType.clipPath
    )
  }
     
  get alphaFloat () {
    return this.alpha! / 255.0
  } 

  constructor (
    type,
    rect,
    rrect,
    path,
    matrix,
    alpha,
  ) {
    this.type = type
    this.rect = rect
    this.rrect = rrect
    this.path = path
    this.matrix = matrix
    this.alpha = alpha
  }

  isEqual (other) {
    if (this === other) {
      return true
    }
   

    const typedOther = other
    if (this.type !== typedOther.type) {
      return false
    }

    switch (this.type) {
      case MutatorType.clipRect:
        return this.rect === typedOther.rect
      case MutatorType.clipRRect:
        return this.rrect === typedOther.rrect
      case MutatorType.clipPath:
        return this.path === typedOther.path
      case MutatorType.transform:
        return this.matrix === typedOther.matrix
      case MutatorType.opacity:
        return this.alpha === typedOther.alpha
      default:
        return false
    }
  }
}
