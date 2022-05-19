import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@Skia'
import { Border, BorderStyle, BoxShape, BorderRadius, BoxDecoration, BoxShadow } from '@Painting'
import { Canvas, Color, Offset, Radius, Rect, Size } from '@UI'
import { ImageConfiguration } from '@Painting'
import { TargetPlatform } from '@Platform'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  const box = new BoxDecoration(
    new Color(0xff00ff00),
    null,
    Border.all(
      new Color(0xffffffff),
      2.0,
      BorderStyle.Solid
    ),
    BorderRadius.only(
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
    ),
    [
        new BoxShadow(
          new Color(0xffff00ff),
          new Offset(12, 12),
          20,
          10
        ) 
    ],
    null,
    Skia.BlendMode.Color,
  )

  const painter = box.createBoxPainter(() => {})

  painter.paint(
    canvas,
    new Offset(10, 10),
    new ImageConfiguration(
      null,
      2,
      null,
      Skia.TextDirection.LTR,
      new Size(100, 100),
      TargetPlatform.MacOS
    )
  )

  surface?.flush()
  const image = surface?.makeImageSnapshot()
  const filename = resolve(__dirname, 'box-decoration.test.png')
  const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
  
  ;(await jimp.read(buffer)).write(filename)
})