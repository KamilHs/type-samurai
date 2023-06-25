import { expectType } from "tsd-lite";
import { Unshift } from "../src/unshift";

expectType<[1, ...number[]]>({} as Unshift<number[], 1>);
expectType<[1, ...number[]]>({} as Unshift<readonly number[], 1>);
expectType<[1, ...string[]]>({} as Unshift<string[], 1>);
expectType<[1, ...string[]]>({} as Unshift<readonly string[], 1>);
expectType<[number, ...string[]]>({} as Unshift<readonly string[], number>);
expectType<[number, 1, 2, 3]>({} as Unshift<[1, 2, 3], number>);
expectType<[4, 1, 2, 3]>({} as Unshift<[1, 2, 3], 4>);
