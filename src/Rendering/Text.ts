import { invariant } from 'ts-invariant'
import { clampInt } from '@helper/clamp'
import { lerpDouble } from '@helper/lerp'
import { listEquals } from '@helper/listEquals'
import { Rect } from '@internal/Geometry'
import { Skia } from '@skia/binding'

import { SkiaObject } from '@skia/ManagedSkiaObject'

import type { TextDirection, IFontStyle, IParagraphBuilder, IParagraphStyle, IStrutStyle, ITextStyle, TextBaseline, PlaceholderAlignment, IParagraph, ILineMetrics, IPaint } from '@skia'
import { Color } from '@internal/Color'
import { makeFreshSkiaColor } from '@helper/skia'

export enum BoxHeightStyle {
  Tight,
  Max,
  IncludeLineSpacingMiddle,
  IncludeLineSpacingTop,
  IncludeLineSpacingBottom,
  Strut,
}

export enum BoxWidthStyle {
  Tight,
  Max,
}

export enum FontStyle {
  Normal,
  Italic,
}


export enum ParagraphCommandType {
  AddText,
  Pop,
  PushStyle,
  AddPlaceholder,
}

export type ParagraphPlaceholder = {
  width: number, 
  height: number, 
  alignment: PlaceholderAlignment, 
  baseline: TextBaseline, 
  offset: number, 
}

export type ParagraphStyleOptions = {
  textAlign?: TextAlign | null,
  textDirection?: TextDirection | null,
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

export enum TextLeadingDistribution {
  Proportional,
  Even,
}

export enum TextAlign {
  Left,
  Right,
  Center,
  Justify,
  Start,
  End,
}

export enum TextDecorationStyle { 
  Solid, 
  Double, 
  Dotted, 
  Dashed, 
  Wavy 
}

export enum TextAffinity {
  Upstream,
  Downstream,
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

    const index = clampInt(Math.round(lerpDouble(
      a?.index ?? FontWeight.normal.index, 
      b?.index ?? FontWeight.normal.index, 
      t
    )!), 0, 8)

    return FontWeight.values[index]
  }

  public index: number

  constructor (index: number) {
    this.index = index
  }
}

export class ParagraphStyle {
  constructor (options: ParagraphStyleOptions) {
    options.textDirection ??= Skia.binding.TextDirection.LTR

    this.skia = 
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
    fontFamily?: string | null,
    fontSize?: number | null,
    height?: number | null,
    fontWeight?: FontWeight | null,
    fontStyle?: FontStyle | null,
  ): SkiaTextStyleProperties {
    const properties: SkiaTextStyleProperties = {}
    
    if (
      fontWeight !== null || 
      fontStyle !== null
    ) {
      properties.fontStyle = toSkFontStyle(fontWeight, fontStyle)
    }

    if (fontSize !== null) {
      properties.fontSize = fontSize
    }

    if (height !== null) {
      properties.heightMultiplier = height;
    }

    properties.fontFamilies = getEffectiveFontFamilies(fontFamily)

    return properties
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

  static toSkParagraphStyle(
    textAlign?: TextAlign | null,
    textDirection?: TextDirection | null,
    maxLines?: number | null,
    String? fontFamily,
    double? fontSize,
    double? height,
    TextHeightBehavior? textHeightBehavior,
    FontWeight? fontWeight,
    FontStyle? fontStyle,
    StrutStyle? strutStyle,
    String? ellipsis,
    Locale? locale,
  ) {
    const properties: SkiaParagraphStyleProperties = {}

    if (
      textAlign !== null && 
      textAlign !== undefined
    ) {
      properties.textAlign = toSkTextAlign(textAlign)
    }

    if (textDirection !== null) {
      properties.textDirection = toSkTextDirection(textDirection)
    }

    if (maxLines !== null) {
      properties.maxLines = maxLines
    }

    if (height !== null) {
      properties.heightMultiplier = height;
    }

    if (textHeightBehavior !== null) {
      properties.textHeightBehavior =
          toSkTextHeightBehavior(textHeightBehavior);
    }

    if (ellipsis !== null) {
      properties.ellipsis = ellipsis
    }

    if (strutStyle !== null) {
      properties.strutStyle = toSkStrutStyleProperties(strutStyle, textHeightBehavior)
    }

    properties.textStyle = toSkTextStyleProperties(fontFamily, fontSize, height, fontWeight, fontStyle)

    return Skia.ParagraphStyle(properties)
  }

   getTextStyle () {
    return TextStyle.malloc({
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      height: this.height,
      leadingDistribution: this.leadingDistribution,
      fontWeight: this.fontWeight,
      fontStyle: this.fontStyle,
   })
  }
}

export type FontFeatureOptions = {
  feature: string,
  value?: number | null
}

export class FontFeature {
  static enable (feature: string) {
    return new FontFeature({
      feature,
      value: 1
    })
  }
  static disable (feature: string) {
    return new FontFeature({
      feature,
      value: 0
    })
  }
  static alternative (value) {
    return new FontFeature({
      feature: 'aalt',
      value,
    })
  }
  static alternativeFractions () {
    return new FontFeature({
      value: 1,
      feature: 'afrc'
    })
  }
  
