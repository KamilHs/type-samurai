/**
 * Adds the second argument to the beginning of the first array argument.
 * @example
 * ```ts
 * // ['foo', 'bar']
 * type Result = Unshift<['bar'], 'foo'>
 * ```
 */
export type Unshift<T extends readonly unknown[], U> = [U, ...T];
