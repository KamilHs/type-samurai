import { expectType } from "tsd-lite";
import { RemoveIndexSignature } from "../src/remove-index-signature";

expectType<{ a: number }>(
  {} as RemoveIndexSignature<{ a: number; [x: string]: number }>
);
expectType<{}>({} as RemoveIndexSignature<{ [x: string]: number }>);
expectType<{ x: number }>({} as RemoveIndexSignature<{ x: number }>);
