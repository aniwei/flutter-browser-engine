export class StringBuffer {
  public content = ''

  public get length () {
    return this.content.length
  }

  constructor (content: string = '') {
    this.content = content
  }

  write (string: string) {
    this.content += string
  }

  writeCharCode (charCode: number) {
    this.content += String.fromCharCode(charCode)
  }

  writeAll (strings: Iterable<string>, sep: string) {
    
    for (const string of strings) {

    }
  }

  writeln (string = '') {
    this.content += string + '\n'
  }

  toString (): string {
    return this.content
  }
}