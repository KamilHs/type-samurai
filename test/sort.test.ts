import { Sort } from "../src/sort";
import { expectType } from "tsd-lite";

expectType<[]>({} as Sort<[]>);
expectType<readonly []>({} as Sort<readonly []>);
expectType<[1]>({} as Sort<[1]>);
expectType<readonly [1]>({} as Sort<readonly [1]>);
expectType<[1, 2]>({} as Sort<[2, 1]>);
expectType<readonly [1, 2]>({} as Sort<readonly [2, 1]>);
expectType<number[]>({} as Sort<number[]>);
expectType<readonly number[]>({} as Sort<readonly number[]>);

expectType<[1, 2, 3, 4]>({} as Sort<[3, 1, 4, 2]>);
expectType<readonly [1, 2, 3, 4]>({} as Sort<readonly [3, 1, 4, 2]>);
expectType<[-123, 0, 123, 124, 1567]>({} as Sort<[-123, 1567, 0, 123, 124]>);
