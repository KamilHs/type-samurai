import { IsEmptyArray } from "./array";
import { IsReadonlyArray } from "./is-array";
import { IsTuple } from "./is-tuple";

type _Reverse<
  T extends readonly unknown[],
  Result extends readonly unknown[] = []
> = IsEmptyArray<T> extends true
  ? Result
  : T extends readonly [...infer Rest extends readonly unknown[], infer First]
  ? _Reverse<Rest, [...Result, First]>
  : Result;

/**
 * Returns a new array with the elements in reverse order.
 * @example
 * ```ts
 * // [3, 2, 1]
 * type T0 = Reverse<[1, 2, 3]>;
 * // [3, 2, 1]
 * type T1 = Reverse<readonly [1, 2, 3]>;
 * ```
 */
export type Reverse<T extends readonly unknown[]> = IsTuple<T> extends true
  ? _Reverse<T> extends infer R extends readonly unknown[]
    ? IsReadonlyArray<T> extends true
      ? Readonly<R>
      : R
    : never
  : T;
