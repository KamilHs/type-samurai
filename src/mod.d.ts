import { Div } from "./div";
import { Mult } from "./mult";
import { Sub } from "./sub";

export type Mod<Dividend extends number, Divisor extends number> = Div<
  Dividend,
  Divisor
> extends infer Quotient extends number
  ? Mult<Quotient, Divisor> extends infer Product extends number
    ? Sub<Dividend, Product>
    : never
  : never;
