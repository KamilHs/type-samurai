import { expectType } from "tsd-lite";
import { FirstCharacter } from "../src/first-character";

expectType<"a">({} as FirstCharacter<"ab">);
expectType<"a">({} as FirstCharacter<"abdasdadasdadasdadada">);
expectType<"a">({} as FirstCharacter<"a">);
expectType<never>({} as FirstCharacter<"">);
expectType<["a", "b"]>({} as FirstCharacter<"ab", { includeRest: true }>);
expectType<["a", ""]>({} as FirstCharacter<"a", { includeRest: true }>);
expectType<never>({} as FirstCharacter<"", { includeRest: true }>);
