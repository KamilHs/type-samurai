import { FirstCharacter } from "./first-character";
import { ParseNumber } from "./number";
import { Stringify } from "./stringify";

export type FirstDigit<T extends number> = ParseNumber<
  FirstCharacter<Stringify<T>>
>;
