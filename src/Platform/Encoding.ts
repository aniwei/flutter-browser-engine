export abstract class Encoding extends Codec<String, number[]> {
  static getByName (name: string | null):  Encoding | null {
    if (name === null) {
      return null
    }
    return _nameToEncoding[name.toLowerCase()];
  }

  Converter<String, List<int>> get encoder;

  /// Returns the decoder of `this`, converting from `List<int>` to `String`.
  ///
  /// It may be stateful and should not be reused.
  Converter<List<int>, String> get decoder;

  Future<String> decodeStream(Stream<List<int>> byteStream) {
    return decoder
        .bind(byteStream)
        .fold(StringBuffer(),
            (StringBuffer buffer, String string) => buffer..write(string))
        .then((StringBuffer buffer) => buffer.toString());
  }

  String get name;


  static nameToEncoding: Map<string, Encoding> = new Map([
      // ISO_8859-1:1987.
      ['iso_8859-1:1987', latin1],
      ['iso-ir-100', latin1],
      ['iso_8859-1', latin1],
      ['iso-8859-1', latin1],
      ['latin1', latin1],
      ['l1', latin1],
      ['ibm819', latin1],
      ['cp819', latin1],
      ['csisolatin1', latin1],
  
      // US-ASCII.
      "iso-ir-6": ascii,
      "ansi_x3.4-1968": ascii,
      "ansi_x3.4-1986": ascii,
      "iso_646.irv:1991": ascii,
      "iso646-us": ascii,
      "us-ascii": ascii,
      "us": ascii,
      "ibm367": ascii,
      "cp367": ascii,
      "csascii": ascii,
      "ascii": ascii, // This is not in the IANA official names.
  
      // UTF-8.
      "csutf8": utf8,
      "utf-8": utf8
  ])

}
