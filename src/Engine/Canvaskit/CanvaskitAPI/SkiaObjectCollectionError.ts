export class SkiaObjectCollectionError extends Error {
  constructor (error, stackTrace) {
    super(error)

    this.stack = stackTrace
  }

  toString () {
    return `SkiaObjectCollectionError: ${this.message}\n${this.stack}`
  }
}