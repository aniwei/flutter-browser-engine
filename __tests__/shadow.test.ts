import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas, SkiaTextDirection } from '@skia'
import { Border, BorderStyle, BoxShape, BorderRadius } from '@painting'
import { Canvas, Color } from '@rendering'
import { Radius, Rect } from '@internal'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))
  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  const border = Border.all(
    new Color(0xff00ff00),
    2.0,
    BorderStyle.Solid
  )


  border.paint(
    canvas,
    new Rect(206.5, 723.6984375, 306.5, 823.6984375),
    Skia.TextDirection.LTR,
    BoxShape.Rectangle,
    BorderRadius.only(
      Radius.circular(10.0),
      Radius.zero,
      Radius.zero,
      Radius.circular(10.0),
    )
  )

  surface?.flush()
  const image = surface?.makeImageSnapshot()
  const filename = resolve(__dirname, 'border.test.png')
  const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
  
  ;(await jimp.read(buffer)).write(filename)
})