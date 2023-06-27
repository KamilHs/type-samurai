import { IsEqual } from "./equal";
import { If } from "./if";
import { IfLowerThan, IsLowerThan } from "./lower-than";

/**
 * Returns a boolean whether the first passed integer is greater than the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsGreaterThan<10, 1>
 * // false
 * type Case2 = IsGreaterThan<-10, 1>
 * ```
 */
export type IsGreaterThan<
  Num1 extends number,
  Num2 extends number
> = IsLowerThan<Num2, Num1>;

/**
 * Returns the third argument if the first argument (integer) is greater than the second argument (integer) (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * 'valid'
 * type Case1 = IfGreaterThan<10, 1, 'valid'>
 * // 'invalid'
 * type Case2 = IfGreaterThan<-10, 1, 'valid', 'invalid'>
 * ```
 */
export type IfGreaterThan<
  Num1 extends number,
  Num2 extends number,
  IfTrue = true,
  IfFalse = false
> = IfLowerThan<Num2, Num1, IfTrue, IfFalse>;

/**
 * Returns a boolean whether the first passed integer is greater than the second integer or equal. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsGreaterThan<10, 1>
 * // false
 * type Case2 = IsGreaterThan<-10, 1>
 * // true
 * type Case3 = IsGreaterThan<10, 10>
 * ```
 */
export type IsGreaterOrEqual<
  Num1 extends number,
  Num2 extends number
> = IsEqual<Num1, Num2> extends true ? true : IsGreaterThan<Num1, Num2>;

/**
 * Returns the third argument if the first argument (integer) is greater than the second argument (integer) or equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * 'valid'
 * type Case1 = IfGreaterThan<10, 1, 'valid'>
 * // 'invalid'
 * type Case2 = IfGreaterThan<-10, 1, 'valid', 'invalid'>
 * ```
 */
export type IfGreaterOrEqual<
  Num1 extends number,
  Num2 extends number,
  IfTrue = true,
  IfFalse = false
> = If<
  IsEqual<Num1, Num2> extends true ? true : IsGreaterThan<Num1, Num2>,
  IfTrue,
  IfFalse
>;
