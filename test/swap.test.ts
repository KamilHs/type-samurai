import { Swap } from "../src/swap";
import { expectType } from "tsd-lite";

expectType<[1, 2]>({} as Swap<[2, 1], 0, 1>);
expectType<readonly [1, 2]>({} as Swap<readonly [2, 1], 0, 1>);
expectType<[1, 2, 3]>({} as Swap<[2, 1, 3], 0, 1>);
expectType<readonly [1, 2, 3]>({} as Swap<readonly [2, 1, 3], 0, 1>);
expectType<[1, 2, 3]>({} as Swap<[2, 1, 3], 1, 0>);
expectType<readonly [1, 2, 3]>({} as Swap<readonly [2, 1, 3], 1, 0>);
expectType<number[]>({} as Swap<number[], 1, 0>);
expectType<readonly number[]>({} as Swap<readonly number[], 1, 0>);

expectType<[1, 2, 3]>({} as Swap<[1, 2, 3], 0, 0>);
expectType<readonly [1, 2, 3]>({} as Swap<readonly [1, 2, 3], 0, 0>);
expectType<never>({} as Swap<[1, 2, 3], -1, 1>);
expectType<never>({} as Swap<[1, 2, 3], 1, -1>);
