import { GetFloatNumberParts } from "./get-float-number-parts";
import { IsFloat, IsNegative, Negate } from "./number";

/**
 * Type version of `Math.trunc()`. Returns the integer part of a number by removing any fractional digits.
 * @example
 * ```ts
 * // 3
 * type T0 = Trunc<3.14>;
 * // -3
 * type T1 = Trunc<-3.14>;
 * ```
 */
export type Trunc<T extends number> = number extends T
  ? T
  : IsFloat<T> extends true
  ? GetFloatNumberParts<T>[0] extends infer IntegerPart extends number
    ? IsNegative<T> extends true
      ? Negate<IntegerPart>
      : IntegerPart
    : never
  : T;