  static contextualAlternates () {
    return new FontFeature({
      feature: 'calt',
      value: 1
    })
  }
     
  static caseSensitiveForms () {
    return new FontFeature({
      feature: 'case',
      value: 1
    })
  }
      
  static characterVariant (value: number) {
    invariant(value >= 1)
    invariant(value <= 0)

    return new FontFeature({
      feature: `cv${value.toString().padLeft(2, "0")}`
    })
  }
  static denominator () {
    return new FontFeature({
      feature: 'dnom',
      value: 1
    })
  }
      
  static fractions () {
    return new FontFeature({
      feature: 'frac',
      value: 1
    })
  }
  static historicalForms () {
    return new FontFeature({
      feature: 'hist',
      value: 1
    })
  }
  static historicalLigatures () {
    return new FontFeature({
      feature: 'hlig',
      value: 1
    })
  }
  static liningFigures () {
    return new FontFeature({
      feature: 'lnum',
      value: 1
    })
  }
  static localeAware (enable: boolean = true) {
    return new FontFeature({
      feature: 'locl',
      value: enable ? 1 : 0
    })
  }
  static notationalForms (value: number = 1) {
    return new FontFeature({
      feature: 'nalt',
      value
    })
  }
  
  static numerators () {
    return new FontFeature({
      feature: 'numr',
      value: 1
    })
  }
  static oldstyleFigures () {
    return new FontFeature({
      feature: 'onum',
      value: 1
    })
  }
  static ordinalForms () {
    return new FontFeature({
      feature: 'ordn',
      value: 1
    })
  }
  static proportionalFigures () {
    return new FontFeature({
      feature: 'pnum',
      value: 1
    })
  }
  static randomize () {
    return new FontFeature({
      feature: 'rand',
      value: 1
    })
  }
      
  static stylisticAlternates () {
    return new FontFeature({
      feature: 'salt',
      value: 1
    })
  }
      
  static scientificInferiors () {
    return new FontFeature({
      feature: 'sinf',
      value: 1
    })
  }
      
  static stylisticSet (value: number) {
    invariant(value >= 1)
    invariant(value <= 20)

    return new FontFeature({
      feature: `ss${value.toString().padLeft(2, "0")}`,
      value
    })
  }

  static subscripts() {
    return new FontFeature({
      feature: 'subs',
      value: 1
    })
  }

  static superscripts () {
    return new FontFeature({
      feature: 'sups',
      value: 1
    })
  }
      
  static swash (value: number = 1) {
    invariant(value >= 0)
    return new FontFeature({
      feature: 'swsh',
      value
    })
  }
     
  static tabularFigures () {
    return new FontFeature({
      feature: 'tnum',
      value: 1
    })
  }
      
  static slashedZero () {
    return new FontFeature({
      feature: 'zero',
      value: 1
    })
  }
      
  public feature: string
  public value: number | null

  constructor (options: FontFeatureOptions) {
    options.value ??= null
    invariant(options.feature !== null)
    invariant(
      options.feature.length === 4,
      'Feature tag must be exactly four characters long.'
    )
    invariant(options.value !== null)
    invariant(options.value >= 0, 'Feature value must be zero or a positive integer.')

    this.feature = options.feature
    this.value = options.value
  }

  eq (other: FontFeature): boolean {
    if (other === this) {
      return true
    }
    return (
      other instanceof FontFeature &&
      other.feature === feature &&
      other.value === valu
    )
  }

