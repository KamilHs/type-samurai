import { If } from "./if";
import { IsNever } from "./never";

/**
 * Returns the first argument if it is an empty array, otherwise returns `never`
 * @example
 * ```ts
 * // never
 * type Result = EmptyArray<[1]>
 * ```
 */
export type EmptyArray<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...unknown[]
]
  ? never
  : T;

/**
 * Returns the first argument if it is a non empty array, otherwise returns `never`
 * @example
 * ```ts
 * // never
 * type Result = EmptyArray<[1]>
 * ```
 */
export type NonEmptyArray<T extends readonly unknown[]> = If<
  IsNever<EmptyArray<T>>,
  T,
  never
>;

/**
 * Returns a boolean whether the passed argument is an empty array
 * @example
 * ```ts
 * // false
 * type Result - IsEmptyArray<[1]>
 */
export type IsEmptyArray<T extends readonly unknown[]> = If<
  IsNever<EmptyArray<T>>,
  false,
  true
>;

/**
 * Returns a boolean whether the passed argument is a non empty array
 * @example
 * ```ts
 * // true
 * type Result - IsEmptyArray<[1]>
 */
export type IsNonEmptyArray<T extends readonly unknown[]> = If<
  IsNever<EmptyArray<T>>,
  true,
  false
>;

/**
 *  Returns the second argument if the first argument is an empty array (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // string
 * type Result = IfEmptyArray<[], string, number>
 * ```
 */
export type IfEmptyArray<
  T extends readonly unknown[],
  IfTrue = true,
  IfFalse = false
> = If<IsEmptyArray<T>, IfTrue, IfFalse>;

/**
 *  Returns the second argument if the first argument is a non empty array (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // string
 * type Result = IfEmptyArray<[1], string, number>
 * ```
 */
export type IfNonEmptyArray<
  T extends readonly unknown[],
  IfTrue = true,
  IfFalse = false
> = If<IsNonEmptyArray<T>, IfTrue, IfFalse>;
