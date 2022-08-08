export class List<T> extends Array<T> {
  add (element: T) {
    this.push(element)
  }
  addAll () {}
}