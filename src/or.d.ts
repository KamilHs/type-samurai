import { IsEmptyArray } from "./array";
import { IfExtends } from "./extends";
import { Pop } from "./pop";

export type Or<Condition1, Condition2> = IfExtends<
  Condition1,
  true,
  true,
  IfExtends<Condition2, true>
>;

export type OrArr<Conditions extends readonly unknown[]> =
  IsEmptyArray<Conditions> extends true
    ? true
    : Pop<
        Conditions,
        {
          includeRemoved: true;
        }
      > extends readonly [
        infer Rest extends readonly unknown[],
        infer Condition1
      ]
    ? IsEmptyArray<Rest> extends true
      ? IfExtends<Condition1, true>
      : Pop<
          Rest,
          {
            includeRemoved: true;
          }
        > extends readonly [
          infer Rest2 extends readonly unknown[],
          infer Condition2
        ]
      ? Or<Condition1, Condition2> extends true
        ? true
        : OrArr<Rest2>
      : false
    : false;
