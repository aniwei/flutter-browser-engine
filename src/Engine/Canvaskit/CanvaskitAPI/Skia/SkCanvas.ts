import { double } from '@Types';
import { Canvas } from 'canvaskit-wasm';
import { CanvasKit } from '../CanvasKit';
import { Skia } from './Skia';
import { SkObject } from './SkObject';


export class SkCanvas extends SkObject<Canvas> implements Canvas {
  constructor () {
    super(new Skia.CanvasKit.Canvas())
  }

  abstract addArc ()
}
