import { _Increment } from "./increment";
import { IsNegativeInteger, Abs, ParseNumber, Negate } from "./number";
import { LastCharacter } from "./last-character";
import { Stringify } from "./stringify";
import { IsEmptyString } from "./string";
import { Pop } from "./pop";
import { IsTuple } from "./is-tuple";
import { IsNever } from "./never";
import { Sub } from "./sub";
import { IsEmptyArray } from "./array";

type SumIncrementMap = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19
];

type SumLastDigitMap = {
  10: 0;
  11: 1;
  12: 2;
  13: 3;
  14: 4;
  15: 5;
  16: 6;
  17: 7;
  18: 8;
  19: 9;
};

type SumMap = {
  0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  2: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  3: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  4: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  6: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  7: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  8: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  9: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
};

export type _Sum<
  Num1 extends string,
  Num2 extends string,
  Carry extends 0 | 1 = 0,
  Result extends string = ""
> = IsEmptyString<Num1> extends true
  ? Carry extends 0
    ? ParseNumber<`${Num2}${Result}`>
    : _Increment<Num2, Result>
  : IsEmptyString<Num2> extends true
  ? Carry extends 0
    ? ParseNumber<`${Num1}${Result}`>
    : _Increment<Num1, Result>
  : LastCharacter<Num1> extends `${infer Num1LastDigit extends keyof SumMap &
      number}`
  ? LastCharacter<Num2> extends `${infer Num2LastDigit extends keyof SumMap[Num1LastDigit] &
      number}`
    ? SumMap[Num1LastDigit][Num2LastDigit] extends infer DigitsSum extends number
      ? (
          Carry extends 1 ? SumIncrementMap[DigitsSum] : DigitsSum
        ) extends infer DigitsSumWithCarry extends number
        ? Num1 extends `${infer Num1Rest}${Num1LastDigit}`
          ? Num2 extends `${infer Num2Rest}${Num2LastDigit}`
            ? DigitsSumWithCarry extends keyof SumLastDigitMap
              ? _Sum<
                  Num1Rest,
                  Num2Rest,
                  1,
                  `${SumLastDigitMap[DigitsSumWithCarry]}${Result}`
                >
              : _Sum<Num1Rest, Num2Rest, 0, `${DigitsSumWithCarry}${Result}`>
            : never
          : never
        : never
      : never
    : never
  : never;

/**
 * Accepts two integers and returns their sum. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 13
 * type Case1 = Sum<4, 9>
 * // 5
 * type Case2 = Sum<-4, 9>
 * // -5
 * type Case3 = Sum<4, -9>
 * // -13
 * type Case4 = Sum<-4, -9>
 * ```
 */
export type Sum<
  Num1 extends number,
  Num2 extends number
> = IsNegativeInteger<Num1> extends true
  ? IsNegativeInteger<Num2> extends true
    ? Negate<_Sum<Stringify<Abs<Num1>>, Stringify<Abs<Num2>>>>
    : Sub<Num2, Abs<Num1>>
  : IsNegativeInteger<Num2> extends true
  ? Sub<Num1, Abs<Num2>>
  : _Sum<Stringify<Num1>, Stringify<Num2>>;

type _SumArr<
  T extends readonly number[],
  CurrentSum extends number = 0
> = IsEmptyArray<T> extends true
  ? CurrentSum
  : Pop<T, { includeRemoved: true }> extends infer PopResult
  ? IsNever<PopResult> extends true
    ? CurrentSum
    : PopResult extends [infer Rest extends number[], infer Num1 extends number]
    ? _SumArr<Rest, Sum<CurrentSum, Num1>>
    : never
  : CurrentSum;

/**
 * Accepts an array of integers and returns the sum of its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 10
 * type Case1 = SumArr<[1, 2, 3, 4]>
 * // 2
 * type Case2 = SumArr<[1, 2, 3, -4]>
 * ```
 */
export type SumArr<T extends readonly number[]> = IsTuple<T> extends true
  ? _SumArr<T>
  : never;
