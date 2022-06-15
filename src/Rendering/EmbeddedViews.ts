import { property } from '@helper'
import { listEquals, Matrix4 } from '@math'
import { Offset, Path, Rect, RRect, Size } from "@rendering"

export enum MutatorType {
  ClipRect,
  ClipRRect,
  ClipPath,
  Transform,
  Opacity,
}

export class EmbeddedViewParams {
  public offset: Offset
  public size: Size
  public mutators: MutatorsStack

  constructor (
    offset: Offset, 
    size: Size, 
    mutators: MutatorsStack
  ) {
    this.size = size
    this.offset = offset
    this.mutators = MutatorsStack.copy(mutators)
  }

  eq (other: EmbeddedViewParams) {
    if (other === this) {
      return true
    }
    return (
      other instanceof EmbeddedViewParams &&
      other.offset.eq(this.offset) &&
      other.size.eq(this.size) &&
      other.mutators.eq(this.mutators)
    )
  }
}


export class Mutator {
  public type: MutatorType 
  public rect: Rect | null
  public rrect: RRect | null
  public path: Path | null
  public matrix: Matrix4 | null
  public alpha: number | null

  constructor (
    type: MutatorType,
    rect: Rect | null,
    rrect: RRect | null,
    path: Path | null,
    matrix: Matrix4 | null,
    alpha: number | null,
  ) {
    this.type = type
    this.rect = rect
    this.rrect = rrect
    this.path = path
    this.matrix = matrix
    this.alpha = alpha
  }

  static clipRect (rect: Rect ) {
    return new Mutator(
      MutatorType.ClipRect, 
      rect, 
      null, 
      null, 
      null, 
      null
    )
  }

  static clipRRect (rrect: RRect) {
    return new Mutator(
      MutatorType.ClipRRect, 
      null, 
      rrect, 
      null, 
      null, 
      null
    )
  }

  static clipPath (path: Path) {
    return new Mutator(
      MutatorType.ClipPath, 
      null, 
      null, 
      path, 
      null, 
      null
    )
  }

  static transform (matrix: Matrix4) {
    return new Mutator(
      MutatorType.Transform, 
      null, 
      null, 
      null, 
      matrix, 
      null
    )
  }
  
  static opacity (alpha: number) {
    return new Mutator(
      MutatorType.Opacity, 
      null, 
      null, 
      null, 
      null, 
      alpha
    )
  }

  @property<boolean>(function (this) {
    return (
      this.type === MutatorType.ClipRect ||
      this.type === MutatorType.ClipRRect ||
      this.type === MutatorType.ClipPath
    )
  }) public isClipType!: boolean

  @property<number>(function (this) {
    return this.alpha / 255
  }) public alphaFloat!: number


  eq (other: Mutator) {
    if (other === this) {
      return true
    }

    if (!(other instanceof Mutator)) {
      return false
    }

    const typedOther: Mutator = other
    if (this.type !== typedOther.type) {
      return false
    }

    switch (this.type) {
      case MutatorType.ClipRect:
        return this.rect === typedOther.rect
      case MutatorType.ClipRRect:
        return this.rrect === typedOther.rrect
      case MutatorType.ClipPath:
        return this.path === typedOther.path
      case MutatorType.Transform:
        return this.matrix === typedOther.matrix
      case MutatorType.Opacity:
        return this.alpha === typedOther.alpha
      default:
        return false
    }
  }
}

export class MutatorsStack extends Array<Mutator> {
  
  static copy (original: MutatorsStack) {
    const mutators = new MutatorsStack()
    
    for (const mut of original) {
      mutators.push(mut)
    }
    
    return mutators
  }

  pushClipRect (rect: Rect ) {
    this.push(Mutator.clipRect(rect))
  }

  pushClipRRect (rrect: RRect) {
    this.push(Mutator.clipRRect(rrect))
  }

  pushClipPath (path: Path) {
    this.push(Mutator.clipPath(path))
  }

  pushTransform (matrix: Matrix4) {
    this.push(Mutator.transform(matrix))
  }

  pushOpacity (alpha: number) {
    this.push(Mutator.opacity(alpha))
  }

  pop () {
    return this.pop()
  }

  eq (other: MutatorsStack) {
    if (other === this) {
      return true
    }

    return (
      other instanceof MutatorsStack &&
      listEquals<Mutator>(other, this)
    )
  }
}


export class ViewListDiffResult {
  public viewsToRemove: number[]
  public viewsToAdd: number[]
  public addToBeginning: boolean
  public viewToInsertBefore: number | null

  constructor (
    viewsToRemove: number[], 
    viewsToAdd: number[], 
    addToBeginning: boolean,
    viewToInsertBefore?: number | null
  ) {
    this.viewsToRemove = viewsToRemove
    this.viewsToAdd = viewsToAdd
    this.addToBeginning = addToBeginning
    this.viewToInsertBefore = viewToInsertBefore ?? null
  }
}


export function diffViewList (
  active: number[], 
  next: number[]
): ViewListDiffResult | null {
  if (
    active.length === 0 || 
    next.length === 0
  ) {
    return null
  }
  
  let index = active.indexOf(next[0])
  if (index !== -1) {
    for (let i = 0; i + index < active.length; i++) {
      if (active[i + index] != next[i]) {
        return null
      }

      if (i === next.length - 1) {
        if (index === 0) {
          return new ViewListDiffResult(
            active.slice(i + 1), 
            [], 
            true,
            next[0]
          )
        } else {
          return new ViewListDiffResult(
            active.slice(0, index), 
            [], 
            false
          )
        }
      }
    }

    return new ViewListDiffResult(
      active.slice(0, index),
      next.slice(active.length - index),
      false,
    )
  }

  index = active.lastIndexOf(next[next.length - 1])
  if (index != -1) {
    for (let i = 0; index - i >= 0; i++) {
      if (
        next.length <= i || 
        active[index - i] !== 
        next[next.length - 1 - i]
      ) {
        return null
      }
    }
    return new ViewListDiffResult(
      active.slice(index + 1),
      next.slice(0, next.length - index - 1),
      true,
      active[0],
    )
  }

  return null
}
