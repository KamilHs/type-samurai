const seriesIncrementedBy5 = (upperLimit: number): number[] =>
  Array.from({ length: Math.floor(upperLimit / 5) + 1 }).map(
    (_, i) => (i + 1) * 5
  );

