import { expectType } from "tsd-lite";
import {
  Color,
  DefaultColorOptions,
  DefaultHSLOptions,
  DefaultRGBOptions,
  HEX,
  HSL,
  IfColor,
  IfHEX,
  IfHSL,
  IfRGB,
  IsColor,
  IsHEX,
  IsHSL,
  IsRGB,
  RGB,
} from "../src/color";

expectType<"rgb(1, 1, 1)">({} as RGB<"rgb(1, 1, 1)">);
expectType<never>({} as RGB<"rgb(400, 1, 1)">);
expectType<never>({} as RGB<"rgb(1, 400, 1)">);
expectType<never>({} as RGB<"rgb(1, 1, 400)">);
expectType<never>({} as RGB<"rgb(1, 1, 4.4)">);
expectType<"rgb(1,1,4)">({} as RGB<"rgb(1,1,4)", { separator: "," }>);

expectType<"#000">({} as HEX<"#000">);
expectType<never>({} as HEX<"#z00">);
expectType<"#0000">({} as HEX<"#0000">);
expectType<never>({} as HEX<"#z000">);
expectType<never>({} as HEX<"#00000">);
expectType<"#000000">({} as HEX<"#000000">);
expectType<never>({} as HEX<"#z00000">);
expectType<never>({} as HEX<"#0000000">);
expectType<"#00000000">({} as HEX<"#00000000">);
expectType<never>({} as HEX<"#z0000000">);

expectType<"hsl(10, 50%, 23%)">({} as HSL<"hsl(10, 50%, 23%)">);
expectType<"hsl(10,50%,23%)">({} as HSL<"hsl(10,50%,23%)", { separator: "," }>);
expectType<"hsl(720, 50%, 23%)">({} as HSL<"hsl(720, 50%, 23%)">);
expectType<never>({} as HSL<"hsl(100, 150%, 23%)">);
expectType<never>({} as HSL<"hsl(100, 100%, 23.4%)">);
expectType<never>({} as HSL<"hsl(100, 100%, 420%)">);

expectType<"rgb(1, 1, 1)">({} as Color<"rgb(1, 1, 1)">);
expectType<never>({} as Color<"rgb(400, 1, 1)">);
expectType<never>({} as Color<"rgb(1, 400, 1)">);
expectType<never>({} as Color<"rgb(1, 1, 400)">);
expectType<never>({} as Color<"rgb(1, 1, 4.4)">);
expectType<"rgb(1,1,4)">(
  {} as Color<"rgb(1,1,4)", { rgbOptions: { separator: "," } }>
);

expectType<"#000">({} as Color<"#000">);
expectType<never>({} as Color<"#z00">);
expectType<"#0000">({} as Color<"#0000">);
expectType<never>({} as Color<"#z000">);
expectType<never>({} as Color<"#00000">);
expectType<"#000000">({} as Color<"#000000">);
expectType<never>({} as Color<"#z00000">);
expectType<never>({} as Color<"#0000000">);
expectType<"#00000000">({} as Color<"#00000000">);
expectType<never>({} as Color<"#z0000000">);

expectType<"hsl(10, 50%, 23%)">({} as Color<"hsl(10, 50%, 23%)">);
expectType<"hsl(10,50%,23%)">(
  {} as Color<"hsl(10,50%,23%)", { hslOptions: { separator: "," } }>
);
expectType<never>({} as Color<"hsl(780, 150%, 23%)">);
expectType<never>({} as Color<"hsl(100, 150%, 23%)">);
expectType<never>({} as Color<"hsl(100, 100%, 23.4%)">);
expectType<never>({} as Color<"hsl(100, 100%, 420%)">);

expectType<true>({} as IsRGB<"rgb(1, 1, 1)">);
expectType<false>({} as IsRGB<"rgb(400, 1, 1)">);
expectType<false>({} as IsRGB<"rgb(1, 400, 1)">);
expectType<false>({} as IsRGB<"rgb(1, 1, 400)">);
expectType<false>({} as IsRGB<"rgb(1, 1, 4.4)">);
expectType<true>({} as IsRGB<"rgb(1,1,4)", { separator: "," }>);

