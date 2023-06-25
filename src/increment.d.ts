import { _Decrement } from "./decrement";
import { LastCharacter } from "./last-character";
import { Abs, IsNegative, Negate, ParseNumber } from "./number";
import { IsEmptyString } from "./string";
import { Stringify } from "./stringify";

type IncrementMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type LastDigitMap = {
  10: 0;
};

export type _Increment<
  Number extends string,
  Result extends string = ""
> = IsEmptyString<Number> extends true
  ? ParseNumber<`1${Result}`>
  : LastCharacter<Number> extends `${infer LastDigit extends number}`
  ? IncrementMap[LastDigit] extends infer Incremented extends number
    ? Number extends `${infer Rest}${LastDigit}`
      ? Incremented extends keyof LastDigitMap
        ? _Increment<Rest, `${LastDigitMap[Incremented]}${Result}`>
        : ParseNumber<`${Rest}${Incremented}${Result}`>
      : never
    : never
  : never;

/**
 * Accepts an integer and returns the incremented value of it. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 2
 * type Case1 = Increment<1>
 * // -9
 * type Case1 = Increment<-10>
 * ```
 */
export type Increment<T extends number> = IsNegative<T> extends true
  ? _Decrement<
      Stringify<Abs<T>>
    > extends infer NegativeIncrementResult extends number
    ? NegativeIncrementResult extends 0
      ? NegativeIncrementResult
      : Negate<NegativeIncrementResult>
    : never
  : _Increment<Stringify<T>>;
