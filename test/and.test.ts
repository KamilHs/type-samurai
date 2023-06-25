import { expectType } from "tsd-lite";
import { And, AndArr } from "../src/and";

expectType<true>({} as And<true, true>);
expectType<false>({} as And<true, false>);
expectType<false>({} as And<false, true>);
expectType<false>({} as And<false, false>);

expectType<true>({} as AndArr<[]>);
expectType<true>({} as AndArr<[true, true, true]>);
expectType<false>({} as AndArr<[false, true]>);
