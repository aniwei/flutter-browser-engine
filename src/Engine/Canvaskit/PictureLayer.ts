import { Offset } from '@UI'
import { Layer } from './Layer/Layer'
import { CkPicture } from './CkPicture'

export class PictureLayer extends Layer {
  public picture: CkPicture
  public offset: Offset
  public isComplex: boolean
  public willChange: boolean

  constructor (
    picture: CkPicture, 
    offset: Offset, 
    isComplex: boolean, 
    willChange: boolean
  ) {
    super()
    this.picture = picture
    this.offset = offset
    this.isComplex = isComplex
    this.willChange = willChange
  }

  preroll () {

  }

  paint () {

  }
}