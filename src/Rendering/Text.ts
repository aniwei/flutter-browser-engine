import { clampInt } from '@helper/clamp'
import { lerpDouble } from '@helper/lerp'
import { listEquals } from '@helper/listEquals'
import { Rect } from '@internal/Geometry'
import { SkiaFontStyle, SkiaParagraphStyle, SkiaStrutStyleProperties, SkiaTextDirection } from '@skia/Skia'
import invariant from 'ts-invariant'

export enum FontStyle {
  Normal,
  Italic,
}

export enum PlaceholderAlignment {
  baseline,
  aboveBaseline,
  belowBaseline,
  top,
  bottom,
  middle,
}

export enum TextAlign {
  Left,
  Right,
  Center,
  Justify,
  Start,
  End,
}

export type ParagraphStyleOptions = {
  textAlign?: TextAlign | null,
  textDirection?: SkiaTextDirection | null,
  maxLines?: number | null,
  fontFamily?: string | null,
  fontSize?: number | null,
  height?: number | null,
  textHeightBehavior?: TextHeightBehavior | null,
  fontWeight?: FontWeight | null,
  fontStyle?: FontStyle | null,
  strutStyle?: StrutStyle | null,
  ellipsis?: string | null,
  locale?: Locale | null,
}

export type TextHeightBehaviorOptions = {
  applyHeightToFirstAscent?: boolean
  applyHeightToLastDescent?: boolean
  leadingDistribution?: TextLeadingDistribution
}

export class TextHeightBehavior {
  constructor (options: TextHeightBehaviorOptions) {
    options.applyHeightToFirstAscent ??= true
    options.applyHeightToLastDescent ??= true
    options.leadingDistribution ??= TextLeadingDistribution.Proportional

    this.applyHeightToFirstAscent = options.applyHeightToFirstAscent
    this.applyHeightToLastDescent = options.applyHeightToLastDescent
    this.leadingDistribution = options.leadingDistribution
  }

  applyHeightToFirstAscent: boolean
  applyHeightToLastDescent: boolean
  leadingDistribution: TextLeadingDistribution

  eq (other: TextHeightBehavior) {
    if (this === other) {
      return true
    }

    return (
      other instanceof TextHeightBehavior &&
      other.applyHeightToFirstAscent === this.applyHeightToFirstAscent &&
      other.applyHeightToLastDescent === this.applyHeightToLastDescent &&
      other.leadingDistribution === this.leadingDistribution
    )
  }
}

export class FontWeight {
  public index: number
  static w100: FontWeight = new FontWeight(0)
  static w200: FontWeight = new FontWeight(1)
  static w300: FontWeight = new FontWeight(2)
  static w400: FontWeight = new FontWeight(3)
  static w500: FontWeight = new FontWeight(4)
  static w600: FontWeight = new FontWeight(5)
  static w700: FontWeight = new FontWeight(6)
  static w800: FontWeight = new FontWeight(7)
  static w900: FontWeight = new FontWeight(8)
  static normal: FontWeight = FontWeight.w400
  static bold: FontWeight = FontWeight.w700

  static values: FontWeight[] = [
    FontWeight.w100,
    FontWeight.w200,
    FontWeight.w300,
    FontWeight.w400,
    FontWeight.w500,
    FontWeight.w600,
    FontWeight.w700,
    FontWeight.w800,
    FontWeight.w900
  ]
  
  static lerp(
    a?: FontWeight | null, 
    b?: FontWeight | null, 
    t: number
  ): FontWeight | null {
    invariant(t !== null)
    if (a === null && b === null) {
      return null
    }

    const index = clampInt(
      Math.round(
        lerpDouble(
          a?.index ?? normal.index, 
          b?.index ?? normal.index, 
          t
        )!
      ),
      0,
      8,
    )

    return values[index]
  }
}

export class ParagraphStyle {
  static malloc (options: ParagraphStyleOptions) {
    const skia
    return new ParagraphStyle(skia, options)
  }

  constructor(options: ParagraphStyleOptions) {
    options.textDirection ??= Skia.TextDirection.LTR

    this.skia = options.skia
    this.textDirection = options.textDirection
    this.fontFamily = options.fontFamily
    this.fontSize = options.fontSize
    this.height = options.height
    this.fontWeight = options.fontWeight
    this.fontStyle = options.fontStyle
    this.leadingDistribution = options.leadingDistribution
  } 

