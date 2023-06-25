import { expectType } from "tsd-lite";
import { Mult } from "../src/mult";

expectType<0>({} as Mult<0, 0>);
expectType<0>({} as Mult<0, 1>);
expectType<0>({} as Mult<10, 0>);
expectType<0>({} as Mult<100000, 0>);
expectType<0>({} as Mult<0, 100000>);
expectType<10>({} as Mult<1, 10>);
expectType<100>({} as Mult<1, 100>);
expectType<100000000>({} as Mult<1, 100000000>);
expectType<2000000000>({} as Mult<20, 100000000>);
expectType<224>({} as Mult<112, 2>);
expectType<-224>({} as Mult<112, -2>);
expectType<-224>({} as Mult<-112, 2>);
expectType<224>({} as Mult<-112, -2>);
expectType<144>({} as Mult<12, 12>);
expectType<9007199254740991>({} as Mult<9007199254740991, 1>);
expectType<3018738600756>({} as Mult<2424234, 1245234>);
