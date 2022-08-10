/*
 * @Author: Aniwei
 * @Date: 2022-08-09 18:47:20
 */

export type Env = {
  BASE_URL?: string,
  DEVICE_PIXEL_RATIO?: number,
  DEFAULT_DEVICE_PIXEL_RATIO: number,
  FORCE_CPU_ONLY?: boolean,
  MAXIMUM_SURFACES?: number,
  DEFAULT_MAXIMUM_SURFACES: number,
  INNER_WIDTH?: number,
  INNER_HEIGHT?: number,
  VIEWPOINT?: number,
} & NodeJS.ProcessEnv

export const env = process.env as Env

env.DEFAULT_DEVICE_PIXEL_RATIO = 2
env.DEFAULT_MAXIMUM_SURFACES = 8