export class HttpClient {
  bool _closing = false;
  bool _closingForcefully = false;
  final Map<String, _ConnectionTarget> _connectionTargets =
      HashMap<String, _ConnectionTarget>();
  final List<_Credentials> _credentials = [];
  final List<_ProxyCredentials> _proxyCredentials = [];
  final SecurityContext? _context;
  Future<bool> Function(Uri, String scheme, String? realm)? _authenticate;
  Future<bool> Function(String host, int port, String scheme, String? realm)?
      _authenticateProxy;
  String Function(Uri)? _findProxy = HttpClient.findProxyFromEnvironment;
  Duration _idleTimeout = const Duration(seconds: 15);
  BadCertificateCallback? _badCertificateCallback;

  Duration get idleTimeout => _idleTimeout;

  Duration? connectionTimeout;

  int? maxConnectionsPerHost;

  bool autoUncompress = true;

  String? userAgent = _getHttpVersion();

  _HttpClient(this._context);

  void set idleTimeout(Duration timeout) {
    _idleTimeout = timeout;
    for (var c in _connectionTargets.values) {
      for (var idle in c._idle) {
        // Reset timer. This is fine, as it's not happening often.
        idle.stopTimer();
        idle.startTimer();
      }
    }
  }

  set badCertificateCallback(
      bool Function(X509Certificate cert, String host, int port)? callback) {
    _badCertificateCallback = callback;
  }

  Future<HttpClientRequest> open(
      String method, String host, int port, String path) {
    const int hashMark = 0x23;
    const int questionMark = 0x3f;
    int fragmentStart = path.length;
    int queryStart = path.length;
    for (int i = path.length - 1; i >= 0; i--) {
      var char = path.codeUnitAt(i);
      if (char == hashMark) {
        fragmentStart = i;
        queryStart = i;
      } else if (char == questionMark) {
        queryStart = i;
      }
    }
    String? query;
    if (queryStart < fragmentStart) {
      query = path.substring(queryStart + 1, fragmentStart);
      path = path.substring(0, queryStart);
    }
    Uri uri =
        Uri(scheme: "http", host: host, port: port, path: path, query: query);
    return _openUrl(method, uri);
  }

  Future<HttpClientRequest> openUrl(String method, Uri url) =>
      _openUrl(method, url);

  Future<HttpClientRequest> get(String host, int port, String path) =>
      open("get", host, port, path);

  Future<HttpClientRequest> getUrl(Uri url) => _openUrl("get", url);

  Future<HttpClientRequest> post(String host, int port, String path) =>
      open("post", host, port, path);

  Future<HttpClientRequest> postUrl(Uri url) => _openUrl("post", url);

  Future<HttpClientRequest> put(String host, int port, String path) =>
      open("put", host, port, path);

  Future<HttpClientRequest> putUrl(Uri url) => _openUrl("put", url);

  Future<HttpClientRequest> delete(String host, int port, String path) =>
      open("delete", host, port, path);

  Future<HttpClientRequest> deleteUrl(Uri url) => _openUrl("delete", url);

  Future<HttpClientRequest> head(String host, int port, String path) =>
      open("head", host, port, path);

  Future<HttpClientRequest> headUrl(Uri url) => _openUrl("head", url);

  Future<HttpClientRequest> patch(String host, int port, String path) =>
      open("patch", host, port, path);

  Future<HttpClientRequest> patchUrl(Uri url) => _openUrl("patch", url);

  void close({bool force = false}) {
    _closing = true;
    _closingForcefully = force;
    _closeConnections(_closingForcefully);
    assert(!_connectionTargets.values.any((s) => s.hasIdle));
    assert(
        !force || !_connectionTargets.values.any((s) => s._active.isNotEmpty));
  }

  set authenticate(
      Future<bool> Function(Uri url, String scheme, String? realm)? f) {
    _authenticate = f;
  }

  void addCredentials(Uri url, String realm, HttpClientCredentials cr) {
    _credentials
        .add(_SiteCredentials(url, realm, cr as _HttpClientCredentials));
  }

  set authenticateProxy(
      Future<bool> Function(
              String host, int port, String scheme, String? realm)?
          f) {
    _authenticateProxy = f;
  }

  void addProxyCredentials(
      String host, int port, String realm, HttpClientCredentials cr) {
    _proxyCredentials.add(
        _ProxyCredentials(host, port, realm, cr as _HttpClientCredentials));
  }

  set findProxy(String Function(Uri uri)? f) => _findProxy = f;

  static void _startRequestTimelineEvent(
      TimelineTask? timeline, String method, Uri uri) {
    timeline?.start('HTTP CLIENT ${method.toUpperCase()}', arguments: {
      'method': method.toUpperCase(),
      'uri': uri.toString(),
    });
  }

