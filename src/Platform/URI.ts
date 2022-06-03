import invariant from 'ts-invariant'
import { isWindow, kCurrentURI } from '.'
import { ArgumentError } from './ArgumentError'
import { StringBuffer } from './StringBuffer'
import { Encoding, utf8 } from './Encoding'
import { UnsupportedError } from './UnsupportedError'

const kSpace = 0x20
const kPercent = 0x25
const kAmpersand = 0x26
const kPlus = 0x2B
const kDot = 0x2E
const kSlash = 0x2F
const kColon = 0x3A
const kEquals = 0x3d
const kUpperCaseA = 0x41
const kUpperCaseZ = 0x5A
const kLeftBracket = 0x5B
const kBackSlash = 0x5C
const kRightBracket = 0x5D
const kLowerCaseA = 0x61
const kLowerCaseF = 0x66
const kLowerCaseZ = 0x7A

const kHexDigits = '0123456789ABCDEF'

const kSchemeEndIndex = 1
const kHostStartIndex = 2
const kPortStartIndex = 3
const kPathStartIndex = 4
const kQueryStartIndex = 5
const kFragmentStartIndex = 6
const kNotSimpleIndex = 7
const kSchemeStart = 20
const kURIStart = 0
const kNonSimpleEndStates = 14

const kUnreservedTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                                   -.
  0x6000, // 0x20 - 0x2f  0000000000000110
  //                      0123456789
  0x03ff, // 0x30 - 0x3f  1111111111000000
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kUnreserved2396Table = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !     '()*  -.
  0x6782, // 0x20 - 0x2f  0100000111100110
  //                      0123456789
  0x03ff, // 0x30 - 0x3f  1111111111000000
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kEncodeFullTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       ! #$ &'()*+,-./
  0xffda, // 0x20 - 0x2f  0101101111111111
  //                      0123456789:; = ?
  0xafff, // 0x30 - 0x3f  1111111111110101
  //                      @ABCDEFGHIJKLMNO
  0xffff, // 0x40 - 0x4f  1111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kSchemeTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                                 + -.
  0x6800, // 0x20 - 0x2f  0000000000010110
  //                      0123456789
  0x03ff, // 0x30 - 0x3f  1111111111000000
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ
  0x07ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz
  0x07ff, // 0x70 - 0x7f  1111111111100010
]

const kRegNameTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $%&'()*+,-.
  0x7ff2, // 0x20 - 0x2f  0100111111111110
  //                      0123456789 ; =
  0x2bff, // 0x30 - 0x3f  1111111111010100
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kGenDelimitersTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                         #           /
  0x8008, // 0x20 - 0x2f  0001000000000001
  //                                :    ?
  0x8400, // 0x30 - 0x3f  0000000000100001
  //                      @
  0x0001, // 0x40 - 0x4f  1000000000000000
  //                                 [ ]
  0x2800, // 0x50 - 0x5f  0000000000010100
  //
  0x0000, // 0x60 - 0x6f  0000000000000000
  //
  0x0000, // 0x70 - 0x7f  0000000000000000
]

const kUserInfoTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $ &'()*+,-.
  0x7fd2, // 0x20 - 0x2f  0100101111111110
  //                      0123456789:; =
  0x2fff, // 0x30 - 0x3f  1111111111110100
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kPathCharTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $ &'()*+,-.
  0x7fd2, // 0x20 - 0x2f  0100101111111110
  //                      0123456789:; =
  0x2fff, // 0x30 - 0x3f  1111111111110100
  //                      @ABCDEFGHIJKLMNO
  0xffff, // 0x40 - 0x4f  1111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kPathCharOrSlashTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $ &'()*+,-./
  0xffd2, // 0x20 - 0x2f  0100101111111111
  //                      0123456789:; =
  0x2fff, // 0x30 - 0x3f  1111111111110100
  //                      @ABCDEFGHIJKLMNO
  0xffff, // 0x40 - 0x4f  1111111111111111

  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kQueryCharTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $ &'()*+,-./
  0xffd2, // 0x20 - 0x2f  0100101111111111
  //                      0123456789:; = ?
  0xafff, // 0x30 - 0x3f  1111111111110101
  //                      @ABCDEFGHIJKLMNO
  0xffff, // 0x40 - 0x4f  1111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kZoneIDTable = [
  //                     LSB            MSB
  //                      |              |
  0x0000, // 0x00 - 0x0f  0000000000000000
  0x0000, // 0x10 - 0x1f  0000000000000000
  //                       !  $%&'()*+,-.
  0x6000, // 0x20 - 0x2f  0000000000000110
  //                      0123456789 ; =
  0x03ff, // 0x30 - 0x3f  1111111111000000
  //                       ABCDEFGHIJKLMNO
  0xfffe, // 0x40 - 0x4f  0111111111111111
  //                      PQRSTUVWXYZ    _
  0x87ff, // 0x50 - 0x5f  1111111111100001
  //                       abcdefghijklmno
  0xfffe, // 0x60 - 0x6f  0111111111111111
  //                      pqrstuvwxyz   ~
  0x47ff, // 0x70 - 0x7f  1111111111100010
]

const kScannerTables = createTables()

function property<T> (
  getter: { (v: T, k?): T } = function (this, v, k) { return v as T },
  setter: { (v: T, k): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [this[k], k])
      },
      set (value: T) {
        return Reflect.apply(setter, this, [value, k])
      }
    })
  }
}

function hexDigitValue (char: number) {
  invariant(char >= 0 && char <= 0xFFFF)
  const digit0 = 0x30
  const a = 0x61
  const f = 0x66;
  const digit = char ^ digit0
  if (digit <= 9) {
    return digit
  }

  const letter = (char | 0x20)
  if (a <= letter && letter <= f) {
    return letter - (a - 10)
  }
  return -1
}

function stringOrNullLength (s: string | null) {
  return (s === null) ? 0 : s.length
}

function toUnmodifiableStringList (
  key: string, 
  list: string[]
) {
  return Array.from(list)
}

function skipPackageNameChars (
  source: string, 
  start: number, 
  end: number
) {
  let dots = 0;
  for (let i = start; i < end; i++) {
    var char = source.charCodeAt(i)
    if (char === kSlash) {
      return (dots !== 0) ? i : -1
    }
    if (
      char === kPercent || 
      char === kColon
    ) {
      return -1
    }

    dots |= char ^ kDot
  }

  return -1
}

function startsWithData (
  text: string, 
  start: number
) {
  // Multiply by 3 to avoid a non-colon character making delta be 0x20.
  let delta = (text.charCodeAt(start + 4) ^ kColon) * 3
  delta |= text.charCodeAt(start) ^ 0x64 /*d*/
  delta |= text.charCodeAt(start + 1) ^ 0x61 /*a*/
  delta |= text.charCodeAt(start + 2) ^ 0x74 /*t*/
  delta |= text.charCodeAt(start + 3) ^ 0x61 /*a*/
  return delta
}

function scan (
  uri: string, 
  start: number, 
  end: number, 
  state: number, 
  indices: number[]
) {
  const tables = kScannerTables
  invariant(end <= uri.length)
  for (let i = start; i < end; i++) {
    const table = tables[state]
    
    let char = uri.charCodeAt(i) ^ 0x60
    // Use 0x1f (nee 0x7f) to represent all unhandled characters.
    if (char > 0x5f) {
      char = 0x1f
    }
    const transition = table[char]
    state = transition & 0x1f
    indices[transition >> 5] = i
  }

  return state
}

