import fs from 'fs'
import path from 'path'
import jimp from 'jimp'
import { Skia } from '@Skia'
import { CkPath, CkCanvas } from '@CanvasKit'
import { Canvas } from 'canvaskit-wasm'

test(`Skia`, async () => {
  await Skia.Init(path.resolve(__dirname, 'canvaskit.wasm'))

  const suface = Skia.MakeSurface(100, 100)

  const ckPath = new CkPath()
  const ckCanvas = new CkCanvas(suface?.getCanvas() as Canvas)

  debugger;
  const svg = ckPath.toSvgString()
})