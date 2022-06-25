export class SkiaShadowFlags {
  static kNoneShadowFlag = 0x00
  static kTransparentOccluderShadowFlag = 0x01
  static kDirectionalLightShadowFlag = 0x04
  static kDefaultShadowFlags = this.kDirectionalLightShadowFlag | this.kNoneShadowFlag
  static kTransparentOccluderShadowFlags = this.kDirectionalLightShadowFlag | this.kTransparentOccluderShadowFlag
}
