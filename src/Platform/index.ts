import type { ImageInfo } from '@Painting'
import type { ImageChunkEvent } from '@Painting'

export enum TargetPlatform {
  Android,
  Fuchsia,
  iOS,
  Linux,
  MacOS,
  Windows,
}

export type ImageListener = { (image: ImageInfo, synchronousCall: boolean): void } 
export type ImageChunkListener = { (event: ImageChunkEvent): void }

export type ImageErrorListener = { (exception): void }
export type VoidCallback = { (): void }

export * from './Locale'
export * from './TypedData'