import { Abs, ParseNumber } from "./number";
import { Split } from "./split";
import { Stringify } from "./stringify";

/**
 * Accepts an integer argument and returns a tuple of its digits
 * @example
 * ```ts
 * // [1]
 * type Case1 = DigitsTuple<1>
 * // [1, 2, 3]
 * type Case2 = DigitsTuple<123>
 * // [1, 2, 3]
 * type Case3 = DigitsTuple<-123>
 * ```
 */
export type DigitsTuple<T extends number> = number extends T
  ? number[]
  : Split<Stringify<Abs<T>>, ""> extends infer Result
  ? {
      [K in keyof Result]: Result[K] extends string
        ? ParseNumber<Result[K]>
        : Result[K];
    }
  : never;
