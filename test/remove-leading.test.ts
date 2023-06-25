import { expectType } from "tsd-lite";
import { RemoveLeading } from "../src/remove-leading";

expectType<"bc">({} as RemoveLeading<"abc", "a">);
expectType<"c">({} as RemoveLeading<"abc", "a" | "b">);
expectType<"">({} as RemoveLeading<"abc", "a" | "b" | "c">);
expectType<"abc">({} as RemoveLeading<"abc", "d">);
expectType<"">({} as RemoveLeading<"abc", "abc">);
expectType<"">({} as RemoveLeading<"abab", "ab">);
expectType<"" | "c">({} as RemoveLeading<"abc", "ab" | "abc">);
