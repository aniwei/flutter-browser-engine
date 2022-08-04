import { HTTP } from '@platform/HTTP'


export type WebOnlyImageCodecChunkCallback = { (cumulativeBytesLoaded: number, expectedTotalBytes: number): void } 

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