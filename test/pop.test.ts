import { expectType } from "tsd-lite";
import { Pop } from "../src/pop";

expectType<[1, 2]>({} as Pop<[1, 2, 3]>);
expectType<[1, 2]>({} as Pop<readonly [1, 2, 3]>);
expectType<[[1, 2], 3]>({} as Pop<[1, 2, 3], { includeRemoved: true }>);
expectType<[[1, 2], 3]>(
  {} as Pop<readonly [1, 2, 3], { includeRemoved: true }>
);
expectType<never>({} as Pop<[]>);
expectType<never>({} as Pop<number[]>);
expectType<never>({} as Pop<readonly number[]>);
