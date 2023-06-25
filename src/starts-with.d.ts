/**
 * Returns a boolean whether the first string arguments starts with the second string argument
 * @example
 * ```ts
 * // true
 * type Case1 = StartsWith<'abc', 'a'>
 * // false
 * type Case2 = StartsWith<'abc', 'b'>
 * ```
 */
export type StartsWith<
  Str extends string,
  Pivot extends string | number
> = Str extends `${Pivot}${string}` ? true : false;
