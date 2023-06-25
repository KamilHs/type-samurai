import { expectType } from "tsd-lite";
import {
  EmptyArray,
  IfEmptyArray,
  IfNonEmptyArray,
  IsEmptyArray,
  IsNonEmptyArray,
  NonEmptyArray,
} from "../src/array";

expectType<[]>({} as EmptyArray<[]>);
expectType<readonly []>({} as EmptyArray<readonly []>);
expectType<never>({} as EmptyArray<[1]>);
expectType<never>({} as EmptyArray<readonly [1]>);

expectType<[1]>({} as NonEmptyArray<[1]>);
expectType<readonly [1]>({} as NonEmptyArray<readonly [1]>);
expectType<never>({} as NonEmptyArray<[]>);
expectType<never>({} as NonEmptyArray<readonly []>);

expectType<true>({} as IsEmptyArray<[]>);
expectType<true>({} as IsEmptyArray<readonly []>);
expectType<false>({} as IsEmptyArray<[1]>);
expectType<false>({} as IsEmptyArray<readonly [1]>);

expectType<true>({} as IsNonEmptyArray<[1]>);
expectType<true>({} as IsNonEmptyArray<readonly [1]>);
expectType<false>({} as IsNonEmptyArray<[]>);
expectType<false>({} as IsNonEmptyArray<readonly []>);

expectType<true>({} as IfEmptyArray<[]>);
expectType<"true">({} as IfEmptyArray<[], "true">);
expectType<false>({} as IfEmptyArray<[1]>);
expectType<"false">({} as IfEmptyArray<[1], "true", "false">);

expectType<true>({} as IfNonEmptyArray<[1]>);
expectType<"true">({} as IfNonEmptyArray<[1], "true">);
expectType<false>({} as IfNonEmptyArray<[]>);
expectType<"false">({} as IfNonEmptyArray<[], "true", "false">);
