import { expectType } from "tsd-lite";
import { IsUnion } from "../src/is-union";

expectType<true>({} as IsUnion<"a" | "b">);
expectType<true>({} as IsUnion<1 | 2 | 3>);
expectType<true>({} as IsUnion<{ a: string } | { b: string }>);
expectType<true>({} as IsUnion<string | number>);
expectType<true>({} as IsUnion<boolean>);

expectType<false>({} as IsUnion<true>);
expectType<false>({} as IsUnion<false>);
expectType<false>({} as IsUnion<1>);
expectType<false>({} as IsUnion<string>);
expectType<false>({} as IsUnion<number>);
expectType<false>({} as IsUnion<[number | string]>);
expectType<false>({} as IsUnion<(number | string)[]>);
