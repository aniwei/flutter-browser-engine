import jimp from 'jimp'
import { resolve } from 'path'
import { Skia, SkiaCanvas } from '@skia'
import { URI } from '@platform'
import { webOnlyInstantiateImageCodecFromURL } from '@rendering'
import { LayerSceneBuilder } from '@rendering'


test(`LayerSceneBuilder`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const builder = new LayerSceneBuilder()

})