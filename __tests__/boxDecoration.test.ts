import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@skia'
import { Canvas, Color } from '@rendering'
import { Offset, Radius, Size } from '@internal'
import { Border, BorderStyle, BorderRadius, BoxDecoration, LinearGradient } from '@painting'
import { ImageConfiguration } from '@painting'
import { TargetPlatform } from '@platform'
import { Colors } from '@rendering'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const surface = Skia.MakeSurface(513, 1207)
  const canvas = Canvas.malloc(surface?.getCanvas() as SkiaCanvas)

  const box = new BoxDecoration({
    color: new Color(0xffff00ff),
    border: Border.all(
      Colors.white,
      2.0,
      BorderStyle.Solid
    ),
    borderRadius: BorderRadius.only(
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
      Radius.circular(10.0),
    ),
    // boxShadow: [
    //   new BoxShadow(
    //     new Color(0xffff00ff),
    //     new Offset(12, 12),
    //     20,
    //     10
    //   ) 
    // ],
    gradient: new LinearGradient({
      colors: [
        Color.fromRGBO(244, 145, 242, 1),
        Color.fromRGBO(209, 255, 221, 1)
      ],
      stops: [0.0, 1.0],
      tileMode: Skia.TileMode.Mirror,
      transform: null
    }),
    // backgroundBlendMode: Skia.BlendMode.Color,
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