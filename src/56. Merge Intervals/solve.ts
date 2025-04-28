import { checkTestcases } from "../_utils/helper";

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let [start, end] = intervals[0];
  const result: number[][] = [];

  for (let i = 1; i < intervals.length; i++) {
    const [iStart, iEnd] = intervals[i];
    if (start <= iStart && iStart <= end) {
      end = Math.max(end, iEnd);
    } else {
      result.push([start, end]);
      start = iStart;
      end = iEnd;
    }
  }

  result.push([start, end]);
  return result;
}

checkTestcases(
  [
    {
      input: [
        [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ],
      ],
      expected: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },

    {
      input: [
        [
          [1, 4],
          [4, 5],
        ],
      ],
      expected: [[1, 5]],
    },
  ],
  merge,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
