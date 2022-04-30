export * from './Proxify'
export * from './Error'

export function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower
    }
  }
  return number
}

export function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  
  if (upper !== undefined) {
    upper = Number(upper)
    upper = upper === upper ? upper : 0;
  }
  
  if (lower !== undefined) {
    lower = Number(lower);
    lower = lower === lower ? lower : 0;
  }
  
  return baseClamp(Number(number), lower, upper);
}