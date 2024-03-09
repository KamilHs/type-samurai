import { expectType } from "tsd-lite";
import { IndexOf } from "../src/index-of";

expectType<1>({} as IndexOf<[1, 2, 3], 2>);
expectType<-1>({} as IndexOf<[1, 2, 3], 4>);
expectType<never>({} as IndexOf<number[], 4>);
expectType<never>({} as IndexOf<string[], 4>);
expectType<0>({} as IndexOf<[{ a: string }, 1, 2], { a: string }>);

expectType<1>({} as IndexOf<"abc", "b">);
expectType<-1>({} as IndexOf<"abc", "d">);
expectType<never>({} as IndexOf<string, "d">);
