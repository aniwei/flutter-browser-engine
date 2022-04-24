part of dart._engine;
// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/// JavaScript API bindings for browser APIs.
///
/// The public surface of this API must be safe to use. In particular, using the
/// API of this library it must not be possible to execute arbitrary code from
/// strings by injecting it into HTML or URLs.





/// Creates JavaScript object populated with [properties].
///
/// This is equivalent to writing `{}` in plain JavaScript.
Object createPlainJsObject([Map<String, Object?>? properties]) {
  if (properties != null) {
    return js.JsObject.jsify(properties);
  } else {
    return js_util.newObject<Object>();
  }
}

/// Returns true if [object] has property [name], false otherwise.
///
/// This is equivalent to writing `name in object` in plain JavaScript.
bool hasJsProperty(Object object, String name) {
  return js_util.hasProperty(object, name);
}

/// Returns the value of property [name] from a JavaScript [object].
///
/// This is equivalent to writing `object.name` in plain JavaScript.
T getJsProperty<T>(Object object, String name) {
  return js_util.getProperty<T>(object, name);
}

const Set<String> _safeJsProperties = <String>{
  'decoding',
  '__flutter_state',
};

/// Sets the value of property [name] on a JavaScript [object].
///
/// This is equivalent to writing `object.name = value` in plain JavaScript.
T setJsProperty<T>(Object object, String name, T value) {
  assert(
    _safeJsProperties.contains(name),
    'Attempted to set property "$name" on a JavaScript object. This property '
    'has not been checked for safety. Possible solutions to this problem:\n'
    ' - Do not set this property.\n'
    ' - Use a `dart:html` API that does the same thing.\n'
    ' - Ensure that the property is safe then add it to _safeJsProperties set.',
  );
  return js_util.setProperty<T>(object, name, value);
}

/// Wraps function [f] to be callable from JavaScript.
F allowInterop<F extends Function>(F f) {
  return js.allowInterop<F>(f);
}

/// Converts a JavaScript `Promise` into Dart [Future].
Future<T> promiseToFuture<T>(Object jsPromise) {
  return js_util.promiseToFuture<T>(jsPromise);
}

/// A function that receives a benchmark [value] labeleb by [name].
typedef OnBenchmark = void Function(String name, double value);

/// Adds an event [listener] of type [type] to the [target].
///
/// [eventOptions] supply additional configuration parameters.
///
/// This is different from [html.Element.addEventListener] in that the listener
/// is added as a plain JavaScript function, as opposed to a Dart function.
///
/// To remove the listener, call [removeJsEventListener].
void addJsEventListener(Object target, String type, Function listener, Object eventOptions) {
  js_util.callMethod<void>(
    target,
    'addEventListener', <dynamic>[
      type,
      listener,
      eventOptions,
    ]
  );
}

/// Removes an event listener that was added using [addJsEventListener].
void removeJsEventListener(Object target, String type, Function listener) {
  js_util.callMethod<void>(
    target,
    'removeEventListener', <dynamic>[
      type,
      listener,
    ]
  );
}

/// The signature of the `parseFloat` JavaScript function.
typedef _JsParseFloat = num? Function(String source);

/// The JavaScript-side `parseFloat` function.
@JS('parseFloat')
external _JsParseFloat get _jsParseFloat;

/// Parses a string [source] into a double.
///
/// Uses the JavaScript `parseFloat` function instead of Dart's [double.parse]
/// because the latter can't parse strings like "20px".
///
/// Returns null if it fails to parse.
num? parseFloat(String source) {
  // Using JavaScript's `parseFloat` here because it can parse values
  // like "20px", while Dart's `double.tryParse` fails.
  final num? result = _jsParseFloat(source);

  if (result == null || result.isNaN) {
    return null;
  }
  return result;
}

final bool supportsFontLoadingApi =
    js_util.hasProperty(html.window, 'FontFace');

final bool supportsFontsClearApi =
    js_util.hasProperty(html.document, 'fonts') &&
        js_util.hasProperty(html.document.fonts!, 'clear');

/// Used to decide if the browser tab still has the focus.
///
/// This information is useful for deciding on the blur behavior.
/// See [DefaultTextEditingStrategy].
///
/// This getter calls the `hasFocus` method of the `Document` interface.
/// See for more details:
/// https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus
bool get windowHasFocus =>
    js_util.callMethod<bool>(html.document, 'hasFocus', <dynamic>[]);

