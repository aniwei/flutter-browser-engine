/*
 * @Author: Aniwei
 * @Date: 2022-06-13 09:47:07
 */
import { resolve } from 'path'
import { URI } from '@internal/URI'
import { ImageConfiguration } from '@painting/ImageProvider'
import { NetworkImage } from '@painting/NetworkImage'
import { runApp } from '../src'


test(`fetchImage`, async () => {

  await runApp({
    baseURI: resolve(__dirname, 'canvaskit.wasm')
  })

  const uri = URI.parse('https://img.zcool.cn/community/01917e60bd78de11013f47203d628a.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,Q_100')
  

  const image = new NetworkImage(uri.toString())


})