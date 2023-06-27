import { If } from "./if";
import { IfNot } from "./if-not";
import { IsNever } from "./never";
import { Not } from "./not";

export type OddDigit = "1" | "3" | "5" | "7" | "9";
export type EvenDigit = "0" | "2" | "4" | "6" | "8";

export type Integer<T extends number> = `${T}` extends `${string}.${string}`
  ? never
  : T;

export type Float<T extends number> = If<IsNever<Integer<T>>, T, never>;

export type Negative<T extends number> = `${T}` extends `-${string}`
  ? T
  : never;

export type Positive<T extends number> = If<IsNever<Negative<T>>, T, never>;

export type PositiveInteger<T extends number> = Positive<Integer<T>>;

export type NegativeInteger<T extends number> = Negative<Integer<T>>;

export type PositiveFloat<T extends number> = Positive<Float<T>>;

export type NegativeFloat<T extends number> = Negative<Float<T>>;

export type Even<T extends number> = IfNot<
  IsNever<Integer<T>>,
  `${T}` extends `${string}${EvenDigit}` ? T : never,
  never
>;

export type Odd<T extends number> = IfNot<
  IsNever<Integer<T>>,
  If<IsNever<Even<T>>, T, never>,
  never
>;

export type IsInteger<T extends number> = Not<IsNever<Integer<T>>>;

export type IsFloat<T extends number> = Not<IsNever<Float<T>>>;

export type IsEven<T extends number> = If<
  IsInteger<T>,
  `${T}` extends `${string}${EvenDigit}` ? true : false
>;

export type IsOdd<T extends number> = If<IsInteger<T>, Not<IsEven<T>>>;

export type IsPositive<T extends number> = Not<IsNever<Positive<T>>>;

export type IsNegative<T extends number> = Not<IsNever<Negative<T>>>;

export type IsPositiveInteger<T extends number> = Not<
  IsNever<PositiveInteger<T>>
>;

export type IsNegativeInteger<T extends number> = Not<
  IsNever<NegativeInteger<T>>
>;

export type IsPositiveFloat<T extends number> = Not<IsNever<PositiveFloat<T>>>;

export type IsNegativeFloat<T extends number> = Not<IsNever<NegativeFloat<T>>>;

export type IfInteger<T extends number, IfTrue = true, IfFalse = false> = If<
  IsInteger<T>,
  IfTrue,
  IfFalse
>;

export type IfFloat<T extends number, IfTrue = true, IfFalse = false> = If<
  IsFloat<T>,
  IfTrue,
  IfFalse
>;

export type IfEven<T extends number, IfTrue = true, IfFalse = false> = If<
  IsEven<T>,
  IfTrue,
  IfFalse
>;

export type IfOdd<T extends number, IfTrue = true, IfFalse = false> = If<
  IsOdd<T>,
  IfTrue,
  IfFalse
>;

export type IfPositive<T extends number, IfTrue = true, IfFalse = false> = If<
  IsPositive<T>,
  IfTrue,
  IfFalse
>;

export type IfNegative<T extends number, IfTrue = true, IfFalse = false> = If<
  IsNegative<T>,
  IfTrue,
  IfFalse
>;

export type IfPositiveInteger<
  T extends number,
  IfTrue = true,
  IfFalse = false
> = If<IsPositiveInteger<T>, IfTrue, IfFalse>;

export type IfNegativeInteger<
  T extends number,
  IfTrue = true,
  IfFalse = false
> = If<IsNegativeInteger<T>, IfTrue, IfFalse>;

export type IfPositiveFloat<
  T extends number,
  IfTrue = true,
  IfFalse = false
> = If<IsPositiveFloat<T>, IfTrue, IfFalse>;

export type IfNegativeFloat<
  T extends number,
  IfTrue = true,
  IfFalse = false
> = If<IsNegativeFloat<T>, IfTrue, IfFalse>;

export type ParseNumber<T extends string | number> =
  T extends `${infer NumT extends number}` ? NumT : never;

export type Abs<T extends number> =
  `${T}` extends `-${infer PositiveT extends number}` ? PositiveT : T;
export type Negate<T extends number> = ParseNumber<`-${Abs<T>}`>;