  bool _isLoopback(String host) {
    if (host.isEmpty) return false;
    if ("localhost" == host) return true;
    try {
      return InternetAddress(host).isLoopback;
    } on ArgumentError {
      return false;
    }
  }

  Future<_HttpClientRequest> _openUrl(String method, Uri uri) {
    if (_closing) {
      throw StateError("Client is closed");
    }

    // Ignore any fragments on the request URI.
    uri = uri.removeFragment();

    if (method == null) {
      throw ArgumentError(method);
    }
    if (method != "CONNECT") {
      if (uri.host.isEmpty) {
        throw ArgumentError("No host specified in URI $uri");
      } else if (uri.scheme != "http" && uri.scheme != "https") {
        throw ArgumentError("Unsupported scheme '${uri.scheme}' in URI $uri");
      }
    }

    _httpConnectionHook(uri);

    bool isSecure = uri.isScheme("https");

    int port = uri.port;
    if (port == 0) {
      port =
          isSecure ? HttpClient.defaultHttpsPort : HttpClient.defaultHttpPort;
    }
    // Check to see if a proxy server should be used for this connection.
    var proxyConf = const _ProxyConfiguration.direct();
    var findProxy = _findProxy;
    if (findProxy != null) {
      // TODO(sgjesse): Keep a map of these as normally only a few
      // configuration strings will be used.
      try {
        proxyConf = _ProxyConfiguration(findProxy(uri));
      } catch (error, stackTrace) {
        return Future.error(error, stackTrace);
      }
    }
    _HttpProfileData? profileData;
    if (HttpClient.enableTimelineLogging) {
      profileData = HttpProfiler.startRequest(method, uri);
    }
    return _getConnection(uri.host, port, proxyConf, isSecure, profileData)
        .then((_ConnectionInfo info) {
      _HttpClientRequest send(_ConnectionInfo info) {
        profileData?.requestEvent('Connection established');
        return info.connection
            .send(uri, port, method.toUpperCase(), info.proxy, profileData);
      }

      // If the connection was closed before the request was sent, create
      // and use another connection.
      if (info.connection.closed) {
        return _getConnection(uri.host, port, proxyConf, isSecure, profileData)
            .then(send);
      }
      return send(info);
    }, onError: (error) {
      profileData?.finishRequestWithError(error.toString());
      throw error;
    });
  }

  static bool _isSubdomain(Uri subdomain, Uri domain) {
    return (subdomain.scheme == domain.scheme &&
        subdomain.port == domain.port &&
        (subdomain.host == domain.host ||
            subdomain.host.endsWith("." + domain.host)));
  }

  static bool _shouldCopyHeaderOnRedirect(
      String headerKey, Uri originalUrl, Uri redirectUri) {
    if (_isSubdomain(redirectUri, originalUrl)) {
      return true;
    }

    const nonRedirectHeaders = [
      "authorization",
      "www-authenticate",
      "cookie",
      "cookie2"
    ];
    return !nonRedirectHeaders.contains(headerKey.toLowerCase());
  }

  Future<_HttpClientRequest> _openUrlFromRequest(
      String method, Uri uri, _HttpClientRequest previous,
      {required bool isRedirect}) {
    // If the new URI is relative (to either '/' or some sub-path),
    // construct a full URI from the previous one.
    Uri resolved = previous.uri.resolveUri(uri);
    return _openUrl(method, resolved).then((_HttpClientRequest request) {
      request
        // Only follow redirects if initial request did.
        ..followRedirects = previous.followRedirects
        // Allow same number of redirects.
        ..maxRedirects = previous.maxRedirects;
      // Copy headers.
      for (var header in previous.headers._headers.keys) {
        if (request.headers[header] == null &&
            (!isRedirect ||
                _shouldCopyHeaderOnRedirect(header, resolved, previous.uri))) {
          request.headers.set(header, previous.headers[header]!);
        }
      }
      return request
        ..headers.chunkedTransferEncoding = false
        ..contentLength = 0;
    });
  }

  // Return a live connection to the idle pool.
  void _returnConnection(_HttpClientConnection connection) {
    _connectionTargets[connection.key]!.returnConnection(connection);
    _connectionsChanged();
  }

  // Remove a closed connection from the active set.
  void _connectionClosed(_HttpClientConnection connection) {
    connection.stopTimer();
    var connectionTarget = _connectionTargets[connection.key];
    if (connectionTarget != null) {
      connectionTarget.connectionClosed(connection);
      if (connectionTarget.isEmpty) {
        _connectionTargets.remove(connection.key);
      }
      _connectionsChanged();
    }
  }

  // Remove a closed connection and not issue _closeConnections(). If the close
  // is signaled from user by calling close(), _closeConnections() was called
  // and prevent further calls.
  void _connectionClosedNoFurtherClosing(_HttpClientConnection connection) {
    connection.stopTimer();
    var connectionTarget = _connectionTargets[connection.key];
    if (connectionTarget != null) {
      connectionTarget.connectionClosed(connection);
      if (connectionTarget.isEmpty) {
        _connectionTargets.remove(connection.key);
      }
    }
  }

