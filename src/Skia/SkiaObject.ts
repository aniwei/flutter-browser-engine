import { EmbindObject } from 'canvaskit-wasm'
import invariant from 'ts-invariant'

type SkDeletable = EmbindObject

export abstract class SkiaObject <T extends EmbindObject<T>> {
  abstract skia: T
  abstract delete ()
  abstract didDelete ()
}

