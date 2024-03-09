import { IsPalindrome } from "../src/palindrome";
import { expectType } from "tsd-lite";


expectType<true>({} as IsPalindrome<"">);
expectType<true>({} as IsPalindrome<"a">);
expectType<true>({} as IsPalindrome<"aa">);
expectType<true>({} as IsPalindrome<"aaa">);
expectType<true>({} as IsPalindrome<"aba">);
expectType<true>({} as IsPalindrome<"abba">);
expectType<true>({} as IsPalindrome<"abcba">);
expectType<true>({} as IsPalindrome<"abccba">);
expectType<true>({} as IsPalindrome<"abcdcba">);
expectType<true>({} as IsPalindrome<"abcddcba">);
expectType<true>({} as IsPalindrome<"abcdeedcba">);
expectType<true>({} as IsPalindrome<"abcdefedcba">);
expectType<true>({} as IsPalindrome<"abcdefgfedcba">);
expectType<true>({} as IsPalindrome<"abcdefggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefgggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefggggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefggggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefgggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefggfedcba">);
expectType<true>({} as IsPalindrome<"abcdefgfedcba">);

expectType<false>({} as IsPalindrome<"ab">);
expectType<false>({} as IsPalindrome<"abc">);
expectType<false>({} as IsPalindrome<"abcd">);
expectType<false>({} as IsPalindrome<"abcde">);
expectType<false>({} as IsPalindrome<"abcdef">);
expectType<false>({} as IsPalindrome<"abcdefg">);
expectType<false>({} as IsPalindrome<"abcdefgh">);
expectType<false>({} as IsPalindrome<"abcdefghi">);
expectType<false>({} as IsPalindrome<"abcdefghij">);
expectType<false>({} as IsPalindrome<"abcdefghijk">);
expectType<false>({} as IsPalindrome<"abcdefghijkl">);
expectType<false>({} as IsPalindrome<"abcdefghijklm">);
expectType<false>({} as IsPalindrome<"abcdefagbfedcba">);