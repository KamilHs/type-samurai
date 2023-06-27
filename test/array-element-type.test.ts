import { expectType } from "tsd-lite";
import { ArrayElementType } from "../src/array-element-type";

expectType<string>({} as ArrayElementType<string[]>);
expectType<string>({} as ArrayElementType<readonly string[]>);
expectType<1 | 2 | 3>({} as ArrayElementType<[1, 2, 3]>);
expectType<1 | 2 | 3>({} as ArrayElementType<readonly [1, 2, 3]>);
