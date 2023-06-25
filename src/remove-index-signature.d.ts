/**
 * Removes the index signature from the passed type
 * @example
 * ```ts
 * // {}
 * type Case1 = RemoveIndexSignature<{[x: string]: number}>
 * // {x: number}
 * type Case2 = RemoveIndexSignature<{x: number}>
 * ```
 */
export type RemoveIndexSignature<T> = {
  [Key in keyof T as Key extends `${infer _}` ? Key : never]: T[Key];
};
