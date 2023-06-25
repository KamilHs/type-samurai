import { expectType } from "tsd-lite";
import { ToPrimitive } from "../src/to-primitive";

expectType<number>({} as ToPrimitive<number>);
expectType<number>({} as ToPrimitive<1>);
expectType<number>({} as ToPrimitive<-1>);
expectType<number>({} as ToPrimitive<123123>);
expectType<number>({} as ToPrimitive<-123123>);
expectType<string>({} as ToPrimitive<string>);
expectType<string>({} as ToPrimitive<"asdasd">);
expectType<string>({} as ToPrimitive<"">);
expectType<string>({} as ToPrimitive<"asd">);
expectType<boolean>({} as ToPrimitive<boolean>);
expectType<boolean>({} as ToPrimitive<true>);
expectType<boolean>({} as ToPrimitive<false>);
expectType<symbol>({} as ToPrimitive<symbol>);
expectType<bigint>({} as ToPrimitive<bigint>);
expectType<{ a: number; b: string; c: boolean; d: symbol; e: bigint }>(
  {} as ToPrimitive<{ a: number; b: string; c: boolean; d: symbol; e: bigint }>
);
expectType<{ a: number; b: string; c: boolean; d: symbol; e: bigint }>(
  {} as ToPrimitive<{ a: 234; b: "str"; c: true; d: symbol; e: bigint }>
);
expectType<{ a: { c: number } }>({} as ToPrimitive<{ a: { c: 213 } }>);
