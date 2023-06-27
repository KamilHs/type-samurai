/**
 * Returns a boolean whether the passed argument is a letter (Only for letters that have both upper and lower case)
 * @example
 * ```ts
 * // true
 * type Case1 = IsLetter<'a'>
 * // false
 * type Case2 = IsLetter<'1'>
 * ```
 */
export type IsLetter<T extends string> = Uppercase<T> extends Lowercase<T>
  ? false
  : true;
