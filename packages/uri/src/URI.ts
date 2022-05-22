import invariant from 'ts-invariant'
import { hexDigitValue } from '@skia/math'
import { URIFormatError } from './URIFormatError'

const kSpace = 0x20;
const kPercent = 0x25;
const kAmpersand = 0x26;
const kPlus = 0x2B;
const kDot = 0x2E;
const kSlash = 0x2F;
const kColon = 0x3A;
const kEquals = 0x3d;
const kUpperCaseA = 0x41;
const kUpperCaseZ = 0x5A;
const kLeftBracket = 0x5B;
const kBackSlash = 0x5C;
const kRightBracket = 0x5D;
const kLowerCaseA = 0x61;
const kLowerCaseF = 0x66;
const kLowerCaseZ = 0x7A;

const kHexDigits = '0123456789ABCDEF'



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
  static unreservedTable = [
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
  ];

  // The unreserved characters of RFC 2396.
  static unreserved2396Table = [
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
  ];

  // Table of reserved characters specified by ECMAScript 5.
  static encodeFullTable = [
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
  ];

  // Characters allowed in the scheme.
  static schemeTable = [
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
  ];

  // General delimiter characters, RFC 3986 section 2.2.
  // gen-delims  = ":" / "/" / "?" / "#" / "[" / "]" / "@"
  //
  static genDelimitersTable = [
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
  ];

  // Characters allowed in the userinfo as of RFC 3986.
  // RFC 3986 Appendix A
  // userinfo = *( unreserved / pct-encoded / sub-delims / ':')
  static userinfoTable = [
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

  // Characters allowed in the reg-name as of RFC 3986.
  // RFC 3986 Appendix A
  // reg-name = *( unreserved / pct-encoded / sub-delims )
  static regNameTable = [
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
  ];

  // Characters allowed in the path as of RFC 3986.
  // RFC 3986 section 3.3.
  // pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
  static pathCharTable = [
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
  ];

  // Characters allowed in the path as of RFC 3986.
  // RFC 3986 section 3.3 *and* slash.
  static pathCharOrSlashTable = [
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

  // Characters allowed in the query as of RFC 3986.
  // RFC 3986 section 3.4.
  // query = *( pchar / "/" / "?" )
  static queryCharTable = [
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

  // Characters allowed in the ZoneID as of RFC 6874.
  // ZoneID = 1*( unreserved / pct-encoded )
  static zoneIDTable = [
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

  static get isWindows (): boolean {
    return Boolean(false)
  }

  static fail(
    uri: string, 
    index: number, 
    message: string
  ) {
    throw new URIFormatError(message, uri, index)
  }

  static internal({
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
      } else if (schemeEnd == start) {
        URI.fail(uri, start, 'Invalid empty scheme')
      }
    }
    let userInfo: string = ''
    let host: string
    let port: number
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
    var codeUnit = text.charCodeAt(i);
    if (
      codeUnit > 127 ||
      codeUnit === kPercent ||
      (plusToSpace && codeUnit === kPlus)
    ) {
      simple = false
      break
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
      var codeUnit = text.codeAt(i);
      if (codeUnit > 127) {
        throw ArgumentError("Illegal percent encoding in URI");
      }
      if (codeUnit == kPercent) {
        if (i + 3 > text.length) {
          throw ArgumentError('Truncated URI');
        }
        bytes.add(_hexCharPairToByte(text, i + 1));
        i += 2;
      } else if (plusToSpace && codeUnit == kPlus) {
        bytes.add(kSpace);
      } else {
        bytes.add(codeUnit);
      }
    }
  }
  return encoding.decode(bytes);
}

  static isSchemeCharacter (ch: number): boolean {
    return ch < 128 && ((URI.schemeTable[ch >> 4] & (1 << (ch & 0x0f))) != 0);
  }

  static isGeneralDelimiter (ch: number): boolean {
    return (
      ch <= kRightBracket &&
      ((URI.genDelimitersTable[ch >> 4] & (1 << (ch & 0x0f))) !== 0)
    )
  }

  static isAlphabeticCharacter (
    code: number
  ): boolean {
    const lowerCase = codeUnit | 0x20
    return (kLowerCaseA <= lowerCase && lowerCase <= kLowerCaseZ)
  }

  static isUnreservedChar (char: number): boolean {
    return (
      char < 127 &&
      ((URI.unreservedTable[char >> 4] & (1 << (char & 0x0f))) !== 0)
    )
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
    return String.fromCharCodes(codeUnits)
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
        (buffer ??= StringBuffer())
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

  static normalizePath (
    path: string, 
    scheme: string, 
    hasAuthority: boolean
  ): string {
    if (
      scheme.isEmpty && 
      !hasAuthority && 
      !path.startsWith('/')
    ) {
      return URI.normalizeRelativePath(
        path, 
        scheme.isNotEmpty || hasAuthority
      )
    }
    return URI.removeDotSegments(path);
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
      return path;
    }
    invariant(path.isNotEmpty) // An empty path would not have dot segments.
    const output: string[] = []
    let appendSlash = false
    for (let segment in path.split('/')) {
      appendSlash = false
      if ('..' === segment) {
        if (
          !output.isEmpty && 
          output.last != '..'
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
      output.isEmpty || 
      (output.length === 1 && output[0].isEmpty)
    ) {
      return './'
    }
    if (appendSlash || output.last == '..') {
      output.push('')
    }

    if (!allowScheme) {
      output[0] = URI.escapeScheme(output[0])
    }

    return output.join('/')
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
          ((URI.schemeTable[char >> 4] & (1 << (char & 0x0f))) === 0)
        ) {
          break;
        }
      }
    }
    return path
  }

  static mayContainDotSegments (path: string): boolean {
    if (path.startsWith('.')) {
      return true
    }
    const index = path.indexOf('/.')
    return index !== -1
  }

  /// Removes '.' and '..' segments from a path.
  ///
  /// Follows the RFC 2986 "remove dot segments" algorithm.
  /// This algorithm is only used on paths of URIs with a scheme,
  /// and it treats the path as if it is absolute (leading '..' are removed).
  static removeDotSegments (path: string): string {
    if (!URI.mayContainDotSegments(path)) {
      return path
    }

    invariant(path.isNotEmpty) // An empty path would not have dot segments.
    const output = [];
    let appendSlash = false
    for (let segment in path.split('/')) {
      appendSlash = false
      if (segment === '..') {
        if (output.isNotEmpty) {
          output.pop()
          if (output.isEmpty) {
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

      result = pathSegments.map((s) => URIEncode(_pathCharTable, s, utf8, false)).join('/');
    } else if (pathSegments !== null) {
      throw new ArgumentError('Both path and pathSegments specified')
    } else {
      result = URI.normalizeOrSubstring(
        path, 
        start, 
        end, 
        URI.pathCharOrSlashTable,
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
      URI.queryCharTable,
      true
    )
  }

  if (queryParameters === null) {
    return null
  }

  const result = StringBuffer()
  let separator = ''

  const writeParameter = (key: string, value: string | null) => {
    result.write(separator)
    separator = '&'
    result.write(Uri.encodeQueryComponent(key))
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
    URI.queryCharTable,
    true
  )
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
      URI.userinfoTable
    )
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
    List<int> bytes = Uint8List(16);
    for (int i = 0, index = 0; i < parts.length; i++) {
      int value = parts[i];
      if (value == -1) {
        int wildCardLength = 9 - parts.length;
        for (int j = 0; j < wildCardLength; j++) {
          bytes[index] = 0;
          bytes[index + 1] = 0;
          index += 2;
        }
      } else {
        bytes[index] = value >> 8;
        bytes[index + 1] = value & 0xff;
        index += 2;
      }
    }
    return bytes
  }

  static http (
    authority: string, 
    unencodedPath: string,
    queryParameters?: Map<string, unknown>
  ) {
    return URI.makeHttpURI(
      'http', 
      authority, 
      unencodedPath, 
      queryParameters
    )
  }

  static https (
    authority: string, 
    unencodedPath: string,
    queryParameters?: Map<string, unknown>
  ) {
    return URI.makeHttpURI(
      'https', 
      authority, 
      unencodedPath, 
      queryParameters
    )
  }

  static defaultPort (scheme: string) {
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
      let schemeChar = scheme.charCodeAt(i)
      let uriChar = uri.charCodeAt(i)
      let delta = schemeChar ^ uriChar

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

  static file (
    path: string, 
    windows?: boolean
  ) {
    return (windows ?? URI.isWindows) ? 
      URI.makeWindowsFileURL(path, false)
      : URI.makeFileURI(path, false)
  }

  static makeHttpURI (
    scheme: string, 
    authority: string | null,
    unencodedPath: string, 
    queryParameters: Map<string, unknown> | null
  ): URI {
    let userInfo = ''
    let host
    let port

    if (
      authority !== null && 
      authority.isNotEmpty
    ) {
      let hostStart = 0
      // Split off the user info.
      for (let i = 0; i < authority.length; i++) {
        const atSign = 0x40
        if (authority.charCodeAt(i) == atSign) {
          userInfo = authority.substring(0, i);
          hostStart = i + 1;
          break;
        }
      }
      var hostEnd = hostStart;

      if (
        hostStart < authority.length &&
        authority.codeAt(hostStart) === kLeftBracket
      ) {
        // IPv6 host.
        let escapeForZoneID = -1
        for (; hostEnd < authority.length; hostEnd++) {
          let char = authority.charCodeAt(hostEnd);
          if (char === kPercent && escapeForZoneID < 0) {
            escapeForZoneID = hostEnd;
            if (authority.startsWith("25", hostEnd + 1)) {
              hostEnd += 2; // Might as well skip the already checked escape.
            }
          } else if (char == kRightBracket) {
            break;
          }
        }
        if (hostEnd == authority.length) {
          throw new URIFormatError(
            'Invalid IPv6 host entry.', 
            authority, hostStart
          )
        }

        URI.parseIPv6Address(authority, hostStart + 1,
            (escapeForZoneID < 0) ? hostEnd : escapeForZoneID);
        hostEnd++; // Skip the closing bracket.
        if (hostEnd != authority.length &&
            authority.codeAt(hostEnd) != kColon) {
          throw FormatException("Invalid end of authority", authority, hostEnd);
        }
      }
      // Split host and port.
      for (; hostEnd < authority.length; hostEnd++) {
        if (authority.codeAt(hostEnd) == kColon) {
          var portString = authority.substring(hostEnd + 1);
          // We allow the empty port - falling back to initial value.
          if (portString.isNotEmpty) port = int.parse(portString);
          break;
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
      queryParameters: queryParameters
    })
  }

  static directory (
    path: string, 
    window?: boolean  
  ) {
    return (windows ?? URI.isWindows) ? 
      makeWindowsFileURL(path, true)
      : makeFileURI(path, true)
  }

  static makeWindowsFileURL (
    path: string, 
    slashTerminated: boolean
  ) {
    if (path.startsWith('\\?\\')) {
      if (path.startsWith('UNC\\', 4)) {
        path = path.replaceRange(0, 7, '\\')
      } else {
        path = path.substring(4)
        if (
          path.length < 3 ||
          path.codeAt(1) != kColon ||
          path.codeAt(2) != kBackSlash
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
      path.codeAt(1) === kColon
    ) {
      checkWindowsDriveLetter(path.codeAt(0), true)
      if (
        path.length === 2 || 
        path.codeAt(2) !== kBackSlash
      ) {
        throw new ArgumentError('Windows paths with drive letter must be absolute')
      }
      // Absolute file://C:/ URI.
      const pathSegments = path.split(sep)
      if (
        slashTerminated && 
        pathSegments.last.isNotEmpty
      ) {
        pathSegments.add('') 
      }
      checkWindowsPathReservedCharacters(pathSegments, true, 1)
      return new Uri({
        scheme: 'file', 
        pathSegments
      })
    }

    if (path.startsWith(sep)) {
      if (path.startsWith(sep, 1)) {
        // Absolute file:// URI with host.
        const pathStart = path.indexOf('\\', 2)
        const hostPart = (pathStart < 0) ? path.substring(2) : path.substring(2, pathStart)
        const pathPart = (pathStart < 0) ? '' : path.substring(pathStart + 1)
        const pathSegments = pathPart.split(sep)
        checkWindowsPathReservedCharacters(pathSegments, true)

        if (
          slashTerminated && 
          pathSegments.last.isNotEmpty
        ) {
          pathSegments.add('') // Extra separator at end.
        }
        return new Uri({ 
          scheme: 'file', 
          host: hostPart, 
          pathSegments 
        })
      } else {
        // Absolute file:// URI.
        const pathSegments = path.split(sep)
        if (
          slashTerminated && 
          pathSegments.last.isNotEmpty
        ) {
          pathSegments.add('') // Extra separator at end.
        }
        checkWindowsPathReservedCharacters(pathSegments, true);
        return new Uri({ 
          scheme: 'file', 
          pathSegments 
        })
      }
    } else {
      // Relative URI.
      const pathSegments = path.split(sep)
      checkWindowsPathReservedCharacters(pathSegments, true)
      if (
        slashTerminated &&
        pathSegments.isNotEmpty &&
        pathSegments.last.isNotEmpty
      ) {
        pathSegments.add('') // Extra separator at end.
      }
      return new Uri({ 
        pathSegments 
      })
    }
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
      throw new ArgumentError('Illegal drive letter ' + String.fromCharCode(charCode))
    } else {
      throw new UnsupportedError('Illegal drive letter ' + String.fromCharCode(charCode))
    }
  }

  static makeFileURI (
    path: string, 
    slashTerminated: boolean
  ): URI {
    const sep = '/'
    const segments = path.split(sep)
    if (
      slashTerminated && 
      segments.isNotEmpty && 
      segments.last.isNotEmpty
    ) {
      segments.add('') // Extra separator at end.
    }

    if (path.startsWith(sep)) {
      return new Uri({ 
        scheme: 'file', 
        pathSegments: segments 
      })
    } else {
      // Relative URI.
      return Uri({ 
        pathSegments: segments 
      })
    }
  }

  static checkNonWindowsPathReservedCharacters (
    segments: string[], 
    argumentError: boolean
  ) {
    for (let segment in segments) {
      if (segment.contains('/')) {
        if (argumentError) {
          throw new ArgumentError('Illegal path character $segment')
        } else {
          throw new UnsupportedError('Illegal path character $segment')
        }
      }
    }
  }

  static checkWindowsPathReservedCharacters (
    segments: string[], 
    argumentError: boolean,
    firstSegment?: number = 0
  ) {
    for (const segment in segments.skip(firstSegment)) {
      if (segment.contains(RegExp(r'["*/:<>?\\|]'))) {
        if (argumentError) {
          throw new ArgumentError('Illegal character in path')
        } else {
          throw new UnsupportedError(`Illegal character in path: ${this.segment}`)
        }
      }
    }
  }

  static computePathSegments (pathToSplit: string): string[] {
    if (
      pathToSplit.isNotEmpty && 
      pathToSplit.codeAt(0) == kSlash) {
      pathToSplit = pathToSplit.substring(1);
    }
    return (pathToSplit.isEmpty) ? 
      []
      : Array.from(pathToSplit.split('/').map(URI.decodeComponent))
  }

  static computeQueryParametersAll (query?: string): Map<string, string[]> {
    if (query === null || query.isEmpty) {
      return new Map()
    }

    const queryParameterLists = splitQueryStringAll(query)
    queryParameterLists.updateAll(_toUnmodifiableStringList)
    return Map<String, List<String>>.unmodifiable(queryParameterLists)
  }

  static makePort(
    port: number | null, 
    scheme: string
  ): number | null {
    // Perform scheme specific normalization.
    if (
      port !== null && 
      port === this.defaultPort(scheme)
    ) {
      return null
    }
    return port
  }

  /// Check and normalize a host name.
  ///
  /// If the host name starts and ends with '[' and ']', it is considered an
  /// IPv6 address. If [strictIPv6] is false, the address is also considered
  /// an IPv6 address if it contains any ':' character.
  ///
  /// If it is not an IPv6 address, it is case- and escape-normalized.
  /// This escapes all characters not valid in a reg-name,
  /// and converts all non-escape upper-case letters to lower-case.
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
      return ""
    }
    // Host is an IPv6 address if it starts with '[' or contains a colon.
    if (host.codeAt(start) == kLeftBracket) {
      if (host.codeAt(end - 1) != kRightBracket) {
        fail(host, start, 'Missing end `]` to match `[` in host');
      }
      String zoneID = "";
      int index = checkZoneID(host, start + 1, end - 1);
      if (index < end - 1) {
        int zoneIDstart =
            (host.startsWith("25", index + 1)) ? index + 3 : index + 1;
        zoneID = normalizeZoneID(host, zoneIDstart, end - 1, "%25");
      }
      Uri.parseIPv6Address(host, start + 1, index);
      // RFC 5952 requires hex digits to be lower case.
      return host.substring(start, index).toLowerCase() + zoneID + ']';
    }
    if (!strictIPv6) {
      // TODO(lrn): skip if too short to be a valid IPv6 address?
      for (int i = start; i < end; i++) {
        if (host.codeAt(i) == kColon) {
          String zoneID = "";
          int index = checkZoneID(host, start, end);
          if (index < end) {
            int zoneIDstart =
                (host.startsWith("25", index + 1)) ? index + 3 : index + 1;
            zoneID = normalizeZoneID(host, zoneIDstart, end, "%25");
          }
          Uri.parseIPv6Address(host, start, index);
          return '[${host.substring(start, index)}' + zoneID + ']';
        }
      }
    }
    return _normalizeRegName(host, start, end);
  }

  /// RFC 6874 check for ZoneID
  /// Return the index of first appeared `%`.
  static checkZoneID (
    host: string, 
    start: number, 
    end: number
  ): number {
    const index = host.indexOf('%', start)
    index = (index >= start && index < end) ? index : end
    return index
  }

  static isZoneIDChar (char: number): boolean {
    return char < 127 && (_zoneIDTable[char >> 4] & (1 << (char & 0xf))) != 0;
  }

  public get authority () {
    if (!hasAuthority) {
      return ''
    }

    const sb = StringBuffer()
    writeAuthority(sb)
    return sb.toString()
  }

  constructor ({
    scheme,
    userInfo,
    host,
    port,
    path,
    pathSegments,
    query,
    queryParameters,
    fragment
  }: URIInitOptions) {
    if (scheme === null) {
      scheme = ''
    } else {
      scheme = makeScheme(
        scheme, 
        0, 
        scheme.length
      )
    }
    userInfo = makeUserInfo(
      userInfo, 
      0, 
      stringOrNullLength(userInfo)
    )
    if (userInfo === null) {
      // TODO(dart-lang/language#440): Remove when promotion works.
      throw new Error('unreachable')
    }

    host = makeHost(
      host, 
      0, 
      stringOrNullLength(host), 
      false
    )
    // Special case this constructor for backwards compatibility.
    if (query === '' ){
      query = null
    }
    query = makeQuery(
      query, 
      0, 
      stringOrNullLength(query), 
      queryParameters
    )
    fragment = makeFragment(
      fragment, 
      0, 
      stringOrNullLength(fragment)
    )
    port = makePort(port, scheme)
    let isFile = scheme === 'file'
    
    if (
      host === null && 
      (userInfo.isNotEmpty || port != null || isFile)
    ) {
      host = ''
    }

    let hasAuthority = host !== null
    path = makePath(
      path, 
      0, 
      stringOrNullLength(path), 
      pathSegments, 
      scheme, 
      hasAuthority
    )
    if (path === null) {
      // TODO(dart-lang/language#440): Remove when promotion works.
      throw new Error('unreachable')
    }

    if (
      scheme === '' && 
      host === null && 
      !path.startsWith('/')
    ) {
      let allowScheme = scheme.isNotEmpty || host !== null
      path = URI.normalizeRelativePath(path, allowScheme)
    } else {
      path = URI.removeDotSegments(path);
    }
    if (host === null && path.startsWith('//')) {
      host = ''
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

  isScheme (scheme: string): boolean {
    let thisScheme = this.scheme
    if (scheme === null) {
      return !thisScheme
    }

    if (scheme.length !== thisScheme.length) {
      return false
    }

    return compareScheme(scheme, thisScheme)
  }

  String get userInfo => _userInfo;

  String get host {
    String? host = _host;
    if (host == null) return "";
    if (host.startsWith('[')) {
      return host.substring(1, host.length - 1);
    }
    return host;
  }

  int get port {
    return _port ?? defaultPort(scheme);
  }

  String get query => _query ?? "";

  String get fragment => _fragment ?? "";  

  replace ({
    scheme,
    userInfo,
    host,
    port,
    path,
    pathSegments,
    query,
    queryParameters,
    fragment
  }) {
    // Set to true if the scheme has (potentially) changed.
    // In that case, the default port may also have changed and we need
    // to check even the existing port.
    let schemeChanged = false
    if (scheme !== null) {
      scheme = makeScheme(scheme, 0, scheme.length)
      schemeChanged = (scheme != this.scheme)
    } else {
      scheme = this.scheme
    }

    let isFile = (scheme === 'file')
    if (userInfo !== null) {
      userInfo = makeUserInfo(userInfo, 0, userInfo.length)
    } else {
      userInfo = this._userInfo
    }

    if (port !== null) {
      port = URI.makePort(port, scheme)
    } else {
      port = this._port
      if (schemeChanged) {
        // The default port might have changed.
        port = URI.makePort(port, scheme)
      }
    }
    if (host !== null) {
      host = URI.makeHost(host, 0, host.length, false)
    } else if (this.hasAuthority) {
      host = this._host
    } else if (
      userInfo.isNotEmpty || 
      port !== null || 
      isFile
    ) {
      host = ''
    }

    let hasAuthority = host !== null
    if (
      path !== null || 
      pathSegments !== null
    ) {
      path = URI.makePath(
        path, 
        0, 
        stringOrNullLength(path), 
        pathSegments, 
        scheme,
        hasAuthority
      )
    } else {
      let currentPath = this.path
      if (
        (isFile || (hasAuthority && !currentPath.isEmpty)) &&
        !currentPath.startsWith('/')
      ) {
        currentPath = '/' + currentPath
      }
      path = currentPath
    }

    if (
      query !== null || 
      queryParameters !== null
    ) {
      query = URI.makeQuery(
        query, 
        0, 
        stringOrNullLength(query), 
        queryParameters
      )
    } else {
      query = this._query
    }

    if (fragment !== null) {
      fragment = URI.makeFragment(fragment, 0, fragment.length)
    } else {
      fragment = this._fragment
    }

    return URI.internal(
      scheme, 
      userInfo, 
      host, 
      port, 
      path, 
      query, 
      fragment
    )
  }

  removeFragment () {
    if (!this.hasFragment) {
      return this
    }
    return URI.internal({ 
      scheme: this.scheme, 
      userInfo: this.uerInfo, 
      host: this.host, 
      port: this.port, 
      path: this.port, 
      query: this.query, 
      fragment: null
    })
  }

  normalizePath () {
    const path = normalizePath(
      this.path, 
      scheme, 
      hasAuthority
    )

    if (this.path === path) {
      return this
    }
    
    return this.replace({ path: path })
  }

  /// Validates and does case- and percent-encoding normalization.
  ///
  /// The same as [normalizeOrSubstring]
  /// except this function does not convert characters to lower case.
  /// The [host] must be an RFC6874 "ZoneID".
  /// ZoneID = 1*(unreserved / pct-encoded)
  static String normalizeZoneID(String host, int start, int end,
      [String prefix = '']) {
    StringBuffer? buffer;
    if (prefix != '') {
      buffer = StringBuffer(prefix);
    }
    int sectionStart = start;
    int index = start;
    // Whether all characters between sectionStart and index are normalized,
    bool isNormalized = true;

    while (index < end) {
      int char = host.codeAt(index);
      if (char == kPercent) {
        String? replacement = normalizeEscape(host, index, true);
        if (replacement == null && isNormalized) {
          index += 3;
          continue;
        }
        buffer ??= StringBuffer();
        String slice = host.substring(sectionStart, index);
        buffer.write(slice);
        int sourceLength = 3;
        if (replacement == null) {
          replacement = host.substring(index, index + 3);
        } else if (replacement == "%") {
          fail(host, index, "ZoneID should not contain % anymore");
        }
        buffer.write(replacement);
        index += sourceLength;
        sectionStart = index;
        isNormalized = true;
      } else if (isZoneIDChar(char)) {
        if (isNormalized && kUpperCaseA <= char && kUpperCaseZ >= char) {
          // Put initial slice in buffer and continue in non-normalized mode
          buffer ??= StringBuffer();
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index));
            sectionStart = index;
          }
          isNormalized = false;
        }
        index++;
      } else {
        int sourceLength = 1;
        if ((char & 0xFC00) == 0xD800 && (index + 1) < end) {
          int tail = host.codeAt(index + 1);
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
            sourceLength = 2;
          }
        }
        String slice = host.substring(sectionStart, index);
        (buffer ??= StringBuffer())..write(slice)..write(escapeChar(char));
        index += sourceLength;
        sectionStart = index;
      }
    }
    if (buffer == null) return host.substring(start, end);
    if (sectionStart < end) {
      String slice = host.substring(sectionStart, end);
      buffer.write(slice);
    }
    return buffer.toString();
  }

  static bool _isRegNameChar(int char) {
    return char < 127 && (_regNameTable[char >> 4] & (1 << (char & 0xf))) != 0;
  }

  /// Validates and does case- and percent-encoding normalization.
  ///
  /// The [host] must be an RFC3986 "reg-name". It is converted
  /// to lower case, and percent escapes are converted to either
  /// lower case unreserved characters or upper case escapes.
  static String _normalizeRegName(String host, int start, int end) {
    StringBuffer? buffer;
    int sectionStart = start;
    int index = start;
    // Whether all characters between sectionStart and index are normalized,
    bool isNormalized = true;

    while (index < end) {
      int char = host.codeAt(index);
      if (char == kPercent) {
        // The _regNameTable contains "%", so we check that first.
        String? replacement = normalizeEscape(host, index, true);
        if (replacement == null && isNormalized) {
          index += 3;
          continue;
        }
        buffer ??= StringBuffer();
        String slice = host.substring(sectionStart, index);
        if (!isNormalized) slice = slice.toLowerCase();
        buffer.write(slice);
        int sourceLength = 3;
        if (replacement == null) {
          replacement = host.substring(index, index + 3);
        } else if (replacement == "%") {
          replacement = "%25";
          sourceLength = 1;
        }
        buffer.write(replacement);
        index += sourceLength;
        sectionStart = index;
        isNormalized = true;
      } else if (_isRegNameChar(char)) {
        if (isNormalized && kUpperCaseA <= char && kUpperCaseZ >= char) {
          // Put initial slice in buffer and continue in non-normalized mode
          buffer ??= StringBuffer();
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index));
            sectionStart = index;
          }
          isNormalized = false;
        }
        index++;
      } else if (isGeneralDelimiter(char)) {
        fail(host, index, "Invalid character");
      } else {
        int sourceLength = 1;
        if ((char & 0xFC00) == 0xD800 && (index + 1) < end) {
          int tail = host.codeAt(index + 1);
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
            sourceLength = 2;
          }
        }
        String slice = host.substring(sectionStart, index);
        if (!isNormalized) slice = slice.toLowerCase();
        (buffer ??= StringBuffer())..write(slice)..write(escapeChar(char));
        index += sourceLength;
        sectionStart = index;
      }
    }
    if (buffer == null) return host.substring(start, end);
    if (sectionStart < end) {
      String slice = host.substring(sectionStart, end);
      if (!isNormalized) slice = slice.toLowerCase();
      buffer.write(slice);
    }
    return buffer.toString();
  }

  /// Validates scheme characters and does case-normalization.
  ///
  /// Schemes are converted to lower case. They cannot contain escapes.
 

  /// Canonicalize a few often-used scheme strings.
  ///
  /// This improves memory usage and makes comparison faster.
  static String canonicalizeScheme(String scheme) {
    if (scheme == "http") return "http";
    if (scheme == "file") return "file";
    if (scheme == "https") return "https";
    if (scheme == "package") return "package";
    return scheme;
  }

  


  /// Performs path normalization (remove dot segments) on a path.
  ///
  /// If the URI has neither scheme nor authority, it's considered a
  /// "pure path" and normalization won't remove leading ".." segments.
  /// Otherwise it follows the RFC 3986 "remove dot segments" algorithm.
 

  

  /// Performs RFC 3986 Percent-Encoding Normalization.
  ///
  /// Returns a replacement string that should replace the original escape.
  /// Returns null if no replacement is necessary because the escape is
  /// not for an unreserved character and is already non-lower-case.
  ///
  /// Returns "%" if the escape is invalid (not two valid hex digits following
  /// the percent sign). The calling code should replace the percent
  /// sign with "%25", but leave the following two characters unmodified.
  ///
  /// If [lowerCase] is true, a single character returned is always lower case,
  

  /// Normalizes using [_normalize] or returns substring of original.
  ///
  /// If [_normalize] returns `null` (original content is already normalized),
  /// this methods returns the substring if [component] from [start] to [end].
  

  /// Runs through component checking that each character is valid and
  /// normalizes percent escapes.
  ///
  /// Uses [charTable] to check if a non-`%` character is allowed.
  /// Each `%` character must be followed by two hex digits.
  /// If the hex-digits are lowercase letters, they are converted to
  /// uppercase.
  ///
  /// Returns `null` if the original content was already normalized.

  /// Whether the URI is absolute.
  bool get isAbsolute => scheme != "" && fragment == "";

  String _mergePaths(String base, String reference) {
    // Optimize for the case: absolute base, reference beginning with "../".
    int backCount = 0;
    int refStart = 0;
    // Count number of "../" at beginning of reference.
    while (reference.startsWith("../", refStart)) {
      refStart += 3;
      backCount++;
    }

    // Drop last segment - everything after last '/' of base.
    int baseEnd = base.lastIndexOf('/');
    // Drop extra segments for each leading "../" of reference.
    while (baseEnd > 0 && backCount > 0) {
      int newEnd = base.lastIndexOf('/', baseEnd - 1);
      if (newEnd < 0) {
        break;
      }
      int delta = baseEnd - newEnd;
      // If we see a "." or ".." segment in base, stop here and let
      // removeDotSegments handle it.
      if ((delta == 2 || delta == 3) &&
          base.codeAt(newEnd + 1) == kDot &&
          (delta == 2 || base.codeAt(newEnd + 2) == kDot)) {
        break;
      }
      baseEnd = newEnd;
      backCount--;
    }
    return base.replaceRange(
        baseEnd + 1, null, reference.substring(refStart - 3 * backCount));
  }

  /// Make a guess at whether a path contains a `..` or `.` segment.
  ///
  /// This is a primitive test that can cause false positives.
  /// It's only used to avoid a more expensive operation in the case where
  /// it's not necessary.
  

  /// Removes all `.` segments and any non-leading `..` segments.
  ///
  /// If the path starts with something that looks like a scheme,
  /// and [allowScheme] is false, the colon is escaped.
  ///
  /// Removing the ".." from a "bar/foo/.." sequence results in "bar/"
  /// (trailing "/"). If the entire path is removed (because it contains as
  /// many ".." segments as real segments), the result is "./".
  /// This is different from an empty string, which represents "no path"
  /// when you resolve it against a base URI with a path with a non-empty
  /// final segment.
  

  Uri resolve(String reference) {
    return resolveUri(Uri.parse(reference));
  }

  // Returns the index of the `/` after the package name of a package URI.
  //
  // Returns negative if the URI is not a valid package URI:
  // * Scheme must be "package".
  // * No authority.
  // * Path starts with "something"/
  // * where "something" is not all "." characters,
  // * and contains no escapes or colons.
  //
  // The characters are necessarily valid path characters.
  static int _packageNameEnd(Uri uri, String path) {
    if (uri.isScheme("package") && !uri.hasAuthority) {
      return _skipPackageNameChars(path, 0, path.length);
    }
    return -1;
  }

  Uri resolveUri(Uri reference) {
    // From RFC 3986.
    String targetScheme;
    String targetUserInfo = "";
    String? targetHost;
    int? targetPort;
    String targetPath;
    String? targetQuery;
    if (reference.scheme.isNotEmpty) {
      targetScheme = reference.scheme;
      if (reference.hasAuthority) {
        targetUserInfo = reference.userInfo;
        targetHost = reference.host;
        targetPort = reference.hasPort ? reference.port : null;
      }
      targetPath = removeDotSegments(reference.path);
      if (reference.hasQuery) {
        targetQuery = reference.query;
      }
    } else {
      targetScheme = this.scheme;
      if (reference.hasAuthority) {
        targetUserInfo = reference.userInfo;
        targetHost = reference.host;
        targetPort =
            makePort(reference.hasPort ? reference.port : null, targetScheme);
        targetPath = removeDotSegments(reference.path);
        if (reference.hasQuery) targetQuery = reference.query;
      } else {
        targetUserInfo = this._userInfo;
        targetHost = this._host;
        targetPort = this._port;
        if (reference.path == "") {
          targetPath = this.path;
          if (reference.hasQuery) {
            targetQuery = reference.query;
          } else {
            targetQuery = this._query;
          }
        } else {
          String basePath = this.path;
          int packageNameEnd = _packageNameEnd(this, basePath);
          if (packageNameEnd > 0) {
            assert(targetScheme == "package");
            assert(!this.hasAuthority);
            assert(!this.hasEmptyPath);
            // Merging a path into a package URI.
            String packageName = basePath.substring(0, packageNameEnd);
            if (reference.hasAbsolutePath) {
              targetPath = packageName + removeDotSegments(reference.path);
            } else {
              targetPath = packageName +
                  removeDotSegments(_mergePaths(
                      basePath.substring(packageName.length), reference.path));
            }
          } else if (reference.hasAbsolutePath) {
            targetPath = removeDotSegments(reference.path);
          } else {
            // This is the RFC 3986 behavior for merging.
            if (this.hasEmptyPath) {
              if (!this.hasAuthority) {
                if (!this.hasScheme) {
                  // Keep the path relative if no scheme or authority.
                  targetPath = reference.path;
                } else {
                  // Remove leading dot-segments if the path is put
                  // beneath a scheme.
                  targetPath = removeDotSegments(reference.path);
                }
              } else {
                // RFC algorithm for base with authority and empty path.
                targetPath = removeDotSegments("/" + reference.path);
              }
            } else {
              var mergedPath = _mergePaths(this.path, reference.path);
              if (this.hasScheme || this.hasAuthority || this.hasAbsolutePath) {
                targetPath = removeDotSegments(mergedPath);
              } else {
                // Non-RFC 3986 behavior.
                // If both base and reference are relative paths,
                // allow the merged path to start with "..".
                // The RFC only specifies the case where the base has a scheme.
                targetPath = normalizeRelativePath(
                    mergedPath, this.hasScheme || this.hasAuthority);
              }
            }
          }
          if (reference.hasQuery) targetQuery = reference.query;
        }
      }
    }
    String? fragment = reference.hasFragment ? reference.fragment : null;
    return URI.internal(targetScheme, targetUserInfo, targetHost, targetPort,
        targetPath, targetQuery, fragment);
  }

  bool get hasScheme => scheme.isNotEmpty;

  bool get hasAuthority => _host != null;

  bool get hasPort => _port != null;

  bool get hasQuery => _query != null;

  bool get hasFragment => _fragment != null;

  bool get hasEmptyPath => path.isEmpty;

  bool get hasAbsolutePath => path.startsWith('/');

  String get origin {
    if (scheme == "") {
      throw StateError("Cannot use origin without a scheme: $this");
    }
    if (scheme != "http" && scheme != "https") {
      throw StateError(
          "Origin is only applicable schemes http and https: $this");
    }
    String? host = _host;
    if (host == null || host == "") {
      throw StateError(
          "A $scheme: URI should have a non-empty host name: $this");
    }
    int? port = _port;
    if (port == null) return "$scheme://$host";
    return "$scheme://$host:$port";
  }

  String toFilePath({bool? windows}) {
    if (scheme != "" && scheme != "file") {
      throw UnsupportedError("Cannot extract a file path from a $scheme URI");
    }
    if (query != "") {
      throw UnsupportedError(
          "Cannot extract a file path from a URI with a query component");
    }
    if (fragment != "") {
      throw UnsupportedError(
          "Cannot extract a file path from a URI with a fragment component");
    }
    return (windows ?? isWindows) ? _toWindowsFilePath(this) : _toFilePath();
  }

  String _toFilePath() {
    if (hasAuthority && host != "") {
      throw UnsupportedError(
          "Cannot extract a non-Windows file path from a file URI "
          "with an authority");
    }
    // Use path segments to have any escapes unescaped.
    var pathSegments = this.pathSegments;
    checkNonWindowsPathReservedCharacters(pathSegments, false);
    var result = StringBuffer();
    if (hasAbsolutePath) result.write("/");
    result.writeAll(pathSegments, "/");
    return result.toString();
  }

  static String _toWindowsFilePath(Uri uri) {
    bool hasDriveLetter = false;
    var segments = uri.pathSegments;
    if (segments.length > 0 &&
        segments[0].length == 2 &&
        segments[0].codeAt(1) == kColon) {
      checkWindowsDriveLetter(segments[0].codeAt(0), false);
      checkWindowsPathReservedCharacters(segments, false, 1);
      hasDriveLetter = true;
    } else {
      checkWindowsPathReservedCharacters(segments, false, 0);
    }
    var result = StringBuffer();
    if (uri.hasAbsolutePath && !hasDriveLetter) result.write(r"\");
    if (uri.hasAuthority) {
      var host = uri.host;
      if (host.isNotEmpty) {
        result.write(r"\");
        result.write(host);
        result.write(r"\");
      }
    }
    result.writeAll(segments, r"\");
    if (hasDriveLetter && segments.length == 1) result.write(r"\");
    return result.toString();
  }

  void writeAuthority(StringSink ss) {
    if (_userInfo.isNotEmpty) {
      ss.write(_userInfo);
      ss.write("@");
    }
    if (_host != null) ss.write(_host);
    if (_port != null) {
      ss.write(":");
      ss.write(_port);
    }
  }

  /// Access the structure of a `data:` URI.
  ///
  /// Returns a [UriData] object for `data:` URIs and `null` for all other
  /// URIs.
  /// The [UriData] object can be used to access the media type and data
  /// of a `data:` URI.
  UriData? get data => (scheme == "data") ? UriData.fromUri(this) : null;

  String toString() => _text;

  String _initializeText() {
    StringBuffer sb = StringBuffer();
    if (scheme.isNotEmpty) sb..write(scheme)..write(":");
    if (hasAuthority || (scheme == "file")) {
      // File URIS always have the authority, even if it is empty.
      // The empty URI means "localhost".
      sb.write("//");
      writeAuthority(sb);
    }
    sb.write(path);
    if (_query != null) sb..write("?")..write(_query);
    if (_fragment != null) sb..write("#")..write(_fragment);
    return sb.toString();
  }

  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is Uri &&
        scheme == other.scheme &&
        hasAuthority == other.hasAuthority &&
        userInfo == other.userInfo &&
        host == other.host &&
        port == other.port &&
        path == other.path &&
        hasQuery == other.hasQuery &&
        query == other.query &&
        hasFragment == other.hasFragment &&
        fragment == other.fragment;
  }

  static List<String> createList() => <String>[];

  static Map<String, List<String>> splitQueryStringAll(String query,
      {Encoding encoding = utf8}) {
    var result = <String, List<String>>{};
    int i = 0;
    int start = 0;
    int equalsIndex = -1;

    void parsePair(int start, int equalsIndex, int end) {
      String key;
      String value;
      if (start == end) return;
      if (equalsIndex < 0) {
        key = URIDecode(query, start, end, encoding, true);
        value = "";
      } else {
        key = URIDecode(query, start, equalsIndex, encoding, true);
        value = URIDecode(query, equalsIndex + 1, end, encoding, true);
      }
      result.putIfAbsent(key, createList).add(value);
    }

    while (i < query.length) {
      int char = query.codeAt(i);
      if (char == kEquals) {
        if (equalsIndex < 0) equalsIndex = i;
      } else if (char == kAmpersand) {
        parsePair(start, equalsIndex, i);
        start = i + 1;
        equalsIndex = -1;
      }
      i++;
    }
    parsePair(start, equalsIndex, i);
    return result;
  }

  external static String URIEncode(List<int> canonicalTable, String text,
      Encoding encoding, bool spaceToPlus);

  /// Convert a byte (2 character hex sequence) in string [s] starting
  /// at position [pos] to its ordinal value
  static int _hexCharPairToByte(String s, int pos) {
    int byte = 0;
    for (int i = 0; i < 2; i++) {
      var charCode = s.codeAt(pos + i);
      if (0x30 <= charCode && charCode <= 0x39) {
        byte = byte * 16 + charCode - 0x30;
      } else {
        // Check ranges A-F (0x41-0x46) and a-f (0x61-0x66).
        charCode |= 0x20;
        if (0x61 <= charCode && charCode <= 0x66) {
          byte = byte * 16 + charCode - 0x57;
        } else {
          throw ArgumentError("Invalid URL encoding");
        }
      }
    }
    return byte;
  }

  /// Uri-decode a percent-encoded string.
  ///
  /// It unescapes the string [text] and returns the unescaped string.
  ///
  /// This function is similar to the JavaScript-function `decodeURI`.
  ///
  /// If [plusToSpace] is `true`, plus characters will be converted to spaces.
  ///
  /// The decoder will create a byte-list of the percent-encoded parts, and then
  /// decode the byte-list using [encoding]. The default encoding is UTF-8.
}
