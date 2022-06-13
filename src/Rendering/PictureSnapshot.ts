import { SkiaPictureRecorder, toSkiaM44FromFloat32, toSkiaMatrixFromFloat32 } from '@skia'
import { Canvas } from './Canvas'
import { Rect } from './Geometry'
import { ImageFilter, ManagedSkImageFilterConvertible } from './ImageFilter'
import { Paint } from './Paint'
import { Color } from './Painting'



class DrawArcCommand extends PaintCommand {
  DrawArcCommand(
      this.oval, this.startAngle, this.sweepAngle, this.useCenter, this.paint);

  final ui.Rect oval;
  final double startAngle;
  final double sweepAngle;
  final bool useCenter;
  public paint: Paint

  
  apply (canvas: Canvas) {
    const double toDegrees = 180 / math.pi;
    canvas.drawArc(
      toSkRect(oval),
      startAngle * toDegrees,
      sweepAngle * toDegrees,
      useCenter,
      paint.skiaObject,
    );
  }
}

class DrawAtlasCommand extends PaintCommand {
  DrawAtlasCommand(this.paint, this.atlas, this.rstTransforms, this.rects,
      this.colors, this.blendMode);

  public paint: Paint
  final Image atlas;
  final Float32List rstTransforms;
  final Float32List rects;
  final Uint32List? colors;
  final ui.BlendMode blendMode;

  
  apply (canvas: Canvas) {
    canvas.drawAtlas(
      atlas.skImage,
      rects,
      rstTransforms,
      paint.skiaObject,
      toSkBlendMode(blendMode),
      colors,
    );
  }
}

class ClipRRectCommand extends PaintCommand {
  final ui.RRect rrect;
  final bool doAntiAlias;

  ClipRRectCommand(this.rrect, this.doAntiAlias);

  
  apply (canvas: Canvas) {
    canvas.clipRRect(
      toSkRRect(rrect),
      _clipOpIntersect,
      doAntiAlias,
    );
  }
}

class ClipPathCommand extends PaintCommand {
  final Path path;
  final bool doAntiAlias;

  ClipPathCommand(this.path, this.doAntiAlias);

  
  apply (canvas: Canvas) {
    canvas.clipPath(
      path.skiaObject,
      _clipOpIntersect,
      doAntiAlias,
    );
  }
}

class DrawColorCommand extends PaintCommand {
  final ui.Color color;
  final ui.BlendMode blendMode;

  DrawColorCommand(this.color, this.blendMode);

  
  apply (canvas: Canvas) {
    canvas.drawColorInt(
      color.value,
      toSkBlendMode(blendMode),
    );
  }
}

class DrawLineCommand extends PaintCommand {
  final ui.Offset p1;
  final ui.Offset p2;
  public paint: Paint

  DrawLineCommand(this.p1, this.p2, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawLine(
      p1.dx,
      p1.dy,
      p2.dx,
      p2.dy,
      paint.skiaObject,
    );
  }
}

class DrawPaintCommand extends PaintCommand {
  public paint: Paint

  DrawPaintCommand(this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawPaint(paint.skiaObject);
  }
}

class DrawVerticesCommand extends PaintCommand {
  final Vertices vertices;
  final ui.BlendMode blendMode;
  public paint: Paint
  DrawVerticesCommand(this.vertices, this.blendMode, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawVertices(
      vertices.skiaObject,
      toSkBlendMode(blendMode),
      paint.skiaObject,
    );
  }
}

export class DrawPointsCommand extends PaintCommand {
  final Float32List points;
  final ui.PointMode pointMode;
  public paint: Paint
  
  DrawPointsCommand(this.pointMode, this.points, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawPoints(
      toSkPointMode(pointMode),
      points,
      paint.skiaObject,
    );
  }
}

export class DrawRectCommand extends PaintCommand {
  public rect: Rect
  public paint: Paint

  constructor (
    rect: Rect, 
    paint: Paint
  ) {
    super()

    this.rect = rect
    this.paint = paint
  }

  
  apply (canvas: Canvas) {
    canvas.drawRect(this.rect, this.paint.skia)
  }
}

class DrawRRectCommand extends PaintCommand {
  final ui.RRect rrect;
  public paint: Paint

  DrawRRectCommand(this.rrect, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawRRect(
      toSkRRect(rrect),
      paint.skiaObject,
    );
  }
}

class DrawDRRectCommand extends PaintCommand {
  final ui.RRect outer;
  final ui.RRect inner;
  public paint: Paint

  DrawDRRectCommand(this.outer, this.inner, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawDRRect(
      toSkRRect(outer),
      toSkRRect(inner),
      paint.skiaObject,
    );
  }
}

class DrawOvalCommand extends PaintCommand {
  public rect: Rect
  public paint: Paint

  DrawOvalCommand(this.rect, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawOval(
      toSkRect(rect),
      paint.skiaObject,
    );
  }
}

class DrawCircleCommand extends PaintCommand {
  final ui.Offset c;
  final double radius;
  public paint: Paint

  DrawCircleCommand(this.c, this.radius, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawCircle(
      c.dx,
      c.dy,
      radius,
      paint.skiaObject,
    );
  }
}

