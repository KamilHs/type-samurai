import { expectType } from "tsd-lite";
import { Push } from "../src/push";

expectType<[unknown]>({} as Push<[], unknown>);
expectType<[unknown]>({} as Push<readonly [], unknown>);
expectType<[1]>({} as Push<[], 1>);
expectType<[unknown, unknown, unknown]>(
  {} as Push<[unknown, unknown], unknown>
);
expectType<[...number[], string]>({} as Push<number[], string>);
