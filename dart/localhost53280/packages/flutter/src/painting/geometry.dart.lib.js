define(['dart_sdk'], (function load__packages__flutter__src__painting__geometry_dart(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var geometry = Object.create(dart.library);
  var $clamp = dartx.clamp;
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/painting/geometry.dart"];
  geometry.positionDependentBox = function positionDependentBox(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let childSize = opts && 'childSize' in opts ? opts.childSize : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let preferBelow = opts && 'preferBelow' in opts ? opts.preferBelow : null;
    let verticalOffset = opts && 'verticalOffset' in opts ? opts.verticalOffset : 0;
    let margin = opts && 'margin' in opts ? opts.margin : 10;
    if (!(size !== null)) dart.assertFailed(null, I[0], 48, 10, "size != null");
    if (!(childSize !== null)) dart.assertFailed(null, I[0], 49, 10, "childSize != null");
    if (!(target !== null)) dart.assertFailed(null, I[0], 50, 10, "target != null");
    if (!(verticalOffset !== null)) dart.assertFailed(null, I[0], 51, 10, "verticalOffset != null");
    if (!(preferBelow !== null)) dart.assertFailed(null, I[0], 52, 10, "preferBelow != null");
    if (!(margin !== null)) dart.assertFailed(null, I[0], 53, 10, "margin != null");
    let fitsBelow = target.dy + verticalOffset + childSize.height <= size.height - margin;
    let fitsAbove = target.dy - verticalOffset - childSize.height >= margin;
    let tooltipBelow = preferBelow ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y = null;
    if (tooltipBelow)
      y = math.min(core.double, target.dy + verticalOffset, size.height - margin);
    else
      y = math.max(core.double, target.dy - verticalOffset - childSize.height, margin);
    let x = null;
    if (size.width - margin * 2.0 < childSize.width) {
      x = (size.width - childSize.width) / 2.0;
    } else {
      let normalizedTargetX = target.dx[$clamp](margin, size.width - margin);
      let edge = margin + childSize.width / 2.0;
      if (normalizedTargetX < edge) {
        x = margin;
      } else if (normalizedTargetX > size.width - edge) {
        x = size.width - margin - childSize.width;
      } else {
        x = normalizedTargetX - childSize.width / 2.0;
      }
    }
    return new ui.Offset.new(x, y);
  };
  dart.trackLibraries("packages/flutter/src/painting/geometry.dart", {
    "package:flutter/src/painting/geometry.dart": geometry
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["geometry.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;QAwCgB;QACA;QACE;QACF;QACP;QACA;AAEP,UAAO,AAAK,IAAD;AACX,UAAO,AAAU,SAAD;AAChB,UAAO,AAAO,MAAD;AACb,UAAO,AAAe,cAAD;AACrB,UAAO,AAAY,WAAD;AAClB,UAAO,AAAO,MAAD;AAEF,oBAAY,AAAO,AAAG,AAAiB,AAAmB,MAAxC,MAAM,cAAc,GAAG,AAAU,SAAD,WAAW,AAAK,AAAO,IAAR,UAAU,MAAM;AACjF,oBAAY,AAAO,AAAG,AAAiB,AAAmB,MAAxC,MAAM,cAAc,GAAG,AAAU,SAAD,WAAW,MAAM;AACnE,uBAAe,WAAW,GAAG,AAAU,SAAD,KAAK,SAAS,KAAK,SAAS,KAAK,SAAS,CAAtD;AAC9B;AACP,QAAI,YAAY;AACgD,MAA9D,IAAS,sBAAI,AAAO,AAAG,MAAJ,MAAM,cAAc,EAAE,AAAK,AAAO,IAAR,UAAU,MAAM;;AAEM,MAAnE,IAAS,sBAAI,AAAO,AAAG,AAAiB,MAArB,MAAM,cAAc,GAAG,AAAU,SAAD,SAAS,MAAM;AAE7D;AACP,QAAI,AAAK,AAAM,AAAe,IAAtB,SAAS,AAAO,MAAD,GAAG,MAAM,AAAU,SAAD;AACC,MAAxC,IAAmC,CAA9B,AAAK,AAAM,IAAP,SAAS,AAAU,SAAD,UAAU;;AAExB,8BAAoB,AAAO,AAAG,MAAJ,YAAU,MAAM,EAAE,AAAK,AAAM,IAAP,SAAS,MAAM;AAC/D,iBAAO,AAAO,MAAD,GAAG,AAAU,AAAM,SAAP,SAAS;AAC/C,UAAI,AAAkB,iBAAD,GAAG,IAAI;AAChB,QAAV,IAAI,MAAM;YACL,KAAI,AAAkB,iBAAD,GAAG,AAAK,AAAM,IAAP,SAAS,IAAI;AACL,QAAzC,IAAI,AAAK,AAAM,AAAS,IAAhB,SAAS,MAAM,GAAG,AAAU,SAAD;;AAEU,QAA7C,IAAI,AAAkB,iBAAD,GAAG,AAAU,AAAM,SAAP,SAAS;;;AAG9C,UAAO,mBAAO,CAAC,EAAE,CAAC;EACpB","file":"../../../../../../../../../../packages/flutter/src/painting/geometry.dart.lib.js"}');
  // Exports:
  return {
    src__painting__geometry: geometry
  };
}));

//# sourceMappingURL=geometry.dart.lib.js.map
