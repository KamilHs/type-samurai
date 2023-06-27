import { Mutable, MutableOnly, MutableExcept } from "../src/mutable";
import { expectType } from "tsd-lite";

expectType<{ a: number; b: number }>(
  {} as Mutable<{ a: number; readonly b: number }>
);
expectType<{ readonly a: number; b: number; readonly c: number }>(
  {} as MutableOnly<
    { readonly a: number; readonly b: number; readonly c: number },
    "b"
  >
);
expectType<{ readonly a: number; b: number; c: number }>(
  {} as MutableExcept<
    { readonly a: number; readonly b: number; readonly c: number },
    "a"
  >
);

expectType<number>({} as Mutable<number>);

expectType<{
  a: {
    readonly b: {
      readonly c: number;
    };
  };
}>(
  {} as Mutable<{
    readonly a: {
      readonly b: {
        readonly c: number;
      };
    };
  }>
);

expectType<{
  a: {
    b: {
      c: number;
    };
  };
}>(
  {} as Mutable<
    {
      readonly a: {
        readonly b: {
          readonly c: number;
        };
      };
    },
    {
      recursive: true;
    }
  >
);
