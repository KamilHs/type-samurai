export type IsLetter<T extends string> = Uppercase<T> extends Lowercase<T>
  ? false
  : true;
