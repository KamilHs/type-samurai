import { IsEmptyArray } from "./array";
import { IfExtends } from "./extends";
import { Pop } from "./pop";

/**
 * Returns result of logical multiplication of two params.
 * @example
* ```ts
* // true
* type Case1 = And<true, true>
* // false
* type Case2 = And<false, true>
* ```
*/
export type And<Condition1, Condition2> = IfExtends<
  Condition1,
  true,
  IfExtends<Condition2, true>
>;

/**
 * Returns result of logical multiplication of all elements inside the passed array type
 * @example
* ```ts
* // true
* type Case1 = And<[true, true, true]>
* // false
* type Case2 = And<[true, true, false]>
* ```
*/
export type AndArr<Conditions extends readonly unknown[]> =
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
      ? And<And<Condition1, Condition2>, AndArr<Rest2>>
      : false
    : false;
