/*
 * @Author: Aniwei
 * @Date: 2022-08-31 14:59:18
 */

import fs from 'fs-extra'
import path from 'path'
import { fetch } from './fetch'
import { isBrowser } from '@helper/is'

const kDefaultAssetsDir = 'assets'

export abstract class AbstractAssetManager {
  public assetsDir: string
  public baseURI: string

  constructor (
    assetsDir: string = kDefaultAssetsDir, 
    baseURI: string
  ) {
    this.assetsDir = assetsDir
    this.baseURI = baseURI
  }
  
  abstract getAssetURI (asset: string): string
  abstract load (asset: string): Promise<Buffer | ArrayBuffer>
}


export class LocalAssetManager extends AbstractAssetManager {
  constructor (
    assetsDir: string = kDefaultAssetsDir, 
    baseURI?: string
  ) {
    super(assetsDir, baseURI ?? process.cwd() as string)
  }

  getAssetURI(asset: string): string {
    return path.resolve(this.baseURI, asset)
  }

  async load (asset: string) {
    const uri = this.getAssetURI(asset)

    try {
      return await fs.readFile(uri) 
    } catch (error: any) {
      debugger

      throw error
    }

  }
}

export class WebOnlyAssetManager extends AbstractAssetManager {
  constructor (
    assetsDir: string = kDefaultAssetsDir, 
    baseURI?: string
  ) {
    super(assetsDir, baseURI ?? `http://127.0.0.1/`)
  }

  getAssetURI(asset: string): string {
    return path.resolve(this.baseURI)
  }

  async load (asset: string) {
    const uri = this.getAssetURI(asset)

    try {
      return await fetch(uri).then(res => res.arrayBuffer())
    } catch (error: any) {
      throw error
    }
  }
}

export const AssetManager = isBrowser ? WebOnlyAssetManager : LocalAssetManager
