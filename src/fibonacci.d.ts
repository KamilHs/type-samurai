import { Decrement } from "./decrement";
import { IsLowerThan } from "./lower-than";
import { IsNegative } from "./number";
import { Sub } from "./sub";
import { Sum } from "./sum";

/**
 * Returns the fibonacci sequence number under the passed integer index. Range: `[0, 78]`
 * @example
 * ```ts
 * // 3
 * type Case1 = Fibonacci<4>
 * // 102334155
 * type Case2 = Fibonacci<40>
 * ```
 */
export type Fibonacci<T extends number> = IsNegative<T> extends true
  ? never
  : IsLowerThan<T, 2> extends true
  ? T
  : Fibonacci<Decrement<T>> extends infer NMinusOne extends number
  ? Fibonacci<Sub<T, 2>> extends infer NMinusTwo extends number
    ? Sum<NMinusOne, NMinusTwo>
    : never
  : never;
