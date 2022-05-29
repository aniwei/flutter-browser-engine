import invariant from 'ts-invariant'
import { ImageConfiguration, ImageProvider } from './ImageProvider'
import { URI } from '@Platform'
import { ImageChunkEvent } from './ImageStream'

export abstract class NetworkImage extends ImageProvider<NetworkImage> {
  public url: string
  public scale: number
  public headers: Map<string, string> | null

  constructor (
    url: string,
    scale: number = 1.0, 
    headers?: Map<string, string> | null
  ) {
    headers = headers ?? null

    invariant(url !== null)
    invariant(scale !== null)

    super()

    this.url = url
    this.scale = scale
    this.headers = headers
  }

  async obtainKey (configuration: ImageConfiguration) {
    return this
  }

  async load (
    key: NetworkImage, 
    decode
  ) {
    return new MulitiFrameImagesStream(
      chunkEvents,
      codec: this.loadAsync,
      scale: key.scale,
      debugLabel: key.url
    )
  }

  async loadAsync (
    key: NetworkImage,
    decode,
    chunkEvents
  ) {
    invariant(key === this)

    const resolved = URI.base.resolve(key.url)

    return await webOnlyInstantiateImageCodecFromURL(resolved, (bytes, total) => {
      chunkEvents.add(new ImageChunkEvent(bytes, total))
    })
  }

  isEqula (other: NetworkImage | null) {
    if (other === null) {
      return false
    }

    if (other === this) {
      return true
    }

    return (
      other instanceof NetworkImage &&
      this.url === other.url &&
      this.scale === other.scale
    )
  }

  toString () {
    return ``
  } 
}