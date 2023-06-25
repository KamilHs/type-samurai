import { And } from "./and";
import { IsEqual } from "./equal";
import { IsGreaterThan } from "./greater-than";
import { IsLowerThan } from "./lower-than";

export type IsBetweenOptions = {
  minIncluded?: boolean;
  maxIncluded?: boolean;
};

/**
 * Returns a boolean whether the first integer argument is between the second and the third integer argument
 * By default borders of the interval are included, which can be modified by the second argument.
 * `minIncluded`, `maxIncluded` options show whether to include the lower and the higher borders respectively. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
 * @example
 * ```ts
 * // true
 * type Case1 = IsBetween<1, 1, 10>
 * // false
 * type Case2 = IsBetween<1, 1, 10, {minIncluded: false}>
 * // false
 * type Case3 = IsBetween<10, 1, 10, {maxIncluded: false}>
 * ```
 */
export type IsBetween<
  Num extends number,
  Min extends number,
  Max extends number,
  Options extends IsBetweenOptions = {
    minIncluded: true;
    maxIncluded: true;
  }
> = IsEqual<Num, Min> extends true
  ? Options["minIncluded"]
  : IsEqual<Num, Max> extends true
  ? Options["maxIncluded"]
  : And<IsGreaterThan<Num, Min>, IsLowerThan<Num, Max>>;
