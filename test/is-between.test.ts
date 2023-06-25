import { expectType } from "tsd-lite";
import { IsBetween } from "../src/is-between";

expectType<true>({} as IsBetween<1, 1, 10>);
expectType<true>({} as IsBetween<10, 1, 10>);
expectType<true>({} as IsBetween<2, 1, 10>);
expectType<true>({} as IsBetween<1000010000, 10000, 100001000010000>);
expectType<false>({} as IsBetween<1, 1, 10, { minIncluded: false }>);
expectType<false>({} as IsBetween<10, 1, 10, { maxIncluded: false }>);
expectType<true>({} as IsBetween<-1000010000, -100001000010000, -10000>);
