/*
 * @Author: Aniwei
 * @Date: 2022-08-12 10:20:35
 */
import { BrowserEngine } from '@basic/Platform'

function detectBrowserEngineByVendorAgent (
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