/// Parses the font size of [element] and returns the value without a unit.
num? parseFontSize(html.Element element) {
  num? fontSize;

  if (hasJsProperty(element, 'computedStyleMap')) {
    // Use the newer `computedStyleMap` API available on some browsers.
    final Object? computedStyleMap =
        js_util.callMethod<Object?>(element, 'computedStyleMap', <Object?>[]);
    if (computedStyleMap is Object) {
      final Object? fontSizeObject =
          js_util.callMethod<Object?>(computedStyleMap, 'get', <Object?>['font-size']);
      if (fontSizeObject is Object) {
        fontSize = js_util.getProperty<num>(fontSizeObject, 'value');
      }
    }
  }

  if (fontSize == null) {
    // Fallback to `getComputedStyle`.
    final String fontSizeString = element.getComputedStyle().fontSize;
    fontSize = parseFloat(fontSizeString);
  }

  return fontSize;
}

/// Provides haptic feedback.
void vibrate(int durationMs) {
  final html.Navigator navigator = html.window.navigator;
  if (hasJsProperty(navigator, 'vibrate')) {
    js_util.callMethod<void>(navigator, 'vibrate', <num>[durationMs]);
  }
}

/// Creates a `<canvas>` but anticipates that the result may be null.
///
/// The [html.CanvasElement] factory assumes that element allocation will
/// succeed and will return a non-null element. This is not always true. For
/// example, when Safari on iOS runs out of memory it returns null.
html.CanvasElement? tryCreateCanvasElement(int width, int height) {
  final html.CanvasElement? canvas = js_util.callMethod<html.CanvasElement?>(
    html.document,
    'createElement',
    <dynamic>['CANVAS'],
  );
  if (canvas == null) {
    return null;
  }
  try {
    canvas.width = width;
    canvas.height = height;
  } catch (e) {
    // It seems the tribal knowledge of why we anticipate an exception while
    // setting width/height on a non-null canvas and why it's OK to return null
    // in this case has been lost. Kudos to the one who can recover it and leave
    // a proper comment here!
    return null;
  }
  return canvas;
}

@JS('window.ImageDecoder')
external Object? get _imageDecoderConstructor;

/// Hides `image_web_codecs.dart` behind a flag.
// TODO(yjbanov): https://github.com/flutter/flutter/issues/95277
const bool _imageDecoderExperimentEnabled = bool.fromEnvironment(
  'EXPERIMENTAL_IMAGE_DECODER',
  defaultValue: false,
);

/// Whether the current browser supports `ImageDecoder`.
bool browserSupportsImageDecoder =
  _imageDecoderExperimentEnabled &&
  _imageDecoderConstructor != null &&
  browserEngine == BrowserEngine.blink;

/// Sets the value of [browserSupportsImageDecoder] to its default value.
void debugResetBrowserSupportsImageDecoder() {
  browserSupportsImageDecoder =
      _imageDecoderConstructor != null;
}

/// Corresponds to JavaScript's `Promise`.
///
/// This type doesn't need any members. Instead, it should be first converted
/// to Dart's [Future] using [promiseToFuture] then interacted with through the
/// [Future] API.
@JS()
@anonymous
class JsPromise {}

/// Corresponds to the browser's `ImageDecoder` type.
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#imagedecoder-interface
@JS('window.ImageDecoder')
class ImageDecoder {
  external ImageDecoder(ImageDecoderOptions options);
  external ImageTrackList get tracks;
  external bool get complete;
  external JsPromise decode(DecodeOptions options);
  external void close();
}

/// Options passed to the `ImageDecoder` constructor.
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#imagedecoderinit-interface
@JS()
@anonymous
class ImageDecoderOptions {
  external factory ImageDecoderOptions({
    required String type,
    required Uint8List data,
    required String premultiplyAlpha,
    required int? desiredWidth,
    required int? desiredHeight,
    required String colorSpaceConversion,
    required bool preferAnimation,
  });
}

/// The result of [ImageDecoder.decode].
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#imagedecoderesult-interface
@JS()
@anonymous
class DecodeResult {
  external VideoFrame get image;
  external bool get complete;
}

/// Options passed to [ImageDecoder.decode].
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#dictdef-imagedecodeoptions
@JS()
@anonymous
class DecodeOptions {
  external factory DecodeOptions({
    required int frameIndex,
  });
}

