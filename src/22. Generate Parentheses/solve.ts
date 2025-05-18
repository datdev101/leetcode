import { checkTestcases } from "../_utils/helper";

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function dfs(countLeft: number, countRight: number, path: string) {
    if (countLeft == countRight && countLeft == n) {
      result.push(path);
      return;
    }

    if (countLeft < n) {
      dfs(countLeft + 1, countRight, path + "(");
    }
    if (countRight < countLeft) {
      dfs(countLeft, countRight + 1, path + ")");
    }
  }

  dfs(0, 0, "");
  return result;
}

checkTestcases(
  [
    {
      input: [3],
      expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
    {
      input: [1],
      expected: ["()"],
    },
  ],
  generateParenthesis,
  (a, b) => JSON.stringify(a.sort()) == JSON.stringify(b.sort())
);
