import { checkTestcases } from "../_utils/helper";

function minimumTotal(triangle: number[][]): number {
  const n = triangle.length;
  if (n == 1) return triangle[0][0];

  const dp = Array(2)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < triangle[n - 1].length; i++) {
    dp[1][i] = triangle[n - 1][i];
  }

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      dp[0][col] = triangle[row][col] + Math.min(dp[1][col], dp[1][col + 1]);
    }

    for (let i = 0; i < n; i++) {
      dp[1][i] = dp[0][i];
    }
  }

  return dp[0][0];
}

checkTestcases(
  [
    {
      input: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]],
      expected: 11,
    },
    {
      input: [[[-10]]],
      expected: -10,
    },
  ],
  minimumTotal
);
