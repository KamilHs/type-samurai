import {Trunc} from "../src/trunc";
import {expectType} from "tsd-lite";

expectType<1>({} as Trunc<1>)
expectType<1>({} as Trunc<1.3>)
expectType<1>({} as Trunc<1.9>)
expectType<-1>({} as Trunc<-1>)
expectType<-1>({} as Trunc<-1.3>)
expectType<-1>({} as Trunc<-1.9>)
expectType<0>({} as Trunc<0>)
expectType<0>({} as Trunc<0.312321312>)
expectType<number>({} as Trunc<number>)
