import { IsEmptyString } from "./string";
import { Stringify } from "./stringify";
import { IsStringLiteral } from "./is-string-literal";
import { Not } from "./not";

type _IsPalindrome<T extends string> = IsEmptyString<T> extends true
  ? true
  : Not<IsStringLiteral<T>> extends true
  ? false
  : T extends `${infer First extends string}${infer Rest extends string}`
  ? IsEmptyString<Rest> extends true
    ? true
    : Rest extends `${infer NewRest extends string}${First}`
    ? _IsPalindrome<NewRest>
    : false
  : false;

/**
 * Check whether a string or number is a palindrome.
 * @example
 * ```ts
 * // true
 * type T0 = IsPalindrome<"racecar">;
 * // false
 * type T1 = IsPalindrome<"hello">;
 * ```
 */
export type IsPalindrome<T extends string | number> = _IsPalindrome<
  Stringify<T>
>;
