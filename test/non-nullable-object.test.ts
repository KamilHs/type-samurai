import {
  NonNullableObject,
  NonNullableObjectExcept,
  NonNullableObjectOnly,
} from "../src/non-nullable-object";
import { expectType } from "tsd-lite";

expectType<{}>({} as NonNullableObject<{}>);
expectType<{
  a: string;
  b: number;
}>(
  {} as NonNullableObject<{
    a: string | undefined;
    b: number | null;
  }>
);
expectType<{
  a: string | null;
  b: number;
  c: boolean;
}>(
  {} as NonNullableObjectExcept<
    {
      a: string | null;
      b: number | undefined;
      c: boolean | null;
    },
    "a"
  >
);

expectType<{
  a: string;
  b: number | null;
  c: boolean | null;
}>(
  {} as NonNullableObjectOnly<
    {
      a: string | undefined;
      b: number | null;
      c: boolean | null;
    },
    "a"
  >
);

expectType<{
  a: string;
  b: number;
  c: boolean | null;
}>(
  {} as NonNullableObjectOnly<
    {
      a: string | undefined;
      b: number | null;
      c: boolean | null;
    },
    "a" | "b"
  >
);
