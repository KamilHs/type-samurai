import { expectType } from "tsd-lite";
import { GetFloatNumberParts } from "../src/get-float-number-parts";


expectType<[123, 4]>({} as GetFloatNumberParts<123.4>)
expectType<[123, 4]>({} as GetFloatNumberParts<-123.4>)
expectType<[123, 434554]>({} as GetFloatNumberParts<123.434554>)
expectType<[123, 434554]>({} as GetFloatNumberParts<-123.434554>)
expectType<[0, 434554]>({} as GetFloatNumberParts<0.434554>)
expectType<[0, 434554]>({} as GetFloatNumberParts<-0.434554>)
expectType<never>({} as GetFloatNumberParts<123>)