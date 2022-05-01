import { StringStackTrace } from './StringStackTrace'

export abstract class StackTrace {
  static empty = new StringStackTrace('')
  static fromString (stackTraceString: string) {
    return new StringStackTrace(stackTraceString)
  }

  static current: StackTrace
  abstract toString (): string
}