/// The only frame in a static image, or one of the frames in an animated one.
///
/// This class maps to the `VideoFrame` type provided by the browser.
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#videoframe-interface
@JS()
@anonymous
class VideoFrame implements html.CanvasImageSource {
  external int allocationSize();
  external JsPromise copyTo(Uint8List destination);
  external String? get format;
  external int get codedWidth;
  external int get codedHeight;
  external int get displayWidth;
  external int get displayHeight;
  external int? get duration;
  external void close();
}

/// Corresponds to the browser's `ImageTrackList` type.
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#imagetracklist-interface
@JS()
@anonymous
class ImageTrackList {
  external JsPromise get ready;
  external ImageTrack? get selectedTrack;
}

/// Corresponds to the browser's `ImageTrack` type.
///
/// See also:
///
///  * https://www.w3.org/TR/webcodecs/#imagetrack
@JS()
@anonymous
class ImageTrack {
  external int get repetitionCount;
  external int get frameCount;
}

void scaleCanvas2D(Object context2d, num x, num y) {
  js_util.callMethod<void>(context2d, 'scale', <dynamic>[x, y]);
}

void drawImageCanvas2D(Object context2d, Object imageSource, num width, num height) {
  js_util.callMethod<void>(context2d, 'drawImage', <dynamic>[
    imageSource,
    width,
    height,
  ]);
}

void vertexAttribPointerGlContext(
  Object glContext,
  Object index,
  num size,
  Object type,
  bool normalized,
  num stride,
  num offset,
) {
  js_util.callMethod<void>(glContext, 'vertexAttribPointer', <dynamic>[
    index,
    size,
    type,
    normalized,
    stride,
    offset,
  ]);
}

/// Compiled and cached gl program.
class GlProgram {
  final Object program;
  GlProgram(this.program);
}

/// JS Interop helper for webgl apis.
class GlContext {
  final Object glContext;
  final bool isOffscreen;
  Object? _kCompileStatus;
  Object? _kArrayBuffer;
  Object? _kElementArrayBuffer;
  Object? _kStaticDraw;
  Object? _kFloat;
  Object? _kColorBufferBit;
  Object? _kTexture2D;
  Object? _kTextureWrapS;
  Object? _kTextureWrapT;
  Object? _kRepeat;
  Object? _kClampToEdge;
  Object? _kMirroredRepeat;
  Object? _kTriangles;
  Object? _kLinkStatus;
  Object? _kUnsignedByte;
  Object? _kUnsignedShort;
  Object? _kRGBA;
  Object? _kLinear;
  Object? _kTextureMinFilter;
  int? _kTexture0;

  Object? _canvas;
  int? _widthInPixels;
  int? _heightInPixels;
  static late Map<String, GlProgram?> _programCache;

  factory GlContext(OffScreenCanvas offScreenCanvas) {
    return OffScreenCanvas.supported
        ? GlContext._fromOffscreenCanvas(offScreenCanvas.offScreenCanvas!)
        : GlContext._fromCanvasElement(
        offScreenCanvas.canvasElement!, webGLVersion == WebGLVersion.webgl1);
  }

  GlContext._fromOffscreenCanvas(html.OffscreenCanvas canvas)
      : glContext = canvas.getContext('webgl2', <String, dynamic>{'premultipliedAlpha': false})!,
        isOffscreen = true {
    _programCache = <String, GlProgram?>{};
    _canvas = canvas;
  }

  GlContext._fromCanvasElement(html.CanvasElement canvas, bool useWebGl1)
      : glContext = canvas.getContext(useWebGl1 ? 'webgl' : 'webgl2',
      <String, dynamic>{'premultipliedAlpha': false})!,
        isOffscreen = false {
    _programCache = <String, GlProgram?>{};
    _canvas = canvas;
  }

  void setViewportSize(int width, int height) {
    _widthInPixels = width;
    _heightInPixels = height;
  }

  /// Draws Gl context contents to canvas context.
  void drawImage(html.CanvasRenderingContext2D context,
      double left, double top) {
    // Actual size of canvas may be larger than viewport size. Use
    // source/destination to draw part of the image data.
    js_util.callMethod<void>(context, 'drawImage',
        <dynamic>[_canvas, 0, 0, _widthInPixels, _heightInPixels,
          left, top, _widthInPixels, _heightInPixels]);
  }

