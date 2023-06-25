import { expectType } from "tsd-lite";
import { DigitsTuple } from "../src/digits-tuple";

expectType<[0]>({} as DigitsTuple<0>);
expectType<[1, 2, 3]>({} as DigitsTuple<123>);
expectType<[1, 2, 3]>({} as DigitsTuple<-123>);
expectType<number[]>({} as DigitsTuple<number>);
