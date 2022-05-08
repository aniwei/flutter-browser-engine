import { CkPaint } from '@CanvasKit'

export abstract class Paint {
  abstract toPaint (): CkPaint
}