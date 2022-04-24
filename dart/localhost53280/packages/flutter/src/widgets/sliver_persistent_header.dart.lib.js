define(['dart_sdk', 'packages/flutter/src/scheduler/ticker.dart', 'packages/flutter/src/rendering/sliver_persistent_header.dart', 'packages/flutter/src/widgets/widget_inspector.dart', 'packages/flutter/src/foundation/debug.dart', 'packages/flutter/src/rendering/layer.dart'], (function load__packages__flutter__src__widgets__sliver_persistent_header_dart(dart_sdk, packages__flutter__src__scheduler__ticker$46dart, packages__flutter__src__rendering__sliver_persistent_header$46dart, packages__flutter__src__widgets__widget_inspector$46dart, packages__flutter__src__foundation__debug$46dart, packages__flutter__src__rendering__layer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ticker = packages__flutter__src__scheduler__ticker$46dart.src__scheduler__ticker;
  const sliver_persistent_header = packages__flutter__src__rendering__sliver_persistent_header$46dart.src__rendering__sliver_persistent_header;
  const widget_inspector = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__framework;
  const scrollable = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scrollable;
  const scroll_position = packages__flutter__src__widgets__widget_inspector$46dart.src__widgets__scroll_position;
  const diagnostics = packages__flutter__src__foundation__debug$46dart.src__foundation__diagnostics;
  const box = packages__flutter__src__rendering__layer$46dart.src__rendering__box;
  const object = packages__flutter__src__rendering__layer$46dart.src__rendering__object;
  var sliver_persistent_header$ = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $add = dartx.add;
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    DiagnosticsPropertyOfSliverPersistentHeaderDelegate: () => (T.DiagnosticsPropertyOfSliverPersistentHeaderDelegate = dart.constFn(diagnostics.DiagnosticsProperty$(sliver_persistent_header$.SliverPersistentHeaderDelegate)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    IterablePropertyOfString: () => (T.IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "SliverPersistentHeader",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFloatingPinnedPersistentHeader",
        [_Location_column]: 14,
        [_Location_line]: 163,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverPinnedPersistentHeader",
        [_Location_column]: 14,
        [_Location_line]: 165,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFloatingPersistentHeader",
        [_Location_column]: 14,
        [_Location_line]: 167,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverScrollingPersistentHeader",
        [_Location_column]: 12,
        [_Location_line]: 168,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FloatingHeader",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_FloatingHeader",
        [_Location_column]: 13,
        [_Location_line]: 299,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverScrollingPersistentHeader",
        [_Location_column]: 9,
        [_Location_line]: 392,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverPinnedPersistentHeader",
        [_Location_column]: 9,
        [_Location_line]: 420,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFloatingPersistentHeader",
        [_Location_column]: 9,
        [_Location_line]: 451,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_name]: "_SliverFloatingPinnedPersistentHeader",
        [_Location_column]: 9,
        [_Location_line]: 497,
        [_Location_file]: "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
      });
    }
  }, false);
  var C = Array(11).fill(void 0);
  var I = [
    "package:flutter/src/widgets/sliver_persistent_header.dart",
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/widgets/sliver_persistent_header.dart"
  ];
  sliver_persistent_header$.SliverPersistentHeaderDelegate = class SliverPersistentHeaderDelegate extends core.Object {
    get vsync() {
      return null;
    }
    get snapConfiguration() {
      return null;
    }
    get stretchConfiguration() {
      return null;
    }
    get showOnScreenConfiguration() {
      return null;
    }
  };
  (sliver_persistent_header$.SliverPersistentHeaderDelegate.new = function() {
    ;
  }).prototype = sliver_persistent_header$.SliverPersistentHeaderDelegate.prototype;
  dart.addTypeTests(sliver_persistent_header$.SliverPersistentHeaderDelegate);
  dart.addTypeCaches(sliver_persistent_header$.SliverPersistentHeaderDelegate);
  dart.setGetterSignature(sliver_persistent_header$.SliverPersistentHeaderDelegate, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$.SliverPersistentHeaderDelegate.__proto__),
    vsync: dart.nullable(ticker.TickerProvider),
    snapConfiguration: dart.nullable(sliver_persistent_header.FloatingHeaderSnapConfiguration),
    stretchConfiguration: dart.nullable(sliver_persistent_header.OverScrollHeaderStretchConfiguration),
    showOnScreenConfiguration: dart.nullable(sliver_persistent_header.PersistentHeaderShowOnScreenConfiguration)
  }));
  dart.setLibraryUri(sliver_persistent_header$.SliverPersistentHeaderDelegate, I[0]);
  var delegate$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.delegate");
  var pinned$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.pinned");
  var floating$ = dart.privateName(sliver_persistent_header$, "SliverPersistentHeader.floating");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  sliver_persistent_header$.SliverPersistentHeader = class SliverPersistentHeader extends framework.StatelessWidget {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get pinned() {
      return this[pinned$];
    }
    set pinned(value) {
      super.pinned = value;
    }
    get floating() {
      return this[floating$];
    }
    set floating(value) {
      super.floating = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let pinned = opts && 'pinned' in opts ? opts.pinned : false;
      let floating = opts && 'floating' in opts ? opts.floating : false;
      return new sliver_persistent_header$.SliverPersistentHeader.new({key: key, delegate: delegate, pinned: pinned, floating: floating, $creationLocationd_0dea112b090073317d4: C[0] || CT.C0});
    }
    build(context) {
      if (this.floating && this.pinned) return new sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C[1] || CT.C1});
      if (this.pinned) return new sliver_persistent_header$._SliverPinnedPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C[2] || CT.C2});
      if (this.floating) return new sliver_persistent_header$._SliverFloatingPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C[3] || CT.C3});
      return new sliver_persistent_header$._SliverScrollingPersistentHeader.new({delegate: this.delegate, $creationLocationd_0dea112b090073317d4: C[4] || CT.C4});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (T.DiagnosticsPropertyOfSliverPersistentHeaderDelegate()).new("delegate", this.delegate));
      let flags = (() => {
        let t0 = T.JSArrayOfString().of([]);
        if (this.pinned) t0.push("pinned");
        if (this.floating) t0.push("floating");
        return t0;
      })();
      if (flags[$isEmpty]) flags[$add]("normal");
      properties.add(new (T.IterablePropertyOfString()).new("mode", flags));
    }
  };
  (sliver_persistent_header$.SliverPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let pinned = opts && 'pinned' in opts ? opts.pinned : false;
    let floating = opts && 'floating' in opts ? opts.floating : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    this[pinned$] = pinned;
    this[floating$] = floating;
    if (!(delegate !== null)) dart.assertFailed(null, I[1], 127, 15, "delegate != null");
    if (!(pinned !== null)) dart.assertFailed(null, I[1], 128, 15, "pinned != null");
    if (!(floating !== null)) dart.assertFailed(null, I[1], 129, 15, "floating != null");
    sliver_persistent_header$.SliverPersistentHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$.SliverPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$.SliverPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$.SliverPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$.SliverPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$.SliverPersistentHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$.SliverPersistentHeader, I[0]);
  dart.setFieldSignature(sliver_persistent_header$.SliverPersistentHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header$.SliverPersistentHeader.__proto__),
    delegate: dart.finalFieldType(sliver_persistent_header$.SliverPersistentHeaderDelegate),
    pinned: dart.finalFieldType(core.bool),
    floating: dart.finalFieldType(core.bool)
  }));
  var child$ = dart.privateName(sliver_persistent_header$, "_FloatingHeader.child");
  sliver_persistent_header$._FloatingHeader = class _FloatingHeader extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new sliver_persistent_header$._FloatingHeader.new({key: key, child: child, $creationLocationd_0dea112b090073317d4: C[5] || CT.C5});
    }
    createState() {
      return new sliver_persistent_header$._FloatingHeaderState.new();
    }
  };
  (sliver_persistent_header$._FloatingHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    sliver_persistent_header$._FloatingHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._FloatingHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._FloatingHeader);
  dart.addTypeCaches(sliver_persistent_header$._FloatingHeader);
  dart.setMethodSignature(sliver_persistent_header$._FloatingHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._FloatingHeader.__proto__),
    createState: dart.fnType(sliver_persistent_header$._FloatingHeaderState, [])
  }));
  dart.setLibraryUri(sliver_persistent_header$._FloatingHeader, I[0]);
  dart.setFieldSignature(sliver_persistent_header$._FloatingHeader, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._FloatingHeader.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  var _position = dart.privateName(sliver_persistent_header$, "_position");
  var _isScrollingListener = dart.privateName(sliver_persistent_header$, "_isScrollingListener");
  var _headerRenderer = dart.privateName(sliver_persistent_header$, "_headerRenderer");
  sliver_persistent_header$._FloatingHeaderState = class _FloatingHeaderState extends framework.State$(sliver_persistent_header$._FloatingHeader) {
    didChangeDependencies() {
      let t1;
      super.didChangeDependencies();
      if (this[_position] != null) dart.nullCheck(this[_position]).isScrollingNotifier.removeListener(dart.bind(this, _isScrollingListener));
      this[_position] = (t1 = scrollable.Scrollable.of(this.context), t1 == null ? null : t1.position);
      if (this[_position] != null) dart.nullCheck(this[_position]).isScrollingNotifier.addListener(dart.bind(this, _isScrollingListener));
    }
    dispose() {
      if (this[_position] != null) dart.nullCheck(this[_position]).isScrollingNotifier.removeListener(dart.bind(this, _isScrollingListener));
      super.dispose();
    }
    [_headerRenderer]() {
      return this.context.findAncestorRenderObjectOfType(sliver_persistent_header.RenderSliverFloatingPersistentHeader);
    }
    [_isScrollingListener]() {
      let t1, t1$, t1$0;
      if (!(this[_position] != null)) dart.assertFailed(null, I[1], 228, 12, "_position != null");
      let header = this[_headerRenderer]();
      if (dart.nullCheck(this[_position]).isScrollingNotifier.value) {
        t1 = header;
        t1 == null ? null : t1.updateScrollStartDirection(dart.nullCheck(this[_position]).userScrollDirection);
        t1$ = header;
        t1$ == null ? null : t1$.maybeStopSnapAnimation(dart.nullCheck(this[_position]).userScrollDirection);
      } else {
        t1$0 = header;
        t1$0 == null ? null : t1$0.maybeStartSnapAnimation(dart.nullCheck(this[_position]).userScrollDirection);
      }
    }
    build(context) {
      return this.widget.child;
    }
    static ['_#new#tearOff']() {
      return new sliver_persistent_header$._FloatingHeaderState.new();
    }
  };
  (sliver_persistent_header$._FloatingHeaderState.new = function() {
    this[_position] = null;
    sliver_persistent_header$._FloatingHeaderState.__proto__.new.call(this);
    ;
  }).prototype = sliver_persistent_header$._FloatingHeaderState.prototype;
  dart.addTypeTests(sliver_persistent_header$._FloatingHeaderState);
  dart.addTypeCaches(sliver_persistent_header$._FloatingHeaderState);
  dart.setMethodSignature(sliver_persistent_header$._FloatingHeaderState, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._FloatingHeaderState.__proto__),
    [_headerRenderer]: dart.fnType(dart.nullable(sliver_persistent_header.RenderSliverFloatingPersistentHeader), []),
    [_isScrollingListener]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._FloatingHeaderState, I[0]);
  dart.setFieldSignature(sliver_persistent_header$._FloatingHeaderState, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._FloatingHeaderState.__proto__),
    [_position]: dart.fieldType(dart.nullable(scroll_position.ScrollPosition))
  }));
  var _element = dart.privateName(sliver_persistent_header$, "_element");
  var _build = dart.privateName(sliver_persistent_header$, "_build");
  sliver_persistent_header$._SliverPersistentHeaderElement = class _SliverPersistentHeaderElement extends framework.RenderObjectElement {
    static ['_#new#tearOff'](widget, opts) {
      let floating = opts && 'floating' in opts ? opts.floating : false;
      return new sliver_persistent_header$._SliverPersistentHeaderElement.new(widget, {floating: floating});
    }
    get widget() {
      return sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.as(super.widget);
    }
    get renderObject() {
      return sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.as(super.renderObject);
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this.renderObject[_element] = this;
    }
    unmount() {
      this.renderObject[_element] = null;
      super.unmount();
    }
    update(newWidget) {
      sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.as(newWidget);
      let oldWidget = this.widget;
      super.update(newWidget);
      let newDelegate = newWidget.delegate;
      let oldDelegate = oldWidget.delegate;
      if (!newDelegate[$_equals](oldDelegate) && (!newDelegate[$runtimeType]._equals(oldDelegate[$runtimeType]) || newDelegate.shouldRebuild(oldDelegate))) this.renderObject.triggerRebuild();
    }
    performRebuild() {
      super.performRebuild();
      this.renderObject.triggerRebuild();
    }
    [_build](shrinkOffset, overlapsContent) {
      dart.nullCheck(this.owner).buildScope(this, dart.fn(() => {
        this.child = this.updateChild(this.child, this.floating ? new sliver_persistent_header$._FloatingHeader.new({child: this.widget.delegate.build(this, shrinkOffset, overlapsContent), $creationLocationd_0dea112b090073317d4: C[6] || CT.C6}) : this.widget.delegate.build(this, shrinkOffset, overlapsContent), null);
      }, T.VoidTovoid()));
    }
    forgetChild(child) {
      if (!child._equals(this.child)) dart.assertFailed(null, I[1], 312, 12, "child == this.child");
      this.child = null;
      super.forgetChild(child);
    }
    insertRenderObjectChild(child, slot) {
      box.RenderBox.as(child);
      if (!this.renderObject.debugValidateChild(child)) dart.assertFailed(null, I[1], 319, 12, "renderObject.debugValidateChild(child)");
      this.renderObject.child = child;
    }
    moveRenderObjectChild(child, oldSlot, newSlot) {
      object.RenderObject.as(child);
      if (!false) dart.assertFailed(null, I[1], 325, 12, "false");
    }
    removeRenderObjectChild(child, slot) {
      object.RenderObject.as(child);
      this.renderObject.child = null;
    }
    visitChildren(visitor) {
      if (this.child != null) visitor(dart.nullCheck(this.child));
    }
  };
  (sliver_persistent_header$._SliverPersistentHeaderElement.new = function(widget, opts) {
    let floating = opts && 'floating' in opts ? opts.floating : false;
    this.child = null;
    this.floating = floating;
    if (!(floating !== null)) dart.assertFailed(null, I[1], 252, 15, "floating != null");
    sliver_persistent_header$._SliverPersistentHeaderElement.__proto__.new.call(this, widget);
    ;
  }).prototype = sliver_persistent_header$._SliverPersistentHeaderElement.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPersistentHeaderElement);
  dart.addTypeCaches(sliver_persistent_header$._SliverPersistentHeaderElement);
  dart.setMethodSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    [_build]: dart.fnType(dart.void, [core.double, core.bool])
  }));
  dart.setGetterSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    widget: sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget,
    renderObject: sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPersistentHeaderElement, I[0]);
  dart.setFieldSignature(sliver_persistent_header$._SliverPersistentHeaderElement, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._SliverPersistentHeaderElement.__proto__),
    floating: dart.finalFieldType(core.bool),
    child: dart.fieldType(dart.nullable(framework.Element))
  }));
  var delegate$0 = dart.privateName(sliver_persistent_header$, "_SliverPersistentHeaderRenderObjectWidget.delegate");
  var floating$0 = dart.privateName(sliver_persistent_header$, "_SliverPersistentHeaderRenderObjectWidget.floating");
  sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget = class _SliverPersistentHeaderRenderObjectWidget extends framework.RenderObjectWidget {
    get delegate() {
      return this[delegate$0];
    }
    set delegate(value) {
      super.delegate = value;
    }
    get floating() {
      return this[floating$0];
    }
    set floating(value) {
      super.floating = value;
    }
    createElement() {
      return new sliver_persistent_header$._SliverPersistentHeaderElement.new(this, {floating: this.floating});
    }
    debugFillProperties(description) {
      super.debugFillProperties(description);
      description.add(new (T.DiagnosticsPropertyOfSliverPersistentHeaderDelegate()).new("delegate", this.delegate));
    }
  };
  (sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let floating = opts && 'floating' in opts ? opts.floating : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$0] = delegate;
    this[floating$0] = floating;
    if (!(delegate !== null)) dart.assertFailed(null, I[1], 345, 15, "delegate != null");
    if (!(floating !== null)) dart.assertFailed(null, I[1], 346, 15, "floating != null");
    sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget);
  dart.addTypeCaches(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget);
  dart.setMethodSignature(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__),
    createElement: dart.fnType(sliver_persistent_header$._SliverPersistentHeaderElement, [])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, I[0]);
  dart.setFieldSignature(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget.__proto__),
    delegate: dart.finalFieldType(sliver_persistent_header$.SliverPersistentHeaderDelegate),
    floating: dart.finalFieldType(core.bool)
  }));
  var _element$ = dart.privateName(sliver_persistent_header$, "_RenderSliverPersistentHeaderForWidgetsMixin._element");
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin = class _RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverPersistentHeader {};
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinOn] = RenderSliverPersistentHeader => class _RenderSliverPersistentHeaderForWidgetsMixin extends RenderSliverPersistentHeader {
    get [_element]() {
      return this[_element$];
    }
    set [_element](value) {
      this[_element$] = value;
    }
    get minExtent() {
      return dart.nullCheck(this[_element]).widget.delegate.minExtent;
    }
    get maxExtent() {
      return dart.nullCheck(this[_element]).widget.delegate.maxExtent;
    }
    updateChild(shrinkOffset, overlapsContent) {
      if (!(this[_element] != null)) dart.assertFailed(null, I[1], 381, 12, "_element != null");
      dart.nullCheck(this[_element])[_build](shrinkOffset, overlapsContent);
    }
    triggerRebuild() {
      this.markNeedsLayout();
    }
  };
  (sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew] = function() {
    this[_element$] = null;
  }).prototype = sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.implements] = () => [sliver_persistent_header.RenderSliverPersistentHeader];
  dart.setMethodSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    triggerRebuild: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getGetters(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    minExtent: core.double,
    maxExtent: core.double
  }));
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, I[0]);
  dart.setFieldSignature(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, () => ({
    __proto__: dart.getFields(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin.__proto__),
    [_element]: dart.fieldType(dart.nullable(sliver_persistent_header$._SliverPersistentHeaderElement))
  }));
  sliver_persistent_header$._SliverScrollingPersistentHeader = class _SliverScrollingPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new sliver_persistent_header$._SliverScrollingPersistentHeader.new({key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: C[7] || CT.C7});
    }
    createRenderObject(context) {
      return new sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.new({stretchConfiguration: this.delegate.stretchConfiguration});
    }
  };
  (sliver_persistent_header$._SliverScrollingPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverScrollingPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverScrollingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverScrollingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverScrollingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverScrollingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverScrollingPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverScrollingPersistentHeader, I[0]);
  const RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverScrollingPersistentHeader {};
  (RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets = class _RenderSliverScrollingPersistentHeaderForWidgets extends RenderSliverScrollingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
      return new sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.new({child: child, stretchConfiguration: stretchConfiguration});
    }
  };
  (sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverScrollingPersistentHeaderForWidgets, I[0]);
  sliver_persistent_header$._SliverPinnedPersistentHeader = class _SliverPinnedPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new sliver_persistent_header$._SliverPinnedPersistentHeader.new({key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: C[8] || CT.C8});
    }
    createRenderObject(context) {
      return new sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.new({stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
  };
  (sliver_persistent_header$._SliverPinnedPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverPinnedPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverPinnedPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverPinnedPersistentHeader, I[0]);
  const RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverPinnedPersistentHeader {};
  (RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets = class _RenderSliverPinnedPersistentHeaderForWidgets extends RenderSliverPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
      let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
      return new sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.new({child: child, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    }
  };
  (sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverPinnedPersistentHeaderForWidgets, I[0]);
  sliver_persistent_header$._SliverFloatingPersistentHeader = class _SliverFloatingPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new sliver_persistent_header$._SliverFloatingPersistentHeader.new({key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: C[9] || CT.C9});
    }
    createRenderObject(context) {
      return new sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.new({vsync: this.delegate.vsync, snapConfiguration: this.delegate.snapConfiguration, stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
    updateRenderObject(context, renderObject) {
      sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.as(renderObject);
      renderObject.vsync = this.delegate.vsync;
      renderObject.snapConfiguration = this.delegate.snapConfiguration;
      renderObject.stretchConfiguration = this.delegate.stretchConfiguration;
      renderObject.showOnScreenConfiguration = this.delegate.showOnScreenConfiguration;
    }
  };
  (sliver_persistent_header$._SliverFloatingPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverFloatingPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, floating: true, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverFloatingPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverFloatingPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverFloatingPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverFloatingPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverFloatingPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverFloatingPersistentHeader, I[0]);
  const RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverFloatingPinnedPersistentHeader {};
  (RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets = class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends RenderSliverFloatingPinnedPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
      let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
      let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
      return new sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.new({child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    }
  };
  (sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets, I[0]);
  sliver_persistent_header$._SliverFloatingPinnedPersistentHeader = class _SliverFloatingPinnedPersistentHeader extends sliver_persistent_header$._SliverPersistentHeaderRenderObjectWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      return new sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.new({key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: C[10] || CT.C10});
    }
    createRenderObject(context) {
      return new sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.new({vsync: this.delegate.vsync, snapConfiguration: this.delegate.snapConfiguration, stretchConfiguration: this.delegate.stretchConfiguration, showOnScreenConfiguration: this.delegate.showOnScreenConfiguration});
    }
    updateRenderObject(context, renderObject) {
      sliver_persistent_header$._RenderSliverFloatingPinnedPersistentHeaderForWidgets.as(renderObject);
      renderObject.vsync = this.delegate.vsync;
      renderObject.snapConfiguration = this.delegate.snapConfiguration;
      renderObject.stretchConfiguration = this.delegate.stretchConfiguration;
      renderObject.showOnScreenConfiguration = this.delegate.showOnScreenConfiguration;
    }
  };
  (sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.__proto__.new.call(this, {key: key, delegate: delegate, floating: true, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.prototype;
  dart.addTypeTests(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader);
  dart.addTypeCaches(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader);
  dart.setMethodSignature(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader, () => ({
    __proto__: dart.getMethods(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader.__proto__),
    createRenderObject: dart.fnType(sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin, [framework.BuildContext])
  }));
  dart.setLibraryUri(sliver_persistent_header$._SliverFloatingPinnedPersistentHeader, I[0]);
  const RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 = class RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header.RenderSliverFloatingPersistentHeader {};
  (RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.new = function(opts) {
    sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin[dart.mixinNew].call(this);
    RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.__proto__.new.call(this, opts);
  }).prototype = RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36.prototype;
  dart.applyMixin(RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36, sliver_persistent_header$._RenderSliverPersistentHeaderForWidgetsMixin);
  sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets = class _RenderSliverFloatingPersistentHeaderForWidgets extends RenderSliverFloatingPersistentHeader__RenderSliverPersistentHeaderForWidgetsMixin$36 {
    static ['_#new#tearOff'](opts) {
      let child = opts && 'child' in opts ? opts.child : null;
      let vsync = opts && 'vsync' in opts ? opts.vsync : null;
      let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
      let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
      let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
      return new sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.new({child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    }
  };
  (sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let snapConfiguration = opts && 'snapConfiguration' in opts ? opts.snapConfiguration : null;
    let stretchConfiguration = opts && 'stretchConfiguration' in opts ? opts.stretchConfiguration : null;
    let showOnScreenConfiguration = opts && 'showOnScreenConfiguration' in opts ? opts.showOnScreenConfiguration : null;
    sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.__proto__.new.call(this, {child: child, vsync: vsync, snapConfiguration: snapConfiguration, stretchConfiguration: stretchConfiguration, showOnScreenConfiguration: showOnScreenConfiguration});
    ;
  }).prototype = sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets.prototype;
  dart.addTypeTests(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets);
  dart.addTypeCaches(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets);
  dart.setLibraryUri(sliver_persistent_header$._RenderSliverFloatingPersistentHeaderForWidgets, I[0]);
  dart.trackLibraries("packages/flutter/src/widgets/sliver_persistent_header.dart", {
    "package:flutter/src/widgets/sliver_persistent_header.dart": sliver_persistent_header$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sliver_persistent_header.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkE+B;IAAI;;AAWyB;IAAI;;AAWI;IAAI;;AAMM;IAAI;;;;EA9E1C;;;;;;;;;;;;;;;;;;;IA4HD;;;;;;IAO1B;;;;;;IAUA;;;;;;;;;;;;;UAGe;AACxB,UAAI,iBAAY,aACd,MAAO,oFAAgD;AACzD,UAAI,aACF,MAAO,4EAAwC;AACjD,UAAI,eACF,MAAO,8EAA0C;AACnD,YAAO,+EAA2C;IACpD;wBAGqD;AACd,MAA/B,0BAAoB,UAAU;AAMnC,MALD,AAAW,UAAD,KACR,kEACE,YACA;AAGe,kBAAgB;;AACjC,YAAI,aAAQ;AACZ,YAAI,eAAU;;;AAEhB,UAAI,AAAM,KAAD,YACP,AAAM,AAAa,KAAd,OAAK;AAC2C,MAAvD,AAAW,UAAD,KAAK,uCAAyB,QAAQ,KAAK;IACvD;;;QAhEO;QACS;QACT;QACA;;IAFS;IACT;IACA;UACK,AAAS,QAAD;UACR,AAAO,MAAD;UACN,AAAS,QAAD;AACf,oFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IA+DP;;;;;;;;;;;;AAGyB;IAAsB;;;QAL/B;QAAmB;;;AAAW,6EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;AAiB3C,MAAvB;AACN,UAAI,yBACO,AAAE,AAAoB,AAAoC,eAAnE,8DAA8C;AACJ,MAA5C,wBAAuB,yBAAG,4BAAH,OAAa;AACpC,UAAI,yBACO,AAAE,AAAoB,AAAiC,eAAhE,2DAA2C;IAC/C;;AAIE,UAAI,yBACO,AAAE,AAAoB,AAAoC,eAAnE,8DAA8C;AACjC,MAAT;IACR;;AAGE,YAAO,AAAQ;IACjB;;;AAGE,YAAO,AAAU;AAK2B,mBAAS;AACrD,UAAa,AAAE,AAAoB,eAA/B;AACgE,aAAlE,MAAM;qBAAN,OAAQ,8BAAoC,AAAE,eAAX;AAE2B,cAA9D,MAAM;sBAAN,OAAQ,2BAAgC,AAAE,eAAX;;AAGgC,eAA/D,MAAM;uBAAN,OAAQ,6BAAiC,AAAE,eAAX;;IAEpC;UAG0B;AAAY,YAAA,AAAO;IAAK;;;;;;IAzClC;;;EA0ClB;;;;;;;;;;;;;;;;;;;;;;AAY0D,YAAa,wEAAP;IAAmD;;AAGhD,YAAmB,2EAAb;IAA4D;UAG/G,QAAgB;AACN,MAAtB,YAAM,MAAM,EAAE,OAAO;AACC,MAA5B,AAAa,8BAAW;IAC1B;;AAI8B,MAA5B,AAAa,8BAAW;AACT,MAAT;IACR;WAGsD;;AACJ,sBAAY;AACrC,MAAjB,aAAO,SAAS;AACe,wBAAc,AAAU,SAAD;AACvB,wBAAc,AAAU,SAAD;AAC5D,WAAI,WAAW,WAAI,WAAW,OACzB,AAAY,WAAD,uBAAgB,AAAY,WAAD,mBAAgB,AAAY,WAAD,eAAe,WAAW,IAC9F,AAAa,AAAgB;IACjC;;AAIwB,MAAhB;AACuB,MAA7B,AAAa;IACf;aAImB,cAAmB;AAalC,MAZG,AAAE,eAAP,uBAAkB,MAAM;AAWrB,QAVD,aAAQ,iBACN,YACA,gBACI,0DAAuB,AAAO,AAAS,2BACvC,MACA,YAAY,EACZ,eAAe,6DAEf,AAAO,AAAS,2BAAM,MAAM,YAAY,EAAE,eAAe,GAC7D;;IAGN;gBAGyB;AACvB,WAAO,AAAM,KAAD,SAAS;AACJ,MAAZ,aAAQ;AACW,MAAlB,kBAAY,KAAK;IACzB;4BAGiD,OAAe;;AAC9D,WAAO,AAAa,qCAAmB,KAAK;AAClB,MAA1B,AAAa,0BAAQ,KAAK;IAC5B;0BAGkD,OAAe,SAAiB;;AAChF,WAAO;IACT;4BAGoD,OAAe;;AACxC,MAAzB,AAAa,0BAAQ;IACvB;kBAGkC;AAChC,UAAI,oBACF,AAAO,AAAQ,OAAR,CAAM,eAAL;IACZ;;2EAvF4C;QACrC;IAyCE;IAzCF;UACK,AAAS,QAAD;AACf,sFAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;;;IAgGmB;;;;;;IAC1B;;;;;;;AAGuC,8EAA+B,iBAAgB;IAAS;wBAMrD;AACb,MAAhC,0BAAoB,WAAW;AAMpC,MALD,AAAY,WAAD,KACT,kEACE,YACA;IAGN;;;QAzBO;QACS;QACT;;IADS;IACT;UACK,AAAS,QAAD;UACR,AAAS,QAAD;AACf,uGAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;IAwBY;;;;;;;AAGR,YAAQ,AAAE,AAAO,AAAS,gBAA1B;IAAmC;;AAGnC,YAAQ,AAAE,AAAO,AAAS,gBAA1B;IAAmC;gBAGnC,cAAmB;AACzC,YAAO,AAAS;AAC+B,MAAvC,AAAE,eAAV,wBAAiB,YAAY,EAAE,eAAe;IAChD;;AAImB,MAAjB;IACF;;;IAjBgC;;;;;;;;;;;;;;;;;;;;;;;;;uBA8B6C;AAC3E,YAAO,2GACiB,AAAS;IAEnC;;;QAZO;QACmC;;AACrC,8FACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;;;;;;;QAaY;QAC2B;AACnC,gHACI,KAAK,wBACU,oBAAoB;;EAC3C;;;;;;;;;;uBAa4E;AAC3E,YAAO,wGACiB,AAAS,+DACJ,AAAS;IAExC;;;QAbO;QACmC;;AACrC,2FACE,GAAG,YACE,QAAQ;;EACnB;;;;;;;;;;;;;;;;;;;;;;;QAcY;QAC2B;QACK;AACxC,6GACI,KAAK,wBACU,oBAAoB,6BACf,yBAAyB;;EACrD;;;;;;;;;;uBAc4E;AAC3E,YAAO,2FACE,AAAS,wCACG,AAAS,uDACN,AAAS,+DACJ,AAAS;IAExC;uBAGqC,SAAyD;;AACzD,MAAnC,AAAa,YAAD,SAAS,AAAS;AAC6B,MAA3D,AAAa,YAAD,qBAAqB,AAAS;AACuB,MAAjE,AAAa,YAAD,wBAAwB,AAAS;AAC8B,MAA3E,AAAa,YAAD,6BAA6B,AAAS;IACpD;;;QAxBO;QACmC;;AACrC,6FACE,GAAG,YACE,QAAQ,YACR;;EACX;;;;;;;;;;;;;;;;;;;;;;;;;QAwBY;QACc;QACQ;QACK;QACK;AACxC,qHACI,KAAK,SACL,KAAK,qBACO,iBAAiB,wBACd,oBAAoB,6BACf,yBAAyB;;EACrD;;;;;;;;;;uBAc4E;AAC3E,YAAO,iGACE,AAAS,wCACG,AAAS,uDACN,AAAS,+DACJ,AAAS;IAExC;uBAGqC,SAA+D;;AAC/D,MAAnC,AAAa,YAAD,SAAS,AAAS;AAC6B,MAA3D,AAAa,YAAD,qBAAqB,AAAS;AACuB,MAAjE,AAAa,YAAD,wBAAwB,AAAS;AAC8B,MAA3E,AAAa,YAAD,6BAA6B,AAAS;IACpD;;;QAxBO;QACmC;;AACrC,mGACE,GAAG,YACE,QAAQ,YACR;;EACX;;;;;;;;;;;;;;;;;;;;;;;;;QAwBY;QACc;QACQ;QACK;QACK;AACxC,+GACI,KAAK,SACL,KAAK,qBACO,iBAAiB,wBACd,oBAAoB,6BACf,yBAAyB;;EACrD","file":"../../../../../../../../../../packages/flutter/src/widgets/sliver_persistent_header.dart.lib.js"}');
  // Exports:
  return {
    src__widgets__sliver_persistent_header: sliver_persistent_header$
  };
}));

//# sourceMappingURL=sliver_persistent_header.dart.lib.js.map
