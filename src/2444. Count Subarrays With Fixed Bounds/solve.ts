import { checkTestcases } from "../_utils/helper";

function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let maxI = -1,
    minI = -1,
    start = -1,
    result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) start = i;
    if (nums[i] == minK) minI = i;
    if (nums[i] == maxK) maxI = i;

    result += Math.max(0, Math.min(minI, maxI) - start);
  }

  return result;
}

checkTestcases(
  [
    {
      input: [[1, 3, 5, 2, 7, 5], 1, 5],
      expected: 2,
    },
    {
      input: [[1, 1, 1, 1], 1, 1],
      expected: 10,
    },
  ],
  countSubarrays
);
