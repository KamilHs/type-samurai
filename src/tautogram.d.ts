import { IsStringLiteral } from "./is-string-literal";
import { IsEmptyString } from "./string";
import { IsLetter } from "./is-letter";
import { IsNever } from "./never";
import { IsEqual } from "./equal";

type _IsTautogram<
  T extends string,
  FirstLetter extends string = never,
  IsInWord extends boolean = false
> = T extends `${infer First extends string}${infer Rest extends string}`
  ? IsNever<FirstLetter> extends true
    ? IsLetter<First> extends true
      ? _IsTautogram<Rest, First, true>
      : _IsTautogram<Rest, never, true>
    : IsLetter<First> extends true
    ? IsInWord extends true
      ? _IsTautogram<Rest, FirstLetter, true>
      : IsEqual<Lowercase<First>, Lowercase<FirstLetter>> extends true
      ? _IsTautogram<Rest, FirstLetter, true>
      : false
    : _IsTautogram<Rest, FirstLetter, false>
  : true;

export type IsTautogram<T extends string> = IsEmptyString<T> extends true
  ? true
  : IsStringLiteral<T> extends true
  ? _IsTautogram<T>
  : false;
