export type PartialOnly<T extends object, K extends keyof T> = Pick<T, K> & {
  [P in Exclude<keyof T, K>]?: T[P];
};

export type PartialExcept<T extends object, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};
