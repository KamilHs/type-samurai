import { If } from "./if";

/**
 * Returns a boolean whether the passed type is `any`
 * @example
 * ```ts
 * // true
 * type Result = IsAny<any>
 * ```
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 *  Returns the second argument if the first argument is `any` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // string
 * type Result = IfAny<any, string, number>
 * ```
 */
export type IfAny<T, IfTrue = true, IfFalse = false> = If<
  IsAny<T>,
  IfTrue,
  IfFalse
>;

export type AnifyPropertiesOptions = {
  makeOptional: boolean;
};

/**
 * Turns all properties of an object to type `any`.
 * If `makeOptional` option is `true`, makes all properties optional
 * @example
 * ```ts
 * // {a:any; b:any}
 * type Result = AnifyProperties<{a: string; b: string}>
 * ```
 */
export type AnifyProperties<
  T extends object,
  Options extends AnifyPropertiesOptions = { makeOptional: false }
> = {
  [K in keyof T]: any;
} extends infer Result
  ? If<Options["makeOptional"], Partial<Result>, Result>
  : never;
