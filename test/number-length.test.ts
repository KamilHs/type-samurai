import { expectType } from "tsd-lite";
import {
  CompareNumberLength,
  IsLongerNumber,
  IsShorterNumber,
  NumberLength,
} from "../src/number-length";
import { IsSameLengthNumber } from "../src/number-length";

expectType<never>({} as CompareNumberLength<1, 12>);
expectType<true>({} as CompareNumberLength<1, 12, true>);
expectType<never>({} as CompareNumberLength<12, 1, true>);
expectType<false>({} as CompareNumberLength<12, 1, true, false>);
expectType<never>({} as CompareNumberLength<12, 12, true, false>);
expectType<unknown>({} as CompareNumberLength<12, 12, true, false, unknown>);
expectType<true>(
  {} as CompareNumberLength<11111111111111111, 111111111111111112, true>
);
expectType<false>(
  {} as CompareNumberLength<1111111111111112, 111111111111111, true, false>
);

expectType<true>({} as IsShorterNumber<1, 12>);
expectType<false>({} as IsShorterNumber<12, 1>);
expectType<false>({} as IsShorterNumber<12, 12>);
expectType<false>({} as IsShorterNumber<12111111111111113, 1211111111111111>);

expectType<false>({} as IsLongerNumber<1, 12>);
expectType<true>({} as IsLongerNumber<12, 1>);
expectType<false>({} as IsLongerNumber<12, 12>);
expectType<true>({} as IsLongerNumber<12111111111111113, 1211111111111111>);

expectType<false>({} as IsSameLengthNumber<1, 12>);
expectType<false>({} as IsSameLengthNumber<12, 1>);
expectType<true>({} as IsSameLengthNumber<12, 12>);
expectType<true>({} as IsSameLengthNumber<12111111111111113, 12111111111111113>);

expectType<1>({} as NumberLength<1>)
expectType<2>({} as NumberLength<12>)
expectType<10>({} as NumberLength<1200000000>)