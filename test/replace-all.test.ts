import { expectType } from "tsd-lite";
import { ReplaceAll } from "../src/replace-all";

expectType<"">({} as ReplaceAll<"a", "a", "">);
expectType<"">({} as ReplaceAll<"aaaa", "a", "">);
expectType<"b">({} as ReplaceAll<"a", "a", "b">);
expectType<"a">({} as ReplaceAll<"a", "b", "c">);
expectType<"bbbb">({} as ReplaceAll<"aaaa", "a", "b">);
expectType<"bb">({} as ReplaceAll<"aaaa", "aa", "b">);
expectType<string>({} as ReplaceAll<string, "aa", "b">);
