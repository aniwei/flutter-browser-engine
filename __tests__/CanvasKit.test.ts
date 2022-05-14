import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@Skia'
import { Path, Canvas, Paint, BlurImageFilter, MatrixImageFilter } from '@UI'

test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(100, 100)

  const path = Path.malloc()
  const paint = Paint.malloc()
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)


  path.moveTo(10, 10)
  path.lineTo(50, 50)
  path.lineTo(20, 10)
  path.lineTo(10, 20)

  paint.style = Skia.PaintStyle.Fill

  canvas.drawPath(path, paint)

  surface?.flush()
  const img = surface?.makeImageSnapshot();
  const base64 = 'data:image/png;base64,' + Buffer.from(img?.encodeToBytes() as ArrayBuffer).toString('base64')
  
  ;(await jimp.read(Buffer.from(img!.encodeToBytes() as ArrayBuffer))).write(resolve(__dirname, 'test.png'))
})