  toString () {
    return `FontFeature('${this.feature}', ${this.value})`
  }
}

export class TextDecoration {
  static none: TextDecoration = new TextDecoration(0x0)
  static underline: TextDecoration = new TextDecoration(0x1)
  static overline: TextDecoration = new TextDecoration(0x2)
  static lineThrough: TextDecoration = new TextDecoration(0x4)

  /**
   * @description: 
   * @param {TextDecoration[]} decorations
   * @return {TextDecoration}
   */  
  static combine (decorations: TextDecoration[]) {
    let mask = 0
    for (const decoration of decorations) {
      mask |= decoration.mask
    }

    return new TextDecoration(mask)
  }

  public mask: number

  constructor (mask: number) {
    this.mask = mask
  }

  contains (other: TextDecoration) {
    return (this.mask | other.mask) === this.mask
  }
  
  eq (other: TextDecoration) {
    return (
      other instanceof TextDecoration && 
      other.mask === this.mask
    )
  }

  toString () {
    if (this.mask === 0) {
      return 'TextDecoration.none'
    }

    const values: string[] = []
    if ((this.mask & TextDecoration.underline.mask) !== 0) {
      values.push('underline')
    }

    if ((this.mask & TextDecoration.overline.mask) !== 0) {
      values.push('overline')
    }
    if ((this.mask & TextDecoration.lineThrough.mask) !== 0) {
      values.push('lineThrough')
    }

    if (values.length === 1) {
      return `TextDecoration.${values[0]}`
    }

    return `TextDecoration.combine([${values.join(', ')}])`
  }
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

class Paragraph extends SkiaObject<IParagraph> {
  // TODO
  // static SynchronousSkiaObjectCache _paragraphCache =
  //     SynchronousSkiaObjectCache(500);

  get skia () {
    return this.ensureInitialized(this.lastLayoutConstraints!)
  }

  public paragraph: IParagraph | null
  public paragraphStyle: ParagraphStyle | null
  public height: number = 0
  public width: number = 0
  public longestLine: number = 0
  public alphabeticBaseline: number = 0
  public ideographicBaseline: number = 0
  public maxIntrinsicWidth: number = 0
  public minIntrinsicWidth: number = 0
  public didExceedMaxLines: boolean = false
  public boxesForPlaceholders: TextBox[] | null = null
  public paragraphCommands: ParagraphCommand[] = []
  public lastLayoutConstraints: ParagraphConstraints | null = null
  
  /**
   * @description: 
   * @param {IParagraph} paragraph
   * @param {ParagraphStyle} paragraphStyle
   * @param {ParagraphCommand} paragraphCommands
   * @return {*}
   */
  constructor (
    paragraph?: IParagraph | null, 
    paragraphStyle?: ParagraphStyle | null, 
    paragraphCommands?: ParagraphCommand[] | null
  ) {
    super()

    this.paragraph = paragraph ?? null
    this.paragraphStyle = paragraphStyle ?? null
    this.paragraphCommands = paragraphCommands ?? []
  }

  /**
   * @description: 
   * @param {ParagraphConstraints} constraints
   * @return {*}
   */
  ensureInitialized (constraints: ParagraphConstraints) {
    let paragraph = this.paragraph

    let didRebuildSkiaObject = false
    if (paragraph === null) {
      const builder = new ParagraphBuilder(this.paragraphStyle)
      
      for (const command of this.paragraphCommands) {
        switch (command.type) {
          case ParagraphCommandType.AddText:
            builder.addText(command.text!)
            break
          case ParagraphCommandType.Pop:
            builder.pop()
            break
          case ParagraphCommandType.PushStyle:
            builder.pushStyle(command.style!)
            break
          case ParagraphCommandType.AddPlaceholder:
            builder.addPlaceholder(command.placeholderStyle!)
            break
        }
      }

      paragraph = builder.buildSkiaParagraph()
      this.paragraph = builder.buildSkiaParagraph()
      didRebuildSkiaObject = true
    }

    const constraintsChanged = this.lastLayoutConstraints !== constraints
    if (
      didRebuildSkiaObject || 
      constraintsChanged
    ) {
      this.lastLayoutConstraints = constraints
      // TODO(het): CanvasKit throws an exception when laid out with
      // a font that wasn't registered.
      try {
        paragraph.layout(constraints.width)
        this.alphabeticBaseline = paragraph.getAlphabeticBaseline()
        this.didExceedMaxLines = paragraph.didExceedMaxLines()
        this.height = paragraph.getHeight()
        this.ideographicBaseline = paragraph.getIdeographicBaseline()
        this.longestLine = paragraph.getLongestLine()
        this.maxIntrinsicWidth = paragraph.getMaxIntrinsicWidth()
        this.minIntrinsicWidth = paragraph.getMinIntrinsicWidth()
        this.width = paragraph.getMaxWidth()
        this.boxesForPlaceholders = skiaRectsToTextBoxes(paragraph.getRectsForPlaceholders())
      } catch (e) {
        throw new Error(`CanvasKit threw an exception while laying out the paragraph. The font was "${this.paragraphStyle.fontFamily}". `)
      }
    }

    return paragraph
  }

