/*
 * @Author: Aniwei
 * @Date: 2022-08-03 14:52:24
 */
import { URI } from '@internal/URI'
import { WebOnlyImageCodecChunkCallback, fetchImage } from '@platform/fetchImage'
import { kSupportsImageDecoder } from '@platform/Platform'
import { AnimatedImage } from './AnimatedImage'


export async function skiaInstantiateWebImageCodec (
  url: string, 
  chunkCallback: WebOnlyImageCodecChunkCallback | null
) {
  const data = await fetchImage(url, chunkCallback)
  if (kSupportsImageDecoder) {
     // @TODO
  } else {
    return AnimatedImage.decodeFromBytes(data, url)
  }
}

export function skiaInstantiateImageCodec (
  list: Uint8Array,
  targetWidth?: number | null, 
  targetHeight?: number | null, 
) {
  if (kSupportsImageDecoder) {
    // return CkBrowserImageDecoder.create(
    //   data: list,
    //   debugSource: 'encoded image bytes',
    //   targetWidth: targetWidth,
    //   targetHeight: targetHeight,
    // );
  } else {
    return AnimatedImage.decodeFromBytes(list, 'encoded image bytes')
  }
}

export async function webOnlyInstantiateImageCodecFromURL (
  uri: URI,
  chunkCallback?: WebOnlyImageCodecChunkCallback
) {
  const codec = await skiaInstantiateWebImageCodec(uri.toString(), chunkCallback ?? null)
  return codec
}

export async function instantiateImageCodec(
  list: Uint8Array,
  targetWidth?: number | null,
  targetHeight?: number | null,
  allowUpscaling = true,
) {
  return skiaInstantiateImageCodec(list, targetWidth, targetHeight)
}