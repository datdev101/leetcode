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

function checkTestcases(
  dto: {
    input: number;
    expected: boolean;
  }[]
) {
  for (let i = 0; i < dto.length; i++) {
    const testcase = dto[i];
    const result = testcase.expected === isHappy(testcase.input);
    if (!result) throw new Error(`Test ${i + 1} fail`);
  }
  console.log("All test passed");
}

checkTestcases([
  {
    input: 19,
    expected: true,
  },
  {
    input: 2,
    expected: false,
  },
  {
    input: 7,
    expected: true,
  },
]);
