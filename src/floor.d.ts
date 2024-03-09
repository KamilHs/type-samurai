import { GetFloatNumberParts } from "./get-float-number-parts";
import { Increment } from "./increment";
import { IsFloat, IsNegative, Negate } from "./number";

/**
 * Type version of `Math.floor()`. Returns floored value of the passed number
 * @example
 * ```ts
 * // 1
 * type Case1 = Ceil<1.9>
 * // -2
 * type Case2 = Ceil<-1.2>
 * ```
 */
export type Floor<T extends number> = IsFloat<T> extends true
  ? GetFloatNumberParts<T> extends [infer Whole extends number, unknown]
    ? IsNegative<T> extends true
      ? Negate<Increment<Whole>>
      : Whole
    : never
  : T;
