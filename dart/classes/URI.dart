class _Uri implements Uri {
  // We represent the missing scheme as an empty string.
  // A valid scheme cannot be empty.
  final String scheme;

  /// The user-info part of the authority.
  ///
  /// Does not distinguish between an empty user-info and an absent one.
  /// The value is always non-null.
  /// Is considered absent if [_host] is `null`.
  final String _userInfo;

  /// The host name of the URI.
  ///
  /// Set to `null` if there is no authority in the URI.
  /// The host name is the only mandatory part of an authority, so we use
  /// it to mark whether an authority part was present or not.
  final String? _host;

  /// The port number part of the authority.
  ///
  /// The port. Set to null if there is no port. Normalized to null if
  /// the port is the default port for the scheme.
  int? _port;

  /// The path of the URI.
  ///
  /// Always non-null.
  final String path;

  /// The query content, or null if there is no query.
  final String? _query;

  // The fragment content, or null if there is no fragment.
  final String? _fragment;

  /// Cache of the full normalized text representation of the URI.
  late final String _text = this._initializeText();

  /// Cache of the list of path segments.
  late final List<String> pathSegments = _computePathSegments(this.path);

  /// Lazily computed and cached hashCode of [_text].
  late final int hashCode = this._text.hashCode;

  /// Cache the computed return value of [queryParameters].
  late final Map<String, String> queryParameters =
      UnmodifiableMapView<String, String>(Uri.splitQueryString(this.query));

  /// Cache the computed return value of [queryParametersAll].
  late final Map<String, List<String>> queryParametersAll =
      _computeQueryParametersAll(this.query);

  /// Internal non-verifying constructor. Only call with validated arguments.
  ///
  /// The components must be properly normalized.
  ///
  /// Use `null` for [_host] if there is no authority. In that case, always
  /// pass `null` for [_port] and an empty string for [_userInfo] as well.
  ///
  /// Use `null` for [_port], [_query] and [_fragment] if there is
  /// component of that type, and empty string for [_userInfo].
  ///
  /// The [path] and [scheme] are never empty.
  _Uri._internal(this.scheme, this._userInfo, this._host, this._port, this.path,
      this._query, this._fragment);

  /// Create a [_Uri] from parts of [uri].
  ///
  /// The parameters specify the start/end of particular components of the URI.
  /// The [scheme] may contain a string representing a normalized scheme
  /// component if one has already been discovered.
  factory _Uri.notSimple(
      String uri,
      int start,
      int end,
      int schemeEnd,
      int hostStart,
      int portStart,
      int pathStart,
      int queryStart,
      int fragmentStart,
      String? scheme) {
    if (scheme == null) {
      scheme = "";
      if (schemeEnd > start) {
        scheme = _makeScheme(uri, start, schemeEnd);
      } else if (schemeEnd == start) {
        _fail(uri, start, "Invalid empty scheme");
      }
    }
    String userInfo = "";
    String? host;
    int? port;
    if (hostStart > start) {
      int userInfoStart = schemeEnd + 3;
      if (userInfoStart < hostStart) {
        userInfo = _makeUserInfo(uri, userInfoStart, hostStart - 1);
      }
      host = _makeHost(uri, hostStart, portStart, false);
      if (portStart + 1 < pathStart) {
        int portNumber =
            int.tryParse(uri.substring(portStart + 1, pathStart)) ??
                (throw FormatException("Invalid port", uri, portStart + 1));
        port = _makePort(portNumber, scheme);
      }
    }
    String path =
        _makePath(uri, pathStart, queryStart, null, scheme, host != null);
    String? query;
    if (queryStart < fragmentStart) {
      query = _makeQuery(uri, queryStart + 1, fragmentStart, null);
    }
    String? fragment;
    if (fragmentStart < end) {
      fragment = _makeFragment(uri, fragmentStart + 1, end);
    }
    return _Uri._internal(scheme, userInfo, host, port, path, query, fragment);
  }

  /// Implementation of [Uri.Uri].
  factory _Uri(
      {String? scheme,
      String? userInfo,
      String? host,
      int? port,
      String? path,
      Iterable<String>? pathSegments,
      String? query,
      Map<String, dynamic /*String|Iterable<String>*/ >? queryParameters,
      String? fragment}) {
    if (scheme == null) {
      scheme = "";
    } else {
      scheme = _makeScheme(scheme, 0, scheme.length);
    }
    userInfo = _makeUserInfo(userInfo, 0, _stringOrNullLength(userInfo));
    if (userInfo == null) {
      // TODO(dart-lang/language#440): Remove when promotion works.
      throw "unreachable";
    }
    host = _makeHost(host, 0, _stringOrNullLength(host), false);
    // Special case this constructor for backwards compatibility.
    if (query == "") query = null;
    query = _makeQuery(query, 0, _stringOrNullLength(query), queryParameters);
    fragment = _makeFragment(fragment, 0, _stringOrNullLength(fragment));
    port = _makePort(port, scheme);
    bool isFile = (scheme == "file");
    if (host == null && (userInfo.isNotEmpty || port != null || isFile)) {
      host = "";
    }
    bool hasAuthority = (host != null);
    path = _makePath(
        path, 0, _stringOrNullLength(path), pathSegments, scheme, hasAuthority);
    if (path == null) {
      // TODO(dart-lang/language#440): Remove when promotion works.
      throw "unreachable";
    }
    if (scheme.isEmpty && host == null && !path.startsWith('/')) {
      bool allowScheme = scheme.isNotEmpty || host != null;
      path = _normalizeRelativePath(path, allowScheme);
    } else {
      path = _removeDotSegments(path);
    }
    if (host == null && path.startsWith("//")) {
      host = "";
    }
    return _Uri._internal(scheme, userInfo, host, port, path, query, fragment);
  }

  /// Implementation of [Uri.http].
  factory _Uri.http(String authority, String unencodedPath,
      [Map<String, dynamic>? queryParameters]) {
    return _makeHttpUri("http", authority, unencodedPath, queryParameters);
  }

  /// Implementation of [Uri.https].
  factory _Uri.https(String authority, String unencodedPath,
      [Map<String, dynamic>? queryParameters]) {
    return _makeHttpUri("https", authority, unencodedPath, queryParameters);
  }

  String get authority {
    if (!hasAuthority) return "";
    var sb = StringBuffer();
    _writeAuthority(sb);
    return sb.toString();
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
    return _port ?? _defaultPort(scheme);
  }

  /// The default port for the scheme of this Uri.
  static int _defaultPort(String scheme) {
    if (scheme == "http") return 80;
    if (scheme == "https") return 443;
    return 0;
  }

  String get query => _query ?? "";

  String get fragment => _fragment ?? "";

  bool isScheme(String scheme) {
    String thisScheme = this.scheme;
    if (scheme == null) return thisScheme.isEmpty;
    if (scheme.length != thisScheme.length) return false;
    return _compareScheme(scheme, thisScheme);
  }

  /// Compares scheme characters in [scheme] and at the start of [uri].
  ///
  /// Returns `true` if [scheme] represents the same scheme as the start of
  /// [uri]. That means having the same characters, but possibly different case
  /// for letters.
  ///
  /// This function doesn't check that the characters are valid URI scheme
  /// characters. The [uri] is assumed to be valid, so if [scheme] matches
  /// it, it has to be valid too.
  ///
  /// The length should be tested before calling this function,
  /// so the scheme part of [uri] is known to have the same length as [scheme].
  static bool _compareScheme(String scheme, String uri) {
    for (int i = 0; i < scheme.length; i++) {
      int schemeChar = scheme.codeUnitAt(i);
      int uriChar = uri.codeUnitAt(i);
      int delta = schemeChar ^ uriChar;
      if (delta != 0) {
        if (delta == 0x20) {
          // Might be a case difference.
          int lowerChar = uriChar | delta;
          if (0x61 /*a*/ <= lowerChar && lowerChar <= 0x7a /*z*/) {
            continue;
          }
        }
        return false;
      }
    }
    return true;
  }

  /// Report a parse failure.
  static Never _fail(String uri, int index, String message) {
    throw FormatException(message, uri, index);
  }

  static _Uri _makeHttpUri(String scheme, String? authority,
      String unencodedPath, Map<String, dynamic>? queryParameters) {
    var userInfo = "";
    String? host;
    int? port;

    if (authority != null && authority.isNotEmpty) {
      var hostStart = 0;
      // Split off the user info.
      for (int i = 0; i < authority.length; i++) {
        const int atSign = 0x40;
        if (authority.codeUnitAt(i) == atSign) {
          userInfo = authority.substring(0, i);
          hostStart = i + 1;
          break;
        }
      }
      var hostEnd = hostStart;
      if (hostStart < authority.length &&
          authority.codeUnitAt(hostStart) == _LEFT_BRACKET) {
        // IPv6 host.
        int escapeForZoneID = -1;
        for (; hostEnd < authority.length; hostEnd++) {
          int char = authority.codeUnitAt(hostEnd);
          if (char == _PERCENT && escapeForZoneID < 0) {
            escapeForZoneID = hostEnd;
            if (authority.startsWith("25", hostEnd + 1)) {
              hostEnd += 2; // Might as well skip the already checked escape.
            }
          } else if (char == _RIGHT_BRACKET) {
            break;
          }
        }
        if (hostEnd == authority.length) {
          throw FormatException(
              "Invalid IPv6 host entry.", authority, hostStart);
        }
        Uri.parseIPv6Address(authority, hostStart + 1,
            (escapeForZoneID < 0) ? hostEnd : escapeForZoneID);
        hostEnd++; // Skip the closing bracket.
        if (hostEnd != authority.length &&
            authority.codeUnitAt(hostEnd) != _COLON) {
          throw FormatException("Invalid end of authority", authority, hostEnd);
        }
      }
      // Split host and port.
      for (; hostEnd < authority.length; hostEnd++) {
        if (authority.codeUnitAt(hostEnd) == _COLON) {
          var portString = authority.substring(hostEnd + 1);
          // We allow the empty port - falling back to initial value.
          if (portString.isNotEmpty) port = int.parse(portString);
          break;
        }
      }
      host = authority.substring(hostStart, hostEnd);
    }
    return _Uri(
        scheme: scheme,
        userInfo: userInfo,
        host: host,
        port: port,
        pathSegments: unencodedPath.split("/"),
        queryParameters: queryParameters);
  }

  /// Implementation of [Uri.file].
  factory _Uri.file(String path, {bool? windows}) {
    return (windows ?? _Uri._isWindows)
        ? _makeWindowsFileUrl(path, false)
        : _makeFileUri(path, false);
  }

  /// Implementation of [Uri.directory].
  factory _Uri.directory(String path, {bool? windows}) {
    return (windows ?? _Uri._isWindows)
        ? _makeWindowsFileUrl(path, true)
        : _makeFileUri(path, true);
  }

  /// Used internally in path-related constructors.
  external static bool get _isWindows;

  static void _checkNonWindowsPathReservedCharacters(
      List<String> segments, bool argumentError) {
    for (var segment in segments) {
      if (segment.contains("/")) {
        if (argumentError) {
          throw ArgumentError("Illegal path character $segment");
        } else {
          throw UnsupportedError("Illegal path character $segment");
        }
      }
    }
  }

  static void _checkWindowsPathReservedCharacters(
      List<String> segments, bool argumentError,
      [int firstSegment = 0]) {
    for (var segment in segments.skip(firstSegment)) {
      if (segment.contains(RegExp(r'["*/:<>?\\|]'))) {
        if (argumentError) {
          throw ArgumentError("Illegal character in path");
        } else {
          throw UnsupportedError("Illegal character in path: $segment");
        }
      }
    }
  }

  static void _checkWindowsDriveLetter(int charCode, bool argumentError) {
    if ((_UPPER_CASE_A <= charCode && charCode <= _UPPER_CASE_Z) ||
        (_LOWER_CASE_A <= charCode && charCode <= _LOWER_CASE_Z)) {
      return;
    }
    if (argumentError) {
      throw ArgumentError(
          "Illegal drive letter " + String.fromCharCode(charCode));
    } else {
      throw UnsupportedError(
          "Illegal drive letter " + String.fromCharCode(charCode));
    }
  }

  static Uri _makeFileUri(String path, bool slashTerminated) {
    const String sep = "/";
    var segments = path.split(sep);
    if (slashTerminated && segments.isNotEmpty && segments.last.isNotEmpty) {
      segments.add(""); // Extra separator at end.
    }
    if (path.startsWith(sep)) {
      // Absolute file:// URI.
      return Uri(scheme: "file", pathSegments: segments);
    } else {
      // Relative URI.
      return Uri(pathSegments: segments);
    }
  }

  static _makeWindowsFileUrl(String path, bool slashTerminated) {
    if (path.startsWith(r"\\?\")) {
      if (path.startsWith(r"UNC\", 4)) {
        path = path.replaceRange(0, 7, r'\');
      } else {
        path = path.substring(4);
        if (path.length < 3 ||
            path.codeUnitAt(1) != _COLON ||
            path.codeUnitAt(2) != _BACKSLASH) {
          throw ArgumentError(
              r"Windows paths with \\?\ prefix must be absolute");
        }
      }
    } else {
      path = path.replaceAll("/", r'\');
    }
    const String sep = r'\';
    if (path.length > 1 && path.codeUnitAt(1) == _COLON) {
      _checkWindowsDriveLetter(path.codeUnitAt(0), true);
      if (path.length == 2 || path.codeUnitAt(2) != _BACKSLASH) {
        throw ArgumentError("Windows paths with drive letter must be absolute");
      }
      // Absolute file://C:/ URI.
      var pathSegments = path.split(sep);
      if (slashTerminated && pathSegments.last.isNotEmpty) {
        pathSegments.add(""); // Extra separator at end.
      }
      _checkWindowsPathReservedCharacters(pathSegments, true, 1);
      return Uri(scheme: "file", pathSegments: pathSegments);
    }

    if (path.startsWith(sep)) {
      if (path.startsWith(sep, 1)) {
        // Absolute file:// URI with host.
        int pathStart = path.indexOf(r'\', 2);
        String hostPart =
            (pathStart < 0) ? path.substring(2) : path.substring(2, pathStart);
        String pathPart = (pathStart < 0) ? "" : path.substring(pathStart + 1);
        var pathSegments = pathPart.split(sep);
        _checkWindowsPathReservedCharacters(pathSegments, true);
        if (slashTerminated && pathSegments.last.isNotEmpty) {
          pathSegments.add(""); // Extra separator at end.
        }
        return Uri(scheme: "file", host: hostPart, pathSegments: pathSegments);
      } else {
        // Absolute file:// URI.
        var pathSegments = path.split(sep);
        if (slashTerminated && pathSegments.last.isNotEmpty) {
          pathSegments.add(""); // Extra separator at end.
        }
        _checkWindowsPathReservedCharacters(pathSegments, true);
        return Uri(scheme: "file", pathSegments: pathSegments);
      }
    } else {
      // Relative URI.
      var pathSegments = path.split(sep);
      _checkWindowsPathReservedCharacters(pathSegments, true);
      if (slashTerminated &&
          pathSegments.isNotEmpty &&
          pathSegments.last.isNotEmpty) {
        pathSegments.add(""); // Extra separator at end.
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
    // Set to true if the scheme has (potentially) changed.
    // In that case, the default port may also have changed and we need
    // to check even the existing port.
    bool schemeChanged = false;
    if (scheme != null) {
      scheme = _makeScheme(scheme, 0, scheme.length);
      schemeChanged = (scheme != this.scheme);
    } else {
      scheme = this.scheme;
    }

    bool isFile = (scheme == "file");
    if (userInfo != null) {
      userInfo = _makeUserInfo(userInfo, 0, userInfo.length);
    } else {
      userInfo = this._userInfo;
    }

    if (port != null) {
      port = _makePort(port, scheme);
    } else {
      port = this._port;
      if (schemeChanged) {
        // The default port might have changed.
        port = _makePort(port, scheme);
      }
    }
    if (host != null) {
      host = _makeHost(host, 0, host.length, false);
    } else if (this.hasAuthority) {
      host = this._host;
    } else if (userInfo.isNotEmpty || port != null || isFile) {
      host = "";
    }

    bool hasAuthority = host != null;
    if (path != null || pathSegments != null) {
      path = _makePath(path, 0, _stringOrNullLength(path), pathSegments, scheme,
          hasAuthority);
    } else {
      var currentPath = this.path;
      if ((isFile || (hasAuthority && !currentPath.isEmpty)) &&
          !currentPath.startsWith('/')) {
        currentPath = "/" + currentPath;
      }
      path = currentPath;
    }

    if (query != null || queryParameters != null) {
      query = _makeQuery(query, 0, _stringOrNullLength(query), queryParameters);
    } else {
      query = this._query;
    }

    if (fragment != null) {
      fragment = _makeFragment(fragment, 0, fragment.length);
    } else {
      fragment = this._fragment;
    }

    return _Uri._internal(scheme, userInfo, host, port, path, query, fragment);
  }

  Uri removeFragment() {
    if (!this.hasFragment) return this;
    return _Uri._internal(scheme, _userInfo, _host, _port, path, _query, null);
  }

  static List<String> _computePathSegments(String pathToSplit) {
    if (pathToSplit.isNotEmpty && pathToSplit.codeUnitAt(0) == _SLASH) {
      pathToSplit = pathToSplit.substring(1);
    }
    return (pathToSplit.isEmpty)
        ? const <String>[]
        : List<String>.unmodifiable(
            pathToSplit.split("/").map(Uri.decodeComponent));
  }

  static Map<String, List<String>> _computeQueryParametersAll(String? query) {
    if (query == null || query.isEmpty) return const <String, List<String>>{};
    Map<String, List<String>> queryParameterLists = _splitQueryStringAll(query);
    queryParameterLists.updateAll(_toUnmodifiableStringList);
    return Map<String, List<String>>.unmodifiable(queryParameterLists);
  }

  Uri normalizePath() {
    String path = _normalizePath(this.path, scheme, hasAuthority);
    if (identical(path, this.path)) return this;
    return this.replace(path: path);
  }

  static int? _makePort(int? port, String scheme) {
    // Perform scheme specific normalization.
    if (port != null && port == _defaultPort(scheme)) return null;
    return port;
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
  static String? _makeHost(String? host, int start, int end, bool strictIPv6) {
    // TODO(lrn): Should we normalize IPv6 addresses according to RFC 5952?
    if (host == null) return null;
    if (start == end) return "";
    // Host is an IPv6 address if it starts with '[' or contains a colon.
    if (host.codeUnitAt(start) == _LEFT_BRACKET) {
      if (host.codeUnitAt(end - 1) != _RIGHT_BRACKET) {
        _fail(host, start, 'Missing end `]` to match `[` in host');
      }
      String zoneID = "";
      int index = _checkZoneID(host, start + 1, end - 1);
      if (index < end - 1) {
        int zoneIDstart =
            (host.startsWith("25", index + 1)) ? index + 3 : index + 1;
        zoneID = _normalizeZoneID(host, zoneIDstart, end - 1, "%25");
      }
      Uri.parseIPv6Address(host, start + 1, index);
      // RFC 5952 requires hex digits to be lower case.
      return host.substring(start, index).toLowerCase() + zoneID + ']';
    }
    if (!strictIPv6) {
      // TODO(lrn): skip if too short to be a valid IPv6 address?
      for (int i = start; i < end; i++) {
        if (host.codeUnitAt(i) == _COLON) {
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

  /// RFC 6874 check for ZoneID
  /// Return the index of first appeared `%`.
  static int _checkZoneID(String host, int start, int end) {
    int index = host.indexOf('%', start);
    index = (index >= start && index < end) ? index : end;
    return index;
  }

  static bool _isZoneIDChar(int char) {
    return char < 127 && (_zoneIDTable[char >> 4] & (1 << (char & 0xf))) != 0;
  }

  /// Validates and does case- and percent-encoding normalization.
  ///
  /// The same as [_normalizeOrSubstring]
  /// except this function does not convert characters to lower case.
  /// The [host] must be an RFC6874 "ZoneID".
  /// ZoneID = 1*(unreserved / pct-encoded)
  static String _normalizeZoneID(String host, int start, int end,
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
      int char = host.codeUnitAt(index);
      if (char == _PERCENT) {
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
          _fail(host, index, "ZoneID should not contain % anymore");
        }
        buffer.write(replacement);
        index += sourceLength;
        sectionStart = index;
        isNormalized = true;
      } else if (_isZoneIDChar(char)) {
        if (isNormalized && _UPPER_CASE_A <= char && _UPPER_CASE_Z >= char) {
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
          int tail = host.codeUnitAt(index + 1);
          if ((tail & 0xFC00) == 0xDC00) {
            char = 0x10000 | ((char & 0x3ff) << 10) | (tail & 0x3ff);
            sourceLength = 2;
          }
        }
        String slice = host.substring(sectionStart, index);
        (buffer ??= StringBuffer())
          ..write(slice)
          ..write(_escapeChar(char));
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
      int char = host.codeUnitAt(index);
      if (char == _PERCENT) {
        // The _regNameTable contains "%", so we check that first.
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
        if (isNormalized && _UPPER_CASE_A <= char && _UPPER_CASE_Z >= char) {
          // Put initial slice in buffer and continue in non-normalized mode
          buffer ??= StringBuffer();
          if (sectionStart < index) {
            buffer.write(host.substring(sectionStart, index));
            sectionStart = index;
          }
          isNormalized = false;
        }
        index++;
      } else if (_isGeneralDelimiter(char)) {
        _fail(host, index, "Invalid character");
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
        (buffer ??= StringBuffer())
          ..write(slice)
          ..write(_escapeChar(char));
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
  static String _makeScheme(String scheme, int start, int end) {
    if (start == end) return "";
    final int firstCodeUnit = scheme.codeUnitAt(start);
    if (!_isAlphabeticCharacter(firstCodeUnit)) {
      _fail(scheme, start, "Scheme not starting with alphabetic character");
    }
    bool containsUpperCase = false;
    for (int i = start; i < end; i++) {
      final int codeUnit = scheme.codeUnitAt(i);
      if (!_isSchemeCharacter(codeUnit)) {
        _fail(scheme, i, "Illegal scheme character");
      }
      if (_UPPER_CASE_A <= codeUnit && codeUnit <= _UPPER_CASE_Z) {
        containsUpperCase = true;
      }
    }
    scheme = scheme.substring(start, end);
    if (containsUpperCase) scheme = scheme.toLowerCase();
    return _canonicalizeScheme(scheme);
  }

  /// Canonicalize a few often-used scheme strings.
  ///
  /// This improves memory usage and makes comparison faster.
  static String _canonicalizeScheme(String scheme) {
    if (scheme == "http") return "http";
    if (scheme == "file") return "file";
    if (scheme == "https") return "https";
    if (scheme == "package") return "package";
    return scheme;
  }

  static String _makeUserInfo(String? userInfo, int start, int end) {
    if (userInfo == null) return "";
    return _normalizeOrSubstring(userInfo, start, end, _userinfoTable);
  }

  static String _makePath(String? path, int start, int end,
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
    result = _normalizePath(result, scheme, hasAuthority);
    return result;
  }

  /// Performs path normalization (remove dot segments) on a path.
  ///
  /// If the URI has neither scheme nor authority, it's considered a
  /// "pure path" and normalization won't remove leading ".." segments.
  /// Otherwise it follows the RFC 3986 "remove dot segments" algorithm.
  static String _normalizePath(String path, String scheme, bool hasAuthority) {
    if (scheme.isEmpty && !hasAuthority && !path.startsWith('/')) {
      return _normalizeRelativePath(path, scheme.isNotEmpty || hasAuthority);
    }
    return _removeDotSegments(path);
  }

  static String? _makeQuery(String? query, int start, int end,
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

  static String? _makeFragment(String? fragment, int start, int end) {
    if (fragment == null) return null;
    return _normalizeOrSubstring(fragment, start, end, _queryCharTable,
        escapeDelimiters: true);
  }

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
  static String? _normalizeEscape(String source, int index, bool lowerCase) {
    assert(source.codeUnitAt(index) == _PERCENT);
    if (index + 2 >= source.length) {
      return "%"; // Marks the escape as invalid.
    }
    int firstDigit = source.codeUnitAt(index + 1);
    int secondDigit = source.codeUnitAt(index + 2);
    int firstDigitValue = hexDigitValue(firstDigit);
    int secondDigitValue = hexDigitValue(secondDigit);
    if (firstDigitValue < 0 || secondDigitValue < 0) {
      return "%"; // Marks the escape as invalid.
    }
    int value = firstDigitValue * 16 + secondDigitValue;
    if (_isUnreservedChar(value)) {
      if (lowerCase && _UPPER_CASE_A <= value && _UPPER_CASE_Z >= value) {
        value |= 0x20;
      }
      return String.fromCharCode(value);
    }
    if (firstDigit >= _LOWER_CASE_A || secondDigit >= _LOWER_CASE_A) {
      // Either digit is lower case.
      return source.substring(index, index + 3).toUpperCase();
    }
    // Escape is retained, and is already non-lower case, so return null to
    // represent "no replacement necessary".
    return null;
  }

  static String _escapeChar(int char) {
    assert(char <= 0x10ffff); // It's a valid unicode code point.
    List<int> codeUnits;
    if (char < 0x80) {
      // ASCII, a single percent encoded sequence.
      codeUnits = Uint8List(3);
      codeUnits[0] = _PERCENT;
      codeUnits[1] = _hexDigits.codeUnitAt(char >> 4);
      codeUnits[2] = _hexDigits.codeUnitAt(char & 0xf);
    } else {
      // Do UTF-8 encoding of character, then percent encode bytes.
      int flag = 0xc0; // The high-bit markers on the first byte of UTF-8.
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
        codeUnits[index] = _PERCENT;
        codeUnits[index + 1] = _hexDigits.codeUnitAt(byte >> 4);
        codeUnits[index + 2] = _hexDigits.codeUnitAt(byte & 0xf);
        index += 3;
        flag = 0x80; // Following bytes have only high bit set.
      }
    }
    return String.fromCharCodes(codeUnits);
  }

  /// Normalizes using [_normalize] or returns substring of original.
  ///
  /// If [_normalize] returns `null` (original content is already normalized),
  /// this methods returns the substring if [component] from [start] to [end].
  static String _normalizeOrSubstring(
      String component, int start, int end, List<int> charTable,
      {bool escapeDelimiters = false}) {
    return _normalize(component, start, end, charTable,
            escapeDelimiters: escapeDelimiters) ??
        component.substring(start, end);
  }

  /// Runs through component checking that each character is valid and
  /// normalizes percent escapes.
  ///
  /// Uses [charTable] to check if a non-`%` character is allowed.
  /// Each `%` character must be followed by two hex digits.
  /// If the hex-digits are lowercase letters, they are converted to
  /// uppercase.
  ///
  /// Returns `null` if the original content was already normalized.
  static String? _normalize(
      String component, int start, int end, List<int> charTable,
      {bool escapeDelimiters = false}) {
    StringBuffer? buffer;
    int sectionStart = start;
    int index = start;
    // Loop while characters are valid and escapes correct and upper-case.
    while (index < end) {
      int char = component.codeUnitAt(index);
      if (char < 127 && (charTable[char >> 4] & (1 << (char & 0x0f))) != 0) {
        index++;
      } else {
        String? replacement;
        int sourceLength;
        if (char == _PERCENT) {
          replacement = _normalizeEscape(component, index, false);
          // Returns null if we should keep the existing escape.
          if (replacement == null) {
            index += 3;
            continue;
          }
          // Returns "%" if we should escape the existing percent.
          if ("%" == replacement) {
            replacement = "%25";
            sourceLength = 1;
          } else {
            sourceLength = 3;
          }
        } else if (!escapeDelimiters && _isGeneralDelimiter(char)) {
          _fail(component, index, "Invalid character");
          throw "unreachable"; // TODO(lrn): Remove when Never-returning functions are recognized as throwing.
        } else {
          sourceLength = 1;
          if ((char & 0xFC00) == 0xD800) {
            // Possible lead surrogate.
            if (index + 1 < end) {
              int tail = component.codeUnitAt(index + 1);
              if ((tail & 0xFC00) == 0xDC00) {
                // Tail surrogate.
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
    return ch <= _RIGHT_BRACKET &&
        ((_genDelimitersTable[ch >> 4] & (1 << (ch & 0x0f))) != 0);
  }

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
      // _removeDotSegments handle it.
      if ((delta == 2 || delta == 3) &&
          base.codeUnitAt(newEnd + 1) == _DOT &&
          (delta == 2 || base.codeUnitAt(newEnd + 2) == _DOT)) {
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
  static bool _mayContainDotSegments(String path) {
    if (path.startsWith('.')) return true;
    int index = path.indexOf("/.");
    return index != -1;
  }

  /// Removes '.' and '..' segments from a path.
  ///
  /// Follows the RFC 2986 "remove dot segments" algorithm.
  /// This algorithm is only used on paths of URIs with a scheme,
  /// and it treats the path as if it is absolute (leading '..' are removed).
  static String _removeDotSegments(String path) {
    if (!_mayContainDotSegments(path)) return path;
    assert(path.isNotEmpty); // An empty path would not have dot segments.
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
  static String _normalizeRelativePath(String path, bool allowScheme) {
    assert(!path.startsWith('/')); // Only get called for relative paths.
    if (!_mayContainDotSegments(path)) {
      if (!allowScheme) path = _escapeScheme(path);
      return path;
    }
    assert(path.isNotEmpty); // An empty path would not have dot segments.
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

  /// If [path] starts with a valid scheme, escape the percent.
  static String _escapeScheme(String path) {
    if (path.length >= 2 && _isAlphabeticCharacter(path.codeUnitAt(0))) {
      for (int i = 1; i < path.length; i++) {
        int char = path.codeUnitAt(i);
        if (char == _COLON) {
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
            _makePort(reference.hasPort ? reference.port : null, targetScheme);
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
            // Merging a path into a package URI.
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
            // This is the RFC 3986 behavior for merging.
            if (this.hasEmptyPath) {
              if (!this.hasAuthority) {
                if (!this.hasScheme) {
                  // Keep the path relative if no scheme or authority.
                  targetPath = reference.path;
                } else {
                  // Remove leading dot-segments if the path is put
                  // beneath a scheme.
                  targetPath = _removeDotSegments(reference.path);
                }
              } else {
                // RFC algorithm for base with authority and empty path.
                targetPath = _removeDotSegments("/" + reference.path);
              }
            } else {
              var mergedPath = _mergePaths(this.path, reference.path);
              if (this.hasScheme || this.hasAuthority || this.hasAbsolutePath) {
                targetPath = _removeDotSegments(mergedPath);
              } else {
                // Non-RFC 3986 behavior.
                // If both base and reference are relative paths,
                // allow the merged path to start with "..".
                // The RFC only specifies the case where the base has a scheme.
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
    return (windows ?? _isWindows) ? _toWindowsFilePath(this) : _toFilePath();
  }

  String _toFilePath() {
    if (hasAuthority && host != "") {
      throw UnsupportedError(
          "Cannot extract a non-Windows file path from a file URI "
          "with an authority");
    }
    // Use path segments to have any escapes unescaped.
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
        segments[0].codeUnitAt(1) == _COLON) {
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
    if (scheme.isNotEmpty)
      sb
        ..write(scheme)
        ..write(":");
    if (hasAuthority || (scheme == "file")) {
      // File URIS always have the authority, even if it is empty.
      // The empty URI means "localhost".
      sb.write("//");
      _writeAuthority(sb);
    }
    sb.write(path);
    if (_query != null)
      sb
        ..write("?")
        ..write(_query);
    if (_fragment != null)
      sb
        ..write("#")
        ..write(_fragment);
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
      if (char == _EQUALS) {
        if (equalsIndex < 0) equalsIndex = i;
      } else if (char == _AMPERSAND) {
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

  /// Convert a byte (2 character hex sequence) in string [s] starting
  /// at position [pos] to its ordinal value
  static int _hexCharPairToByte(String s, int pos) {
    int byte = 0;
    for (int i = 0; i < 2; i++) {
      var charCode = s.codeUnitAt(pos + i);
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
  static String _uriDecode(
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

  static bool _isAlphabeticCharacter(int codeUnit) {
    var lowerCase = codeUnit | 0x20;
    return (_LOWER_CASE_A <= lowerCase && lowerCase <= _LOWER_CASE_Z);
  }

  static bool _isUnreservedChar(int char) {
    return char < 127 &&
        ((_unreservedTable[char >> 4] & (1 << (char & 0x0f))) != 0);
  }

  // Tables of char-codes organized as a bit vector of 128 bits where
  // each bit indicate whether a character code on the 0-127 needs to
  // be escaped or not.

  // The unreserved characters of RFC 3986.
  static const _unreservedTable = <int>[
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
  static const _unreserved2396Table = <int>[
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
  static const _encodeFullTable = <int>[
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
  static const _schemeTable = <int>[
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
  static const _genDelimitersTable = <int>[
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
  static const _userinfoTable = <int>[
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
  ];

  // Characters allowed in the reg-name as of RFC 3986.
  // RFC 3986 Appendix A
  // reg-name = *( unreserved / pct-encoded / sub-delims )
  static const _regNameTable = <int>[
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
  static const _pathCharTable = <int>[
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
  static const _pathCharOrSlashTable = [
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
  ];

  // Characters allowed in the query as of RFC 3986.
  // RFC 3986 section 3.4.
  // query = *( pchar / "/" / "?" )
  static const _queryCharTable = [
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
  ];

  // Characters allowed in the ZoneID as of RFC 6874.
  // ZoneID = 1*( unreserved / pct-encoded )
  static const _zoneIDTable = <int>[
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
  ];
}
