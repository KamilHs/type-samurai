/**
 * Returns a boolean whether the passed argument is literal string
 * @example
 * ```ts
 * // true
 * type Case1 = IsStringLiteral<'a'>
 * // false
 * type Case2 = IsStringLiteral<string>
 * ```
 */
export type IsStringLiteral<T extends string> = string extends T ? false : true;
