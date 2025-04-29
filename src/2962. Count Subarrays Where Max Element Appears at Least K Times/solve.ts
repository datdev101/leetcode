import { checkTestcases } from "../_utils/helper";

function countSubarrays(nums: number[], k: number): number {
  let maxNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maxNum < nums[i]) maxNum = nums[i];
  }

  let result = 0;

  for (let right = 0, left = 0, validCount = 0; right < nums.length; right++) {
    if (nums[right] == maxNum) {
      validCount++;
    }

    while (left <= right && validCount == k) {
      result += nums.length - right;
      if (nums[left++] == maxNum) {
        validCount--;
      }
    }
  }

  return result;
}

checkTestcases(
  [
    {
      input: [[1, 3, 2, 3, 3], 2],
      expected: 6,
    },
    {
      input: [[1, 4, 2, 1], 3],
      expected: 0,
    },
  ],
  countSubarrays
);
