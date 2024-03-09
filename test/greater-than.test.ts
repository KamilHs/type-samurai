import { expectType } from "tsd-lite";
import {
  IsGreaterThan,
  IfGreaterThan,
  IsGreaterOrEqual,
  IfGreaterOrEqual,
} from "../src/greater-than";

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

expectType<false>({} as IsGreaterOrEqual<0, 1>);
expectType<false>({} as IsGreaterOrEqual<-1, 1>);
expectType<true>({} as IsGreaterOrEqual<1, 0>);
expectType<true>({} as IsGreaterOrEqual<-1, -2>);
expectType<true>({} as IsGreaterOrEqual<1, 1>);
expectType<true>({} as IsGreaterOrEqual<-1, -1>);


expectType<true>({} as IfGreaterOrEqual<1, 0>);
expectType<"true">({} as IfGreaterOrEqual<1, 1, "true">);
expectType<false>({} as IfGreaterOrEqual<-1, 0>);
expectType<"false">({} as IfGreaterOrEqual<-1, 0, "true", "false">);
