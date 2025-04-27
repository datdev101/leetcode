import { checkTestcases } from "../_utils/helper";

function countSubarrays(nums: number[]): number {
  let result = 0;

  for (let i = 2; i < nums.length; i++) {
    const [first, second, third] = [nums[i - 2], nums[i - 1], nums[i]];
    if ((first + third) << 1 == second) result++;
  }

  return result;
}

checkTestcases(
  [
    {
      input: [[1, 2, 1, 4, 1]],
      expected: 1,
    },
    {
      input: [[1, 1, 1]],
      expected: 0,
    },
  ],
  countSubarrays
);