  public skia: SkiaParagraphStyle | null = null
  public textDirection: SkiaTextDirection | null = null
  public fontFamily: string | null = null
  public fontSize: number | null = null
  public height: number | null = null
  public fontWeight: FontWeight | null = null
  public fontStyle: FontStyle | null = null
  public leadingDistribution: TextHeightBehavior  | null = null

  static toSkTextStyleProperties(
    String? fontFamily,
    double? fontSize,
    double? height,
    ui.FontWeight? fontWeight,
    ui.FontStyle? fontStyle,
  ) {
    final SkTextStyleProperties skTextStyle = SkTextStyleProperties();
    if (fontWeight != null || fontStyle != null) {
      skTextStyle.fontStyle = toSkFontStyle(fontWeight, fontStyle);
    }

    if (fontSize != null) {
      skTextStyle.fontSize = fontSize;
    }

    if (height != null) {
      skTextStyle.heightMultiplier = height;
    }

    skTextStyle.fontFamilies = _getEffectiveFontFamilies(fontFamily);

    return skTextStyle;
  }

  static toSkStrutStyleProperties(
    style: StrutStyle, 
    paragraphHeightBehavior?: TextHeightBehavior | null
  ): SkiaStrutStyleProperties {
    const properties: SkiaStrutStyleProperties = {
      fontFamilies: getEffectiveFontFamilies(
        style.fontFamily,
        style.fontFamilyFallback
      )
    }
    
    if (style.fontSize !== null) {
      properties.fontSize = style.fontSize
    }

    if (style.height !== null) {
      properties.heightMultiplier = style.height
    }

    const effectiveLeadingDistribution = style.leadingDistribution ?? paragraphHeightBehavior?.leadingDistribution

    switch (effectiveLeadingDistribution) {
      case null:
        break
      case TextLeadingDistribution.Even:
        properties.halfLeading = true
        break
      case TextLeadingDistribution.Proportional:
        properties.halfLeading = false
        break
    }

    if (style.leading !== null) {
      properties.leading = style.leading
    }

    if (
      style.fontWeight !== null || 
      style.fontStyle !== null
    ) {
      properties.fontStyle = toSkFontStyle(
        style.fontWeight, 
        style.fontStyle
      )
    }

    if (style.forceStrutHeight !== null) {
      properties.forceStrutHeight = style.forceStrutHeight
    }

    properties.strutEnabled = true

    return properties
  }

  static SkParagraphStyle toSkParagraphStyle(
    ui.TextAlign? textAlign,
    ui.TextDirection? textDirection,
    int? maxLines,
    String? fontFamily,
    double? fontSize,
    double? height,
    ui.TextHeightBehavior? textHeightBehavior,
    ui.FontWeight? fontWeight,
    ui.FontStyle? fontStyle,
    ui.StrutStyle? strutStyle,
    String? ellipsis,
    ui.Locale? locale,
  ) {
    final SkParagraphStyleProperties properties = SkParagraphStyleProperties();

    if (textAlign != null) {
      properties.textAlign = toSkTextAlign(textAlign);
    }

    if (textDirection != null) {
      properties.textDirection = toSkTextDirection(textDirection);
    }

    if (maxLines != null) {
      properties.maxLines = maxLines;
    }

    if (height != null) {
      properties.heightMultiplier = height;
    }

    if (textHeightBehavior != null) {
      properties.textHeightBehavior =
          toSkTextHeightBehavior(textHeightBehavior);
    }

    if (ellipsis != null) {
      properties.ellipsis = ellipsis;
    }

    if (strutStyle != null) {
      properties.strutStyle =
          toSkStrutStyleProperties(strutStyle, textHeightBehavior);
    }

    properties.textStyle = toSkTextStyleProperties(
        fontFamily, fontSize, height, fontWeight, fontStyle);

    return canvasKit.ParagraphStyle(properties);
  }

   getTextStyle () {
    return TextStyle.malloc(
      fontFamily: _fontFamily,
      fontSize: _fontSize,
      height: _height,
      leadingDistribution: _leadingDistribution,
      fontWeight: _fontWeight,
      fontStyle: _fontStyle,
    )
  }
}

export type FontFeatureOptions = {
  feature: string,
  value?: number
}

export class FontFeature {
  constructor (options: FontFeatureOptions) {

  }

