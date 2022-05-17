import { ImageInfo } from '@Painting'

export enum TargetPlatform {
  Android,
  Fuchsia,
  iOS,
  Linux,
  MacOS,
  Windows,
}


export type VoidCallback = { (): void }

export * from './Locale'