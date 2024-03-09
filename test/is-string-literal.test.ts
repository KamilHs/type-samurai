import { expectType } from "tsd-lite";
import { IsStringLiteral } from "../src/is-string-literal";

expectType<true>({} as IsStringLiteral<"a">);
expectType<true>({} as IsStringLiteral<"a" | "b" | "c">);
expectType<false>({} as IsStringLiteral<string>);
expectType<false>({} as IsStringLiteral<"a" | (Record<never, never> & string)>);
