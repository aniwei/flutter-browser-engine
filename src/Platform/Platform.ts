/*
 * @Author: Aniwei
 * @Date: 2022-07-04 12:10:21
 */
import { BrowserEngine } from '@basic/Platform'

export function detectBrowserEngineByVendorAgent (
  vendor: string, 
  agent: string
) {
  if (vendor == 'Google Inc.') {
    return BrowserEngine.Blink
  } else if (vendor == 'Apple Computer, Inc.') {
    return BrowserEngine.Webkit
  } else if (agent.includes('edge/')) {
    return BrowserEngine.Edge;
  } else if (agent.includes('Edg/')) {
    return BrowserEngine.Blink
  }  else if (vendor === '' && agent.includes('firefox')) {
    return BrowserEngine.Firefox
  }

  console.warn('WARNING: failed to detect current browser engine.')
  return BrowserEngine.Unknown
}
  
export function detectBrowserEngine () {
  const vendor = window.navigator.vendor;
  const agent = window.navigator.userAgent.toLowerCase()

  return detectBrowserEngineByVendorAgent(vendor, agent)
}

export const isWindow = (
  typeof process !== 'undefined' && 
  Object.prototype.toString.call(process) === '[object process]' &&
  process.platform === 'win32'
)

export const kCurrentURI = isWindow ? window.location.href : null

export const kImageDecoderExperimentEnabled = (
  false
)

export const kBrowserSupportsXMLHTTPRequest = isWindow && typeof window.XMLHttpRequest === 'object'
export const kBrowserSupportsFetch = isWindow && typeof window.fetch
export const kBrowserDevicePixelRatio = isWindow ? (window.devicePixelRatio || 2.0) : 2.0

export const kBrowserSupportsImageDecoder = kImageDecoderExperimentEnabled 
export const kBrowserSupportsFinalizationRegistry = isWindow ? 
  (typeof window.FinalizationRegistry === 'function') :
  (typeof globalThis.FinalizationRegistry === 'function')

export const kSupportsFinalizationRegistry = (
  kBrowserSupportsFinalizationRegistry ||
  typeof globalThis.FinalizationRegistry === 'function'
)