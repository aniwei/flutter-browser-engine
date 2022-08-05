/*
 * @Author: Aniwei
 * @Date: 2022-06-30 10:14:12
 */
import { resolve } from 'path'
import { Skia } from '@skia/Skia'
import { Size } from '@internal/Geometry'
import { RenderView, ViewConfiguration } from '@ui/RenderView'
import { window } from '@ui/Window'
import { PipelineOwner } from '@ui/RenderObject'


test(`Skia`, async () => {
  await Skia.malloc(resolve(__dirname, 'canvaskit.wasm'))

  const config = new ViewConfiguration({
    size: new Size(480, 640),
    devicePixelRatio: 2
  })

  const pipeline = new PipelineOwner(() => {

  }, () => {

  }, () => {

  })
  
  const view = new RenderView({
    configuration: config,
    window
  })

  pipeline.rootNode = view

  view.prepareInitialFrame()
  view.compositeFrame()
  
  // ;(await jimp.read(buffer)).write(filename)
})