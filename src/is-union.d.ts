import { IsNever } from "./never";
import { Not } from "./not";

type _IsUnion<T, U = T> = IsNever<T> extends true
  ? false
  : T extends U
  ? Not<IsNever<Exclude<U, T>>>
  : false;

/**
 * Returns a boolean whether the passed argument is a union
 * @example
 * ```ts
 * // true
 * type Case1 = IsUnion<'a' | 'b'>
 * // false
 * type Case2 = IsUnion<'a'>
 * ```
 */
export type IsUnion<T> = _IsUnion<T, T>;
