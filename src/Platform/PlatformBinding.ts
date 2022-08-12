import { Configuration, ConfigurationOptions } from './Configuration'

/*
 * @Author: Aniwei
 * @Date: 2022-08-12 10:45:16
 */

export type PlatformBindingOptions = {
 
} & ConfigurationOptions

export class PlatformBinding {
  static instance: PlatformBinding | null = null

  static initInstances (options: PlatformBindingOptions) {
    new PlatformBinding(options)
  }

  public configuration: Configuration

  constructor (options: PlatformBindingOptions = {}) {
    PlatformBinding.instance = this

    this.configuration = new Configuration({
      baseURI: options.baseURI,
      devicePixelRatio: options.devicePixelRatio,
      maximumSurfaces: options.maximumSurfaces,
      forceCPUOnly: options.forceCPUOnly,
      viewpoint: options.viewpoint
    })
  }
}