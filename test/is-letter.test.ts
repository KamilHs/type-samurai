import { expectType } from "tsd-lite";
import { IsLetter } from "../src/is-letter";

expectType<true>({} as IsLetter<'a'>)
expectType<true>({} as IsLetter<'A'>)
expectType<true>({} as IsLetter<'р'>)
expectType<true>({} as IsLetter<'Р'>)
expectType<false>({} as IsLetter<'1'>)
expectType<false>({} as IsLetter<'@'>)
expectType<false>({} as IsLetter<'9'>)
expectType<false>({} as IsLetter<'±'>)
expectType<false>({} as IsLetter<'か'>)