export abstract class SkiaObject<T extends Object> {
  abstract skiaObject: T
  abstract delete ()
  abstract didDelete()
}