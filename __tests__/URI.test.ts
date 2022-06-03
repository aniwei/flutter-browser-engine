import jimp from 'jimp'
import { resolve } from 'path'
import { URI } from '@Platform'

test(`URI`, async () => {
  const uri = URI.parse('https://www.yiibai.com/dart/dart_programming_list_replacerange_function.html?name=weiyanhai#wechat_directi')

  uri.pathSegments
  uri.queryParameters
})