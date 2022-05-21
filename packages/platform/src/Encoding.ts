export abstract class Encoding {
  public name: string
  public allowMalformed: boolean = true

  public get encoder (): TextEncoder {
    return new TextEncoder()
  }

  public get decoder () {
    return new TextDecoder(this.name, {
      fatal: this.allowMalformed
    })
  }

  constructor (
    name: string, 
    allowMalformed: boolean = false
  ) {
    this.name = name
    this.allowMalformed = allowMalformed
  }

  encode (input: string): Uint8Array {
    return this.encoder.encode(input)
  }

  decode (
    encoded: Uint8Array,
    allowMalformed?: boolean | null
  ): string {
    let decoder: TextDecoder
    if (allowMalformed) {
      decoder = new TextDecoder(this.name, {
        fatal: allowMalformed
      })
    } else {
      decoder = this.decoder
    }

    return decoder.decode(encoded)
  } 
}

export class UTF8Codec extends Encoding {
  constructor (allowMalformed?) {
    super('utf-8', allowMalformed)
  }
}

export const utf8 = new UTF8Codec()

export class AsciiCodec extends Encoding {
  constructor (allowMalformed) {
    super('us-ascii', allowMalformed)
  }
}

export class JSONCodec {

}

