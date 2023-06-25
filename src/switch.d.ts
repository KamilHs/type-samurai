/**
 * Type version of switch statement.
 * @param Cases - An object containing cases with their corresponding values.
 * @param Default - The default value if the condition does not match any case.
 * @example
 * ```ts
 * const a = 'const';
 *
 * // 'bar'
 * type Result = Switch<typeof a, { number: 'foo', const: 'bar' }, 'foobar'>
 *
 * ```
 */
export type Switch<
  Condition extends PropertyKey,
  Cases extends Record<PropertyKey, unknown>,
  Default = never
> = Condition extends keyof Cases ? Cases[Condition] : Default;
