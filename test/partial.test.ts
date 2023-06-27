import { PartialOnly, PartialExcept } from "../src/partial";
import { expectType } from "tsd-lite";

expectType<{ a?: number; b: boolean; c: string }>(
  {} as PartialOnly<{ a: number; b: boolean; c: string }, "a">
);
expectType<{ a?: number; b?: boolean; c: string }>(
  {} as PartialOnly<{ a: number; b: boolean; c: string }, "b" | "a">
);

expectType<{ a?: number; b: boolean; c: string }>(
  {} as PartialExcept<{ a: number; b: boolean; c: string }, "b" | "c">
);
expectType<{ a: number; b?: boolean; c?: string }>(
  {} as PartialExcept<{ a: number; b: boolean; c: string }, "a">
);