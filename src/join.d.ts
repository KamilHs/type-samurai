import { IfEmptyArray } from "./array";
import { IsTuple } from "./is-tuple";

/**
 * Type version of `Array.prototype.join()`. Joins the first array argument by the second argument
 * @example
 * ```ts
 * // 'a-p-p-l-e'
 * type Case1 = Join<["a", "p", "p", "l", "e"], "-">
 * // '21212'
 * type Case2 = Join<["2", "2", "2"], 1>
 * // 'o'
 * type Case3 = Join<["o"], "u">
 * ```
 */
export type Join<
  T extends readonly (string | number)[],
  Glue extends string | number
> = IsTuple<T> extends true
  ? T extends readonly [
      infer First extends string | number,
      ...infer Rest extends readonly (string | number)[]
    ]
    ? IfEmptyArray<Rest, First, `${First}${Glue}${Join<Rest, Glue>}`>
    : never
  : never;
