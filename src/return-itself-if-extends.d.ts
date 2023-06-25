/**
 * Returns the first argument if it extends the second argument, returns the third argument otherwise
 * @example
 * ```ts
 * // 1
 * type Case1 = ReturnItselfIfExtends<1, number, 2>
 * // 2
 * type Case2 = ReturnItselfIfExtends<'1', number, 2>
 * ```
 */
export type ReturnItselfIfExtends<T, Base, Else> = T extends Base ? T : Else;

/**
 * Returns the first argument if it doesn't extend the second argument, returns the third argument otherwise
 * @example
 * ```ts
 * // '1'
 * type Case1 = ReturnItselfIfNotExtends<'1', number, 2>
 * // 2
 * type Case2 = ReturnItselfIfNotExtends<1, number, 2>
 * ```
 */
export type ReturnItselfIfNotExtends<T, Base, Else> = T extends Base ? Else : T;
