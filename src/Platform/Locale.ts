import invariant from "ts-invariant"

const kDeprecatedLanguageSubtagMap: Map<string, string> = new Map()

kDeprecatedLanguageSubtagMap.set('in','id')
kDeprecatedLanguageSubtagMap.set('iw','he')
kDeprecatedLanguageSubtagMap.set('ji','yi')
kDeprecatedLanguageSubtagMap.set('jw','jv')
kDeprecatedLanguageSubtagMap.set('mo','ro')
kDeprecatedLanguageSubtagMap.set('aam', 'aas')
kDeprecatedLanguageSubtagMap.set('adp', 'dz')
kDeprecatedLanguageSubtagMap.set('aue', 'ktz')
kDeprecatedLanguageSubtagMap.set('ayx', 'nun')
kDeprecatedLanguageSubtagMap.set('bgm', 'bcg')
kDeprecatedLanguageSubtagMap.set('bjd', 'drl')
kDeprecatedLanguageSubtagMap.set('ccq', 'rki')
kDeprecatedLanguageSubtagMap.set('cjr', 'mom')
kDeprecatedLanguageSubtagMap.set('cka', 'cmr')
kDeprecatedLanguageSubtagMap.set('cmk', 'xch')
kDeprecatedLanguageSubtagMap.set('coy', 'pij')
kDeprecatedLanguageSubtagMap.set('cqu', 'quh')
kDeprecatedLanguageSubtagMap.set('drh', 'khk')
kDeprecatedLanguageSubtagMap.set('drw', 'prs')
kDeprecatedLanguageSubtagMap.set('gav', 'dev')
kDeprecatedLanguageSubtagMap.set('gfx', 'vaj')
kDeprecatedLanguageSubtagMap.set('ggn', 'gvr')
kDeprecatedLanguageSubtagMap.set('gti', 'nyc')
kDeprecatedLanguageSubtagMap.set('guv', 'duz')
kDeprecatedLanguageSubtagMap.set('hrr', 'jal')
kDeprecatedLanguageSubtagMap.set('ibi', 'opa')
kDeprecatedLanguageSubtagMap.set('ilw', 'gal')
kDeprecatedLanguageSubtagMap.set('jeg', 'oyb')
kDeprecatedLanguageSubtagMap.set('kgc', 'tdf')
kDeprecatedLanguageSubtagMap.set('kgh', 'kml')
kDeprecatedLanguageSubtagMap.set('koj', 'kwv')
kDeprecatedLanguageSubtagMap.set('krm', 'bmf')
kDeprecatedLanguageSubtagMap.set('ktr', 'dtp')
kDeprecatedLanguageSubtagMap.set('kvs', 'gdj')
kDeprecatedLanguageSubtagMap.set('kwq', 'yam')
kDeprecatedLanguageSubtagMap.set('kxe', 'tvd')
kDeprecatedLanguageSubtagMap.set('kzj', 'dtp')
kDeprecatedLanguageSubtagMap.set('kzt', 'dtp')
kDeprecatedLanguageSubtagMap.set('lii', 'raq')
kDeprecatedLanguageSubtagMap.set('lmm', 'rmx')
kDeprecatedLanguageSubtagMap.set('meg', 'cir')
kDeprecatedLanguageSubtagMap.set('mst', 'mry')
kDeprecatedLanguageSubtagMap.set('mwj', 'vaj')
kDeprecatedLanguageSubtagMap.set('myt', 'mry')
kDeprecatedLanguageSubtagMap.set('nad', 'xny')
kDeprecatedLanguageSubtagMap.set('ncp', 'kdz')
kDeprecatedLanguageSubtagMap.set('nnx', 'ngv')
kDeprecatedLanguageSubtagMap.set('nts', 'pij')
kDeprecatedLanguageSubtagMap.set('oun', 'vaj')
kDeprecatedLanguageSubtagMap.set('pcr', 'adx')
kDeprecatedLanguageSubtagMap.set('pmc', 'huw')
kDeprecatedLanguageSubtagMap.set('pmu', 'phr')
kDeprecatedLanguageSubtagMap.set('ppa', 'bfy')
kDeprecatedLanguageSubtagMap.set('ppr', 'lcq')
kDeprecatedLanguageSubtagMap.set('pry', 'prt')
kDeprecatedLanguageSubtagMap.set('puz', 'pub')
kDeprecatedLanguageSubtagMap.set('sca', 'hle')
kDeprecatedLanguageSubtagMap.set('skk', 'oyb')
kDeprecatedLanguageSubtagMap.set('tdu', 'dtp')
kDeprecatedLanguageSubtagMap.set('thc', 'tpo')
kDeprecatedLanguageSubtagMap.set('thx', 'oyb')
kDeprecatedLanguageSubtagMap.set('tie', 'ras')
kDeprecatedLanguageSubtagMap.set('tkk', 'twm')
kDeprecatedLanguageSubtagMap.set('tlw', 'weo')
kDeprecatedLanguageSubtagMap.set('tmp', 'tyj')
kDeprecatedLanguageSubtagMap.set('tne', 'kak')
kDeprecatedLanguageSubtagMap.set('tnf', 'prs')
kDeprecatedLanguageSubtagMap.set('tsf', 'taj')
kDeprecatedLanguageSubtagMap.set('uok', 'ema')
kDeprecatedLanguageSubtagMap.set('xba', 'cax')
kDeprecatedLanguageSubtagMap.set('xia', 'acn')
kDeprecatedLanguageSubtagMap.set('xkh', 'waw')
kDeprecatedLanguageSubtagMap.set('xsj', 'suj')
kDeprecatedLanguageSubtagMap.set('ybd', 'rki')
kDeprecatedLanguageSubtagMap.set('yma', 'lrr')
kDeprecatedLanguageSubtagMap.set('ymt', 'mtm')
kDeprecatedLanguageSubtagMap.set('yos', 'zom')
kDeprecatedLanguageSubtagMap.set('yuu', 'yug')

