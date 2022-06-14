import { ArgumentError } from '@internal';
import { Color } from './Painting';

export function validateColorStops (
  colors: Color[], 
  colorStops?: number[] | null,
) {
  if (colorStops === null) {
    if (colors.length !== 2)
      throw new ArgumentError(`"colors" must have length 2 if "colorStops" is omitted.`);
  } else {
    if (colors.length !== colorStops?.length)
      throw new ArgumentError('"colors" and "colorStops" arguments must have equal length.')
  }
}

export * from './Path'
export * from './Paint'
export * from './Image'
export * from './Shader'
export * from './Canvas'
export * from './Colors'
export * from './MaskFilter'
export * from './ColorFilter'
export * from './ImageFilter'
export * from './AnimatedImage'

export * from './Painting'
export * from './Geometry'
export * from './Gradient'

export * from './Picture'
export * from './NWayCanvas'
export * from './RasterCache'
export * from './EmbeddedViews'
export * from './LayerSceneBuilder'


