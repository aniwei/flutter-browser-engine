
import { Path, Rect, RRect } from '@UI'
import { listEquals } from '../../Util'
import { Matrix4 } from '../../VectorMath'
import { Mutator } from './Mutator'

export class MutatorsStack {
  public mutators: Mutator[] = []

  static copy (origin: MutatorsStack) {
    const mutatorsStack = new MutatorsStack()
    mutatorsStack.mutators = Array.from(origin.mutators)

    return mutatorsStack
  }

  pushClipRect (rect: Rect) {
    this.mutators.push(Mutator.clipRect(rect))
  }

  pushClipRRect (rrect: RRect) {
    this.mutators.push(Mutator.clipRRect(rrect));
  }

  pushClipPath(path: Path) {
    this.mutators.push(Mutator.clipPath(path));
  }

  pushTransform (matrix: Matrix4) {
    this.mutators.push(Mutator.transform(matrix));
  }

  pushOpacity (alpha: number) {
    this.mutators.push(Mutator.opacity(alpha));
  }

  pop() {
    this.mutators.pop()
  }

  isEqual (other) {
    if (this === other) {
      return true
    }

    return (
      listEquals(other.mutators, this.mutators)
    )
  }
}
