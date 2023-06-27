import { And } from "./and";
import { IsGreaterOrEqual } from "./greater-than";
import { IsNever } from "./never";
import { Not } from "./not";
import { IsInteger, ParseNumber } from "./number";

/**
 * Returns a boolean whether the passed argument is a valid array index
 * @example
 * ```ts
 * // true
 * type Case1 = IsArrayIndex<1>
 * // true
 * type Case2 = IsArrayIndex<'1'>
 * // false
 * type Case3 = IsArrayIndex<-1>
 * ```
 */
export type IsArrayIndex<T> = T extends number
  ? And<IsInteger<T>, IsGreaterOrEqual<T, 0>>
  : T extends string
  ? ParseNumber<T> extends infer NumT extends number
    ? Not<IsNever<NumT>> extends true
      ? And<IsInteger<NumT>, IsGreaterOrEqual<NumT, 0>>
      : false
    : false
  : never;
