import { expectType } from "tsd-lite";
import { Mod } from "../src/mod";

expectType<1>({} as Mod<1, 2>);
expectType<1>({} as Mod<1, 3>);
expectType<1>({} as Mod<5, 2>);
expectType<5>({} as Mod<5, 1024>);
expectType<0>({} as Mod<1024, 2>);
expectType<never>({} as Mod<number, 2>);
expectType<never>({} as Mod<2, number>);
