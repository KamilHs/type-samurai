import { expectType } from "tsd-lite";
import { LastCharacter } from "../src/last-character";

expectType<string>({} as LastCharacter<string>);
expectType<"">({} as LastCharacter<"">);
expectType<"a">({} as LastCharacter<"a">);
expectType<"b">({} as LastCharacter<"ab">);
expectType<"z">({} as LastCharacter<"ababababababababababababababababababz">);

expectType<["b", "a"]>({} as LastCharacter<"ab", {includeRest: true}>);
expectType<["g", "abcdef"]>({} as LastCharacter<"abcdefg", {includeRest: true}>);
