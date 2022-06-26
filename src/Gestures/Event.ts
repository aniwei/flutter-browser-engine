export const kPrimaryButton = 0x01
export const kSecondaryButton = 0x02
export const kPrimaryMouseButton = kPrimaryButton
export const kSecondaryMouseButton = kSecondaryButton
export const kStylusContact = kPrimaryButton
export const kPrimaryStylusButton = kSecondaryButton
export const kTertiaryButton = 0x04
export const kMiddleMouseButton = kTertiaryButton
export const kSecondaryStylusButton = kTertiaryButton
export const kBackMouseButton = 0x08
export const kForwardMouseButton = 0x10
export const kTouchContact = kPrimaryButton

int nthMouseButton(int number) => (kPrimaryMouseButton << (number - 1)) & kMaxUnsignedSMI;

/// The bit of [PointerEvent.buttons] that corresponds to the nth stylus button.
///
/// The `number` argument can be at most 62 in Flutter for mobile and desktop,
/// and at most 32 on Flutter for web.
///
/// See [kPrimaryStylusButton] and [kSecondaryStylusButton] for semantic names
/// for some stylus buttons.
int nthStylusButton(int number) => (kPrimaryStylusButton << (number - 1)) & kMaxUnsignedSMI;

/// Returns the button of `buttons` with the smallest integer.
///
/// The `buttons` parameter is a bit field where each set bit represents a button.
/// This function returns the set bit closest to the least significant bit.
///
/// It returns zero when `buttons` is zero.
///
/// Example:
///
/// ```dart
///   assert(rightmostButton(0x1) == 0x1);
///   assert(rightmostButton(0x11) == 0x1);
///   assert(rightmostButton(0) == 0);
/// ```
///
/// See also:
///
///  * [isSingleButton], which checks if a `buttons` contains exactly one button.
int smallestButton(int buttons) => buttons & (-buttons);

/// Returns whether `buttons` contains one and only one button.
///
/// The `buttons` parameter is a bit field where each set bit represents a button.
/// This function returns whether there is only one set bit in the given integer.
///
/// It returns false when `buttons` is zero.
///
/// Example:
///
/// ```dart
///   assert(isSingleButton(0x1) == true);
///   assert(isSingleButton(0x11) == false);
///   assert(isSingleButton(0) == false);
/// ```
///
/// See also:
///
///  * [smallestButton], which returns the button in a `buttons` bit field with
///    the smallest integer button.
bool isSingleButton(int buttons) => buttons != 0 && (smallestButton(buttons) == buttons);

/// Base class for touch, stylus, or mouse events.
///
/// Pointer events operate in the coordinate space of the screen, scaled to
/// logical pixels. Logical pixels approximate a grid with about 38 pixels per
/// centimeter, or 96 pixels per inch.
///
/// This allows gestures to be recognized independent of the precise hardware
/// characteristics of the device. In particular, features such as touch slop
/// (see [kTouchSlop]) can be defined in terms of roughly physical lengths so
/// that the user can shift their finger by the same distance on a high-density
/// display as on a low-resolution device.
///
/// For similar reasons, pointer events are not affected by any transforms in
/// the rendering layer. This means that deltas may need to be scaled before
/// being applied to movement within the rendering. For example, if a scrolling
/// list is shown scaled by 2x, the pointer deltas will have to be scaled by the
/// inverse amount if the list is to appear to scroll with the user's finger.
///
/// See also:
///
///  * [dart:ui.FlutterView.devicePixelRatio], which defines the device's
///    current resolution.
///  * [Listener], a widget that calls callbacks in response to common pointer
///    events.
@immutable
abstract class PointerEvent with Diagnosticable {
  /// Abstract const constructor. This constructor enables subclasses to provide
  /// const constructors so that they can be used in const expressions.
  const PointerEvent({
    this.embedderId = 0,
    this.timeStamp = Duration.zero,
    this.pointer = 0,
    this.kind = PointerDeviceKind.touch,
    this.device = 0,
    this.position = Offset.zero,
    this.delta = Offset.zero,
    this.buttons = 0,
    this.down = false,
    this.obscured = false,
    this.pressure = 1.0,
    this.pressureMin = 1.0,
    this.pressureMax = 1.0,
    this.distance = 0.0,
    this.distanceMax = 0.0,
    this.size = 0.0,
    this.radiusMajor = 0.0,
    this.radiusMinor = 0.0,
    this.radiusMin = 0.0,
    this.radiusMax = 0.0,
    this.orientation = 0.0,
    this.tilt = 0.0,
    this.platformData = 0,
    this.synthesized = false,
    this.transform,
    this.original,
  });

  /// Unique identifier that ties the [PointerEvent] to the embedder event that created it.
  ///
  /// No two pointer events can have the same [embedderId] on platforms that set it.
  /// This is different from [pointer] identifier - used for hit-testing,
  /// whereas [embedderId] is used to identify the platform event.
  ///
  /// On Android this is ID of the underlying [MotionEvent](https://developer.android.com/reference/android/view/MotionEvent).
  final int embedderId;

  /// Time of event dispatch, relative to an arbitrary timeline.
  final Duration timeStamp;

  /// Unique identifier for the pointer, not reused. Changes for each new
  /// pointer down event.
  final int pointer;

