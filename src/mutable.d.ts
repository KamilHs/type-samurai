import { And } from "./and";
import { Extends } from "./extends";

export type MutableOptions = {
  recursive: boolean;
};

export type Mutable<
  T extends object,
  Options extends MutableOptions = { recursive: false }
> = {
  -readonly [K in keyof T]: And<
    Options["recursive"],
    Extends<T[K], object>
  > extends true
    ? Mutable<T[K]>
    : T[K];
};

export type MutableOnly<T extends object, K extends keyof T> = Pick<T, K> & {
  -readonly [P in Exclude<keyof T, K>]: T[P];
};

export type MutableExcept<T extends object, K extends keyof T> = Omit<T, K> & {
  -readonly [P in K]: T[P];
};
