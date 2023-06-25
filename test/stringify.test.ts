import { expectType } from "tsd-lite";
import { Stringify } from "../src/stringify";

expectType<"100">({} as Stringify<100>);
expectType<"-100">({} as Stringify<-100>);
expectType<"abc">({} as Stringify<"abc">);
expectType<"true">({} as Stringify<true>);
expectType<"false">({} as Stringify<false>);
expectType<`${number}`>({} as Stringify<number>);
expectType<`${string}`>({} as Stringify<string>);
expectType<`${boolean}`>({} as Stringify<boolean>);
expectType<`${bigint}`>({} as Stringify<bigint>);
