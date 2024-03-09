import { IfExtends } from "./extends";

/**
 * Returns result of logical addition of two params.
 * @example
 * ```ts
 * // true
 * type Case1 = Or<true, true>
 * // true
 * type Case2 = Or<false, true>
 * ```
 */
export type Or<Condition1, Condition2> = IfExtends<
  Condition1,
  true,
  true,
  IfExtends<Condition2, true>
>;

/**
 * Returns result of logical addition of all elements inside the passed array type
 * @example
 * ```ts
 * // true
 * type Case1 = Or<[true, true, true]>
 * // true
 * type Case2 = Or<[true, true, false]>
 * ```
 */
export type OrArr<Conditions extends readonly unknown[]> =
  true extends Conditions[number] ? true : false;
