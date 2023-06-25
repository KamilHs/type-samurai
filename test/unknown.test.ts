import { expectType } from "tsd-lite";
import { IfUnknown, IsUnknown, UnknownifyProperties } from "../src/unknown";

expectType<false>({} as IsUnknown<any>);
expectType<false>({} as IsUnknown<false>);
expectType<true>({} as IsUnknown<unknown>);

expectType<true>({} as IfUnknown<unknown>);
expectType<false>({} as IfUnknown<"">);
expectType<"string">({} as IfUnknown<unknown, "string">);
expectType<"another-string">({} as IfUnknown<"", "string", "another-string">);

expectType<{}>({} as UnknownifyProperties<{}>);
expectType<{
  a: unknown;
  b: unknown;
}>({} as UnknownifyProperties<{ a: string; b: Record<string, unknown> }>);
expectType<{
  a?: unknown;
  b?: unknown;
}>(
  {} as UnknownifyProperties<
    { a: string; b: Record<string, unknown> },
    { makeOptional: true }
  >
);
