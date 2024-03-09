import { And } from "./and";
import { Decrement } from "./decrement";
import { IfEqual, IsEqual, IsNotEqual } from "./equal";
import { IfGreaterThan } from "./greater-than";
import { If } from "./if";
import { Increment } from "./increment";
import { IsLowerThan } from "./lower-than";
import { Mult } from "./mult";
import { IsNever } from "./never";
import { Abs, IsNegative, IsPositive, Negate, ParseNumber } from "./number";
import { Or } from "./or";
import { IsEmptyString } from "./string";
import { Stringify } from "./stringify";
import { Sub } from "./sub";

type _FindQuotient<
  Dividend extends number,
  Divisor extends number,
  CurrentQuotient extends number
> = Mult<Divisor, CurrentQuotient> extends infer Product extends number
  ? IsEqual<Dividend, Product> extends true
    ? CurrentQuotient
    : IsLowerThan<Dividend, Product> extends true
    ? _FindQuotient<Dividend, Divisor, Decrement<CurrentQuotient>>
    : CurrentQuotient
  : never;

type _Div<
  Dividend extends string,
  Divisor extends number,
  Result extends string = "",
  CurrentDividend extends string = "",
  IterationsWithoutDivision extends number = 0,
  HadFirstDivision extends boolean = false
> = Or<
  IsEmptyString<CurrentDividend>,
  IsLowerThan<ParseNumber<CurrentDividend>, Divisor>
> extends true
  ? IsEmptyString<Dividend> extends true
    ? ParseNumber<
        If<
          And<HadFirstDivision, IsNotEqual<IterationsWithoutDivision, 0>>,
          `${Result}0`,
          Result
        >
      >
    : Dividend extends `${infer FirstDigit extends string}${infer Rest extends string}`
    ? _Div<
        Rest,
        Divisor,
        If<
          And<HadFirstDivision, IsNotEqual<IterationsWithoutDivision, 0>>,
          `${Result}0`,
          Result
        >,
        IfEqual<
          CurrentDividend,
          "0",
          FirstDigit,
          `${CurrentDividend}${FirstDigit}`
        >,
        Increment<IterationsWithoutDivision>,
        HadFirstDivision
      >
    : never
  : _FindQuotient<
      ParseNumber<CurrentDividend>,
      Divisor,
      10
    > extends infer Quotient extends number
  ? IsNever<Quotient> extends true
    ? ParseNumber<Result>
    : Sub<
        ParseNumber<CurrentDividend>,
        Mult<Quotient, Divisor>
      > extends infer Remainder extends number
    ? _Div<
        Dividend,
        Divisor,
        `${Result}${Quotient}`,
        IfGreaterThan<Remainder, 0, `${Remainder}`, "">,
        0,
        true
      >
    : never
  : never;

/**
 * Returns integer division of two numbers. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 5
 * type Case1 = Div<10, 2>
 * // 2
 * type Case2 = Div<7, 3>
 * ```
 */
export type Div<Dividend extends number, Divisor extends number> = IsEqual<
  Divisor,
  0
> extends true
  ? never
  : IsEqual<Dividend, 0> extends true
  ? 0
  : IsEqual<Dividend, Divisor> extends true
  ? 1
  : IsLowerThan<Abs<Dividend>, Abs<Divisor>> extends true
  ? 0
  : _Div<
      Stringify<Abs<Dividend>>,
      Abs<Divisor>
    > extends infer Quotient extends number
  ? If<
      Or<
        And<IsNegative<Dividend>, IsNegative<Divisor>>,
        And<IsPositive<Dividend>, IsPositive<Divisor>>
      >,
      Quotient,
      Negate<Quotient>
    >
  : never;
