export type ReadonlyByKeys<T extends object, K extends keyof T> = Pick<T, K> & {
  readonly [P in Exclude<keyof T, K>]: T[P];
};

export type ReadonlyExcept<T extends object, K extends keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
};
