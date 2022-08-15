import invariant from 'ts-invariant'
import { Axis } from '@basic/Axis'

export function flipAxis(direction: Axis): Axis {
  invariant(direction != null)

  switch (direction) {
    case Axis.Horizontal:
      return Axis.Vertical
    case Axis.Vertical:
      return Axis.Horizontal
  }
}