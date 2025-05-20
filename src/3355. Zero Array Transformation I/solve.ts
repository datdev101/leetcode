import { checkTestcases } from "../_utils/helper";

function isZeroArray(nums: number[], queries: number[][]): boolean {
  const diffArr = Array(nums.length + 1).fill(0);

  for (const [l, r] of queries) {
    diffArr[l] -= 1;
    diffArr[r + 1] += 1;
  }

  let prefix = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix += diffArr[i];
    const sum = nums[i] + prefix;
    // there is no change to make sum=0 if the current prefix not good enough
    if (sum > 0) return false;
  }

  return true;
}

checkTestcases(
  [
    {
      input: [[1, 0, 1], [[0, 2]]],
      expected: true,
    },
    {
      input: [
        [4, 3, 2, 1],
        [
          [1, 3],
          [0, 2],
        ],
      ],
      expected: false,
    },
  ],
  isZeroArray
);
