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
  T extends object,
  Options extends PrettifyOptions = { recursive: false }
> = T extends infer R
  ? {
      [K in keyof R]: R[K] extends object
        ? If<Options["recursive"], Prettify<R[K]>, R[K]>
        : R[K];
    }
  : never;
