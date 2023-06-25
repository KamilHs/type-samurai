import { IsAny } from "./any";
import { If } from "./if";

/**
 * Returns a boolean if the passed type is `unknown`
 * @example
 * ```ts
 * // true
 * type TrueResult = IsUnknown<unknown>
 * // false
 * type FalseResult = IsUnknown<any>
 * ```
 */
export type IsUnknown<T> = IsAny<T> extends true
  ? false
  : [unknown] extends [T]
  ? true
  : false;

/**
 * Returns the second argument if the first argument is `unknown` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // "foo"
 * type Result = IfUnknown<unknown, "foo", "bar">
 * ```
 */
export type IfUnknown<T, IfTrue = true, IfFalse = false> = If<
  IsUnknown<T>,
  IfTrue,
  IfFalse
>;

export type UnknownifyPropertiesOptions = {
  makeOptional: boolean;
};

/**
 * Turns all properties of an object to type `unknown`.
 * If `makeOptional` option is `true`, makes all properties optional
 * @example
 * ```ts
 * // {a:unknown; b:unknown}
 * type Result = UnknownifyProperties<{a: string; b: string}>
 * ```
 */
export type UnknownifyProperties<
  T extends object,
  Options extends UnknownifyPropertiesOptions = { makeOptional: false }
> = {
  [K in keyof T]: unknown;
} extends infer Result
  ? If<Options["makeOptional"], Partial<Result>, Result>
  : never;
