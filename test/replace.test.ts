import { expectType } from "tsd-lite";
import { Replace } from "../src/replace";

expectType<"">({} as Replace<"a", "a", "">);
expectType<"aaa">({} as Replace<"aaaa", "a", "">);
expectType<"b">({} as Replace<"a", "a", "b">);
expectType<"a">({} as Replace<"a", "b", "c">);
expectType<"baaa">({} as Replace<"aaaa", "a", "b">);
expectType<"baa">({} as Replace<"aaaa", "aa", "b">);
expectType<string>({} as Replace<string, "aa", "b">);
