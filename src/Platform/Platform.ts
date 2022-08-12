/*
 * @Author: Aniwei
 * @Date: 2022-07-04 12:10:21
 */

import { isBrowser } from '@helper/is'
import { detectOperatingSystem } from '@helper/detectOperationSystem'

import type { Env } from '@basic/Platform'

// globalThis
export const kGlobalThis = isBrowser 
  ? window
  : globalThis

// operation system
export const kOperatingSystem = detectOperatingSystem()

// browser uri
export const kCurrentURI = isBrowser ? window.location.href : null

export const kImageDecoderExperimentEnabled = (
  false
)

export const kSupportsXMLHTTPRequest = isBrowser && typeof kGlobalThis.XMLHttpRequest === 'object'
export const kSupportsFetch = isBrowser && typeof kGlobalThis.fetch
export const kDevicePixelRatio = isBrowser ? (kGlobalThis.devicePixelRatio || 2.0) : 2.0

export const kSupportsImageDecoder = kImageDecoderExperimentEnabled 
export const kSupportsFinalizationRegistry = typeof kGlobalThis.FinalizationRegistry === 'function'

// getting config from env
export const kEnv = {
  // device pixel ratio
  DEVICE_PIXEL_RATIO: 2.0,
  // maximum surfaces
  MAXIMUM_SURFACES: 8,
  // force cpu only
  FORCE_CPU_ONLY: false,
  ...process.env
} as Env