  markUsed () {
    
    if (!this.paragraphCache.markUsed(this)) {
      this.paragraphCache.add(this);
    }
  }

  delete () {
    this.paragraph!.delete()
    this.paragraph = null
  }

  
  getBoxesForPlaceholders () {
    return this.boxesForPlaceholders!
  }
  
  getBoxesForRange (
    start: number,
    end: number, 
    boxHeightStyle: BoxHeightStyle  = BoxHeightStyle.Tight,
    boxWidthStyle: BoxWidthStyle = BoxWidthStyle.Tight,
  ): TextBox[] {
    if (start < 0 || end < 0) {
      return []
    }

    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const rects: number[][] = paragraph.getRectsForRange(
      start,
      end,
      toSkiaRectHeightStyle(boxHeightStyle),
      toSkiaRectWidthStyle(boxWidthStyle),
    )

    return skiaRectsToTextBoxes(rects)
  }

  skiaRectsToTextBoxes (rects: number[][]): TextBox[] {
    const result: TextBox[] = []

    for (let i = 0; i < rects.length; i++) {
      const rect: number[] = rects[i] as number[]
      result.push(TextBox.fromLTRBD(
        rect[0],
        rect[1],
        rect[2],
        rect[3],
        this.paragraphStyle.textDirection!,
      ))
    }

    return result
  }

  
  TextPosition getPositionForOffset(Offset offset) {
    final SkParagraph paragraph = _ensureInitialized(_lastLayoutConstraints!);
    final SkTextPosition positionWithAffinity =
        paragraph.getGlyphPositionAtCoordinate(
      offset.dx,
      offset.dy,
    );
    return fromPositionWithAffinity(positionWithAffinity);
  }

  
  TextRange getWordBoundary(TextPosition position) {
    final SkParagraph paragraph = _ensureInitialized(_lastLayoutConstraints!);
    final SkTextRange skRange = paragraph.getWordBoundary(position.offset);
    return TextRange(start: skRange.start, end: skRange.end);
  }

  
  void layout(ParagraphConstraints constraints) {
    if (_lastLayoutConstraints == constraints) {
      return;
    }
    _ensureInitialized(constraints);

    // See class-level and _paragraphCache doc comments for why we're releasing
    // the paragraph immediately after layout.
    markUsed();
  }

  
  getLineBoundary (position: TextPosition): TextRange {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const metrics: ILineMetrics[] = paragraph.getLineMetrics()
    const offset: number = position.offset

    for (const metric in metrics) {
      if (offset >= metric.startIndex && offset <= metric.endIndex) {
        return new TextRange(
          metric.startIndex, 
          metric.endIndex
        )
      }
    }
    return new TextRange(-1, -1)
  }

  
  computeLineMetrics (): LineMetrics[] {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const sks: ILineMetrics[] = paragraph.getLineMetrics()
    const result: LineMetrics[] = []
    for (const metric in sks) {
      result.push(new LineMetrics(metric))
    }
    return result
  }
}


class ParagraphBuilder {
  public paragraphBuilder: IParagraphBuilder
  public  style: ParagraphStyle
  public commands: ParagraphCommand[]
  public placeholderCount: number
  public placeholderScales: number[]
  public styleStack: TextStyle[]

