import { checkTestcases } from "../_utils/helper";

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result = [];
  let [startTime, endTime] = newInterval;
  let i = 0;

  for (; i < intervals.length; i++) {
    if (intervals[i][1] < startTime) {
      result.push([...intervals[i]]);
    } else {
      startTime = Math.min(startTime, intervals[i][0]);
      break;
    }
  }

  for (; i < intervals.length; i++) {
    if (intervals[i][0] <= endTime) {
      endTime = Math.max(intervals[i][1], endTime);
    } else {
      break;
    }
  }

  result.push([startTime, endTime]);

  for (; i < intervals.length; i++) {
    result.push([...intervals[i]]);
  }

  return result;
}

checkTestcases(
  [
    {
      input: [
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ],
      expected: [
        [1, 5],
        [6, 9],
      ],
    },
    {
      input: [
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ],
      expected: [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    },
  ],
  insert,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
