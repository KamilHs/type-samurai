/**
 * Type version of `Array.prototype.concat()`. Concatenates two arrays into one.
 * @example
 * ```ts
 * // [number, number, string, string]
 * type Result = Concat<[number, number], [string, string]>
 * ```
 */
export type Concat<T extends readonly unknown[], U> = [
  ...T,
  ...(U extends readonly unknown[] ? U : [U])
];
