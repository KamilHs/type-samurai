import { expectType } from "tsd-lite";
import { Join } from "../src/join";

expectType<"123">({} as Join<[1, 2, 3], "">);
expectType<"1,2,3">({} as Join<[1, 2, "3"], ",">);
expectType<"11213">({} as Join<[1, 2, "3"], 1>);
expectType<"1,2,3">({} as Join<readonly [1, 2, "3"], ",">);
expectType<never>({} as Join<string[], "">);
expectType<never>({} as Join<number[], "">);
