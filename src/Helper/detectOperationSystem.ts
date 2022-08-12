/*
 * @Author: Aniwei
 * @Date: 2022-08-12 10:19:30
 */
import { OperatingSystem } from '@basic/Platform'

export function detectOperatingSystem (
  overridePlatform?: string,
  overrideUserAgent?: string,
  overrideMaxTouchPoints?: number,
): OperatingSystem {
  const platform = overridePlatform ?? ``
  const userAgent = overrideUserAgent ?? ``

  if (platform.startsWith('Mac')) {
    const maxTouchPoints = overrideMaxTouchPoints ?? 0
    if (maxTouchPoints > 2) {
      return OperatingSystem.iOS
    }
    return OperatingSystem.MacOS
  } else if (platform.toLowerCase().includes('iphone') ||
      platform.toLowerCase().includes('ipad') ||
      platform.toLowerCase().includes('ipod')) {
    return OperatingSystem.iOS
  } else if (userAgent.includes('Android')) {
    return OperatingSystem.Android
  } else if (platform.startsWith('Linux')) {
    return OperatingSystem.Linux
  } else if (platform.startsWith('Win')) {
    return OperatingSystem.Windows
  } else {
    return OperatingSystem.Unknown
  }
}