import { invariant } from 'ts-invariant'
import { listEquals } from '@helper/listEquals'
import { Offset, Rect } from '@internal/Geometry'
import { Skia } from '@skia/binding'
import { makeFreshSkiaColor, toSkiaPoint, toSkiaTextHeightBehavior } from '@helper/skia'

import { fromPositionWithAffinity } from '@helper/text'

import type { TextDirection, IFontStyle, IParagraphBuilder, IParagraphStyle, IStrutStyle, ITextStyle, TextBaseline, PlaceholderAlignment, IParagraph, ILineMetrics, IPaint, TextAlign, FontWeight, FontStyle, DecorationStyle, FontSlant, TextShadow, ITextShadow, TextFontFeatures, ITextFontFeatures, Affinity, RectHeightStyle } from '@skia'
import type { Color } from '@internal/Color'
import type { Shadow } from './Shadow'
import type { Paint } from './Paint'

export enum BoxWidthStyle {
  Tight,
  Max,
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

export enum TextLeadingDistribution {
  Proportional,
  Even,
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

export type ParagraphStyleOptions = {
  textAlign?: TextAlign | null,
  textDirection?: TextDirection | null,
  maxLines?: number | null,
  fontFamily?: string | null,
  fontSize?: number | null,
  height?: number | null,
  textHeightBehavior?: TextHeightBehavior | null,
  fontWeight?: FontWeight | null,
  fontStyle?: FontSlant | null,
  strutStyle?: StrutStyle | null,
  ellipsis?: string | null,
  // TODO
  // locale?: Locale | null,
}

export class ParagraphStyle {
  /**
   * @description: 
   * @param {ParagraphStyleOptions} options
   * @return {*}
   */  
  constructor (options: ParagraphStyleOptions) {
    options.textDirection ??= Skia.binding.TextDirection.LTR

    this.skia = ParagraphStyle.toSkiaParagraphStyle(
      options.textAlign,
      options.textDirection,
      options.maxLines,
      options.fontFamily,
      options.fontSize,
      options.height,
      options.textHeightBehavior,
      options.fontWeight,
      options.fontStyle,
      options.strutStyle,
      options.ellipsis,
    )
    this.textDirection = options.textDirection ?? null
    this.fontFamily = options.fontFamily ?? null
    this.fontSize = options.fontSize ?? null
    this.height = options.height ?? null
    this.fontWeight = options.fontWeight ?? null
    this.fontStyle = options.fontStyle ?? null
    this.leadingDistribution = options.textHeightBehavior?.leadingDistribution ?? null 
      
  } 