class DrawPathCommand extends PaintCommand {
  final Path path;
  public paint: Paint

  DrawPathCommand(this.path, this.paint);

  
  apply (canvas: Canvas) {
    canvas.drawPath(path.skiaObject, paint.skiaObject);
  }
}

class DrawShadowCommand extends PaintCommand {
  DrawShadowCommand(
      this.path, this.color, this.elevation, this.transparentOccluder);

  final Path path;
  final ui.Color color;
  final double elevation;
  final bool transparentOccluder;

  
  apply (canvas: Canvas) {
    drawSkShadow(canvas, path, color, elevation, transparentOccluder,
        ui.window.devicePixelRatio);
  }
}

class DrawImageCommand extends PaintCommand {
  final Image image;
  final ui.Offset offset;
  public paint: Paint

  DrawImageCommand(Image Image, this.offset, this.paint)
      : image = Image.clone();

  
  apply (canvas: Canvas) {
    final ui.FilterQuality filterQuality = paint.filterQuality;
    if (filterQuality == ui.FilterQuality.high) {
      canvas.drawImageCubic(
        image.skImage,
        offset.dx,
        offset.dy,
        Canvas._kMitchellNetravali_B,
        Canvas._kMitchellNetravali_C,
        paint.skiaObject,
      );
    } else {
      canvas.drawImageOptions(
        image.skImage,
        offset.dx,
        offset.dy,
        toSkFilterMode(filterQuality),
        toSkMipmapMode(filterQuality),
        paint.skiaObject,
      );
    }
  }

  
  dispose() {
    image.dispose();
  }
}

class DrawImageRectCommand extends PaintCommand {
  final Image image;
  final ui.Rect src;
  final ui.Rect dst;
  public paint: Paint

  DrawImageRectCommand(Image Image, this.src, this.dst, this.paint)
      : image = Image.clone();

  
  apply (canvas: Canvas) {
    final ui.FilterQuality filterQuality = paint.filterQuality;
    if (filterQuality == ui.FilterQuality.high) {
      canvas.drawImageRectCubic(
        image.skImage,
        toSkRect(src),
        toSkRect(dst),
        Canvas._kMitchellNetravali_B,
        Canvas._kMitchellNetravali_C,
        paint.skiaObject,
      );
    } else {
      canvas.drawImageRectOptions(
        image.skImage,
        toSkRect(src),
        toSkRect(dst),
        toSkFilterMode(filterQuality),
        toSkMipmapMode(filterQuality),
        paint.skiaObject,
      );
    }
  }

  
  dispose() {
    image.dispose();
  }
}

class DrawImageNineCommand extends PaintCommand {
  DrawImageNineCommand(Image Image, this.center, this.dst, this.paint)
      : image = Image.clone();

  final Image image;
  final ui.Rect center;
  final ui.Rect dst;
  public paint: Paint

  
  apply (canvas: Canvas) {
    canvas.drawImageNine(
      image.skImage,
      toSkRect(center),
      toSkRect(dst),
      toSkFilterMode(paint.filterQuality),
      paint.skiaObject,
    );
  }

  
  dispose() {
    image.dispose();
  }
}

class DrawParagraphCommand extends PaintCommand {
  final Paragraph paragraph;
  final ui.Offset offset;

  DrawParagraphCommand(this.paragraph, this.offset);

  
  apply (canvas: Canvas) {
    canvas.drawParagraph(
      paragraph.skiaObject,
      offset.dx,
      offset.dy,
    );
    paragraph.markUsed();
  }
}

class DrawPictureCommand extends PaintCommand {
  DrawPictureCommand(this.picture);

  final Picture picture;

  
  apply (canvas: Canvas) {
    canvas.drawPicture(picture.skiaObject);
  }
}

class SaveLayerCommand extends PaintCommand {
  SaveLayerCommand(this.bounds, this.paint);

  public bounds: Rect;
  public paint: Paint | null;

  
  apply (canvas: Canvas) {
    canvas.saveLayer(
      paint?.skiaObject,
      toSkRect(bounds),
      null,
      null,
    );
  }
}

class SaveLayerWithoutBoundsCommand extends PaintCommand {
  SaveLayerWithoutBoundsCommand(this.paint);

  public paint: Paint | null;

  
  apply (canvas: Canvas) {
    canvas.saveLayer(
      paint?.skiaObject,
      null,
      null,
      null,
    );
  }
}

export class SaveLayerWithFilterCommand extends PaintCommand {
  public bounds: Rect
  public filter: ImageFilter
  public paint: Paint | null

  constructor (
    bounds: Rect, 
    filter: ImageFilter, 
    paint: Paint | null
  ) {
    super()

    this.bounds = bounds
    this.filter = filter
    this.paint = paint
  }

  apply (canvas: Canvas) {
    const convertible: ManagedSkImageFilterConvertible = filter as ManagedSkImageFilterConvertible
    return canvas.saveLayer(
      this.paint?.skia,
      this.bounds,
      convertible.imageFilter.skia,
      0,
    )
  }
}


