import { checkTestcases } from "../_utils/helper";

function wordBreak(s: string, wordDict: string[]): boolean {
  const visited = new Map<number, boolean>();

  function dfs(start: number) {
    if (visited.has(start)) return visited.get(start)!;
    if (start == s.length) {
      return true;
    }

    let result = false;
    for (const word of wordDict) {
      if (s.slice(start).startsWith(word)) {
        if (dfs(start + word.length)) {
          result = true;
          break;
        }
      }
    }

    visited.set(start, result);
    return result;
  }

  return dfs(0);
}

checkTestcases(
  [
    {
      input: ["leetcode", ["leet", "code"]],
      expected: true,
    },
    {
      input: ["applepenapple", ["apple", "pen"]],
      expected: true,
    },
    {
      input: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
      expected: false,
    },
  ],
  wordBreak
);
