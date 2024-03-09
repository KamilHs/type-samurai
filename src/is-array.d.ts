import { And, AndArr } from "./and";
import { IsAny } from "./any";
import { Extends, NotExtends } from "./extends";
import { Mutable } from "./mutable";
import { IsNever } from "./never";
import { Not } from "./not";

/**
 * Returns a boolean whether the passed argument is an array
 * @example
 * ```ts
 * // true
 * type Case1 = IsArray<[]>
 * // false
 * type Case2 = IsArray<string>
 * ```
 */
export type IsArray<T> = AndArr<
  [Not<IsAny<T>>, Not<IsNever<T>>, Extends<T, readonly unknown[]>]
>;

/**
 * Returns a boolean whether the passed argument is a mutable array
 * @example
 * ```ts
 * // true
 * type Case1 = IsMutableArray<[]>
 * // false
 * type Case2 = IsMutableArray<readonly []>
 * ```
 */
export type IsMutableArray<T> = And<IsArray<T>, NotExtends<Readonly<T>, T>>;

/**
 * Returns a boolean whether the passed argument is a read-only array
 * @example
 * ```ts
 * // true
 * type Case1 = IsReadonlyArray<readonly []>
 * // false
 * type Case2 = IsReadonlyArray<[]>
 * ```
 */
export type IsReadonlyArray<T> = And<IsArray<T>, NotExtends<T, Mutable<T>>>;
