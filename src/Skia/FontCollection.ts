import { Skia } from '@skia/binding'
import { AssertionError } from '@internal/AssertionError'
import { utf8 } from '@internal/Encoding'
import { AssetManager } from '@internal/AssetManager'
import type { Font, FontMgr, TypefaceFontProvider, Typeface } from '@skia'

const kRobotoURL = 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf'
const kAhemURL = '/assets/fonts/ahem.ttf'

export class FontCollection {
  public familyToFontMapping: Map<string, Font[]> = new Map()

  private unloadedFonts: Promise<RegisteredFont | null>[] = []
  private registeredFonts: RegisteredFont[] = []

  public skFontMgr: FontMgr | null = null
  public fontProvider: TypefaceFontProvider | null = null
  public registeredRoboto: boolean = false

  /**
   * @description: 
   * @return {Promise<void>}
   */  
  async ensureFontsLoaded () {
    await this.loadFonts()

    if (this.fontProvider !== null) {
      this.fontProvider!.delete()
      this.fontProvider = null;
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
        list,
        fontFamily, 
        typeface
      ))

      await this.ensureFontsLoaded()
    } else {
      console.warn(`Failed to parse font family "${fontFamily}"`)
      return
    }
  }

  async registerFonts (assetManager: AssetManager) {
    let byteData

    try {
      byteData = await assetManager.load('FontManifest.json')
    } catch (e: any) {
      if (e.status === 404) {
        console.warn('Font manifest does not exist at `${e.url}` – ignoring.')
        return
      } else {
        throw e
      }
    }

    const fontManifest: [] | null = JSON.parse(utf8.decode(byteData.buffer.asUint8List()))
    
    if (fontManifest === null) {
      throw new AssertionError('There was a problem trying to load FontManifest.json')
    }

    for (const fontFamily of fontManifest) {
      const family = fontFamily.readString('family');
      const fontAssets = fontFamily.readList('fonts')

      if (family === 'Roboto') {
        this.registeredRoboto = true
      }

      for (const fontAsset of fontAssets) {
        const asset = fontAsset.readString('asset')
        this.unloadedFonts.push(this.registerFont(assetManager.getAssetURL(asset), family))
      }
    }

    if (!this.registeredRoboto) {
      this.unloadedFonts.push(this.registerFont(kRobotoURL, 'Roboto'))
    }
  }

  async registerFont (
    url: string, 
    family: string
  ): Promise<RegisteredFont | null> {
    let buffer: ArrayBuffer

    try {
      buffer = await fetchFont(url).then(this.getArrayBuffer)
    } catch (e: any) {
      console.warn(`Failed to load font $family at ${url}`)
      console.warn(e)
      return null
    }

    const bytes = buffer.asUint8List()
    const typeface = Skia.binding.Typeface.MakeFreeTypeFaceFromData(bytes.buffer)
    if (typeface !== null) {
      return new RegisteredFont(bytes, family, typeface)
    } else {
      console.warn(`Failed to load font ${family} at ${url}`)
      console.warn(`Verify that ${url} contains a valid font.`)
      return null
    }
  }

  readActualFamilyName (bytes: Uint8Array): string {
    const tmpFontMgr = Skia.binding.FontMgr.FromData([bytes])!
    const actualFamily = tmpFontMgr.getFamilyName(0)
    tmpFontMgr.delete()
    return actualFamily
  }

  async getArrayBuffer (fetchResult) {
    return fetchResult.arrayBuffer().then(x => x)
  }
}


export class RegisteredFont {
  public family: string
  public bytes: Uint8Array
  public typeface: Typeface

  constructor (
    bytes: Uint8Array,
    family: string,
    typeface: Typeface,
  ) {
    this.bytes = bytes 
    this.family = family
    this.typeface = typeface

    const font = new Skia.binding.Font(typeface);
    font.getGlyphBounds([0], null, undefined)
  }
}
