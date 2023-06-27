import { And } from "./and";
import { IsGreaterOrEqual } from "./greater-than";
import { IsNever } from "./never";
import { Not } from "./not";
import { IsInteger, ParseNumber } from "./number";

export type IsArrayIndex<T> = T extends number
  ? true
  : T extends string
  ? ParseNumber<T> extends infer NumT extends number
    ? Not<IsNever<NumT>> extends true
      ? And<IsInteger<NumT>, IsGreaterOrEqual<NumT, 0>>
      : false
    : false
  : never;
