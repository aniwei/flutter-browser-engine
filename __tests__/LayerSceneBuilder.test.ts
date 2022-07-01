import jimp from 'jimp'
import { resolve } from 'path'
import { Skia } from '@skia'
import { LayerSceneBuilder } from '@rendering'


test(`LayerSceneBuilder`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const builder = new LayerSceneBuilder()

})