function createTables () {
  const stateCount = 22
  const schemeOrPath = 1
  const authOrPath = 2
  const authOrPathSlash = 3
  const uinfoOrHost0 = 4
  const uinfoOrHost = 5
  const uinfoOrPort0 = 6
  const uinfoOrPort = 7
  const ipv6Host = 8
  const relPathSeg = 9
  const pathSeg = 10
  const path = 11
  const query = 12
  const fragment = 13
  const schemeOrPathDot = 14
  const schemeOrPathDot2 = 15
  const relPathSegDot = 16
  const relPathSegDot2 = 17
  const pathSegDot = 18
  const pathSegDot2 = 19
  const scheme0 = kSchemeStart
  const scheme = 21
  const schemeEnd = kSchemeEndIndex << 5
  const hostStart = kHostStartIndex << 5
  const portStart = kPortStartIndex << 5
  const pathStart = kPathStartIndex << 5
  const queryStart = kQueryStartIndex << 5
  const fragmentStart = kFragmentStartIndex << 5
  const notSimple = kNotSimpleIndex << 5

  const unreserved = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~'
  const subDelims = '!$&\'()*+,;='
  const pchar = `${unreserved}${subDelims}`

  const tables: Uint8Array[] = Array.from({ length: stateCount }, () => new Uint8Array(96))
  
  const build = (
    state, 
    defaultTransition
  ) => {
    return tables[state].fill(defaultTransition, 0, 96)
  }

  const setChars = (
    target: Uint8Array, 
    chars: string, 
    transition: number
  ) => {
    for (let i = 0; i < chars.length; i++) {
      let char = chars.charCodeAt(i)
      target.set([transition], char ^ 0x60)
    }
  }

  const setRange = (
    target: Uint8Array, 
    range: string, 
    transition: number
  ) => {
    for (let i = range.charCodeAt(0), n = range.charCodeAt(1); i <= n; i++) {
      target.set([transition], i ^ 0x60)
    }
  }

  let b

  b = build(kURIStart, schemeOrPath | notSimple)
  setChars(b, pchar, schemeOrPath)
  setChars(b, '.', schemeOrPathDot)
  setChars(b, ':', authOrPath | schemeEnd);
  setChars(b, '/', authOrPathSlash)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(schemeOrPathDot, schemeOrPath | notSimple)
  setChars(b, pchar, schemeOrPath)
  setChars(b, '.', schemeOrPathDot2)
  setChars(b, ':', authOrPath | schemeEnd)
  setChars(b, '/', pathSeg | notSimple)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(schemeOrPathDot2, schemeOrPath | notSimple)
  setChars(b, pchar, schemeOrPath)
  setChars(b, '%', schemeOrPath | notSimple)
  setChars(b, ':', authOrPath | schemeEnd)
  setChars(b, '/', relPathSeg)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(schemeOrPath, schemeOrPath | notSimple)
  setChars(b, pchar, schemeOrPath)
  setChars(b, ':', authOrPath | schemeEnd)
  setChars(b, '/', pathSeg)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(authOrPath, path | notSimple)
  setChars(b, pchar, path | pathStart)
  setChars(b, '/', authOrPathSlash | pathStart)
  setChars(b, '.', pathSegDot | pathStart)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(authOrPathSlash, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '/', uinfoOrHost0 | hostStart)
  setChars(b, '.', pathSegDot)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(uinfoOrHost0, uinfoOrHost | notSimple)
  setChars(b, pchar, uinfoOrHost)
  setRange(b, 'AZ', uinfoOrHost | notSimple)
  setChars(b, ':', uinfoOrPort0 | portStart)
  setChars(b, '@', uinfoOrHost0 | hostStart)
  setChars(b, '[', ipv6Host | notSimple)
  setChars(b, '/', pathSeg | pathStart)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(uinfoOrHost, uinfoOrHost | notSimple)
  setChars(b, pchar, uinfoOrHost)
  setRange(b, 'AZ', uinfoOrHost | notSimple)
  setChars(b, ':', uinfoOrPort0 | portStart)
  setChars(b, '@', uinfoOrHost0 | hostStart)
  setChars(b, '/', pathSeg | pathStart)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(uinfoOrPort0, uinfoOrPort | notSimple)
  setRange(b, '19', uinfoOrPort)
  setChars(b, '@', uinfoOrHost0 | hostStart)
  setChars(b, '/', pathSeg | pathStart)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(uinfoOrPort, uinfoOrPort | notSimple)
  setRange(b, '09', uinfoOrPort)
  setChars(b, '@', uinfoOrHost0 | hostStart)
  setChars(b, '/', pathSeg | pathStart)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(ipv6Host, ipv6Host)
  setChars(b, ']', uinfoOrHost)
  b = build(relPathSeg, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '.', relPathSegDot)
  setChars(b, '/', pathSeg | notSimple)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(relPathSegDot, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '.', relPathSegDot2)
  setChars(b, '/', pathSeg | notSimple)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(relPathSegDot2, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '/', relPathSeg)
  setChars(b, '?', query | queryStart);
  setChars(b, '#', fragment | fragmentStart);
  b = build(pathSeg, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, ".", pathSegDot)
  setChars(b, "/", pathSeg | notSimple)
  setChars(b, "?", query | queryStart)
  setChars(b, "#", fragment | fragmentStart)
  b = build(pathSegDot, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '.', pathSegDot2)
  setChars(b, '/', pathSeg | notSimple)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(pathSegDot2, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '/', pathSeg | notSimple)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(path, path | notSimple)
  setChars(b, pchar, path)
  setChars(b, '/', pathSeg)
  setChars(b, '?', query | queryStart)
  setChars(b, '#', fragment | fragmentStart)
  b = build(query, query | notSimple)
  setChars(b, pchar, query)
  setChars(b, '?', query)
  setChars(b, '#', fragment | fragmentStart)
  b = build(fragment, fragment | notSimple)
  setChars(b, pchar, fragment)
  setChars(b, '?', fragment)
  b = build(scheme0, scheme | notSimple)
  setRange(b, 'az', scheme)
  b = build(scheme, scheme | notSimple)
  setRange(b, 'az', scheme)
  setRange(b, '09', scheme)
  setChars(b, '+-.', scheme)
  return tables
}


class URIFormatError extends Error { 
  public uri: string
  public offset: number | null

  constructor (
    message: string, 
    uri: string, 
    offset: number | null
  ) {
    super(message)
    this.uri = uri
    this.offset = offset
  }
}


export type URIInitOptions = {
  scheme?: string | null,
  userInfo?: string | null,
  host?: string | null,
  port?: number | null,
  path?: string | null,
  query?: string | null,
  fragment?: string | null,
  pathSegments?: string[] | null
  queryParameters?:  Map<string, string[]> | null
}

export class URI {
  static get isWindows (): boolean {
    return isWindow
  }

  static get base () {
    const uri = kCurrentURI
    if (uri === null) {
      throw new UnsupportedError(`URI.base is not supported.`)
    }

    return URI.parse(uri)
  }

  static getDefaultPort (scheme: string) {
    if (scheme === 'http') {
      return 80
    } else if (scheme === 'https') {
      return 443
    }
    
    return 0
  }

  static compareScheme (
    scheme: string, 
    uri: string
  ): boolean {
    for (let i = 0; i < scheme.length; i++) {
      const schemeChar = scheme.charCodeAt(i)
      let uriChar = uri.charCodeAt(i)
      let delta = schemeChar ^ uriChar;
      if (delta !== 0) {
        if (delta === 0x20) {
          // Might be a case difference.
          let lowerChar = uriChar | delta
          if (0x61 /*a*/ <= lowerChar && lowerChar <= 0x7a /*z*/) {
            continue
          }
        }
        return false
      }
    }
    return true
  }

  static packageNameEnd (
    uri: URI, 
    path: string
  ) {
    if (
      uri.isScheme('package') && 
      !uri.hasAuthority
    ) {
      return skipPackageNameChars(path, 0, path.length)
    }

    return -1
  }

  static splitQueryStringAll (
    query: string,
    encoding: Encoding = utf8
  ): Map<string, string[]> {
    const result = new Map()
    let i = 0
    let start = 0
    let equalsIndex = -1

    const parsePair = (
      start: number, 
      equalsIndex: number, 
      end: number
    ) => {
      let key: string
      let value: string

      if (start === end) {
        return
      }

      if (equalsIndex < 0) {
        key = URI.URIDecode(query, start, end, encoding, true)
        value = ''
      } else {
        key = URI.URIDecode(query, start, equalsIndex, encoding, true)
        value = URI.URIDecode(query, equalsIndex + 1, end, encoding, true)
      }

      if (result.has(key)){
        result.get(key).push(value)
      } else {
        result.set(key, [value])
      }
    }

    while (i < query.length) {
      const char = query.charCodeAt(i)
      if (char === kEquals) {
        if (equalsIndex < 0) {
          equalsIndex = i
        }
      } else if (char === kAmpersand) {
        parsePair(start, equalsIndex, i)
        start = i + 1
        equalsIndex = -1
      }
      i++
    }
    parsePair(start, equalsIndex, i)
    return result
  }

  static splitQueryString (
    query: string,
    encoding: Encoding = utf8
  ): Map<string, string>  {
  return query.split('&').reduce((map, element) => {
    let index = element.indexOf('=')
    if (index === -1) {
      if (element !== '') {
        map.set(URI.decodeQueryComponent(element, encoding), '')
      }
    } else if (index !== 0) {
      const key = element.substring(0, index)
      const value = element.substring(index + 1)
      map.set(
        URI.decodeQueryComponent(key, encoding), 
        URI.decodeQueryComponent(value, encoding)
      )
    }

    return map
  }, new Map())
}

  static computeQueryParametersAll (query: string | null): Map<string, string[]>  {
    if (query === null || query.length === 0)  {
      return new Map()
    }

    const queryParameterLists = URI.splitQueryStringAll(query)

    for (const [key, list] of queryParameterLists) {
      queryParameterLists.set(key, toUnmodifiableStringList(key, list))
    }

    return queryParameterLists
  }

  static checkWindowsDriveLetter (
    charCode: number, 
    argumentError: boolean
  ) {
    if (
      (kUpperCaseA <= charCode && charCode <= kUpperCaseZ) ||
      (kLowerCaseA <= charCode && charCode <= kLowerCaseZ)
    ) {
      return
    }
    if (argumentError) {
      throw new ArgumentError(
        'Illegal drive letter ' + String.fromCharCode(charCode)
      )
    } else {
      throw new UnsupportedError(
        'Illegal drive letter ' + String.fromCharCode(charCode)
      )
    }
  }

