import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@skia'
import { Border, BorderStyle, BoxShape, BorderRadius } from '@painting'
import { Canvas, Color } from '@rendering'
import { Radius, Rect, Size } from '@internal'
import { RenderView, ViewConfiguration, window } from '@ui'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  debugger
  const config = new ViewConfiguration(
    new Size(480, 640),
    2
  )
  
  const view = new RenderView(
    null,
    config,
    window
  )

  view.compositeFrame()
  
  // ;(await jimp.read(buffer)).write(filename)
})