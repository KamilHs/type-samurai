import { IsEmptyString } from "./string";
import { IsStringLiteral } from "./is-string-literal";
import { WordSeparator } from "./common";
import { Split } from "./split";
import { Shift } from "./shift";

type _CamelCase<
  T extends readonly string[],
  Result extends string = ""
> = T extends readonly [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? _CamelCase<Rest, `${Result}${Capitalize<First>}`>
  : Result;

export type CamelCase<T extends string> = IsStringLiteral<T> extends true
  ? IsEmptyString<T> extends string
    ? T
    : Uncapitalize<_CamelCase<Split<T, WordSeparator>>>
  : T;
