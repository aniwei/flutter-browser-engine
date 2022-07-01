import { invariant } from 'ts-invariant'
import { URI } from '@internal'
import { Codec, webOnlyInstantiateImageCodecFromURL } from '@rendering'
import { DecoderCallback, ImageConfiguration, ImageProvider } from './ImageProvider'
import { MultiFrameImageCompleter } from './ImageStream'

export class NetworkImage extends ImageProvider<NetworkImage> {
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

  load (
    key: NetworkImage, 
    decode: DecoderCallback
  ) {
    return new MultiFrameImageCompleter(
      this.loadAsync(key, decode),
      key.scale,
      key.url
    )
  }

  async loadAsync (
    key: NetworkImage,
    decode,
  ): Promise<Codec> {
    invariant(key === this)

    let resolved 

    try {
      resolved = URI.base.resolve(key.url)
    } catch (error) {
      resolved = key.url
    }


    return await webOnlyInstantiateImageCodecFromURL(resolved, (bytes, total) => {
      // chunkEvents.add(new ImageChunkEvent(bytes, total))
    }) as Codec
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