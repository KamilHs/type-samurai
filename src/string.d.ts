import { If } from "./if";
import { IfNot } from "./if-not";
import { IsNever } from "./never";

export type EmptyString<T extends string> = "" extends T
  ? string extends T
    ? never
    : T
  : never;

export type NonEmptyString<T extends string> = string extends T
  ? string
  : If<IsNever<EmptyString<T>>, T, never>;

export type IsEmptyString<T extends string> = IfNot<IsNever<EmptyString<T>>>;

export type IsNonEmptyString<T extends string> = IfNot<
  IsNever<NonEmptyString<T>>
>;

export type IfEmptyString<
  T extends string,
  IfTrue = true,
  IfFalse = false
> = IfNot<IsNever<EmptyString<T>>, IfTrue, IfFalse>;

export type IfNonEmptyString<
  T extends string,
  IfTrue = true,
  IfFalse = false
> = IfNot<IsNever<NonEmptyString<T>>, IfTrue, IfFalse>;
