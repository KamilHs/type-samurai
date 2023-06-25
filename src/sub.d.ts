import { Decrement, _Decrement } from "./decrement";
import { LastCharacter } from "./last-character";
import { IsLowerThan } from "./lower-than";
import { Abs, IsNegativeInteger, Negate, ParseNumber } from "./number";
import { RemoveLeading } from "./remove-leading";
import { IfEmptyString, IsEmptyString } from "./string";
import { Stringify } from "./stringify";
import { Sum } from "./sum";

type SubDecrementMap = {
  "-9": -10;
  "-8": -9;
  "-7": -8;
  "-6": -7;
  "-5": -6;
  "-4": -5;
  "-3": -4;
  "-2": -3;
  "-1": -2;
  "0": -1;
  "1": 0;
  "2": 1;
  "3": 2;
  "4": 3;
  "5": 4;
  "6": 5;
  "7": 6;
  "8": 7;
  "9": 8;
};

type SubNegativeCarryMap = {
  "-10": 0;
  "-9": 1;
  "-8": 2;
  "-7": 3;
  "-6": 4;
  "-5": 5;
  "-4": 6;
  "-3": 7;
  "-2": 8;
  "-1": 9;
};

type SubMap = {
  0: [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
  1: [1, 0, -1, -2, -3, -4, -5, -6, -7, -8];
  2: [2, 1, 0, -1, -2, -3, -4, -5, -6, -7];
  3: [3, 2, 1, 0, -1, -2, -3, -4, -5, -6];
  4: [4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
  5: [5, 4, 3, 2, 1, 0, -1, -2, -3, -4];
  6: [6, 5, 4, 3, 2, 1, 0, -1, -2, -3];
  7: [7, 6, 5, 4, 3, 2, 1, 0, -1, -2];
  8: [8, 7, 6, 5, 4, 3, 2, 1, 0, -1];
  9: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
};

type _RemoveLeadingZeros<T extends string> = ParseNumber<
  RemoveLeading<T, "0"> extends infer WithoutLeadingZeros extends string
    ? IfEmptyString<WithoutLeadingZeros, "0", WithoutLeadingZeros>
    : never
>;

export type _Sub<
  Num1 extends string,
  Num2 extends string,
  NegativeCarry extends 0 | 1 = 0,
  Result extends string = ""
> = IsEmptyString<Num2> extends true
  ? NegativeCarry extends 0
    ? `${Num1}${Result}`
    : `${Decrement<ParseNumber<Num1>>}${Result}`
  : LastCharacter<Num1> extends `${infer Num1LastDigit extends keyof SubMap &
      number}`
  ? LastCharacter<Num2> extends `${infer Num2LastDigit extends keyof SubMap[Num1LastDigit] &
      number}`
    ? `${SubMap[Num1LastDigit][Num2LastDigit]}` extends infer DigitsSub extends keyof SubDecrementMap
      ? (
          NegativeCarry extends 1
            ? Stringify<SubDecrementMap[DigitsSub]>
            : DigitsSub
        ) extends infer DigitsSubWithCarry extends string
        ? Num1 extends `${infer Num1Rest}${Num1LastDigit}`
          ? Num2 extends `${infer Num2Rest}${Num2LastDigit}`
            ? DigitsSubWithCarry extends keyof SubNegativeCarryMap
              ? _Sub<
                  Num1Rest,
                  Num2Rest,
                  1,
                  `${SubNegativeCarryMap[DigitsSubWithCarry]}${Result}`
                >
              : _Sub<Num1Rest, Num2Rest, 0, `${DigitsSubWithCarry}${Result}`>
            : never
          : never
        : never
      : never
    : never
  : never;

/**
 * Accepts two integers and returns their subtraction. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 8
 * type Case1 = Sub<10, 2>
 * // -8
 * type Case2 = Sub<2, 10>
 * // 12
 * type Case3 = Sub<2, -10>
 * // -12
 * type Case4 = Sub<-2, 10>
 * ```
 */
export type Sub<
  Num1 extends number,
  Num2 extends number
> = IsNegativeInteger<Num1> extends true
  ? IsNegativeInteger<Num2> extends true
    ? IsLowerThan<Num1, Num2> extends true
      ? Negate<
          _RemoveLeadingZeros<_Sub<Stringify<Abs<Num1>>, Stringify<Abs<Num2>>>>
        >
      : _RemoveLeadingZeros<_Sub<Stringify<Abs<Num2>>, Stringify<Abs<Num1>>>>
    : Sum<Abs<Num1>, Num2> extends infer Result extends number
    ? Negate<Result>
    : never
  : IsNegativeInteger<Num2> extends true
  ? Sum<Num1, Abs<Num2>>
  : IsLowerThan<Num1, Num2> extends true
  ? Negate<_RemoveLeadingZeros<_Sub<Stringify<Num2>, Stringify<Num1>>>>
  : _RemoveLeadingZeros<_Sub<Stringify<Num1>, Stringify<Num2>>>;
