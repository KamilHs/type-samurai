/**
 * Returns result of concatenation of two string literals with '.' if the second literal is not empty. otherwise returns the first string literal.
 * @example
 * ```ts
 * // 'foo.bar'
 * type Result = Dot<'foo', 'bar'>
 * ```
 */
export type Dot<T extends string, U extends string> = "" extends U
  ? T
  : `${T}.${U}`;
