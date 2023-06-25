import { AndArr } from "./and";
import { IsBetween } from "./is-between";
import { ExtendsArr } from "./extends";
import { If } from "./if";
import { IsNever } from "./never";
import { Not } from "./not";
import { IsInteger } from "./number";
import { Split } from "./split";
import { StringLength } from "./string-length";

type _IsValidRGBParameter<T extends number> = IsInteger<T> extends true
  ? IsBetween<T, 0, 255>
  : false;

export type RGBOptions = {
  separator: string;
};

export type DefaultRGBOptions = {
  separator: ", ";
};

/**
 * Returns the first string argument if it is a valid RGB color, otherwise returns `never`.
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // rgb(23, 242, 0)
 * type Case1 = RGB<'rgb(23, 242, 0)'>
 * // never
 * type Case2 = RGB<'rgb(324, 123, 3)'>
 * // rgb(23,242,0)
 * type Case3 = RGB<'rgb(23,242,0)', { separator: ',' }>
 * ```
 */
export type RGB<
  T extends string,
  Options extends RGBOptions = DefaultRGBOptions
> = T extends `rgb(${infer R extends number}${Options["separator"]}${infer G extends number}${Options["separator"]}${infer B extends number})`
  ? AndArr<
      [
        _IsValidRGBParameter<R>,
        _IsValidRGBParameter<G>,
        _IsValidRGBParameter<B>
      ]
    > extends true
    ? T
    : never
  : never;

/**
 * Returns a boolean whether the first string argument is a valid RGB color.
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // true
 * type Case1 = IsRGB<'rgb(23, 242, 0)'>
 * // false
 * type Case2 = IsRGB<'rgb(324, 123, 3)'>
 * // true
 * type Case3 = IsRGB<'rgb(23,242,0)', { separator: ',' }>
 * ```
 */
export type IsRGB<
  T extends string,
  Options extends RGBOptions = DefaultRGBOptions
> = Not<IsNever<RGB<T, Options>>>;

/**
 * Returns the third argument if the first argument is valid RGB color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // 'true'
 * type Case1 = IfRGB<'rgb(23, 242, 0)', 'true'>
 * // 'invalid'
 * type Case2 = IfRGB<'rgb(324, 123, 3)', 'valid', 'invalid'>
 * // true
 * type Case3 = IfRGB<'rgb(23,242,0)', { separator: ',' }>
 * ```
 */
export type IfRGB<
  T extends string,
  Options extends RGBOptions = DefaultRGBOptions,
  IfTrue = true,
  IfFalse = false
> = If<IsRGB<T, Options>, IfTrue, IfFalse>;

type _ValidHEXCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];

type _AllowedHEXLength = 3 | 4 | 6 | 8;

/**
 * Returns the first string argument if it is a valid HEX color, otherwise returns `never`
 * @example
 * // '#000'
 * type Case1 = HEX<'#000'>
 * // never
 * type Case2 = HEX<'#g00'>
 * // '#0000'
 * type Case3 = HEX<'#0000'>
 * // never
 * type Case4 = HEX<'#00000'>
 * // '#000000'
 * type Case5 = HEX<'#000000'>
 * // '#00000000'
 * type Case6 = HEX<'#00000000'>
 */
export type HEX<T extends string> = (
  Uppercase<T> extends `#${infer HEXWithoutHashTag extends string}`
    ? StringLength<HEXWithoutHashTag> extends _AllowedHEXLength
      ? ExtendsArr<Split<HEXWithoutHashTag, "">, _ValidHEXCharacters[number]>
      : false
    : false
) extends true
  ? T
  : never;

/**
 * Returns a boolean whether the first string argument is a valid HEX color.
 * @example
 * ```ts
 * // true
 * type Case1 = IsHEX<'#000'>
 * // false
 * type Case2 = IsHEX<'#g00'>
 * ```
 */
export type IsHEX<T extends string> = Not<IsNever<HEX<T>>>;

/**
 * Returns the second argument if the first argument is valid HEX color (defaults to `true`), otherwise returns the third argument (defaults to `false`)
 * @example
 * ```ts
 * // true
 * type Case1 = IfHEX<'#000'>
 * // false
 * type Case2 = IfHEX<'#g00'>
 * // 'valid'
 * type Case3 = IfHEX<'#0000', 'valid'>
 * // 'invalid'
 * type Case4 = IfHEX<'#00000', 'valid', 'invalid'>
 * ```
 */
export type IfHEX<T extends string, IfTrue = true, IfFalse = false> = If<
  IsHEX<T>,
  IfTrue,
  IfFalse
