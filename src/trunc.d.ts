import { GetFloatNumberParts } from "./get-float-number-parts";
import { IsFloat } from "./number";

export type Trunc<T extends number> = IsFloat<T> extends true
  ? GetFloatNumberParts<T>[0]
  : never;
