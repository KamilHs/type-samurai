import { Abs, IsFloat } from "./number";

/**
 * Returns a tuple of whole and fraction part of the passed float number
 * @example
 * ```ts
 * [12, 25]
 * type Case1 = GetFloatNumberParts<12.25>
 * [12, 25]
 * type Case2 = GetFloatNumberParts<-12.25>
 * ```
 */
export type GetFloatNumberParts<T extends number> = IsFloat<T> extends true
  ? `${Abs<T>}` extends `${infer Whole extends number}.${infer Fraction extends number}`
    ? [Whole, Fraction]
    : never
  : never;
