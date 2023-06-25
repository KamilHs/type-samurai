/**
 * Returns the second argument if the first argument is `true` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * ```ts
 * // valid
 * type Case1 = If<true, 'valid'>
 * // invalid
 * type Case2 = If<false, 'valid', 'invalid'>
 * ```
 */
export type If<
  Condition,
  IfTrue = true,
  IfFalse = false
> = Condition extends true ? IfTrue : IfFalse;
