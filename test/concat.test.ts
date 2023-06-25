import { expectType } from "tsd-lite";
import { Concat } from "../src/concat";

expectType<[string, string, number, number]>(
  {} as Concat<[string, string], [number, number]>
);
expectType<(string | number)[]>({} as Concat<string[], number[]>);
