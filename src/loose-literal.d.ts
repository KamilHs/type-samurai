/**
 * Improves the autocompletion of loose literal types
 * @example
 * ```ts
 * // "a" | "b" | "c" | or any string
 * type T0 = LooseLiteral<"a" | "b" | "c", string>;
 * ```
 */
export type LooseLiteral<Literal, BaseType> =
  | Literal
  | (BaseType & Record<never, never>);
