import { checkTestcases } from "../_utils/helper";

function longestConsecutive(nums: number[]): number {
  const UNVISITED = -1;
  const mapper = new Map<number, number>();

  for (const num of nums) {
    mapper.set(num, UNVISITED);
  }

  let maxLength = 0;

  for (const num of nums) {
    if (mapper.get(num) !== UNVISITED) continue;

    let length = 1;
    let current = num;

    while (mapper.has(current + 1)) {
      current += 1;

      const nextVal = mapper.get(current);
      if (nextVal === UNVISITED) {
        length += 1;
        mapper.set(current, length);
      } else {
        length += nextVal!;
        break;
      }
    }

    mapper.set(num, length);
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

checkTestcases(
  [
    {
      input: [[100, 4, 200, 1, 3, 2]],
      expected: 4,
    },
    {
      input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
      expected: 9,
    },
    {
      input: [[1, 0, 1, 2]],
      expected: 3,
    },
  ],
  longestConsecutive
);
