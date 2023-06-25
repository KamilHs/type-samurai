import { expectType } from "tsd-lite";
import {
  Abs,
  Even,
  Float,
  IfEven,
  IfFloat,
  IfInteger,
  IfNegative,
  IfNegativeFloat,
  IfNegativeInteger,
  IfOdd,
  IfPositive,
  IfPositiveFloat,
  IfPositiveInteger,
  Integer,
  IsEven,
  IsFloat,
  IsInteger,
  IsNegative,
  IsNegativeFloat,
  IsNegativeInteger,
  IsOdd,
  IsPositive,
  IsPositiveFloat,
  IsPositiveInteger,
  Negate,
  Negative,
  NegativeFloat,
  NegativeInteger,
  Odd,
  ParseNumber,
  Positive,
  PositiveFloat,
  PositiveInteger,
} from "../src/number";

expectType<123>({} as Integer<123>);
expectType<never>({} as Integer<123.4>);
expectType<-123>({} as Integer<-123>);

expectType<123.4>({} as Float<123.4>);
expectType<never>({} as Float<123>);
expectType<-123.4>({} as Float<-123.4>);

expectType<never>({} as Negative<123>);
expectType<never>({} as Negative<123.4>);
expectType<-123>({} as Negative<-123>);
expectType<-123.4>({} as Negative<-123.4>);

expectType<123>({} as Positive<123>);
expectType<123.4>({} as Positive<123.4>);
expectType<never>({} as Positive<-123>);
expectType<never>({} as Positive<-123.4>);

expectType<123>({} as PositiveInteger<123>);
expectType<never>({} as PositiveInteger<123.4>);
expectType<never>({} as PositiveInteger<-123>);
expectType<never>({} as PositiveInteger<-123.4>);

expectType<never>({} as NegativeInteger<123>);
expectType<never>({} as NegativeInteger<123.4>);
expectType<-123>({} as NegativeInteger<-123>);
expectType<never>({} as NegativeInteger<-123.4>);

expectType<never>({} as PositiveFloat<123>);
expectType<123.4>({} as PositiveFloat<123.4>);
expectType<never>({} as PositiveFloat<-123>);
expectType<never>({} as PositiveFloat<-123.4>);

expectType<never>({} as NegativeFloat<123>);
expectType<never>({} as NegativeFloat<123.4>);
expectType<never>({} as NegativeFloat<-123>);
expectType<-123.4>({} as NegativeFloat<-123.4>);

expectType<2>({} as Even<2>);
expectType<4>({} as Even<4>);
expectType<6>({} as Even<6>);
expectType<8>({} as Even<8>);
expectType<0>({} as Even<0>);
expectType<never>({} as Even<1>);
expectType<never>({} as Even<3>);
expectType<never>({} as Even<5>);
expectType<never>({} as Even<7>);
expectType<never>({} as Even<9>);
expectType<-2>({} as Even<-2>);
expectType<-4>({} as Even<-4>);
expectType<-6>({} as Even<-6>);
expectType<-8>({} as Even<-8>);
expectType<-0>({} as Even<-0>);

expectType<1>({} as Odd<1>);
expectType<3>({} as Odd<3>);
expectType<5>({} as Odd<5>);
expectType<7>({} as Odd<7>);
expectType<9>({} as Odd<9>);
expectType<never>({} as Odd<2>);
expectType<never>({} as Odd<4>);
expectType<never>({} as Odd<6>);
expectType<never>({} as Odd<8>);
expectType<never>({} as Odd<0>);
expectType<-1>({} as Odd<-1>);
expectType<-3>({} as Odd<-3>);
expectType<-5>({} as Odd<-5>);
expectType<-7>({} as Odd<-7>);
expectType<-9>({} as Odd<-9>);

expectType<true>({} as IsInteger<123>);
expectType<false>({} as IsInteger<123.4>);
expectType<true>({} as IsInteger<-123>);

expectType<true>({} as IsFloat<123.4>);
expectType<false>({} as IsFloat<123>);
expectType<true>({} as IsFloat<-123.4>);

expectType<true>({} as IsEven<2>);
expectType<true>({} as IsEven<4>);
expectType<true>({} as IsEven<6>);
expectType<true>({} as IsEven<8>);
expectType<true>({} as IsEven<0>);
expectType<false>({} as IsEven<1>);
expectType<false>({} as IsEven<3>);
expectType<false>({} as IsEven<5>);
expectType<false>({} as IsEven<7>);
expectType<false>({} as IsEven<9>);
expectType<true>({} as IsEven<-2>);
expectType<true>({} as IsEven<-4>);
expectType<true>({} as IsEven<-6>);
expectType<true>({} as IsEven<-8>);
expectType<true>({} as IsEven<-0>);

expectType<true>({} as IsOdd<1>);
expectType<true>({} as IsOdd<3>);
expectType<true>({} as IsOdd<5>);
expectType<true>({} as IsOdd<7>);
expectType<true>({} as IsOdd<9>);
expectType<false>({} as IsOdd<2>);
expectType<false>({} as IsOdd<4>);
expectType<false>({} as IsOdd<6>);
expectType<false>({} as IsOdd<8>);
expectType<false>({} as IsOdd<0>);
expectType<true>({} as IsOdd<-1>);
expectType<true>({} as IsOdd<-3>);
expectType<true>({} as IsOdd<-5>);
expectType<true>({} as IsOdd<-7>);
expectType<true>({} as IsOdd<-9>);

