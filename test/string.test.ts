import { expectType } from "tsd-lite";
import {
  EmptyString,
  IfEmptyString,
  IfNonEmptyString,
  IsEmptyString,
  IsNonEmptyString,
  NonEmptyString,
} from "../src/string";

expectType<"">({} as EmptyString<"">);
expectType<never>({} as EmptyString<string>);
expectType<never>({} as EmptyString<"a">);

expectType<"a">({} as NonEmptyString<"a">);
expectType<string>({} as NonEmptyString<string>);
expectType<never>({} as NonEmptyString<"">);

expectType<true>({} as IsEmptyString<"">);
expectType<false>({} as IsEmptyString<string>);
expectType<false>({} as IsEmptyString<"a">);

expectType<true>({} as IsNonEmptyString<"a">);
expectType<true>({} as IsNonEmptyString<string>);
expectType<false>({} as IsNonEmptyString<"">);

expectType<true>({} as IfEmptyString<"">);
expectType<"true">({} as IfEmptyString<"", "true">);
expectType<"false">({} as IfEmptyString<"a", "true", "false">);

expectType<true>({} as IfNonEmptyString<"a">);
expectType<"true">({} as IfNonEmptyString<"a", "true">);
expectType<"false">({} as IfNonEmptyString<"", "true", "false">);
