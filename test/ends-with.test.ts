import { expectType } from "tsd-lite";
import { EndsWith } from "../src/ends-with";


expectType<true>({} as EndsWith<'abc', 'c'>)
expectType<false>({} as EndsWith<'', 'c'>)
expectType<false>({} as EndsWith<'abd', 'c'>)