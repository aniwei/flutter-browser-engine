import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@Skia'
import { Border, BorderStyle, BoxShape, BorderRadius } from '@Painting'
import { Canvas, Color, Radius, Rect } from '@UI'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  

  surface?.flush()
  const image = surface?.makeImageSnapshot()
  const filename = resolve(__dirname, 'border.test.png')
  const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
  
  ;(await jimp.read(buffer)).write(filename)
})