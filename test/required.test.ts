import { RequiredExcept, RequiredOnly } from "../src/required";
import { expectType } from "tsd-lite";

expectType<{ a?: number; b: string; c: boolean }>(
  {} as RequiredExcept<{ a?: number; b?: string; c?: boolean }, "a">
);

expectType<{ a: number; b: string; c: boolean }>(
  {} as RequiredExcept<{ a?: number; b: string; c?: boolean }, "b">
);

expectType<{ a?: number; b: string; c?: boolean }>(
  {} as RequiredOnly<{ a?: number; b?: string; c?: boolean }, "b">
);

expectType<{ a: number; b?: string; c?: boolean }>(
  {} as RequiredOnly<{ a?: number; b?: string; c?: boolean }, "a">
);

expectType<{ a: number; b: string; c: boolean }>(
  {} as RequiredOnly<{ a: number; b?: string; c: boolean }, "b">
);
