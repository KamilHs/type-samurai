import { expectType } from "tsd-lite";
import { Ceil } from "../src/ceil";

expectType<0>({} as Ceil<0>);
expectType<1>({} as Ceil<1>);
expectType<-1>({} as Ceil<-1>);
expectType<2>({} as Ceil<1.4>);
expectType<2>({} as Ceil<1.9>);
expectType<2>({} as Ceil<1.1>);
expectType<2>({} as Ceil<1.05>);
expectType<-1>({} as Ceil<-1.4>);
expectType<-1>({} as Ceil<-1.9>);
expectType<-1>({} as Ceil<-1.1>);
expectType<-1>({} as Ceil<-1.05>);
expectType<-1>({} as Ceil<-1.05>);
expectType<number>({} as Ceil<number>);
