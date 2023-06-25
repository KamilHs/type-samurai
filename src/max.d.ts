import { IsEmptyArray } from "./array";
import { IsTuple } from "./is-tuple";
import { IfLowerThan } from "./lower-than";
import { ReturnItselfIfNotExtends } from "./return-itself-if-extends";
import { Shift } from "./shift";

/**
 * Accepts two integers and returns the maximum among them. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 10
 * type Case1 = Max<1, 10>
 * // 1
 * type Case2 = Max<1, -10>
 * ```
 */
export type Max<Num1 extends number, Num2 extends number> = IfLowerThan<
  Num1,
  Num2,
  Num2,
  Num1
>;

type _MaxArr<
  T extends readonly number[],
  CurrentMax extends number = ReturnItselfIfNotExtends<T[0], undefined, never>
> = IsEmptyArray<T> extends true
  ? CurrentMax
  : Shift<T, { includeRemoved: true }> extends [
      infer Rest extends number[],
      infer First extends number
    ]
  ? _MaxArr<Rest, Max<First, CurrentMax>>
  : never;

/**
 * Accepts an array of integers and returns the maximum among its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 10
 * type Case1 = MaxArr<[1, 2, 4, 10]>
 * // 4
 * type Case2 = MaxArr<[-1, 4, -10]>
 * ```
 */
export type MaxArr<T extends readonly number[]> = IsTuple<T> extends true
  ? _MaxArr<T>
  : never;
