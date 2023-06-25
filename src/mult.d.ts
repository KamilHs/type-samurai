import { IsEqual } from "./equal";
import { If } from "./if";
import { LastCharacter } from "./last-character";
import { IsNever } from "./never";
import { Abs, IfNegative, Negate, ParseNumber } from "./number";
import { Push } from "./push";
import { RemoveLeading } from "./remove-leading";
import { Repeat } from "./repeat";
import { ReturnItselfIfNotExtends } from "./return-itself-if-extends";
import { IsEmptyString } from "./string";
import { Stringify } from "./stringify";
import { Sum, _Sum } from "./sum";

type MultiplicationMap = {
  0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  2: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  3: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27];
  4: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36];
  5: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
  6: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54];
  7: [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];
  8: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72];
  9: [0, 9, 18, 27, 36, 45, 54, 63, 72, 81];
};

type _MultSingle<
  Num1 extends string,
  DigitOfNum2 extends keyof MultiplicationMap,
  Carry extends number = 0,
  Result extends string = ""
> = IsEmptyString<Num1> extends true
  ? ReturnItselfIfNotExtends<RemoveLeading<`${Carry}${Result}`, "0">, "", "0">
  : IsEqual<Num1, 0> extends true
  ? "0"
  : IsEqual<DigitOfNum2, 0> extends true
  ? "0"
  : LastCharacter<Num1, { includeRest: true }> extends [
      infer Num1LastCharacter extends string,
      infer Num1Rest extends string
    ]
  ? Stringify<
      Sum<
        MultiplicationMap[DigitOfNum2][ParseNumber<Num1LastCharacter> &
          keyof MultiplicationMap[DigitOfNum2]],
        Carry
      >
    > extends infer Multiplied extends string
    ? LastCharacter<Multiplied, { includeRest: true }> extends [
        infer MultipliedLastDigit extends string,
        infer MultipliedRest extends string
      ]
      ? _MultSingle<
          Num1Rest,
          DigitOfNum2,
          If<
            IsNever<ParseNumber<MultipliedRest>>,
            0,
            ParseNumber<MultipliedRest>
          >,
          `${MultipliedLastDigit}${Result}`
        >
      : never
    : never
  : never;

type _Mult<
  Num1 extends string,
  Num2 extends string,
  Result extends string = "",
  Iteration extends unknown[] = []
> = IsEmptyString<Num2> extends true
  ? Result
  : LastCharacter<Num2, { includeRest: true }> extends [
      infer Num2LastCharacter extends string,
      infer Num2Rest extends string
    ]
  ? ParseNumber<Num2LastCharacter> extends infer Num2Digit extends keyof MultiplicationMap
    ? _Mult<
        Num1,
        Num2Rest,
        Stringify<
          _Sum<
            Result,
            ReturnItselfIfNotExtends<
              RemoveLeading<
                `${_MultSingle<Num1, Num2Digit>}${Repeat<
                  "0",
                  Iteration["length"]
                >}`,
                "0"
              >,
              "",
              "0"
            >
          >
        >,
        Push<Iteration, unknown>
      >
    : never
  : Result;

/**
 * Accepts tow integers and returns their multiplication. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 0
 * type Case1 = Mult<10, 0>
 * // 24
 * type Case2 = Mult<4, 6>
 * // -24
 * type Case3 = Mult<-4, 6>
 * // 24
 * type Case4 = Mult<-4, -6>
 * ```
 */
export type Mult<Num1 extends number, Num2 extends number> = IsEqual<
  Num1,
  0
> extends true
  ? 0
  : IsEqual<Num2, 0> extends true
  ? 0
  : ParseNumber<
      _Mult<Stringify<Abs<Num1>>, Stringify<Abs<Num2>>>
    > extends infer Result extends number
  ? IfNegative<
      Num1,
      IfNegative<Num2, Result, Negate<Result>>,
      IfNegative<Num2, Negate<Result>, Result>
    >
  : never;
