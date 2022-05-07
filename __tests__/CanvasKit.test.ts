import fs from 'fs'
import path from 'path'
import jimp from 'jimp'
import { Skia, SkiaFilterQuality } from '@Skia'
import { CkPath, CkCanvas, CkPaint, CkBlurImageFilter, CkMatrixImageFilter } from '@CanvasKit'
import { Canvas } from 'canvaskit-wasm'

test(`Skia`, async () => {
  await Skia.Init(path.resolve(__dirname, 'canvaskit.wasm'))

  const suface = Skia.MakeSurface(100, 100)

  const ckPath = new CkPath()
  const ckCanvas = new CkCanvas(suface?.getCanvas() as Canvas)

  const svg = ckPath.toSvgString()
  const paint = new CkPaint()

  const imageFilter = new CkBlurImageFilter({
    sigmaX: 0,
    sigmaY: 0,
    tileMode: Skia.TileMode.Clamp
  })
  const matrixImageFilter = new CkMatrixImageFilter({
    matrix: Float32Array.from([
      0, 4, 12, // Row 1
      1, 5, 13, // Row 2
      3, 7, 15, // Row 3
    ]),
    filterQuality: SkiaFilterQuality.Low
  })
  debugger
})