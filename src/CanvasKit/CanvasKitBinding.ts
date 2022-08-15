/*
 * @Author: Aniwei
 * @Date: 2022-08-15 10:24:19
 */
import invariant from 'ts-invariant'
import CanvasKitInit from 'canvaskit-wasm'
import { CanvasKit } from './CanvasKit'
import type { CanvasKitInitOptions } from 'canvaskit-wasm'

export type CanvasKitBindingOptions = {
  baseURI: string,
  devicePixelRatio?: number
}

export class CanvasKitBinding {
  static instance: CanvasKitBinding 

  static async init (options: CanvasKitBindingOptions): Promise<void> {
    const binding = new CanvasKitBinding(options)
    await binding.init()
  }

  public skia!: CanvasKit
  public baseURI: string
  public devicePixelRatio: number

  constructor (options: CanvasKitBindingOptions) {
    invariant(options.baseURI, `Cannot missing options.baseURI.`)

    this.baseURI = options.baseURI
    this.devicePixelRatio = options.devicePixelRatio ?? 2.0
  }

  async init () {
    return (
      CanvasKitInit as unknown as { (options: CanvasKitInitOptions): Promise<CanvasKit> }
    )({
      locateFile: () => {
        return this.baseURI
      }
    }).then(skia => {
      this.skia = skia
    })
  }
}