import { _Increment } from "./increment";
import { LastCharacter } from "./last-character";
import { Abs, IsNegative, Negate, ParseNumber } from "./number";
import { Stringify } from "./stringify";

type DecrementMap = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type NegativeCarryMap = {
  "-1": 9;
};

export type _Decrement<
  Number extends string,
  Result extends string = ""
> = Number extends ""
  ? ParseNumber<Result>
  : ParseNumber<LastCharacter<Number>> extends infer LastDigit extends number
  ? DecrementMap[LastDigit] extends infer Decremented extends number
    ? Number extends `${infer Rest}${LastDigit}`
      ? `${Decremented}` extends keyof NegativeCarryMap
        ? _Decrement<Rest, `${NegativeCarryMap[`${Decremented}`]}${Result}`>
        : `${Rest}${Decremented}${Result}` extends infer FinalResult extends string
        ? ParseNumber<
            FinalResult extends `0${infer FinalResultWithoutLeadingZero extends string}`
              ? FinalResultWithoutLeadingZero extends ""
                ? FinalResult
                : FinalResultWithoutLeadingZero
              : FinalResult
          >
        : never
      : never
    : never
  : never;

type _DecrementNegativeOrZero<T extends number> = _Increment<
  Stringify<T>
> extends infer PositiveDecrementResult extends number
  ? PositiveDecrementResult extends 0
    ? PositiveDecrementResult
    : Negate<PositiveDecrementResult>
  : never;

/**
 * Accepts an integer and returns the decremented value of it. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // 5
 * type Case1 = Decrement<6>
 * // -7
 * type Case2 = Decrement<-6>
 * ```
 */
export type Decrement<T extends number> = IsNegative<T> extends true
  ? _DecrementNegativeOrZero<Abs<T>>
  : T extends 0
  ? _DecrementNegativeOrZero<T>
  : _Decrement<Stringify<T>>;
