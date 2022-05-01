import { VideoFrame, Uint8List } from '@Types'
import { ImageByteFormat } from '@UI'

export function bgrToRgba (pixels: ByteBuffer) {
  const pixelCount = Math.floor(pixels.lengthInBytes / 4)
  const pixelBytes = pixels.asUint8List()
  
  for (let i = 0; i < pixelCount; i += 4) {
    const b = pixelBytes[i]
    const r = pixelBytes[i + 2]
    
    pixelBytes[i] = r
    pixelBytes[i + 2] = b
  }
}

export function shouldReadPixelsUnmodified (
  videoFrame: VideoFrame , 
  format: ImageByteFormat
) {
  if (format === ImageByteFormat.rawUnmodified) {
    return true
  }

  const isRgbFrame = videoFrame.format === 'RGBA' || videoFrame.format === 'RGBX'
  return format == ui.ImageByteFormat.rawRgba && isRgbFrame
}

export async function encodeVideoFrameAsPng (
  videoFrame: VideoFrame
) {
  const width = videoFrame.displayWidth;
  const height = videoFrame.displayHeight;
  const canvas = html.CanvasElement()

  canvas.width = width
  canvas.height = height
  const ctx = canvas.context2D
  ctx.drawImage(videoFrame, 0, 0)
  const pngBase64 = canvas.toDataUrl().substring('data:image/png;base64,'.length);
  return base64.decode(pngBase64);
}

export async function readVideoFramePixelsUnmodified (
  videoFrame: VideoFrame
) {
  const size = videoFrame.allocationSize()
  const destination = new Uint8List(size)
  await videoFrame.copyTo(destination)
  return destination.buffer;
}

export async function readPixelsFromVideoFrame (
  videoFrame: VideoFrame, 
  format: ImageByteFormat
) {
  if (format === ImageByteFormat.png) {
    const png = await encodeVideoFrameAsPng(videoFrame);
    return png.buffer.asByteData();
  }

  const pixels = await readVideoFramePixelsUnmodified(videoFrame);

  if (shouldReadPixelsUnmodified(videoFrame, format)) {
    return pixels.asByteData();
  }

  // At this point we know we want to read unencoded pixels, and that the video
  // frame is _not_ using the same format as the requested one.
  const isBgrFrame = videoFrame.format === 'BGRA' || videoFrame.format === 'BGRX'
  
  if (format == ui.ImageByteFormat.rawRgba && isBgrFrame) {
    bgrToRgba(pixels)
    return pixels.asByteData();
  }

  // Last resort, just return the original pixels.
  return pixels.asByteData();
}
