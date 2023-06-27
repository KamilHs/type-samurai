import {Round} from '../src/round'
import {expectType} from 'tsd-lite'

expectType<1>({} as Round<1>)
expectType<2>({} as Round<2>)
expectType<3>({} as Round<3>)

expectType<1>({} as Round<0.9>)
expectType<1>({} as Round<1.1>)
expectType<1>({} as Round<1.44323>)
expectType<2>({} as Round<1.5>)
expectType<2>({} as Round<1.6>)
expectType<2>({} as Round<1.9>)
expectType<2>({} as Round<2.1>)
expectType<3>({} as Round<2.5>)
expectType<0>({} as Round<0>)
expectType<0>({} as Round<0.312321312>)

expectType<number>({} as Round<number>)
