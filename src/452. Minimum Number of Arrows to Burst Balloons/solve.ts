import { checkTestcases } from "../_utils/helper";

function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let result = 1;
  let [start, end] = points[0];

  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    if (start <= point[0] && point[0] <= end) {
      start = Math.max(start, point[0]);
      end = Math.min(end, point[1]);
    } else if (end < point[1]) {
      result++;
      [start, end] = point;
    }
  }

  return result;
}

checkTestcases(
  [
    {
      input: [
        [
          [10, 16],
          [2, 8],
          [1, 6],
          [7, 12],
        ],
      ],
      expected: 2,
    },
    {
      input: [
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
        ],
      ],
      expected: 4,
    },
    {
      input: [
        [
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5],
        ],
      ],
      expected: 2,
    },
  ],
  findMinArrowShots
);
