import { If } from "./if";

export type FirstCharacterOptions = {
  includeRest: boolean;
};

/**
 * Accepts a string argument and returns its first character.
 * If the `includeRest` options is `true`, returns the first character and the rest of the string in the format of: [first, rest]
 * @example
 * ```ts
 * // 'a'
 * type Case1 = FirstCharacter<'abc'>
 * // ['a', 'bc']
 * type Case2 = FirstCharacter<'abc', {includeRest: true}>
 * ```
 */
export type FirstCharacter<
  T extends string,
  Options extends FirstCharacterOptions = { includeRest: false }
> = T extends `${infer First extends string}${infer Rest extends string}`
  ? If<Options["includeRest"], [First, Rest], First>
  : never;
