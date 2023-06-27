import { IsEqual } from "./equal";
import { IsNever } from "./never";
import { Abs, IfPositive, IsNegative, IsPositive, ParseNumber } from "./number";
import { IfGreaterOrEqual, IsGreaterOrEqual } from "./greater-than";
import { Sum } from "./sum";
import { Or } from "./or";
import { Push } from "./push";
import { IsEmptyArray } from "./array";
import { And } from "./and";
import { If } from "./if";
import { IsLowerThan } from "./lower-than";

type SliceRemovedItemValue = Record<"__type-samurai_internal__", symbol>;

type FilterRemoved<
  T extends readonly unknown[],
  Result extends unknown[] = []
> = T extends readonly [infer First, ...infer Rest extends unknown[]]
  ? FilterRemoved<
      Rest,
      First extends SliceRemovedItemValue ? Result : Push<Result, First>
    >
  : Result;

type Slice<
  T extends readonly unknown[],
  Start extends number = 0,
  End extends number = T["length"]
> = (
  IsEmptyArray<T> extends true
    ? "self"
    : IsGreaterOrEqual<Start, T["length"]> extends true
    ? "empty"
    : IsNegative<End> extends true
    ? IsGreaterOrEqual<Abs<End>, T["length"]> extends true
      ? "empty"
      : [
          IfPositive<Start, Start, Sum<T["length"], Start>>,
          Sum<T["length"], End>
        ]
    : And<
        Or<IsEqual<Start, 0>, IsGreaterOrEqual<Abs<Start>, T["length"]>>,
        IsGreaterOrEqual<End, T["length"]>
      > extends true
    ? "self"
    : [IfPositive<Start, Start, Sum<T["length"], Start>>, End]
) extends infer Indexes
  ? Indexes extends "self"
    ? T
    : Indexes extends "empty"
    ? []
    : Indexes extends [
        infer NewStart extends number,
        infer NewEnd extends number
      ]
    ? IfGreaterOrEqual<NewStart, NewEnd> extends true
      ? []
      : FilterRemoved<{
          [K in keyof T]: ParseNumber<K> extends infer NumK extends number
            ? IsNever<NumK> extends true
              ? T[K]
              : If<
                  And<
                    IsGreaterOrEqual<NumK, NewStart>,
                    IsLowerThan<NumK, NewEnd>
                  >,
                  T[K],
                  SliceRemovedItemValue
                >
            : T[K];
        }>
    : T
  : T;
