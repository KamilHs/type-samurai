import { expectType } from "tsd-lite";
import { FirstDigit } from "../src/first-digit";

expectType<1>({} as FirstDigit<1>);
expectType<1>({} as FirstDigit<-1>);
expectType<1>({} as FirstDigit<1123>);
expectType<4>({} as FirstDigit<4123>);
expectType<1>({} as FirstDigit<-1123>);
expectType<never>({} as FirstDigit<number>);