  /// The kind of input device for which the event was generated.
  final PointerDeviceKind kind;

  /// Unique identifier for the pointing device, reused across interactions.
  final int device;

  /// Coordinate of the position of the pointer, in logical pixels in the global
  /// coordinate space.
  ///
  /// See also:
  ///
  ///  * [localPosition], which is the [position] transformed into the local
  ///    coordinate system of the event receiver.
  final Offset position;

  /// The [position] transformed into the event receiver's local coordinate
  /// system according to [transform].
  ///
  /// If this event has not been transformed, [position] is returned as-is.
  /// See also:
  ///
  ///  * [position], which is the position in the global coordinate system of
  ///    the screen.
  Offset get localPosition => position;

  /// Distance in logical pixels that the pointer moved since the last
  /// [PointerMoveEvent] or [PointerHoverEvent].
  ///
  /// This value is always 0.0 for down, up, and cancel events.
  ///
  /// See also:
  ///
  ///  * [localDelta], which is the [delta] transformed into the local
  ///    coordinate space of the event receiver.
  final Offset delta;

  /// The [delta] transformed into the event receiver's local coordinate
  /// system according to [transform].
  ///
  /// If this event has not been transformed, [delta] is returned as-is.
  ///
  /// See also:
  ///
  ///  * [delta], which is the distance the pointer moved in the global
  ///    coordinate system of the screen.
  Offset get localDelta => delta;

  /// Bit field using the *Button constants such as [kPrimaryMouseButton],
  /// [kSecondaryStylusButton], etc.
  ///
  /// For example, if this has the value 6 and the
  /// [kind] is [PointerDeviceKind.invertedStylus], then this indicates an
  /// upside-down stylus with both its primary and secondary buttons pressed.
  final int buttons;

  /// Set if the pointer is currently down.
  ///
  /// For touch and stylus pointers, this means the object (finger, pen) is in
  /// contact with the input surface. For mice, it means a button is pressed.
  final bool down;

  /// Set if an application from a different security domain is in any way
  /// obscuring this application's window.
  ///
  /// This is not currently implemented.
  final bool obscured;

  /// The pressure of the touch.
  ///
  /// This value is a number ranging from 0.0, indicating a touch with no
  /// discernible pressure, to 1.0, indicating a touch with "normal" pressure,
  /// and possibly beyond, indicating a stronger touch. For devices that do not
  /// detect pressure (e.g. mice), returns 1.0.
  final double pressure;

  /// The minimum value that [pressure] can return for this pointer.
  ///
  /// For devices that do not detect pressure (e.g. mice), returns 1.0.
  /// This will always be a number less than or equal to 1.0.
  final double pressureMin;

  /// The maximum value that [pressure] can return for this pointer.
  ///
  /// For devices that do not detect pressure (e.g. mice), returns 1.0.
  /// This will always be a greater than or equal to 1.0.
  final double pressureMax;

  /// The distance of the detected object from the input surface.
  ///
  /// For instance, this value could be the distance of a stylus or finger
  /// from a touch screen, in arbitrary units on an arbitrary (not necessarily
  /// linear) scale. If the pointer is down, this is 0.0 by definition.
  final double distance;

  /// The minimum value that [distance] can return for this pointer.
  ///
  /// This value is always 0.0.
  double get distanceMin => 0.0;

  /// The maximum value that [distance] can return for this pointer.
  ///
  /// If this input device cannot detect "hover touch" input events,
  /// then this will be 0.0.
  final double distanceMax;

  /// The area of the screen being pressed.
  ///
  /// This value is scaled to a range between 0 and 1. It can be used to
  /// determine fat touch events. This value is only set on Android and is
  /// a device specific approximation within the range of detectable values.
  /// So, for example, the value of 0.1 could mean a touch with the tip of
  /// the finger, 0.2 a touch with full finger, and 0.3 the full palm.
  ///
  /// Because this value uses device-specific range and is uncalibrated,
  /// it is of limited use and is primarily retained in order to be able
  /// to reconstruct original pointer events for [AndroidView].
  final double size;

  /// The radius of the contact ellipse along the major axis, in logical pixels.
  final double radiusMajor;

  /// The radius of the contact ellipse along the minor axis, in logical pixels.
  final double radiusMinor;

  /// The minimum value that could be reported for [radiusMajor] and [radiusMinor]
  /// for this pointer, in logical pixels.
  final double radiusMin;

  /// The maximum value that could be reported for [radiusMajor] and [radiusMinor]
  /// for this pointer, in logical pixels.
  final double radiusMax;

