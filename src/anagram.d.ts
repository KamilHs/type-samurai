import { And } from "./and";
import { IsStringLiteral } from "./is-string-literal";
import { IsEmptyString } from "./string";

type _AreAnagrams<
  Str1 extends string,
  Str2 extends string
> = IsEmptyString<Str1> extends true
  ? IsEmptyString<Str2> extends true
    ? true
    : false
  : Str1 extends `${infer First extends string}${infer Rest1 extends string}`
  ? Str2 extends `${infer Prev extends string}${First}${infer Rest2 extends string}`
    ? _AreAnagrams<Rest1, `${Prev}${Rest2}`>
    : false
  : never;

/**
 * Returns a boolean whether two passed string literals are anagrams
 * @example
 * ```ts
 * // true
 * type Case1 = AreAnagrams<"name", "eman">
 * // false
 * type Case1 = AreAnagrams<"name", "emand">
 * ```
 */
export type AreAnagrams<Str1 extends string, Str2 extends string> = And<
  IsStringLiteral<Str1>,
  IsStringLiteral<Str2>
> extends true
  ? _AreAnagrams<Str1, Str2>
  : false;
