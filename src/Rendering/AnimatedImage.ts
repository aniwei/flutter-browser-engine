import { invariant } from 'ts-invariant'
import { Skia, ManagedSkiaObject, SkiaAnimatedImage } from '@skia'
import { HTTP, kBrowserSupportsImageDecoder } from '@platform'
import { URI } from '@internal'
import { Image } from './Image'
import { Codec, FrameInfo } from './Painting'


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

export function skiaInstantiateImageCodec (
  list: Uint8Array,
  targetWidth?: number | null, 
  targetHeight?: number | null, 
) {
  if (kBrowserSupportsImageDecoder) {
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

export class ImageCodecError extends Error { }

export class AnimatedImageFrameInfo implements FrameInfo {
  public duration
  public image: Image

  constructor (duration, image) {
    this.duration = duration
    this.image = image
  }
}

export type AnimatedImageInitOptions = {
  bytes: Uint8Array,
  src: string
}
 
export class AnimatedImage extends ManagedSkiaObject<SkiaAnimatedImage> implements Codec {
  static decodeFromBytes (
    bytes: Uint8Array, 
    src: string
  ) {
    return AnimatedImage.malloc({
      bytes,
      src
    })
  }

  static malloc(options: AnimatedImageInitOptions): AnimatedImage {
    const skia = Skia.MakeAnimatedImageFromEncoded(options.bytes)

    if (skia === null) {
      throw new ImageCodecError(`Failed to decode image data.\nImage source: ${options.src},`)
    }

    const image = new AnimatedImage(
      skia,
      options.bytes,
      options.src
    )

    image.frameCount = skia.getFrameCount()
    image.repetitionCount = skia.getRepetitionCount()

    for (let i = 0; i < image.currentFrameIndex; i++) {
      skia.decodeNextFrame()
    }

    return image
  }

  public frameCount = 0
  public repetitionCount = -1
  public currentFrameIndex = 0
  
  public bytes: Uint8Array
  public src: string
  public disposed = false

  constructor (
    skia: SkiaAnimatedImage,
    bytes: Uint8Array,
    src: string
  ) {
    super(skia)

    this.bytes = bytes
    this.src = src
  }

  async getNextFrame () {
    const skia = this.skia

    const currentFrame = new AnimatedImageFrameInfo(
      skia.currentFrameDuration(),
      Image.malloc(skia.makeImageAtCurrentFrame()!)
    )

    skia.decodeNextFrame()
    this.currentFrameIndex = (this.currentFrameIndex + 1) % this.frameCount

    return currentFrame
  }

  resurrect (): SkiaAnimatedImage {
    const image = Skia.MakeAnimatedImageFromEncoded(this.bytes)

    if (image === null) {
      throw new Error(`Failed to decode image data.\nImage source: ${this.src}`)
    }

    this.frameCount = image.getFrameCount()
    this.repetitionCount = image.getRepetitionCount()

    for (let i = 0; i < this.currentFrameIndex; i++) {
      image.decodeNextFrame()
    }

    return image
  }

  dispose () {
    invariant(!this.dispose, `Cannot dispose a codec that has already been disposed.`)
    this.disposed = true

    this.delete()
  }
}