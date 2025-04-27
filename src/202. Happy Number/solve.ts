import { checkTestcases } from "../_utils/helper";

function sumOfDigits(n: number) {
  let result = 0;
  while (n > 0) {
    const remainder = n % 10;
    result += remainder ** 2;
    n = (n - remainder) / 10;
  }
  return result;
}

function isHappy(n: number, cache?: Set<number>): boolean {
  if (n == 0) return false;
  if (n == 1) return true;

  if (!cache) cache = new Set<number>();

  const sum = sumOfDigits(n);
  if (cache.has(sum)) return false;

  cache.add(sum);
  return isHappy(sum, cache);
}

checkTestcases(
  [
    {
      input: [19],
      expected: true,
    },
    {
      input: [2],
      expected: false,
    },
    {
      input: [7],
      expected: true,
    },
  ],
  isHappy
);