  GlProgram cacheProgram(
      String vertexShaderSource, String fragmentShaderSource) {
    final String cacheKey = '$vertexShaderSource||$fragmentShaderSource';
    GlProgram? cachedProgram = _programCache[cacheKey];
    if (cachedProgram == null) {
      // Create and compile shaders.
      final Object vertexShader = compileShader('VERTEX_SHADER', vertexShaderSource);
      final Object fragmentShader =
      compileShader('FRAGMENT_SHADER', fragmentShaderSource);
      // Create a gl program and link shaders.
      final Object program = createProgram();
      attachShader(program, vertexShader);
      attachShader(program, fragmentShader);
      linkProgram(program);
      cachedProgram = GlProgram(program);
      _programCache[cacheKey] = cachedProgram;
    }
    return cachedProgram;
  }

  Object compileShader(String shaderType, String source) {
    final Object? shader = _createShader(shaderType);
    if (shader == null) {
      throw Exception(error);
    }
    js_util.callMethod<void>(glContext, 'shaderSource', <dynamic>[shader, source]);
    js_util.callMethod<void>(glContext, 'compileShader', <dynamic>[shader]);
    final bool shaderStatus = js_util.callMethod<bool>(
      glContext,
      'getShaderParameter',
      <dynamic>[shader, compileStatus],
    );
    if (!shaderStatus) {
      throw Exception('Shader compilation failed: ${getShaderInfoLog(shader)}');
    }
    return shader;
  }
  Object createProgram() =>
      js_util.callMethod<Object>(glContext, 'createProgram', const <dynamic>[]);

  void attachShader(Object? program, Object shader) {
    js_util.callMethod<void>(glContext, 'attachShader', <dynamic>[program, shader]);
  }

  void linkProgram(Object program) {
    js_util.callMethod<void>(glContext, 'linkProgram', <dynamic>[program]);
    final bool programStatus = js_util.callMethod<bool>(
      glContext,
      'getProgramParameter',
      <dynamic>[program, kLinkStatus],
    );
    if (!programStatus) {
      throw Exception(getProgramInfoLog(program));
    }
  }

  void useProgram(GlProgram program) {
    js_util.callMethod<void>(glContext, 'useProgram', <dynamic>[program.program]);
  }

  Object? createBuffer() =>
      js_util.callMethod(glContext, 'createBuffer', const <dynamic>[]);

  void bindArrayBuffer(Object? buffer) {
    js_util.callMethod<void>(glContext, 'bindBuffer', <dynamic>[kArrayBuffer, buffer]);
  }

  Object? createVertexArray() =>
      js_util.callMethod(glContext, 'createVertexArray', const <dynamic>[]);

  void bindVertexArray(Object vertexObjectArray) {
    js_util.callMethod<void>(glContext, 'bindVertexArray',
        <dynamic>[vertexObjectArray]);
  }

  void unbindVertexArray() {
    js_util.callMethod<void>(glContext, 'bindVertexArray',
        <dynamic>[null]);
  }

  void bindElementArrayBuffer(Object? buffer) {
    js_util.callMethod<void>(glContext, 'bindBuffer', <dynamic>[kElementArrayBuffer, buffer]);
  }

  Object? createTexture() =>
      js_util.callMethod(glContext, 'createTexture', const <dynamic>[]);

  void generateMipmap(dynamic target) =>
      js_util.callMethod(glContext, 'generateMipmap', <dynamic>[target]);

  void bindTexture(dynamic target, Object? buffer) {
    js_util.callMethod<void>(glContext, 'bindTexture', <dynamic>[target, buffer]);
  }

  void activeTexture(int textureUnit) {
    js_util.callMethod<void>(glContext, 'activeTexture', <dynamic>[textureUnit]);
  }

  void texImage2D(dynamic target, int level, dynamic internalFormat,
      dynamic format, dynamic dataType,
      dynamic pixels, {int? width, int? height, int border = 0}) {
    if (width == null) {
      js_util.callMethod<void>(glContext, 'texImage2D', <dynamic>[
        target, level, internalFormat, format, dataType, pixels]);
    } else {
      js_util.callMethod<void>(glContext, 'texImage2D', <dynamic>[
        target, level, internalFormat, width, height, border, format, dataType,
        pixels]);
    }
  }

  void texParameteri(dynamic target, dynamic parameterName, dynamic value) {
    js_util.callMethod<void>(glContext, 'texParameteri', <dynamic>[
      target, parameterName, value]);
  }

  void deleteBuffer(Object buffer) {
    js_util.callMethod<void>(glContext, 'deleteBuffer', <dynamic>[buffer]);
  }