expectType<true>({} as IsPositive<123>);
expectType<true>({} as IsPositive<123.4>);
expectType<false>({} as IsPositive<-123>);
expectType<false>({} as IsPositive<-123.4>);

expectType<false>({} as IsNegative<123>);
expectType<false>({} as IsNegative<123.4>);
expectType<true>({} as IsNegative<-123>);
expectType<true>({} as IsNegative<-123.4>);

expectType<true>({} as IsPositiveInteger<123>);
expectType<false>({} as IsPositiveInteger<123.4>);
expectType<false>({} as IsPositiveInteger<-123>);
expectType<false>({} as IsPositiveInteger<-123.4>);

expectType<false>({} as IsNegativeInteger<123>);
expectType<false>({} as IsNegativeInteger<123.4>);
expectType<true>({} as IsNegativeInteger<-123>);
expectType<false>({} as IsNegativeInteger<-123.4>);

expectType<false>({} as IsPositiveFloat<123>);
expectType<true>({} as IsPositiveFloat<123.4>);
expectType<false>({} as IsPositiveFloat<-123>);
expectType<false>({} as IsPositiveFloat<-123.4>);

expectType<false>({} as IsNegativeFloat<123>);
expectType<false>({} as IsNegativeFloat<123.4>);
expectType<false>({} as IsNegativeFloat<-123>);
expectType<true>({} as IsNegativeFloat<-123.4>);

expectType<true>({} as IfInteger<1>);
expectType<"true">({} as IfInteger<1, "true">);
expectType<false>({} as IfInteger<1.1>);
expectType<"false">({} as IfInteger<1.1, "true", "false">);
expectType<true>({} as IfInteger<-1>);
expectType<"true">({} as IfInteger<-1, "true">);
expectType<false>({} as IfInteger<-1.1>);

expectType<true>({} as IfFloat<1.1>);
expectType<"true">({} as IfFloat<1.1, "true">);
expectType<false>({} as IfFloat<1>);
expectType<"false">({} as IfFloat<1, "true", "false">);
expectType<true>({} as IfFloat<-1.1>);
expectType<"true">({} as IfFloat<-1.1, "true">);
expectType<false>({} as IfFloat<-1>);

expectType<"false">({} as IfEven<-1, "true", "false">);
expectType<true>({} as IfEven<2>);
expectType<"true">({} as IfEven<2, "true">);
expectType<false>({} as IfEven<1>);
expectType<"false">({} as IfEven<1, "true", "false">);
expectType<true>({} as IfEven<-2>);
expectType<"true">({} as IfEven<-2, "true">);
expectType<false>({} as IfEven<-1>);
expectType<"false">({} as IfEven<-1, "true", "false">);

expectType<true>({} as IfOdd<1>);
expectType<"true">({} as IfOdd<1, "true">);
expectType<false>({} as IfOdd<2>);
expectType<"false">({} as IfOdd<2, "true", "false">);
expectType<true>({} as IfOdd<-1>);
expectType<"true">({} as IfOdd<-1, "true">);
expectType<false>({} as IfOdd<-2>);
expectType<"false">({} as IfOdd<-2, "true", "false">);

expectType<true>({} as IfPositive<123>);
expectType<"true">({} as IfPositive<123, "true">);
expectType<false>({} as IfPositive<-123>);
expectType<"false">({} as IfPositive<-123, "true", "false">);

expectType<true>({} as IfNegative<-123>);
expectType<"true">({} as IfNegative<-123, "true">);
expectType<false>({} as IfNegative<123>);
expectType<"false">({} as IfNegative<123, "true", "false">);

expectType<true>({} as IfPositiveInteger<123>);
expectType<"true">({} as IfPositiveInteger<123, "true">);
expectType<false>({} as IfPositiveInteger<-123>);
expectType<"false">({} as IfPositiveInteger<-123, "true", "false">);

expectType<true>({} as IfNegativeInteger<-123>);
expectType<"true">({} as IfNegativeInteger<-123, "true">);
expectType<false>({} as IfNegativeInteger<123>);
expectType<"false">({} as IfNegativeInteger<123, "true", "false">);

expectType<true>({} as IfPositiveFloat<123.4>);
expectType<"true">({} as IfPositiveFloat<123.4, "true">);
expectType<false>({} as IfPositiveFloat<-123.4>);
expectType<"false">({} as IfPositiveFloat<-123.4, "true", "false">);

expectType<true>({} as IfNegativeFloat<-123.4>);
expectType<"true">({} as IfNegativeFloat<-123.4, "true">);
expectType<false>({} as IfNegativeFloat<123.4>);
expectType<"false">({} as IfNegativeFloat<123.4, "true", "false">);

expectType<100>({} as ParseNumber<"100">);
expectType<-100>({} as ParseNumber<"-100">);
expectType<never>({} as ParseNumber<"invalid">);

expectType<100>({} as Abs<100>);
expectType<100>({} as Abs<-100>);

expectType<-100>({} as Negate<100>);
expectType<-100>({} as Negate<-100>);
