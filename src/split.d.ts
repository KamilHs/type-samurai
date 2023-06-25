/**
 * Type version of `String.prototype.split()`. Splits the first string argument by the second string argument
 * @example
 * ```ts
 * // ['a', 'b', 'c']
 * type Case1 = Split<'abc', ''>
 * // ['a', 'b', 'c']
 * type Case2 = Split<'a,b,c', ','>
 * ```
 */
export type Split<
  Str extends string,
  Del extends string | number
> = string extends Str
  ? string[]
  : "" extends Str
  ? []
  : Str extends `${infer T}${Del}${infer U}`
  ? [T, ...Split<U, Del>]
  : [Str];
