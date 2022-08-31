/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { resolve } from 'path'
import { runApp } from '../src'
import { Fonts } from '@skia/Fonts'
import { AssetManager } from '@internal/AssetManager'

test(`font`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })

  const assets = new AssetManager(`assets`)
  const fonts = new Fonts()

  await fonts.registerFonts(assets)

  await fonts.ensureFontsLoaded()
})