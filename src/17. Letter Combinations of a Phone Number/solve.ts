import { checkTestcases } from "../_utils/helper";

function letterCombinations(digits: string): string[] {
  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const result: string[] = [];

  function dfs(startDigit: number, path: string[]) {
    if (startDigit >= digits.length) {
      result.push(path.join(""));
      return;
    }

    const digit = digits[startDigit];
    for (let i = 0; i < map[digit].length; i++) {
      path.push(map[digit][i]);
      dfs(startDigit + 1, path);
      path.pop();
    }
  }

  if (digits.length) dfs(0, []);

  return result;
}

checkTestcases(
  [
    {
      input: ["23"],
      expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
      input: [""],
      expected: [],
    },
    {
      input: ["2"],
      expected: ["a", "b", "c"],
    },
  ],
  letterCombinations,
  (a, b) => JSON.stringify(a.sort()) == JSON.stringify(b.sort())
);
