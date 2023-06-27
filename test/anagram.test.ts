import { expectType } from "tsd-lite";
import { AreAnagrams } from "../src/anagram";

expectType<true>({} as AreAnagrams<"", "">);
expectType<true>({} as AreAnagrams<"a", "a">);
expectType<true>({} as AreAnagrams<"ab", "ba">);
expectType<true>({} as AreAnagrams<"qwerty", "ytrewq">);
expectType<false>({} as AreAnagrams<"qwerty", "ytrewa">);
expectType<false>({} as AreAnagrams<"qwerty", "ytrewqsadasd">);
expectType<false>({} as AreAnagrams<string, "ytrewq">);
expectType<false>({} as AreAnagrams<string, string>);
