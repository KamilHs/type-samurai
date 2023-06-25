import { Push } from "./push";

type _Repeat<
  T extends string,
  Count extends number,
  Result extends string = "",
  Iteration extends unknown[] = []
> = Iteration["length"] extends Count
  ? Result
  : _Repeat<T, Count, `${T}${Result}`, Push<Iteration, unknown>>;

/**
 * Repeats the first argument number of times specified in the second argument. Range `[0,999]`
 * @example
 * ```ts
 * // 'x'
 * type Case1 = Repeat<'x', 1>
 * // 'xxxxx'
 * type Case2 = Repeat<'x', 5>
 * ```
 */
export type Repeat<T extends string, Count extends number> = _Repeat<T, Count>;
