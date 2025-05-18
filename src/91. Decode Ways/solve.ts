import { checkTestcases } from "../_utils/helper";

function numDecodings(s: string): number {
  const visited = new Map<number, number>();

  function dfs(start: number): number {
    if (visited.has(start)) return visited.get(start)!;
    if (start == s.length) return 1;
    if (s[start] == "0") return 0;

    // Case split 1 digit
    let ways = dfs(start + 1);

    // Case split 2 digit
    if (start + 2 <= s.length) {
      const num = Number(s.slice(start, start + 2));
      if (num >= 10 && num <= 26) {
        ways += dfs(start + 2);
      }
    }

    visited.set(start, ways);
    return ways;
  }

  return dfs(0);
}

checkTestcases(
  [
    {
      input: ["12"],
      expected: 2,
    },
    {
      input: ["226"],
      expected: 3,
    },
    {
      input: ["06"],
      expected: 0,
    },
  ],
  numDecodings
);
