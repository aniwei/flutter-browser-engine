/*
 * @Author: weiyanhai weiyanhai@jd.com
 * @Date: 2022-06-13 09:47:07
 * @LastEditors: weiyanhai weiyanhai@jd.com
 * @LastEditTime: 2022-08-03 13:50:03
 * @FilePath: /flutter-browser-engine/__tests__/URI.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import jimp from 'jimp'
import { resolve } from 'path'
import { URI } from '@internal/URI'

test(`URI`, async () => {
  const uri = URI.parse('https://www.yiibai.com/dart/dart_programming_list_replacerange_function.html?name=weiyanhai#wechat_directi')

  uri.pathSegments
  uri.queryParameters
})