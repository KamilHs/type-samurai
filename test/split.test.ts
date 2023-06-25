import { expectType } from "tsd-lite";
import { Split } from "../src/split";

expectType<string[]>({} as Split<string, "">);
expectType<string[]>({} as Split<string, ",">);
expectType<["a", "b", "c"]>({} as Split<"a,b,c", ",">);
expectType<["a", "c"]>({} as Split<"a,b,c", ",b,">);
expectType<["a", "b", "c"]>({} as Split<"a1b1c", 1>);