  const FontFeature(this.feature, [this.value = 1])
      : assert(feature != null), // ignore: unnecessary_null_comparison
        assert(feature.length == 4,
            'Feature tag must be exactly four characters long.'),
        assert(value != null), // ignore: unnecessary_null_comparison
        assert(value >= 0, 'Feature value must be zero or a positive integer.');
  const FontFeature.enable(String feature) : this(feature, 1);
  const FontFeature.disable(String feature) : this(feature, 0);
  const FontFeature.alternative(this.value) : feature = 'aalt';
  const FontFeature.alternativeFractions()
      : feature = 'afrc',
        value = 1;
  const FontFeature.contextualAlternates()
      : feature = 'calt',
        value = 1;
  const FontFeature.caseSensitiveForms()
      : feature = 'case',
        value = 1;
  factory FontFeature.characterVariant(int value) {
    assert(value >= 1);
    assert(value <= 20);
    return FontFeature('cv${value.toString().padLeft(2, "0")}');
  }
  const FontFeature.denominator()
      : feature = 'dnom',
        value = 1;
  const FontFeature.fractions()
      : feature = 'frac',
        value = 1;
  const FontFeature.historicalForms()
      : feature = 'hist',
        value = 1;
  const FontFeature.historicalLigatures()
      : feature = 'hlig',
        value = 1;
  const FontFeature.liningFigures()
      : feature = 'lnum',
        value = 1;
  const FontFeature.localeAware({bool enable = true})
      : feature = 'locl',
        value = enable ? 1 : 0;
  const FontFeature.notationalForms([this.value = 1])
      : feature = 'nalt',
        assert(value >= 0);
  const FontFeature.numerators()
      : feature = 'numr',
        value = 1;
  const FontFeature.oldstyleFigures()
      : feature = 'onum',
        value = 1;
  const FontFeature.ordinalForms()
      : feature = 'ordn',
        value = 1;
  const FontFeature.proportionalFigures()
      : feature = 'pnum',
        value = 1;
  const FontFeature.randomize()
      : feature = 'rand',
        value = 1;
  const FontFeature.stylisticAlternates()
      : feature = 'salt',
        value = 1;
  const FontFeature.scientificInferiors()
      : feature = 'sinf',
        value = 1;
  factory FontFeature.stylisticSet(int value) {
    assert(value >= 1);
    assert(value <= 20);
    return FontFeature('ss${value.toString().padLeft(2, "0")}');
  }
  const FontFeature.subscripts()
      : feature = 'subs',
        value = 1;
  const FontFeature.superscripts()
      : feature = 'sups',
        value = 1;
  const FontFeature.swash([this.value = 1])
      : feature = 'swsh',
        assert(value >= 0);
  const FontFeature.tabularFigures()
      : feature = 'tnum',
        value = 1;
  const FontFeature.slashedZero()
      : feature = 'zero',
        value = 1;

  final String feature;
  final int value;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is FontFeature &&
        other.feature == feature &&
        other.value == value;
  }

  @override
  int get hashCode => hashValues(feature, value);

  @override
  String toString() => "FontFeature('$feature', $value)";
}

class TextDecoration {
  const TextDecoration._(this._mask);
  factory TextDecoration.combine(List<TextDecoration> decorations) {
    int mask = 0;
    for (final TextDecoration decoration in decorations) {
      mask |= decoration._mask;
    }
    return TextDecoration._(mask);
  }

  final int _mask;
  bool contains(TextDecoration other) {
    return (_mask | other._mask) == _mask;
  }

  static const TextDecoration none = TextDecoration._(0x0);
  static const TextDecoration underline = TextDecoration._(0x1);
  static const TextDecoration overline = TextDecoration._(0x2);
  static const TextDecoration lineThrough = TextDecoration._(0x4);

  @override
  bool operator ==(Object other) {
    return other is TextDecoration && other._mask == _mask;
  }

  @override
  int get hashCode => _mask.hashCode;

  @override
  String toString() {
    if (_mask == 0) {
      return 'TextDecoration.none';
    }
    final List<String> values = <String>[];
    if (_mask & underline._mask != 0) {
      values.add('underline');
    }
    if (_mask & overline._mask != 0) {
      values.add('overline');
    }
    if (_mask & lineThrough._mask != 0) {
      values.add('lineThrough');
    }
    if (values.length == 1) {
      return 'TextDecoration.${values[0]}';
    }
    return 'TextDecoration.combine([${values.join(", ")}])';
  }
}

enum TextDecorationStyle { solid, double, dotted, dashed, wavy }

enum TextLeadingDistribution {
  proportional,
  even,
}

