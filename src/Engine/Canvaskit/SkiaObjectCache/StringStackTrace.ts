import { StackTrace } from './StackTrace'

export class StringStackTrace implements StackTrace {
  public stackTrace: string

  constructor (stackTrace: string) {
    this.stackTrace = stackTrace
  }

  toString () {
    return this.stackTrace
  }
}
