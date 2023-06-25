import { expectType } from "tsd-lite";
import {
  ReturnItselfIfExtends,
  ReturnItselfIfNotExtends,
} from "../src/return-itself-if-extends";


expectType<1>({} as ReturnItselfIfExtends<1, number, '1'>)
expectType<'1'>({} as ReturnItselfIfExtends<1, string, '1'>)

expectType<1>({} as ReturnItselfIfNotExtends<1, string, '1'>)
expectType<'1'>({} as ReturnItselfIfNotExtends<1, number, '1'>)