import { expectType } from "tsd-lite";
import { IfLowerThan, IsLowerThan } from "../src/lower-than";

expectType<true>({} as IsLowerThan<0, 1>);
expectType<true>({} as IsLowerThan<-1, 1>);
expectType<true>({} as IsLowerThan<-2, -1>);
expectType<true>({} as IsLowerThan<-20000000000, -19999999>);
expectType<false>({} as IsLowerThan<0, 0>);
expectType<false>({} as IsLowerThan<1, 0>);
expectType<false>({} as IsLowerThan<-1, -2>);
expectType<false>({} as IsLowerThan<1000, -2>);
expectType<false>({} as IsLowerThan<10000000000000, 1000000000>);

expectType<true>({} as IfLowerThan<0, 1>);
expectType<"true">({} as IfLowerThan<0, 1, "true">);
expectType<false>({} as IfLowerThan<0, 0>);
expectType<"false">({} as IfLowerThan<0, 0, "true", "false">);
