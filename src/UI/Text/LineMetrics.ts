export abstract class LineMetrics {
  // factory LineMetrics({
  //   required bool hardBreak,
  //   required double ascent,
  //   required double descent,
  //   required double unscaledAscent,
  //   required double height,
  //   required double width,
  //   required double left,
  //   required double baseline,
  //   required int lineNumber,
  // }) = engine.EngineLineMetrics;
  abstract hardBreak: number
  abstract ascent: number
  abstract descent: number
  abstract unscaledAscent: number
  abstract height: number
  abstract width: number
  abstract left: number
  abstract baseline: number
  abstract lineNumber: number
}