  /// The orientation angle of the detected object, in radians.
  ///
  /// For [PointerDeviceKind.touch] events:
  ///
  /// The angle of the contact ellipse, in radians in the range:
  ///
  ///     -pi/2 < orientation <= pi/2
  ///
  /// ...giving the angle of the major axis of the ellipse with the y-axis
  /// (negative angles indicating an orientation along the top-left /
  /// bottom-right diagonal, positive angles indicating an orientation along the
  /// top-right / bottom-left diagonal, and zero indicating an orientation
  /// parallel with the y-axis).
  ///
  /// For [PointerDeviceKind.stylus] and [PointerDeviceKind.invertedStylus] events:
  ///
  /// The angle of the stylus, in radians in the range:
  ///
  ///     -pi < orientation <= pi
  ///
  /// ...giving the angle of the axis of the stylus projected onto the input
  /// surface, relative to the positive y-axis of that surface (thus 0.0
  /// indicates the stylus, if projected onto that surface, would go from the
  /// contact point vertically up in the positive y-axis direction, pi would
  /// indicate that the stylus would go down in the negative y-axis direction;
  /// pi/4 would indicate that the stylus goes up and to the right, -pi/2 would
  /// indicate that the stylus goes to the left, etc).
  final double orientation;

  /// The tilt angle of the detected object, in radians.
  ///
  /// For [PointerDeviceKind.stylus] and [PointerDeviceKind.invertedStylus] events:
  ///
  /// The angle of the stylus, in radians in the range:
  ///
  ///     0 <= tilt <= pi/2
  ///
  /// ...giving the angle of the axis of the stylus, relative to the axis
  /// perpendicular to the input surface (thus 0.0 indicates the stylus is
  /// orthogonal to the plane of the input surface, while pi/2 indicates that
  /// the stylus is flat on that surface).
  final double tilt;

  /// Opaque platform-specific data associated with the event.
  final int platformData;

  /// Set if the event was synthesized by Flutter.
  ///
  /// We occasionally synthesize PointerEvents that aren't exact translations
  /// of [PointerData] from the engine to cover small cross-OS discrepancies
  /// in pointer behaviors.
  ///
  /// For instance, on end events, Android always drops any location changes
  /// that happened between its reporting intervals when emitting the end events.
  ///
  /// On iOS, minor incorrect location changes from the previous move events
  /// can be reported on end events. We synthesize a [PointerEvent] to cover
  /// the difference between the 2 events in that case.
  final bool synthesized;

  /// The transformation used to transform this event from the global coordinate
  /// space into the coordinate space of the event receiver.
  ///
  /// This value affects what is returned by [localPosition] and [localDelta].
  /// If this value is null, it is treated as the identity transformation.
  ///
  /// Unlike a paint transform, this transform usually does not contain any
  /// "perspective" components, meaning that the third row and the third column
  /// of the matrix should be equal to "0, 0, 1, 0". This ensures that
  /// [localPosition] describes the point in the local coordinate system of the
  /// event receiver at which the user is actually touching the screen.
  ///
  /// See also:
  ///
  ///  * [transformed], which transforms this event into a different coordinate
  ///    space.
  final Matrix4? transform;

  /// The original un-transformed [PointerEvent] before any [transform]s were
  /// applied.
  ///
  /// If [transform] is null or the identity transformation this may be null.
  ///
  /// When multiple event receivers in different coordinate spaces receive an
  /// event, they all receive the event transformed to their local coordinate
  /// space. The [original] property can be used to determine if all those
  /// transformed events actually originated from the same pointer interaction.
  final PointerEvent? original;

  /// Transforms the event from the global coordinate space into the coordinate
  /// space of an event receiver.
  ///
  /// The coordinate space of the event receiver is described by `transform`. A
  /// null value for `transform` is treated as the identity transformation.
  ///
  /// The resulting event will store the base event as [original], delegates
  /// most properties to [original], except for [localPosition] and [localDelta],
  /// which are calculated based on [transform] on first use and cached.
  ///
  /// The method may return the same object instance if for example the
  /// transformation has no effect on the event. Otherwise, the resulting event
  /// will be a subclass of, but not exactly, the original event class (e.g.
  /// [PointerDownEvent.transformed] may return a subclass of [PointerDownEvent]).
  ///
  /// Transforms are not commutative, and are based on [original] events.
  /// If this method is called on a transformed event, the provided `transform`
  /// will override (instead of multiplied onto) the existing [transform] and
  /// used to calculate the new [localPosition] and [localDelta].
  PointerEvent transformed(Matrix4? transform);

  /// Creates a copy of event with the specified properties replaced.
  ///
  /// Calling this method on a transformed event will return a new transformed
  /// event based on the current [transform] and the provided properties.
  PointerEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  });

  /// Returns the transformation of `position` into the coordinate system
  /// described by `transform`.
  ///
  /// The z-value of `position` is assumed to be 0.0. If `transform` is null,
  /// `position` is returned as-is.
  static Offset transformPosition(Matrix4? transform, Offset position) {
    if (transform == null) {
      return position;
    }
    final Vector3 position3 = Vector3(position.dx, position.dy, 0.0);
    final Vector3 transformed3 = transform.perspectiveTransform(position3);
    return Offset(transformed3.x, transformed3.y);
  }

  /// Transforms `untransformedDelta` into the coordinate system described by
  /// `transform`.
  ///
  /// It uses the provided `untransformedEndPosition` and
  /// `transformedEndPosition` of the provided delta to increase accuracy.
  ///
  /// If `transform` is null, `untransformedDelta` is returned.
  static Offset transformDeltaViaPositions({
    required Offset untransformedEndPosition,
    Offset? transformedEndPosition,
    required Offset untransformedDelta,
    required Matrix4? transform,
  }) {
    if (transform == null) {
      return untransformedDelta;
    }
    // We could transform the delta directly with the transformation matrix.
    // While that is mathematically equivalent, in practice we are seeing a
    // greater precision error with that approach. Instead, we are transforming
    // start and end point of the delta separately and calculate the delta in
    // the new space for greater accuracy.
    transformedEndPosition ??= transformPosition(transform, untransformedEndPosition);
    final Offset transformedStartPosition = transformPosition(transform, untransformedEndPosition - untransformedDelta);
    return transformedEndPosition - transformedStartPosition;
  }

  /// Removes the "perspective" component from `transform`.
  ///
  /// When applying the resulting transform matrix to a point with a
  /// z-coordinate of zero (which is generally assumed for all points
  /// represented by an [Offset]), the other coordinates will get transformed as
  /// before, but the new z-coordinate is going to be zero again. This is
  /// achieved by setting the third column and third row of the matrix to
  /// "0, 0, 1, 0".
  static Matrix4 removePerspectiveTransform(Matrix4 transform) {
    final Vector4 vector = Vector4(0, 0, 1, 0);
    return transform.clone()
      ..setColumn(2, vector)
      ..setRow(2, vector);
  }
}

