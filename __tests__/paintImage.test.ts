import { resolve } from 'path'
import { Skia, SkiaCanvas, SkiaFilterQuality, toSkiaFilterQuality } from '@Skia'
import { URI } from '@Platform'
import { Alignment, ImageConfiguration, ImageStreamListener, NetworkImage } from '@Painting'
import { runApp } from '../src'
import { ImageRepeat, paintImage } from '@Painting'
import { Canvas, Rect } from '@UI'
import Jimp from 'jimp'

test(`paintImage`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  runApp()

  const uri = URI.parse('https://img.zcool.cn/community/01917e60bd78de11013f47203d628a.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100')
  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  const image = new NetworkImage(uri.toString())
  const stream = image.resolve(new ImageConfiguration())

  const listener = new ImageStreamListener(async (imageInfo) => {
    paintImage(
      canvas,
      new Rect(0, 0, 406, 543),
      imageInfo.image,
      imageInfo.debugLabel,
      1.0,
      1.0,
      null,
      null,
      Alignment.center,
      null,
      ImageRepeat.NoRepeat,
      false,
      false,
      SkiaFilterQuality.Low,
      true
    )
    surface?.flush()
    const image = surface?.makeImageSnapshot()
    const filename = resolve(__dirname, 'paintImage.test.png')
    const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
    
    ;(await Jimp.read(buffer)).write(filename)
  })

  stream.addListener(listener)

  await new Promise(() => {})

})