import { expectType } from "tsd-lite";
import { IsTuple } from "../src/is-tuple";

expectType<true>({} as IsTuple<[1, 2, 3]>);
expectType<true>({} as IsTuple<readonly [1, 2, 3]>);
expectType<true>({} as IsTuple<[]>);
expectType<true>({} as IsTuple<readonly []>);
expectType<true>({} as IsTuple<[Record<string, number>]>);
expectType<true>({} as IsTuple<["1", 23, "das", false]>);
expectType<false>({} as IsTuple<readonly string[]>);
expectType<false>({} as IsTuple<readonly number[]>);
expectType<false>({} as IsTuple<Record<string, number>[]>);
