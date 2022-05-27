import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@Skia'
import { Border, BorderStyle, BoxShape, BorderRadius, BoxDecoration, BoxShadow, LinearGradient } from '@Painting'
import { Canvas, Color, Offset, Radius, Rect, Size } from '@UI'
import { ImageConfiguration } from '@Painting'
import { TargetPlatform } from '@Platform'
import { Alignment } from '@Painting'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  const box = new BoxDecoration({
    border: Border.all(
      new Color(0xffffffff),
      2.0,
      BorderStyle.Solid
    ),
    borderRadius: BorderRadius.only(
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
    ),
    boxShadow: [
        new BoxShadow(
          new Color(0xffff00ff),
          new Offset(12, 12),
          20,
          10
        ) 
    ],
    gradient: new LinearGradient({
      begin: Alignment.topRight,
      end: Alignment.bottomLeft,
      colors: [Color.fromRGBO(63, 68, 72, 1), Color.fromRGBO(36, 41, 46, 1)],
      stops: [0.0, 1.0],
      tileMode: Skia.TileMode.Clamp,
      transform: null
    }),
    backgroundBlendMode: Skia.BlendMode.Color,
  })

  const painter = box.createBoxPainter(() => {})

  painter.paint(
    canvas,
    new Offset(10, 10),
    new ImageConfiguration({
      devicePixelRatio: 2,
      textDirection: Skia.TextDirection.LTR,
      size: new Size(100, 100),
      platform: TargetPlatform.MacOS
    })
  )

  surface?.flush()
  const image = surface?.makeImageSnapshot()
  const filename = resolve(__dirname, 'box-decoration.test.png')
  const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)
  
  ;(await jimp.read(buffer)).write(filename)
})