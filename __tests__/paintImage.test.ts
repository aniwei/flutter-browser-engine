/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import Jimp from 'jimp'
import { resolve } from 'path'
import { URI } from '@internal/URI'
import { Rect } from '@internal/Geometry'
import { Canvas } from '@rendering/Canvas'
import { ICanvas, FilterQuality } from '@skia'
import { Skia } from '@skia/binding'
import { ImageConfiguration } from '@painting/ImageProvider'
import { ImageStreamListener } from '@painting/ImageStream'
import { Alignment } from '@painting/Alignment'
import { NetworkImage } from '@painting/NetworkImage'
import { runApp } from '../src'
import { ImageRepeat, paintImage } from '@painting/DecorationImage'

test(`paintImage`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })

  const uri = URI.parse('https://img.zcool.cn/community/01917e60bd78de11013f47203d628a.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100')
  const surface = Skia.binding.MakeSurface(513, 1207)
  const canvas = new Canvas(surface?.getCanvas() as ICanvas)

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
      FilterQuality.Low,
      true
    )
    surface?.flush()
    const image = surface?.makeImageSnapshot()
    const filename = resolve(__dirname, 'paintImage.test.png')
    const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
    
    ;(await Jimp.read(buffer)).write(filename)
  })

  stream.addListener(listener)

  // await new Promise(() => {})

})