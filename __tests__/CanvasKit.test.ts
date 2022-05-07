import fs from 'fs'
import path from 'path'
import jimp from 'jimp'
import { Skia, SkiaFilterQuality } from '@Skia'
import { CkPath, CkCanvas, CkPaint, CkBlurImageFilter, CkMatrixImageFilter } from '@CanvasKit'
import { Canvas } from 'canvaskit-wasm'

test(`Skia`, async () => {
  await Skia.malloc(path.resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(100, 100)

  const ckPath = CkPath.malloc()
  const paint = CkPaint.malloc()
  
  const ckCanvas = CkCanvas.malloc(surface?.getCanvas() as Canvas)


  const imageFilter = CkBlurImageFilter.malloc({
    sigmaX: 0,
    sigmaY: 0,
    tileMode: Skia.TileMode.Clamp
  })
  const matrixImageFilter = CkMatrixImageFilter.malloc({
    matrix: Float32Array.from([
      0, 4, 12, // Row 1
      1, 5, 13, // Row 2
      3, 7, 15, // Row 3
    ]),
    filterQuality: SkiaFilterQuality.Low
  })

  ckPath.moveTo(10, 10)
  ckPath.lineTo(50, 50)
  ckPath.lineTo(20, 10)
  ckPath.lineTo(10, 20)

  paint.style = Skia.PaintStyle.Fill

  ckCanvas.drawPath(ckPath, paint)

  surface?.flush()
  const img = surface?.makeImageSnapshot();

  const base64 = 'data:image/png;base64,' + Buffer.from(img?.encodeToBytes() as ArrayBuffer).toString('base64')

  debugger
})