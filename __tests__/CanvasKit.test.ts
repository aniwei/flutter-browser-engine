import fs from 'fs'
import path from 'path'
import jimp from 'jimp'
import { Surface } from 'canvaskit-wasm';
import { CanvasKitAPI } from '@CanvasKitAPI'

function starPath(CanvasKit, X=128, Y=128, R=116) {
  let p = new CanvasKit.Path();
  p.moveTo(X + R, Y);
  for (let i = 1; i < 8; i++) {
    let a = 2.6927937 * i;
    p.lineTo(X + R * Math.cos(a), Y + R * Math.sin(a));
  }
  return p;
}

test(`CanvasKit`, async () => {
  const CanvasKit = await CanvasKitAPI.CanvasKitInit(path.resolve(__dirname, 'canvaskit.wasm'))

  let surface = CanvasKit.MakeSurface(300, 300) as Surface

  const canvas = surface.getCanvas();

  const paint = new CanvasKit.Paint();

  let robotoData = fs.readFileSync(path.join(__dirname, 'Roboto-Regular.woff'));
  const roboto = CanvasKit.Typeface.MakeFreeTypeFaceFromData(robotoData);

  const textPaint = new CanvasKit.Paint();
  textPaint.setColor(CanvasKit.Color(40, 0, 0));
  textPaint.setAntiAlias(true);

  const textFont = new CanvasKit.Font(roboto, 30);

  const skpath = starPath(CanvasKit);
  const dpe = CanvasKit.PathEffect.MakeDash([15, 5, 5, 10], 1);

  paint.setPathEffect(dpe);
  paint.setStyle(CanvasKit.PaintStyle.Stroke);
  paint.setStrokeWidth(5.0);
  paint.setAntiAlias(true);
  paint.setColor(CanvasKit.Color(66, 129, 164, 1.0));

  canvas.clear(CanvasKit.Color(255, 255, 255, 1.0));

  canvas.drawPath(skpath, paint);
  canvas.drawText('Try Clicking!', 10, 280, textPaint, textFont);

  surface.flush();

  const img = surface.makeImageSnapshot();
  const buffer = img.encodeToBytes()?.buffer as Buffer

  (await jimp.read(buffer)).write(path.resolve(__dirname, 'test.png'))
})