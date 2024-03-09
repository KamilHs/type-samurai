import { Or, OrArr } from "../src/or";
import { expectType } from "tsd-lite";

expectType<true>({} as Or<true, false>);
expectType<true>({} as Or<false, true>);
expectType<true>({} as Or<true, true>);
expectType<false>({} as Or<false, false>);

expectType<true>({} as OrArr<[true, false]>);
expectType<true>({} as OrArr<[false, true]>);
expectType<true>({} as OrArr<[true, true]>);
expectType<false>({} as OrArr<[false, false]>);
expectType<false>({} as OrArr<[]>);
expectType<true>({} as OrArr<[true]>);
expectType<false>({} as OrArr<[false]>);
expectType<true>({} as OrArr<[true, false, true]>);
expectType<true>({} as OrArr<[false, true, true]>);
expectType<true>({} as OrArr<[true, true, true]>);
expectType<false>({} as OrArr<[false, false, false]>);
expectType<true>({} as OrArr<[true, false, true, false, true]>);
expectType<true>({} as OrArr<[false, true, true, false, true]>);
expectType<true>({} as OrArr<[true, true, true, false, true]>);
expectType<false>({} as OrArr<[false, false, false, false, false]>);