const kDeprecatedRegionSubtagMap: Map<string, string> = new Map()

kDeprecatedLanguageSubtagMap.set('BU', 'MM')
kDeprecatedLanguageSubtagMap.set('DD', 'DE')
kDeprecatedLanguageSubtagMap.set('FX', 'FR')
kDeprecatedLanguageSubtagMap.set('TP', 'TL')
kDeprecatedLanguageSubtagMap.set('YD', 'YE')
kDeprecatedLanguageSubtagMap.set('ZR', 'CD')

export class Locale {
  static fromSubtags(
    languageCode: string = 'und',
    scriptCode: string,
    countryCode: string | null,
  ) {
    invariant(languageCode !== null)
    invariant(languageCode !== '')
    invariant(scriptCode !== '')
    invariant(countryCode !== '')

    return new Locale(
      languageCode,
      scriptCode,
      countryCode
    )
  }
  public language: string
  public country: string
  public script: string | null

  get languageCode (): string {
    return kDeprecatedLanguageSubtagMap.get(this.language)!
  } 

  get countryCode (): string {
    return kDeprecatedRegionSubtagMap.get(this.country)!
  } 
  

  constructor(
    languageCode,
    scriptCode,
    conutryCode
  ) {
    invariant(this.languageCode !== null)
    invariant(this.languageCode !== '')
    this.script = null
    this.country = conutryCode
    this.language = languageCode
  }

  
  eq (other: Locale) {
    if (other === this) {
      return true
    }

    return (
      other instanceof Locale &&
      other.language === this.language &&
      other.script === this.script &&
      other.country === this.country
    )
  }

  toLanguageTag (): string {
    return this.rawToString('-')
  }

  rawToString (separator: string): string {
    //  StringBuffer out = StringBuffer(languageCode);
    // if (scriptCode != null) {
    //   out.write('$separator$scriptCode');
    // }
    // if (_countryCode != null) {
    //   out.write('$separator$countryCode');
    // }
    // return out.toString();
    return ``
  }
}
