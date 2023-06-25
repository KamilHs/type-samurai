import { expectType } from "tsd-lite";
import { IsAny, AnifyProperties, IfAny } from "../src/any";

expectType<true>({} as IsAny<any>);
expectType<false>({} as IsAny<false>);
expectType<false>({} as IsAny<unknown>);
expectType<false>({} as IsAny<{}>);

expectType<true>({} as IfAny<any>);
expectType<false>({} as IfAny<{}>);
expectType<"string">({} as IfAny<any, "string">);
expectType<"another-string">({} as IfAny<{}, "string", "another-string">);

expectType<{}>({} as AnifyProperties<{}>);
expectType<{
  a: any;
  b: any;
}>({} as AnifyProperties<{ a: string; b: Record<string, unknown> }>);
expectType<{
  a?: any;
  b?: any;
}>(
  {} as AnifyProperties<
    { a: string; b: Record<string, unknown> },
    { makeOptional: true }
  >
);
