import { IsEmptyString } from "./string";
import { Sum } from "./sum";

type _StringLength<
  S extends string,
  Parts extends [string[], string[], string[], string[]] = [[], [], [], []]
> = S extends ""
  ? Sum<
      Sum<Parts[0]["length"], Parts[1]["length"]>,
      Sum<Parts[2]["length"], Parts[3]["length"]>
    >
  : S extends `${infer C1 extends string}${infer Rest1 extends string}`
  ? Rest1 extends `${infer C2 extends string}${infer Rest2 extends string}`
    ? Rest2 extends `${infer C3 extends string}${infer Rest3 extends string}`
      ? Rest3 extends `${infer C4 extends string}${infer Rest4 extends string}`
        ? _StringLength<
            Rest4,
            [
              [...Parts[0], C1],
              [...Parts[1], C2],
              [...Parts[2], C3],
              [...Parts[3], C4]
            ]
          >
        : _StringLength<
            Rest3,
            [[...Parts[0], C1], [...Parts[1], C2], [...Parts[2], C3], Parts[3]]
          >
      : _StringLength<
          Rest2,
          [[...Parts[0], C1], [...Parts[1], C2], Parts[2], Parts[3]]
        >
    : _StringLength<Rest1, [[...Parts[0], C1], Parts[1], Parts[2], Parts[3]]>
  : _StringLength<S, Parts>;

/**
 * Returns the length of the passed string. Range of string length `[0, 3968]`
 * @example
 * ```ts
 * // 0
 * type Case1 = StringLength<''>
 * // 3
 * type Case2 = StringLength<'xxx'>
 * ```
 */
export type StringLength<S extends string> = _StringLength<S>;

/**
 * Accepts two strings, returns the third argument (defaults to `never`) if the first string is shorter, otherwise returns the fourth argument (defaults to `never`) if the second argument is shorter, if strings have the same length returns the fifth argument (defaults to `never`)
 * @example
 * ```ts
 * // 'first shorter'
 * type Case1 = CompareStringLength<'a', 'ab', 'first shorter'>
 * // 'first longer'
 * type Case2 = CompareStringLength<'abc', 'ab', 'first shorter', 'first longer'>
 * // 'equal'
 * type Case3 = CompareStringLength<'ab', 'ab', 'first shorter', 'first longer', 'equal'>
 * ```
 */
export type CompareStringLength<
  Str1 extends string,
  Str2 extends string,
  IfStr1Shorter = never,
  IfStr2Shorter = never,
  IfEqual = never
> = IsEmptyString<Str1> extends true
  ? IsEmptyString<Str2> extends true
    ? IfEqual
    : IfStr1Shorter
  : IsEmptyString<Str2> extends true
  ? IfStr2Shorter
  : Str1 extends `${string}${infer Str1Rest extends string}`
  ? Str2 extends `${string}${infer Str2Rest extends string}`
    ? CompareStringLength<
        Str1Rest,
        Str2Rest,
        IfStr1Shorter,
        IfStr2Shorter,
        IfEqual
      >
    : never
  : never;

/**
 * Accepts two strings, returns a boolean whether the first string is shorter
 * @example
 * ```ts
 * // true
 * type Case1 = IsShorterString<'a', 'ab'>
 * // false
 * type Case2 = IsShorterString<'abc', 'ab'>
 * ```
 */
export type IsShorterString<
  Str1 extends string,
  Str2 extends string
> = CompareStringLength<Str1, Str2, true, false, false>;

/**
 * Accepts two strings, returns a boolean whether the first string is longer
 * @example
 * ```ts
 * // true
 * type Case1 = IsLongerString<'ab', 'a'>
 * // false
 * type Case2 = IsLongerString<'a', 'ab'>
 * ```
 */
export type IsLongerString<
  Str1 extends string,
  Str2 extends string
> = CompareStringLength<Str1, Str2, false, true, false>;

/**
 * Accepts two strings, returns a boolean whether strings have the same length
 * @example
 * ```ts
 * // true
 * type Case1 = IsSameLengthString<'ab', 'ab'>
 * // false
 * type Case2 = IsSameLengthString<'ab', 'abc'>
 * ```
 */
export type IsSameLengthString<
  Str1 extends string,
  Str2 extends string
> = CompareStringLength<Str1, Str2, false, false, true>;
