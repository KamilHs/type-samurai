import { expectType } from "tsd-lite";
import { If } from "../src/if";

expectType<true>({} as If<true>);
expectType<false>({} as If<false>);
expectType<"true">({} as If<true, "true">);
expectType<"false">({} as If<false, "true", "false">);