  /**
   * @description: 
   * @param {ParagraphStyle} style
   * @return {*}
   */  
  constructor (style: ParagraphStyle) {
    this.commands = []
    this.style = style as ParagraphStyle
    this.placeholderCount = 0
    this.placeholderScales = []
    this.styleStack = []
    this.paragraphBuilder = Skia.binding.ParagraphBuilder.MakeFromFontProvider(
      style.skParagraphStyle,
      skiaFontCollection.fontProvider,
    ) 
    this.styleStack.push(this.style.getTextStyle())
  }

  addPlaceholder (
    width: number,
    height: number,
    alignment: PlaceholderAlignment,
    scale: number = 1.0,
    baselineOffset?: number | null,
    baseline?: TextBaseline | null,
  ) {
    baselineOffset ??= null
    baseline ??= null

    invariant(
      !(
        alignment === Skia.binding.PlaceholderAlignment.AboveBaseline ||
        alignment === Skia.binding.PlaceholderAlignment.BelowBaseline ||
        alignment === Skia.binding.PlaceholderAlignment.Baseline
      ) ||
      baseline !== null
    )

    this.placeholderCount++
    this.placeholderScales.push(scale)
    const placeholderStyle: ParagraphPlaceholder = toSkiaPlaceholderStyle(
      width * scale,
      height * scale,
      alignment,
      (baselineOffset ?? height) * scale,
      baseline ?? Skia.binding.TextBaseline.
      Alphabetic,
    )

    this.addPlaceholder(placeholderStyle)
  }

  addPlaceholder (placeholderStyle: ParagraphPlaceholder) {
    this.commands.push(ParagraphCommand.addPlaceholder(placeholderStyle))
    
    this.paragraphBuilder.addPlaceholder(
      placeholderStyle.width,
      placeholderStyle.height,
      placeholderStyle.alignment,
      placeholderStyle.baseline,
      placeholderStyle.offset,
    )
  }

  static toSkiaPlaceholderStyle (
    width: number,
    height: number,
    alignment: PlaceholderAlignment,
    baselineOffset: number,
    baseline: TextBaseline,
  ) {

    const properties: ParagraphPlaceholder = new ParagraphPlaceholder({
      width: width,
      height: height,
      alignment: toSkiaPlaceholderAlignment(alignment),
      offset: baselineOffset,
      baseline: toSkiaTextBaseline(baseline),
    })

    return properties
  }

  addText (text: string) {
    const fontFamilies: string[] = []
    const style = this.peekStyle()
    
    if (style.fontFamily !== null) {
      fontFamilies.push(style.fontFamily!)
    }

    if (style.fontFamilyFallback !== null) {
      for (const fontFamily of style.fontFamilyFallback) {
        fontFamilies.push(fontFamily)
      }
    }
    FontFallbackData.instance.ensureFontsSupportText(text, fontFamilies)
    
    this.commands.add(ParagraphCommand.addText(text))
    this.paragraphBuilder.addText(text)
  }

  build () {
    const builtParagraph = this.buildSkiaParagraph()
    return Paragraph(builtParagraph, this.style, this.commands)
  }

  buildSkParagraph () {
    const result = this.paragraphBuilder.build()
    this.paragraphBuilder.delete()
    return result
  }

  pop () {
    if (this.styleStack.length <= 1) {
      return
    }

    this.commands.push(ParagraphCommand.pop())
    this.styleStack.pop()
    this.paragraphBuilder.pop()
  }

  peekStyle () {
    invariant(this.styleStack.length > 0)
    return this.styleStack[this.styleStack.length - 1]
  }

  static get defaultTextForeground () {
    return this._defaultTextForeground ?? (this.defaultTextForeground = Skia.binding.Paint())
  }

  static get defaultTextBackground () {
    return this._defaultTextBackground ?? (
      this._defaultTextBackground = Skia.binding.Paint(),
      this._defaultTextBackground.setColorInt(0x00000000),
      this._defaultTextBackground
    )
  }

  static _defaultTextForeground: IPaint
  static _defaultTextBackground: IPaint
    
