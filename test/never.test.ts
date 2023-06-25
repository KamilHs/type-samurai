import { expectType } from "tsd-lite";
import { IsNever, IfNever, NeverifyProperties } from "../src/never";

expectType<false>({} as IsNever<any>);
expectType<false>({} as IsNever<false>);
expectType<true>({} as IsNever<never>);

expectType<true>({} as IfNever<never>);
expectType<false>({} as IfNever<"">);
expectType<"string">({} as IfNever<never, "string">);
expectType<"another-string">({} as IfNever<"", "string", "another-string">);

expectType<{}>({} as NeverifyProperties<{}>);
expectType<{
  a: never;
  b: never;
}>({} as NeverifyProperties<{ a: string; b: Record<string, never> }>);
expectType<{
  a?: never;
  b?: never;
}>(
  {} as NeverifyProperties<
    { a: string; b: Record<string, string> },
    { makeOptional: true }
  >
);
