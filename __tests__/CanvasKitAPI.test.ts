import path from 'path'
import { CanvasKitAPI, Collector } from '@CanvasKitAPI'

test(`CanvasKitAPI`, async () => {
  await CanvasKitAPI.CanvasKitInit(path.resolve(__dirname, 'canvaskit.wasm'))

  Collector.instance.register({}, {
    
  } as any)
})