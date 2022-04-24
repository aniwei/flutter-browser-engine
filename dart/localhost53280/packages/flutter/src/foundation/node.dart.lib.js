define(['dart_sdk'], (function load__packages__flutter__src__foundation__node_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var node = Object.create(dart.library);
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTobool: () => (T.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/node.dart",
    "package:flutter/src/foundation/node.dart"
  ];
  var _depth = dart.privateName(node, "_depth");
  var _owner = dart.privateName(node, "_owner");
  var _parent = dart.privateName(node, "_parent");
  node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, I[0], 56, 12, "child.owner == owner");
      if (child[_depth] <= this[_depth]) {
        child[_depth] = this[_depth] + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      core.Object.as(owner);
      if (!(owner !== null)) dart.assertFailed(null, I[0], 95, 12, "owner != null");
      if (!(this[_owner] == null)) dart.assertFailed(null, I[0], 96, 12, "_owner == null");
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed(null, I[0], 112, 12, "_owner != null");
      this[_owner] = null;
      if (!(this.parent == null || this.attached === dart.nullCheck(this.parent).attached)) dart.assertFailed(null, I[0], 114, 12, "parent == null || attached == parent!.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      node.AbstractNode.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 127, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, I[0], 128, 12, "child._parent == null");
      if (!dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = dart.nullCheck(node.parent);
        if (!!node[$_equals](child)) dart.assertFailed(null, I[0], 133, 14, "node != child");
        return true;
      }, T.VoidTobool())()) dart.assertFailed(null, I[0], 129, 12, "() {\n      AbstractNode node = this;\n      while (node.parent != null)\n        node = node.parent!;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      child[_parent] = this;
      if (this.attached) child.attach(dart.nullCheck(this[_owner]));
      this.redepthChild(child);
    }
    dropChild(child) {
      node.AbstractNode.as(child);
      if (!(child !== null)) dart.assertFailed(null, I[0], 148, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, I[0], 149, 12, "child._parent == this");
      if (!(child.attached === this.attached)) dart.assertFailed(null, I[0], 150, 12, "child.attached == attached");
      child[_parent] = null;
      if (this.attached) child.detach();
    }
    static ['_#new#tearOff']() {
      return new node.AbstractNode.new();
    }
  };
  (node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = node.AbstractNode.prototype;
  dart.addTypeTests(node.AbstractNode);
  dart.addTypeCaches(node.AbstractNode);
  dart.setMethodSignature(node.AbstractNode, () => ({
    __proto__: dart.getMethods(node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    dropChild: dart.fnType(dart.void, [dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(node.AbstractNode, () => ({
    __proto__: dart.getGetters(node.AbstractNode.__proto__),
    depth: core.int,
    owner: dart.nullable(core.Object),
    attached: core.bool,
    parent: dart.nullable(node.AbstractNode)
  }));
  dart.setLibraryUri(node.AbstractNode, I[1]);
  dart.setFieldSignature(node.AbstractNode, () => ({
    __proto__: dart.getFields(node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner]: dart.fieldType(dart.nullable(core.Object)),
    [_parent]: dart.fieldType(dart.nullable(node.AbstractNode))
  }));
  dart.trackLibraries("packages/flutter/src/foundation/node.dart", {
    "package:flutter/src/foundation/node.dart": node
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["node.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AA8CmB;IAAM;iBAQQ;AAC7B,WAAmB,YAAZ,AAAM,KAAD,QAAU;AACtB,UAAI,AAAM,AAAO,KAAR,YAAW;AACO,QAAzB,AAAM,KAAD,WAAU,AAAO,eAAE;AACD,QAAvB,AAAM,KAAD;;IAET;;IAMyB;;AAKJ;IAAM;;AAQN,YAAA,AAAO;IAAO;WAcN;;AAC3B,YAAO,AAAM,KAAD;AACZ,YAAO,AAAO;AACA,MAAd,eAAS,KAAK;IAChB;;AAcE,YAAO,AAAO;AACD,MAAb,eAAS;AACT,YAAO,AAAO,AAAQ,uBAAG,AAAS,kBAAS,AAAE,eAAR;IACvC;;AAG4B;IAAO;eAQI;;AACrC,YAAO,AAAM,KAAD;AACZ,YAAO,AAAM,AAAQ,KAAT;AACZ,WAAO,AAMN;AALc,mBAAO;AACpB,eAAO,AAAK,IAAD;AACU,UAAnB,OAAkB,eAAX,AAAK,IAAD;AACb,aAAY,CAAL,IAAI,WAAI,KAAK;AACpB,cAAO;;AAEW,MAApB,AAAM,KAAD,YAAW;AAChB,UAAI,eACF,AAAM,AAAe,KAAhB,QAAc,eAAN;AACI,MAAnB,kBAAa,KAAK;IACpB;cAOsC;;AACpC,YAAO,AAAM,KAAD;AACZ,WAAqB,YAAd,AAAM,KAAD,WAAY;AACxB,YAAO,AAAM,AAAS,KAAV,cAAa;AACL,MAApB,AAAM,KAAD,YAAW;AAChB,UAAI,eACF,AAAM,AAAQ,KAAT;IACT;;;;;;IA1GI,eAAS;IAyBL;IA8CM;;EAoChB","file":"../../../../../../../../../../packages/flutter/src/foundation/node.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__node: node
  };
}));

//# sourceMappingURL=node.dart.lib.js.map
