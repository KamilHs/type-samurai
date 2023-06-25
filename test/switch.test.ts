import { expectType } from "tsd-lite";
import { Switch } from "../src/switch";

expectType<true>({} as Switch<"1", { "1": true; 2: false }>);
expectType<never>({} as Switch<"2", { "1": true }>);
expectType<'default'>({} as Switch<"2", { "1": true }, 'default'>);
