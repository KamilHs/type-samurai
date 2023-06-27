import { Prettify } from "./prettify";

/**
 * Make passed properties in the passed argument optional
 * @example
 * ```ts
 * // { a?: string, b: number }
 * type T0 = PartialOnly<{ a: string, b: number }, 'a'>;
 * ```
 */
export type PartialOnly<T extends object, K extends keyof T> = Prettify<
  Pick<T, Exclude<keyof T, K>> & {
    [P in K]?: T[P];
  }
>;

/**
 * Make all properties in the passed argument optional except for the passed properties
 * @example
 * ```ts
 * // { a: string, b?: number }
 * type T0 = PartialExcept<{ a: string, b: number }, 'a'>;
 * ```
 */
export type PartialExcept<T extends object, K extends keyof T> = Prettify<
  Pick<T, K> & {
    [P in Exclude<keyof T, K>]?: T[P];
  }
>;