  void bufferData(TypedData? data, dynamic type) {
    js_util.callMethod<void>(glContext, 'bufferData', <dynamic>[kArrayBuffer, data, type]);
  }

  void bufferElementData(TypedData? data, dynamic type) {
    js_util.callMethod<void>(glContext, 'bufferData', <dynamic>[kElementArrayBuffer, data, type]);
  }

  void enableVertexAttribArray(dynamic index) {
    js_util.callMethod<void>(glContext, 'enableVertexAttribArray', <dynamic>[index]);
  }

  /// Clear background.
  void clear() {
    js_util.callMethod<void>(glContext, 'clear', <dynamic>[kColorBufferBit]);
  }

  /// Destroys gl context.
  void dispose() {
    final Object? loseContextExtension = _getExtension('WEBGL_lose_context');
    if (loseContextExtension != null) {
      js_util.callMethod<void>(
        loseContextExtension,
        'loseContext',
        const <dynamic>[],
      );
    }
  }

  void deleteProgram(Object program) {
    js_util.callMethod<void>(glContext, 'deleteProgram', <dynamic>[program]);
  }

  void deleteShader(Object shader) {
    js_util.callMethod<void>(glContext, 'deleteShader', <dynamic>[shader]);
  }

  Object? _getExtension(String extensionName) =>
      js_util.callMethod<Object?>(glContext, 'getExtension', <dynamic>[extensionName]);

  void drawTriangles(int triangleCount, ui.VertexMode vertexMode) {
    final dynamic mode = _triangleTypeFromMode(vertexMode);
    js_util.callMethod<void>(glContext, 'drawArrays', <dynamic>[mode, 0, triangleCount]);
  }

  void drawElements(dynamic type, int indexCount, dynamic indexType) {
    js_util.callMethod<void>(glContext, 'drawElements', <dynamic>[type, indexCount, indexType, 0]);
  }

  /// Sets affine transformation from normalized device coordinates
  /// to window coordinates
  void viewport(double x, double y, double width, double height) {
    js_util.callMethod<void>(glContext, 'viewport', <dynamic>[x, y, width, height]);
  }

  Object _triangleTypeFromMode(ui.VertexMode mode) {
    switch (mode) {
      case ui.VertexMode.triangles:
        return kTriangles;
      case ui.VertexMode.triangleFan:
        return kTriangleFan;
      case ui.VertexMode.triangleStrip:
        return kTriangleStrip;
    }
  }

  Object? _createShader(String shaderType) => js_util.callMethod(
      glContext, 'createShader', <Object?>[js_util.getProperty<Object?>(glContext, shaderType)]);

  /// Error state of gl context.
  Object? get error => js_util.callMethod(glContext, 'getError', const <dynamic>[]);

  /// Shader compiler error, if this returns [kFalse], to get details use
  /// [getShaderInfoLog].
  Object? get compileStatus =>
      _kCompileStatus ??= js_util.getProperty(glContext, 'COMPILE_STATUS');

  Object? get kArrayBuffer =>
      _kArrayBuffer ??= js_util.getProperty(glContext, 'ARRAY_BUFFER');

  Object? get kElementArrayBuffer =>
      _kElementArrayBuffer ??= js_util.getProperty(glContext,
          'ELEMENT_ARRAY_BUFFER');

  Object get kLinkStatus =>
      _kLinkStatus ??= js_util.getProperty<Object>(glContext, 'LINK_STATUS');

  Object get kFloat => _kFloat ??= js_util.getProperty<Object>(glContext, 'FLOAT');

  Object? get kRGBA => _kRGBA ??= js_util.getProperty(glContext, 'RGBA');

  Object get kUnsignedByte =>
      _kUnsignedByte ??= js_util.getProperty<Object>(glContext, 'UNSIGNED_BYTE');

  Object? get kUnsignedShort =>
      _kUnsignedShort ??= js_util.getProperty(glContext, 'UNSIGNED_SHORT');

  Object? get kStaticDraw =>
      _kStaticDraw ??= js_util.getProperty(glContext, 'STATIC_DRAW');

  Object get kTriangles =>
      _kTriangles ??= js_util.getProperty<Object>(glContext, 'TRIANGLES');

  Object get kTriangleFan =>
      _kTriangles ??= js_util.getProperty<Object>(glContext, 'TRIANGLE_FAN');

  Object get kTriangleStrip =>
      _kTriangles ??= js_util.getProperty<Object>(glContext, 'TRIANGLE_STRIP');

