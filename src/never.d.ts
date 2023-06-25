import { If } from "./if";

/**
 * Returns a boolean if the passed type is `never`
 * @example
 * ```ts
 * // true
 * type Case1 = IsNever<never>
 * // false
 * type Case2 = IsNever<true>
 * ```
 */
export type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Returns the second argument if the first argument is `never` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfNever<never, 'valid'>
 * // 'invalid'
 * type Case2 = IfNever<never, 'valid', 'invalid'>
 * ```
 */
export type IfNever<T, IfTrue = true, IfFalse = false> = If<
  IsNever<T>,
  IfTrue,
  IfFalse
>;

export type NeverifyPropertiesOptions = {
  makeOptional: boolean;
};

/**
 * Turns all properties of an object to type `unknown`.
 * If `makeOptional` option is `true`, makes all properties optional
 * @example
 * ```ts
 * // {a:never; b:never}
 * type Result = NeverifyProperties<{a: string; b: string}>
 * ```
 */
export type NeverifyProperties<
  T extends object,
  Options extends NeverifyPropertiesOptions = { makeOptional: false }
> = {
  [K in keyof T]: never;
} extends infer Result
  ? If<Options["makeOptional"], Partial<Result>, Result>
  : never;
