import { IsEmptyArray } from "./array";
import { IsTuple } from "./is-tuple";
import { IfLowerThan } from "./lower-than";
import { ReturnItselfIfNotExtends } from "./return-itself-if-extends";
import { Shift } from "./shift";

/**
 * Accepts two integers and returns the minimum among them. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 1
 * type Case1 = Min<1, 10>
 * // -10
 * type Case2 = Min<1, -10>
 * ```
 */
export type Min<Num1 extends number, Num2 extends number> = IfLowerThan<
  Num1,
  Num2,
  Num1,
  Num2
>;

type _MinArr<
  T extends readonly number[],
  CurrentMin extends number = ReturnItselfIfNotExtends<T[0], undefined, never>
> = IsEmptyArray<T> extends true
  ? CurrentMin
  : Shift<T, { includeRemoved: true }> extends [
      infer Rest extends number[],
      infer First extends number
    ]
  ? _MinArr<Rest, Min<First, CurrentMin>>
  : never;

/**
 * Accepts an array of integers and returns the minimum among its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 1
 * type Case1 = MinArr<[1, 2, 4, 10]>
 * // -10
 * type Case2 = MinArr<[-1, 4, -10]>
 * ```
 */
export type MinArr<T extends readonly number[]> = IsTuple<T> extends true
  ? _MinArr<T>
  : never;
