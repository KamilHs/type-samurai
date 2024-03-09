import { DigitsTuple } from "./digits-tuple";

/**
 * Returns the first digit of the number argument
 * @example
 * ```ts
 * // 1
 * type Case1 = FirstDigit<123>
 * // -1
 * type Case2 = FirstDigit<-123>
 * ```
 */
export type FirstDigit<T extends number> = DigitsTuple<T> extends readonly [
  infer First extends number,
  ...unknown[]
]
  ? First
  : never;
