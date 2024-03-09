import { Prettify } from "./prettify";

/**
 * Make all properties in the passed argument non-nullable
 * @example
 * ```ts
 * // { a: string, b: number }
 * type T0 = NonNullableObject<{ a: string | null, b: number | undefined }>;
 * ```
 */
export type NonNullableObject<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

/**
 * Make passed properties in the passed argument non-nullable
 * @example
 * ```ts
 * // { a: string, b: number, c: boolean | null }
 * type T0 = NonNullableObjectOnly<{ a: string | null, b: number | undefined, c: boolean | null }, "a" | "b">;
 * ```
 */
export type NonNullableObjectOnly<T, K extends keyof T> = Prettify<
  Pick<T, Exclude<keyof T, K>> & {
    [P in K]: NonNullable<T[P]>;
  }
>;

/**
 * Make all properties in the passed argument non-nullable except for the passed properties
 * @example
 * ```ts
 * // { a: string, b: number, c: boolean | null }
 * type T0 = NonNullableObjectExcept<{ a: string | null, b: number | undefined, c: boolean | null }, "c">;
 * ```
 */
export type NonNullableObjectExcept<T, K extends keyof T> = Prettify<
  Pick<T, K> & {
    [P in Exclude<keyof T, K>]: NonNullable<T[P]>;
  }
>;
