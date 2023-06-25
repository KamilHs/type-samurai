import { expectType } from "tsd-lite";
import { Dot } from "../src/dot";

expectType<"a.b">({} as Dot<"a", "b">);
expectType<"a">({} as Dot<"a", "">);
