import { Skia } from '@skia';
import { FrameInfo, Image } from '@rendering';
import invariant from 'ts-invariant';

const kAvifSignature = 'ftyp'.split('').map(str => str.charCodeAt(0))

export function isAvif (data: Uint8Array) {
  firstByteLoop: for (let i = 0; i < 16; i += 1) {
    for (let j = 0; j < kAvifSignature.length; j += 1) {
      if (i + j >= data.length) {
        return false
      }
      if (data[i + j] !== kAvifSignature[j]) {
        continue firstByteLoop
      }
    }
    return true;
  }
  return false;
}

export function detectContentType (data: Uint8Array): string | null {
  formatLoop: for (const format of ImageFileFormat.values) {
    if (data.length < format.header.length) {
      continue;
    }

    for (let i = 0; i < format.header.length; i++) {
      const magicByte = format.header[i]
      if (magicByte === null) {
        continue
      }

      const headerByte = data[i];
      if (headerByte !== magicByte) {
        continue formatLoop
      }
    }

    return format.contentType
  }

  if (isAvif(data)) {
    return 'image/avif';
  }

  return null
}

export class ImageFileFormat {
  public header: (number | null)[]
  public contentType: string

  constructor (
    header: (number | null)[], 
    contentType: string
  ) {
    this.header = header
    this.contentType = contentType
  }

  static values: ImageFileFormat[] = [
    // PNG
    new ImageFileFormat([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A], 'image/png'),

    // GIF87a
    new ImageFileFormat([0x47, 0x49, 0x46, 0x38, 0x37, 0x61], 'image/gif'),

    // GIF89a
    new ImageFileFormat([0x47, 0x49, 0x46, 0x38, 0x39, 0x61], 'image/gif'),

    // JPEG
    new ImageFileFormat([0xFF, 0xD8, 0xFF, 0xDB], 'image/jpeg'),
    new ImageFileFormat([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01], 'image/jpeg'),
    new ImageFileFormat([0xFF, 0xD8, 0xFF, 0xEE], 'image/jpeg'),
    new ImageFileFormat([0xFF, 0xD8, 0xFF, 0xE1], 'image/jpeg'),

    // WebP
    new ImageFileFormat([0x52, 0x49, 0x46, 0x46, null, null, null, null, 0x57, 0x45, 0x42, 0x50], 'image/webp'),

    // BMP
    new ImageFileFormat([0x42, 0x4D], 'image/bmp'),
  ]
}


export type BrowserImageDecoderInitOptions = {
  data: Uint8Array,
  debugSource: string,
  contentType?: string | null,
  targetWidth?: number | null,
  targetHeight?: number | null
}

export type BrowserImageDecoderCreateoptions = BrowserImageDecoderInitOptions

export type BrowserImageDecoderDecodeOptions = {
  frameIndex?: number,
  completeFramesOnly?: boolean
}

export class BrowserImageDecoder {
  static async create(options: BrowserImageDecoderCreateoptions): Promise<BrowserImageDecoder> {
    const data = options.data
    const contentType = detectContentType(data)

    if (contentType === null) {
      let fileHeader: string
      if (data.length > 0) {
        fileHeader = '[' + bytesToHexString(data.slice(0, Math.min(10, data.length))) + ']'
      } else {
        fileHeader = 'empty'
      }

      throw new Error(`Failed to detect image file format using the file header.\nFile header was $fileHeader.\nImage source: $debugSource`)
    }

    const decoder = new BrowserImageDecoder({
      ...options,
      data,
      contentType,
    })

    // Call once to initialize the decoder and populate late fields.
    await decoder.getOrCreateWebDecoder()
    return decoder
  }

  public contentType: string
  public targetWidth: string
  public targetHeight:  string | null
  public data:  number | null
  public debugSource:  number | null

  public frameCount!: number
  public repetitionCount!: number
  public cachedWebDecoder!: ImageDecoder | null 

  public isDisposed = false
  public nextFrameIndex: number = 0

  constructor (options: BrowserImageDecoderInitOptions) {
    options.contentType = options.contentType ?? null
    options.targetWidth = options.targetWidth ?? null
    options.targetHeight = options.targetHeight ?? null
    
    this.contentType = options.contentType
    this.targetWidth = options.targetWidth
    this.targetHeight = options.targetHeight
    this.data = options.data
    this.debugSource = options.debugSource
  }

  dispose () {
    this.isDisposed = true
    this.cachedWebDecoder?.close()
    this.cachedWebDecoder = null
  }

  debugCheckNotDisposed() {
    invariant(
      !this.isDisposed,
      'Cannot use this image decoder. It has been disposed of.'
    )
  }
  
  public get debugCachedWebDecoder () {
    return this.cachedWebDecoder
  }

  final AlarmClock _cacheExpirationClock = AlarmClock(() => DateTime.now());

  async getWebDecoder () {
    if (this.cachedWebDecoder !== null) {
      _cacheExpirationClock.datetime = DateTime.now().add(_kWebDecoderExpireDuration);
      return this.cachedWebDecoder!
    }

    _cacheExpirationClock.callback = null;
    try {
      const webDecoder = new ImageDecoder({
        type: this.contentType,
        data: this.data,
        premultiplyAlpha: 'premultiply',
        desiredWidth: this.targetWidth,
        desiredHeight: this.targetHeight,
        colorSpaceConversion: 'default',
        preferAnimation: true,
      })

      await webDecoder.tracks.ready
      await webDecoder.completed

      this.frameCount = webDecoder.tracks.selectedTrack!.frameCount
      this.repetitionCount = webDecoder.tracks.selectedTrack!.repetitionCount

      this.cachedWebDecoder = webDecoder

      _cacheExpirationClock.callback = () => {
        _cachedWebDecoder?.close();
        _cachedWebDecoder = null;
        _cacheExpirationClock.callback = null;
      };
      _cacheExpirationClock.datetime = DateTime.now().add(_kWebDecoderExpireDuration);

      return webDecoder
    } catch (error) {
      throw new Error(`Failed to decode image using the browser\'s ImageDecoder API.\nImage source: $debugSource\nOriginal browser error: $error`)
    }
  }

  async getNextFrame (): Promise<FrameInfo> {
    this.debugCheckNotDisposed()
    const webDecoder = await this.getWebDecoder()
    const result = await webDecoder.decode({
      frameIndex: this.nextFrameIndex
    })

    const frame = result.image
    this.nextFrameIndex = (this.nextFrameIndex + 1) % this.frameCount

    const skImage = Skia.MakeLazyImageFromTextureSource(
      frame,
      {
        alphaType: Skia.AlphaType.Premul,
        colorType: Skia.ColorType.RGBA_8888,
        colorSpace: Skia.ColorSpace.SRGB,
        width: frame.displayWidth,
        height: frame.displayHeight
      }
    )

    final Duration duration = Duration(microseconds: frame.duration ?? 0);

    if (skImage === null) {
      throw new Error('Failed to create image from pixel data decoded using the browser\'s ImageDecoder.')
    }

    const image = new Image(skImage, frame)
    return Future<FrameInfo>.value(AnimatedImageFrameInfo(duration, image))
  }
}
