import { PathToFields } from "../src/path-to-fields";
import { expectType } from "tsd-lite";

expectType<"a" | "b.c" | "b.d">(
  {} as PathToFields<{
    a: number;
    b: {
      c: string;
      d: boolean;
    };
  }>
);

expectType<"a" | "b.c" | "b.d">(
  {} as PathToFields<
    {
      a: number;
      b: {
        c: string;
        d: boolean;
      };
    },
    {
      format: "dot";
    }
  >
);

expectType<["a"] | ["b", "c"] | ["b", "d"]>(
  {} as PathToFields<
    {
      a: number;
      b: {
        c: string;
        d: boolean;
      };
    },
    {
      format: "array";
    }
  >
);

expectType<"a.b.c.d.e.f.g.h.i.j">(
  {} as PathToFields<{
    a: {
      b: {
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: {
                      j: "string";
                      k: {
                        l: string;
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  }>
);

expectType<["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]>(
  {} as PathToFields<
    {
      a: {
        b: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: "string";
                        k: {
                          l: string;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    },
    {
      format: "array";
    }
  >
);

expectType<"a.b.c.d.e.f.g.h.i.j" | "a.b.c.d.e.f.g.h.i.k.l">(
  {} as PathToFields<
    {
      a: {
        b: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: "string";
                        k: {
                          l: string;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    },
    {
      limit: 11;
    }
  >
);

expectType<never>({} as PathToFields<{}>);
expectType<never>(
  {} as PathToFields<
    {
      a: string;
    },
    { limit: 0 }
  >
);

expectType<"d" | "a.b">(
  {} as PathToFields<
    {
      d: string;
      ignored: string;
      a: {
        b: string;
        ignored: string;
      };
      e: {
        e: {
          f: {
            ignored: string;
          };
        };
      };
    },
    {
      ignoredKeys: "ignored";
    }
  >
);

expectType<"a">(
  {} as PathToFields<
    {
      a: boolean;
      b: {
        c: number;
        d: string;
        e: "";
      };
      d: string;
    },
    {
      ignoredTypes: string | number;
    }
  >
);

expectType<"a" | "b" | "d">(
  {} as PathToFields<
    {
      a: boolean;
      b: {
        c: number;
        d: string;
        e: "";
      };
      d: string;
    },
    {
      stopTypes: {
        c: number;
        d: string;
        e: "";
      };
    }
  >
);

expectType<`arr.${number}`>({} as PathToFields<{ arr: number[] }>);
expectType<`arr.${number}.a`>({} as PathToFields<{ arr: { a: string }[] }>);
expectType<`arr.${number}.a`>(
  {} as PathToFields<
    { arr: { a: string }[] },
    {
      arrayIndexing: {
        exactIndexes: true;
      };
    }
  >
);

expectType<"arr.0.a" | "arr.0.b" | "arr.1.c">(
  {} as PathToFields<
    {
      arr: [
        {
          a: string;
          b: number;
        },
        {
          c: boolean;
        }
      ];
    },
    {
      arrayIndexing: {
        exactIndexes: true;
      };
    }
  >
);

expectType<
  | "arr.1.c"
  | `arr.0.a.${number}`
  | "arr.0.b.0"
  | "arr.0.b.1"
  | "arr.0.b.2"
  | `arr.0.c.${number}.sub`
  | "arr.0.d.0.e"
  | "arr.0.d.1.f"
>(
  {} as PathToFields<
    {
      arr: [
        {
          a: string[];
          b: [1, 2, 3];
          c: {
            sub: string;
          }[];
          d: [
            {
              e: string;
            },
            {
              f: number;
            }
          ];
        },
        {
          c: boolean;
        }
      ];
    },
    {
      arrayIndexing: {
        exactIndexes: true;
      };
    }
  >
);

