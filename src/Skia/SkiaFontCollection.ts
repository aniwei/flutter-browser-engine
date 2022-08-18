export class SkiaFontCollection {
  final List<Future<RegisteredFont?>> _unloadedFonts =
      <Future<RegisteredFont?>>[];


  final List<RegisteredFont> _registeredFonts = <RegisteredFont>[];

  final Map<String, List<SkFont>> familyToFontMap = <String, List<SkFont>>{};

  Future<void> ensureFontsLoaded() async {
    await _loadFonts();

    if (fontProvider != null) {
      fontProvider!.delete();
      fontProvider = null;
    }
    fontProvider = canvasKit.TypefaceFontProvider.Make();
    familyToFontMap.clear();

    for (final RegisteredFont font in _registeredFonts) {
      fontProvider!.registerFont(font.bytes, font.family);
      familyToFontMap
          .putIfAbsent(font.family, () => <SkFont>[])
          .add(SkFont(font.typeface));
    }

    for (final RegisteredFont font
        in FontFallbackData.instance.registeredFallbackFonts) {
      fontProvider!.registerFont(font.bytes, font.family);
      familyToFontMap
          .putIfAbsent(font.family, () => <SkFont>[])
          .add(SkFont(font.typeface));
    }
  }

  /// Loads all of the unloaded fonts in [_unloadedFonts] and adds them
  /// to [_registeredFonts].
  Future<void> _loadFonts() async {
    if (_unloadedFonts.isEmpty) {
      return;
    }
    final List<RegisteredFont?> loadedFonts = await Future.wait(_unloadedFonts);
    for (final RegisteredFont? font in loadedFonts) {
      if (font != null) {
        _registeredFonts.add(font);
      }
    }
    _unloadedFonts.clear();
  }

  Future<void> loadFontFromList(Uint8List list, {String? fontFamily}) async {
    if (fontFamily == null) {
      fontFamily = _readActualFamilyName(list);
      if (fontFamily == null) {
        printWarning('Failed to read font family name. Aborting font load.');
        return;
      }
    }

    final SkTypeface? typeface =
        canvasKit.Typeface.MakeFreeTypeFaceFromData(list.buffer);
    if (typeface != null) {
      _registeredFonts.add(RegisteredFont(list, fontFamily, typeface));
      await ensureFontsLoaded();
    } else {
      printWarning('Failed to parse font family "$fontFamily"');
      return;
    }
  }

  Future<void> registerFonts(AssetManager assetManager) async {
    ByteData byteData;

    try {
      byteData = await assetManager.load('FontManifest.json');
    } on AssetManagerException catch (e) {
      if (e.httpStatus == 404) {
        printWarning('Font manifest does not exist at `${e.url}` – ignoring.');
        return;
      } else {
        rethrow;
      }
    }

    final List<dynamic>? fontManifest =
        json.decode(utf8.decode(byteData.buffer.asUint8List())) as List<dynamic>?;
    if (fontManifest == null) {
      throw AssertionError(
          'There was a problem trying to load FontManifest.json');
    }

    bool registeredRoboto = false;

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

  Future<void> debugRegisterTestFonts() async {
    _unloadedFonts.add(_registerFont(_ahemUrl, 'Ahem'));
    FontFallbackData.instance.globalFontFallbacks.add('Ahem');
  }

  Future<RegisteredFont?> _registerFont(String url, String family) async {
    ByteBuffer buffer;
    try {
      buffer = await httpFetch(url).then(_getArrayBuffer);
    } catch (e) {
      printWarning('Failed to load font $family at $url');
      printWarning(e.toString());
      return null;
    }

    final Uint8List bytes = buffer.asUint8List();
    final SkTypeface? typeface =
        canvasKit.Typeface.MakeFreeTypeFaceFromData(bytes.buffer);
    if (typeface != null) {
      return RegisteredFont(bytes, family, typeface);
    } else {
      printWarning('Failed to load font $family at $url');
      printWarning('Verify that $url contains a valid font.');
      return null;
    }
  }

  String? _readActualFamilyName(Uint8List bytes) {
    final SkFontMgr tmpFontMgr =
        canvasKit.FontMgr.FromData(<Uint8List>[bytes])!;
    final String? actualFamily = tmpFontMgr.getFamilyName(0);
    tmpFontMgr.delete();
    return actualFamily;
  }

  Future<ByteBuffer> _getArrayBuffer(html.Body fetchResult) {
    return fetchResult
        .arrayBuffer()
        .then<ByteBuffer>((dynamic x) => x as ByteBuffer);
  }

  SkFontMgr? skFontMgr;
  TypefaceFontProvider? fontProvider;
}


class RegisteredFont {
  /// The font family name for this font.
  final String family;

  /// The byte data for this font.
  final Uint8List bytes;

  /// The [SkTypeface] created from this font's [bytes].
  ///
  /// This is used to determine which code points are supported by this font.
  final SkTypeface typeface;

  RegisteredFont(this.bytes, this.family, this.typeface) {
    // This is a hack which causes Skia to cache the decoded font.
    final SkFont skFont = SkFont(typeface);
    skFont.getGlyphBounds(<int>[0], null, null);
  }
}
