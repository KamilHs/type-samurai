import { Slice } from "../src/slice";
import { expectType } from "tsd-lite";

expectType<[1]>({} as Slice<[1, 2, 3], 0, 1>);
expectType<[1]>({} as Slice<readonly [1, 2, 3], 0, 1>);
expectType<[1, 2]>({} as Slice<[1, 2, 3], 0, 2>);
expectType<[1, 2]>({} as Slice<readonly [1, 2, 3], 0, 2>);
expectType<[3]>({} as Slice<[1, 2, 3], 2, 3>);
expectType<[3]>({} as Slice<readonly [1, 2, 3], 2, 3>);
expectType<[]>({} as Slice<[1, 2, 3], 2, 2>);
expectType<[]>({} as Slice<readonly [1, 2, 3], 2, 2>);
expectType<number[]>({} as Slice<number[], 2, 2>);
expectType<readonly number[]>({} as Slice<readonly number[], 2, 2>);

expectType<[3]>({} as Slice<[1, 2, 3], -1>);
expectType<[3]>({} as Slice<readonly [1, 2, 3], -1>);
expectType<[2, 3]>({} as Slice<[1, 2, 3], -2>);
expectType<[2, 3]>({} as Slice<readonly [1, 2, 3], -2>);
expectType<[1, 2, 3]>({} as Slice<[1, 2, 3], -3>);
expectType<readonly [1, 2, 3]>({} as Slice<readonly [1, 2, 3], -3>);
expectType<[1, 2, 3]>({} as Slice<[1, 2, 3], -4>);
expectType<readonly [1, 2, 3]>({} as Slice<readonly [1, 2, 3], -4>);
expectType<number[]>({} as Slice<number[], -4>);
expectType<readonly number[]>({} as Slice<readonly number[], -4>);
expectType<[]>({} as Slice<[1, 2, 3], -3, -3>);
expectType<[]>({} as Slice<[1, 2, 3], 0, -10>);
expectType<[1]>({} as Slice<[1, 2, 3], 0, -2>);
expectType<[1]>({} as Slice<readonly [1, 2, 3], 0, -2>);
expectType<[1, 2, 3]>({} as Slice<[1, 2, 3], 0, 5>);
