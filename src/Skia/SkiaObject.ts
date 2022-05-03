import { EmbindObject } from 'canvaskit-wasm'

export type RawSkia <T extends RawSkia<T>> = EmbindObject<T>
  

export abstract class SkiaObject <T extends RawSkia<T>> {
  abstract skia: T
  abstract delete ()
  abstract didDelete ()
}