  static checkWindowsPathReservedCharacters (
    segments: string[], 
    argumentError: boolean,
    firstSegment: number = 0
  ) {
    for (var segment in segments.slice(firstSegment)) {
      if (segment.match(/["*/:<>?\\|]/)) {
        if (argumentError) {
          throw new ArgumentError('Illegal character in path')
        } else {
          throw new UnsupportedError(`Illegal character in path: ${segment}`)
        }
      }
    }
  }

  static checkNonWindowsPathReservedCharacters (
    segments: string[], 
    argumentError: boolean
  ) {
  for (const segment in segments) {
    if (segment.includes('/')) {
      if (argumentError) {
        throw new ArgumentError(`Illegal path character ${segment}`)
      } else {
        throw new UnsupportedError(`Illegal path character ${segment}`)
      }
    }
  }
}

  static toWindowsFilePath (uri: URI): string {
    let hasDriveLetter = false
    const segments = uri.pathSegments
    if (
      segments &&
      segments.length > 0 &&
      segments[0].length === 2 &&
      segments[0].charCodeAt(1) === kColon
    ) {
      URI.checkWindowsDriveLetter(segments[0].charCodeAt(0), false)
      URI.checkWindowsPathReservedCharacters(segments, false, 1)
      hasDriveLetter = true
    } else {
      URI.checkWindowsPathReservedCharacters(segments as string[], false, 0)
    }
    const result = new StringBuffer()
    if (
      uri.hasAbsolutePath && 
      !hasDriveLetter
    ){
      result.write('\\')
    }
    if (uri.hasAuthority) {
      const host = uri.host as string
      if (host.length > 0) {
        result.write('\\')
        result.write(host)
        result.write('\\')
      }
    }
    result.writeAll(segments as string[], '\\')
    if (hasDriveLetter && (segments as string[]).length === 1) {
      result.write('\\')
    }
    return result.toString()
  }

  static computePathSegments (pathToSplit: string): string[] {
    if (pathToSplit.length > 0 && pathToSplit.charCodeAt(0) === kSlash) {
      pathToSplit = pathToSplit.substring(1)
    }

    return pathToSplit.length === 0 ? 
      []
      : Array.from(pathToSplit.split('/').map(URI.decodeComponent))
  }

  static decodeQueryComponent (
    encodedComponent: string,
    encoding: Encoding = utf8
  ): string {
    return URI.URIDecode(encodedComponent, 0, encodedComponent.length, encoding, true)
  }

  static decodeComponent (encodedComponent: string): string {
    return URI.URIDecode(
      encodedComponent, 
      0, 
      encodedComponent.length, 
      utf8, 
      false
    )
  }

  static hexCharPairToByte (
    s: string, 
    pos: number
  ) {
    let byte = 0
    for (let i = 0; i < 2; i++) {
      let charCode = s.charCodeAt(pos + i)
      if (0x30 <= charCode && charCode <= 0x39) {
        byte = byte * 16 + charCode - 0x30
      } else {
        // Check ranges A-F (0x41-0x46) and a-f (0x61-0x66).
        charCode |= 0x20
        if (0x61 <= charCode && charCode <= 0x66) {
          byte = byte * 16 + charCode - 0x57;
        } else {
          throw new ArgumentError('Invalid URL encoding')
        }
      }
    }

    return byte
  }

  static URIDecode ( 
    text: string, 
    start: number, 
    end: number, 
    encoding: Encoding, 
    plusToSpace: boolean
  ) {
    invariant(0 <= start)
    invariant(start <= end)
    invariant(end <= text.length)
    // First check whether there is any characters which need special handling.
    let simple = true
    for (let i = start; i < end; i++) {
      var codeUnit = text.charCodeAt(i)
      if (codeUnit > 127 ||
          codeUnit === kPercent ||
          (plusToSpace && codeUnit === kPlus)) {
        simple = false
        break
      }
    }
    let bytes: number[] = []
    if (simple) {
      if (
        utf8 === encoding 
        // @TODO
        // latin1 == encoding || 
        // ascii == encoding
      ) {
        return text.substring(start, end)
      } else {
        const strings = text.substring(start, end)

        for (let i = 0; i < strings.length; i++) {
          bytes.push(strings.charCodeAt(i))
        }

      }
    } else {
      bytes = []
      for (let i = start; i < end; i++) {
        const codeUnit = text.charCodeAt(i)
        if (codeUnit > 127) {
          throw new ArgumentError('Illegal percent encoding in URI')
        }
        if (codeUnit === kPercent) {
          if (i + 3 > text.length) {
            throw new ArgumentError('Truncated URI')
          }
          bytes.push(URI.hexCharPairToByte(text, i + 1))
          i += 2
        } else if (plusToSpace && codeUnit === kPlus) {
          bytes.push(kSpace)
        } else {
          bytes.push(codeUnit)
        }
      }
    }
    return encoding.decode(new Uint8Array(bytes))
  }

  static URIEncode (
    canonicalTable: number[], 
    text: string,
    encoding: Encoding, 
    spaceToPlus: boolean
  ): string {
    if (
      encoding === utf8 &&
      /^[\-\.0-9A-Z_a-z~]*$/g.test(text)
    ) {
      return text
    }
  
    const result = new StringBuffer('')
    const bytes = encoding.encode(text)
    
    for (let i = 0; i < bytes.length; i++) {
      const byte = bytes[i]
      if (
        byte < 128 &&
        ((canonicalTable[byte >> 4] & (1 << (byte & 0x0f))) !== 0)
      ) {
        result.writeCharCode(byte)
      } else if (spaceToPlus && byte === 0x20) {
        result.write('+')
      } else {
        const hexDigits = '0123456789ABCDEF'
        result.write('%')
        result.write(hexDigits[(byte >> 4) & 0x0f])
        result.write(hexDigits[byte & 0x0f])
      }
    }
    
    return result.toString()
  }

  static parse (
    uri: string, 
    start: number = 0, 
    end: number = uri.length
  ) {
    debugger
    // if (end >= start + 5) {
    //   const dataDelta = startsWithData(uri, start)
    //   if (dataDelta === 0) {
    //     // The case is right.
    //     if (start > 0 || end < uri.length) {
    //       uri = uri.substring(start, end)
    //     }
    //     return UriData._parse(uri, 5, null).uri;
    //   } else if (dataDelta == 0x20) {
    //     return UriData._parse(uri.substring(start + 5, end), 0, null).uri;
    //   }
    // }

    const indices = new Array(8).fill(0)
    indices[0] = 0
    indices[kSchemeEndIndex] = start - 1
    indices[kHostStartIndex] = start - 1
    indices[kNotSimpleIndex] = start - 1
    indices[kPortStartIndex] = start
    indices[kPathStartIndex] = start
    indices[kQueryStartIndex] = end
    indices[kFragmentStartIndex] = end

    let state = scan(uri, start, end, kURIStart, indices)
    if (state >= kNonSimpleEndStates) {
      indices[kNotSimpleIndex] = end
    }
    let schemeEnd = indices[kSchemeEndIndex]
    if (schemeEnd >= start) {
      // Rescan the scheme part now that we know it's not a path.
      state = scan(uri, start, schemeEnd, kSchemeStart, indices)
      if (state === kSchemeStart) {
        indices[kNotSimpleIndex] = schemeEnd
      }
    }

    let hostStart = indices[kHostStartIndex] + 1
    let portStart = indices[kPortStartIndex]
    let pathStart = indices[kPathStartIndex]
    let queryStart = indices[kQueryStartIndex]
    let fragmentStart = indices[kFragmentStartIndex]

    let scheme: string | null = null

    if (fragmentStart < queryStart) {
      queryStart = fragmentStart
    }
    
    if (pathStart < hostStart) {
      pathStart = queryStart
    } else if (pathStart <= schemeEnd) {
      pathStart = schemeEnd + 1
    }
   
    if (portStart < hostStart) {
      portStart = pathStart
    }

    invariant(hostStart == start || schemeEnd <= hostStart)
    invariant(hostStart <= portStart)
    invariant(schemeEnd <= pathStart)
    invariant(portStart <= pathStart)
    invariant(pathStart <= queryStart)
    invariant(queryStart <= fragmentStart)

    let isSimple = indices[kNotSimpleIndex] < start

    if (isSimple) {
      if (hostStart > schemeEnd + 3) {
        isSimple = false
      } else if (
        portStart > start && 
        portStart + 1 == pathStart
      ) {
        isSimple = false
      } else if (
        queryStart < end && (
          queryStart === pathStart + 2 &&
          uri.startsWith('..', pathStart)
        ) || (
          queryStart > pathStart + 2 &&
          uri.startsWith('/..', queryStart - 3)
        )
      ) {
        isSimple = false
      } else {
        if (schemeEnd === start + 4) {
          if (uri.startsWith('file', start)) {
            scheme = 'file'
            if (hostStart <= start) {
              let schemeAuth = 'file://'
              let delta = 2
              if (!uri.startsWith('/', pathStart)) {
                schemeAuth = 'file:///'
                delta = 3
              }
              uri = schemeAuth + uri.substring(pathStart, end)
              schemeEnd -= start
              hostStart = 7
              portStart = 7
              pathStart = 7
              queryStart += delta - start
              fragmentStart += delta - start
              start = 0
              end = uri.length
            } else if (pathStart == queryStart) {
              // Uri has authority and empty path. Add "/" as path.
              if (start == 0 && end == uri.length) {
                uri = uri.slice(0, pathStart) + '' + uri.slice(queryStart)
                queryStart += 1
                fragmentStart += 1
                end += 1
              } else {
                uri = `${uri.substring(start, pathStart)}/${uri.substring(queryStart, end)}`
                schemeEnd -= start
                hostStart -= start
                portStart -= start
                pathStart -= start
                queryStart += 1 - start
                fragmentStart += 1 - start
                start = 0
                end = uri.length
              }
            }
          } else if (uri.startsWith('http', start)) {
            scheme = 'http'
            // HTTP URIs should not have an explicit port of 80.
            if (
              portStart > start &&
              portStart + 3 == pathStart &&
              uri.startsWith('80', portStart + 1)
            ) {
              if (
                start === 0 && 
                end == uri.length
              ) {
                uri = uri.slice(0, portStart) + '' + uri.slice(pathStart)
                pathStart -= 3
                queryStart -= 3
                fragmentStart -= 3
                end -= 3
              } else {
                uri = uri.substring(start, portStart) + uri.substring(pathStart, end)
                schemeEnd -= start
                hostStart -= start
                portStart -= start
                pathStart -= 3 + start
                queryStart -= 3 + start
                fragmentStart -= 3 + start
                start = 0
                end = uri.length
              }
            }
          }
        } else if (
          schemeEnd === start + 5 && 
          uri.startsWith('https', start)
        ) {
          scheme = 'https'
          // HTTPS URIs should not have an explicit port of 443.
          if (
            portStart > start &&
            portStart + 4 === pathStart &&
            uri.startsWith('443', portStart + 1)
          ) {
            if (
              start === 0 && 
              end === uri.length
            ) {
              uri = uri.slice(0, portStart) + '' + uri.slice(pathStart)
              
              pathStart -= 4
              queryStart -= 4
              fragmentStart -= 4
              end -= 3
            } else {
              uri = uri.substring(start, portStart) + uri.substring(pathStart, end)
              schemeEnd -= start
              hostStart -= start
              portStart -= start
              pathStart -= 4 + start
              queryStart -= 4 + start
              fragmentStart -= 4 + start
              start = 0
              end = uri.length
            }
          }
        }
      }
    }

    // if (isSimple) {
    //   if (start > 0 || end < uri.length) {
    //     uri = uri.substring(start, end);
    //     schemeEnd -= start;
    //     hostStart -= start;
    //     portStart -= start;
    //     pathStart -= start;
    //     queryStart -= start;
    //     fragmentStart -= start;
    //   }
    //   return _SimpleUri(uri, schemeEnd, hostStart, portStart, pathStart,
    //       queryStart, fragmentStart, scheme);
    // }

    return URI.notSimple(
      uri, 
      start, 
      end, 
      schemeEnd, 
      hostStart, 
      portStart,
      pathStart, 
      queryStart, 
      fragmentStart, 
      scheme
    )
  }

  static parseIPv6Address (
    host: string, 
    start = 0, 
    end: number = host.length
  ): number[] {
    const error = (msg: string, position: number | null) => {
      throw new URIFormatError(
        `Illegal IPv6 address, ${msg}`, 
        host, 
        position
      )
    }

    // Parse a hex block.
    const parseHex = (start: number, end: number) => {
      if (end - start > 4) {
        error('an IPv6 part can only contain a maximum of 4 hex digits', start)
      }

      const value = parseInt(host.substring(start, end), 16)

      if (
        value < 0 || 
        value > 0xFFFF
      ) {
        error('each part must be in the range of `0x0..0xFFFF`', start)
      }
      return value
    }

    if (host.length < 2) {
      error('address is too short', null)
    }

    const parts: number[] = []
    let wildcardSeen = false
    // Set if seeing a ".", suggesting that there is an IPv4 address.
    let seenDot = false
    let partStart = start
    // Parse all parts, except a potential last one.
    for (let i = start; i < end; i++) {
      let char = host.charCodeAt(i)
      if (char === kColon) {
        if (i === start) {
          // If we see a `:` in the beginning, expect wildcard.
          i++
          if (host.charCodeAt(i) !== kColon) {
            error('invalid start colon.', i)
          }
          partStart = i
        }
        if (i === partStart) {
          // Wildcard. We only allow one.
          if (wildcardSeen) {
            error('only one wildcard `::` is allowed', i)
          }
          wildcardSeen = true;
          parts.push(-1)
        } else {
          // Found a single colon. Parse [partStart..i] as a hex entry.
          parts.push(parseHex(partStart, i))
        }
        partStart = i + 1
      } else if (char === kDot) {
        seenDot = true
      }
    }
    if (parts.length === 0) {
      error('too few parts', null)
    }

    let atEnd = (partStart === end)
    let isLastWildcard = (parts[parts.length - 1] === -1)
    
    if (atEnd && !isLastWildcard) {
      error('expected a part after last `:`', end)
    }
    if (!atEnd) {
      if (!seenDot) {
        parts.push(parseHex(partStart, end))
      } else {
        const last = URI.parseIPv4Address(host, partStart, end)
        parts.push(last[0] << 8 | last[1])
        parts.push(last[2] << 8 | last[3])
      }
    }
    if (wildcardSeen) {
      if (parts.length > 7) {
        error('an address with a wildcard must have less than 7 parts', null)
      }
    } else if (parts.length != 8) {
      error('an address without a wildcard must contain exactly 8 parts', null)
    }
    const result: number[] = []
    for (let i = 0, index = 0; i < parts.length; i++) {
      const value = parts[i]
      if (value == -1) {
        const wildCardLength = 9 - parts.length;
        for (let j = 0; j < wildCardLength; j++) {
          result[index] = 0
          result[index + 1] = 0
          index += 2
        }
      } else {
        result[index] = value >> 8
        result[index + 1] = value & 0xff
        index += 2
      }
    }

    return result
  }

  static parseIPv4Address (
    host: string, 
    start: number = 0, 
    end: number = host.length
  ): number[] {
    const error = (
      msg: string, 
      position: number
    ) => {
      throw new URIFormatError(`Illegal IPv4 address, ${msg}`, host, position)
    }

    const result: number[] = []
    let partIndex = 0
    let partStart = start
    for (let i = start; i < end; i++) {
      let char = host.charCodeAt(i)
      if (char !== kDot) {
        if ((char ^ 0x30) > 9) {
          // Fail on a non-digit character.
          error('invalid character', i)
        }
      } else {
        if (partIndex === 3) {
          error('IPv4 address should contain exactly 4 parts', i)
        }

        

        const part = parseInt(host.substring(partStart, i))
        if (part > 255) {
          error('each part must be in the range 0..255', partStart)
        }
        result[partIndex++] = part
        partStart = i + 1
      }
    }

    if (partIndex !== 3) {
      error('IPv4 address should contain exactly 4 parts', end)
    }

    const part = parseInt(host.substring(partStart, end))

    if (part > 255) {
      error('each part must be in the range 0..255', partStart)
    }
    result[partIndex] = part

    return result
  }


  static fail (
    uri: string,
    index: number,
    message: string
  ): never {
    throw new URIFormatError(message, uri, index)
  }

  static internal ({
    scheme, 
    userInfo, 
    host, 
    port, 
    path,
    query, 
    fragment
  }: URIInitOptions) {
    return new URI({
      scheme,
      userInfo,
      host,
      port,
      path,
      query,
      fragment
    })
  }

  static notSimple(
    uri,
    start,
    end,
    schemeEnd,
    hostStart,
    portStart,
    pathStart,
    queryStart,
    fragmentStart,
    scheme
  ) {
    if (scheme === null) {
      scheme = ''
      if (schemeEnd > start) {
        scheme = URI.makeScheme(uri, start, schemeEnd)
      } else if (schemeEnd === start) {
        URI.fail(uri, start, 'Invalid empty scheme')
      }
    }
    let userInfo: string = ''
    let host: string | null = null
    let port: number | null = null
    if (hostStart > start) {
      let userInfoStart = schemeEnd + 3
      if (userInfoStart < hostStart) {
        userInfo = URI.makeUserInfo(
          uri, 
          userInfoStart, 
          hostStart - 1
        )
      }
      host = URI.makeHost(uri, hostStart, portStart, false)
      if (portStart + 1 < pathStart) {
        const portNumber = uri.substring(portStart + 1, pathStart)
        
        if (portNumber) {
          throw new URIFormatError('Invalid port', uri, portStart + 1)
        }
        
        port = URI.makePort(portNumber, scheme)
      }
    }

    const path = URI.makePath(
      uri, 
      pathStart, 
      queryStart, 
      null, 
      scheme, 
      host !== null
    )
    let query
    if (queryStart < fragmentStart) {
      query = URI.makeQuery(
        uri, 
        queryStart + 1, 
        fragmentStart, 
        null
      )
    }
    let fragment
    if (fragmentStart < end) {
      fragment = URI.makeFragment(
        uri, 
        fragmentStart + 1,
        end
      )
    }

    return URI.internal({ 
      scheme, 
      userInfo, 
      host, 
      port, 
      path, 
      query, 
      fragment 
    })
  }

  static checkZoneID (
    host: string, 
    start: number, 
    end: number
  ): number {
    let index = host.indexOf('%', start)
    index = (index >= start && index < end) ? index : end
    return index
  }

  static isSchemeCharacter (ch: number): boolean {
    return ch < 128 && ((kSchemeTable[ch >> 4] & (1 << (ch & 0x0f))) !== 0)
  }

  static isAlphabeticCharacter (
    code: number
  ): boolean {
    const lowerCase = code | 0x20
    return (
      kLowerCaseA <= lowerCase && 
      lowerCase <= kLowerCaseZ
    )
  }

  static isZoneIDChar (char: number): boolean {
    return char < 127 && (kZoneIDTable[char >> 4] & (1 << (char & 0xf))) !== 0
  }

  static isUnreservedChar (char: number): boolean {
    return (
      char < 127 &&
      ((kUnreservedTable[char >> 4] & (1 << (char & 0x0f))) !== 0)
    )
  }

  static isGeneralDelimiter (ch: number): boolean {
    return (
      ch <= kRightBracket &&
      ((kGenDelimitersTable[ch >> 4] & (1 << (ch & 0x0f))) !== 0)
    )
  }

  static isRegNameChar (char: number) {
    return (
      char < 127 && 
      (kRegNameTable[char >> 4] & (1 << (char & 0xf))) !== 0
    )
  }

  static encodeQueryComponent(
    component: string,
    encoding: Encoding = utf8
  ): string {
    return URI.URIEncode(
      kUnreservedTable, 
      component, 
      encoding, 
      true
    )
  }

  static canonicalizeScheme (scheme: string): string {
    if (scheme === 'http') { 
      return 'http'
    } else if (scheme === 'file') { 
      return 'file'
    } else if (scheme === 'https') { 
      return 'https'
    } else if (scheme === 'package') { 
      return 'package'
    }

    return scheme
  }

  static removeDotSegments (path: string): string {
    if (!URI.mayContainDotSegments(path)) {
      return path
    }

    invariant(path.length > 0) // An empty path would not have dot segments.
    const output: string[] = []
    let appendSlash = false

    for (let segment in path.split('/')) {
      appendSlash = false
      if (segment === '..') {
        if (output.length > 0) {
          output.pop()
          if (output.length === 0) {
            output.push('')
          }
        }
        appendSlash = true
      } else if ('.' === segment) {
        appendSlash = true
      } else {
        output.push(segment)
      }
    }
    if (appendSlash) {
      output.push('')
    }
    return output.join('/')
  }

  static mayContainDotSegments (path: string) {
    if (path.startsWith('.')) {
      return true
    }

    const index = path.indexOf('/.')
    return index !== -1
  }

  static escapeScheme (path: string): string {
    if (
      path.length >= 2 && 
      URI.isAlphabeticCharacter(path.charCodeAt(0))
    ) {
      for (let i = 1; i < path.length; i++) {
        const char = path.charCodeAt(i);
        if (char === kColon) {
          return `${path.substring(0, i)}%3A${path.substring(i + 1)}`
        }
        if (
          char > 127 ||
          ((kSchemeTable[char >> 4] & (1 << (char & 0x0f))) === 0)
        ) {
          break
        }
      }
    }
    return path
  }

  static escapeChar (char: number): string {
    invariant(char <= 0x10ffff)
    let codeUnits: Uint8Array

    if (char < 0x80) {
      // ASCII, a single percent encoded sequence.
      codeUnits = new Uint8Array(3)
      codeUnits[0] = kPercent
      codeUnits[1] = kHexDigits.charCodeAt(char >> 4)
      codeUnits[2] = kHexDigits.charCodeAt(char & 0xf)
    } else {
      // Do UTF-8 encoding of character, then percent encode bytes.
      let flag = 0xc0 // The high-bit markers on the first byte of UTF-8.
      let encodedBytes = 2
      if (char > 0x7ff) {
        flag = 0xe0
        encodedBytes = 3
        if (char > 0xffff) {
          encodedBytes = 4
          flag = 0xf0
        }
      }
      codeUnits = new Uint8Array(3 * encodedBytes)
      let index = 0
      while (--encodedBytes >= 0) {
        let byte = ((char >> (6 * encodedBytes)) & 0x3f) | flag
        codeUnits[index] = kPercent
        codeUnits[index + 1] = kHexDigits.charCodeAt(byte >> 4)
        codeUnits[index + 2] = kHexDigits.charCodeAt(byte & 0xf)
        index += 3
        flag = 0x80 // Following bytes have only high bit set.
      }
    }

    let strings = ''

    for (const code of codeUnits) {
      strings += String.fromCharCode(code)
    }

    return strings
  }

  static normalizeZoneID (
    host: string, 
    start: number, 
    end: number,
    prefix: string = ''
  ): string {
    let buffer: StringBuffer | null = null
    if (prefix !== '') {
      buffer = new StringBuffer(prefix)
    }

    let sectionStart = start
    let index = start
    // Whether all characters between sectionStart and index are normalized,
    let isNormalized = true

    while (index < end) {
      let char = host.charCodeAt(index)
      if (char === kPercent) {
        let replacement: string | null = URI.normalizeEscape(host, index, true)
        if (replacement === null && isNormalized) {
          index += 3
          continue
        }

        buffer ??= new StringBuffer()
        let slice = host.substring(sectionStart, index)
        buffer.write(slice)
        let sourceLength = 3
        if (replacement === null) {
          replacement = host.substring(index, index + 3)
        } else if (replacement === '%') {
          URI.fail(host, index, 'ZoneID should not contain % anymore')
        }
        buffer.write(replacement)
        index += sourceLength
        sectionStart = index
        isNormalized = true
      } else if (URI.isZoneIDChar(char)) {
        if (
          isNormalized && 
          kUpperCaseA <= char && 
          kUpperCaseZ >= char
        ) {
          // Put initial slice in buffer and continue in non-normalized mode
          buffer ??= new StringBuffer()
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index))
            sectionStart = index
          }
          isNormalized = false
        }
        index++
      } else {
        let sourceLength = 1
        if ((char & 0xFC00) == 0xD800 && (index + 1) < end) {
          const tail = host.charCodeAt(index + 1)
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff)
            sourceLength = 2
          }
        }

