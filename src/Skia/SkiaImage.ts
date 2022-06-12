import { HTTP, kBrowserSupportsImageDecoder } from '@platform'
import { URI } from '@platform'
import { AnimatedImage } from '@rendering'

type WebOnlyImageCodecChunkCallback = { (cumulativeBytesLoaded: number, expectedTotalBytes: number): void } 

export function fetchImage (
  url: string, 
  onProgress: WebOnlyImageCodecChunkCallback | null
): Promise<Uint8Array>  {
  return new Promise((resolve, reject) => {
    const request = HTTP.get(url, { 
      responseType: 'arraybuffer',
      onDownloadProgress (this, event: ProgressEvent) {
        if (onProgress) {
          Reflect.apply(onProgress!, this, [event])
        }
      }
    })
    
    request.then(result => {
      resolve(result.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export async function skiaInstantiateWebImageCodec (
  url: string, 
  chunkCallback: WebOnlyImageCodecChunkCallback | null
) {
  const data = await fetchImage(url, chunkCallback)
  if (kBrowserSupportsImageDecoder) {
     // @TODO
  } else {
    return AnimatedImage.decodeFromBytes(data, url)
  }
}

export async function webOnlyInstantiateImageCodecFromURL (
  uri: URI,
  chunkCallback?: WebOnlyImageCodecChunkCallback
) {
  return skiaInstantiateWebImageCodec(uri.toString(), chunkCallback ?? null)
}