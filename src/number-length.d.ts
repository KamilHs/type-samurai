import { CompareStringLength, StringLength } from "./string-length";
import { Stringify } from "./stringify";

/**
 * Returns number of digits of the passed number
 * @example
 * ```ts
 * // 3
 * type Case1 = NumberLength<100>
 * // 15
 * type Case2 = NumberLength<100000000000000>
 * ```
 */
export type NumberLength<T extends number> = StringLength<Stringify<T>>;

/**
 * Accepts two numbers, returns the third argument (defaults to `never`) if the first number is shorter, otherwise returns the fourth argument (defaults to `never`) if the second argument is shorter, if numbers have the same length returns the fifth argument (defaults to `never`)
 * @example
 * ```ts
 * // 'first shorter'
 * type Case1 = CompareNumberLength<1, 12, 'first shorter'>
 * // 'first longer'
 * type Case2 = CompareNumberLength<123, 12, 'first shorter', 'first longer'>
 * // 'equal'
 * type Case3 = CompareNumberLength<12, 12, 'first shorter', 'first longer', 'equal'>
 * ```
 */
export type CompareNumberLength<
  Num1 extends number,
  Num2 extends number,
  IfNum1Shorter = never,
  IfNum2Shorter = never,
  IfEqual = never
> = CompareStringLength<
  Stringify<Num1>,
  Stringify<Num2>,
  IfNum1Shorter,
  IfNum2Shorter,
  IfEqual
>;

/**
 * Accepts two numbers, returns a boolean whether the first number is shorter
 * @example
 * ```ts
 * // true
 * type Case1 = IsShorterNumber<1, 10>
 * // false
 * type Case2 = IsShorterNumber<100, 10>
 * ```
 */
export type IsShorterNumber<
  Num1 extends number,
  Num2 extends number
> = CompareNumberLength<Num1, Num2, true, false, false>;

/**
 * Accepts two numbers, returns a boolean whether the first number is longer
 * @example
 * ```ts
 * // true
 * type Case1 = IsLongerNumber<10, 1>
 * // false
 * type Case2 = IsLongerNumber<10, 100>
 * ```
 */
export type IsLongerNumber<
  Num1 extends number,
  Num2 extends number
> = CompareNumberLength<Num1, Num2, false, true, false>;

/**
 * Accepts two numbers, returns a boolean whether numbers have the same length
 * @example
 * ```ts
 * // true
 * type Case1 = IsSameLengthNumber<10, 10>
 * // false
 * type Case2 = IsSameLengthNumber<10, 100>
 * ```
 */
export type IsSameLengthNumber<
  Num1 extends number,
  Num2 extends number
> = CompareNumberLength<Num1, Num2, false, false, true>;
