export type int = number
export type bool = boolean
export type double = number

export class Uint8List extends Uint8Array {}
export class Float32List extends Float32Array {}
export class Float64List extends Float64Array {}
export abstract class VideoFrame {
  abstract allocationSize (): number
  abstract copyTo (destination: Uint8List): Promise<any>
  abstract format: string
  abstract codedWidth: string
  abstract codedHeight: string
  abstract displayWidth: string
  abstract displayHeight: string
  abstract duration: string
  abstract close (): void
}