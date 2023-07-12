import { Decrement } from "./decrement";
import { GetFloatNumberParts } from "./get-float-number-parts";
import { IsFloat, IsNegative } from "./number";

export type Floor<T extends number> = IsFloat<T> extends true
  ? GetFloatNumberParts<T> extends [infer Whole extends number, unknown]
    ? IsNegative<Whole> extends true
      ? Decrement<Whole>
      : Whole
    : never
  : T;
