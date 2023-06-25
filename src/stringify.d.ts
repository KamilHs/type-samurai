import { Join } from "./join";

/**
 * Transform numbers, booleans, strings, bigints to string.
 * ```ts
 * // 'true'
 * type Result = Stringify<true>
 *
 * ```
 */
export type Stringify<T> = T extends number | boolean | string | bigint
  ? `${T}`
  : never;
