/**
 * Accepts a boolean and returns `true` if the passed type is `false`, otherwise returns `true`
 * @example
 * ```ts
 * // false
 * type Case1 = Not<true>
 * // true
 * type Case2 = Not<false>
 * ```
 */
export type Not<T extends boolean> = T extends true ? false : true;
