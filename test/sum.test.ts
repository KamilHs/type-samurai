import { expectType } from "tsd-lite";
import { Sum, SumArr } from "../src/sum";

expectType<10>({} as Sum<1, 9>);
expectType<10>({} as Sum<9, 1>);
expectType<999>({} as Sum<999, 0>);
expectType<999>({} as Sum<0, 999>);
expectType<1000>({} as Sum<1, 999>);
expectType<1000>({} as Sum<999, 1>);
expectType<1200>({} as Sum<1188, 12>);
expectType<1200>({} as Sum<12, 1188>);
expectType<2000>({} as Sum<1988, 12>);
expectType<2000>({} as Sum<12, 1988>);
expectType<111111111111122>({} as Sum<111111111111111, 11>);
expectType<111111111111122>({} as Sum<11, 111111111111111>);

expectType<-2>({} as Sum<-1, -1>);
expectType<-10000>({} as Sum<-9999, -1>);

expectType<10>({} as SumArr<[1, 2, 3, 4]>);
expectType<2>({} as SumArr<[1, 2, 3, -4]>);
expectType<-34>({} as SumArr<[1, 2, 3, -40]>);
expectType<-46>({} as SumArr<[-1, -2, -3, -40]>);
