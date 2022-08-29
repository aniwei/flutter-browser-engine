import { Skia } from '@skia/binding'
import type { Font, FontMgr, TypefaceFontProvider, Typeface } from '@skia'
import { utf8 } from '@internal/Encoding'
import { AssertionError } from 'assert'
import { fetch } from '@internal/fetch'

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
    let byte

    try {
      byte = await assetManager.load('FontManifest.json')
    } catch (error: any) {
      if (error.status === 404) {
        console.warn('Font manifest does not exist at `${e.url}` – ignoring.')
        return
      } else {
        throw error
      }
    }

    const fontManifest = JSON.parse(utf8.decode(byte.buffer))
    if (fontManifest === null) {
      // throw new AssertionError('There was a problem trying to load FontManifest.json')
    }

    

    for (final Map<String, dynamic> fontFamily
        in fontManifest.cast<Map<String, dynamic>>()) {
      final String family = fontFamily.readString('family');
      final List<dynamic> fontAssets = fontFamily.readList('fonts');

      if (family == 'Roboto') {
        registeredRoboto = true;
      }

      for (final dynamic fontAssetItem in fontAssets) {
        final Map<String, dynamic> fontAsset = fontAssetItem as Map<String, dynamic>;
        final String asset = fontAsset.readString('asset');
        _unloadedFonts
            .add(_registerFont(assetManager.getAssetUrl(asset), family));
      }
    }

    /// We need a default fallback font for CanvasKit, in order to
    /// avoid crashing while laying out text with an unregistered font. We chose
    /// Roboto to match Android.
    if (!registeredRoboto) {
      // Download Roboto and add it to the font buffers.
      _unloadedFonts.add(_registerFont(_robotoUrl, 'Roboto'));
    }
  }

  async registerFont (
    url: string, 
    family: string
  ): Promise<RegisteredFont | null> {
    let buffer: ArrayBuffer

    try {
      buffer = await fetch(url, {
        
      }).then(result => {
        return result.arrayBuffer()
      })
    } catch (e: any) {
      console.warn(`Failed to load font $family at ${url}`)
      console.warn(e)
      return null
    }

    const bytes = new Uint8Array(buffer)
    const typeface = Skia.binding.Typeface.MakeFreeTypeFaceFromData(bytes.buffer)
    if (typeface !== null) {
      return new RegisteredFont(family, bytes, typeface)
    } else {
      console.warn(`Failed to load font ${family} at ${url}`)
      console.warn(`Verify that ${url} contains a valid font.`)
      return null
    }
  }

  readActualFamilyName (bytes: Uint8Array): string {
    const fontMgr = Skia.binding.FontMgr.FromData(bytes)!
    const actualFamily = fontMgr.getFamilyName(0)
    fontMgr.delete()
    return actualFamily
  }  
}


export class RegisteredFont {
  public family: string
  public bytes: Uint8Array
  public typeface: Typeface

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
