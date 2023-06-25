import { expectType } from "tsd-lite";
import { Max, MaxArr } from "../src/max";

expectType<1>({} as Max<1, 0>);
expectType<1>({} as Max<1, -1>);
expectType<-1>({} as Max<-2, -1>);
expectType<1234567>({} as Max<123456, 1234567>);
expectType<-123456>({} as Max<-123456, -1234567>);

expectType<10>({} as MaxArr<[1, 2, 4, 10]>);
expectType<10>({} as MaxArr<readonly [1, 2, 4, 10]>);
expectType<2>({} as MaxArr<[1, 2, -4, -10]>);
expectType<2>({} as MaxArr<readonly [1, 2, -4, -10]>);
expectType<never>({} as MaxArr<number[]>);
expectType<never>({} as MaxArr<readonly number[]>);
