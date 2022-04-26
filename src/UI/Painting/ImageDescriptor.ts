import { PixelFormat } from '.'
import { ImmutableBuffer } from './ImmutableBuffer'

export class ImageDescriptor {
  ImageDescriptor._()
      : _width = null,
        _height = null,
        _rowBytes = null,
        _format = null;
  static Future<ImageDescriptor> encoded(ImmutableBuffer buffer) async {
    final ImageDescriptor descriptor = ImageDescriptor._();
    descriptor._data = buffer._list;
    return descriptor;
  }

  // Not async because there's no expensive work to do here.
  static raw (
    buffer: ImmutableBuffer,
    width: int,
    height: int,
    rowBytes: int,
    pixelFormat: PixelFormat
  ) {

  }
  
  ImageDescriptor.raw(
    ImmutableBuffer buffer, {
    required int width,
    required int height,
    int? rowBytes,
    required PixelFormat pixelFormat,
  })  : _width = width,
        _height = height,
        _rowBytes = rowBytes,
        _format = pixelFormat {
    _data = buffer._list;
  }

  public data: Uint8List | null 
  public width: int
  public height: int
  public rowBytes: int
  public format: PixelFormat

  Never _throw(String parameter) {
    throw UnsupportedError(
        'ImageDescriptor.$parameter is not supported on web.');
  }

  int get width => _width ?? _throw('width');
  int get height => _height ?? _throw('height');
  int get bytesPerPixel => throw UnsupportedError(
      'ImageDescriptor.bytesPerPixel is not supported on web.');
  void dispose() => _data = null;
  Future<Codec> instantiateCodec({int? targetWidth, int? targetHeight}) async {
    if (_data == null) {
      throw StateError('Object is disposed');
    }
    if (_width == null) {
      return instantiateImageCodec(
        _data!,
        targetWidth: targetWidth,
        targetHeight: targetHeight,
        allowUpscaling: false,
      );
    }

    return _createBmp(_data!, width, height, _rowBytes ?? width, _format!);
  }
}
