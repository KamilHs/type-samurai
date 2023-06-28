import { IsEmptyArray } from "./array";
import { Push } from "./push";

type _Reverse<
  T extends readonly unknown[],
  Result extends readonly unknown[] = []
> = IsEmptyArray<T> extends true
  ? Result
  : T extends [...infer Rest extends readonly unknown[], infer First]
  ? _Reverse<Rest, Push<Result, First>>
  : Result;

export type Reverse<T extends readonly unknown[]> = _Reverse<T>;
