/**
 * Replaces all occurrences of the second string argument with the third string argument in the first string argument
 * @example
 * ```ts
 * // 'remove him him'
 * type Case1 = ReplaceAll<'remove me me', 'me', 'him'>
 * // 'remove me me'
 * type Case2 = ReplaceAll<'remove me me', 'us', 'him'>
 * ```
 */
export type ReplaceAll<
  T extends string,
  Pivot extends string,
  ReplaceBy extends string
> = T extends `${infer A}${Pivot}${infer B}`
  ? ReplaceAll<`${A}${ReplaceBy}${B}`, Pivot, ReplaceBy>
  : T;
