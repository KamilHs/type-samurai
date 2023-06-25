import { NotExtends } from "./extends";
import { If } from "./if";

/**
 * Returns a boolean whether the first array argument is fixed length tuple
 * @example
 * ```ts
 * // true
 * type Case1 = IsTuple<[1, 2, 3]>
 * // false
 * type Case2 = IsTuple<number[]>
 * ```
 */
export type IsTuple<T extends readonly unknown[]> = NotExtends<
  number,
  T["length"]
>;

/**
 * Returns the second argument if the first array argument is fixed length tuple (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IsTuple<[1, 2, 3], 'valid'>
 * // 'invalid'
 * type Case2 = IsTuple<number[], 'valid', 'invalid'>
 * ```
 */
export type IfTuple<
  T extends readonly unknown[],
  IfTrue = true,
  IfFalse = false
> = If<IsTuple<T>, IfTrue, IfFalse>;
