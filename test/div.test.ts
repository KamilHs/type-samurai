import { expectType } from "tsd-lite";
import { Div } from "../src/div";

expectType<3>({} as Div<9, 3>);
expectType<2>({} as Div<10, 5>);
expectType<5>({} as Div<25, 5>);
expectType<0>({} as Div<0, 7>);
expectType<0>({} as Div<0, -10>);
expectType<never>({} as Div<1, 0>);

expectType<-4>({} as Div<-12, 3>);
expectType<-4>({} as Div<12, -3>);
expectType<3>({} as Div<-9, -3>);

expectType<3>({} as Div<10, 3>);
expectType<-3>({} as Div<-10, 3>);
expectType<1>({} as Div<7, 7>);
expectType<1>({} as Div<-7, -7>);
expectType<0>({} as Div<1, 2>);
expectType<0>({} as Div<-1, -2>);

expectType<-2914213>({} as Div<-132145004234, 45345>);
expectType<-12808943>({} as Div<-4000233021300, 312300>);
expectType<-13315335>({} as Div<-4000233021300, 300423>);
