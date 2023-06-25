import { If } from "./if";
import { Not } from "./not";

/**
 * Returns a boolean whether the passed two arguments are equal
 * @example
 * ```ts
 * // true
 * type Case1 = IsEqual<string, string>
 * // false
 * type Case2 = IsEqual<1, 4>
 * ```
 */
export type IsEqual<T, U> = (<F>() => F extends T ? 1 : 2) extends <
  F
>() => F extends U ? 1 : 2
  ? true
  : false;

/**
 * Returns a boolean whether the passed two arguments are not equal
 * @example
 * ```ts
 * // true
 * type Case1 = IsNotEqual<1, 4>
 * // false
 * type Case2 = IsNotEqual<string, string>
 * ```
 */
export type IsNotEqual<T, U> = Not<IsEqual<T, U>>;

/**
 * Accepts two types and returns the third argument if the first two are equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfEqual<string, string, 'valid'>
 * // 'invalid'
 * type Case1 = IfEqual<1, 4, 'valid', 'invalid'>
 * ```
 */
export type IfEqual<T, U, IfTrue = true, IfFalse = false> = If<
  IsEqual<T, U>,
  IfTrue,
  IfFalse
>;

/**
 * Accepts two types and returns the third argument if the first two are not equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfNotEqual<1, 4, 'valid'>
 * // 'invalid'
 * type Case1 = IfNotEqual<string, string, 'valid', 'invalid'>
 * ```
 */
export type IfNotEqual<T, U, IfTrue = true, IfFalse = false> = If<
  IsNotEqual<T, U>,
  IfTrue,
  IfFalse
>;
