import { Encoding, utf8 } from './Encoding';
import { StringBuffer } from './StringBuffer';

export enum TargetPlatform {
  Android,
  Fuchsia,
  iOS,
  Linux,
  MacOS,
  Windows,
}

export const isWindow = (
  typeof process !== 'undefined' && 
  Object.prototype.toString.call(process) === '[object process]' &&
  process.platform === 'win32'
)


export type VoidCallback = { (): void }

export * from './URI'
export * from './Locale'
export * from './Encoding'
export * from './TypedData'
export * from './StringBuffer'
export * from './ArgumentError'
export * from './UnsupportedError'