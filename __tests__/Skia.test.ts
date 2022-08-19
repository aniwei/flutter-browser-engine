/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import jimp from 'jimp'
import { resolve } from 'path'
import { Skia } from '@skia/binding'
import { ICanvas } from '@skia'
import { Paint } from '@rendering/Paint'
import { Path } from '@rendering/Path'
import { Canvas } from '@rendering/Canvas'
import { runApp } from '../src'

test(`Skia`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })
  

  const surface = Skia.binding.MakeSurface(100, 100)

  const path = new Path()
  const paint = new Paint()
  const canvas = new Canvas(surface?.getCanvas() as ICanvas)


  path.moveTo(10, 10)
  path.lineTo(50, 50)
  path.lineTo(20, 10)
  path.lineTo(10, 20)

  paint.style = Skia.binding.PaintStyle.Fill

  canvas.drawPath(path, paint)

  surface?.flush()
  const img = surface?.makeImageSnapshot();
  const base64 = 'data:image/png;base64,' + Buffer.from(img?.encodeToBytes() as ArrayBuffer).toString('base64')
  
  ;(await jimp.read(Buffer.from(img!.encodeToBytes() as ArrayBuffer))).write(resolve(__dirname, 'test.png'))
})