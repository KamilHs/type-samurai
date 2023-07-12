import { Increment } from "./increment";
import { IsFloat, IsNegative } from "./number";
import { GetFloatNumberParts } from "./get-float-number-parts";

export type Ceil<T extends number> = IsFloat<T> extends true
  ? GetFloatNumberParts<T> extends [infer Whole extends number, unknown]
    ? IsNegative<Whole> extends true
      ? Whole
      : Increment<Whole>
    : never
  : T;
