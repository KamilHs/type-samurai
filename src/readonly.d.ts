import { Prettify } from "./prettify";

/**
 * Make passed properties in the passed argument readonly
 * @example
 * ```ts
 * // { readonly a: string, b: number }
 * type T0 = ReadonlyOnly<{ a: string, b: number }, 'a'>;
 * ```
 */
export type ReadonlyOnly<T extends object, K extends keyof T> = Prettify<
  Pick<T, Exclude<keyof T, K>> & {
    readonly [P in K]: T[P];
  }
>;

/**
 * Make all properties in the passed argument readonly except for the passed properties
 * @example
 * ```ts
 * // { a: string, readonly b: number }
 * type T0 = ReadonlyExcept<{ a: string, b: number }, 'a'>;
 * ```
 */
export type ReadonlyExcept<T extends object, K extends keyof T> = Prettify<
  Pick<T, K> & {
    readonly [P in Exclude<keyof T, K>]: T[P];
  }
>;
