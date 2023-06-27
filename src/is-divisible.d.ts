import { And } from "./and";
import { DigitsTuple } from "./digits-tuple";
import { EndsWith } from "./ends-with";
import { IsEqual } from "./equal";
import { IfLowerThan } from "./lower-than";
import { Mod } from "./mod";
import { IsEven } from "./number";
import { Stringify } from "./stringify";
import { SumArr } from "./sum";

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by two. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleByTwo<4>
 * // false
 * type Case2 = IsDivisibleByTwo<-1>
 * // true
 * type Case3 = IsDivisibleByTwo<-4>
 * ```
 */
export type IsDivisibleByTwo<T extends number> = IsEven<T>;

type DivisibleByThreeMap = {
  3: true;
  6: true;
  9: true;
};

type _IsDivisibleByThree<T extends number> =
  DigitsTuple<T> extends infer Digits extends readonly number[]
    ? IsEqual<Digits["length"], 1> extends true
      ? Digits[0] extends keyof DivisibleByThreeMap
        ? true
        : false
      : SumArr<Digits> extends infer DigitsSum extends number
      ? IfLowerThan<DigitsSum, 3> extends true
        ? false
        : _IsDivisibleByThree<DigitsSum>
      : never
    : never;

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by three. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleByThree<123>
 * // false
 * type Case2 = IsDivisibleByThree<124>
 * // true
 * type Case3 = IsDivisibleByThree<-123>
 * ```
 */
export type IsDivisibleByThree<T extends number> = _IsDivisibleByThree<T>;

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by five. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleByFive<125>
 * // false
 * type Case2 = IsDivisibleByFive<-13>
 * // true
 * type Case3 = IsDivisibleByFive<-125>
 * ```
 */
export type IsDivisibleByFive<T extends number> = EndsWith<
  Stringify<T>,
  "0" | "5"
>;

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by six. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleBySix<126>
 * // false
 * type Case2 = IsDivisibleBySix<124>
 * // true
 * type Case3 = IsDivisibleBySix<-126>
 * ```
 */
export type IsDivisibleBySix<T extends number> = And<
  IsDivisibleByTwo<T>,
  IsDivisibleByThree<T>
>;

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by ten. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleByTen<100>
 * // false
 * type Case2 = IsDivisibleByTen<101>
 * // true
 * type Case3 = IsDivisibleByTen<-100>
 * ```
 */
export type IsDivisibleByTen<T extends number> = EndsWith<Stringify<T>, "0">;

/**
 * Accepts an integer argument and returns a boolean whether it is divisible by hundred. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisibleByHundred<100>
 * // false
 * type Case2 = IsDivisibleByHundred<101>
 * // true
 * type Case3 = IsDivisibleByHundred<-100>
 * ```
 */
export type IsDivisibleByHundred<T extends number> = EndsWith<
  Stringify<T>,
  "00"
>;

/**
 * Returns a boolean whether the first integer argument is divisible by the second integer argument
 * @example
 * ```ts
 * // true
 * type Case1 = IsDivisible<1024, 2>
 * // false
 * type Case2 = IsDivisible<1023, 2>
 * ```
 */
export type IsDivisible<
  Dividend extends number,
  Divisor extends number
> = IsEqual<Mod<Dividend, Divisor>, 0>;