// A mixin that adds implementation for [debugFillProperties] and [toStringFull]
// to [PointerEvent].
mixin _PointerEventDescription on PointerEvent {

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Offset>('position', position));
    properties.add(DiagnosticsProperty<Offset>('localPosition', localPosition, defaultValue: position, level: DiagnosticLevel.debug));
    properties.add(DiagnosticsProperty<Offset>('delta', delta, defaultValue: Offset.zero, level: DiagnosticLevel.debug));
    properties.add(DiagnosticsProperty<Offset>('localDelta', localDelta, defaultValue: delta, level: DiagnosticLevel.debug));
    properties.add(DiagnosticsProperty<Duration>('timeStamp', timeStamp, defaultValue: Duration.zero, level: DiagnosticLevel.debug));
    properties.add(IntProperty('pointer', pointer, level: DiagnosticLevel.debug));
    properties.add(EnumProperty<PointerDeviceKind>('kind', kind, level: DiagnosticLevel.debug));
    properties.add(IntProperty('device', device, defaultValue: 0, level: DiagnosticLevel.debug));
    properties.add(IntProperty('buttons', buttons, defaultValue: 0, level: DiagnosticLevel.debug));
    properties.add(DiagnosticsProperty<bool>('down', down, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('pressure', pressure, defaultValue: 1.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('pressureMin', pressureMin, defaultValue: 1.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('pressureMax', pressureMax, defaultValue: 1.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('distance', distance, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('distanceMin', distanceMin, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('distanceMax', distanceMax, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('size', size, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('radiusMajor', radiusMajor, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('radiusMinor', radiusMinor, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('radiusMin', radiusMin, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('radiusMax', radiusMax, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('orientation', orientation, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(DoubleProperty('tilt', tilt, defaultValue: 0.0, level: DiagnosticLevel.debug));
    properties.add(IntProperty('platformData', platformData, defaultValue: 0, level: DiagnosticLevel.debug));
    properties.add(FlagProperty('obscured', value: obscured, ifTrue: 'obscured', level: DiagnosticLevel.debug));
    properties.add(FlagProperty('synthesized', value: synthesized, ifTrue: 'synthesized', level: DiagnosticLevel.debug));
    properties.add(IntProperty('embedderId', embedderId, defaultValue: 0, level: DiagnosticLevel.debug));
  }

  /// Returns a complete textual description of this event.
  String toStringFull() {
    return toString(minLevel: DiagnosticLevel.fine);
  }
}

abstract class _AbstractPointerEvent implements PointerEvent { }

// The base class for transformed pointer event classes.
//
// A _TransformedPointerEvent stores an [original] event and the [transform]
// matrix. It defers all field getters to the original event, except for
// [localPosition] and [localDelta], which are calculated when first used.
abstract class _TransformedPointerEvent extends _AbstractPointerEvent with Diagnosticable, _PointerEventDescription {

  @override
  PointerEvent get original;

  @override
  Matrix4 get transform;

  @override
  int get embedderId => original.embedderId;

  @override
  Duration get timeStamp => original.timeStamp;

  @override
  int get pointer => original.pointer;

  @override
  PointerDeviceKind get kind => original.kind;

  @override
  int get device => original.device;

  @override
  Offset get position => original.position;

  @override
  Offset get delta => original.delta;

  @override
  int get buttons => original.buttons;

  @override
  bool get down => original.down;

  @override
  bool get obscured => original.obscured;

  @override
  double get pressure => original.pressure;

  @override
  double get pressureMin => original.pressureMin;

  @override
  double get pressureMax => original.pressureMax;

  @override
  double get distance => original.distance;

  @override
  double get distanceMin => 0.0;

  @override
  double get distanceMax => original.distanceMax;

  @override
  double get size => original.size;

  @override
  double get radiusMajor => original.radiusMajor;

  @override
  double get radiusMinor => original.radiusMinor;

  @override
  double get radiusMin => original.radiusMin;

  @override
  double get radiusMax => original.radiusMax;

  @override
  double get orientation => original.orientation;

  @override
  double get tilt => original.tilt;

  @override
  int get platformData => original.platformData;

  @override
  bool get synthesized => original.synthesized;

  @override
  late final Offset localPosition = PointerEvent.transformPosition(transform, position);

  @override
  late final Offset localDelta = PointerEvent.transformDeltaViaPositions(
    transform: transform,
    untransformedDelta: delta,
    untransformedEndPosition: position,
    transformedEndPosition: localPosition,
  );
}

mixin _CopyPointerAddedEvent on PointerEvent {
  @override
  PointerAddedEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerAddedEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The device has started tracking the pointer.
///
/// For example, the pointer might be hovering above the device, having not yet
/// made contact with the surface of the device.
class PointerAddedEvent extends PointerEvent with _PointerEventDescription, _CopyPointerAddedEvent {
  /// Creates a pointer added event.
  ///
  /// All of the arguments must be non-null.
  const PointerAddedEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         embedderId: embedderId,
       );

  @override
  PointerAddedEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerAddedEvent(original as PointerAddedEvent? ?? this, transform);
  }
}

class _TransformedPointerAddedEvent extends _TransformedPointerEvent with _CopyPointerAddedEvent implements PointerAddedEvent {
  _TransformedPointerAddedEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerAddedEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerAddedEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerRemovedEvent on PointerEvent {
  @override
  PointerRemovedEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerRemovedEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distanceMax: distanceMax ?? this.distanceMax,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The device is no longer tracking the pointer.
///
/// For example, the pointer might have drifted out of the device's hover
/// detection range or might have been disconnected from the system entirely.
class PointerRemovedEvent extends PointerEvent with _PointerEventDescription, _CopyPointerRemovedEvent {
  /// Creates a pointer removed event.
  ///
  /// All of the arguments must be non-null.
  const PointerRemovedEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distanceMax = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    PointerRemovedEvent? original,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distanceMax: distanceMax,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         original: original,
         embedderId: embedderId,
       );

  @override
  PointerRemovedEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerRemovedEvent(original as PointerRemovedEvent? ?? this, transform);
  }
}

class _TransformedPointerRemovedEvent extends _TransformedPointerEvent with _CopyPointerRemovedEvent implements PointerRemovedEvent {
  _TransformedPointerRemovedEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerRemovedEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerRemovedEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerHoverEvent on PointerEvent {
  @override
  PointerHoverEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerHoverEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      delta: delta ?? this.delta,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      synthesized: synthesized ?? this.synthesized,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has moved with respect to the device while the pointer is not
/// in contact with the device.
///
/// See also:
///
///  * [PointerEnterEvent], which reports when the pointer has entered an
///    object.
///  * [PointerExitEvent], which reports when the pointer has left an object.
///  * [PointerMoveEvent], which reports movement while the pointer is in
///    contact with the device.
///  * [Listener.onPointerHover], which allows callers to be notified of these
///    events in a widget tree.
class PointerHoverEvent extends PointerEvent with _PointerEventDescription, _CopyPointerHoverEvent {
  /// Creates a pointer hover event.
  ///
  /// All of the arguments must be non-null.
  const PointerHoverEvent({
    Duration timeStamp = Duration.zero,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int pointer = 0,
    int device = 0,
    Offset position = Offset.zero,
    Offset delta = Offset.zero,
    int buttons = 0,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    bool synthesized = false,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         delta: delta,
         buttons: buttons,
         down: false,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         synthesized: synthesized,
         embedderId: embedderId,
       );

  @override
  PointerHoverEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerHoverEvent(original as PointerHoverEvent? ?? this, transform);
  }
}

class _TransformedPointerHoverEvent extends _TransformedPointerEvent with _CopyPointerHoverEvent implements PointerHoverEvent {
  _TransformedPointerHoverEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerHoverEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerHoverEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerEnterEvent on PointerEvent {
  @override
  PointerEnterEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerEnterEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      delta: delta ?? this.delta,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      synthesized: synthesized ?? this.synthesized,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has moved with respect to the device while the pointer is or is
/// not in contact with the device, and it has entered a target object.
///
/// See also:
///
///  * [PointerHoverEvent], which reports when the pointer has moved while
///    within an object.
///  * [PointerExitEvent], which reports when the pointer has left an object.
///  * [PointerMoveEvent], which reports movement while the pointer is in
///    contact with the device.
///  * [MouseRegion.onEnter], which allows callers to be notified of these
///    events in a widget tree.
class PointerEnterEvent extends PointerEvent with _PointerEventDescription, _CopyPointerEnterEvent {
  /// Creates a pointer enter event.
  ///
  /// All of the arguments must be non-null.
  const PointerEnterEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    Offset delta = Offset.zero,
    int buttons = 0,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    bool down = false,
    bool synthesized = false,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         delta: delta,
         buttons: buttons,
         down: down,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         synthesized: synthesized,
         embedderId: embedderId,
       );

  /// Creates an enter event from a [PointerEvent].
  ///
  /// This is used by the [MouseTracker] to synthesize enter events.
  factory PointerEnterEvent.fromMouseEvent(PointerEvent event) => PointerEnterEvent(
    timeStamp: event.timeStamp,
    pointer: event.pointer,
    kind: event.kind,
    device: event.device,
    position: event.position,
    delta: event.delta,
    buttons: event.buttons,
    obscured: event.obscured,
    pressureMin: event.pressureMin,
    pressureMax: event.pressureMax,
    distance: event.distance,
    distanceMax: event.distanceMax,
    size: event.size,
    radiusMajor: event.radiusMajor,
    radiusMinor: event.radiusMinor,
    radiusMin: event.radiusMin,
    radiusMax: event.radiusMax,
    orientation: event.orientation,
    tilt: event.tilt,
    down: event.down,
    synthesized: event.synthesized,
  ).transformed(event.transform);

  @override
  PointerEnterEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerEnterEvent(original as PointerEnterEvent? ?? this, transform);
  }
}

class _TransformedPointerEnterEvent extends _TransformedPointerEvent with _CopyPointerEnterEvent implements PointerEnterEvent {
  _TransformedPointerEnterEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerEnterEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerEnterEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerExitEvent on PointerEvent {
  @override
  PointerExitEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerExitEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      delta: delta ?? this.delta,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      synthesized: synthesized ?? this.synthesized,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has moved with respect to the device while the pointer is or is
/// not in contact with the device, and exited a target object.
///
/// See also:
///
///  * [PointerHoverEvent], which reports when the pointer has moved while
///    within an object.
///  * [PointerEnterEvent], which reports when the pointer has entered an object.
///  * [PointerMoveEvent], which reports movement while the pointer is in
///    contact with the device.
///  * [MouseRegion.onExit], which allows callers to be notified of these
///    events in a widget tree.
class PointerExitEvent extends PointerEvent with _PointerEventDescription, _CopyPointerExitEvent {
  /// Creates a pointer exit event.
  ///
  /// All of the arguments must be non-null.
  const PointerExitEvent({
    Duration timeStamp = Duration.zero,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int pointer = 0,
    int device = 0,
    Offset position = Offset.zero,
    Offset delta = Offset.zero,
    int buttons = 0,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    bool down = false,
    bool synthesized = false,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         delta: delta,
         buttons: buttons,
         down: down,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         synthesized: synthesized,
         embedderId: embedderId,
       );

  /// Creates an exit event from a [PointerEvent].
  ///
  /// This is used by the [MouseTracker] to synthesize exit events.
  factory PointerExitEvent.fromMouseEvent(PointerEvent event) => PointerExitEvent(
    timeStamp: event.timeStamp,
    pointer: event.pointer,
    kind: event.kind,
    device: event.device,
    position: event.position,
    delta: event.delta,
    buttons: event.buttons,
    obscured: event.obscured,
    pressureMin: event.pressureMin,
    pressureMax: event.pressureMax,
    distance: event.distance,
    distanceMax: event.distanceMax,
    size: event.size,
    radiusMajor: event.radiusMajor,
    radiusMinor: event.radiusMinor,
    radiusMin: event.radiusMin,
    radiusMax: event.radiusMax,
    orientation: event.orientation,
    tilt: event.tilt,
    down: event.down,
    synthesized: event.synthesized,
  ).transformed(event.transform);

  @override
  PointerExitEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerExitEvent(original as PointerExitEvent? ?? this, transform);
  }

}

class _TransformedPointerExitEvent extends _TransformedPointerEvent with _CopyPointerExitEvent implements PointerExitEvent {
  _TransformedPointerExitEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerExitEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerExitEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerDownEvent on PointerEvent {
  @override
  PointerDownEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerDownEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      pointer: pointer ?? this.pointer,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressure: pressure ?? this.pressure,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has made contact with the device.
///
/// See also:
///
///  * [Listener.onPointerDown], which allows callers to be notified of these
///    events in a widget tree.
class PointerDownEvent extends PointerEvent with _PointerEventDescription, _CopyPointerDownEvent {
  /// Creates a pointer down event.
  ///
  /// All of the arguments must be non-null.
  const PointerDownEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    int buttons = kPrimaryButton,
    bool obscured = false,
    double pressure = 1.0,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         buttons: buttons,
         down: true,
         obscured: obscured,
         pressure: pressure,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: 0.0,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         embedderId: embedderId,
       );

  @override
  PointerDownEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerDownEvent(original as PointerDownEvent? ?? this, transform);
  }
}

class _TransformedPointerDownEvent extends _TransformedPointerEvent with _CopyPointerDownEvent implements PointerDownEvent {
  _TransformedPointerDownEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerDownEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerDownEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerMoveEvent on PointerEvent {
  @override
  PointerMoveEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerMoveEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      pointer: pointer ?? this.pointer,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      delta: delta ?? this.delta,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressure: pressure ?? this.pressure,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      synthesized: synthesized ?? this.synthesized,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has moved with respect to the device while the pointer is in
/// contact with the device.
///
/// See also:
///
///  * [PointerHoverEvent], which reports movement while the pointer is not in
///    contact with the device.
///  * [Listener.onPointerMove], which allows callers to be notified of these
///    events in a widget tree.
class PointerMoveEvent extends PointerEvent with _PointerEventDescription, _CopyPointerMoveEvent {
  /// Creates a pointer move event.
  ///
  /// All of the arguments must be non-null.
  const PointerMoveEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    Offset delta = Offset.zero,
    int buttons = kPrimaryButton,
    bool obscured = false,
    double pressure = 1.0,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    int platformData = 0,
    bool synthesized = false,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         delta: delta,
         buttons: buttons,
         down: true,
         obscured: obscured,
         pressure: pressure,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: 0.0,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         platformData: platformData,
         synthesized: synthesized,
         embedderId: embedderId,
       );

  @override
  PointerMoveEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }

    return _TransformedPointerMoveEvent(original as PointerMoveEvent? ?? this, transform);
  }
}

class _TransformedPointerMoveEvent extends _TransformedPointerEvent with _CopyPointerMoveEvent implements PointerMoveEvent {
  _TransformedPointerMoveEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerMoveEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerMoveEvent transformed(Matrix4? transform) => original.transformed(transform);
}

mixin _CopyPointerUpEvent on PointerEvent {
  @override
  PointerUpEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? localPosition,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerUpEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      pointer: pointer ?? this.pointer,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressure: pressure ?? this.pressure,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer has stopped making contact with the device.
///
/// See also:
///
///  * [Listener.onPointerUp], which allows callers to be notified of these
///    events in a widget tree.
class PointerUpEvent extends PointerEvent with _PointerEventDescription, _CopyPointerUpEvent {
  /// Creates a pointer up event.
  ///
  /// All of the arguments must be non-null.
  const PointerUpEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    int buttons = 0,
    bool obscured = false,
    // Allow pressure customization here because PointerUpEvent can contain
    // non-zero pressure. See https://github.com/flutter/flutter/issues/31340
    double pressure = 0.0,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         buttons: buttons,
         down: false,
         obscured: obscured,
         pressure: pressure,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         embedderId: embedderId,
       );

  @override
  PointerUpEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerUpEvent(original as PointerUpEvent? ?? this, transform);
  }
}

class _TransformedPointerUpEvent extends _TransformedPointerEvent with _CopyPointerUpEvent implements PointerUpEvent {
  _TransformedPointerUpEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerUpEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerUpEvent transformed(Matrix4? transform) => original.transformed(transform);
}

/// An event that corresponds to a discrete pointer signal.
///
/// Pointer signals are events that originate from the pointer but don't change
/// the state of the pointer itself, and are discrete rather than needing to be
/// interpreted in the context of a series of events.
///
/// See also:
///
///  * [Listener.onPointerSignal], which allows callers to be notified of these
///    events in a widget tree.
///  * [PointerSignalResolver], which provides an opt-in mechanism whereby
///    participating agents may disambiguate an event's target.
abstract class PointerSignalEvent extends PointerEvent {
  /// Abstract const constructor. This constructor enables subclasses to provide
  /// const constructors so that they can be used in const expressions.
  const PointerSignalEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.mouse,
    int device = 0,
    Offset position = Offset.zero,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         embedderId: embedderId,
       );
}

mixin _CopyPointerScrollEvent on PointerEvent {
  /// The amount to scroll, in logical pixels.
  Offset get scrollDelta;

  @override
  PointerScrollEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerScrollEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      scrollDelta: scrollDelta,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The pointer issued a scroll event.
///
/// Scrolling the scroll wheel on a mouse is an example of an event that
/// would create a [PointerScrollEvent].
///
/// See also:
///
///  * [Listener.onPointerSignal], which allows callers to be notified of these
///    events in a widget tree.
///  * [PointerSignalResolver], which provides an opt-in mechanism whereby
///    participating agents may disambiguate an event's target.
class PointerScrollEvent extends PointerSignalEvent with _PointerEventDescription, _CopyPointerScrollEvent {
  /// Creates a pointer scroll event.
  ///
  /// All of the arguments must be non-null.
  const PointerScrollEvent({
    Duration timeStamp = Duration.zero,
    PointerDeviceKind kind = PointerDeviceKind.mouse,
    int device = 0,
    Offset position = Offset.zero,
    this.scrollDelta = Offset.zero,
    int embedderId = 0,
  }) : assert(timeStamp != null),
       assert(kind != null),
       assert(device != null),
       assert(position != null),
       assert(scrollDelta != null),
       super(
         timeStamp: timeStamp,
         kind: kind,
         device: device,
         position: position,
         embedderId: embedderId,
       );

  @override
  final Offset scrollDelta;

  @override
  PointerScrollEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerScrollEvent(original as PointerScrollEvent? ?? this, transform);
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Offset>('scrollDelta', scrollDelta));
  }
}

class _TransformedPointerScrollEvent extends _TransformedPointerEvent with _CopyPointerScrollEvent implements PointerScrollEvent {
  _TransformedPointerScrollEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerScrollEvent original;

  @override
  final Matrix4 transform;

  @override
  Offset get scrollDelta => original.scrollDelta;

  @override
  PointerScrollEvent transformed(Matrix4? transform) => original.transformed(transform);

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Offset>('scrollDelta', scrollDelta));
  }
}

mixin _CopyPointerCancelEvent on PointerEvent {
  @override
  PointerCancelEvent copyWith({
    Duration? timeStamp,
    int? pointer,
    PointerDeviceKind? kind,
    int? device,
    Offset? position,
    Offset? delta,
    int? buttons,
    bool? obscured,
    double? pressure,
    double? pressureMin,
    double? pressureMax,
    double? distance,
    double? distanceMax,
    double? size,
    double? radiusMajor,
    double? radiusMinor,
    double? radiusMin,
    double? radiusMax,
    double? orientation,
    double? tilt,
    bool? synthesized,
    int? embedderId,
  }) {
    return PointerCancelEvent(
      timeStamp: timeStamp ?? this.timeStamp,
      pointer: pointer ?? this.pointer,
      kind: kind ?? this.kind,
      device: device ?? this.device,
      position: position ?? this.position,
      buttons: buttons ?? this.buttons,
      obscured: obscured ?? this.obscured,
      pressureMin: pressureMin ?? this.pressureMin,
      pressureMax: pressureMax ?? this.pressureMax,
      distance: distance ?? this.distance,
      distanceMax: distanceMax ?? this.distanceMax,
      size: size ?? this.size,
      radiusMajor: radiusMajor ?? this.radiusMajor,
      radiusMinor: radiusMinor ?? this.radiusMinor,
      radiusMin: radiusMin ?? this.radiusMin,
      radiusMax: radiusMax ?? this.radiusMax,
      orientation: orientation ?? this.orientation,
      tilt: tilt ?? this.tilt,
      embedderId: embedderId ?? this.embedderId,
    ).transformed(transform);
  }
}

/// The input from the pointer is no longer directed towards this receiver.
///
/// See also:
///
///  * [Listener.onPointerCancel], which allows callers to be notified of these
///    events in a widget tree.
class PointerCancelEvent extends PointerEvent with _PointerEventDescription, _CopyPointerCancelEvent {
  /// Creates a pointer cancel event.
  ///
  /// All of the arguments must be non-null.
  const PointerCancelEvent({
    Duration timeStamp = Duration.zero,
    int pointer = 0,
    PointerDeviceKind kind = PointerDeviceKind.touch,
    int device = 0,
    Offset position = Offset.zero,
    int buttons = 0,
    bool obscured = false,
    double pressureMin = 1.0,
    double pressureMax = 1.0,
    double distance = 0.0,
    double distanceMax = 0.0,
    double size = 0.0,
    double radiusMajor = 0.0,
    double radiusMinor = 0.0,
    double radiusMin = 0.0,
    double radiusMax = 0.0,
    double orientation = 0.0,
    double tilt = 0.0,
    int embedderId = 0,
  }) : super(
         timeStamp: timeStamp,
         pointer: pointer,
         kind: kind,
         device: device,
         position: position,
         buttons: buttons,
         down: false,
         obscured: obscured,
         pressure: 0.0,
         pressureMin: pressureMin,
         pressureMax: pressureMax,
         distance: distance,
         distanceMax: distanceMax,
         size: size,
         radiusMajor: radiusMajor,
         radiusMinor: radiusMinor,
         radiusMin: radiusMin,
         radiusMax: radiusMax,
         orientation: orientation,
         tilt: tilt,
         embedderId: embedderId,
       );

  @override
  PointerCancelEvent transformed(Matrix4? transform) {
    if (transform == null || transform == this.transform) {
      return this;
    }
    return _TransformedPointerCancelEvent(original as PointerCancelEvent? ?? this, transform);
  }
}

/// Determine the appropriate hit slop pixels based on the [kind] of pointer.
double computeHitSlop(PointerDeviceKind kind, DeviceGestureSettings? settings) {
  switch (kind) {
    case PointerDeviceKind.mouse:
      return kPrecisePointerHitSlop;
    case PointerDeviceKind.stylus:
    case PointerDeviceKind.invertedStylus:
    case PointerDeviceKind.unknown:
    case PointerDeviceKind.touch:
      return settings?.touchSlop ?? kTouchSlop;
  }
}

/// Determine the appropriate pan slop pixels based on the [kind] of pointer.
double computePanSlop(PointerDeviceKind kind, DeviceGestureSettings? settings) {
  switch (kind) {
    case PointerDeviceKind.mouse:
      return kPrecisePointerPanSlop;
    case PointerDeviceKind.stylus:
    case PointerDeviceKind.invertedStylus:
    case PointerDeviceKind.unknown:
    case PointerDeviceKind.touch:
      return settings?.panSlop ?? kPanSlop;
  }
}

/// Determine the appropriate scale slop pixels based on the [kind] of pointer.
double computeScaleSlop(PointerDeviceKind kind) {
  switch (kind) {
    case PointerDeviceKind.mouse:
      return kPrecisePointerScaleSlop;
    case PointerDeviceKind.stylus:
    case PointerDeviceKind.invertedStylus:
    case PointerDeviceKind.unknown:
    case PointerDeviceKind.touch:
      return kScaleSlop;
  }
}

class TransformedPointerCancelEvent extends _TransformedPointerEvent with _CopyPointerCancelEvent implements PointerCancelEvent {
  _TransformedPointerCancelEvent(this.original, this.transform)
    : assert(original != null), assert(transform != null);

  @override
  final PointerCancelEvent original;

  @override
  final Matrix4 transform;

  @override
  PointerCancelEvent transformed(Matrix4? transform) => original.transformed(transform);
}
