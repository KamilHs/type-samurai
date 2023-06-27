/**
 * Returns the type of the element of the passed array argument
 * @example
 * ```ts
 * // string
 * type Case1 = ArrayElementType<string[]>
 * // "a" | "b"
 * type Case1 = ArrayElementType<readonly ("a" | "b")[]>
 * ```
 */
export type ArrayElementType<T extends readonly unknown[]> = T extends Readonly<
  Array<infer Item>
>
  ? Item
  : never;
