import { expectType } from "tsd-lite";
import { Increment } from "../src/increment";

expectType<2>({} as Increment<1>);
expectType<10>({} as Increment<9>);
expectType<1000>({} as Increment<999>);
expectType<1900000000000000>({} as Increment<1899999999999999>);
expectType<-999>({} as Increment<-1000>);
expectType<-999999999>({} as Increment<-1000000000>);
expectType<0>({} as Increment<-1>);
