import { IsFloat } from "./number";

export type GetFloatNumberParts<T extends number> = IsFloat<T> extends true
  ? `${T}` extends `${infer Whole extends number}.${infer Fraction extends number}`
    ? [Whole, Fraction]
    : never
  : never;
