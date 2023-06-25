import { expectType } from "tsd-lite";
import { UnionToIntersection } from "../src/union-to-intersection";

expectType<{ a: string } & { b: string }>(
  {} as UnionToIntersection<{ a: string } | { b: string }>
);

expectType<{ a: string; b: string }>(
  {} as UnionToIntersection<{ a: string; b: string }>
);
