export type Proxify<T> = {
  [P in keyof T]: T[P]
}

export function Proxify<T> (handler): Proxify<T> {
  const proxy = <Proxify<T>>{}

  return new Proxy(proxy, handler)
}
