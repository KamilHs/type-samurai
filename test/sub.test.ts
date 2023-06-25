import { expectType } from "tsd-lite";
import { Sub } from "../src/sub";

expectType<1>({} as Sub<10, 9>);
expectType<8>({} as Sub<9, 1>);
expectType<71>({} as Sub<100, 29>);
expectType<1>({} as Sub<1000, 999>);
expectType<1000>({} as Sub<1000, 0>);
expectType<999>({} as Sub<1000, 1>);
expectType<1188>({} as Sub<1200, 12>);
expectType<111111111111000>({} as Sub<111111111111111, 111>);
expectType<0>({} as Sub<111, 111>);
expectType<2>({} as Sub<100000, 99998>);
expectType<10>({} as Sub<9, -1>);
expectType<100>({} as Sub<99, -1>);
expectType<-10>({} as Sub<-9, 1>);
expectType<-100>({} as Sub<-99, 1>);
expectType<-100>({} as Sub<0, 100>);
expectType<-99>({} as Sub<1, 100>);
expectType<-99999999>({} as Sub<1, 100000000>);
expectType<-1000000000>({} as Sub<11111, 1000011111>);
expectType<-96>({} as Sub<-113, -17>);
expectType<96>({} as Sub<-17, -113>);
expectType<-9600000>({} as Sub<-11300000, -1700000>);
expectType<9600000>({} as Sub<-1700000, -11300000>);