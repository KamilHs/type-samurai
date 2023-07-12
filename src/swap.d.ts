import { IsEqual } from "./equal";
import { ParseNumber } from "./number";
import { IsBetween } from "./is-between";
import { And } from "./and";

export type Swap<
  T extends readonly unknown[],
  FromIndex extends number,
  ToIndex extends number
> = And<
  IsBetween<FromIndex, 0, T["length"]>,
  IsBetween<ToIndex, 0, T["length"]>
> extends true
  ? T[FromIndex] extends infer From
    ? T[ToIndex] extends infer To
      ? {
          [K in keyof T]: ParseNumber<K> extends infer NumK
            ? IsEqual<FromIndex, NumK> extends true
              ? To
              : IsEqual<ToIndex, NumK> extends true
              ? From
              : T[K]
            : never;
        }
      : never
    : never
  : never;
