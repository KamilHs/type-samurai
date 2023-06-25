import { IsEqual } from "./equal";
import { Increment } from "./increment";
import { Mult } from "./mult";
import { IsNegative } from "./number";

type _Factorial<
  T extends number,
  CurrentNum extends number = 1,
  CurrentProduct extends number = 1
> = IsEqual<T, CurrentNum> extends true
  ? Mult<CurrentProduct, CurrentNum>
  : _Factorial<T, Increment<CurrentNum>, Mult<CurrentProduct, CurrentNum>>;

/**
 * Accepts an integer argument and returns it mathematical factorial. Range: [0, 21]
 * @example
 * // 0
 * type Case1 = Factorial<0>
 * // 720
 * type Case1 = Factorial<6>
 */
export type Factorial<T extends number> = number extends T
  ? never
  : IsNegative<T> extends true
  ? never
  : IsEqual<T, 0> extends true
  ? 1
  : _Factorial<T>;
