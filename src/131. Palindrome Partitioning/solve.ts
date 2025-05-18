import { checkTestcases } from "../_utils/helper";

function isPalindrome(s: string) {
  let left = 0,
    right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

function partition(s: string): string[][] {
  const result: string[][] = [];

  function dfs(start: number, path: string[]) {
    if (start >= s.length) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const prefix = s.substring(start, i + 1);
      if (isPalindrome(prefix)) {
        path.push(prefix);
        dfs(i + 1, path);
        path.pop();
      }
    }
  }

  dfs(0, []);

  return result;
}

checkTestcases(
  [
    {
      input: ["aab"],
      expected: [
        ["a", "a", "b"],
        ["aa", "b"],
      ],
    },
    {
      input: ["a"],
      expected: [["a"]],
    },
  ],
  partition,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
