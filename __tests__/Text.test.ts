/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import jimp from 'jimp'
import fs from 'fs'
import { Skia } from '@skia/binding'
import { resolve } from 'path'
import { runApp } from '../src'
import { ICanvas } from '@skia'

test(`Text`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })

  const wrapTo = 200
  const surface = Skia.binding.MakeSurface(400, 400)
  const canvas = surface?.getCanvas() as ICanvas
  const font = fs.readFileSync(resolve(__dirname, 'Roboto-Regular.woff'))
  const paint = new Skia.binding.Paint();

  paint.setColor(Skia.binding.RED);
  paint.setStyle(Skia.binding.PaintStyle.Stroke);

  const fontMgr = Skia.binding.FontMgr.FromData(font);
  const paraStyle = new Skia.binding.ParagraphStyle({
    textStyle: {
        color: Skia.binding.BLACK,
        fontFamilies: ['Roboto'],
        fontSize: 20,
    },
    textAlign: Skia.binding.TextAlign.Center,
  });
  const builder = Skia.binding.ParagraphBuilder.Make(paraStyle, fontMgr!);
  builder.addText('There should be ');
  builder.addPlaceholder(10, 10, Skia.binding.PlaceholderAlignment.AboveBaseline,
                        Skia.binding.TextBaseline.Ideographic);
  builder.addText('a space in this sentence.\n');

  builder.addText('There should be ');
  builder.addPlaceholder(10, 10, Skia.binding.PlaceholderAlignment.BelowBaseline,
                        Skia.binding.TextBaseline.Ideographic);
  builder.addText('a dropped space in this sentence.\n');

  builder.addText('There should be ');
  builder.addPlaceholder(10, 10, undefined, undefined, 20);
  builder.addText('an offset space in this sentence.\n');
  const paragraph = builder.build();
  paragraph.layout(300);

  let rects = paragraph.getRectsForPlaceholders();

  canvas.clear(Skia.binding.WHITE);
  canvas.drawParagraph(paragraph, 10, 10);

  for (const rect of rects) {
    const p = new Skia.binding.Paint();
    p.setColor(Skia.binding.Color(0, 0, 255));
    p.setStyle(Skia.binding.PaintStyle.Stroke);
    // Account for the (10, 10) offset when we painted the paragraph.
    const placeholder =
        Skia.binding.LTRBRect(rect[0]+10,rect[1]+10,rect[2]+10,rect[3]+10);
    canvas.drawRect(placeholder, p);
    p.delete();
  }

  canvas.clear(Skia.binding.WHITE)
  canvas.drawRect(Skia.binding.LTRBRect(10, 10, wrapTo + 10, 230), paint)
  canvas.drawParagraph(paragraph, 10, 10)

  surface?.flush()

  const image = surface?.makeImageSnapshot()
  const filename = resolve(__dirname, 'text.test.png')
  const buffer = Buffer.from(image!.encodeToBytes() as ArrayBuffer)

  ;(await jimp.read(buffer)).write(filename)

  paint.delete()
  fontMgr?.delete()
  paragraph.delete()
  builder.delete()
})