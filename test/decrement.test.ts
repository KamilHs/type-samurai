import { expectType } from "tsd-lite";
import { Decrement } from "../src/decrement";

expectType<0>({} as Decrement<1>);
expectType<9>({} as Decrement<10>);
expectType<100>({} as Decrement<101>);
expectType<101>({} as Decrement<102>);
expectType<102>({} as Decrement<103>);
expectType<103>({} as Decrement<104>);
expectType<104>({} as Decrement<105>);
expectType<105>({} as Decrement<106>);
expectType<106>({} as Decrement<107>);
expectType<107>({} as Decrement<108>);
expectType<108>({} as Decrement<109>);
expectType<999>({} as Decrement<1000>);
expectType<9999999999>({} as Decrement<10000000000>);
expectType<-1>({} as Decrement<0>);
expectType<-2>({} as Decrement<-1>);
expectType<-1000>({} as Decrement<-999>);
expectType<-100000000>({} as Decrement<-99999999>);