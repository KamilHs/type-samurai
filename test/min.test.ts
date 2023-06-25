import { expectType } from "tsd-lite";
import { Min, MinArr } from "../src/min";

expectType<0>({} as Min<1, 0>);
expectType<-1>({} as Min<1, -1>);
expectType<-2>({} as Min<-2, -1>);
expectType<123456>({} as Min<123456, 1234567>);
expectType<-1234567>({} as Min<-123456, -1234567>);

expectType<1>({} as MinArr<[1, 2, 4, 10]>);
expectType<1>({} as MinArr<readonly [1, 2, 4, 10]>);
expectType<-10>({} as MinArr<[1, 2, -4, -10]>);
expectType<-10>({} as MinArr<readonly [1, 2, -4, -10]>);
expectType<never>({} as MinArr<number[]>);
expectType<never>({} as MinArr<readonly number[]>);
