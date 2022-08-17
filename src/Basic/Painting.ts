/*
 * @Author: Aniwei
 * @Date: 2022-08-04 10:20:42
 */
import type { Image } from '@rendering/Image'

export enum ImageByteFormat {
  RawRGBA,
  RawStraightRGBA,
  RawUnmodified,
  PNG,
}

export enum PixelFormat {
  RGBA8888,
  BGRA8888,
}

export enum Clip {
  None,
  HardEdge,
  AntiAlias,
  AntiAliasWithSaveLayer,
}

export type VideoFrame = {
  format: string | null
  duration: number | null
  codedWidth: number
  codedHeight: number
  displayWidth: number
  displayHeight: number
  allocationSize (): number
  copyTo (destination: Uint8Array): Promise<VideoFrame>
  close (): void
}

export type FrameInfo = {
  duration: number
  image: Image
}

export abstract class Codec {
  abstract frameCount: number
  abstract repetitionCount: number

  abstract getNextFrame (): Promise<FrameInfo>
  abstract dispose (): void
}
