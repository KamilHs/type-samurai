import { expectType } from "tsd-lite";
import {
  IsDivisibleByFive,
  IsDivisibleByHundred,
  IsDivisibleBySix,
  IsDivisibleByTen,
  IsDivisibleByThree,
  IsDivisibleByTwo,
} from "../src/is-divisible";

expectType<true>({} as IsDivisibleByTwo<2>);
expectType<true>({} as IsDivisibleByTwo<4>);
expectType<true>({} as IsDivisibleByTwo<6>);
expectType<true>({} as IsDivisibleByTwo<8>);
expectType<true>({} as IsDivisibleByTwo<10>);
expectType<true>({} as IsDivisibleByTwo<-2>);
expectType<true>({} as IsDivisibleByTwo<-4>);
expectType<true>({} as IsDivisibleByTwo<-6>);
expectType<true>({} as IsDivisibleByTwo<-8>);
expectType<true>({} as IsDivisibleByTwo<-10>);
expectType<true>({} as IsDivisibleByTwo<-1000002456>);
expectType<false>({} as IsDivisibleByTwo<-1>);
expectType<false>({} as IsDivisibleByTwo<-3>);
expectType<false>({} as IsDivisibleByTwo<-5>);
expectType<false>({} as IsDivisibleByTwo<-7>);
expectType<false>({} as IsDivisibleByTwo<-9>);
expectType<false>({} as IsDivisibleByTwo<-11>);
expectType<false>({} as IsDivisibleByTwo<1>);
expectType<false>({} as IsDivisibleByTwo<3>);
expectType<false>({} as IsDivisibleByTwo<5>);
expectType<false>({} as IsDivisibleByTwo<7>);
expectType<false>({} as IsDivisibleByTwo<9>);
expectType<false>({} as IsDivisibleByTwo<11>);

expectType<true>({} as IsDivisibleByThree<3>);
expectType<true>({} as IsDivisibleByThree<6>);
expectType<true>({} as IsDivisibleByThree<9>);
expectType<true>({} as IsDivisibleByThree<12>);
expectType<true>({} as IsDivisibleByThree<2799999>);
expectType<true>({} as IsDivisibleByThree<-2799999>);
expectType<false>({} as IsDivisibleByThree<1>);
expectType<false>({} as IsDivisibleByThree<2>);
expectType<false>({} as IsDivisibleByThree<4>);
expectType<false>({} as IsDivisibleByThree<8>);

expectType<true>({} as IsDivisibleByFive<5>);
expectType<true>({} as IsDivisibleByFive<10>);
expectType<true>({} as IsDivisibleByFive<15>);
expectType<true>({} as IsDivisibleByFive<10000004235>);
expectType<true>({} as IsDivisibleByFive<-12231235>);
expectType<false>({} as IsDivisibleByFive<-1>);
expectType<false>({} as IsDivisibleByFive<1>);
expectType<false>({} as IsDivisibleByFive<27>);
expectType<false>({} as IsDivisibleByFive<-2431234>);

expectType<true>({} as IsDivisibleBySix<6>);
expectType<true>({} as IsDivisibleBySix<12>);
expectType<true>({} as IsDivisibleBySix<24>);
expectType<true>({} as IsDivisibleBySix<145404>);
expectType<true>({} as IsDivisibleBySix<-145404>);
expectType<true>({} as IsDivisibleBySix<-24>);
expectType<false>({} as IsDivisibleBySix<-1>);
expectType<false>({} as IsDivisibleBySix<5>);
expectType<false>({} as IsDivisibleBySix<7>);
expectType<false>({} as IsDivisibleBySix<8>);
expectType<false>({} as IsDivisibleBySix<2132>);

expectType<true>({} as IsDivisibleByTen<10>);
expectType<true>({} as IsDivisibleByTen<50>);
expectType<true>({} as IsDivisibleByTen<50000000>);
expectType<true>({} as IsDivisibleByTen<-50000000>);
expectType<false>({} as IsDivisibleByTen<-50000001>);
expectType<false>({} as IsDivisibleByTen<50000001>);
expectType<false>({} as IsDivisibleByTen<9>);

expectType<true>({} as IsDivisibleByHundred<100>);
expectType<true>({} as IsDivisibleByHundred<40000>);
expectType<true>({} as IsDivisibleByHundred<-40000>);
expectType<true>({} as IsDivisibleByHundred<-100>);
expectType<false>({} as IsDivisibleByHundred<90>);
expectType<false>({} as IsDivisibleByHundred<92310>);
expectType<false>({} as IsDivisibleByHundred<-92310>);