  public skia: IParagraphStyle | null
  public textDirection: TextDirection | null
  public fontFamily: string | null
  public fontSize: number | null
  public height: number | null
  public fontWeight: FontWeight | null
  public fontStyle: FontSlant | null
  public leadingDistribution: TextLeadingDistribution | null

  
  /**
   * @description: 
   * @param {string} fontFamily
   * @param {number} fontSize
   * @param {number} height
   * @param {FontWeight} fontWeight
   * @param {FontSlant} fontStyle
   * @return {*}
   */
  static toSkiaTextStyleProperties(
    fontFamily: string | null = null,
    fontSize: number | null = null,
    height: number | null = null,
    fontWeight: FontWeight | null = null,
    fontStyle: FontSlant | null = null,
  ): ITextStyle {
    const properties: ITextStyle = {}
    
    if (
      fontWeight !== null || 
      fontStyle !== null
    ) {
      properties.fontStyle = toSkiaFontStyle(fontWeight, fontStyle)
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

  /**
   * @description: 
   * @param {StrutStyle} style
   * @param {TextHeightBehavior} paragraphHeightBehavior
   * @return {*}
   */
  static toSkiaStrutStyleProperties(
    style: StrutStyle, 
    paragraphHeightBehavior?: TextHeightBehavior | null
  ): IStrutStyle {
    const properties: IStrutStyle = {
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
      properties.fontStyle = toSkiaFontStyle(
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

  /**
   * @description: 
   * @param {TextAlign} textAlign
   * @param {TextDirection} textDirection
   * @param {number} maxLines
   * @param {string} fontFamily
   * @param {number} fontSize
   * @param {number} height
   * @param {TextHeightBehavior} textHeightBehavior
   * @param {FontWeight} fontWeight
   * @param {FontSlant} fontStyle
   * @param {StrutStyle} strutStyle
   * @param {string} ellipsis
   * @param {Locale} locale
   * @return {*}
   */
  static toSkiaParagraphStyle(
    textAlign: TextAlign | null = null,
    textDirection: TextDirection | null = null,
    maxLines: number | null = null,
    fontFamily: string | null = null,
    fontSize: number | null = null,
    height: number | null = null,
    textHeightBehavior: TextHeightBehavior | null = null,
    fontWeight: FontWeight | null = null,
    fontStyle: FontSlant | null = null,
    strutStyle: StrutStyle | null = null,
    ellipsis: string | null = null,
    // locale: Locale? ,
  ) {
    const properties: IParagraphStyle = {}

    if (
      textAlign !== null && 
      textAlign !== undefined
    ) {
      properties.textAlign = textAlign
    }

    if (textDirection !== null) {
      properties.textDirection = textDirection
    }

    if (maxLines !== null) {
      properties.maxLines = maxLines
    }

    if (height !== null) {
      properties.heightMultiplier = height;
    }

    if (textHeightBehavior !== null) {
      properties.textHeightBehavior = toSkiaTextHeightBehavior(textHeightBehavior)
    }

    if (ellipsis !== null) {
      properties.ellipsis = ellipsis
    }

    if (strutStyle !== null) {
      properties.strutStyle = ParagraphStyle.toSkiaStrutStyleProperties(
        strutStyle, 
        textHeightBehavior
      )
    }

    properties.textStyle = ParagraphStyle.toSkiaTextStyleProperties(
      fontFamily, 
      fontSize, 
      height, 
      fontWeight, 
      fontStyle
    )

    return new Skia.binding.ParagraphStyle(properties)
  }

   /**
    * @description: 
    * @return {*}
    */
   getTextStyle () {
    return new TextStyle({
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
  /**
   * @description: 
   * @param {string} feature
   * @return {*}
   */
  static enable (feature: string) {
    return new FontFeature({
      feature,
      value: 1
    })
  }
  /**
   * @description: 
   * @param {string} feature
   * @return {*}
   */
  static disable (feature: string) {
    return new FontFeature({
      feature,
      value: 0
    })
  }
  /**
   * @description: 
   * @param {*} value
   * @return {*}
   */
  static alternative (value) {
    return new FontFeature({
      feature: 'aalt',
      value,
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static alternativeFractions () {
    return new FontFeature({
      value: 1,
      feature: 'afrc'
    })
  }
  
  /**
   * @description: 
   * @return {*}
   */
  static contextualAlternates () {
    return new FontFeature({
      feature: 'calt',
      value: 1
    })
  }
     
  /**
   * @description: 
   * @return {*}
   */
  static caseSensitiveForms () {
    return new FontFeature({
      feature: 'case',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @param {number} value
   * @return {*}
   */
  static characterVariant (value: number) {
    invariant(value >= 1)
    invariant(value <= 0)

    return new FontFeature({
      feature: `cv00${value}`
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static denominator () {
    return new FontFeature({
      feature: 'dnom',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @return {*}
   */
  static fractions () {
    return new FontFeature({
      feature: 'frac',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static historicalForms () {
    return new FontFeature({
      feature: 'hist',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static historicalLigatures () {
    return new FontFeature({
      feature: 'hlig',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static liningFigures () {
    return new FontFeature({
      feature: 'lnum',
      value: 1
    })
  }
  /**
   * @description: 
   * @param {boolean} enable
   * @return {*}
   */
  static localeAware (enable: boolean = true) {
    return new FontFeature({
      feature: 'locl',
      value: enable ? 1 : 0
    })
  }
  /**
   * @description: 
   * @param {number} value
   * @return {*}
   */
  static notationalForms (value: number = 1) {
    return new FontFeature({
      feature: 'nalt',
      value
    })
  }
  
  /**
   * @description: 
   * @return {*}
   */
  static numerators () {
    return new FontFeature({
      feature: 'numr',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static oldstyleFigures () {
    return new FontFeature({
      feature: 'onum',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static ordinalForms () {
    return new FontFeature({
      feature: 'ordn',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static proportionalFigures () {
    return new FontFeature({
      feature: 'pnum',
      value: 1
    })
  }
  /**
   * @description: 
   * @return {*}
   */
  static randomize () {
    return new FontFeature({
      feature: 'rand',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @return {*}
   */
  static stylisticAlternates () {
    return new FontFeature({
      feature: 'salt',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @return {*}
   */
  static scientificInferiors () {
    return new FontFeature({
      feature: 'sinf',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @param {number} value
   * @return {*}
   */
  static stylisticSet (value: number) {
    invariant(value >= 1)
    invariant(value <= 20)

    return new FontFeature({
      feature: `ss00${value}`,
      value
    })
  }

  /**
   * @description: 
   * @return {*}
   */
  static subscripts() {
    return new FontFeature({
      feature: 'subs',
      value: 1
    })
  }

  /**
   * @description: 
   * @return {*}
   */
  static superscripts () {
    return new FontFeature({
      feature: 'sups',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @param {number} value
   * @return {*}
   */
  static swash (value: number = 1) {
    invariant(value >= 0)
    return new FontFeature({
      feature: 'swsh',
      value
    })
  }
     
  /**
   * @description: 
   * @return {*}
   */
  static tabularFigures () {
    return new FontFeature({
      feature: 'tnum',
      value: 1
    })
  }
      
  /**
   * @description: 
   * @return {*}
   */
  static slashedZero () {
    return new FontFeature({
      feature: 'zero',
      value: 1
    })
  }
      
  public feature: string
  public value: number | null

  /**
   * @description: 
   * @param {FontFeatureOptions} options
   * @return {*}
   */
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

  /**
   * @description: 
   * @param {FontFeature} other
   * @return {*}
   */
  eq (other: FontFeature): boolean {
    if (other === this) {
      return true
    }
    return (
      other instanceof FontFeature &&
      other.feature === this.feature &&
      other.value === this.value
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

  /**
   * @description: 
   * @param {number} mask
   * @return {*}
   */
  constructor (mask: number) {
    this.mask = mask
  }

  /**
   * @description: 
   * @param {TextDecoration} other
   * @return {*}
   */
  contains (other: TextDecoration) {
    return (this.mask | other.mask) === this.mask
  }
  
  /**
   * @description: 
   * @param {TextDecoration} other
   * @return {*}
   */
  eq (other: TextDecoration) {
    return (
      other instanceof TextDecoration && 
      other.mask === this.mask
    )
  }

  /**
   * @description: 
   * @return {*}
   */
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

export class Paragraph {
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
      const builder = new ParagraphBuilder(this.paragraphStyle!)
      
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
            // TODO
            // builder.addPlaceholder(command.placeholderStyle!)
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
        this.boxesForPlaceholders = this.skiaRectsToTextBoxes(paragraph.getRectsForPlaceholders())
      } catch (e) {
        throw new Error(`CanvasKit threw an exception while laying out the paragraph. The font was "${this.paragraphStyle.fontFamily}". `)
      }
    }

    return paragraph
  }

  markUsed () {
    // TODO
    // if (!this.paragraphCache.markUsed(this)) {
    //   this.paragraphCache.add(this);
    // }
  }

  /**
   * @description: 
   * @return {*}
   */
  delete () {
    this.paragraph!.delete()
    this.paragraph = null
  }

  
  /**
   * @description: 
   * @return {*}
   */
  getBoxesForPlaceholders () {
    return this.boxesForPlaceholders!
  }
  
  /**
   * @description: 
   * @return {*}
   */
  getBoxesForRange (
    start: number,
    end: number, 
    boxHeightStyle: RectHeightStyle = Skia.binding.RectHeightStyle.Tight,
    boxWidthStyle: RectHeightStyle = Skia.binding.RectWidthStyle.Tight,
  ): TextBox[] {
    if (start < 0 || end < 0) {
      return []
    }

    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const rects: Float32Array = paragraph.getRectsForRange(
      start,
      end,
      boxHeightStyle,
      boxWidthStyle,
    )

    return this.skiaRectsToTextBoxes(rects)
  }

  /**
   * @description: 
   * @param {number} rects
   * @return {*}
   */
  skiaRectsToTextBoxes (rects: number[][]): TextBox[] {
    const result: TextBox[] = []

    for (let i = 0; i < rects.length; i++) {
      const rect: number[] = rects[i] as number[]
      result.push(TextBox.fromLTRBD(
        rect[0],
        rect[1],
        rect[2],
        rect[3],
        this.paragraphStyle?.textDirection!,
      ))
    }

    return result
  }

  /**
   * @description: 
   * @param {Offset} offset
   * @return {*}
   */  
  getPositionForOffset (offset: Offset): TextPosition {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const positionWithAffinity =
        paragraph.getGlyphPositionAtCoordinate(
      offset.dx,
      offset.dy,
    )
    
    return fromPositionWithAffinity(positionWithAffinity)
  }
  /**
   * @description: 
   * @param {TextPosition} position
   * @return {*}
   */  
  getWordBoundary (position: TextPosition ): TextRange {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const range = paragraph.getWordBoundary(position.offset)
    return new TextRange(range.start, range.end)
  }

  /**
   * @description: 
   * @param {ParagraphConstraints} constraints
   * @return {*}
   */  
  layout (constraints: ParagraphConstraints) {
    if (this.lastLayoutConstraints === constraints) {
      return
    }

    this.ensureInitialized(constraints)
    this.markUsed()
  }

  /**
   * @description: 
   * @param {TextPosition} position
   * @return {*}
   */  
  getLineBoundary (position: TextPosition): TextRange {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const metrics: ILineMetrics[] = paragraph.getLineMetrics()
    const offset: number = position.offset

    for (const metric of metrics) {
      if (offset >= metric.startIndex && offset <= metric.endIndex) {
        return new TextRange(
          metric.startIndex, 
          metric.endIndex
        )
      }
    }
    return new TextRange(-1, -1)
  }

  /**
   * @description: 
   * @return {*}
   */  
  computeLineMetrics (): LineMetrics[] {
    const paragraph = this.ensureInitialized(this.lastLayoutConstraints!)
    const sks: ILineMetrics[] = paragraph.getLineMetrics()
    const result: LineMetrics[] = []
    for (const metric of sks) {
      result.push(new LineMetrics(metric))
    }
    return result
  }
}

export class ParagraphBuilder {
  
  /**
   * @description: 
   * @param {number} width
   * @param {number} height
   * @param {PlaceholderAlignment} alignment
   * @param {number} offset
   * @param {TextBaseline} baseline
   * @return {*}
   */
  static toSkiaPlaceholderStyle (
    width: number,
    height: number,
    alignment: PlaceholderAlignment,
    offset: number,
    baseline: TextBaseline,
  ) {

    const properties: ParagraphPlaceholder = {
      width,
      height,
      alignment,
      offset,
      baseline
    }

    return properties
  }

  public style: ParagraphStyle
  public placeholderCount: number
  public paragraphBuilder: IParagraphBuilder
  public commands: ParagraphCommand[]
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
     // TODO
    this.paragraphBuilder = Skia.binding.ParagraphBuilder.MakeFromFontProvider(
      style.skia,
      // TODO
      // skiaFontCollection.fontProvider,
    ) 
    this.styleStack.push(this.style.getTextStyle())
  }
  
  /**
   * @description: 
   * @param {number} width
   * @param {number} height
   * @param {PlaceholderAlignment} alignment
   * @param {number} scale
   * @param {number} baselineOffset
   * @param {TextBaseline} baseline
   * @return {*}
   */
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
    const placeholderStyle: ParagraphPlaceholder = ParagraphBuilder.toSkiaPlaceholderStyle(
      width * scale,
      height * scale,
      alignment,
      (baselineOffset ?? height) * scale,
      baseline ?? Skia.binding.TextBaseline.Alphabetic,
    )

    this.commands.push(ParagraphCommand.addPlaceholder(placeholderStyle))
    this.paragraphBuilder.addPlaceholder(
      placeholderStyle.width,
      placeholderStyle.height,
      placeholderStyle.alignment,
      placeholderStyle.baseline,
      placeholderStyle.offset,
    )
  }

  /**
   * @description: 
   * @param {string} text
   * @return {*}
   */
  addText (text: string) {
    const fontFamilies: string[] = []
    const style = this.peekStyle() as TextStyle
    
    if (style.fontFamily !== null) {
      fontFamilies.push(style.fontFamily!)
    }

    if (style.fontFamilyFallback !== null) {
      for (const fontFamily of style.fontFamilyFallback) {
        fontFamilies.push(fontFamily)
      }
    }

    // TODO
    // FontFallbackData.instance.ensureFontsSupportText(text, fontFamilies)
    
    this.commands.push(ParagraphCommand.addText(text))
    this.paragraphBuilder.addText(text)
  }

  /**
   * @description: 
   * @return {*}
   */
  build () {
    const builtParagraph = this.buildSkiaParagraph()

    return new Paragraph(
      builtParagraph, 
      this.style, 
      this.commands
    )
  }

  /**
   * @description: 
   * @return {*}
   */
  buildSkiaParagraph () {
    const result = this.paragraphBuilder.build()
    this.paragraphBuilder.delete()
    return result
  }

  /**
   * @description: 
   * @return {*}
   */
  pop () {
    if (this.styleStack.length <= 1) {
      return
    }

    this.commands.push(ParagraphCommand.pop())
    this.styleStack.pop()
    this.paragraphBuilder.pop()
  }

  /**
   * @description: 
   * @return {*}
   */
  peekStyle () {
    invariant(this.styleStack.length > 0)
    return this.styleStack[this.styleStack.length - 1]
  }

  static get defaultTextForeground () {
    return this._defaultTextForeground ?? (this._defaultTextForeground = Skia.binding.Paint())
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
    
  /**
   * @description: 
   * @param {TextStyle} style
   * @return {*}
   */
  pushStyle (style: TextStyle) {
    const baseStyle = this.peekStyle() as TextStyle
    const sk = baseStyle.mergeWith(style)
    
    this.styleStack.push(sk)
    this.commands.push(ParagraphCommand.pushStyle(style))
    
    if (
      sk.foreground !== null || 
      sk.background !== null
    ) {
      let foreground: IPaint | null = sk.foreground?.skia!

      if (foreground === null) {
        ParagraphBuilder.defaultTextForeground.setColorInt(sk.color?.value ?? 0xFF000000)
        foreground = ParagraphBuilder.defaultTextForeground
      }

      const background: IPaint = sk.background?.skia ?? ParagraphBuilder.defaultTextBackground
      this.paragraphBuilder.pushPaintStyle(
        sk.textStyle, 
        foreground as IPaint, 
        background
      )
    } else {
      this.paragraphBuilder.pushStyle(sk.textStyle)
    }
  }
}

export class ParagraphCommand {
  public type: ParagraphCommandType
  public text: string | null = null
  public style: TextStyle | null = null
  public placeholderStyle: ParagraphPlaceholder | null = null

  /**
   * @description: 
   * @param {ParagraphCommandType} type
   * @param {string} text
   * @param {TextStyle} style
   * @param {ParagraphPlaceholder} placeholderStyle
   * @return {*}
   */
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

  /**
   * @description: 
   * @param {string} text
   * @return {*}
   */
  static addText (text: string) {
    return new ParagraphCommand(
      ParagraphCommandType.AddText, 
      text, 
      null, 
      null
    )
  }

  /**
   * @description: 
   * @return {*}
   */
  static pop () {
    return new ParagraphCommand(
      ParagraphCommandType.Pop, 
      null, 
      null, 
      null
    )
  }

  /**
   * @description: 
   * @param {TextStyle} style
   * @return {*}
   */
  static pushStyle (style: TextStyle) {
    return new ParagraphCommand(
      ParagraphCommandType.PushStyle, 
      null, 
      style, 
      null
    )
  }

  /**
   * @description: 
   * @param {ParagraphPlaceholder} placeholderStyle
   * @return {*}
   */
  static addPlaceholder (placeholderStyle: ParagraphPlaceholder) {
    return new ParagraphCommand(
      ParagraphCommandType.AddPlaceholder, 
      null, 
      null, 
      placeholderStyle
    )
  }
}

export class ParagraphConstraints {
  public width: number

  /**
   * @description: 
   * @param {number} width
   * @return {*}
   */
  constructor (width: number,) {
    invariant(width !== null)
    this.width = width
  }
  
  /**
   * @description: 
   * @param {ParagraphConstraints} other
   * @return {*}
   */
  eq (other:ParagraphConstraints) {
    if (other === this) {
      return true
    }

    return (
      other instanceof ParagraphConstraints && 
      other.width === this.width
    )
  }
  
  /**
   * @description: 
   * @return {*}
   */
  toString () {
    return `ParagraphConstraints(width: ${this.width})`
  }
}

export class TextBox {
  /**
   * @description: 
   * @param {number} left
   * @param {number} top
   * @param {number} right
   * @param {number} bottom
   * @param {TextDirection} direction
   * @return {*}
   */
  static fromLTRBD (
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

  /**
   * @description: 
   * @param {number} left
   * @param {number} top
   * @param {number} right
   * @param {number} bottom
   * @param {TextDirection} direction
   * @return {*}
   */
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

  /**
   * @description: 
   * @return {*}
   */
  toRect (): Rect {
    return Rect.fromLTRB(
      this.left, 
      this.top, 
      this.right, 
      this.bottom
    )
  }
  /**
   * @description: 
   * @param {TextBox} other
   * @return {*}
   */
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

export class TextRange {
  static empty: TextRange = new TextRange(-1, -1)


  get isValid () {
    return  this.start >= 0 && this.end >= 0
  }

  get isCollapsed () {
    return this.start === this.end
  }
  
  get isNormalized () {
    return this.end >= this.start
  }

  public start: number
  public end: number

  /**
   * @description: 
   * @param {number} start
   * @param {number} end
   * @return {*}
   */
  constructor (
    start: number,
    end: number,
  ) {
    invariant(start >= -1)
    invariant(end >= -1)

    this.start = start
    this.end = end
  }

  /**
   * @description: 
   * @param {string} text
   * @return {*}
   */
  textBefore (text: string): string {
    invariant(this.isNormalized)
    return text.substring(0, this.start)
  }

  /**
   * @description: 
   * @param {string} text
   * @return {*}
   */
  textAfter (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.end)
  }

  /**
   * @description: 
   * @param {string} text
   * @return {*}
   */
  textInside (text: string): string {
    invariant(this.isNormalized)
    return text.substring(this.start, this.end)
  }

  
  /**
   * @description: 
   * @param {TextRange} other
   * @return {*}
   */
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

  /**
   * @description: 
   * @return {*}
   */
  toString () {
    return `TextRange(start: ${this.start}, end: ${this.end})`
  }
}

export class TextPosition {
  public offset: number
  public affinity: Affinity

  /**
   * @description: 
   * @param {number} offset
   * @param {Affinity} affinity
   * @return {*}
   */
  constructor (
    offset: number,
    affinity: Affinity = Skia.binding.Affinity.Downstream,
  ) {
    invariant(offset !== null) 
    invariant(affinity !== null)

    this.offset = offset
    this.affinity = affinity
  }
  
  /**
   * @description: 
   * @param {TextPosition} other
   * @return {*}
   */
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

export type TextStyleOptions = {
  color?: Color | null
  decoration?: TextDecoration | null
  decorationColor?: Color | null
  decorationStyle?: DecorationStyle | null
  decorationThickness?: number | null
  fontWeight?: FontWeight | null
  fontStyle?: FontSlant | null
  textBaseline?: TextBaseline | null
  fontFamily?: string | null
  fontFamilyFallback?: string[] | null
  fontSize?: number | null
  letterSpacing?: number | null
  wordSpacing?: number | null
  height?: number | null
  leadingDistribution?: TextLeadingDistribution | null
  locale?: number | null
  background?: Paint | null
  foreground?: Paint | null
  shadows?: Shadow[] | null
  fontFeatures?: FontFeature[] | null
}

export class TextStyle {
  static kTextStyle: ITextStyle | null = null
  get textStyle () {
    if (TextStyle.kTextStyle) {
      return TextStyle.kTextStyle
    }

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
    // TODO
    // const locale = this.locale
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
      properties.decorationStyle = decorationStyle
    }

    if (textBaseline != null) {
      properties.textBaseline = textBaseline
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

    // TODO
    // if (locale !== null) {
    //   properties.locale = locale.toLanguageTag()
    // }

    properties.fontFamilies = this.effectiveFontFamilies

    if (fontWeight != null || fontStyle != null) {
      properties.fontStyle = toSkiaFontStyle(fontWeight, fontStyle)
    }

    if (foreground != null) {
      properties.foregroundColor = makeFreshSkiaColor(foreground.color)
    }

    if (shadows !== null) {
      const sks: ITextShadow[] = []
      for (const shadow of shadows) {
        const sk: ITextShadow = {}
        sk.color = makeFreshSkiaColor(shadow.color)
        sk.offset = toSkiaPoint(shadow.offset)
        sk.blurRadius = shadow.blurRadius;
        sks.push(sk)
      }
      properties.shadows = sks
    }

    if (fontFeatures !== null) {
      const sks: ITextFontFeatures[] = []
      for (const fontFeature of fontFeatures) {
        const sk: ITextFontFeatures  = {
          name: fontFeature.feature,
          value: fontFeature.value as number
        }
        
        sks.push(sk)
      }
      properties.fontFeatures = sks
    }

    return TextStyle.kTextStyle = new Skia.binding.TextStyle(properties)
  }

  public color: Color | null = null
  public decoration: TextDecoration | null = null
  public decorationColor: Color | null = null
  public decorationStyle: DecorationStyle | null = null
  public decorationThickness: number | null = null
  public fontWeight: FontWeight | null = null
  public fontStyle: FontSlant | null = null
  public textBaseline: TextBaseline | null = null
  public fontFamily: string | null = null
  public fontFamilyFallback: string[] | null = null
  public fontSize: number | null = null
  public letterSpacing: number | null = null
  public wordSpacing: number | null = null
  public height: number | null = null
  public leadingDistribution: TextLeadingDistribution | null = null
  // public locale: Locale | null = null
  public background: Paint | null = null
  public foreground: Paint | null = null
  public shadows: Shadow[] | null = null
  public fontFeatures: FontFeature[] | null = null

  public effectiveFontFamilies: string[] = getEffectiveFontFamilies(this.fontFamily, this.fontFamilyFallback)

  /**
   * @description: 
   * @param {TextStyleOptions} options
   * @return {*}
   */
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
    // TODO
    // this.locale = options.locale ?? null
    this.background = options.background ?? null
    this.foreground = options.foreground ?? null
    this.shadows = options.shadows ?? null
    this.fontFeatures = options.fontFeatures ?? null
  }

  /**
   * @description: 
   * @param {TextStyle} other
   * @return {*}
   */
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
      // TODO
      // locale: other.locale ?? this.locale,
      background: other.background ?? this.background,
      foreground: other.foreground ?? this.foreground,
      shadows: other.shadows ?? this.shadows,
      fontFeatures: other.fontFeatures ?? this.fontFeatures,
    })
  }
}

export class LineMetrics {
  public lineMetrics: ILineMetrics

  get ascent () {
    return this.lineMetrics.ascent
  } 
  get descent () {
    return this.lineMetrics.descent
  } 
  get unscaledAscent () {
    return this.lineMetrics.ascent
  } 
  get hardBreak () {
    return this.lineMetrics.isHardBreak
  } 
  get baseline () {
    return this.lineMetrics.baseline
  } 
  get height () {
    return Math.round(this.lineMetrics.ascent + this.lineMetrics.descent)
  } 
  get left () {
    return this.lineMetrics.left
  } 
  get width () {
    return this.lineMetrics.width
  } 
  get lineNumber () {
    return this.lineMetrics.lineNumber
  } 
  
  /**
   * @description: 
   * @param {ILineMetrics} lineMetrics
   * @return {*}
   */
  constructor (lineMetrics: ILineMetrics) {
    this.lineMetrics = lineMetrics
  }
}

/**
 * @description: 
 * @param {Uint8Array} list
 * @param {string} fontFamily
 * @return {*}
 */
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
  fontStyle?: FontSlant | null
  forceStrutHeight?: boolean | null
}

export class StrutStyle {
  public fontFamily: string | null = null
  public fontFamilyFallback: string[] | null = null
  public fontSize: number | null = null
  public height: number | null = null
  public leading: number | null = null
  public fontWeight: FontWeight | null = null
  public fontStyle: FontSlant | null = null
  public forceStrutHeight: boolean | null = null
  public leadingDistribution: TextLeadingDistribution | null = null

  /**
   * @description: 
   * @param {StrutStyleOptions} options
   * @return {*}
   */
  constructor (options: StrutStyleOptions) {
    this.fontFamily = options.fontFamily ?? null
    this.fontFamilyFallback = options.fontFamilyFallback ?? null
    this.fontSize = options.fontSize ?? null
    this.height = options.height ?? null
    this.leadingDistribution = options.leadingDistribution ?? null
    this.leading = options.leading ?? null
    this.fontWeight = options.fontWeight ?? null
    this.fontStyle = options.fontStyle ?? null
    this.forceStrutHeight = options.forceStrutHeight ?? null
  }  

  /**
   * @description: 
   * @param {StrutStyle} other
   * @return {*}
   */
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
      listEquals<string[]>(other.fontFamilyFallback ?? [], this.fontFamilyFallback ?? [])
    )
  }
}

/**
 * @description: 
 * @param {string} fontFamily
 * @param {string} fontFamilyFallback
 * @return {*}
 */
export function getEffectiveFontFamilies (
  fontFamily: string | null = null,
  fontFamilyFallback: string[] | null = null
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


/**
 * @description: 
 * @param {FontWeight} fontWeight
 * @param {FontSlant} fontStyle
 * @return {*}
 */
/**
 * @description: 
 * @param {FontWeight} fontWeight
 * @param {FontSlant} fontStyle
 * @return {*}
 */
export function toSkiaFontStyle (
  fontWeight: FontWeight | null, 
  fontStyle: FontSlant | null
) {
  const style: IFontStyle = {}
  if (fontWeight !== null) {
    style.weight = fontWeight
  }
  if (fontStyle !== null) {
    style.slant = fontStyle
  }
  return style;
}