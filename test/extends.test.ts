import { expectType } from "tsd-lite";
import {
  Extends,
  ExtendsArr,
  IfExtends,
  IfNotExtends,
  NotExtends,
} from "../src/extends";

expectType<true>({} as Extends<1, number>);
expectType<false>({} as Extends<1, string>);

expectType<true>({} as NotExtends<1, string>);
expectType<false>({} as NotExtends<1, number>);

expectType<true>({} as IfExtends<1, number>);
expectType<"true">({} as IfExtends<1, number, "true">);
expectType<false>({} as IfExtends<1, string>);
expectType<"false">({} as IfExtends<1, string, "true", "false">);

expectType<true>({} as IfNotExtends<1, string>);
expectType<"true">({} as IfNotExtends<1, string, "true">);
expectType<false>({} as IfNotExtends<1, number>);
expectType<"false">({} as IfNotExtends<1, number, "true", "false">);

expectType<true>({} as ExtendsArr<[1, 2, 3], number>);
expectType<false>({} as ExtendsArr<["1", 2, 3], number>);
