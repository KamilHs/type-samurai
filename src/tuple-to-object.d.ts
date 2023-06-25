/**
 * Accepts a tuple of string, number or symbol and return the object type, where the key values are the elements of the tuple
 * @example
 * ```ts
 * // {
 * //   foo: 'foo',
 * //   bar: 'bar',
 * // }
 * type Result = TupleToObject<['foo', 'bar']>
 * ```
 */
export type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};
