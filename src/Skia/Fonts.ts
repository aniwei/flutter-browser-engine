import fs from 'fs-extra'
import { Skia } from '@skia/binding'
import { utf8 } from '@internal/Encoding'
import { fetch } from '@internal/fetch'
import { AbstractAssetManager } from '@internal/AssetManager'
import { isBrowser } from '@helper/is'
import type { Font, FontMgr, TypefaceFontProvider, Typeface } from '@skia'

const kRobotoURL = `https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf`

export abstract class AbstractFonts {
  
  private unloadedFonts: Promise<RegisteredFont | null>[] = []
  private registeredFonts: RegisteredFont[] = []
  
  public fontMgr: FontMgr | null = null
  public registeredRoboto: boolean = false
  public fontProvider: TypefaceFontProvider | null = null
  public familyToFontMapping: Map<string, Font[]> = new Map()

  abstract getFontByteData (uri: string): Promise<ArrayBuffer>

  /**
   * @description: 
   * @return {Promise<void>}
   */  
   async ensureFontsLoaded () {
    await this.loadFonts()

    if (this.fontProvider !== null) {
      this.fontProvider!.delete()
      this.fontProvider = null
    }

    const fontProvider = Skia.binding.TypefaceFontProvider.Make()
    this.familyToFontMapping.clear()

    for (const font of this.registeredFonts) {
      fontProvider!.registerFont(font.bytes, font.family)

      if (!this.familyToFontMapping.has(font.family)) {
        this.familyToFontMapping.set(font.family, [])
      } 

      this.familyToFontMapping.get(font.family)?.push(new Skia.binding.Font(font.typeface))
    }

    // TODO FontFallback
  }

  /**
   * @description: 
   * @return {Promise<void>}
   */  
  async loadFonts () {
    if (this.unloadedFonts.length === 0) {
      return
    }

    const loadedFonts: (RegisteredFont | null)[] = await Promise.all(this.unloadedFonts)

    for (const font of loadedFonts) {
      if (font !== null) {
        this.registeredFonts.push(font)
      }
    }

    this.unloadedFonts = []
  }

  /**
   * @description: 
   * @param {Uint8Array} list
   * @param {string} fontFamily
   * @return {*}
   */
  async loadFontFromList (
    list: Uint8Array, 
    fontFamily: string | null = null
  ) {
    if (fontFamily === null) {
      fontFamily = this.readActualFamilyName(list)

      if (fontFamily === null) {
        console.warn('Failed to read font family name. Aborting font load.')
        return
      }
    }

    const typeface: Typeface | null = Skia.binding.Typeface.MakeFreeTypeFaceFromData(list.buffer)
    
    if (typeface !== null) {
      this.registeredFonts.push(new RegisteredFont(
        fontFamily, 
        list, 
        typeface
      ))

      await this.ensureFontsLoaded()
    } else {
      console.warn(`Failed to parse font family "${fontFamily}"`)
      return
    }
  }

  /**
   * @description: 
   * @param {AbstractAssetManager} assetManager
   * @return {*}
   */
  async registerFonts (assetManager: AbstractAssetManager) {
    let byte

    try {
      byte = await assetManager.load('FontManifest.json')
    } catch (error: any) {
      if (error.status === 404) {
        console.warn(`Font manifest does not exist at "${error.url}" – ignoring.`)
        return
      } else {
        throw error
      }
    }

    const fontManifest = JSON.parse(utf8.decode(byte.buffer))
    if (fontManifest === null) {
      // throw new AssertionError('There was a problem trying to load FontManifest.json')
    }

    for (const fontFamily of fontManifest) {
      const family: string = fontFamily.family
      const fontAssets = fontFamily.fonts

      if (family === 'Roboto') {
        this.registeredRoboto = true
      }

      for (const fontAssetItem of fontAssets) {
        const fontAsset = fontAssetItem 
        const asset = fontAsset.asset
        this.unloadedFonts.push(this.registerFont(assetManager.getAssetURI(asset), family))
      }
    }

    // if (!this.registeredRoboto) {
    //   this.unloadedFonts.push(this.registerFont(kRobotoURL, 'Roboto'))
    // }
  }

  /**
   * @description: 
   * @param {string} url
   * @param {string} family
   * @return {*}
   */
   async registerFont (
    uri: string, 
    family: string
  ): Promise<RegisteredFont | null> {
    let buffer: ArrayBuffer

    try {
      buffer = await this.getFontByteData(uri)
    } catch (e: any) {
      console.warn(`Failed to load font $family at ${uri}`)
      console.warn(e)
      return null
    }

    const typeface = Skia.binding.Typeface.MakeFreeTypeFaceFromData(buffer)
    const bytes = new Uint8Array(buffer)
    if (typeface !== null) {
      return new RegisteredFont(family, bytes, typeface)
    } else {
      console.warn(`Failed to load font ${family} at ${uri}`)
      console.warn(`Verify that ${uri} contains a valid font.`)
      return null
    }
  }

  /**
   * @description: 
   * @param {Uint8Array} bytes
   * @return {string | null}
   */  
   readActualFamilyName (bytes: Uint8Array): string | null {
    const fontMgr = Skia.binding.FontMgr.FromData(bytes)!
    const actualFamily = fontMgr.getFamilyName(0)
    fontMgr.delete()

    return actualFamily
  }  
}

export class LocalFonts extends AbstractFonts {
  getFontByteData (uri: string) {
    return fs.readFile(uri)
  }
}

export class WebOnlyFonts extends AbstractFonts {
  getFontByteData (uri: string) {
    return fetch(uri).then(res => res.arrayBuffer())
  }
}

export const Fonts = isBrowser ? WebOnlyFonts : LocalFonts 

export class RegisteredFont {
  public family: string
  public bytes: Uint8Array
  public typeface: Typeface

  
  /**
   * @description: 
   * @param {string} family
   * @param {Uint8Array} bytes
   * @param {Typeface} typeface
   * @return {*}
   */
  constructor (
    family: string,
    bytes: Uint8Array,
    typeface: Typeface,
  ) {
    this.bytes = bytes 
    this.family = family
    this.typeface = typeface

    const font = new Skia.binding.Font(typeface);
    font.getGlyphBounds([0], null, undefined)
  }
}
