/*
 * @Author: Aniwei
 * @Date: 2022-08-12 10:25:11
 */
export const isBrowser = (
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) === '[object Window]' &&
  typeof window.document !== 'undefined' &&
  Object.prototype.toString.call(window.document) === '[object HTMLDocument]'
)

export const isWindow = (
  typeof process !== 'undefined' && 
  Object.prototype.toString.call(process) === '[object process]' &&
  process.platform === 'win32'
)

