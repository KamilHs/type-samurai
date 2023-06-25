import { expectType } from "tsd-lite";
import { StartsWith } from "../src/starts-with";

expectType<false>({} as StartsWith<string, "asd">);
expectType<false>({} as StartsWith<string, 1>);
expectType<false>({} as StartsWith<"bc", 1>);
expectType<false>({} as StartsWith<"23", 1>);
expectType<false>({} as StartsWith<"23", 234>);
expectType<true>({} as StartsWith<"23", 23>);
expectType<true>({} as StartsWith<"abc", "ab">);
expectType<true>({} as StartsWith<"abcd", "abcd">);
