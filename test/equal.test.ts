import { expectType } from "tsd-lite";
import { IfEqual, IfNotEqual, IsEqual, IsNotEqual } from "../src/equal";

expectType<true>({} as IsEqual<"1", "1">);
expectType<false>({} as IsEqual<"1", string>);
expectType<false>({} as IsEqual<"1", "2">);
expectType<false>({} as IsEqual<number, any>);
expectType<false>({} as IsEqual<number, never>);
expectType<false>({} as IsEqual<number, unknown>);
expectType<false>({} as IsEqual<any, unknown>);

expectType<false>({} as IsNotEqual<"1", "1">);
expectType<true>({} as IsNotEqual<"1", string>);
expectType<true>({} as IsNotEqual<"1", "2">);
expectType<true>({} as IsNotEqual<number, any>);
expectType<true>({} as IsNotEqual<number, never>);
expectType<true>({} as IsNotEqual<number, unknown>);
expectType<true>({} as IsNotEqual<any, unknown>);

expectType<true>({} as IfEqual<"1", "1">);
expectType<"true">({} as IfEqual<"1", "1", "true">);
expectType<false>({} as IfEqual<"1", "2">);
expectType<"false">({} as IfEqual<"1", "2", "true", "false">);

expectType<true>({} as IfNotEqual<"1", "2">);
expectType<"true">({} as IfNotEqual<"1", "2", "true">);
expectType<false>({} as IfNotEqual<"1", "1">);
expectType<"false">({} as IfNotEqual<"1", "1", "true", "false">);