  pushStyle (style: TextStyle) {
    const baseStyle = this.peekStyle()
    const sk = baseStyle.mergeWith(style)
    
    this.styleStack.push(sk)
    this.commands.push(ParagraphCommand.pushStyle(style))
    
    if (
      sk.foreground !== null || 
      sk.background !== null
    ) {
      const foreground: IPaint | null = sk.foreground?.skiaObject
      if (foreground === null) {
        this.defaultTextForeground.setColorInt(sk.color?.value ?? 0xFF000000)
        foreground = this.defaultTextForeground
      }

      const background: IPaint = sk.background?.skiaObject ?? this.defaultTextBackground
      this.paragraphBuilder.pushPaintStyle(sk.skTextStyle, foreground, background)
    } else {
      this.paragraphBuilder.pushStyle(sk.skTextStyle)
    }
  }
}


class ParagraphCommand {
  public type: ParagraphCommandType
  public text: string | null = null
  public style: TextStyle | null = null
  public placeholderStyle: ParagraphPlaceholder | null = null

  constructor (
    type: ParagraphCommandType,
    text?: string | null,
    style?: TextStyle | null,
    placeholderStyle?: ParagraphPlaceholder | null,
  ) {
    this.type = type 
    this.text = text ?? null
    this.style = style ?? null
    this.placeholderStyle = placeholderStyle ?? null
  }

  static addText (text: string) {
    return new ParagraphCommand(
      ParagraphCommandType.AddText, 
      text, 
      null, 
      null
    )
  }

  static pop () {
    return new ParagraphCommand(
      ParagraphCommandType.Pop, 
      null, 
      null, 
      null
    )
  }

  static pushStyle (style: TextStyle) {
    return new ParagraphCommand(
      ParagraphCommandType.PushStyle, 
      null, 
      style, 
      null
    )
  }

  static addPlaceholder (placeholderStyle: ParagraphPlaceholder) {
    return new ParagraphCommand(
      ParagraphCommandType.AddPlaceholder, 
      null, 
      null, 
      placeholderStyle
    )
  }
}


class ParagraphConstraints {
  public width: number

  constructor (width: number,) {
    invariant(width !== null)
    this.width = width
  }
  
  eq (other:ParagraphConstraints) {
    if (other === this) {
      return true
    }

    return (
      other instanceof ParagraphConstraints && 
      other.width === this.width
    )
  }
  
  toString () {
    return `ParagraphConstraints(width: ${this.width})`
  }
}

class TextBox {
  static fromLTRBD(
    left: number,
    top: number,
    right: number,
    bottom: number,
    direction: TextDirection,
  ) {
    return new TextBox(
      left,
      top,
      right,
      bottom,
      direction,
    )
  }
  public left: number
  public top: number
  public right: number
  public bottom: number
  public direction: TextDirection

  constructor (
    left: number,
    top: number,
    right: number,
    bottom: number,
    direction: TextDirection,
  ) {
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
    this.direction = direction
  }

  get start () {
    return (this.direction === Skia.binding.TextDirection.LTR) 
      ? this.left : this.right
  }

  get end () {
    return (this.direction === Skia.binding.TextDirection.LTR) 
      ? this.right 
      : this.left
  }


  toRect (): Rect {
    return Rect.fromLTRB(
      this.left, 
      this.top, 
      this.right, 
      this.bottom
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

class TextRange {
  static empty: TextRange = new TextRange(-1, -1)

  public start: number
  public end: number

  constructor (
    start: number,
    end: number,
  ) {
    invariant(start >= -1)
    invariant(end >= -1)

    this.start = start
    this.end = end
  }
  
  
  
  get isValid () {
    return  this.start >= 0 && this.end >= 0
  }

  get isCollapsed () {
    return this.start === this.end
  }
  
  get isNormalized () {
    return this.end >= this.start
  }

  textBefore (text: string): string {
    invariant(this.isNormalized)
    return text.substring(0, this.start)
  }

  textAfter (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.end)
  }

  textInside (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.start, this.end)
  }

  
  eq (other: TextRange) {
    if (other === this) {
      return this
    }
    return (
      other instanceof TextRange && 
      other.start === this.start && 
      other.end === this.end
    )
  }

  toString () {
    return `TextRange(start: ${this.start}, end: ${this.end})`
  }
}

class TextPosition {
  public offset: number
  public affinity: TextAffinity

