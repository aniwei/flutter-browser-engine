define(['dart_sdk', 'packages/typed_data/src/typed_buffer.dart'], (function load__packages__flutter__src__foundation__serialization_dart(dart_sdk, packages__typed_data__src__typed_buffer$46dart) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _internal = dart_sdk._internal;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffer = packages__typed_data__src__typed_buffer$46dart.src__typed_buffer;
  var serialization = Object.create(dart.library);
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $setUint16 = dartx.setUint16;
  var $setUint32 = dartx.setUint32;
  var $setInt32 = dartx.setInt32;
  var $setInt64 = dartx.setInt64;
  var $setFloat64 = dartx.setFloat64;
  var $offsetInBytes = dartx.offsetInBytes;
  var $length = dartx.length;
  var $modulo = dartx['%'];
  var $runtimeType = dartx.runtimeType;
  var $asByteData = dartx.asByteData;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint8 = dartx.getUint8;
  var $getUint16 = dartx.getUint16;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $getInt64 = dartx.getInt64;
  var $getFloat64 = dartx.getFloat64;
  var $asInt32List = dartx.asInt32List;
  var $asInt64List = dartx.asInt64List;
  var $asFloat32List = dartx.asFloat32List;
  var $asFloat64List = dartx.asFloat64List;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "file:///Users/weiyanhai/Desktop/env/flutter/packages/flutter/lib/src/foundation/serialization.dart",
    "package:flutter/src/foundation/serialization.dart"
  ];
  var __WriteBuffer__eightBytesAsList = dart.privateName(serialization, "_#WriteBuffer#_eightBytesAsList");
  var _buffer = dart.privateName(serialization, "_buffer");
  var _isDone = dart.privateName(serialization, "_isDone");
  var _eightBytes = dart.privateName(serialization, "_eightBytes");
  var _eightBytesAsList = dart.privateName(serialization, "_eightBytesAsList");
  var _alignTo = dart.privateName(serialization, "_alignTo");
  serialization.WriteBuffer = class WriteBuffer extends core.Object {
    static ['_#new#tearOff']() {
      return new serialization.WriteBuffer.new();
    }
    get [_eightBytesAsList]() {
      let t0;
      t0 = this[__WriteBuffer__eightBytesAsList];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_eightBytesAsList")) : t0;
    }
    set [_eightBytesAsList](t0) {
      this[__WriteBuffer__eightBytesAsList] = t0;
    }
    putUint8(byte) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 32, 12, "!_isDone");
      this[_buffer].add(byte);
    }
    putUint16(value, opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 38, 12, "!_isDone");
      this[_eightBytes][$setUint16](0, value, (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value, opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 45, 12, "!_isDone");
      this[_eightBytes][$setUint32](0, value, (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value, opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 52, 12, "!_isDone");
      this[_eightBytes][$setInt32](0, value, (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value, opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 59, 12, "!_isDone");
      this[_eightBytes][$setInt64](0, value, (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_buffer].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value, opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 66, 12, "!_isDone");
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_buffer].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 74, 12, "!_isDone");
      this[_buffer].addAll(list);
    }
    putInt32List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 80, 12, "!_isDone");
      this[_alignTo](4);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * list[$length]));
    }
    putInt64List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 87, 12, "!_isDone");
      this[_alignTo](8);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * list[$length]));
    }
    putFloat32List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 94, 12, "!_isDone");
      this[_alignTo](4);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * list[$length]));
    }
    putFloat64List(list) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 101, 12, "!_isDone");
      this[_alignTo](8);
      this[_buffer].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * list[$length]));
    }
    [_alignTo](alignment) {
      if (!!this[_isDone]) dart.assertFailed(null, I[0], 107, 12, "!_isDone");
      let mod = this[_buffer].length[$modulo](alignment);
      if (mod !== 0) {
        this[_buffer].addAll(serialization.WriteBuffer._zeroBuffer, 0, alignment - mod);
      }
    }
    done() {
      if (this[_isDone]) {
        dart.throw(new core.StateError.new("done() must not be called more than once on the same " + dart.str(this[$runtimeType]) + "."));
      }
      let result = this[_buffer].buffer[$asByteData](0, this[_buffer].lengthInBytes);
      this[_buffer] = new typed_buffer.Uint8Buffer.new();
      this[_isDone] = true;
      return result;
    }
  };
  (serialization.WriteBuffer.new = function() {
    this[__WriteBuffer__eightBytesAsList] = null;
    this[_buffer] = new typed_buffer.Uint8Buffer.new();
    this[_isDone] = false;
    this[_eightBytes] = _native_typed_data.NativeByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = serialization.WriteBuffer.prototype;
  dart.addTypeTests(serialization.WriteBuffer);
  dart.addTypeCaches(serialization.WriteBuffer);
  dart.setMethodSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putUint32: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putInt32: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putInt64: dart.fnType(dart.void, [core.int], {endian: dart.nullable(typed_data.Endian)}, {}),
    putFloat64: dart.fnType(dart.void, [core.double], {endian: dart.nullable(typed_data.Endian)}, {}),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat32List: dart.fnType(dart.void, [typed_data.Float32List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setGetterSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getGetters(serialization.WriteBuffer.__proto__),
    [_eightBytesAsList]: typed_data.Uint8List
  }));
  dart.setSetterSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getSetters(serialization.WriteBuffer.__proto__),
    [_eightBytesAsList]: typed_data.Uint8List
  }));
  dart.setLibraryUri(serialization.WriteBuffer, I[1]);
  dart.setFieldSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(serialization.WriteBuffer.__proto__),
    [_buffer]: dart.fieldType(typed_buffer.Uint8Buffer),
    [_isDone]: dart.fieldType(core.bool),
    [_eightBytes]: dart.finalFieldType(typed_data.ByteData),
    [__WriteBuffer__eightBytesAsList]: dart.fieldType(dart.nullable(typed_data.Uint8List))
  }));
  dart.setStaticFieldSignature(serialization.WriteBuffer, () => ['_zeroBuffer']);
  dart.defineLazy(serialization.WriteBuffer, {
    /*serialization.WriteBuffer._zeroBuffer*/get _zeroBuffer() {
      return _native_typed_data.NativeUint8List.fromList(T.JSArrayOfint().of([0, 0, 0, 0, 0, 0, 0, 0]));
    }
  }, false);
  var data$ = dart.privateName(serialization, "ReadBuffer.data");
  var _position = dart.privateName(serialization, "_position");
  serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static ['_#new#tearOff'](data) {
      return new serialization.ReadBuffer.new(data);
    }
    get hasRemaining() {
      return this[_position] < this.data[$lengthInBytes];
    }
    getUint8() {
      let t1;
      return this.data[$getUint8]((t1 = this[_position], this[_position] = t1 + 1, t1));
    }
    getUint16(opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint16](this[_position], (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_position] = this[_position] + 2;
      return value;
    }
    getUint32(opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getUint32](this[_position], (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_position] = this[_position] + 4;
      return value;
    }
    getInt32(opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt32](this[_position], (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_position] = this[_position] + 4;
      return value;
    }
    getInt64(opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      let value = this.data[$getInt64](this[_position], (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_position] = this[_position] + 8;
      return value;
    }
    getFloat64(opts) {
      let t1;
      let endian = opts && 'endian' in opts ? opts.endian : null;
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], (t1 = endian, t1 == null ? typed_data.Endian.host : t1));
      this[_position] = this[_position] + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + length;
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 4 * length;
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 8 * length;
      return list;
    }
    getFloat32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asFloat32List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 4 * length;
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](this.data[$offsetInBytes] + this[_position], length);
      this[_position] = this[_position] + 8 * length;
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) this[_position] = this[_position] + (alignment - mod);
    }
  };
  (serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data !== null)) dart.assertFailed(null, I[0], 132, 14, "data != null");
    ;
  }).prototype = serialization.ReadBuffer.prototype;
  dart.addTypeTests(serialization.ReadBuffer);
  dart.addTypeCaches(serialization.ReadBuffer);
  dart.setMethodSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getUint32: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getInt32: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getInt64: dart.fnType(core.int, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getFloat64: dart.fnType(core.double, [], {endian: dart.nullable(typed_data.Endian)}, {}),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat32List: dart.fnType(typed_data.Float32List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setLibraryUri(serialization.ReadBuffer, I[1]);
  dart.setFieldSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter/src/foundation/serialization.dart", {
    "package:flutter/src/foundation/serialization.dart": serialization
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["serialization.dart"],"names":[],"mappings":"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","file":"../../../../../../../../../../packages/flutter/src/foundation/serialization.dart.lib.js"}');
  // Exports:
  return {
    src__foundation__serialization: serialization
  };
}));

//# sourceMappingURL=serialization.dart.lib.js.map
