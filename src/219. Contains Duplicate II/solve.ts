import { checkTestcases } from "../_utils/helper";

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapper = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (mapper.has(nums[i]) && i - mapper.get(nums[i])! <= k) return true;
    mapper.set(nums[i], i);
  }

  return false;
}

checkTestcases(
  [
    {
      input: [[1, 2, 3, 1], 3],
      expected: true,
    },
    {
      input: [[1, 0, 1, 1], 1],
      expected: true,
    },
    {
      input: [[1, 2, 3, 1, 2, 3], 2],
      expected: false,
    },
  ],
  containsNearbyDuplicate
);
