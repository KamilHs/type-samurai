import { expectType } from "tsd-lite";
import { IsGreaterThan, IfGreaterThan } from "../src/greater-than";

expectType<false>({} as IsGreaterThan<0, 1>);
expectType<false>({} as IsGreaterThan<-1, 1>);
expectType<false>({} as IsGreaterThan<-2, -1>);
expectType<false>({} as IsGreaterThan<-20000000000, -19999999>);
expectType<false>({} as IsGreaterThan<0, 0>);
expectType<true>({} as IsGreaterThan<1, 0>);
expectType<true>({} as IsGreaterThan<-1, -2>);
expectType<true>({} as IsGreaterThan<1000, -2>);
expectType<true>({} as IsGreaterThan<10000000000000, 1000000000>);

expectType<true>({} as IfGreaterThan<1, 0>);
expectType<"true">({} as IfGreaterThan<1, 0, "true">);
expectType<false>({} as IfGreaterThan<0, 0>);
expectType<"false">({} as IfGreaterThan<0, 0, "true", "false">);
