export type ValueOf<T> = T[keyof T];

export type ValueOfOnly<T, K extends keyof T> = T[K];
export type ValueOfExcept<T, K extends keyof T> = keyof Omit<T, K>;
