import { expectType } from "tsd-lite";
import { Not } from "../src/not";

expectType<false>({} as Not<true>);
expectType<true>({} as Not<false>);
