import type { Size } from '@internal/Geometry'
import type { BoxConstraints, RenderBox } from '@ui/RenderBox'

export class ChildLayoutHelper {
  static dryLayoutChild (
    child: RenderBox,
    constraints: BoxConstraints
  ): Size {
    return child.getDryLayout(constraints);
  }

  static layoutChild (
    child: RenderBox , 
    constraints: BoxConstraints
  ): Size {
    child.layout(constraints, true)
    return child.size as Size
  }
}