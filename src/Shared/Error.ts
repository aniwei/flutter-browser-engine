export class ArgumentError extends Error {
  
}

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
    return (message != null)
        ? `UnimplementedError: $message`
        : `UnimplementedError`
  }
}