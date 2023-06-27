import { IsEqual } from "./equal";
import { If } from "./if";
import { Not } from "./not";
import { Abs, IsNegative } from "./number";
import { CompareNumberLength } from "./number-length";
import { Stringify } from "./stringify";

type LowerThanMap = {
  "0": ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  "1": ["2", "3", "4", "5", "6", "7", "8", "9"];
  "2": ["3", "4", "5", "6", "7", "8", "9"];
  "3": ["4", "5", "6", "7", "8", "9"];
  "4": ["5", "6", "7", "8", "9"];
  "5": ["6", "7", "8", "9"];
  "6": ["7", "8", "9"];
  "7": ["8", "9"];
  "8": ["9"];
  "9": [];
};

type _IsLowerThan<
  Num1 extends string,
  Num2 extends string
> = Num1 extends `${infer Num1Character extends keyof LowerThanMap}${infer Num1Rest extends string}`
  ? Num2 extends `${infer Num2Character extends string}${infer Num2Rest extends string}`
    ? IsEqual<Num1Character, Num2Character> extends true
      ? _IsLowerThan<Num1Rest, Num2Rest>
      : Num2Character extends LowerThanMap[Num1Character][number]
      ? true
      : false
    : true
  : false;

/**
 * Returns a boolean whether the first passed integer is lower than the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsLowerThan<1, 10>
 * // false
 * type Case2 = IsLowerThan<1, -10>
 * ```
 */
export type IsLowerThan<Num1 extends number, Num2 extends number> = IsEqual<
  Num1,
  Num2
> extends true
  ? false
  : IsNegative<Num1> extends true
  ? IsNegative<Num2> extends false
    ? true
    : CompareNumberLength<
        Num1,
        Num2,
        false,
        true,
        Not<_IsLowerThan<Stringify<Abs<Num1>>, Stringify<Abs<Num2>>>>
      >
  : IsNegative<Num2> extends true
  ? false
  : CompareNumberLength<
      Num1,
      Num2,
      true,
      false,
      _IsLowerThan<Stringify<Abs<Num1>>, Stringify<Abs<Num2>>>
    >;

/**
 * Returns a boolean whether the first passed integer is lower than the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfLowerThan<1, 10, 'valid'>
 * // 'invalid'
 * type Case2 = IfLowerThan<1, -10, 'valid', 'invalid'>
 * ```
 */
export type IfLowerThan<
  Num1 extends number,
  Num2 extends number,
  IfTrue = true,
  IfFalse = false
> = If<IsLowerThan<Num1, Num2>, IfTrue, IfFalse>;

/**
 * Returns a boolean whether the first passed integer is lower or equal to the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsLowerOrEqual<1, 10>
 * // false
 * type Case2 = IsLowerOrEqual<1, -10>
 * ```
 */
export type IsLowerOrEqual<Num1 extends number, Num2 extends number> = IsEqual<
  Num1,
  Num2
> extends true
  ? true
  : IsLowerThan<Num1, Num2>;

/**
 * Returns the third argument if the first argument (integer) is lower than the second argument (integer) or equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * 'valid'
 * type Case1 = IfLowerOrEqual<1, 10, 'valid'>
 * // 'invalid'
 * type Case2 = IfLowerOrEqual<23, 1, 'valid', 'invalid'>
 * ```
 */
export type IfLowerOrEqual<
  Num1 extends number,
  Num2 extends number,
  IfTrue = true,
  IfFalse = false
> = If<
  IsEqual<Num1, Num2> extends true ? true : IsLowerThan<Num1, Num2>,
  IfTrue,
  IfFalse
>;
