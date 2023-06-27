import { Prettify } from "./prettify";

/**
 * Make passed properties in the passed argument required
 * @example
 * ```ts
 * // { a: number; b?: string; c?: boolean }
 * type T0 = RequiredOnly<{ a?: number; b?: string; c?: boolean }, "a">;
 * ```
 */
export type RequiredOnly<T extends object, K extends keyof T> = Prettify<
  Pick<T, Exclude<keyof T, K>> & {
    [P in K]-?: T[P];
  }
>;

/**
 * Make all properties in the passed argument required except for the passed properties
 * @example
 * ```ts
 * // { a?: number; b: string; c: boolean }
 * type T0 = RequiredExcept<{ a?: number; b?: string; c?: boolean }, "a">;
 * ```
 */
export type RequiredExcept<T extends object, K extends keyof T> = Prettify<
  Pick<T, K> & {
    [P in Exclude<keyof T, K>]-?: T[P];
  }
>;
