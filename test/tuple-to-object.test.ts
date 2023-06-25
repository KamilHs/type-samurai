import { expectType } from "tsd-lite";
import { TupleToObject } from "../src/tuple-to-object";

expectType<{
  [x: number]: number;
}>({} as TupleToObject<[number]>);

expectType<{
  [x: string]: string;
}>({} as TupleToObject<[string]>);

expectType<{
  [x: symbol]: symbol;
}>({} as TupleToObject<[symbol]>);

expectType<{
  1: 1;
  2: 2;
  3: 3;
}>({} as TupleToObject<[1, 2, 3]>);

expectType<{
  1: 1;
  2: 2;
  3: 3;
  4: "4";
}>({} as TupleToObject<[1, 2, 3, "4"]>);
