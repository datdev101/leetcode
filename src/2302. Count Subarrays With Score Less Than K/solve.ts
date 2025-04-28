import { checkTestcases } from "../_utils/helper";

function countSubarrays(nums: number[], k: number): number {
  let result = 0;
  
  for (let right = 0, sum = 0, left = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum * (right - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }

    result += right - left + 1;
  }

  return result;
}

checkTestcases(
  [
    {
      input: [[2, 1, 4, 3, 5], 10],
      expected: 6,
    },
    {
      input: [[1, 1, 1], 5],
      expected: 5,
    },
  ],
  countSubarrays
);