class TextHeightBehavior {
  const TextHeightBehavior({
    this.applyHeightToFirstAscent = true,
    this.applyHeightToLastDescent = true,
    this.leadingDistribution = TextLeadingDistribution.proportional,
  });
  final bool applyHeightToFirstAscent;
  final bool applyHeightToLastDescent;
  final TextLeadingDistribution leadingDistribution;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is TextHeightBehavior &&
        other.applyHeightToFirstAscent == applyHeightToFirstAscent &&
        other.applyHeightToLastDescent == applyHeightToLastDescent &&
        other.leadingDistribution == leadingDistribution;
  }

  @override
  int get hashCode {
    return hashValues(
      applyHeightToFirstAscent,
      applyHeightToLastDescent,
    );
  }

  @override
  String toString() {
    return 'TextHeightBehavior('
        'applyHeightToFirstAscent: $applyHeightToFirstAscent, '
        'applyHeightToLastDescent: $applyHeightToLastDescent, '
        'leadingDistribution: $leadingDistribution'
        ')';
  }
}

export type TextBoxOptions = {
  left: number
  top: number
  right: number
  bottom: number
  direction: SkiaTextDirection
}

export class TextBox {
  static fromLTRBD(
    left: number,
    top: number,
    right: number,
    bottom: number,
    direction: SkiaTextDirection,
  ) {
    return new TextBox(
      left,
      top,
      right,
      bottom,
      direction,
    )
  }
  public left: double
  public top: double
  public right: double
  public bottom: double
  public direction: SkiaTextDirection

  get start () {
    return (this.direction === Skia.TextDirection.LTR) 
      ? left 
      : right
  }

  get end () {
    return (this.direction === TextDirection.LTR) 
      ? this.right 
      : this.left
  }


  toRect (): Rect {
    return Rect.fromLTRB(
      left, 
      top, 
      right, 
      bottom
    )
  }

  eq (other: TextBox) {
    if (other === this) {
      return true
    }
    
    return (
      other instanceof TextBox &&
      other.left === this.left &&
      other.top === this.top &&
      other.right === this.right &&
      other.bottom === this.bottom &&
      other.direction === this.direction
    )
  }
}

enum TextAffinity {
  upstream,
  downstream,
}

class TextPosition {
  const TextPosition({
    required this.offset,
    this.affinity = TextAffinity.downstream,
  })  : assert(offset != null), // ignore: unnecessary_null_comparison
        assert(affinity != null); // ignore: unnecessary_null_comparison
  final int offset;
  final TextAffinity affinity;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is TextPosition &&
        other.offset == offset &&
        other.affinity == affinity;
  }

  @override
  int get hashCode => hashValues(offset, affinity);

  @override
  String toString() {
    return '$runtimeType(offset: $offset, affinity: $affinity)';
  }
}

class TextRange {
  const TextRange({
    required this.start,
    required this.end,
  })  : assert(start >= -1),
        assert(end >= -1);
  const TextRange.collapsed(int offset)
      : assert(offset >= -1),
        start = offset,
        end = offset;
  static const TextRange empty = TextRange(start: -1, end: -1);
  final int start;
  final int end;
  bool get isValid => start >= 0 && end >= 0;
  bool get isCollapsed => start == end;
  bool get isNormalized => end >= start;
  String textBefore(String text) {
    assert(isNormalized);
    return text.substring(0, start);
  }

  String textAfter(String text) {
    assert(isNormalized);
    return text.substring(end);
  }

  String textInside(String text) {
    assert(isNormalized);
    return text.substring(start, end);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    return other is TextRange && other.start == start && other.end == end;
  }

  @override
  int get hashCode => hashValues(
        start.hashCode,
        end.hashCode,
      );

  @override
  String toString() => 'TextRange(start: $start, end: $end)';
}

class ParagraphConstraints {
  const ParagraphConstraints({
    required this.width,
  }) : assert(width != null); // ignore: unnecessary_null_comparison
  final double width;

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is ParagraphConstraints && other.width == width;
  }

  @override
  int get hashCode => width.hashCode;

  @override
  String toString() => '$runtimeType(width: $width)';
}

enum BoxHeightStyle {
  tight,
  max,
  includeLineSpacingMiddle,
  includeLineSpacingTop,
  includeLineSpacingBottom,
  strut,
}

enum BoxWidthStyle {
  // Provide tight bounding boxes that fit widths to the runs of each line
  // independently.
  tight,
  max,
}

abstract class LineMetrics {
  factory LineMetrics({
    required bool hardBreak,
    required double ascent,
    required double descent,
    required double unscaledAscent,
    required double height,
    required double width,
    required double left,
    required double baseline,
    required int lineNumber,
  }) = engine.EngineLineMetrics;
  bool get hardBreak;
  double get ascent;
  double get descent;
  double get unscaledAscent;
  double get height;
  double get width;
  double get left;
  double get baseline;
  int get lineNumber;
}

