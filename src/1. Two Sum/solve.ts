import { checkTestcases } from "../_utils/helper";

function twoSum(nums: number[], target: number): number[] {
  const mapper = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (mapper.has(target - nums[i])) return [i, mapper.get(target - nums[i])!];
    mapper.set(nums[i], i);
  }

  return [-1, -1];
}

checkTestcases(
  [
    {
      input: [[2, 7, 11, 15], 9],
      expected: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      expected: [1, 2],
    },
    {
      input: [[3, 3], 6],
      expected: [0, 1],
    },
  ],
  twoSum,
  (a, b) => JSON.stringify(a.sort()) == JSON.stringify(b.sort())
);
