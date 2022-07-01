import { resolve } from 'path'
import { Skia } from '@skia'
import { URI } from '@internal'
import { ImageConfiguration, NetworkImage } from '@painting'
import { runApp } from '../src'


test(`fetchImage`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  runApp()

  const uri = URI.parse('https://img.zcool.cn/community/01917e60bd78de11013f47203d628a.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100')
  

  const image = new NetworkImage(uri.toString())
  const stream = image.resolve(new ImageConfiguration())


})