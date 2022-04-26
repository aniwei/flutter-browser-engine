export enum PointMode {
  points,
  lines,
  polygon,
}

export enum ClipOp {
  difference,
  intersect,
}

export enum VertexMode {
  triangles,
  triangleStrip,
  triangleFan,
}

export enum PathFillType {
  nonZero,
  evenOdd,
}
// Must be kept in sync with SkPathOp

export enum PathOperation {
  difference,
  intersect,
  union,
  xor,
  reverseDifference,
}


export * from './Canvas'
export * from './Vertices'