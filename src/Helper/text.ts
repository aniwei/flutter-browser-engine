/*
 * @Author: Aniwei
 * @Date: 2022-08-18 11:40:51
 */

import { TextPosition } from '@rendering/Text'
import type { IPositionWithAffinity } from '@skia'

export function fromPositionWithAffinity (positionWithAffinity: IPositionWithAffinity): TextPosition {
 const affinity = positionWithAffinity.affinity
  return new TextPosition(
    positionWithAffinity.pos,
    affinity,
  );
}