  Object? get kColorBufferBit =>
      _kColorBufferBit ??= js_util.getProperty(glContext, 'COLOR_BUFFER_BIT');

  Object? get kTexture2D =>
      _kTexture2D ??= js_util.getProperty(glContext, 'TEXTURE_2D');

  int get kTexture0 =>
      _kTexture0 ??= js_util.getProperty<int>(glContext, 'TEXTURE0');

  Object? get kTextureWrapS =>
      _kTextureWrapS ??= js_util.getProperty(glContext, 'TEXTURE_WRAP_S');

  Object? get kTextureWrapT =>
      _kTextureWrapT ??= js_util.getProperty(glContext, 'TEXTURE_WRAP_T');

  Object? get kRepeat =>
      _kRepeat ??= js_util.getProperty(glContext, 'REPEAT');

  Object? get kClampToEdge =>
      _kClampToEdge ??= js_util.getProperty(glContext, 'CLAMP_TO_EDGE');

  Object? get kMirroredRepeat =>
      _kMirroredRepeat ??= js_util.getProperty(glContext, 'MIRRORED_REPEAT');

  Object? get kLinear =>
      _kLinear ??= js_util.getProperty(glContext, 'LINEAR');

  Object? get kTextureMinFilter =>
      _kTextureMinFilter ??= js_util.getProperty(glContext,
          'TEXTURE_MIN_FILTER');

  /// Returns reference to uniform in program.
  Object getUniformLocation(Object program, String uniformName) {
    final Object? res = js_util
        .callMethod(glContext, 'getUniformLocation', <dynamic>[program, uniformName]);
    if (res == null) {
      throw Exception('$uniformName not found');
    } else {
      return res;
    }
  }

  /// Returns true if uniform exists.
  bool containsUniform(Object program, String uniformName) {
    final Object? res = js_util
        .callMethod(glContext, 'getUniformLocation', <dynamic>[program, uniformName]);
    return res != null;
  }

  /// Returns reference to uniform in program.
  Object getAttributeLocation(Object program, String attribName) {
    final Object? res = js_util
        .callMethod(glContext, 'getAttribLocation', <dynamic>[program, attribName]);
    if (res == null) {
      throw Exception('$attribName not found');
    } else {
      return res;
    }
  }

  /// Sets float uniform value.
  void setUniform1f(Object uniform, double value) {
    js_util.callMethod<void>(glContext, 'uniform1f', <dynamic>[uniform, value]);
  }

  /// Sets vec2 uniform values.
  void setUniform2f(Object uniform, double value1, double value2) {
    js_util.callMethod<void>(glContext, 'uniform2f', <dynamic>[uniform, value1, value2]);
  }

  /// Sets vec4 uniform values.
  void setUniform4f(Object uniform, double value1, double value2, double value3,
      double value4) {
    js_util.callMethod<void>(
        glContext, 'uniform4f', <dynamic>[uniform, value1, value2, value3, value4]);
  }

  /// Sets mat4 uniform values.
  void setUniformMatrix4fv(Object uniform, bool transpose, Float32List value) {
    js_util.callMethod<void>(
        glContext, 'uniformMatrix4fv', <dynamic>[uniform, transpose, value]);
  }

  /// Shader compile error log.
  Object? getShaderInfoLog(Object glShader) {
    return js_util.callMethod(glContext, 'getShaderInfoLog', <dynamic>[glShader]);
  }

  ///  Errors that occurred during failed linking or validation of program
  ///  objects. Typically called after [linkProgram].
  String? getProgramInfoLog(Object glProgram) {
    return js_util.callMethod<String?>(glContext, 'getProgramInfoLog', <dynamic>[glProgram]);
  }

  int? get drawingBufferWidth =>
      js_util.getProperty<int?>(glContext, 'drawingBufferWidth');
  int? get drawingBufferHeight =>
      js_util.getProperty<int?>(glContext, 'drawingBufferWidth');

