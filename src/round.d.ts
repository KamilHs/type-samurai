import { GetFloatNumberParts } from "./get-float-number-parts";
import { IsFloat } from "./number";
import { FirstDigit } from "./fIrst-digit";
import { IsGreaterThan } from "./greater-than";
import { Increment } from "./increment";

type Round<T extends number> = IsFloat<T> extends true
  ? GetFloatNumberParts<T> extends [
      infer Whole extends number,
      infer Fraction extends number
    ]
    ? IsGreaterThan<FirstDigit<Fraction>, 4> extends true
      ? Increment<Whole>
      : Whole
    : never
  : T;
