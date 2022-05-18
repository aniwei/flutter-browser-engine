export const utf8 = new UTF8Codec()

class UTF8Codec extends Encoding {
  public allowMalformed: boolean

  public get name () {
    return 'utf-8'
  }

  public get encoder (): UTF8Encoder {
    return new UTF8Encoder() 
  }

  public get decoder (): UTF8Decoder {
    // Switch between const objects to avoid allocation.
    return this.allowMalformed
        ? new UTF8Decoder(true)
        : new UTF8Decoder(false)
  }

  constructor (allowMalformed: boolean = false) {
    super()
    this.allowMalformed = allowMalformed
  }
  
  decode (
    codeUnits: number[], 
    allowMalformed: boolean | null
  ): string {
    const decoder = allowMalformed ?? this.allowMalformed
        ? new UTF8Decoder(true)
        : new UTF8Decoder(false)

    return decoder.convert(codeUnits)
  }
}
