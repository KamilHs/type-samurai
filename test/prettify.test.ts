import { expectType } from "tsd-lite";
import { Prettify } from "../src/prettify";

expectType<{ a: string; b: string }>(
  {} as Prettify<{ a: string } & { b: string }>
);

expectType<{ a: string; b: string; c: { d: string } & { e: string } }>(
  {} as Prettify<
    { a: string } & { b: string; c: { d: string } & { e: string } },
    { recursive: false }
  >
);

expectType<{ a: string; b: string; c: { d: string; e: string } }>(
  {} as Prettify<
    { a: string } & { b: string; c: { d: string } & { e: string } },
    { recursive: true }
  >
);

type Product = {
  a: string;
  b: string;
  c: string;
};

expectType<{
  a: string;
  b: string;
  c: string;
}>({} as Prettify<Product>);
