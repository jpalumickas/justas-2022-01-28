const spaces = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40,
  44, 48, 52, 56, 60, 64, 72, 80, 96, 104, 112, 0.25, 0.5, 1.5, 2.5, 3.5,
];
const multiplier = 4;

type Result = {
  [key: string]: number;
};

export const space = spaces.reduce((result: Result, px) => {
  result[px] = px * multiplier;
  return result;
}, {});
