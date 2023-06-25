/**
 * Replaces the first occurrence of the second string argument with the third string argument in the first string argument
 * @example
 * ```ts
 * // 'remove him me'
 * type Case1 = Replace<'remove me me', 'me', 'him'>
 * // 'remove me me'
 * type Case2 = Replace<'remove me me', 'us', 'him'>
 * ```
 */
export type Replace<
  T extends string,
  Pivot extends string,
  ReplaceBy extends string
> = T extends `${infer A}${Pivot}${infer B}` ? `${A}${ReplaceBy}${B}` : T;
