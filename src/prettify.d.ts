import { If } from "./if";

type PrettifyOptions = {
  recursive: boolean;
};

/**
 * Accepts a type and returns its simplified version for better readability. Transforms interface to type, simplifies intersections. If `recursive` option is `true` transforms the children object properties as well
 * @example
 * ```ts
 * // { a: string; b: string }
 * type Case1 = Prettify<{ a: string } & { b: string }
 * ```
 */
export type Prettify<
  T,
  Options extends PrettifyOptions = { recursive: false }
> = T extends infer R
  ? {
      [K in keyof R]: If<Options["recursive"], Prettify<R[K], Options>, R[K]>;
    }
  : never;
