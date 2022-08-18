/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import jimp from 'jimp'
import { Skia } from '@skia/binding'
import { resolve } from 'path'
import { runApp } from '../src'

test(`Text`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })


  debugger
  const paragraph = new Skia.binding.ParagraphStyle()

})