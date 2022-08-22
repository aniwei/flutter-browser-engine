import { utf8 } from './Encoding'
import { URI } from './URI'

export class AssetManager {
  static defaultAssetsDir = 'assets'

  public assetsDir: string

  constructor (assetsDir: string = AssetManager.defaultAssetsDir) {
    this.assetsDir = assetsDir
  }

  get baseURL () {
    // return html.window.document
    // .querySelectorAll('meta')
    // .whereType<html.MetaElement?>()
    // .firstWhere((dynamic e) => e.name == 'assetBase', orElse: () => null)
    // ?.content;
    return null
  }

  getAssetURL (asset: string) {
    if (URI.parse(asset).hasScheme) {
      return URI.encodeFull(asset)
    }
    return URI.encodeFull((this.baseURL ?? '') + `${this.assetsDir}/${asset}`)
  }

  async load (asset: string) {
    const url = this.getAssetURL(asset)
    try {
      // request
      // final ByteBuffer response = request.response as ByteBuffer;
      // return response.asByteData();
    } catch (e: any) {
      
      console.warn(`Caught ProgressEvent with target: ${1}`)
      throw e
    }
  }
}


class AssetManagerError extends Error {
  
  public url: string
  public status: number

  constructor (
    url: string, 
    status: number
  ) {
    super()

    this.url = url
    this.status = status
  }

  toString () {
    return `Failed to load asset at "${this.url}" (${this.status})`
  }
}

class WebOnlyMockAssetManager implements AssetManager {
  public defaultAssetsDir = ''
  public defaultAssetManifest = '{}'
  public defaultFontManifest = [
    {
        family: "$robotoFontFamily",
        fonts: [{"asset":"$robotoTestFontUrl"}]
    }, {
        family: "$ahemFontFamily",
        fonts:[{"asset":"$ahemFontUrl"}]
    }
  ]

  get assetsDir () {
    return defaultAssetsDir
  } 

  get baseURL () {
    return ''
  }

  getAssetURL (asset: string) {
    return asset
  }

  async load (asset: string) {
    if (asset === this.getAssetURL('AssetManifest.json')) {
      return this.toByteData(utf8.encode(this.defaultAssetManifest))
    }

    if (asset === this.getAssetURL('FontManifest.json')) {
      return this.toByteData(utf8.encode(this.defaultFontManifest))
    }

    throw new AssetManagerError(asset, 404)
  }

  toByteData (bytes: Uint8Array) {
    const data = new DataView(new Uint8Array(bytes.length))
    for (let i = 0; i < bytes.length; i++) {
      data.setUint8(i, bytes[i])
    }
    return data
  }
}
