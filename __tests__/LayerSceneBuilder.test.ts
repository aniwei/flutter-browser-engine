/*
 * @Author: Aniwei
 * @Date: 2022-06-14 11:12:04
 */
import jimp from 'jimp'
import { resolve } from 'path'
import { LayerSceneBuilder } from '@rendering/LayerSceneBuilder'
import { runApp } from '../src'


test(`LayerSceneBuilder`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })

  const builder = new LayerSceneBuilder()

})