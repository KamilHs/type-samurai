/**
 * Returns a boolean whether the first string argument ends with the second one
 * @example
 * ```ts
 * // true
 * type Result = EndsWith<'Foobar', 'bar'>
 * ```
 */
export type EndsWith<
  T extends string,
  Characters extends string
> = T extends `${string}${Characters}` ? true : false;
