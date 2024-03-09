import { expectType } from "tsd-lite";
import { IsArrayIndex } from "../src/is-array-index";

expectType<true>({} as IsArrayIndex<0>);
expectType<true>({} as IsArrayIndex<1>);
expectType<true>({} as IsArrayIndex<2>);
expectType<true>({} as IsArrayIndex<4234234>);
expectType<false>({} as IsArrayIndex<123.4>);
expectType<false>({} as IsArrayIndex<-123.4>);
expectType<false>({} as IsArrayIndex<-1>);
expectType<false>({} as IsArrayIndex<-2>);
expectType<false>({} as IsArrayIndex<number>);
expectType<false>({} as IsArrayIndex<string>);
expectType<false>({} as IsArrayIndex<'length'>);

expectType<true>({} as IsArrayIndex<"0">);
expectType<true>({} as IsArrayIndex<"1">);
expectType<true>({} as IsArrayIndex<"2">);
expectType<true>({} as IsArrayIndex<"4234234">);
expectType<false>({} as IsArrayIndex<"123.4">);
expectType<false>({} as IsArrayIndex<"-123.4">);
expectType<false>({} as IsArrayIndex<"-1">);
expectType<false>({} as IsArrayIndex<"-2">);
