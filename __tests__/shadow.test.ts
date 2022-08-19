/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import jimp from 'jimp'
import { resolve } from 'path'
import { ICanvas, TextDirection } from '@skia'
import { Skia } from '@skia/binding'
import { Border, BoxShape } from '@painting/BoxBorder'
import { BorderStyle } from '@painting/BoxBorder'
import { BorderRadius } from '@painting/BorderRadius'
import { Canvas } from '@rendering/Canvas'
import { Radius, Rect } from '@internal/Geometry'
import { Color } from '@internal/Color'
import { runApp } from '../src'


test(`Skia`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })
  const surface = Skia.binding.MakeSurface(513, 1207)
  const canvas = new Canvas(surface?.getCanvas() as ICanvas)

  const border = Border.all(
    new Color(0xff00ff00),
    2.0,
    BorderStyle.Solid
  )


  border.paint(
    canvas,
    new Rect(206.5, 723.6984375, 306.5, 823.6984375),
    Skia.binding.TextDirection.LTR,
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