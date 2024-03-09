import { IsArrayIndex } from "./is-array-index";

/**
 * Get the values of properties in an object
 * @example
 * ```ts
 * // string | number
 * type T0 = ValueOf<{ a: string, b: number }>;
 * ```
 */
export type ValueOf<T> = T[keyof T];

/**
 * Get the values of properties in an object only for the passed properties
 * @example
 * ```ts
 * // string
 * type T0 = ValueOfOnly<{ a: string, b: number }, "a">;
 * ```
 */
export type ValueOfOnly<T, K extends keyof T> = T[K];

/**
 * Get the values of properties in an object except for the passed properties
 * @example
 * ```ts
 * // number
 * type T0 = ValueOfExcept<{ a: string, b: number }, "a">;
 * ```
 */
export type ValueOfExcept<T, K extends keyof T> = T[keyof Omit<T, K>];

/**
 * Get the types of elements in an array
 * @example
 * ```ts
 * // string | number
 * type T0 = ValueOfArray<[string, number]>;
 * ```
 */
export type ValueOfArray<T extends readonly unknown[]> = T[number];
