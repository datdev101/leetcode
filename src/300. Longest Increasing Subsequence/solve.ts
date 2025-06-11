import { checkTestcases } from "../_utils/helper";

function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let maxLen = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLen = Math.max(maxLen, dp[j]);
      }
    }
    dp[i] = maxLen + 1;
    result = Math.max(result, dp[i]);
  }

  return result;
}

// nlogn
function lengthOfLIS_2(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  let result = 1;

  function bs(nums: number[], size: number, target: number) {
    let left = 0;
    let right = size;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }

  for (let i = 1; i < nums.length; i++) {
    const index = bs(dp, result, nums[i]);
    dp[index] = nums[i];
    if (index == result) {
      result++;
    }
  }

  return result;
}

checkTestcases(
  [
    {
      input: [[10, 9, 2, 5, 3, 7, 101, 18]],
      expected: 4,
    },
    {
      input: [[0, 1, 0, 3, 2, 3]],
      expected: 4,
    },
    {
      input: [[7, 7, 7, 7, 7, 7, 7]],
      expected: 1,
    },
  ],
  lengthOfLIS
);
