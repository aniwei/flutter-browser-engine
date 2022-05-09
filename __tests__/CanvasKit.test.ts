import fs from 'fs'
import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaFilterQuality } from '@Skia'
import { CkPath, CkCanvas, CkPaint, CkBlurImageFilter, CkMatrixImageFilter } from '@CanvasKit'
import { Canvas } from 'canvaskit-wasm'

test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(100, 100)

  const path = CkPath.malloc()
  const paint = CkPaint.malloc()
  const canvas = CkCanvas.malloc(surface?.getCanvas() as Canvas)


  path.moveTo(10, 10)
  path.lineTo(50, 50)
  path.lineTo(20, 10)
  path.lineTo(10, 20)

  paint.style = Skia.PaintStyle.Fill

  canvas.drawPath(path, paint)

  surface?.flush()
  const img = surface?.makeImageSnapshot();
  const base64 = 'data:image/png;base64,' + Buffer.from(img?.encodeToBytes() as ArrayBuffer).toString('base64')
  
})