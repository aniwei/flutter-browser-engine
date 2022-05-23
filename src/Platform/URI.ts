import invariant from 'ts-invariant'
import { isWindow } from '.'
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

function property<T> (
  getter: { (v: T, k?): T } = function (v, k) { return v as T },
  setter: { (v: T, k): void } = function (this, v: T, k) { this[k] = v }
) {
  return function (
    target,
    key: string
  ) {
    const k = `_${key}` 

    Reflect.defineProperty(target, key, {
      get () {
        return Reflect.apply(getter, this, [k, this[k]])
      },
      set (value: T) {
        return Reflect.apply(getter, this, [value, k])
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
  scheme: string | null,
  userInfo: string | null,
  host: string | null,
  port: number | null,
  path: string | null,
  query: string | null,
  fragment: string | null,
}

export class URI {
  static get isWindows (): boolean {
    return isWindow
  }

  static getDefaultPort (scheme: string) {
    if (scheme === 'http') {
      return 80
    } else if (scheme === 'https') {
      return 443
    }
    
    return 0
  }

  static toWindowsFilePath (uri: URI): string {
    let hasDriveLetter = false
    const segments = uri.pathSegments
    if (
      segments.length > 0 &&
      segments[0].length === 2 &&
      segments[0].charCodeAt(1) === kColon
    ) {
      _checkWindowsDriveLetter(segments[0].charCodeAt(0), false)
      _checkWindowsPathReservedCharacters(segments, false, 1)
      hasDriveLetter = true
    } else {
      _checkWindowsPathReservedCharacters(segments, false, 0)
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
    result.writeAll(segments, '\\')
    if (hasDriveLetter && segments.length === 1) {
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

  static decodeComponent (encodedComponent: string): string {
    return URI.URIDecode(
      encodedComponent, 
      0, 
      encodedComponent.length, 
      utf8, 
      false
    )
  }

  static URIDecode( 
    String text, int start, int end, Encoding encoding, bool plusToSpace) {
    assert(0 <= start);
    assert(start <= end);
    assert(end <= text.length);
    // First check whether there is any characters which need special handling.
    bool simple = true;
    for (int i = start; i < end; i++) {
      var codeUnit = text.codeUnitAt(i);
      if (codeUnit > 127 ||
          codeUnit == _PERCENT ||
          (plusToSpace && codeUnit == _PLUS)) {
        simple = false;
        break;
      }
    }
    List<int> bytes;
    if (simple) {
      if (utf8 == encoding || latin1 == encoding || ascii == encoding) {
        return text.substring(start, end);
      } else {
        bytes = text.substring(start, end).codeUnits;
      }
    } else {
      bytes = <int>[];
      for (int i = start; i < end; i++) {
        var codeUnit = text.codeUnitAt(i);
        if (codeUnit > 127) {
          throw ArgumentError("Illegal percent encoding in URI");
        }
        if (codeUnit == _PERCENT) {
          if (i + 3 > text.length) {
            throw ArgumentError('Truncated URI');
          }
          bytes.add(_hexCharPairToByte(text, i + 1));
          i += 2;
        } else if (plusToSpace && codeUnit == _PLUS) {
          bytes.add(_SPACE);
        } else {
          bytes.add(codeUnit);
        }
      }
    }
    return encoding.decode(bytes);
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
    text: string, 
    start: number, 
    sourceURI: URI
  ) {
    invariant(start === 0 || start === 5)
    invariant((start === 5) === text.startsWith('data:'))

    const comma = 0x2c
    const slash = 0x2f
    const semicolon = 0x3b
    const equals = 0x3d
    const indices: number[] = [start - 1]

    let slashIndex = -1
    let char
    let i = start
    for (; i < text.length; i++) {
      char = text.charCodeAt(i)
      if (
        char === comma || 
        char === semicolon
      ) {
        break
      }
      if (char === slash) {
        if (slashIndex < 0) {
          slashIndex = i
          continue
        }

        throw new URIFormatError('Invalid MIME type', text, i)
      }
    }

    if (
      slashIndex < 0 && 
      i > start
    ) {
      // An empty MIME type is allowed, but if non-empty it must contain
      // exactly one slash.
      throw new URIFormatError('Invalid MIME type', text, i)
    }

    while (char !== comma) {
      // Parse parameters and/or "base64".
      indices.push(i)
      i++
      let equalsIndex = -1
      for (; i < text.length; i++) {
        char = text.charCodeAt(i)
        if (char === equals) {
          if (equalsIndex < 0) {
            equalsIndex = i
          }
        } else if (
          char === semicolon || 
          char === comma
        ) {
          break
        }
      }
      if (equalsIndex >= 0) {
        indices.push(equalsIndex)
      } else {
        // Have to be final "base64".
        let lastSeparator = indices[indices.length - 1]
        if (
          char !== comma ||
          i !== lastSeparator + 7 /* "base64,".length */ ||
          !text.startsWith('base64', lastSeparator + 1)
        ) {
          throw new URIFormatError('Expecting \'=\'', text, i)
        }

        break
      }
    }
    indices.push(i)
    const isBase64 = indices.length % 2 > 0
    if (isBase64) {
      text = base64.normalize(text, i + 1, text.length)
    } else {
      const data = URI.normalize(
        text, 
        i + 1, 
        text.length, 
        kQueryCharTable,
        true
      )
      
      if (data !== null) {
        text = text.replaceRange(i + 1, text.length, data)
      }
    }
    return new UriData(text, indices, sourceURI)
  }


  static parseIPv6Address (
    host: string, 
    start = 0, 
    end: number | null
  ): Uint8Array {
    end ??= host.length
    // An IPv6 address consists of exactly 8 parts of 1-4 hex digits, separated
    // by `:`'s, with the following exceptions:
    //
    //  - One (and only one) wildcard (`::`) may be present, representing a fill
    //    of 0's. The IPv6 `::` is thus 16 bytes of `0`.
    //  - The last two parts may be replaced by an IPv4 "dotted-quad" address.

    // Helper function for reporting a badly formatted IPv6 address.
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
    const bytes = new Uint8Array(16)
    for (let i = 0, index = 0; i < parts.length; i++) {
      const value = parts[i]
      if (value == -1) {
        const wildCardLength = 9 - parts.length;
        for (let j = 0; j < wildCardLength; j++) {
          bytes[index] = 0
          bytes[index + 1] = 0
          index += 2
        }
      } else {
        bytes[index] = value >> 8
        bytes[index + 1] = value & 0xff
        index += 2
      }
    }

    return bytes
  }

  static parseIPv4Address (
    host: string, 
    start: number, 
    end: number
  ) {
    const error = (
      msg: string, 
      position: number
    ) => {
      throw new URIFormatError(`Illegal IPv4 address, ${msg}`, host, position)
    }

    const result = new Uint8Array(4)
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
    let buffer
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
    _writeAuthority(string)
    return string.toString()
  }) public authority!: string

  @property<string>(function (this, authority: string | null) {
    return URI.computePathSegments(this.path)
  }) public pathSegments!: string[]

  constructor (options: URIInitOptions) {
    this.scheme = options.scheme
    this.userInfo = options.userInfo
    this.host = options.host
    this.port = options.port
    this.path = options.path
    this.query = options.query
    this.fragment = options.fragment
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

    if (window ?? URI.isWindows) {
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
      _checkNonWindowsPathReservedCharacters(pathSegments, false)
      
      const result = new StringBuffer()
      if (this.hasAbsolutePath) {
        result.write('/')
      }
      
      result.writeAll(pathSegments, '/')
      
      return result.toString()
    }
  }
}