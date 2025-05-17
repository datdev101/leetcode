import { checkTestcases } from "../_utils/helper";

function lexicalOrder(n: number): number[] {
  const result: number[] = [];

  function dfs(path: number) {
    result.push(path);

    for (let i = 0; i < 10; i++) {
      const nextNum = path * 10 + i;
      if (nextNum > n) break;
      dfs(nextNum);
    }
  }

  for (let i = 1; i < 10; i++) {
    if (i > n) break;
    dfs(i);
  }

  return result;
}

checkTestcases(
  [
    {
      input: [13],
      expected: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      input: [2],
      expected: [1, 2],
    },
  ],
  lexicalOrder,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
