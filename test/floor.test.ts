import { expectType } from "tsd-lite";
import { Floor } from "../src/floor";

expectType<1>({} as Floor<1>)
expectType<1>({} as Floor<1.3>)
expectType<1>({} as Floor<1.9>)
expectType<-1>({} as Floor<-1>)
expectType<-2>({} as Floor<-1.3>)
expectType<-2>({} as Floor<-1.9>)