  /// Reads gl contents as image data.
  ///
  /// Warning: data is read bottom up (flipped).
  html.ImageData readImageData() {
    const int kBytesPerPixel = 4;
    final int bufferWidth = _widthInPixels!;
    final int bufferHeight = _heightInPixels!;
    if (browserEngine == BrowserEngine.webkit ||
        browserEngine == BrowserEngine.firefox) {
      final Uint8List pixels =
      Uint8List(bufferWidth * bufferHeight * kBytesPerPixel);
      js_util.callMethod<void>(glContext, 'readPixels',
          <dynamic>[0, 0, bufferWidth, bufferHeight, kRGBA, kUnsignedByte, pixels]);
      return html.ImageData(
          Uint8ClampedList.fromList(pixels), bufferWidth, bufferHeight);
    } else {
      final Uint8ClampedList pixels =
      Uint8ClampedList(bufferWidth * bufferHeight * kBytesPerPixel);
      js_util.callMethod<void>(glContext, 'readPixels',
          <dynamic>[0, 0, bufferWidth, bufferHeight, kRGBA, kUnsignedByte, pixels]);
      return html.ImageData(pixels, bufferWidth, bufferHeight);
    }
  }

  /// Returns image data in a form that can be used to create Canvas
  /// context patterns.
  Object? readPatternData() {
    // When using OffscreenCanvas and transferToImageBitmap is supported by
    // browser create ImageBitmap otherwise use more expensive canvas
    // allocation.
    if (_canvas != null &&
        js_util.hasProperty(_canvas!, 'transferToImageBitmap')) {
      // TODO(yjbanov): find out why we need to call getContext and ignore the return value.
      js_util.callMethod<void>(_canvas!, 'getContext', <dynamic>['webgl2']);
      final Object? imageBitmap = js_util.callMethod(_canvas!, 'transferToImageBitmap',
          <dynamic>[]);
      return imageBitmap;
    } else {
      final html.CanvasElement canvas = html.CanvasElement(width: _widthInPixels, height: _heightInPixels);
      final html.CanvasRenderingContext2D ctx = canvas.context2D;
      drawImage(ctx, 0, 0);
      return canvas;
    }
  }

  /// Returns image data in data url format.
  String toImageUrl() {
    final html.CanvasElement canvas = html.CanvasElement(width: _widthInPixels, height: _heightInPixels);
    final html.CanvasRenderingContext2D ctx = canvas.context2D;
    drawImage(ctx, 0, 0);
    final String dataUrl = canvas.toDataUrl();
    canvas.width = 0;
    canvas.height = 0;
    return dataUrl;
  }
}

// ignore: avoid_classes_with_only_static_members
/// Creates gl context from cached OffscreenCanvas for webgl rendering to image.
class GlContextCache {
  static int _maxPixelWidth = 0;
  static int _maxPixelHeight = 0;
  static GlContext? _cachedContext;
  static OffScreenCanvas? _offScreenCanvas;

  static void dispose() {
    _maxPixelWidth = 0;
    _maxPixelHeight = 0;
    _cachedContext = null;
    _offScreenCanvas?.dispose();
  }

  static GlContext? createGlContext(int widthInPixels, int heightInPixels) {
    if (widthInPixels > _maxPixelWidth || heightInPixels > _maxPixelHeight) {
      _cachedContext?.dispose();
      _cachedContext = null;
      _offScreenCanvas = null;
      _maxPixelWidth = math.max(_maxPixelWidth, widthInPixels);
      _maxPixelHeight = math.max(_maxPixelHeight, widthInPixels);
    }
    _offScreenCanvas ??= OffScreenCanvas(widthInPixels, heightInPixels);
    _cachedContext ??= GlContext(_offScreenCanvas!);
    _cachedContext!.setViewportSize(widthInPixels, heightInPixels);
    return _cachedContext;
  }
}

void setupVertexTransforms(
    GlContext gl,
    GlProgram glProgram,
    double offsetX,
    double offsetY,
    double widthInPixels,
    double heightInPixels,
    Matrix4 transform) {
  final Object transformUniform =
      gl.getUniformLocation(glProgram.program, 'u_ctransform');
  final Matrix4 transformAtOffset = transform.clone()
    ..translate(-offsetX, -offsetY);
  gl.setUniformMatrix4fv(transformUniform, false, transformAtOffset.storage);

  // Set uniform to scale 0..width/height pixels coordinates to -1..1
  // clipspace range and flip the Y axis.
  final Object resolution = gl.getUniformLocation(glProgram.program, 'u_scale');
  gl.setUniform4f(resolution, 2.0 / widthInPixels.toDouble(),
      -2.0 / heightInPixels.toDouble(), 1, 1);
  final Object shift = gl.getUniformLocation(glProgram.program, 'u_shift');
  gl.setUniform4f(shift, -1, 1, 0, 0);
}

