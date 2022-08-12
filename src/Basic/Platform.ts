/*
 * @Author: Aniwei
 * @Date: 2022-08-04 10:48:03
 */
export type VoidCallback = { (): void }
export enum TargetPlatform {
  Android,
  Fuchsia,
  iOS,
  Linux,
  MacOS,
  Windows,
}

export enum BrowserEngine {
  Blink,
  Webkit,
  Firefox,
  Edge,
  Unknown
}

export enum OperatingSystem {
  iOS,
  Android,
  Linux,
  Windows,
  MacOS,
  Unknown
}

export type Viewpoint = {
  width: number
  height: number
}

export type Env = {
  BASE_URI?: string,
  DEVICE_PIXEL_RATIO?: number,
  DEFAULT_DEVICE_PIXEL_RATIO: number,
  FORCE_CPU_ONLY?: boolean,
  MAXIMUM_SURFACES?: number,
  DEFAULT_MAXIMUM_SURFACES: number,
  INNER_WIDTH?: number,
  INNER_HEIGHT?: number,
  VIEWPOINT?: Viewpoint,
} & NodeJS.ProcessEnv