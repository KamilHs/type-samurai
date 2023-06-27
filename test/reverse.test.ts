import { Reverse } from "../src/reverse";
import { expectType } from "tsd-lite";

expectType<[1, 2]>({} as Reverse<[2, 1]>);
expectType<readonly [1, 2]>({} as Reverse<readonly [2, 1]>);
expectType<number[]>({} as Reverse<number[]>);
expectType<readonly number[]>({} as Reverse<readonly number[]>);
expectType<["c", 1, "d", 4]>({} as Reverse<[4, "d", 1, "c"]>);
expectType<readonly ["c", 1, "d", 4]>({} as Reverse<readonly [4, "d", 1, "c"]>);