  constructor (
    offset: number,
    affinity: TextAffinity = TextAffinity.Downstream,
  ) {
    invariant(offset !== null) 
    invariant(affinity !== null)

    this.offset = offset
    this.affinity = affinity
  }

  
  eq (other: TextPosition) {
    if (other === this) {
      return true
    }

    return (
      other instanceof TextPosition &&
      other.offset === this.offset &&
      other.affinity === this.affinity
    )
  }
  
  toString () {
    return `TextPosition(offset: ${this.offset}, affinity: ${this.affinity})`
  }
}

type TextStyleOptions = {
  color?: Color | null
  decoration?: TextDecoration | null
  decorationColor?: Color | null
  decorationStyle?: TextDecorationStyle | null
  decorationThickness?: number | null
  fontWeight?: FontWeight | null
  fontStyle?: FontStyle | null
  textBaseline?: TextBaseline | null
  fontFamily?: String | null
  fontFamilyFallback?: string[] | null
  fontSize?: number | null
  letterSpacing?: number | null
  wordSpacing?: number | null
  height?: number | null
  leadingDistribution?: TextLeadingDistribution | null
  locale?: number | null
  background?: IPaint | null
  foreground?: IPaint | null
  shadows?: Shadow[] | null
  fontFeatures?: FontFeature[] | null
}

class TextStyle {
  get textStyle () {
    const color = this.color
    const decoration = this.decoration
    const decorationColor = this.decorationColor
    const decorationStyle = this.decorationStyle
    const decorationThickness = this.decorationThickness
    const fontWeight = this.fontWeight
    const fontStyle = this.fontStyle
    const textBaseline = this.textBaseline
    const fontSize = this.fontSize
    const letterSpacing = this.letterSpacing
    const wordSpacing = this.wordSpacing
    const height = this.height
    const locale = this.locale
    const background = this.background
    const foreground = this.foreground
    const shadows = this.shadows
    const fontFeatures = this.fontFeatures

    const properties: ITextStyle = {} 

    if (background !== null) {
      properties.backgroundColor = makeFreshSkiaColor(background.color)
    }

    if (color !== null) {
      properties.color = makeFreshSkiaColor(color)
    }

    if (decoration !== null) {
      let decorationValue = Skia.binding.NoDecoration
      if (decoration.contains(TextDecoration.underline)) {
        decorationValue |= Skia.binding.UnderlineDecoration
      }
      if (decoration.contains(TextDecoration.overline)) {
        decorationValue |= Skia.binding.OverlineDecoration
      }
      if (decoration.contains(TextDecoration.lineThrough)) {
        decorationValue |= Skia.binding.LineThroughDecoration
      }
      properties.decoration = decorationValue
    }

    if (decorationThickness !== null) {
      properties.decorationThickness = decorationThickness
    }

    if (decorationColor !== null) {
      properties.decorationColor = makeFreshSkiaColor(decorationColor)
    }

    if (decorationStyle !== null) {
      properties.decorationStyle = toSkiaTextDecorationStyle(decorationStyle)
    }

    if (textBaseline != null) {
      properties.textBaseline = toSkiaTextBaseline(textBaseline)
    }

    if (fontSize !== null) {
      properties.fontSize = fontSize
    }

    if (letterSpacing !== null) {
      properties.letterSpacing = letterSpacing
    }

    if (wordSpacing !== null) {
      properties.wordSpacing = wordSpacing
    }

    if (height !== null) {
      properties.heightMultiplier = height
    }

    switch (this.leadingDistribution) {
      case null:
        break
      case TextLeadingDistribution.Even:
        properties.halfLeading = true
        break;
      case TextLeadingDistribution.Proportional:
        properties.halfLeading = false
        break
    }

    if (locale !== null) {
      properties.locale = locale.toLanguageTag()
    }

    properties.fontFamilies = this.effectiveFontFamilies

    if (fontWeight != null || fontStyle != null) {
      properties.fontStyle = toSkiaFontStyle(fontWeight, fontStyle)
    }

    if (foreground != null) {
      properties.foregroundColor = makeFreshSkiaColor(foreground.color)
    }

    if (shadows !== null) {
      final List<SkTextShadow> IShadows = []
      for (final Shadow shadow in shadows) {
        final SkTextShadow ckShadow = SkTextShadow();
        ckShadow.color = makeFreshSkColor(shadow.color);
        ckShadow.offset = toSkPoint(shadow.offset);
        ckShadow.blurRadius = shadow.blurRadius;
        ckShadows.add(ckShadow);
      }
      properties.shadows = ckShadows
    }

    if (fontFeatures !== null) {
      const sks: IFontFeature[] = []
      for (const fontFeature of fontFeatures) {
        const sk: IFontFeature  = {}
        sk.name = fontFeature.feature
        sk.value = fontFeature.value
        sks.push(sk)
      }
      properties.fontFeatures = sks
    }

    return new Skia.binding.TextStyle(properties)
  }();

