import { checkTestcases } from "../_utils/helper";

function maximalSquare(matrix: string[][]): number {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  const dp = new Array(rowSize).fill(0).map(() => new Array(colSize).fill(0));
  let maxEdge = 0;

  for (let i = 0; i < colSize; i++) {
    dp[0][i] = matrix[0][i];
    maxEdge = Math.max(dp[0][i], maxEdge);
  }

  for (let i = 0; i < rowSize; i++) {
    dp[i][0] = matrix[i][0];
    maxEdge = Math.max(dp[i][0], maxEdge);
  }

  for (let row = 1; row < rowSize; row++) {
    for (let col = 1; col < colSize; col++) {
      if (matrix[row][col] == "1") {
        dp[row][col] =
          1 +
          Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]);
        maxEdge = Math.max(maxEdge, dp[row][col]);
      }
    }
  }

  return maxEdge * maxEdge;
}

checkTestcases(
  [
    {
      input: [
        [
          ["1", "0", "1", "0", "0"],
          ["1", "0", "1", "1", "1"],
          ["1", "1", "1", "1", "1"],
          ["1", "0", "0", "1", "0"],
        ],
      ],
      expected: 4,
    },
    {
      input: [
        [
          ["0", "1"],
          ["1", "0"],
        ],
      ],
      expected: 1,
    },
    {
      input: [[["0"]]],
      expected: 0,
    },
  ],
  maximalSquare
);
