import { And } from "./and";
import { Extends } from "./extends";
import { Prettify } from "./prettify";

export type MutableOptions = {
  recursive: boolean;
};

/**
 * Make all properties in the passed argument mutable (removes readonly)
 * If `recursive` is set to `true`, it will also make all nested properties mutable
 * @example
 * ```ts
 * // { a: { readonly b: string } }
 * type Case1 = Mutable<{ readonly a: { readonly b: string } }>; 
 * // { a: { b: string } }
 * type Case2 = Mutable<{ readonly a: { readonly b: string } }, { recursive: true }>;
 * ```
 */
export type Mutable<
  T,
  Options extends MutableOptions = { recursive: false }
> = Prettify<{
  -readonly [K in keyof T]: And<
    Options["recursive"],
    Extends<T[K], object>
  > extends true
    ? Mutable<T[K], Options>
    : T[K];
}>;

/**
 * Make passed properties in the passed argument mutable (removes readonly)
 * @example
 * ```ts
 * // { a: string; readonly b: string; }
 * type Case1 = MutableOnly<{ readonly a: string; readonly b: string; }, "a">;
 * // { a: string; b: string; }
 * type Case2 = MutableOnly<{ readonly a: string; readonly b: string; }, "a" | "b">;
 * ```
 */
export type MutableOnly<T, K extends keyof T> = Prettify<
  Pick<T, Exclude<keyof T, K>> & {
    -readonly [P in K]: T[P];
  }
>;

/**
 * Make all properties in the passed argument mutable except for the passed properties
 * @example
 * ```ts
 * // { a: string; readonly b: string; }
 * type Case1 = MutableExcept<{ readonly a: string; readonly b: string; }, "b">;
 * // { a: string; b: string; }
 * type Case2 = MutableExcept<{ a: string; readonly b: string; }, "a">;
 * ```
 */
export type MutableExcept<T, K extends keyof T> = Prettify<
  Pick<T, K> & {
    -readonly [P in Exclude<keyof T, K>]: T[P];
  }
>;