void setupTextureTransform(
    GlContext gl, GlProgram glProgram, double offsetx, double offsety, double sx, double sy) {
  final Object scalar = gl.getUniformLocation(glProgram.program, 'u_textransform');
  gl.setUniform4f(scalar, sx, sy, offsetx, offsety);
}

void bufferVertexData(GlContext gl, Float32List positions,
    double devicePixelRatio) {
  if (devicePixelRatio == 1.0) {
    gl.bufferData(positions, gl.kStaticDraw);
  } else {
    final int length = positions.length;
    final Float32List scaledList = Float32List(length);
    for (int i = 0; i < length; i++) {
      scaledList[i] = positions[i] * devicePixelRatio;
    }
    gl.bufferData(scaledList, gl.kStaticDraw);
  }
}

dynamic tileModeToGlWrapping(GlContext gl, ui.TileMode tileMode) {
  switch (tileMode) {
    case ui.TileMode.clamp:
    return gl.kClampToEdge;
    case ui.TileMode.decal:
    return gl.kClampToEdge;
    case ui.TileMode.mirror:
    return gl.kMirroredRepeat;
    case ui.TileMode.repeated:
    return gl.kRepeat;
  }
}

/// Polyfill for html.OffscreenCanvas that is not supported on some browsers.
class OffScreenCanvas {
  html.OffscreenCanvas? offScreenCanvas;
  html.CanvasElement? canvasElement;
  int width;
  int height;
  static bool? _supported;

  OffScreenCanvas(this.width, this.height) {
    if (OffScreenCanvas.supported) {
      offScreenCanvas = html.OffscreenCanvas(width, height);
    } else {
      canvasElement = html.CanvasElement(
        width: width,
        height: height,
      );
      canvasElement!.className = 'gl-canvas';
      final double cssWidth = width / EnginePlatformDispatcher.browserDevicePixelRatio;
      final double cssHeight = height / EnginePlatformDispatcher.browserDevicePixelRatio;
      canvasElement!.style
        ..position = 'absolute'
        ..width = '${cssWidth}px'
        ..height = '${cssHeight}px';
    }
  }

  void dispose() {
    offScreenCanvas = null;
    canvasElement = null;
  }

  /// Returns CanvasRenderContext2D or OffscreenCanvasRenderingContext2D to
  /// paint into.
  Object? getContext2d() {
    return offScreenCanvas != null
        ? offScreenCanvas!.getContext('2d')
        : canvasElement!.getContext('2d');
  }

  /// Feature detection for transferToImageBitmap on OffscreenCanvas.
  bool get transferToImageBitmapSupported =>
      js_util.hasProperty(offScreenCanvas!, 'transferToImageBitmap');

  /// Creates an ImageBitmap object from the most recently rendered image
  /// of the OffscreenCanvas.
  ///
  /// !Warning API still in experimental status, feature detect before using.
  Object? transferToImageBitmap() {
    return js_util.callMethod(offScreenCanvas!, 'transferToImageBitmap',
        <dynamic>[]);
  }

  /// Draws canvas contents to a rendering context.
  void transferImage(Object targetContext) {
    // Actual size of canvas may be larger than viewport size. Use
    // source/destination to draw part of the image data.
    js_util.callMethod<void>(targetContext, 'drawImage',
        <dynamic>[offScreenCanvas ?? canvasElement!, 0, 0, width, height,
          0, 0, width, height]);
  }

  /// Converts canvas contents to an image and returns as data URL.
  Future<String> toDataUrl() {
    final Completer<String> completer = Completer<String>();
    if (offScreenCanvas != null) {
      offScreenCanvas!.convertToBlob().then((html.Blob value) {
        final html.FileReader fileReader = html.FileReader();
        fileReader.onLoad.listen((html.ProgressEvent event) {
          completer.complete(
            js_util.getProperty<String>(js_util.getProperty<Object>(event, 'target'), 'result'),
          );
        });
        fileReader.readAsDataUrl(value);
      });
      return completer.future;
    } else {
      return Future<String>.value(canvasElement!.toDataUrl());
    }
  }

  /// Draws an image to canvas for both offscreen canvas canvas context2d.
  void drawImage(Object image, int x, int y, int width, int height) {
    js_util.callMethod<void>(
        getContext2d()!, 'drawImage', <dynamic>[image, x, y, width, height]);
  }

  /// Feature detects OffscreenCanvas.
  static bool get supported => _supported ??=
      js_util.hasProperty(html.window, 'OffscreenCanvas');
}
