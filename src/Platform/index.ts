export enum TargetPlatform {
  Android,
  Fuchsia,
  iOS,
  Linux,
  MacOS,
  Windows,
}

export type VoidCallback = { (): void }

export const isWindow = (
  typeof process !== 'undefined' && 
  Object.prototype.toString.call(process) === '[object process]' &&
  process.platform === 'win32'
)

export const kImageDecoderExperimentEnabled = (
  isWindow && typeof window.ImageDecoder === 'object'
)

export const kBrowserSupportsImageDecoder = (
  kImageDecoderExperimentEnabled 
)

export * from './URI'
export * from './Http'
export * from './Locale'
export * from './Encoding'
export * from './TypedData'
export * from './StringBuffer'
export * from './ArgumentError'
export * from './UnsupportedError'