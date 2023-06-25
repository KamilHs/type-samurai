import { expectType } from "tsd-lite";
import { Includes } from "../src/includes";

expectType<true>({} as Includes<[1, 2, 3], 2>);
expectType<true>({} as Includes<readonly [1, 2, 3], 2>);
expectType<false>({} as Includes<[1, 2, 3], 4>);
expectType<false>({} as Includes<readonly [1, 2, 3], 4>);
expectType<false>({} as Includes<number[], 4>);
expectType<false>({} as Includes<readonly number[], 4>);