>;

export type HSLOptions = {
  separator: string;
};

export type DefaultHSLOptions = {
  separator: ", ";
};

/**
 * Returns the first string argument if it is a valid HSL color, otherwise returns `never`.
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // hsl(100, 34%, 56%)
 * type Case1 = HSL<'hsl(100, 34%, 56%)'>
 * // never
 * type Case2 = HSL<'hsl(100, 200%, 3)'>
 * // hsl(100,34%,56%)
 * type Case3 = HSL<'hsl(100,34%,56%)', { separator: ',' }>
 * ```
 */
export type HSL<
  T extends string,
  Options extends HSLOptions = DefaultHSLOptions
> = (
  T extends `hsl(${infer H extends number}${Options["separator"]}${infer S extends number}%${Options["separator"]}${infer L extends number}%)`
    ? AndArr<[IsInteger<H>, IsInteger<S>, IsInteger<L>]> extends true
      ? AndArr<[IsBetween<S, 0, 100>, IsBetween<L, 0, 100>]>
      : false
    : false
) extends true
  ? T
  : never;

/**
 * Returns a boolean whether the first string argument is a valid HSL color.
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // true
 * type Case1 = IsHSL<'hsl(100, 34%, 56%)'>
 * // false
 * type Case2 = IsHSL<'hsl(101, 200%, 3)'>
 * // true
 * type Case3 = IsHSL<'hsl(100,34%,56%)', { separator: ',' }>
 * ```
 */
export type IsHSL<
  T extends string,
  Options extends HSLOptions = DefaultHSLOptions
> = Not<IsNever<HSL<T, Options>>>;

/**
 * Returns the third argument if the first argument is valid HSL color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // 'true'
 * type Case1 = IfHSL<'hsl(100, 34%, 56%)', 'true'>
 * // 'invalid'
 * type Case2 = IfHSL<'hsl(101, 200%, 3)', 'valid', 'invalid'>
 * // true
 * type Case3 = IfHSL<'hsl(100,34%,56%)', { separator: ',' }>
 * ```
 */
export type IfHSL<
  T extends string,
  Options extends HSLOptions = DefaultHSLOptions,
  IfTrue = true,
  IfFalse = false
> = If<IsHSL<T, Options>, IfTrue, IfFalse>;

export type ColorOptions = {
  rgbOptions?: RGBOptions;
  hslOptions?: HSLOptions;
};

export type DefaultColorOptions = {
  rgbOptions: DefaultRGBOptions;
  hslOptions: DefaultHSLOptions;
};

/**
 * Returns the first string argument if it is a valid RGB or HEX or HSL color, otherwise returns `never`.
 * The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // rgb(23, 242, 0)
 * type Case1 = Color<'rgb(23, 242, 0)'>
 * // never
 * type Case2 = Color<'rgb(324, 123, 3)'>
 * // '#000000'
 * type Case3 = HEX<'#000000'>
 * // 'hsl(100,34%,56%)'
 * type Case4 = Color<'hsl(100,34%,56%)', { hslOptions: { separator: ',' } }>
 * ```
 */
export type Color<
  T extends string,
  Options extends ColorOptions = DefaultColorOptions
> = RGB<T, Options["rgbOptions"]> | HEX<T> | HSL<T, Options["hslOptions"]>;

/**
 * Returns a boolean whether the first string argument is a valid RGB or HEX or HSL color.
 * The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // true
 * type Case1 = Color<'rgb(23, 242, 0)'>
 * // false
 * type Case2 = Color<'rgb(324, 123, 3)'>
 * // true
 * type Case3 = HEX<'#000000'>
 * // true
 * type Case4 = Color<'hsl(100,34%,56%)', { hslOptions: { separator: ',' } }>
 * ```
 */
export type IsColor<
  T extends string,
  Options extends ColorOptions = DefaultColorOptions
> = Not<IsNever<Color<T, Options>>>;

/**
 * Returns the third argument if the first argument is valid RGB or HEX or HSL color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
 * The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
 * @example
 * ```ts
 * // 'valid'
 * type Case1 = Color<'rgb(23, 242, 0)', 'valid'>
 * // 'invalid'
 * type Case2 = Color<'rgb(324, 123, 3)', 'valid', 'invalid'>
 * // true
 * type Case3 = Color<'#000000'>
 * ```
 */
export type IfColor<
  T extends string,
  Options extends ColorOptions = DefaultColorOptions,
  IfTrue = true,
  IfFalse = false
> = If<IsColor<T, Options>, IfTrue, IfFalse>;
