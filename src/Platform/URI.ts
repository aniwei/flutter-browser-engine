import invariant from 'ts-invariant'
import { isWindow } from '.'
import { StringBuffer } from './StringBuffer'

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

class URIFormatError extends Error { 
  public uri: string
  public index: number

  constructor (message: string, uri: string, index:  number) {
    super(message)
    this.uri = uri
    this.index = index
  }
}

export type URIInitOptions = {
  scheme: string,
  userInfo: string,
  host: string,
  port: number,
  path: string,
  query: string,
  fragment: string,
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

  static parseIPv6Address (
    host: string, 
    start = 0, 
    end: number | null
  ): number[] {
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
      const value = int.parse(host.substring(start, end), radix: 16)
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
    let isLastWildcard = (parts.last == -1)
    
    if (atEnd && !isLastWildcard) {
      error('expected a part after last `:`', end)
    }
    if (!atEnd) {
      if (!seenDot) {
        parts.push(parseHex(partStart, end))
      } else {
        List<int> last = _parseIPv4Address(host, partStart, end);
        parts.add(last[0] << 8 | last[1]);
        parts.add(last[2] << 8 | last[3]);
      }
    }
    if (wildcardSeen) {
      if (parts.length > 7) {
        error('an address with a wildcard must have less than 7 parts', null);
      }
    } else if (parts.length != 8) {
      error('an address without a wildcard must contain exactly 8 parts', null);
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

  static fail (
    uri: string,
    index: number,
    message: string
  ) {
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

    return codeUnits.map(codeUnit => {
      return String.fromCharCode(codeUnit)
    }).toString()
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
        (buffer ??= new StringBuffer())
          ..write(component.substring(sectionStart, index))
          ..write(replacement);
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
        zoneID = normalizeZoneID(host, zoneIDstart, end - 1, '%25')
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
            zoneID = normalizeZoneID(host, zoneIDstart, end, '%25')
          }

          URI.parseIPv6Address(host, start, index)
          return '[${host.substring(start, index)}' + zoneID + ']'
        }
      }
    }
    return _normalizeRegName(host, start, end);
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

      result = pathSegments.map((s) => URI.URIEncode(_pathCharTable, s, utf8, false)).join('/');
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

    if (result.isEmpty) {
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
      if (value !== null && value.isNotEmpty) {
        result.write('=')
        result.write(URI.encodeQueryComponent(value))
      }
    }

    queryParameters.forEach((key, value) => {
      if (value === null || typeof value === 'string') {
        writeParameter(key, value)
      } else {
        Iterable values = value;
        for (String value in values) {
          writeParameter(key, value);
        }
      }
    });
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

  constructor (options: URIInitOptions) {

  }
}