abstract class Paragraph {
  double get width;
  double get height;
  double get longestLine;
  double get minIntrinsicWidth;
  double get maxIntrinsicWidth;
  double get alphabeticBaseline;
  double get ideographicBaseline;
  bool get didExceedMaxLines;
  void layout(ParagraphConstraints constraints);
  List<TextBox> getBoxesForRange(int start, int end,
      {BoxHeightStyle boxHeightStyle = BoxHeightStyle.tight,
      BoxWidthStyle boxWidthStyle = BoxWidthStyle.tight});
  TextPosition getPositionForOffset(Offset offset);
  TextRange getWordBoundary(TextPosition position);
  TextRange getLineBoundary(TextPosition position);
  List<TextBox> getBoxesForPlaceholders();
  List<LineMetrics> computeLineMetrics();
}

abstract class ParagraphBuilder {
  factory ParagraphBuilder(ParagraphStyle style) {
    if (engine.useCanvasKit) {
      return engine.CkParagraphBuilder(style);
    }
    return engine.CanvasParagraphBuilder(style as engine.EngineParagraphStyle);
  }
  void pushStyle(TextStyle style);
  void pop();
  void addText(String text);
  Paragraph build();
  int get placeholderCount;
  List<double> get placeholderScales;
  void addPlaceholder(
    double width,
    double height,
    PlaceholderAlignment alignment, {
    double scale = 1.0,
    double? baselineOffset,
    TextBaseline? baseline,
  });
}

Future<void> loadFontFromList(Uint8List list, {String? fontFamily}) {
  if (engine.useCanvasKit) {
    return engine.skiaFontCollection
        .loadFontFromList(list, fontFamily: fontFamily)
        .then((_) => engine.sendFontChangeMessage());
  } else {
    return _fontCollection!
        .loadFontFromList(list, fontFamily: fontFamily!)
        .then((_) => engine.sendFontChangeMessage());
  }
}


export type StrutStyleOptions = {
  fontFamily?: string | null
  fontFamilyFallback?: string[] | null
  fontSize?: number | null
  height?: number | null
  leadingDistribution?: TextLeadingDistribution | null
  leading?: number | null
  fontWeight?: FontWeight | null
  fontStyle?: FontStyle | null
  forceStrutHeight?: boolean | null
}

export class StrutStyle {
  constructor (options: StrutStyleOptions) {
    this.fontFamily = options.fontFamily
    this.fontFamilyFallback = options.fontFamilyFallback
    this.fontSize = options.fontSize
    this.height = options.height
    this.leadingDistribution = options.leadingDistribution
    this.leading = options.leading
    this.fontWeight = options.fontWeight
    this.fontStyle = options.fontStyle
    this.forceStrutHeight = options.forceStrutHeight
  }  

  fontFamily: string
  fontFamilyFallback: string
  fontSize: string
  height: string
  leading: string
  fontWeight: string
  fontStyle: string
  forceStrutHeight: string
  leadingDistribution: string

  eq (other: StrutStyle) {
    if (other === this) {
      return true
    }

    return (
      other instanceof StrutStyle &&
      other.fontFamily === this.fontFamily &&
      other.fontSize === this.fontSize &&
      other.height === this.height &&
      other.leading === this.leading &&
      other.leadingDistribution === this.leadingDistribution &&
      other.fontWeight === this.fontWeight &&
      other.fontStyle === this.fontStyle &&
      other.forceStrutHeight === this.forceStrutHeight &&
      listEquals<String>(other.fontFamilyFallback, fontFamilyFallback)
    )
  }
}

export function getEffectiveFontFamilies (
  fontFamily?: string | null,
  fontFamilyFallback?: string[] | null
): string[] {
  const fontFamilies: string[] = []

  if (fontFamily !== null) {
    fontFamilies.push(fontFamily)
  }

  if (
    fontFamilyFallback !== null &&
    !fontFamilyFallback.every((font: string) => fontFamily === font)
  ) {
    for (const font of fontFamilyFallback) {
      fontFamilies.push(font)
    }
}

  // TODO
  // fontFamilies.addAll(FontFallbackData.instance.globalFontFallbacks);
  return fontFamilies
}


export function toSkFontStyle (
  fontWeight: FontWeight, 
  fontStyle: FontStyle
) {
  const style: SkiaFontStyle = {}
  if (fontWeight !== null) {
    style.weight = toSkFontWeight(fontWeight)
  }
  if (fontStyle != null) {
    style.slant = toSkFontSlant(fontStyle);
  }
  return style;
}