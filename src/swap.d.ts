import { IsEqual } from "./equal";
import { ParseNumber } from "./number";
import { IsBetween } from "./is-between";
import { And } from "./and";
import { IsTuple } from "./is-tuple";

/**
 * Swaps the position of two elements in a tuple.
 * @example
 * ```ts
 * // [3, 2, 1]
 * type Case1 = Swap<[1, 2, 3], 0, 2>;
 * // [1, 2, 3]
 * type Case2 = Swap<[1, 2, 3], 0, 0>;
 * ```
 */
export type Swap<
  T extends readonly unknown[],
  FromIndex extends number,
  ToIndex extends number
> = IsTuple<T> extends true
  ? And<
      IsBetween<FromIndex, 0, T["length"]>,
      IsBetween<ToIndex, 0, T["length"]>
    > extends true
    ? T[FromIndex] extends infer From
      ? T[ToIndex] extends infer To
        ? {
            [K in keyof T]: ParseNumber<K> extends infer NumK
              ? IsEqual<FromIndex, NumK> extends true
                ? To
                : IsEqual<ToIndex, NumK> extends true
                ? From
                : T[K]
              : never;
          }
        : never
      : never
    : never
  : T;
