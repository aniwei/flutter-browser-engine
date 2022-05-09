export class UnsupportedError extends Error {

  constructor (message?: string) {
    super(message)
  }

  toString () {
    return `Unsupported operation: ${this.message}`
  }
}

export class UnimplementedError extends UnsupportedError {
  toString () {
    var message = this.message;
    return (message !== null) ? 
      `UnimplementedError: ${this.message}` : 
      `UnimplementedError`
  }
}

export class StateError extends Error {}

export class ArgumentError extends Error {}