        const slice = host.substring(sectionStart, index);
        (buffer ??= new StringBuffer())
        buffer.write(slice)
        buffer.write(URI.escapeChar(char))
        index += sourceLength
        sectionStart = index
      }
    }

    if (buffer === null) {
      return host.substring(start, end)
    }
    if (sectionStart < end) {
      const slice = host.substring(sectionStart, end)
      buffer.write(slice)
    }
    return buffer.toString();
  }

  static normalizeEscape (
    source: string, 
    index: number, 
    lowerCase: boolean
  ): string | null  {
    invariant(source.charCodeAt(index) === kPercent)

    if (index + 2 >= source.length) {
      return '%'
    }

    const firstDigit = source.charCodeAt(index + 1)
    const secondDigit = source.charCodeAt(index + 2)
    const firstDigitValue = hexDigitValue(firstDigit)
    const secondDigitValue = hexDigitValue(secondDigit)
    if (
      firstDigitValue < 0 || 
      secondDigitValue < 0
    ) {
      return '%'
    }

    let value = firstDigitValue * 16 + secondDigitValue;
    
    if (URI.isUnreservedChar(value)) {
      if (
        lowerCase && 
        kUpperCaseA <= value 
        && kUpperCaseZ >= value
      ) {
        value |= 0x20
      }
      return String.fromCharCode(value)
    }

    if (
      firstDigit >= kLowerCaseA || 
      secondDigit >= kLowerCaseA
    ) {
      // Either digit is lower case.
      return source.substring(index, index + 3).toUpperCase()
    }
    // Escape is retained, and is already non-lower case, so return null to
    // represent "no replacement necessary".
    return null
  }

  static normalizeOrSubstring(
    component: string, 
    start: number, 
    end: number, 
    charTable: number[],
    escapeDelimiters: boolean = false
  ): string {
    return URI.normalize(
      component, 
      start, 
      end, 
      charTable,
      escapeDelimiters
    ) ?? component.substring(start, end)
  }

  static normalizeRegName (
    host: string, 
    start: number, 
    end: number
  ) {
    let buffer: StringBuffer | null = null
    let sectionStart = start
    let index = start
    // Whether all characters between sectionStart and index are normalized,
    let isNormalized: boolean = true

    while (index < end) {
      let char = host.charCodeAt(index)
      if (char === kPercent) {
        // The _regNameTable contains "%", so we check that first.
        let replacement: string | null = URI.normalizeEscape(host, index, true)
        if (replacement === null && isNormalized) {
          index += 3
          continue
        }
        buffer ??= new StringBuffer()
        let slice = host.substring(sectionStart, index)
        if (!isNormalized) {
          slice = slice.toLowerCase()
        }
        buffer.write(slice)
        let sourceLength = 3
        if (replacement === null) {
          replacement = host.substring(index, index + 3)
        } else if (replacement === '%') {
          replacement = '%25'
          sourceLength = 1
        }
        buffer.write(replacement)
        index += sourceLength
        sectionStart = index
        isNormalized = true
      } else if (URI.isRegNameChar(char)) {
        if (isNormalized && kUpperCaseA <= char && kUpperCaseZ >= char) {
          // Put initial slice in buffer and continue in non-normalized mode
          buffer ??= new StringBuffer()
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index))
            sectionStart = index
          }
          isNormalized = false
        }
        index++
      } else if (URI.isGeneralDelimiter(char)) {
        URI.fail(host, index, 'Invalid character')
      } else {
        let sourceLength = 1
        if (
          (char & 0xFC00) === 0xD800 && 
          (index + 1) < end
        ) {
          const tail = host.charCodeAt(index + 1)
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff)
            sourceLength = 2
          }
        }

        let slice = host.substring(sectionStart, index)
        if (!isNormalized) {
          slice = slice.toLowerCase()
        }
        buffer ??= new StringBuffer()
        buffer.write(slice)
        buffer.write(URI.escapeChar(char))
        index += sourceLength
        sectionStart = index
      }
    }

    if (buffer === null) {
      return host.substring(start, end)
    }
    if (sectionStart < end) {
      let slice = host.substring(sectionStart, end)
      if (!isNormalized) {
        slice = slice.toLowerCase()
      }

      buffer.write(slice);
    }

    return buffer.toString()
  }

  static normalizePath (
    path: string, 
    scheme: string, 
    hasAuthority: boolean
  ): string {
    if (scheme.length === 0 && !hasAuthority && !path.startsWith('/')) {
      return URI.normalizeRelativePath(
        path, 
        scheme.length > 0 || hasAuthority
      )
    }
    return URI.removeDotSegments(path)
  }

  static normalizeRelativePath (
    path: string, 
    allowScheme: boolean
  ): string {
    invariant(!path.startsWith('/')) // Only get called for relative paths.
    if (!URI.mayContainDotSegments(path)) {
      if (!allowScheme) {
        path = URI.escapeScheme(path)
      }
      return path
    }
    invariant(path.length > 0) // An empty path would not have dot segments.
    const output: string[] = []
    let appendSlash = false

    for (const segment in path.split('/')) {
      appendSlash = false
      if ('..' === segment) {
        if (
          output.length !== 0 && 
          output[output.length - 1] !== '..'
        ) {
          output.pop()
          appendSlash = true
        } else {
          output.push('..')
        }
      } else if ('.' === segment) {
        appendSlash = true
      } else {
        output.push(segment)
      }
    }

    if (
      output.length === 0 || 
      (output.length === 1 && output[0].length === 0)
    ) {
      return './'
    }

    if (appendSlash || output[output.length - 1] === '..') {
      output.push('')
    }

    if (!allowScheme) {
      output[0] = URI.escapeScheme(output[0])
    }

    return output.join('/')
  }



  static normalize(
    component: string, 
    start: number, 
    end: number, 
    charTable: number[],
    escapeDelimiters: boolean = false
  ): string | null {
    let buffer: StringBuffer | null = null
    let sectionStart = start
    let index = start
    // Loop while characters are valid and escapes correct and upper-case.
    while (index < end) {
      let char = component.charCodeAt(index)
      if (
        char < 127 && 
        (charTable[char >> 4] & (1 << (char & 0x0f))) !== 0
      ) {
        index++
      } else {
        let replacement
        let sourceLength
        if (char === kPercent) {
          replacement = URI.normalizeEscape(component, index, false)
          // Returns null if we should keep the existing escape.
          if (replacement === null) {
            index += 3
            continue
          }
          // Returns "%" if we should escape the existing percent.
          if ('%' === replacement) {
            replacement = '%25'
            sourceLength = 1
          } else {
            sourceLength = 3
          }
        } else if (
          !escapeDelimiters && 
          URI.isGeneralDelimiter(char)
        ) {
          URI.fail(component, index, 'Invalid character')
          throw new Error('unreachable') // TODO(lrn): Remove when Never-returning functions are recognized as throwing.
        } else {
          sourceLength = 1
          if ((char & 0xFC00) === 0xD800) {
            if (index + 1 < end) {
              const tail = component.charCodeAt(index + 1)
              if ((tail & 0xFC00) == 0xDC00) {
                // Tail surrogate.
                sourceLength = 2;
                char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
              }
            }
          }
          replacement = URI.escapeChar(char);
        }
        buffer ??= new StringBuffer()
        buffer.write(component.substring(sectionStart, index))
        buffer.write(replacement)
        index += sourceLength
        sectionStart = index
      }
    }
    
    if (buffer === null) {
      return null
    }
    if (sectionStart < end) {
      buffer.write(component.substring(sectionStart, end))
    }
    
    return buffer.toString()
  }

  static makeScheme(
    scheme: string, 
    start: number, 
    end: number
  ) {
    if (start === end) {
      return ''
    }
    const firstCodeUnit = scheme.charCodeAt(start)

    if (!URI.isAlphabeticCharacter(firstCodeUnit)) {
      URI.fail(scheme, start, 'Scheme not starting with alphabetic character')
    }

    let containsUpperCase = false;
    for (let i = start; i < end; i++) {
      const codeUnit = scheme.charCodeAt(i)
      if (!URI.isSchemeCharacter(codeUnit)) {
        URI.fail(scheme, i, 'Illegal scheme character')
      }

      if (
        kUpperCaseA <= codeUnit && 
        codeUnit <= kUpperCaseZ
      ) {
        containsUpperCase = true
      }
    }
    scheme = scheme.substring(start, end)
    if (containsUpperCase) {
      scheme = scheme.toLowerCase()
    }

    return URI.canonicalizeScheme(scheme)
  }

  static makeUserInfo (
    userInfo: string | null, 
    start: number, 
    end: number
  ) {
    if (userInfo === null) {
      return ''
    }

    return URI.normalizeOrSubstring(
      userInfo, 
      start, 
      end, 
      kUserInfoTable
    )
  }

  static makeHost (
    host: string | null, 
    start: number, 
    end: number, 
    strictIPv6: boolean
  ): string | null {
    // TODO(lrn): Should we normalize IPv6 addresses according to RFC 5952?
    if (host === null) {
      return null
    }

    if (start === end) {
      return ''
    }
    // Host is an IPv6 address if it starts with '[' or contains a colon.
    if (host.charCodeAt(start) === kLeftBracket) {
      if (host.charCodeAt(end - 1) !== kRightBracket) {
        URI.fail(host, start, 'Missing end `]` to match `[` in host')
      }

      let zoneID = ''
      const index = URI.checkZoneID(host, start + 1, end - 1)
      if (index < end - 1) {
        const zoneIDstart = (host.startsWith('25', index + 1)) ? index + 3 : index + 1
        zoneID = URI.normalizeZoneID(host, zoneIDstart, end - 1, '%25')
      }
      URI.parseIPv6Address(host, start + 1, index)
      // RFC 5952 requires hex digits to be lower case.
      return host.substring(start, index).toLowerCase() + zoneID + ']'
    }
    if (!strictIPv6) {
      // TODO(lrn): skip if too short to be a valid IPv6 address?
      for (let i = start; i < end; i++) {
        if (host.charCodeAt(i) === kColon) {
          let zoneID = ''
          const index = URI.checkZoneID(host, start, end)
          if (index < end) {
            const zoneIDstart = (host.startsWith('25', index + 1)) ? index + 3 : index + 1
            zoneID = URI.normalizeZoneID(host, zoneIDstart, end, '%25')
          }

          URI.parseIPv6Address(host, start, index)
          return '[${host.substring(start, index)}' + zoneID + ']'
        }
      }
    }
    return URI.normalizeRegName(host, start, end)
  }

  static makePort(
    port: number | null, 
    scheme: string
  ): number | null {
    // Perform scheme specific normalization.
    if (
      port !== null && 
      port === this.getDefaultPort(scheme)
    ) {
      return null
    }
    return port
  }

  static makePath (
    path: string | null,
    start: number, 
    end: number,
    pathSegments, 
    scheme: string, 
    hasAuthority: boolean
  ) {
    const isFile = scheme === 'file'
    const ensureLeadingSlash = isFile || hasAuthority
    let result: string
    
    if (path === null) {
      if (pathSegments === null) {
        return isFile ? '/' : ''
      }

      result = pathSegments.map((s) => URI.URIEncode(kPathCharTable, s, utf8, false)).join('/');
    } else if (pathSegments !== null) {
      throw new ArgumentError('Both path and pathSegments specified')
    } else {
      result = URI.normalizeOrSubstring(
        path, 
        start, 
        end, 
        kPathCharOrSlashTable,
        true
      )
    }

    if (result.length === 0) {
      if (isFile) {
        return '/'
      }
    } else if (ensureLeadingSlash && !result.startsWith('/')) {
      result = '/' + result
    }
    result = URI.normalizePath(result, scheme, hasAuthority)
    return result
  }

  static makeQuery(
    query: string | null, 
    start: number, 
    end: number,
    queryParameters: Map<string, unknown> | null
  ): string | null {
    if (query !== null) {
      if (queryParameters !== null) {
        throw new ArgumentError('Both query and queryParameters specified');
      }
      return URI.normalizeOrSubstring(
        query, 
        start, 
        end, 
        kQueryCharTable,
        true
      )
    }

    if (queryParameters === null) {
      return null
    }

    const result = new StringBuffer()
    let separator = ''

    const writeParameter = (key: string, value: string | null) => {
      result.write(separator)
      separator = '&'
      result.write(URI.encodeQueryComponent(key))
      if (value !== null && value.length > 0) {
        result.write('=')
        result.write(URI.encodeQueryComponent(value))
      }
    }

    queryParameters.forEach((value, key) => {
      if (value === null || typeof value === 'string') {
        writeParameter(key, value)
      } else {
        if (Array.isArray(value)) {
          for (const v in value) {
            writeParameter(key, v)
          }
        }
      }
    })

    return result.toString()
  }

  static makeFragment (
    fragment: string | null, 
    start: number, 
    end: number
  ): string | null {
    if (fragment === null) {
      return null
    }

    return URI.normalizeOrSubstring(
      fragment, 
      start, 
      end, 
      kQueryCharTable,
      true
    )
  }

  static makeWindowsFileURL (
    path: string, 
    slashTerminated: boolean
  ) {
    if (path.startsWith('\\?\\')) {
      if (path.startsWith('UNC\\', 4)) {
        path = '\\' + path.slice(0, 7)
      } else {
        path = path.substring(4)
        if (
          path.length < 3 ||
          path.charCodeAt(1) !== kColon ||
          path.charCodeAt(2) !== kBackSlash
        ) {
          throw new ArgumentError('Windows paths with \\?\ prefix must be absolute')
        }
      }
    } else {
      path = path.replaceAll('/', '\\')
    }
    const sep = '\\'
    if (
      path.length > 1 && 
      path.charCodeAt(1) === kColon
    ) {
      URI.checkWindowsDriveLetter(path.charCodeAt(0), true)
      if (
        path.length === 2 || 
        path.charCodeAt(2) !== kBackSlash
      ) {
        throw new ArgumentError('Windows paths with drive letter must be absolute')
      }
      // Absolute file://C:/ URI.
      const pathSegments = path.split(sep)
      if (
        slashTerminated && 
        pathSegments[pathSegments.length - 1].length > 0
      ) {
        pathSegments.push() // Extra separator at end.
      }
      URI.checkWindowsPathReservedCharacters(pathSegments, true, 1)
      return new URI({ 
        scheme: 'file', 
        pathSegments
      })
    }

    if (path.startsWith(sep)) {
      if (path.startsWith(sep, 1)) {
        // Absolute file:// URI with host.
        let pathStart = path.indexOf('\\', 2)
        let hostPart = pathStart < 0 ? 
          path.substring(2) 
          : path.substring(2, pathStart)
        let pathPart = pathStart < 0 ? 
          '' 
          : path.substring(pathStart + 1)
        let pathSegments = pathPart.split(sep)
        URI.checkWindowsPathReservedCharacters(pathSegments, true)
        
        if (
          slashTerminated && 
          pathSegments[pathSegments.length - 1].length > 0
        ) {
          pathSegments.push('') // Extra separator at end.
        }

        return new URI({ 
          scheme: 'file', 
          host: hostPart, 
          pathSegments
        })
      } else {
        // Absolute file:// URI.
        const pathSegments = path.split(sep)
        if (
          slashTerminated && 
          pathSegments[pathSegments.length - 1].length > 0
        ) {
          pathSegments.push('') // Extra separator at end.
        }
        URI.checkWindowsPathReservedCharacters(pathSegments, true)
        return new URI({ 
          scheme: 'file', 
          pathSegments 
        })
      }
    } else {
      // Relative URI.
      const pathSegments = path.split(sep)
      URI.checkWindowsPathReservedCharacters(pathSegments, true)
      if (
        slashTerminated &&
        pathSegments.length > 0 &&
        pathSegments[pathSegments.length - 1].length > 0
      ) {
        pathSegments.push('') // Extra separator at end.
      }
      return new URI({ pathSegments })
    }
  }

  static makeFileURI (
    path: string, 
    slashTerminated: boolean
  ) {
    const sep = '/'
    const segments = path.split(sep)
    if (
      slashTerminated && 
      segments.length > 0 && 
      segments[segments.length -1].length > 0
    ) {
      segments.push('') // Extra separator at end.
    }
    if (path.startsWith(sep)) {
      // Absolute file:// URI.
      return new URI({ 
        scheme: 'file',
        pathSegments: segments 
      })
    } else {
      // Relative URI.
      return new URI({ pathSegments: segments })
    }
  }

  static makeHTTPURI (
    scheme: string, 
    authority: string | null,
    unencodedPath: string, 
    queryParameters?: Map<string, string[]> | null
  ) {
    let userInfo = ''
    let host: string | null = null
    let port: number | null = null

    if (
      authority !== null && 
      authority.length > 0
    ) {
      let hostStart = 0
      // Split off the user info.
      for (let i = 0; i < authority.length; i++) {
        const atSign = 0x40;
        if (authority.charCodeAt(i) === atSign) {
          userInfo = authority.substring(0, i)
          hostStart = i + 1
          break
        }
      }
      let hostEnd = hostStart
      if (
        hostStart < authority.length &&
        authority.charCodeAt(hostStart) === kLeftBracket
      ) {
        // IPv6 host.
        let escapeForZoneID = -1
        for (; hostEnd < authority.length; hostEnd++) {
          let char = authority.charCodeAt(hostEnd);
          if (
            char === kPercent && 
            escapeForZoneID < 0
          ) {
            escapeForZoneID = hostEnd
            if (authority.startsWith('25', hostEnd + 1)) {
              hostEnd += 2 // Might as well skip the already checked escape.
            }
          } else if (char === kRightBracket) {
            break
          }
        }
        if (hostEnd === authority.length) {
          throw new URIFormatError(
            'Invalid IPv6 host entry.', 
            authority, 
            hostStart
          )
        }
        
        URI.parseIPv6Address(
          authority, 
          hostStart + 1,
          (escapeForZoneID < 0) ? hostEnd : escapeForZoneID
        )
        hostEnd++ // Skip the closing bracket.
        if (
          hostEnd !== authority.length &&
          authority.charCodeAt(hostEnd) !== kColon
        ) {
          throw new URIFormatError('Invalid end of authority', authority, hostEnd)
        }
      }
      // Split host and port.
      for (; hostEnd < authority.length; hostEnd++) {
        if (authority.charCodeAt(hostEnd) === kColon) {
          const portString = authority.substring(hostEnd + 1)
          // We allow the empty port - falling back to initial value.
          if (portString.length > 0) {
            port = parseInt(portString)
          }
          break
        }
      }
      host = authority.substring(hostStart, hostEnd)
    }

    return new URI({
      scheme: scheme,
      userInfo: userInfo,
      host: host,
      port: port,
      pathSegments: unencodedPath.split('/'),
      queryParameters
    })
  }

  static directory (
    path: string, 
    windows?: boolean | null
  ) {
    return (windows ?? URI.isWindows) ? 
      URI.makeWindowsFileURL(path, true)
      : URI.makeFileURI(path, true);
  }

  HTTP (
    authority: string, 
    unencodedPath: string,
    queryParameters?: Map<string, string[]> | null 
  ) {
    return URI.makeHTTPURI('http', authority, unencodedPath, queryParameters)
  }

  @property(function (this) {
    return this.scheme?.length > 0
  }) public hasScheme!: boolean

  @property(function (this) {
    return this.host !== null
  }) public hasAuthority!: boolean

  @property(function (this) {
    return this.port !== null
  }) public hasPort!: boolean

  @property(function (this) {
    return this.query !== null
  }) public hasQuery!: boolean

  @property(function (this) {
    return this.fragment !== null
  }) public hasFragment!: boolean

  @property(function (this) {
    return this.path?.length === 0
  }) public hasEmptyPath!: boolean

  @property(function (this) {
    return this.path?.startsWith('/')
  }) public hasAbsolutePath!: boolean

  @property(function (this) {
    if (this.scheme === '') {
      throw new Error(`Cannot use origin without a scheme: ${this}`)
    }
    if (
      this.scheme !== 'http' && 
      this.scheme !== 'https'
    ) {
      throw new Error(`Origin is only applicable schemes http and https: ${this}`)
    }

    let host = this.host
    if (host === null || host === '') {
      throw new Error(
          `A ${this.scheme}: URI should have a non-empty host name: ${this}`);
    }

    let port = this.port
    if (port === null) {
      return `${this.scheme}://${this.host}`
    }
    return `${this.scheme}://${this.host}:${this.port}`
  }) public origin!: string

  @property() public scheme: string | null

  @property() public userInfo: string | null

  @property<string>(function (host: string | null) {
    if (host === null) {
      return ''
    } else if (host.startsWith('[')) {
      return host.substring(1, host.length - 1)
    }

    return host
  }) public host: string | null

  @property<number>(function (this, port: number | null) {
    return port ?? URI.getDefaultPort(this.scheme)
  }) public port: number | null

  @property() public path: string | null

  @property<string>(function (query: string | null) {
    return query ?? ''
  }) public query: string | null

  @property<string>(function (fragment: string | null) {
    return fragment ?? ''
  }) public fragment: string | null

  @property<string>(function (this, authority: string | null) {
    if (!this.hasAuthority) {
      return ''
    }

    const string = new StringBuffer()
    this.writeAuthority(string)
    return string.toString()
  }) public authority!: string | null

  @property<string[]>(function (this) {
    return URI.computePathSegments(this.path)
  }) public pathSegments!: string[] | null

  @property<Map<string, string>>(function (this) {
    return URI.splitQueryString(this.query)
  }) public queryParameters!: Map<string, string> | null

  @property<Map<string, string[]>>(function (this) {
    return URI.computeQueryParametersAll(this.query)
  }) public queryParametersAll!: Map<string, string[]> | null
  

  constructor (options: URIInitOptions) {
    this.scheme = options.scheme ?? null
    this.userInfo = options.userInfo ?? null
    this.host = options.host ?? null
    this.port = options.port ?? null
    this.path = options.path ?? null
    this.query = options.query ?? null
    this.fragment = options.fragment ?? null
    this.pathSegments = options.pathSegments ?? []
    this.queryParameters = options.queryParameters ?? new Map()
  }

  toFilePath (windows?: boolean | null) {
    if (
      this.scheme !== '' && 
      this.scheme !== 'file'
    ) {
      throw new UnsupportedError(`Cannot extract a file path from a ${this.scheme} URI`);
    }
    if (this.query !== '') {
      throw new UnsupportedError(`Cannot extract a file path from a URI with a query component`)
    }

    if (this.fragment !== '') {
      throw new UnsupportedError('Cannot extract a file path from a URI with a fragment component')
    }

    if (windows ?? URI.isWindows) {
      return URI.toWindowsFilePath(this)
    } else {
      if (
        this.hasAuthority && 
        this.host !== ''
      ) {
        throw new UnsupportedError(`Cannot extract a non-Windows file path from a file URI with an authority`)
      }
      // Use path segments to have any escapes unescaped.
      const pathSegments = this.pathSegments
      URI.checkNonWindowsPathReservedCharacters(pathSegments as string[], false)
      
      const result = new StringBuffer()
      if (this.hasAbsolutePath) {
        result.write('/')
      }
      
      result.writeAll(pathSegments as string[], '/')
      
      return result.toString()
    }
  }

  writeAuthority (ss: StringBuffer) {
    if (this.userInfo && this.userInfo.length > 0) {
      ss.write(this.userInfo)
      ss.write('@')
    }
    if (this.host !== null) {
      ss.write(this.host)
    }
    if (this.port !== null) {
      ss.write(':')
      ss.write(this.port.toString())
    }
  }

  resolve (reference: string): URI {
    return this.resolveURI(URI.parse(reference))
  }

  resolveURI (reference: URI): URI {
    // From RFC 3986.
    let targetScheme: string
    let targetUserInfo: string = ''
    let targetHost: string | null = null
    let targetPort: number | null = null
    let targetPath: string
    let targetQuery: string | null = null
    if (
      reference.scheme && 
      reference.scheme.length > 0
    ) {
      targetScheme = reference.scheme
      if (reference.hasAuthority) {
        targetUserInfo = reference.userInfo as string
        targetHost = reference.host
        targetPort = reference.hasPort ? 
          reference.port : null
      }

      targetPath = URI.removeDotSegments(reference.path as string)
      if (reference.hasQuery) {
        targetQuery = reference.query;
      }
    } else {
      targetScheme = this.scheme as string
      if (reference.hasAuthority) {
        targetUserInfo = reference.userInfo as string
        targetHost = reference.host
        targetPort = URI.makePort(reference.hasPort ? reference.port : null, targetScheme)
        targetPath = URI.removeDotSegments(reference.path as string)
        if (reference.hasQuery) {
          targetQuery = reference.query
        }
      } else {
        targetUserInfo = this.userInfo as string
        targetHost = this.host
        targetPort = this.port
        if (reference.path === '') {
          targetPath = this.path as string
          if (reference.hasQuery) {
            targetQuery = reference.query
          } else {
            targetQuery = this.query
          }
        } else {
          const basePath = this.path as string
          const packageNameEnd = URI.packageNameEnd(this, basePath)
          if (packageNameEnd > 0) {
            invariant(targetScheme === 'package')
            invariant(!this.hasAuthority)
            invariant(!this.hasEmptyPath)
            // Merging a path into a package URI.
            const packageName = basePath.substring(0, packageNameEnd)
            if (reference.hasAbsolutePath) {
              targetPath = packageName + URI.removeDotSegments(reference.path as string)
            } else {
              targetPath = packageName + URI.removeDotSegments(
                this.mergePaths(basePath.substring(packageName.length), reference.path as string)
              )
            }
          } else if (reference.hasAbsolutePath) {
            targetPath = URI.removeDotSegments(reference.path as string)
          } else {
            // This is the RFC 3986 behavior for merging.
            if (this.hasEmptyPath) {
              if (!this.hasAuthority) {
                if (!this.hasScheme) {
                  // Keep the path relative if no scheme or authority.
                  targetPath = reference.path as string
                } else {
                  // Remove leading dot-segments if the path is put
                  // beneath a scheme.
                  targetPath = URI.removeDotSegments(reference.path as string)
                }
              } else {
                // RFC algorithm for base with authority and empty path.
                targetPath = URI.removeDotSegments('/' + reference.path)
              }
            } else {
              const mergedPath = this.mergePaths(this.path as string, reference.path as string)
              if (
                this.hasScheme || 
                this.hasAuthority || 
                this.hasAbsolutePath
              ) {
                targetPath = URI.removeDotSegments(mergedPath)
              } else {
                // Non-RFC 3986 behavior.
                // If both base and reference are relative paths,
                // allow the merged path to start with "..".
                // The RFC only specifies the case where the base has a scheme.
                targetPath = URI.normalizeRelativePath(
                  mergedPath, 
                  this.hasScheme || this.hasAuthority
                )
              }
            }
          }
          if (reference.hasQuery) targetQuery = reference.query;
        }
      }
    }

    const fragment: string | null = reference.hasFragment ? reference.fragment : null
    return URI.internal({ 
      scheme: targetScheme, 
      userInfo: targetUserInfo, 
      host: targetHost, 
      port: targetPort,
      path: targetPath, 
      query: targetQuery, 
      fragment
    })
  }

  isScheme (scheme: string): boolean {
    const thisScheme = this.scheme as string
    if (scheme === null) {
      return thisScheme.length === 0
    }

    if (scheme.length !== thisScheme.length) {
      return false
    }

    return URI.compareScheme(scheme, thisScheme)
  }

  mergePaths (
    base: string, 
    reference: string
  ): string {
    // Optimize for the case: absolute base, reference beginning with "../".
    let backCount = 0
    let refStart = 0
    // Count number of "../" at beginning of reference.
    while (reference.startsWith('../', refStart)) {
      refStart += 3
      backCount++
    }

    // Drop last segment - everything after last '/' of base.
    let baseEnd = base.lastIndexOf('/')
    // Drop extra segments for each leading "../" of reference.
    while (
      baseEnd > 0 && 
      backCount > 0
    ) {
      let newEnd = base.lastIndexOf('/', baseEnd - 1)
      if (newEnd < 0) {
        break
      }
      let delta = baseEnd - newEnd
      // If we see a "." or ".." segment in base, stop here and let
      // _removeDotSegments handle it.
      if (
        (delta == 2 || delta == 3) &&
        base.charCodeAt(newEnd + 1) === kDot &&
        (delta == 2 || base.charCodeAt(newEnd + 2) === kDot)
      ) {
        break
      }
      baseEnd = newEnd
      backCount--
    }

    return base.slice(0, baseEnd) + reference.substring(refStart - 3 * backCount)
  }
}