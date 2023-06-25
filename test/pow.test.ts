import { expectType } from "tsd-lite";
import { Pow } from "../src/pow";

expectType<1>({} as Pow<0, 0>);
expectType<1>({} as Pow<1, 10>);
expectType<1024>({} as Pow<2, 10>);
expectType<-27>({} as Pow<-3, 3>);
expectType<9>({} as Pow<-3, 2>);
expectType<18014398509481984>({} as Pow<2, 54>);
