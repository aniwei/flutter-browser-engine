import { Axios, kBrowserSupportsImageDecoder } from '@Platform'
import { URI } from '@Platform'
import { SkiaAnimatedImageDecoder } from './SkiaAnimatedImageDecoder'
type WebOnlyImageCodecChunkCallback = { (cumulativeBytesLoaded: number, expectedTotalBytes: number): void } 

export function fetchImage (
  url: string, 
  chunkCallback: WebOnlyImageCodecChunkCallback | null
): Promise<Uint8Array>  {
  return new Promise((resolve, reject) => {
    const request = new Axios({ 
      url,
      method: 'GET',
      responseType: 'arraybuffer',
      onDownloadProgress (this, event: ProgressEvent) {
        if (chunkCallback) {
          Reflect.apply(chunkCallback!, this, [event])
        }
      }
    })
    
    request.addEventListener('error', function (event: ProgressEvent) {
      debugger
      reject(new Error(``))
    })
    
    request.addEventListener('load', (event: ProgressEvent) => {
      const status = request.status!
      const accepted = status >= 200 && status < 300
      const fileUri = status === 0
      const notModified = status === 304
      const unknownRedirect = status > 307 && status < 400
      const success = accepted || fileUri || notModified || unknownRedirect
    
      if (!success) {
        reject(new Error(``))
      } else {
        resolve(new Uint8Array(request.response))
      }    
    })
    
    request.send()
  })

}

export async function skiaInstantiateWebImageCodec(
  url: string, 
  chunkCallback: WebOnlyImageCodecChunkCallback | null
) {
  const data = await fetchImage(url, chunkCallback)
  if (kBrowserSupportsImageDecoder) {
     // @TODO
  } else {
    return SkiaAnimatedImageDecoder.decodeFromBytes(data, url)
  }
}

export async function webOnlyInstantiateImageCodecFromURL (
  uri: URI,
  chunkCallback?: WebOnlyImageCodecChunkCallback
) {
  return skiaInstantiateWebImageCodec(uri.toString(), chunkCallback ?? null)
}