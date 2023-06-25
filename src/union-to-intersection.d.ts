/**
 * Turns the passed union type to an intersection
 * Reference: https://stackoverflow.com/a/50375286/21637817
 * @example
 * ```ts
 * // {a: string} & {b: string}
 * type Case1 = UnionToIntersection<{a: string} | {b: string}>
 * ```
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