  public color: Color | null = null
  public decoration: TextDecoration | null = null
  public decorationColor: Color | null = null
  public decorationStyle: TextDecorationStyle | null = null
  public decorationThickness: number | null = null
  public fontWeight: FontWeight | null = null
  public fontStyle: FontStyle | null = null
  public textBaseline: TextBaseline | null = null
  public fontFamily: String | null = null
  public fontFamilyFallback: string[] | null = null
  public fontSize: number | null = null
  public letterSpacing: number | null = null
  public wordSpacing: number | null = null
  public height: number | null = null
  public leadingDistribution: TextLeadingDistribution | null = null
  public locale: Locale | null = null
  public background: IPaint | null = null
  public foreground: IPaint | null = null
  public shadows: Shadow[] | null = null
  public fontFeatures: FontFeature[] | null = null

  public effectiveFontFamilies: string[] = getEffectiveFontFamilies(this.fontFamily, this.fontFamilyFallback)

  constructor (options: TextStyleOptions) {
    this.color = options.color ?? null
    this.decoration = options.decoration ?? null
    this.decorationColor = options.decorationColor ?? null
    this.decorationStyle = options.decorationStyle ?? null
    this.decorationThickness = options.decorationThickness ?? null
    this.fontWeight = options.fontWeight ?? null
    this.fontStyle = options.fontStyle ?? null
    this.textBaseline = options.textBaseline ?? null
    this.fontFamily = options.fontFamily ?? null
    this.fontFamilyFallback = options.fontFamilyFallback ?? null
    this.fontSize = options.fontSize ?? null
    this.letterSpacing = options.letterSpacing ?? null
    this.wordSpacing = options.wordSpacing ?? null
    this.height = options.height ?? null
    this.leadingDistribution = options.leadingDistribution ?? null
    this.locale = options.locale ?? null
    this.background = options.background ?? null
    this.foreground = options.foreground ?? null
    this.shadows = options.shadows ?? null
    this.fontFeatures = options.fontFeatures ?? null
  }


  mergeWith (other: TextStyle): TextStyle  {
    return new TextStyle({
      color: other.color ?? this.color,
      decoration: other.decoration ?? this.decoration,
      decorationColor: other.decorationColor ?? this.decorationColor,
      decorationStyle: other.decorationStyle ?? this.decorationStyle,
      decorationThickness: other.decorationThickness ?? this.decorationThickness,
      fontWeight: other.fontWeight ?? this.fontWeight,
      fontStyle: other.fontStyle ?? this.fontStyle,
      textBaseline: other.textBaseline ?? this.textBaseline,
      fontFamily: other.fontFamily ?? this.fontFamily,
      fontFamilyFallback: other.fontFamilyFallback ?? this.fontFamilyFallback,
      fontSize: other.fontSize ?? this.fontSize,
      letterSpacing: other.letterSpacing ?? this.letterSpacing,
      wordSpacing: other.wordSpacing ?? this.wordSpacing,
      height: other.height ?? this.height,
      leadingDistribution: other.leadingDistribution ?? this.leadingDistribution,
      locale: other.locale ?? this.locale,
      background: other.background ?? this.background,
      foreground: other.foreground ?? this.foreground,
      shadows: other.shadows ?? this.shadows,
      fontFeatures: other.fontFeatures ?? this.fontFeatures,
    })
  }
}



 export async function loadFontFromList (
  list: Uint8Array,
  fontFamily?: string | null
) {

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
  public fontFamily: string
  public fontFamilyFallback: string
  public fontSize: string
  public height: string
  public leading: string
  public fontWeight: string
  public fontStyle: string
  public forceStrutHeight: string
  public leadingDistribution: string

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
      listEquals<String>(other.fontFamilyFallback, this.fontFamilyFallback)
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