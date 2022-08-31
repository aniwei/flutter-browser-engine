/*
 * @Author: Aniwei
 * @Date: 2022-08-19 17:15:06
 */
import { isBrowser } from '@helper/is'
// import * as ServerFetch from './ServerFetch'



export const fetch = isBrowser ?
  window.fetch : async function () {}
