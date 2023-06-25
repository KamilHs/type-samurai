import { expectType } from "tsd-lite";
import { IfNot } from "../src/if-not";

expectType<false>({} as IfNot<true>);
expectType<true>({} as IfNot<false>);
expectType<"true">({} as IfNot<false, "true">);
expectType<"false">({} as IfNot<true, "true", "false">);
