import { IsEmptyString } from "./string";

/**
 * Accepts a string and removes leading characters specified in the second argument
 * @example
 * ```ts
 * // 'bc'
 * type Case1 = RemoveLeading<'aaabc', 'a'>
 * // 'abc'
 * type Case2 = RemoveLeading<'abc', 'd'>
 * // ''
 * type Case3 = RemoveLeading<'aaa', 'a'>
 * // 'a'
 * type Case3 = RemoveLeading<'aaa', 'aa'>
 * ```
 */
export type RemoveLeading<
  T extends string,
  Characters extends string
> = T extends `${Characters}${infer Rest extends string}`
  ? IsEmptyString<Rest> extends true
    ? Rest
    : RemoveLeading<Rest, Characters>
  : T;
