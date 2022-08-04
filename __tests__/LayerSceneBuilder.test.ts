/*
 * @Author: Aniwei
 * @Date: 2022-06-14 11:12:04
 */
import jimp from 'jimp'
import { resolve } from 'path'
import { Skia } from '@skia/Skia'
import { LayerSceneBuilder } from '@rendering/LayerSceneBuilder'


test(`LayerSceneBuilder`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const builder = new LayerSceneBuilder()

})