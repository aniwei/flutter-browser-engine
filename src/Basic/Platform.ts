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
  Window,
  MacOS,
  Unknown
}


export type Viewpoint = {
  width: number
  height: number
}