import {
  ValueOf,
  ValueOfArray,
  ValueOfExcept,
  ValueOfOnly,
} from "../src/value-of";
import { expectType } from "tsd-lite";

expectType<string>({} as ValueOf<{ a: string }>);
expectType<string | number>({} as ValueOf<{ a: string; b: number }>);
expectType<string | number | boolean>(
  {} as ValueOf<{ a: string; b: number; c: boolean }>
);

expectType<string>({} as ValueOfArray<string[]>);
expectType<number>({} as ValueOfArray<number[]>);
expectType<string | number>({} as ValueOfArray<string[] | number[]>);
expectType<string | number | boolean>(
  {} as ValueOfArray<string[] | number[] | boolean[]>
);
expectType<1 | 2 | 3>({} as ValueOfArray<[1, 2, 3]>);
expectType<1 | 2 | 3>({} as ValueOfArray<readonly [1, 2, 3]>);

expectType<string>({} as ValueOfOnly<{ a: string; b: number }, "a">);
expectType<number>({} as ValueOfOnly<{ a: string; b: number }, "b">);
expectType<string | number>(
  {} as ValueOfOnly<{ a: string; b: number; c: boolean }, "a" | "b">
);

expectType<number>({} as ValueOfExcept<{ a: string; b: number }, "a">);
expectType<string>({} as ValueOfExcept<{ a: string; b: number }, "b">);
expectType<string>(
  {} as ValueOfExcept<{ a: string; b: number; c: boolean }, "b" | "c">
);
