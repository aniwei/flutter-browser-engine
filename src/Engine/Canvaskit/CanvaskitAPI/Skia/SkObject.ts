import { EmbindObject } from 'canvaskit-wasm'

export class SkObject<T extends EmbindObject<T>> {
  public skiaObject: T

  constructor (skiaObject: T) {
    this.skiaObject = skiaObject
  }

  public get clone () {
    return this.skiaObject.clone
  }

  public get delete () {
    return this.skiaObject.delete
  }

  public get deleteLater () {
    return this.skiaObject.deleteLater
  }

  public get isAliasOf () {
    return this.skiaObject.isAliasOf
  }

  public get isDeleted () {
    return this.skiaObject.isDeleted
  }
}