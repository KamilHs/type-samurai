import { expectType } from "tsd-lite";
import { Shift } from "../src/shift";

expectType<never>({} as Shift<number[]>);
expectType<never>({} as Shift<string[]>);
expectType<never>({} as Shift<Record<string, unknown>[]>);
expectType<never>({} as Shift<[]>);
expectType<[2, 3]>({} as Shift<[1, 2, 3]>);
expectType<[2, 3]>({} as Shift<readonly [1, 2, 3]>);
expectType<[[2, 3], 1]>(
  {} as Shift<readonly [1, 2, 3], { includeRemoved: true }>
);