expectType<true>({} as IsHEX<"#000">);
expectType<false>({} as IsHEX<"#z00">);
expectType<true>({} as IsHEX<"#0000">);
expectType<false>({} as IsHEX<"#z000">);
expectType<false>({} as IsHEX<"#00000">);
expectType<true>({} as IsHEX<"#000000">);
expectType<false>({} as IsHEX<"#z00000">);
expectType<false>({} as IsHEX<"#0000000">);
expectType<true>({} as IsHEX<"#00000000">);
expectType<false>({} as IsHEX<"#z0000000">);

expectType<true>({} as IsHSL<"hsl(10, 50%, 23%)">);
expectType<true>({} as IsHSL<"hsl(10,50%,23%)", { separator: "," }>);
expectType<true>({} as IsHSL<"hsl(720, 50%, 23%)">);
expectType<false>({} as IsHSL<"hsl(100, 150%, 23%)">);
expectType<false>({} as IsHSL<"hsl(100, 100%, 23.4%)">);
expectType<false>({} as IsHSL<"hsl(100, 100%, 420%)">);

expectType<true>({} as IsColor<"rgb(1, 1, 1)">);
expectType<false>({} as IsColor<"rgb(400, 1, 1)">);
expectType<false>({} as IsColor<"rgb(1, 400, 1)">);
expectType<false>({} as IsColor<"rgb(1, 1, 400)">);
expectType<false>({} as IsColor<"rgb(1, 1, 4.4)">);
expectType<true>(
  {} as IsColor<"rgb(1,1,4)", { rgbOptions: { separator: "," } }>
);

expectType<true>({} as IsColor<"#000">);
expectType<false>({} as IsColor<"#z00">);
expectType<true>({} as IsColor<"#0000">);
expectType<false>({} as IsColor<"#z000">);
expectType<false>({} as IsColor<"#00000">);
expectType<true>({} as IsColor<"#000000">);
expectType<false>({} as IsColor<"#z00000">);
expectType<false>({} as IsColor<"#0000000">);
expectType<true>({} as IsColor<"#00000000">);
expectType<false>({} as IsColor<"#z0000000">);

expectType<true>({} as IsColor<"hsl(10, 50%, 23%)">);
expectType<true>(
  {} as IsColor<"hsl(10,50%,23%)", { hslOptions: { separator: "," } }>
);
expectType<false>({} as IsColor<"hsl(620, 540%, 23%)">);
expectType<false>({} as IsColor<"hsl(100, 150%, 23%)">);
expectType<false>({} as IsColor<"hsl(100, 100%, 23.4%)">);
expectType<false>({} as IsColor<"hsl(100, 100%, 420%)">);

expectType<true>({} as IfRGB<"rgb(1, 1, 1)">);
expectType<"true">({} as IfRGB<"rgb(1, 1, 1)", DefaultRGBOptions, "true">);
expectType<false>({} as IfRGB<"rgb(400, 1, 1)">);
expectType<"false">(
  {} as IfRGB<"rgb(400, 1, 1)", DefaultRGBOptions, "true", "false">
);

expectType<true>({} as IfHEX<"#000">);
expectType<"true">({} as IfHEX<"#000", "true">);
expectType<false>({} as IfHEX<"#z00">);
expectType<"false">({} as IfHEX<"#z00", "true", "false">);

expectType<true>({} as IfHSL<"hsl(10, 50%, 23%)">);
expectType<"true">({} as IfHSL<"hsl(10, 50%, 23%)", DefaultHSLOptions, "true">);
expectType<false>({} as IfHSL<"hsl(720, 540%, 23%)">);
expectType<"false">(
  {} as IfHSL<"hsl(362, 505%, 23%)", DefaultHSLOptions, "true", "false">
);

expectType<true>({} as IfColor<"rgb(1, 1, 1)">);
expectType<"true">({} as IfColor<"rgb(1, 1, 1)", DefaultColorOptions, "true">);
expectType<false>({} as IfColor<"rgb(400, 1, 1)">);
expectType<"false">(
  {} as IfColor<"rgb(400, 1, 1)", DefaultColorOptions, "true", "false">
);
