import { ReadonlyExcept, ReadonlyOnly } from "../src/readonly";
import { expectType } from "tsd-lite";

expectType<{ a: number; readonly b: string; readonly c: boolean }>(
  {} as ReadonlyExcept<{ a: number; b: string; c: boolean }, "a">
);

expectType<{ readonly a: number; readonly b: string; readonly c: boolean }>(
  {} as ReadonlyExcept<{ a: number; readonly b: string; c: boolean }, "b">
);

expectType<{ a: number; readonly b: string; c: boolean }>(
  {} as ReadonlyOnly<{ a: number; b: string; c: boolean }, "b">
);

expectType<{ readonly a: number; b: string; c: boolean }>(
  {} as ReadonlyOnly<{ readonly a: number; b: string; c: boolean }, "a">
);

expectType<{ readonly a: number; readonly b: string; readonly c: boolean }>(
  {} as ReadonlyOnly<
    { readonly a: number; b: string; readonly c: boolean },
    "b"
  >
);
