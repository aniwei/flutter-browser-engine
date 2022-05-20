import { setter, getter } from '@Shared'

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
const kBackslash = 0x5C
const kRightBracket = 0x5D
const kLowerCaseA = 0x61
const kLowerCaseF = 0x66
const kLowerCaseZ = 0x7A

const kHexDigits = '0123456789ABCDEF'

export type URIOptions = {
  scheme?: string | null,
  userInfo?: string | null,
  host?: string | null,
  port?: number | null,
  path?: string | null,
  // @TODO
  pathSegments?: string[] | null,
  query?: string | null,
  queryParameters?: Map<string, unknown> | null,
  fragment?: string | null
}

export class URI {
  static defaultPort (scheme: string): number {
    if (scheme == "http") return 80;
    if (scheme == "https") return 443;
    return 0;
  }

  static notSimple (
    uri: string,
    start: number,
    end: number,
    schemeEnd: number,
    hostStart: number,
    portStart: number,
    pathStart: number,
    queryStart: number,
    fragmentStart: number,
    scheme: string
  ) {
    if (scheme === null) {
      scheme = ''
      if (schemeEnd > start) {
        scheme = makeScheme(uri, start, schemeEnd)
      } else if (schemeEnd == start) {
        fail(uri, start, "Invalid empty scheme");
      }
    }

    let userInfo = ''
    String? host
    int? port

    if (hostStart > start) {
      const userInfoStart: number = schemeEnd + 3
      if (userInfoStart < hostStart) {
        userInfo = makeUserInfo(uri, userInfoStart, hostStart - 1)
      }
      host = makeHost(uri, hostStart, portStart, false)
      if (portStart + 1 < pathStart) {
        const portNumber =
            int.tryParse(uri.substring(portStart + 1, pathStart)) ??
                (throw FormatException("Invalid port", uri, portStart + 1))

        port = makePort(portNumber, scheme);
      }
    }
    
    const path = makePath(
      uri, 
      pathStart, 
      queryStart, 
      null, 
      scheme, 
      host !== null
    )
    
    let query: string | null = null

    if (queryStart < fragmentStart) {
      query = makeQuery(
        uri, 
        queryStart + 1, 
        fragmentStart, 
        null
      )
    }
    
    let fragment: string | null = null

    if (fragmentStart < end) {
      fragment = makeFragment(uri, fragmentStart + 1, end)
    }

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

  static http (
    authority: string, 
    unencodedPath: string,
    queryParameters?: Map<string, any>
  ) {
    return makeHttpURI("http", authority, unencodedPath, queryParameters);
  }

  static https(
    authority: string, 
    unencodedPath: string,
    queryParameters?: Map<string, unknown> | null
  ) {
    return makeHttpURI(
      'https', 
      authority, 
      unencodedPath, 
      queryParameters
    )
  }

  static fail(
    uri: string, 
    index: number, 
    message: string
  ) {
    throw new URIFormatError(message, uri, index)
  }

  static makeHttpURI (
    scheme: string, 
    authority: string | null,
    unencodedPath: string, 
    queryParameters: Map<String, dynamic> | null
  ) {
    let userInfo = ''
    let host: string | null
    let port: number | null

    if (authority !== null && authority) {
      let hostStart = 0
      
      for (let i = 0; i < authority.length; i++) {
        const atSign = 0x40
        if (authority.codeAt(i) === atSign) {
          userInfo = authority.substring(0, i)
          hostStart = i + 1
          break
        }
      }

      let hostEnd = hostStart

      if (
        hostStart < authority.length &&
        authority.codeUnitAt(hostStart) === kLeftBracket
      ) {
        let escapeForZoneID = -1

        for (; hostEnd < authority.length; hostEnd++) {
          let char = authority.codeAt(hostEnd)
          if (char == kPercent && escapeForZoneID < 0) {
            escapeForZoneID = hostEnd
            if (authority.startsWith('25', hostEnd + 1)) {
              hostEnd += 2
            }

          } else if (char === kRightBracket) {
            break
          }
        }
        if (hostEnd === authority.length) {
          throw new FormatException(
            'Invalid IPv6 host entry.', 
            authority, hostStart
          )
        }

        Uri.parseIPv6Address(
          authority, 
          hostStart + 1,
          (escapeForZoneID < 0) ? hostEnd : escapeForZoneID
        )
        hostEnd++
        if (
          hostEnd !== authority.length &&
          authority.codeUnitAt(hostEnd) !== kColon
        ) {
          throw new FormatException('Invalid end of authority', authority, hostEnd)
        }
      }
      
      for ( ;hostEnd < authority.length; hostEnd++ ) {
        if (authority.codeAt(hostEnd) === kColon) {
          let portString = authority.substring(hostEnd + 1)
          
          if (portString.isNotEmpty) {
            port = int.parse(portString)
          }

          break
        }
      }
      
      host = authority.substring(hostStart, hostEnd)
    }

    return new URI(
      scheme,
      userInfo,
      host,
      port,
      unencodedPath.split('/'),
      queryParameters
    )
  }

  static file (
    path: string, 
    windows: boolean | null
  ) {
    return (windows ?? URI.isWindows)
      ? makeWindowsFileURL(path, false)
      : makeFileURI(path, false)
  }

  static directory (
    path: string, 
    windows: boolean | null
  ) {
    return (windows ?? URI.isWindows)
      ? makeWindowsFileURL(path, true)
      : makeFileURI(path, true)
  }

  public scheme
  public userInfo: string
  public host
  public port
  public path
  public query
  public fragment

  public get authority (): string {
    if (!hasAuthority) return "";
    var sb = StringBuffer();
    _writeAuthority(sb);
    return sb.toString();
  }

  @getter(function (this, value: string) {
    const host = this.host
    if (host === null) {
      return ''
    }

    if (host.startWith('[')) {
      return host.substring(1, host.length -1)
    }

    return host
  }) public host: string

  @getter(function (this, value: number) {
    return value ?? this.defaultPort(this.scheme)
  })

  int get port {
    return _port ?? defaultPort(scheme);
  }

  String get query => _query ?? "";
  String get fragment => _fragment ?? "";

  constructor (options: URIOptions) {
    let { scheme, userInfo, query, fragment, port } = options

    // 处理 scheme
    if (scheme) {
      scheme = this.makeScheme(scheme, 0, scheme.length)
    } else {
      scheme = ''
    }

    userInfo = this.makeUserInfo(
      userInfo, 
      0, 
      _stringOrNullLength(userInfo)
    )
    if (!userInfo) {
      throw new Error('unreachable')
    }

    host = this.makeHost(
      host, 
      0, 
      _stringOrNullLength(host), 
      false
    )
    
    if (query === '') {
      query = null
    }

    query = this.makeQuery(
      query, 
      0, 
      _stringOrNullLength(query), 
      queryParameters
    )
    
    fragment = this.makeFragment(
      fragment, 
      0, 
      _stringOrNullLength(fragment)
    )

    port = this.makePort(port, scheme)
    const isFile = scheme === 'file'

    if (
      host === null && 
      (
        userInfo.isNotEmpty || 
        port !== null || 
        isFile
      )
    ) {
      host = ''
    }
    
    const hasAuthority = host !== null
    path = this.makePath(
      path, 
      0, 
      _stringOrNullLength(path), 
      pathSegments, 
      scheme, 
      hasAuthority
    )
    if (path === null) {
      throw new Error('unreachable')
    }

    if (
      scheme.isEmpty && 
      host === null && 
      !path.startsWith('/')
    ) {
      const allowScheme = scheme.isNotEmpty || host !== null
      path = normalizeRelativePath(path, allowScheme)
    } else {
      path = removeDotSegments(path)
    }

    if (
      host === null && 
      path.startsWith('//')
    ) {
      host = ''
    }
        
    // this
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

  isScheme (scheme: string): boolean {
    const thisScheme = this.scheme
    if (scheme === null) {
      return thisScheme.isEmpty
    }

    if (scheme.length !== thisScheme.length) {
      return false
    }

    return compareScheme(scheme, thisScheme);
  }

  // @TODO
  // external static bool get _isWindows;
  static checkNonWindowsPathReservedCharacters (
    segments: string[], 
    argumentError: boolean 
  ) {
    for (const segment in segments) {
      if (segment.contains('/')) {
        if (argumentError) {
          throw new ArgumentError(`Illegal path character ${segment}`)
        } else {
          throw new UnsupportedError(`Illegal path character ${segment}`)
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
          throw new ArgumentError(`Illegal character in path`)
        } else {
          throw new UnsupportedError(`Illegal character in path: ${segment}`)
        }
      }
    }
  }

  static checkWindowsDriveLetter(
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

  static URI makeFileURI (
    path: string, 
    slashTerminated: boolean
  ) {
    const sep = '/'
    const segments = path.split(sep)
    if (
      slashTerminated && 
      segments.length > 0 && 
      // @TODO
      segments[segments.length - 1].last.isNotEmpty
    ) {
      segments.add('')
    }

    if (path.startsWith(sep)) {
      return new URI(
        'file', 
        segments
      )
    } else {
      
      return new Uri(segments)
    }
  }

  static makeWindowsFileURL(String path, bool slashTerminated) {
    if (path.startsWith(r"\\?\")) {
      if (path.startsWith(r"UNC\", 4)) {
        path = path.replaceRange(0, 7, r'\');
      } else {
        path = path.substring(4);
        if (path.length < 3 ||
            path.codeUnitAt(1) != kColon ||
            path.codeUnitAt(2) != kBackslash) {
          throw ArgumentError(
              r"Windows paths with \\?\ prefix must be absolute");
        }
      }
    } else {
      path = path.replaceAll("/", r'\');
    }
    const String sep = r'\';
    if (path.length > 1 && path.codeUnitAt(1) == kColon) {
      _checkWindowsDriveLetter(path.codeUnitAt(0), true);
      if (path.length == 2 || path.codeUnitAt(2) != kBackslash) {
        throw ArgumentError("Windows paths with drive letter must be absolute");
      }
      
      var pathSegments = path.split(sep);
      if (slashTerminated && pathSegments.last.isNotEmpty) {
        pathSegments.add(""); 
      }
      _checkWindowsPathReservedCharacters(pathSegments, true, 1);
      return Uri(scheme: "file", pathSegments: pathSegments);
    }

    if (path.startsWith(sep)) {
      if (path.startsWith(sep, 1)) {
        
        int pathStart = path.indexOf(r'\', 2);
        String hostPart =
            (pathStart < 0) ? path.substring(2) : path.substring(2, pathStart);
        String pathPart = (pathStart < 0) ? "" : path.substring(pathStart + 1);
        var pathSegments = pathPart.split(sep);
        _checkWindowsPathReservedCharacters(pathSegments, true);
        if (slashTerminated && pathSegments.last.isNotEmpty) {
          pathSegments.add(""); 
        }
        return Uri(scheme: "file", host: hostPart, pathSegments: pathSegments);
      } else {
        
        var pathSegments = path.split(sep);
        if (slashTerminated && pathSegments.last.isNotEmpty) {
          pathSegments.add(""); 
        }
        _checkWindowsPathReservedCharacters(pathSegments, true);
        return Uri(scheme: "file", pathSegments: pathSegments);
      }
    } else {
      
      var pathSegments = path.split(sep);
      _checkWindowsPathReservedCharacters(pathSegments, true);
      if (slashTerminated &&
          pathSegments.isNotEmpty &&
          pathSegments.last.isNotEmpty) {
        pathSegments.add(""); 
      }
      return Uri(pathSegments: pathSegments);
    }
  }

  Uri replace(
      {String? scheme,
      String? userInfo,
      String? host,
      int? port,
      String? path,
      Iterable<String>? pathSegments,
      String? query,
      Map<String, dynamic /*String|Iterable<String>*/ >? queryParameters,
      String? fragment}) {
    
    
    
    let schemeChanged = false
    if (scheme != null) {
      scheme = makeScheme(scheme, 0, scheme.length);
      schemeChanged = (scheme != this.scheme);
    } else {
      scheme = this.scheme;
    }

    const isFile = (scheme == "file");
    if (userInfo != null) {
      userInfo = makeUserInfo(userInfo, 0, userInfo.length);
    } else {
      userInfo = this._userInfo;
    }

    if (port != null) {
      port = makePort(port, scheme);
    } else {
      port = this._port;
      if (schemeChanged) {
        
        port = makePort(port, scheme);
      }
    }

    if (host !== null) {
      host = makeHost(
        host, 
        0, 
        host.length, 
        false
      )
    } else if (this.hasAuthority) {
      host = this._host
    } else if (
      userInfo.isNotEmpty || 
      port !== null || 
      isFile
    ) {
      host = ''
    }

    const hasAuthority = host !== null

    if (
      path !== null || 
      pathSegments !== null
    ) {
      path = makePath(
        path, 
        0, 
        _stringOrNullLength(path), 
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
      query != null || 
      queryParameters != null
    ) {
      query = makeQuery(query, 0, _stringOrNullLength(query), queryParameters)
    } else {
      query = this._query
    }

    if (fragment !== null) {
      fragment = makeFragment(fragment, 0, fragment.length)
    } else {
      fragment = this._fragment
    }

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

  removeFragment (): URI {
    if (!this.hasFragment) {
      return this
    }

    return new URI({ 
      scheme, 
      userInfo: _userInfo, 
      host: _host, 
      port: _port, 
      path: path, 
      query: _query
    })
  }

  static computePathSegments (pathToSplit: string): string[] {
    if (
      pathToSplit.isNotEmpty && 
      pathToSplit.codeAt(0) === kSlash
    ) {
      pathToSplit = pathToSplit.substring(1)
    }

    return (pathToSplit.isEmpty)
      ? const <String>[]
      : List<String>.unmodifiable(
          pathToSplit.split("/").map(Uri.decodeComponent))
  }

  static Map<String, List<String>> _computeQueryParametersAll(String? query) {
    if (query == null || query.isEmpty) return const <String, List<String>>{};
    Map<String, List<String>> queryParameterLists = _splitQueryStringAll(query);
    queryParameterLists.updateAll(_toUnmodifiableStringList);
    return Map<String, List<String>>.unmodifiable(queryParameterLists);
  }

  normalizePath (): URI {
    const path = normalizePath(
      this.path, 
      scheme, 
      hasAuthority
    )

    if (path === this.path) {
      return this
    }

    return this.replace(path)
  }

  static makePort(
    port: number | null, 
    scheme: string
  ): number | null {
    
    if (port !== null && port === defaultPort(scheme)) {
      return null
    }

    return port
  }

  
  
  
  
  
  
  
  
  
  static String? makeHost(String? host, int start, int end, bool strictIPv6) {
    
    if (host == null) return null;
    if (start == end) return "";
    
    if (host.codeUnitAt(start) == kLeftBracket) {
      if (host.codeUnitAt(end - 1) != kRightBracket) {
        fail(host, start, 'Missing end `]` to match `[` in host');
      }
      String zoneID = "";
      int index = _checkZoneID(host, start + 1, end - 1);
      if (index < end - 1) {
        int zoneIDstart =
            (host.startsWith("25", index + 1)) ? index + 3 : index + 1;
        zoneID = _normalizeZoneID(host, zoneIDstart, end - 1, "%25");
      }
      Uri.parseIPv6Address(host, start + 1, index);
      
      return host.substring(start, index).toLowerCase() + zoneID + ']';
    }
    if (!strictIPv6) {
      
      for (int i = start; i < end; i++) {
        if (host.codeUnitAt(i) == kColon) {
          String zoneID = "";
          int index = _checkZoneID(host, start, end);
          if (index < end) {
            int zoneIDstart =
                (host.startsWith("25", index + 1)) ? index + 3 : index + 1;
            zoneID = _normalizeZoneID(host, zoneIDstart, end, "%25");
          }
          Uri.parseIPv6Address(host, start, index);
          return '[${host.substring(start, index)}' + zoneID + ']';
        }
      }
    }
    return _normalizeRegName(host, start, end);
  }

  
  
  static int _checkZoneID(String host, int start, int end) {
    int index = host.indexOf('%', start);
    index = (index >= start && index < end) ? index : end;
    return index;
  }

  static bool _isZoneIDChar(int char) {
    return char < 127 && (_zoneIDTable[char >> 4] & (1 << (char & 0xf))) != 0;
  }

  
  
  
  
  
  
  static String _normalizeZoneID(String host, int start, int end,
      [String prefix = '']) {
    StringBuffer? buffer;
    if (prefix != '') {
      buffer = StringBuffer(prefix);
    }
    int sectionStart = start;
    int index = start;
    
    bool isNormalized = true;

    while (index < end) {
      int char = host.codeUnitAt(index);
      if (char == kPercent) {
        String? replacement = _normalizeEscape(host, index, true);
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
      } else if (_isZoneIDChar(char)) {
        if (isNormalized && kUpperCaseA <= char && kUpperCaseZ >= char) {
          
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
          int tail = host.codeUnitAt(index + 1);
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
            sourceLength = 2;
          }
        }
        String slice = host.substring(sectionStart, index);
        (buffer ??= StringBuffer())..write(slice)..write(_escapeChar(char));
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

  
  
  
  
  
  static String _normalizeRegName(String host, int start, int end) {
    StringBuffer? buffer;
    int sectionStart = start;
    int index = start;
    
    bool isNormalized = true;

    while (index < end) {
      int char = host.codeUnitAt(index);
      if (char == kPercent) {
        
        String? replacement = _normalizeEscape(host, index, true);
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
          
          buffer ??= StringBuffer();
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index));
            sectionStart = index;
          }
          isNormalized = false;
        }
        index++;
      } else if (_isGeneralDelimiter(char)) {
        fail(host, index, "Invalid character");
      } else {
        int sourceLength = 1;
        if ((char & 0xFC00) == 0xD800 && (index + 1) < end) {
          int tail = host.codeUnitAt(index + 1);
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
            sourceLength = 2;
          }
        }
        String slice = host.substring(sectionStart, index);
        if (!isNormalized) slice = slice.toLowerCase();
        (buffer ??= StringBuffer())..write(slice)..write(_escapeChar(char));
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

  
  
  
  static String makeScheme(String scheme, int start, int end) {
    if (start == end) return "";
    final int firstCodeUnit = scheme.codeUnitAt(start);
    if (!_isAlphabeticCharacter(firstCodeUnit)) {
      fail(scheme, start, "Scheme not starting with alphabetic character");
    }
    bool containsUpperCase = false;
    for (int i = start; i < end; i++) {
      final int codeUnit = scheme.codeUnitAt(i);
      if (!_isSchemeCharacter(codeUnit)) {
        fail(scheme, i, "Illegal scheme character");
      }
      if (kUpperCaseA <= codeUnit && codeUnit <= kUpperCaseZ) {
        containsUpperCase = true;
      }
    }
    scheme = scheme.substring(start, end);
    if (containsUpperCase) scheme = scheme.toLowerCase();
    return _canonicalizeScheme(scheme);
  }

  
  
  
  static String _canonicalizeScheme(String scheme) {
    if (scheme == "http") return "http";
    if (scheme == "file") return "file";
    if (scheme == "https") return "https";
    if (scheme == "package") return "package";
    return scheme;
  }

  static String makeUserInfo(String? userInfo, int start, int end) {
    if (userInfo == null) return "";
    return _normalizeOrSubstring(userInfo, start, end, _userinfoTable);
  }

  static String makePath(String? path, int start, int end,
      Iterable<String>? pathSegments, String scheme, bool hasAuthority) {
    bool isFile = (scheme == "file");
    bool ensureLeadingSlash = isFile || hasAuthority;
    String result;
    if (path == null) {
      if (pathSegments == null) return isFile ? "/" : "";
      result = pathSegments
          .map((s) => _uriEncode(_pathCharTable, s, utf8, false))
          .join("/");
    } else if (pathSegments != null) {
      throw ArgumentError('Both path and pathSegments specified');
    } else {
      result = _normalizeOrSubstring(path, start, end, _pathCharOrSlashTable,
          escapeDelimiters: true);
    }
    if (result.isEmpty) {
      if (isFile) return "/";
    } else if (ensureLeadingSlash && !result.startsWith('/')) {
      result = "/" + result;
    }
    result = normalizePath(result, scheme, hasAuthority);
    return result;
  }

  
  
  
  
  
  static String normalizePath(String path, String scheme, bool hasAuthority) {
    if (scheme.isEmpty && !hasAuthority && !path.startsWith('/')) {
      return _normalizeRelativePath(path, scheme.isNotEmpty || hasAuthority);
    }
    return _removeDotSegments(path);
  }

  static String? makeQuery(String? query, int start, int end,
      Map<String, dynamic /*String|Iterable<String>*/ >? queryParameters) {
    if (query != null) {
      if (queryParameters != null) {
        throw ArgumentError('Both query and queryParameters specified');
      }
      return _normalizeOrSubstring(query, start, end, _queryCharTable,
          escapeDelimiters: true);
    }
    if (queryParameters == null) return null;

    var result = StringBuffer();
    var separator = "";

    void writeParameter(String key, String? value) {
      result.write(separator);
      separator = "&";
      result.write(Uri.encodeQueryComponent(key));
      if (value != null && value.isNotEmpty) {
        result.write("=");
        result.write(Uri.encodeQueryComponent(value));
      }
    }

    queryParameters.forEach((key, value) {
      if (value == null || value is String) {
        writeParameter(key, value);
      } else {
        Iterable values = value;
        for (String value in values) {
          writeParameter(key, value);
        }
      }
    });
    return result.toString();
  }

  static String? makeFragment(String? fragment, int start, int end) {
    if (fragment == null) return null;
    return _normalizeOrSubstring(fragment, start, end, _queryCharTable,
        escapeDelimiters: true);
  }

  
  
  
  
  
  
  
  
  
  
  
  static String? _normalizeEscape(String source, int index, bool lowerCase) {
    assert(source.codeUnitAt(index) == kPercent);
    if (index + 2 >= source.length) {
      return "%"; 
    }
    int firstDigit = source.codeUnitAt(index + 1);
    int secondDigit = source.codeUnitAt(index + 2);
    int firstDigitValue = hexDigitValue(firstDigit);
    int secondDigitValue = hexDigitValue(secondDigit);
    if (firstDigitValue < 0 || secondDigitValue < 0) {
      return "%"; 
    }
    int value = firstDigitValue * 16 + secondDigitValue;
    if (_isUnreservedChar(value)) {
      if (lowerCase && kUpperCaseA <= value && kUpperCaseZ >= value) {
        value |= 0x20;
      }
      return String.fromCharCode(value);
    }
    if (firstDigit >= kLowerCaseA || secondDigit >= kLowerCaseA) {
      
      return source.substring(index, index + 3).toUpperCase();
    }
    
    
    return null;
  }

  static String _escapeChar(int char) {
    assert(char <= 0x10ffff); 
    List<int> codeUnits;
    if (char < 0x80) {
      
      codeUnits = Uint8List(3);
      codeUnits[0] = kPercent;
      codeUnits[1] = kHexDigits.codeUnitAt(char >> 4);
      codeUnits[2] = kHexDigits.codeUnitAt(char & 0xf);
    } else {
      
      int flag = 0xc0; 
      int encodedBytes = 2;
      if (char > 0x7ff) {
        flag = 0xe0;
        encodedBytes = 3;
        if (char > 0xffff) {
          encodedBytes = 4;
          flag = 0xf0;
        }
      }
      codeUnits = Uint8List(3 * encodedBytes);
      int index = 0;
      while (--encodedBytes >= 0) {
        int byte = ((char >> (6 * encodedBytes)) & 0x3f) | flag;
        codeUnits[index] = kPercent;
        codeUnits[index + 1] = kHexDigits.codeUnitAt(byte >> 4);
        codeUnits[index + 2] = kHexDigits.codeUnitAt(byte & 0xf);
        index += 3;
        flag = 0x80; 
      }
    }
    return String.fromCharCodes(codeUnits);
  }

  
  
  
  
  static String _normalizeOrSubstring(
      String component, int start, int end, List<int> charTable,
      {bool escapeDelimiters = false}) {
    return _normalize(component, start, end, charTable,
            escapeDelimiters: escapeDelimiters) ??
        component.substring(start, end);
  }

  
  
  
  
  
  
  
  
  
  static String? _normalize(
      String component, int start, int end, List<int> charTable,
      {bool escapeDelimiters = false}) {
    StringBuffer? buffer;
    int sectionStart = start;
    int index = start;
    
    while (index < end) {
      int char = component.codeUnitAt(index);
      if (char < 127 && (charTable[char >> 4] & (1 << (char & 0x0f))) != 0) {
        index++;
      } else {
        String? replacement;
        int sourceLength;
        if (char == kPercent) {
          replacement = _normalizeEscape(component, index, false);
          
          if (replacement == null) {
            index += 3;
            continue;
          }
          
          if ("%" == replacement) {
            replacement = "%25";
            sourceLength = 1;
          } else {
            sourceLength = 3;
          }
        } else if (!escapeDelimiters && _isGeneralDelimiter(char)) {
          fail(component, index, "Invalid character");
          throw "unreachable"; 
        } else {
          sourceLength = 1;
          if ((char & 0xFC00) == 0xD800) {
            
            if (index + 1 < end) {
              int tail = component.codeUnitAt(index + 1);
              if ((tail & 0xFC00) == 0xDC00) {
                
                sourceLength = 2;
                char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
              }
            }
          }
          replacement = _escapeChar(char);
        }
        (buffer ??= StringBuffer())
          ..write(component.substring(sectionStart, index))
          ..write(replacement);
        index += sourceLength;
        sectionStart = index;
      }
    }
    if (buffer == null) {
      return null;
    }
    if (sectionStart < end) {
      buffer.write(component.substring(sectionStart, end));
    }
    return buffer.toString();
  }

  static bool _isSchemeCharacter(int ch) {
    return ch < 128 && ((_schemeTable[ch >> 4] & (1 << (ch & 0x0f))) != 0);
  }

  static bool _isGeneralDelimiter(int ch) {
    return ch <= kRightBracket &&
        ((_genDelimitersTable[ch >> 4] & (1 << (ch & 0x0f))) != 0);
  }

  
  bool get isAbsolute => scheme != "" && fragment == "";

  String _mergePaths(String base, String reference) {
    
    int backCount = 0;
    int refStart = 0;
    
    while (reference.startsWith("../", refStart)) {
      refStart += 3;
      backCount++;
    }

    
    int baseEnd = base.lastIndexOf('/');
    
    while (baseEnd > 0 && backCount > 0) {
      int newEnd = base.lastIndexOf('/', baseEnd - 1);
      if (newEnd < 0) {
        break;
      }
      int delta = baseEnd - newEnd;
      
      
      if ((delta == 2 || delta == 3) &&
          base.codeUnitAt(newEnd + 1) == kDot &&
          (delta == 2 || base.codeUnitAt(newEnd + 2) == kDot)) {
        break;
      }
      baseEnd = newEnd;
      backCount--;
    }
    return base.replaceRange(
        baseEnd + 1, null, reference.substring(refStart - 3 * backCount));
  }

  
  
  
  
  
  static bool _mayContainDotSegments(String path) {
    if (path.startsWith('.')) return true;
    int index = path.indexOf("/.");
    return index != -1;
  }

  
  
  
  
  
  static String _removeDotSegments(String path) {
    if (!_mayContainDotSegments(path)) return path;
    assert(path.isNotEmpty); 
    List<String> output = [];
    bool appendSlash = false;
    for (String segment in path.split("/")) {
      appendSlash = false;
      if (segment == "..") {
        if (output.isNotEmpty) {
          output.removeLast();
          if (output.isEmpty) {
            output.add("");
          }
        }
        appendSlash = true;
      } else if ("." == segment) {
        appendSlash = true;
      } else {
        output.add(segment);
      }
    }
    if (appendSlash) output.add("");
    return output.join("/");
  }

  
  
  
  
  
  
  
  
  
  
  
  static String _normalizeRelativePath(String path, bool allowScheme) {
    assert(!path.startsWith('/')); 
    if (!_mayContainDotSegments(path)) {
      if (!allowScheme) path = _escapeScheme(path);
      return path;
    }
    assert(path.isNotEmpty); 
    List<String> output = [];
    bool appendSlash = false;
    for (String segment in path.split("/")) {
      appendSlash = false;
      if (".." == segment) {
        if (!output.isEmpty && output.last != "..") {
          output.removeLast();
          appendSlash = true;
        } else {
          output.add("..");
        }
      } else if ("." == segment) {
        appendSlash = true;
      } else {
        output.add(segment);
      }
    }
    if (output.isEmpty || (output.length == 1 && output[0].isEmpty)) {
      return "./";
    }
    if (appendSlash || output.last == '..') output.add("");
    if (!allowScheme) output[0] = _escapeScheme(output[0]);
    return output.join("/");
  }

  
  static String _escapeScheme(String path) {
    if (path.length >= 2 && _isAlphabeticCharacter(path.codeUnitAt(0))) {
      for (int i = 1; i < path.length; i++) {
        int char = path.codeUnitAt(i);
        if (char == kColon) {
          return "${path.substring(0, i)}%3A${path.substring(i + 1)}";
        }
        if (char > 127 ||
            ((_schemeTable[char >> 4] & (1 << (char & 0x0f))) == 0)) {
          break;
        }
      }
    }
    return path;
  }

  Uri resolve(String reference) {
    return resolveUri(Uri.parse(reference));
  }

  
  
  
  
  
  
  
  
  
  
  static int _packageNameEnd(Uri uri, String path) {
    if (uri.isScheme("package") && !uri.hasAuthority) {
      return _skipPackageNameChars(path, 0, path.length);
    }
    return -1;
  }

  Uri resolveUri(Uri reference) {
    
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
      targetPath = _removeDotSegments(reference.path);
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
        targetPath = _removeDotSegments(reference.path);
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
            
            String packageName = basePath.substring(0, packageNameEnd);
            if (reference.hasAbsolutePath) {
              targetPath = packageName + _removeDotSegments(reference.path);
            } else {
              targetPath = packageName +
                  _removeDotSegments(_mergePaths(
                      basePath.substring(packageName.length), reference.path));
            }
          } else if (reference.hasAbsolutePath) {
            targetPath = _removeDotSegments(reference.path);
          } else {
            
            if (this.hasEmptyPath) {
              if (!this.hasAuthority) {
                if (!this.hasScheme) {
                  
                  targetPath = reference.path;
                } else {
                  
                  
                  targetPath = _removeDotSegments(reference.path);
                }
              } else {
                
                targetPath = _removeDotSegments("/" + reference.path);
              }
            } else {
              var mergedPath = _mergePaths(this.path, reference.path);
              if (this.hasScheme || this.hasAuthority || this.hasAbsolutePath) {
                targetPath = _removeDotSegments(mergedPath);
              } else {
                
                
                
                
                targetPath = _normalizeRelativePath(
                    mergedPath, this.hasScheme || this.hasAuthority);
              }
            }
          }
          if (reference.hasQuery) targetQuery = reference.query;
        }
      }
    }
    String? fragment = reference.hasFragment ? reference.fragment : null;
    return _Uri._internal(targetScheme, targetUserInfo, targetHost, targetPort,
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
    if (port == null) return "$scheme:
    return "$scheme:
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
    return (windows ?? _isWindows) ? _toWindowsFilePath(this) : _toFilePath();
  }

  String _toFilePath() {
    if (hasAuthority && host != "") {
      throw UnsupportedError(
          "Cannot extract a non-Windows file path from a file URI "
          "with an authority");
    }
    
    var pathSegments = this.pathSegments;
    _checkNonWindowsPathReservedCharacters(pathSegments, false);
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
        segments[0].codeUnitAt(1) == kColon) {
      _checkWindowsDriveLetter(segments[0].codeUnitAt(0), false);
      _checkWindowsPathReservedCharacters(segments, false, 1);
      hasDriveLetter = true;
    } else {
      _checkWindowsPathReservedCharacters(segments, false, 0);
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

  void _writeAuthority(StringSink ss) {
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

  
  
  
  
  
  
  UriData? get data => (scheme == "data") ? UriData.fromUri(this) : null;

  String toString() => _text;

  String _initializeText() {
    StringBuffer sb = StringBuffer();
    if (scheme.isNotEmpty) sb..write(scheme)..write(":");
    if (hasAuthority || (scheme == "file")) {
      
      
      sb.write("
      _writeAuthority(sb);
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

  static List<String> _createList() => <String>[];

  static Map<String, List<String>> _splitQueryStringAll(String query,
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
        key = _uriDecode(query, start, end, encoding, true);
        value = "";
      } else {
        key = _uriDecode(query, start, equalsIndex, encoding, true);
        value = _uriDecode(query, equalsIndex + 1, end, encoding, true);
      }
      result.putIfAbsent(key, _createList).add(value);
    }

    while (i < query.length) {
      int char = query.codeUnitAt(i);
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

  external static String _uriEncode(List<int> canonicalTable, String text,
      Encoding encoding, bool spaceToPlus);

  
  
  static int _hexCharPairToByte(String s, int pos) {
    int byte = 0;
    for (int i = 0; i < 2; i++) {
      var charCode = s.codeUnitAt(pos + i);
      if (0x30 <= charCode && charCode <= 0x39) {
        byte = byte * 16 + charCode - 0x30;
      } else {
        
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

  
  
  
  
  
  
  
  
  
  
  static String _uriDecode(
      String text, int start, int end, Encoding encoding, bool plusToSpace) {
    assert(0 <= start);
    assert(start <= end);
    assert(end <= text.length);
    
    bool simple = true;
    for (int i = start; i < end; i++) {
      var codeUnit = text.codeUnitAt(i);
      if (codeUnit > 127 ||
          codeUnit == kPercent ||
          (plusToSpace && codeUnit == kPlus)) {
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

  static bool _isAlphabeticCharacter(int codeUnit) {
    var lowerCase = codeUnit | 0x20;
    return (kLowerCaseA <= lowerCase && lowerCase <= kLowerCaseZ);
  }

  static bool _isUnreservedChar(int char) {
    return char < 127 &&
        ((_unreservedTable[char >> 4] & (1 << (char & 0x0f))) != 0);
  }

  
  
  

  
  static const _unreservedTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x6000, 
    
    0x03ff, 
    
    0xfffe, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  static const _unreserved2396Table = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x6782, 
    
    0x03ff, 
    
    0xfffe, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  static const _encodeFullTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0xffda, 
    
    0xafff, 
    
    0xffff, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  static const _schemeTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x6800, 
    
    0x03ff, 
    
    0xfffe, 
    
    0x07ff, 
    
    0xfffe, 
    
    0x07ff, 
  ];

  
  
  
  static const _genDelimitersTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x8008, 
    
    0x8400, 
    
    0x0001, 
    
    0x2800, 
    
    0x0000, 
    
    0x0000, 
  ];

  
  
  
  static const _userinfoTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x7fd2, 
    
    0x2fff, 
    
    0xfffe, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  
  
  static const _regNameTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x7ff2, 
    
    0x2bff, 
    
    0xfffe, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  
  
  static const _pathCharTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x7fd2, 
    
    0x2fff, 
    
    0xffff, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  
  static const _pathCharOrSlashTable = [
    
    
    0x0000, 
    0x0000, 
    
    0xffd2, 
    
    0x2fff, 
    
    0xffff, 

    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  
  
  static const _queryCharTable = [
    
    
    0x0000, 
    0x0000, 
    
    0xffd2, 
    
    0xafff, 
    
    0xffff, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];

  
  
  static const _zoneIDTable = <int>[
    
    
    0x0000, 
    0x0000, 
    
    0x6000, 
    
    0x03ff, 
    
    0xfffe, 
    
    0x87ff, 
    
    0xfffe, 
    
    0x47ff, 
  ];
}












class UriData {
  static const int _noScheme = -1;

  
  
  
  
  
  
  final String _text;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  final List<int> _separatorIndices;

  
  Uri? _uriCache;

  UriData._(this._text, this._separatorIndices, this._uriCache);

  
  static const Base64Codec _base64 = base64;

  
  
  
  
  factory UriData.fromString(String content,
      {String? mimeType,
      Encoding? encoding,
      Map<String, String>? parameters,
      bool base64 = false}) {
    StringBuffer buffer = StringBuffer();
    List<int> indices = [_noScheme];
    String? charsetName = parameters?["charset"];
    String? encodingName;
    if (encoding == null) {
      if (charsetName != null) {
        encoding = Encoding.getByName(charsetName);
      }
    } else if (charsetName == null) {
      
      encodingName = encoding.name;
    }
    encoding ??= ascii;
    _writeUri(mimeType, encodingName, parameters, buffer, indices);
    indices.add(buffer.length);
    if (base64) {
      buffer.write(';base64,');
      indices.add(buffer.length - 1);
      buffer.write(encoding.fuse(_base64).encode(content));
    } else {
      buffer.write(',');
      _uriEncodeBytes(_uricTable, encoding.encode(content), buffer);
    }
    return UriData._(buffer.toString(), indices, null);
  }

  
  
  
  
  factory UriData.fromBytes(List<int> bytes,
      {String mimeType = "application/octet-stream",
      Map<String, String>? parameters,
      bool percentEncoded = false}) {
    StringBuffer buffer = StringBuffer();
    List<int> indices = [_noScheme];
    _writeUri(mimeType, null, parameters, buffer, indices);
    indices.add(buffer.length);
    if (percentEncoded) {
      buffer.write(',');
      _uriEncodeBytes(_uricTable, bytes, buffer);
    } else {
      buffer.write(';base64,');
      indices.add(buffer.length - 1);
      _base64.encoder
          .startChunkedConversion(StringConversionSink.fromStringSink(buffer))
          .addSlice(bytes, 0, bytes.length, true);
    }

    return UriData._(buffer.toString(), indices, null);
  }

  
  
  
  
  
  factory UriData.fromUri(Uri uri) {
    if (uri.scheme != "data") {
      throw ArgumentError.value(uri, "uri", "Scheme must be 'data'");
    }
    if (uri.hasAuthority) {
      throw ArgumentError.value(uri, "uri", "Data uri must not have authority");
    }
    if (uri.hasFragment) {
      throw ArgumentError.value(
          uri, "uri", "Data uri must not have a fragment part");
    }
    if (!uri.hasQuery) {
      return _parse(uri.path, 0, uri);
    }
    
    return _parse(uri.toString(), 5, uri);
  }

  
  
  
  
  
  
  static void _writeUri(
      String? mimeType,
      String? charsetName,
      Map<String, String>? parameters,
      StringBuffer buffer,
      List<int>? indices) {
    if (mimeType == null || mimeType == "text/plain") {
      mimeType = "";
    }

    if (mimeType.isEmpty || identical(mimeType, "application/octet-stream")) {
      buffer.write(mimeType); 
    } else {
      int slashIndex = _validateMimeType(mimeType);
      if (slashIndex < 0) {
        throw ArgumentError.value(mimeType, "mimeType", "Invalid MIME type");
      }
      buffer.write(_Uri._uriEncode(
          _tokenCharTable, mimeType.substring(0, slashIndex), utf8, false));
      buffer.write("/");
      buffer.write(_Uri._uriEncode(
          _tokenCharTable, mimeType.substring(slashIndex + 1), utf8, false));
    }
    if (charsetName != null) {
      
      if (indices != null) indices..add(buffer.length)..add(buffer.length + 8);
      buffer.write(";charset=");
      buffer.write(_Uri._uriEncode(_tokenCharTable, charsetName, utf8, false));
    }
    parameters?.forEach((key, value) {
      if (key.isEmpty) {
        throw ArgumentError.value("", "Parameter names must not be empty");
      }
      if (value.isEmpty) {
        throw ArgumentError.value(
            "", "Parameter values must not be empty", 'parameters["$key"]');
      }
      indices?.add(buffer.length);
      buffer.write(';');
      
      buffer.write(_Uri._uriEncode(_tokenCharTable, key, utf8, false));
      indices?.add(buffer.length);
      buffer.write('=');
      buffer.write(_Uri._uriEncode(_tokenCharTable, value, utf8, false));
    });
  }

  
  
  
  
  
  
  
  static int _validateMimeType(String mimeType) {
    int slashIndex = -1;
    for (int i = 0; i < mimeType.length; i++) {
      var char = mimeType.codeUnitAt(i);
      if (char != kSlash) continue;
      if (slashIndex < 0) {
        slashIndex = i;
        continue;
      }
      return -1;
    }
    return slashIndex;
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  static UriData parse(String uri) {
    if (uri.length >= 5) {
      int dataDelta = _startsWithData(uri, 0);
      if (dataDelta == 0) {
        
        return _parse(uri, 5, null);
      }
      if (dataDelta == 0x20) {
        
        
        return _parse(uri.substring(5), 0, null);
      }
    }
    throw FormatException("Does not start with 'data:'", uri, 0);
  }

  
  
  
  
  Uri get uri {
    return _uriCache ??= _computeUri();
  }

  Uri _computeUri() {
    String path = _text;
    String? query;
    int colonIndex = _separatorIndices[0];
    int queryIndex = _text.indexOf('?', colonIndex + 1);
    int end = _text.length;
    if (queryIndex >= 0) {
      query = _Uri._normalizeOrSubstring(
          _text, queryIndex + 1, end, _Uri._queryCharTable);
      end = queryIndex;
    }
    path = _Uri._normalizeOrSubstring(
        _text, colonIndex + 1, end, _Uri._pathCharOrSlashTable);
    return _DataUri(this, path, query);
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  String get mimeType {
    int start = _separatorIndices[0] + 1;
    int end = _separatorIndices[1];
    if (start == end) return "text/plain";
    return _Uri._uriDecode(_text, start, end, utf8, false);
  }

  
  
  
  
  
  
  
  
  
  String get charset {
    int parameterStart = 1;
    int parameterEnd = _separatorIndices.length - 1; 
    if (isBase64) {
      
      parameterEnd -= 1;
    }
    for (int i = parameterStart; i < parameterEnd; i += 2) {
      var keyStart = _separatorIndices[i] + 1;
      var keyEnd = _separatorIndices[i + 1];
      if (keyEnd == keyStart + 7 && _text.startsWith("charset", keyStart)) {
        return _Uri._uriDecode(
            _text, keyEnd + 1, _separatorIndices[i + 2], utf8, false);
      }
    }
    return "US-ASCII";
  }

  
  bool get isBase64 => _separatorIndices.length.isOdd;

  
  
  
  String get contentText => _text.substring(_separatorIndices.last + 1);

  
  
  
  
  
  
  
  Uint8List contentAsBytes() {
    String text = _text;
    int start = _separatorIndices.last + 1;
    if (isBase64) {
      return base64.decoder.convert(text, start);
    }

    
    
    const int percent = 0x25;
    int length = text.length - start;
    for (int i = start; i < text.length; i++) {
      var codeUnit = text.codeUnitAt(i);
      if (codeUnit == percent) {
        i += 2;
        length -= 2;
      }
    }
    
    Uint8List result = Uint8List(length);
    if (length == text.length) {
      result.setRange(0, length, text.codeUnits, start);
      return result;
    }
    int index = 0;
    for (int i = start; i < text.length; i++) {
      var codeUnit = text.codeUnitAt(i);
      if (codeUnit != percent) {
        result[index++] = codeUnit;
      } else {
        if (i + 2 < text.length) {
          int byte = parseHexByte(text, i + 1);
          if (byte >= 0) {
            result[index++] = byte;
            i += 2;
            continue;
          }
        }
        throw FormatException("Invalid percent escape", text, i);
      }
    }
    assert(index == result.length);
    return result;
  }

  
  
  
  
  
  
  
  
  
  
  
  
  String contentAsString({Encoding? encoding}) {
    if (encoding == null) {
      var charset = this.charset; 
      encoding = Encoding.getByName(charset);
      if (encoding == null) {
        throw UnsupportedError("Unknown charset: $charset");
      }
    }
    String text = _text;
    int start = _separatorIndices.last + 1;
    if (isBase64) {
      var converter = base64.decoder.fuse(encoding.decoder);
      return converter.convert(text.substring(start));
    }
    return _Uri._uriDecode(text, start, text.length, encoding, false);
  }

  
  
  
  
  
  
  
  
  
  
  
  
  Map<String, String> get parameters {
    var result = <String, String>{};
    for (int i = 3; i < _separatorIndices.length; i += 2) {
      var start = _separatorIndices[i - 2] + 1;
      var equals = _separatorIndices[i - 1];
      var end = _separatorIndices[i];
      String key = _Uri._uriDecode(_text, start, equals, utf8, false);
      String value = _Uri._uriDecode(_text, equals + 1, end, utf8, false);
      result[key] = value;
    }
    return result;
  }

  static UriData _parse(String text, int start, Uri? sourceUri) {
    assert(start == 0 || start == 5);
    assert((start == 5) == text.startsWith("data:"));

    
    const int comma = 0x2c;
    const int slash = 0x2f;
    const int semicolon = 0x3b;
    const int equals = 0x3d;
    List<int> indices = [start - 1];
    int slashIndex = -1;
    var char;
    int i = start;
    for (; i < text.length; i++) {
      char = text.codeUnitAt(i);
      if (char == comma || char == semicolon) break;
      if (char == slash) {
        if (slashIndex < 0) {
          slashIndex = i;
          continue;
        }
        throw FormatException("Invalid MIME type", text, i);
      }
    }
    if (slashIndex < 0 && i > start) {
      
      
      throw FormatException("Invalid MIME type", text, i);
    }
    while (char != comma) {
      
      indices.add(i);
      i++;
      int equalsIndex = -1;
      for (; i < text.length; i++) {
        char = text.codeUnitAt(i);
        if (char == equals) {
          if (equalsIndex < 0) equalsIndex = i;
        } else if (char == semicolon || char == comma) {
          break;
        }
      }
      if (equalsIndex >= 0) {
        indices.add(equalsIndex);
      } else {
        
        var lastSeparator = indices.last;
        if (char != comma ||
            i != lastSeparator + 7 /* "base64,".length */ ||
            !text.startsWith("base64", lastSeparator + 1)) {
          throw FormatException("Expecting '='", text, i);
        }
        break;
      }
    }
    indices.add(i);
    bool isBase64 = indices.length.isOdd;
    if (isBase64) {
      text = base64.normalize(text, i + 1, text.length);
    } else {
      
      
      
      var data = _Uri._normalize(text, i + 1, text.length, _uricTable,
          escapeDelimiters: true);
      if (data != null) {
        text = text.replaceRange(i + 1, text.length, data);
      }
    }
    return UriData._(text, indices, sourceUri);
  }

  
  
  
  static void _uriEncodeBytes(
      List<int> canonicalTable, List<int> bytes, StringSink buffer) {
    
    
    int byteOr = 0;
    for (int i = 0; i < bytes.length; i++) {
      int byte = bytes[i];
      byteOr |= byte;
      if (byte < 128 &&
          ((canonicalTable[byte >> 4] & (1 << (byte & 0x0f))) != 0)) {
        buffer.writeCharCode(byte);
      } else {
        buffer.writeCharCode(kPercent);
        buffer.writeCharCode(kHexDigits.codeUnitAt(byte >> 4));
        buffer.writeCharCode(kHexDigits.codeUnitAt(byte & 0x0f));
      }
    }
    if ((byteOr & ~0xFF) != 0) {
      for (int i = 0; i < bytes.length; i++) {
        var byte = bytes[i];
        if (byte < 0 || byte > 255) {
          throw ArgumentError.value(byte, "non-byte value");
        }
      }
    }
  }

  String toString() =>
      (_separatorIndices[0] == _noScheme) ? "data:$_text" : _text;

  
  
  
  
  
  
  
  static const _tokenCharTable = [
    
    
    0x0000, 
    0x0000, 
    
    0x6cd2, 
    
    0x03ff, 
    
    0xfffe, 
    
    0xc7ff, 
    
    0xffff, 
    
    0x7fff, 
  ];

  
  
  
  
  
  
  
  
  static const _uricTable = _Uri._queryCharTable;
}








const int _schemeEndIndex = 1;


const int _hostStartIndex = 2;


const int _portStartIndex = 3;


const int _pathStartIndex = 4;


const int _queryStartIndex = 5;


const int _fragmentStartIndex = 6;


const int _notSimpleIndex = 7;


const int _uriStart = 00;



const int _nonSimpleEndStates = 14;


const int _schemeStart = 20;
final List<Uint8List> _scannerTables = _createTables();
List<Uint8List> _createTables() {
  const int stateCount = 22;
  const int schemeOrPath = 01;
  const int authOrPath = 02;
  const int authOrPathSlash = 03;
  const int uinfoOrHost0 = 04;
  const int uinfoOrHost = 05;
  const int uinfoOrPort0 = 06;
  const int uinfoOrPort = 07;
  const int ipv6Host = 08;
  const int relPathSeg = 09;
  const int pathSeg = 10;
  const int path = 11;
  const int query = 12;
  const int fragment = 13;
  const int schemeOrPathDot = 14;
  const int schemeOrPathDot2 = 15;
  const int relPathSegDot = 16;
  const int relPathSegDot2 = 17;
  const int pathSegDot = 18;
  const int pathSegDot2 = 19;

  
  const int scheme0 = _schemeStart;
  const int scheme = 21;

  
  
  const int schemeEnd = _schemeEndIndex << 5;
  const int hostStart = _hostStartIndex << 5;
  const int portStart = _portStartIndex << 5;
  const int pathStart = _pathStartIndex << 5;
  const int queryStart = _queryStartIndex << 5;
  const int fragmentStart = _fragmentStartIndex << 5;
  const int notSimple = _notSimpleIndex << 5;

  
  const unreserved =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~";

  
  const subDelims = r"!$&'()*+,;=";
  
  
  const pchar = "$unreserved$subDelims";

  var tables = List<Uint8List>.generate(stateCount, (_) => Uint8List(96));

  
  
  Uint8List build(state, defaultTransition) =>
      tables[state]..fillRange(0, 96, defaultTransition);

  
  
  
  
  void setChars(Uint8List target, String chars, int transition) {
    for (int i = 0; i < chars.length; i++) {
      var char = chars.codeUnitAt(i);
      target[char ^ 0x60] = transition;
    }
  }

  
  
  
  
  
  
  void setRange(Uint8List target, String range, int transition) {
    for (int i = range.codeUnitAt(0), n = range.codeUnitAt(1); i <= n; i++) {
      target[i ^ 0x60] = transition;
    }
  }

  
  var b;

  
  b = build(_uriStart, schemeOrPath | notSimple);
  setChars(b, pchar, schemeOrPath);
  setChars(b, ".", schemeOrPathDot);
  setChars(b, ":", authOrPath | schemeEnd); 
  setChars(b, "/", authOrPathSlash);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(schemeOrPathDot, schemeOrPath | notSimple);
  setChars(b, pchar, schemeOrPath);
  setChars(b, ".", schemeOrPathDot2);
  setChars(b, ':', authOrPath | schemeEnd);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(schemeOrPathDot2, schemeOrPath | notSimple);
  setChars(b, pchar, schemeOrPath);
  setChars(b, "%", schemeOrPath | notSimple);
  setChars(b, ':', authOrPath | schemeEnd);
  setChars(b, "/", relPathSeg);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(schemeOrPath, schemeOrPath | notSimple);
  setChars(b, pchar, schemeOrPath);
  setChars(b, ':', authOrPath | schemeEnd);
  setChars(b, "/", pathSeg);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(authOrPath, path | notSimple);
  setChars(b, pchar, path | pathStart);
  setChars(b, "/", authOrPathSlash | pathStart);
  setChars(b, ".", pathSegDot | pathStart);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(authOrPathSlash, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, "/", uinfoOrHost0 | hostStart);
  setChars(b, ".", pathSegDot);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(uinfoOrHost0, uinfoOrHost | notSimple);
  setChars(b, pchar, uinfoOrHost);
  setRange(b, "AZ", uinfoOrHost | notSimple);
  setChars(b, ":", uinfoOrPort0 | portStart);
  setChars(b, "@", uinfoOrHost0 | hostStart);
  setChars(b, "[", ipv6Host | notSimple);
  setChars(b, "/", pathSeg | pathStart);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(uinfoOrHost, uinfoOrHost | notSimple);
  setChars(b, pchar, uinfoOrHost);
  setRange(b, "AZ", uinfoOrHost | notSimple);
  setChars(b, ":", uinfoOrPort0 | portStart);
  setChars(b, "@", uinfoOrHost0 | hostStart);
  setChars(b, "/", pathSeg | pathStart);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(uinfoOrPort0, uinfoOrPort | notSimple);
  setRange(b, "19", uinfoOrPort);
  setChars(b, "@", uinfoOrHost0 | hostStart);
  setChars(b, "/", pathSeg | pathStart);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(uinfoOrPort, uinfoOrPort | notSimple);
  setRange(b, "09", uinfoOrPort);
  setChars(b, "@", uinfoOrHost0 | hostStart);
  setChars(b, "/", pathSeg | pathStart);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(ipv6Host, ipv6Host);
  setChars(b, "]", uinfoOrHost);

  b = build(relPathSeg, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, ".", relPathSegDot);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(relPathSegDot, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, ".", relPathSegDot2);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(relPathSegDot2, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, "/", relPathSeg);
  setChars(b, "?", query | queryStart); 
  setChars(b, "#", fragment | fragmentStart); 

  b = build(pathSeg, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, ".", pathSegDot);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(pathSegDot, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, ".", pathSegDot2);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(pathSegDot2, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, "/", pathSeg | notSimple);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(path, path | notSimple);
  setChars(b, pchar, path);
  setChars(b, "/", pathSeg);
  setChars(b, "?", query | queryStart);
  setChars(b, "#", fragment | fragmentStart);

  b = build(query, query | notSimple);
  setChars(b, pchar, query);
  setChars(b, "?", query);
  setChars(b, "#", fragment | fragmentStart);

  b = build(fragment, fragment | notSimple);
  setChars(b, pchar, fragment);
  setChars(b, "?", fragment);

  
  
  b = build(scheme0, scheme | notSimple);
  setRange(b, "az", scheme);

  b = build(scheme, scheme | notSimple);
  setRange(b, "az", scheme);
  setRange(b, "09", scheme);
  setChars(b, "+-.", scheme);

  return tables;
}










int _scan(String uri, int start, int end, int state, List<int> indices) {
  var tables = _scannerTables;
  assert(end <= uri.length);
  for (int i = start; i < end; i++) {
    var table = tables[state];
    
    int char = uri.codeUnitAt(i) ^ 0x60;
    
    if (char > 0x5f) char = 0x1f;
    int transition = table[char];
    state = transition & 0x1f;
    indices[transition >> 5] = i;
  }
  return state;
}

class _SimpleUri implements Uri {
  final String _uri;
  final int _schemeEnd;
  final int _hostStart;
  final int _portStart;
  final int _pathStart;
  final int _queryStart;
  final int _fragmentStart;

  
  
  
  String? _schemeCache;
  int? _hashCodeCache;

  _SimpleUri(
      this._uri,
      this._schemeEnd,
      this._hostStart,
      this._portStart,
      this._pathStart,
      this._queryStart,
      this._fragmentStart,
      this._schemeCache);

  bool get hasScheme => _schemeEnd > 0;
  bool get hasAuthority => _hostStart > 0;
  bool get hasUserInfo => _hostStart > _schemeEnd + 4;
  bool get hasPort => _hostStart > 0 && _portStart + 1 < _pathStart;
  bool get hasQuery => _queryStart < _fragmentStart;
  bool get hasFragment => _fragmentStart < _uri.length;

  bool get _isFile => _schemeEnd == 4 && _uri.startsWith("file");
  bool get _isHttp => _schemeEnd == 4 && _uri.startsWith("http");
  bool get _isHttps => _schemeEnd == 5 && _uri.startsWith("https");
  bool get _isPackage => _schemeEnd == 7 && _uri.startsWith("package");

  
  bool _isScheme(String scheme) =>
      _schemeEnd == scheme.length && _uri.startsWith(scheme);

  bool get hasAbsolutePath => _uri.startsWith("/", _pathStart);
  bool get hasEmptyPath => _pathStart == _queryStart;

  bool get isAbsolute => hasScheme && !hasFragment;

  bool isScheme(String scheme) {
    if (scheme == null || scheme.isEmpty) return _schemeEnd < 0;
    if (scheme.length != _schemeEnd) return false;
    return _Uri.compareScheme(scheme, _uri);
  }

  String get scheme {
    return _schemeCache ??= _computeScheme();
  }

  String _computeScheme() {
    if (_schemeEnd <= 0) return "";
    if (_isHttp) return "http";
    if (_isHttps) return "https";
    if (_isFile) return "file";
    if (_isPackage) return "package";
    return _uri.substring(0, _schemeEnd);
  }

  String get authority =>
      _hostStart > 0 ? _uri.substring(_schemeEnd + 3, _pathStart) : "";
  String get userInfo => (_hostStart > _schemeEnd + 3)
      ? _uri.substring(_schemeEnd + 3, _hostStart - 1)
      : "";
  String get host =>
      _hostStart > 0 ? _uri.substring(_hostStart, _portStart) : "";
  int get port {
    if (hasPort) return int.parse(_uri.substring(_portStart + 1, _pathStart));
    if (_isHttp) return 80;
    if (_isHttps) return 443;
    return 0;
  }

  String get path => _uri.substring(_pathStart, _queryStart);
  String get query => (_queryStart < _fragmentStart)
      ? _uri.substring(_queryStart + 1, _fragmentStart)
      : "";
  String get fragment =>
      (_fragmentStart < _uri.length) ? _uri.substring(_fragmentStart + 1) : "";

  String get origin {
    
    bool isHttp = _isHttp;
    if (_schemeEnd < 0) {
      throw StateError("Cannot use origin without a scheme: $this");
    }
    if (!isHttp && !_isHttps) {
      throw StateError(
          "Origin is only applicable to schemes http and https: $this");
    }
    if (_hostStart == _portStart) {
      throw StateError(
          "A $scheme: URI should have a non-empty host name: $this");
    }
    if (_hostStart == _schemeEnd + 3) {
      return _uri.substring(0, _pathStart);
    }
    
    return _uri.substring(0, _schemeEnd + 3) +
        _uri.substring(_hostStart, _pathStart);
  }

  List<String> get pathSegments {
    int start = _pathStart;
    int end = _queryStart;
    if (_uri.startsWith("/", start)) start++;
    if (start == end) return const <String>[];
    List<String> parts = [];
    for (int i = start; i < end; i++) {
      var char = _uri.codeUnitAt(i);
      if (char == kSlash) {
        parts.add(_uri.substring(start, i));
        start = i + 1;
      }
    }
    parts.add(_uri.substring(start, end));
    return List<String>.unmodifiable(parts);
  }

  Map<String, String> get queryParameters {
    if (!hasQuery) return const <String, String>{};
    return UnmodifiableMapView<String, String>(Uri.splitQueryString(query));
  }

  Map<String, List<String>> get queryParametersAll {
    if (!hasQuery) return const <String, List<String>>{};
    Map<String, List<String>> queryParameterLists =
        _Uri._splitQueryStringAll(query);
    queryParameterLists.updateAll(_toUnmodifiableStringList);
    return Map<String, List<String>>.unmodifiable(queryParameterLists);
  }

  bool _isPort(String port) {
    int portDigitStart = _portStart + 1;
    return portDigitStart + port.length == _pathStart &&
        _uri.startsWith(port, portDigitStart);
  }

  Uri normalizePath() => this;

  Uri removeFragment() {
    if (!hasFragment) return this;
    return _SimpleUri(_uri.substring(0, _fragmentStart), _schemeEnd, _hostStart,
        _portStart, _pathStart, _queryStart, _fragmentStart, _schemeCache);
  }

  Uri replace(
      {String? scheme,
      String? userInfo,
      String? host,
      int? port,
      String? path,
      Iterable<String>? pathSegments,
      String? query,
      Map<String, dynamic /*String|Iterable<String>*/ >? queryParameters,
      String? fragment}) {
    bool schemeChanged = false;
    if (scheme != null) {
      scheme = _Uri.makeScheme(scheme, 0, scheme.length);
      schemeChanged = !_isScheme(scheme);
    } else {
      scheme = this.scheme;
    }
    bool isFile = (scheme == "file");
    if (userInfo != null) {
      userInfo = _Uri.makeUserInfo(userInfo, 0, userInfo.length);
    } else if (_hostStart > 0) {
      userInfo = _uri.substring(_schemeEnd + 3, _hostStart);
    } else {
      userInfo = "";
    }
    if (port != null) {
      port = _Uri.makePort(port, scheme);
    } else {
      port = this.hasPort ? this.port : null;
      if (schemeChanged) {
        
        port = _Uri.makePort(port, scheme);
      }
    }
    if (host != null) {
      host = _Uri.makeHost(host, 0, host.length, false);
    } else if (_hostStart > 0) {
      host = _uri.substring(_hostStart, _portStart);
    } else if (userInfo.isNotEmpty || port != null || isFile) {
      host = "";
    }

    bool hasAuthority = host != null;
    if (path != null || pathSegments != null) {
      path = _Uri.makePath(path, 0, _stringOrNullLength(path), pathSegments,
          scheme, hasAuthority);
    } else {
      path = _uri.substring(_pathStart, _queryStart);
      if ((isFile || (hasAuthority && !path.isEmpty)) &&
          !path.startsWith('/')) {
        path = "/" + path;
      }
    }

    if (query != null || queryParameters != null) {
      query = _Uri.makeQuery(
          query, 0, _stringOrNullLength(query), queryParameters);
    } else if (_queryStart < _fragmentStart) {
      query = _uri.substring(_queryStart + 1, _fragmentStart);
    }

    if (fragment != null) {
      fragment = _Uri.makeFragment(fragment, 0, fragment.length);
    } else if (_fragmentStart < _uri.length) {
      fragment = _uri.substring(_fragmentStart + 1);
    }

    return _Uri._internal(scheme, userInfo, host, port, path, query, fragment);
  }

  Uri resolve(String reference) {
    return resolveUri(Uri.parse(reference));
  }

  Uri resolveUri(Uri reference) {
    if (reference is _SimpleUri) {
      return _simpleMerge(this, reference);
    }
    return _toNonSimple().resolveUri(reference);
  }

  
  
  
  
  
  
  
  
  
  
  static int _packageNameEnd(_SimpleUri uri) {
    if (uri._isPackage && !uri.hasAuthority) {
      
      
      return _skipPackageNameChars(uri._uri, uri._pathStart, uri._queryStart);
    }
    return -1;
  }

  
  
  
  
  
  Uri _simpleMerge(_SimpleUri base, _SimpleUri ref) {
    if (ref.hasScheme) return ref;
    if (ref.hasAuthority) {
      if (!base.hasScheme) return ref;
      bool isSimple = true;
      if (base._isFile) {
        isSimple = !ref.hasEmptyPath;
      } else if (base._isHttp) {
        isSimple = !ref._isPort("80");
      } else if (base._isHttps) {
        isSimple = !ref._isPort("443");
      }
      if (isSimple) {
        var delta = base._schemeEnd + 1;
        var newUri = base._uri.substring(0, base._schemeEnd + 1) +
            ref._uri.substring(ref._schemeEnd + 1);
        return _SimpleUri(
            newUri,
            base._schemeEnd,
            ref._hostStart + delta,
            ref._portStart + delta,
            ref._pathStart + delta,
            ref._queryStart + delta,
            ref._fragmentStart + delta,
            base._schemeCache);
      } else {
        
        return _toNonSimple().resolveUri(ref);
      }
    }
    if (ref.hasEmptyPath) {
      if (ref.hasQuery) {
        int delta = base._queryStart - ref._queryStart;
        var newUri = base._uri.substring(0, base._queryStart) +
            ref._uri.substring(ref._queryStart);
        return _SimpleUri(
            newUri,
            base._schemeEnd,
            base._hostStart,
            base._portStart,
            base._pathStart,
            ref._queryStart + delta,
            ref._fragmentStart + delta,
            base._schemeCache);
      }
      if (ref.hasFragment) {
        int delta = base._fragmentStart - ref._fragmentStart;
        var newUri = base._uri.substring(0, base._fragmentStart) +
            ref._uri.substring(ref._fragmentStart);
        return _SimpleUri(
            newUri,
            base._schemeEnd,
            base._hostStart,
            base._portStart,
            base._pathStart,
            base._queryStart,
            ref._fragmentStart + delta,
            base._schemeCache);
      }
      return base.removeFragment();
    }
    if (ref.hasAbsolutePath) {
      int basePathStart = base._pathStart;
      int packageNameEnd = _packageNameEnd(this);
      if (packageNameEnd > 0) basePathStart = packageNameEnd;
      var delta = basePathStart - ref._pathStart;
      var newUri = base._uri.substring(0, basePathStart) +
          ref._uri.substring(ref._pathStart);
      return _SimpleUri(
          newUri,
          base._schemeEnd,
          base._hostStart,
          base._portStart,
          base._pathStart,
          ref._queryStart + delta,
          ref._fragmentStart + delta,
          base._schemeCache);
    }
    if (base.hasEmptyPath && base.hasAuthority) {
      
      
      int refStart = ref._pathStart;
      while (ref._uri.startsWith("../", refStart)) {
        refStart += 3;
      }
      var delta = base._pathStart - refStart + 1;
      var newUri = "${base._uri.substring(0, base._pathStart)}/"
          "${ref._uri.substring(refStart)}";
      return _SimpleUri(
          newUri,
          base._schemeEnd,
          base._hostStart,
          base._portStart,
          base._pathStart,
          ref._queryStart + delta,
          ref._fragmentStart + delta,
          base._schemeCache);
    }
    

    
    
    
    
    
    
    
    

    String baseUri = base._uri;
    String refUri = ref._uri;
    int baseStart = base._pathStart;
    int baseEnd = base._queryStart;
    int packageNameEnd = _packageNameEnd(this);
    if (packageNameEnd >= 0) {
      baseStart = packageNameEnd; 
    } else {
      while (baseUri.startsWith("../", baseStart)) baseStart += 3;
    }
    int refStart = ref._pathStart;
    int refEnd = ref._queryStart;

    
    
    
    int backCount = 0;

    
    while (refStart + 3 <= refEnd && refUri.startsWith("../", refStart)) {
      refStart += 3;
      backCount += 1;
    }

    
    
    
    
    String insert = "";

    
    
    
    
    while (baseEnd > baseStart) {
      baseEnd--;
      int char = baseUri.codeUnitAt(baseEnd);
      if (char == kSlash) {
        insert = "/";
        if (backCount == 0) break;
        backCount--;
      }
    }

    if (baseEnd == baseStart && !base.hasScheme && !base.hasAbsolutePath) {
      
      
      
      
      

      
      
      insert = "";
      
      
      refStart -= backCount * 3;
    }

    var delta = baseEnd - refStart + insert.length;
    var newUri = "${base._uri.substring(0, baseEnd)}$insert"
        "${ref._uri.substring(refStart)}";

    return _SimpleUri(
        newUri,
        base._schemeEnd,
        base._hostStart,
        base._portStart,
        base._pathStart,
        ref._queryStart + delta,
        ref._fragmentStart + delta,
        base._schemeCache);
  }

  String toFilePath({bool? windows}) {
    if (_schemeEnd >= 0 && !_isFile) {
      throw UnsupportedError("Cannot extract a file path from a $scheme URI");
    }
    if (_queryStart < _uri.length) {
      if (_queryStart < _fragmentStart) {
        throw UnsupportedError(
            "Cannot extract a file path from a URI with a query component");
      }
      throw UnsupportedError(
          "Cannot extract a file path from a URI with a fragment component");
    }
    return (windows ?? _Uri._isWindows)
        ? _Uri._toWindowsFilePath(this)
        : _toFilePath();
  }

  String _toFilePath() {
    if (_hostStart < _portStart) {
      
      throw UnsupportedError(
          "Cannot extract a non-Windows file path from a file URI "
          "with an authority");
    }
    return this.path;
  }

  UriData? get data {
    assert(scheme != "data");
    return null;
  }

  int get hashCode => _hashCodeCache ??= _uri.hashCode;

  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is Uri && _uri == other.toString();
  }

  Uri _toNonSimple() {
    return _Uri._internal(
        this.scheme,
        this.userInfo,
        this.hasAuthority ? this.host : null,
        this.hasPort ? this.port : null,
        this.path,
        this.hasQuery ? this.query : null,
        this.hasFragment ? this.fragment : null);
  }

  String toString() => _uri;
}


class _DataUri extends _Uri {
  final UriData _data;

  _DataUri(this._data, String path, String? query)
      : super._internal("data", "", null, null, path, query, null);

  UriData? get data => _data;
}









int _startsWithData(String text, int start) {
  
  int delta = (text.codeUnitAt(start + 4) ^ kColon) * 3;
  delta |= text.codeUnitAt(start) ^ 0x64 /*d*/;
  delta |= text.codeUnitAt(start + 1) ^ 0x61 /*a*/;
  delta |= text.codeUnitAt(start + 2) ^ 0x74 /*t*/;
  delta |= text.codeUnitAt(start + 3) ^ 0x61 /*a*/;
  return delta;
}


int _stringOrNullLength(String? s) => (s == null) ? 0 : s.length;

List<String> _toUnmodifiableStringList(String key, List<String> list) =>
    List<String>.unmodifiable(list);
int _skipPackageNameChars(String source, int start, int end) {
  
  
  var dots = 0;
  for (var i = start; i < end; i++) {
    var char = source.codeUnitAt(i);
    if (char == kSlash) return (dots != 0) ? i : -1;
    if (char == kPercent || char == kColon) return -1;
    dots |= char ^ kDot;
  }
  return -1;
}
