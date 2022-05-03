import fs from 'fs'
import path from 'path'
import jimp from 'jimp'
import { Skia } from '@Skia'
import { CkPath } from '@CanvasKit'

test(`Skia`, async () => {
  await Skia.Init(path.resolve(__dirname, 'canvaskit.wasm'))

  const ckPath = new CkPath()
})