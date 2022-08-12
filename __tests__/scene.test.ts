/*
 * @Author: Aniwei
 * @Date: 2022-06-30 10:14:12
 */
import { resolve } from 'path'
import { Size } from '@internal/Geometry'
import { RenderView, ViewConfiguration } from '@ui/RenderView'
import { window } from '@ui/Window'
import { PipelineOwner } from '@ui/RenderObject'
import { runApp } from '../src'
import { PlatformBinding } from '@platform/PlatformBinding'


test(`Skia`, async () => {
  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm'),
    viewpoint: {
      width: 480,
      height: 640
    }
  })

  const configuration = new ViewConfiguration({
    size: PlatformBinding.instance?.configuration.size as Size,
    devicePixelRatio: PlatformBinding.instance?.configuration.devicePixelRatio as number
  })

  const pipeline = new PipelineOwner(() => {

  }, () => {

  }, () => {

  })
  
  const view = new RenderView({
    configuration,
    window
  })

  pipeline.rootNode = view

  view.prepareInitialFrame()
  view.compositeFrame()
  
  // ;(await jimp.read(buffer)).write(filename)
})