  void _connectionsChanged() {
    if (_closing) {
      _closeConnections(_closingForcefully);
    }
  }

  void _closeConnections(bool force) {
    for (var connectionTarget in _connectionTargets.values.toList()) {
      connectionTarget.close(force);
    }
  }

  _ConnectionTarget _getConnectionTarget(String host, int port, bool isSecure) {
    String key = _HttpClientConnection.makeKey(isSecure, host, port);
    return _connectionTargets.putIfAbsent(key, () {
      return _ConnectionTarget(key, host, port, isSecure, _context);
    });
  }

  // Get a new _HttpClientConnection, from the matching _ConnectionTarget.
  Future<_ConnectionInfo> _getConnection(
      String uriHost,
      int uriPort,
      _ProxyConfiguration proxyConf,
      bool isSecure,
      _HttpProfileData? profileData) {
    Iterator<_Proxy> proxies = proxyConf.proxies.iterator;

    Future<_ConnectionInfo> connect(error, stackTrace) {
      if (!proxies.moveNext()) return Future.error(error, stackTrace);
      _Proxy proxy = proxies.current;
      String host = proxy.isDirect ? uriHost : proxy.host!;
      int port = proxy.isDirect ? uriPort : proxy.port!;
      return _getConnectionTarget(host, port, isSecure)
          .connect(uriHost, uriPort, proxy, this, profileData)
          // On error, continue with next proxy.
          .catchError(connect);
    }

    return connect(HttpException("No proxies given"), StackTrace.current);
  }

  _SiteCredentials? _findCredentials(Uri url, [_AuthenticationScheme? scheme]) {
    // Look for credentials.
    _SiteCredentials? cr =
        _credentials.fold(null, (_SiteCredentials? prev, value) {
      var siteCredentials = value as _SiteCredentials;
      if (siteCredentials.applies(url, scheme)) {
        if (prev == null) return value;
        return siteCredentials.uri.path.length > prev.uri.path.length
            ? siteCredentials
            : prev;
      } else {
        return prev;
      }
    });
    return cr;
  }

  _ProxyCredentials? _findProxyCredentials(_Proxy proxy,
      [_AuthenticationScheme? scheme]) {
    // Look for credentials.
    for (var current in _proxyCredentials) {
      if (current.applies(proxy, scheme)) {
        return current;
      }
    }
    return null;
  }

  void _removeCredentials(_Credentials cr) {
    int index = _credentials.indexOf(cr);
    if (index != -1) {
      _credentials.removeAt(index);
    }
  }

  void _removeProxyCredentials(_Credentials cr) {
    _proxyCredentials.remove(cr);
  }

  static String _findProxyFromEnvironment(
      Uri url, Map<String, String>? environment) {
    String? checkNoProxy(String? option) {
      if (option == null) return null;
      Iterator<String> names = option.split(",").map((s) => s.trim()).iterator;
      while (names.moveNext()) {
        var name = names.current;
        if ((name.startsWith("[") &&
                name.endsWith("]") &&
                "[${url.host}]" == name) ||
            (name.isNotEmpty && url.host.endsWith(name))) {
          return "DIRECT";
        }
      }
      return null;
    }

    String? checkProxy(String? option) {
      if (option == null) return null;
      option = option.trim();
      if (option.isEmpty) return null;
      int pos = option.indexOf("://");
      if (pos >= 0) {
        option = option.substring(pos + 3);
      }
      pos = option.indexOf("/");
      if (pos >= 0) {
        option = option.substring(0, pos);
      }
      // Add default port if no port configured.
      if (option.indexOf("[") == 0) {
        var pos = option.lastIndexOf(":");
        if (option.indexOf("]") > pos) option = "$option:1080";
      } else {
        if (!option.contains(":")) option = "$option:1080";
      }
      return "PROXY $option";
    }

    // Default to using the process current environment.
    environment ??= _platformEnvironmentCache;

    String? proxyCfg;

    String? noProxy = environment["no_proxy"] ?? environment["NO_PROXY"];
    proxyCfg = checkNoProxy(noProxy);
    if (proxyCfg != null) {
      return proxyCfg;
    }

    if (url.scheme == "http") {
      String? proxy = environment["http_proxy"] ?? environment["HTTP_PROXY"];
      proxyCfg = checkProxy(proxy);
      if (proxyCfg != null) {
        return proxyCfg;
      }
    } else if (url.scheme == "https") {
      String? proxy = environment["https_proxy"] ?? environment["HTTPS_PROXY"];
      proxyCfg = checkProxy(proxy);
      if (proxyCfg != null) {
        return proxyCfg;
      }
    }
    return "DIRECT";
  }

  static final Map<String, String> _platformEnvironmentCache =
      Platform.environment;
}
