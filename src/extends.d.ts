import { IsEmptyArray } from "./array";
import { If } from "./if";
import { Not } from "./not";
import { Pop } from "./pop";

/**
 * Returns boolean whether the first argument extends the second argument
 * @example
 * ```ts
 * // true
 * type Case1 = Extends<1, number>
 * // false
 * type Case2 = Extends<number, 1>
 * ```
 */
export type Extends<T, Base> = [T] extends [Base] ? true : false;

/**
 * Returns boolean whether the first argument doesn't extend the second argument
 * @example
 * ```ts
 * // false
 * type Case1 = Extends<1, number>
 * // true
 * type Case2 = Extends<number, 1>
 * ```
 */
export type NotExtends<T, Base> = Not<Extends<T, Base>>;

/**
 * Returns the third argument if the first argument extends the second argument (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfExtends<1, number, 'valid'>
 * // 'invalid'
 * type Case2 = IfExtends<1, string, 'valid', 'invalid'>
 * ```
 */
export type IfExtends<T, Base, IfTrue = true, IfFalse = false> = If<
  Extends<T, Base>,
  IfTrue,
  IfFalse
>;

/**
 * Returns the third argument if the first argument doesn't extend the second argument (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = IfExtends<1, string, 'valid'>
 * // 'invalid'
 * type Case2 = IfExtends<1, number, 'valid', 'invalid'>
 * ```
 */
export type IfNotExtends<T, Base, IfTrue = true, IfFalse = false> = If<
  NotExtends<T, Base>,
  IfTrue,
  IfFalse
>;

/**
 * Returns boolean whether the every element of first array argument extend the second argument
 * @example
 * ```ts
 * // true
 * type Case1 = ExtendsArr<[1, 2, 3], number>
 * // false
 * type Case1 = ExtendsArr<[1, '2', 3], number>
 * ```
 */
export type ExtendsArr<
  T extends readonly unknown[],
  Base
> = IsEmptyArray<T> extends true
  ? true
  : Pop<
      T,
      {
        includeRemoved: true;
      }
    > extends readonly [infer Rest extends readonly unknown[], infer Removed]
  ? Extends<Removed, Base> extends true
    ? ExtendsArr<Rest, Base>
    : false
  : false;
